<template>
  <div class="three-home">
    <div class="left">
      <div class="title-3d">
        3D轨迹图
      </div>
      <div id="threePlot" class="canvas3d" />
    </div>
    <div class="canvas">
      <div class="title-2d">
        垂直投影
      </div>
      <div id="xplot" class="canvas2d"></div>
      <div class="title-2d">
        水平投影
      </div>
      <div id="yplot" class="canvas2d"></div>
    </div>
  </div>
</template>

<script lang="ts">
import { FillStyle } from '@int/geotoolkit/attributes/FillStyle';
import { LineStyle } from '@int/geotoolkit/attributes/LineStyle';
import { TextStyle } from '@int/geotoolkit/attributes/TextStyle';
import { Plot } from '@int/geotoolkit3d/Plot';
import { Grid } from '@int/geotoolkit3d/scene/grid/Grid';
import { Object3D as O3D } from '@int/geotoolkit3d/scene/Object3D';
import { LogArray } from '@int/geotoolkit3d/scene/well/logarray/LogArray';
import { Mesh, SphereGeometry, Vector3 } from '@int/geotoolkit3d/THREE';
import { Attributes } from '@int/geotoolkit3d/util/Attributes';
import * as echarts from 'echarts';
import { ElMessage } from 'element-plus';
import { defineComponent, onBeforeUnmount, onMounted, ref, watch } from 'vue';

import { extensionPoint, getDrilling } from '@/api/3dFile/index';
import { useAppStore } from '@/store/modules/app';
import { useChooseWellStore } from '@/store/modules/chooseWell';
import { MTLLoader, OBJLoader } from '@/utils/3dObjloader';

export default defineComponent({
  name: '3dWellTrack',
  setup() {
    const X_SCALE = ref(1);
    const Y_SCALE = ref(1);
    const Z_SCALE = ref(1);
    const RADIUS_MIN = ref(30);
    let charts = {};
    let plot = null;
    //创建画布
    const appStore = useAppStore();
    const wellId = ref('');
    const chooseWellStore = useChooseWellStore();
    const wellDetailInfo = ref(chooseWellStore.getChooseWellConfig.chooseWellData);
    watch(chooseWellStore, () => {
      wellId.value = wellDetailInfo.value.wellId;
      init();
    });
    watch(appStore, () => {
      setTimeout(() => {
      }, 500);
    });
    const createPlot = (divElement, lookat, position) => {
      if (plot) {
        plot.dispose();
      }
      plot = new Plot({
        container: document.getElementById(divElement),
        renderer: {
          clearcolor: 'white',
        },
        camera: {
          position: position,
          lookat: lookat.clone(),
        },
        scale: new Vector3(X_SCALE.value, Y_SCALE.value, Z_SCALE.value),
      });
    };
    //创建网格
    const createComplexGrid = (data) => {
      let linestyle = new LineStyle('#ccc');
      let textstyle = new TextStyle('#999');
      let grid = new Grid({
        start: new Vector3(data.xmin, data.ymin, data.zmin),
        end: new Vector3(data.xmax, data.ymax, data.zmax),
        modelStart: new Vector3(data.xmin, data.ymin, data.zmin * -1),
        modelEnd: new Vector3(data.xmax, data.ymax, data.zmax),
        axis: {
          linestyles: {
            x: linestyle,
            y: linestyle,
            z: linestyle,
          },
          textstyles: {
            x: textstyle,
            y: textstyle,
            z: textstyle,
          },
        },
        title: {
          textstyles: {
            x: textstyle,
            y: textstyle,
            z: textstyle,
          },
        },
        grid: {
          linestyles: {
            x: linestyle,
            y: linestyle,
            z: linestyle,
          },
        },
      });
      plot.getRoot().add(grid);
    };
    //
    const changeBit = (positionx, positiony, positionz, angleX, angleY) => {
      new MTLLoader().load(
        '/public/3dFile/drill.mtl',
        (materials) => {
          if (plot.isDisposed()) return;
          materials.preload();
          const loader = new OBJLoader();
          loader.setMaterials(materials);
          loader.load('/public/3dFile/drill.obj', (result) => {
            if (plot.isDisposed()) return;
            const root = plot.getRoot();
            let xangleNum = 0;
            let yangleNum = 0;
            if (angleX) xangleNum = angleX / 180;
            if (angleY) yangleNum = angleY / 180;
            const xAngle = Math.PI / 2; ////Math.PI /2
            const yAngle = Math.PI * xangleNum;
            const zAngle = Math.PI * yangleNum;
            result.scale.set(0.35, 0.35, 0.35);
            result.rotateZ(xAngle);
            result.rotateY(yAngle);
            result.rotateZ(zAngle);
            result.rotateZ(Math.PI);
            result.position.set(positionx, positiony, positionz);
            root.add(result);
          });
        },
        () => {
          if (plot.isDisposed()) return;
        }
      );
    };
    //
    const computeSimpleLogArrayLogData = (count) => {
      const oneMdLogData = [];
      for (let sector = 0; sector < 8; sector++) {
        oneMdLogData.push(Math.cos(sector));
      }
      const logData = [];
      let md = 0;
      const mapFunc = function(e) {
        return Math.sin(md) * e;
      };
      for (; md < count; md++) {
        logData.push(oneMdLogData.map(mapFunc));
      }
      return logData;
    };
    //
    const createTrajectory = (data, color, radiusmin, opacity = 1) => {
      let logArray = new LogArray({
        data: {
          path: {
            x: data.x, // X deviation from well origin
            y: data.y, // Y deviation from well origin
            z: data.z, // Elevation starting a 0
          },
          logarray: computeSimpleLogArrayLogData(data.y.length),
        },
        logarraymin: 0,
        logarraymax: 100,
        colorprovider: color,
        opacity: opacity,
        radiusmin: radiusmin,
      });
      logArray.position.set(data.x[0], data.y[0], 0);
      plot.getRoot().add(logArray);
    };
    //
    const changestabilizer = (positionx, positiony, positionz, angleX, angleY) => {
      new MTLLoader().load(
        '/public/3dFile/stabilizer.mtl',
        (materials) => {
          if (plot.isDisposed()) return;
          materials.preload();
          const loader = new OBJLoader();
          loader.setMaterials(materials);

          // load a resource
          loader.load(
            // resource URL
            '/public/3dFile/stabilizer.obj',
            // Function when resource is loaded
            (result) => {
              if (plot.isDisposed()) return;
              const root = plot.getRoot();
              let xangleNum = 0;
              let yangleNum = 0;
              if (angleX) xangleNum = angleX / 180;
              if (angleY) yangleNum = angleY / 180;
              //const xAngle = Math.PI / 2 ////Math.PI /2
              const yAngle = Math.PI * xangleNum;
              const zAngle = Math.PI * yangleNum;
              result.scale.set(0.5, 0.5, 0.5);
              result.rotateY(yAngle);
              result.rotateZ(zAngle);
              result.position.set(positionx, positiony, positionz);
              root.add(result);
            }
          );
        },
        () => {
          if (plot.isDisposed()) return;
        }
      );
    };
    //
    const addPointSet = (x, y, z) => {
      const g = new SphereGeometry(100, 500, 500);
      const sphere = new Mesh(
        g,
        Attributes.createMeshMaterial(
          new FillStyle({
            color: 'rgba(245,80,101,0.5)',
          })
        )
      );
      sphere.position.copy(new Vector3(x, y, z));
      sphere.name = 'CreatePoint';
      sphere.scale.set(1.25, 1.25, 1.25);
      const object = new O3D();
      object.add(sphere);
      plot.getRoot().add(object);
    };
    //创建容器
    const createScene = async (divElement, data) => {
      let sjgj = data['设计轨迹'];
      const loc = new Vector3(
        (sjgj.xmax + sjgj.xmin) / 2 + 5000,
        (sjgj.ymax + sjgj.ymin) / 2 - 5000,
        (sjgj.zmax + sjgj.zmin) / 2 + 5000
      );
      const lookat = new Vector3(
        (sjgj.xmax + sjgj.xmin) / 2,
        (sjgj.ymax + sjgj.ymin) / 2,
        (sjgj.zmax + sjgj.zmin) / 2
      );
      // const loc = new Vector3(
      //   sjgj.x[mid] - 9000,
      //   sjgj.y[mid] - 5000,
      //   sjgj.z[mid] + 2000
      // );
      // const lookat = new Vector3(
      //   sjgj.x[sjgj.x.length - 1],
      //   sjgj.y[sjgj.y.length - 1],
      //   sjgj.z[sjgj.z.length - 1]
      // );
      //this.addEllipse(          sjgj.xmin,          sjgj.ymin,          sjgj.zmin        )
      createPlot(divElement, lookat, loc);
      createComplexGrid(sjgj);
      for (let i in data) {
        let x1 = data[i].x[data[i].x.length - 2],
          y1 = data[i].y[data[i].y.length - 2],
          z1 = data[i].z[data[i].z.length - 2],
          x2 = data[i].x[data[i].x.length - 1],
          y2 = data[i].y[data[i].y.length - 1],
          z2 = data[i].z[data[i].z.length - 1];
        if ('实钻轨迹' == i) {
          createTrajectory(data[i], '#3A85ff', RADIUS_MIN.value);
          let param1 = {
            one: [x1, y1, z1],
            two: [x2, y2, z2],
            len: 327 * 0.5 - 50,
          };
          try {
            const res1 = await extensionPoint(param1);
            changestabilizer(res1[0], res1[1], res1[2], data[i].angleX, data[i].angleY);
          } catch (error) {
            console.log(error);
          }
          let param2 = {
            one: [x1, y1, z1],
            two: [x2, y2, z2],
            len: 327 * 2 * 0.5 + (327 * 0.5 - 50) - 150,
          };
          try {
            const res2 = await extensionPoint(param2);
            changestabilizer(res2[0], res2[1], res2[2], data[i].angleX, data[i].angleY);
          } catch (error) {
            console.log(error);
          }
          let param3 = {
            one: [x1, y1, z1],
            two: [x2, y2, z2],
            len: 327 * 2 * 0.5 + 327 * 2 * 0.5 + 127 * 2 * 0.5 + 0.1 - 370,
          };
          try {
            const res3 = await extensionPoint(param3);
            changeBit(res3[0], res3[1], res3[2], data[i].angleX, data[i].angleY);
          } catch (error) {
            console.log(error);
          }
        }

        if ('设计轨迹' == i) {
          createTrajectory(data[i], '#3A85ff', RADIUS_MIN.value, 0.3);
          addPointSet(x1, y1, z1);
        }
      }
    };

    const getChart = (id, type, data) => {
      if (!charts[id]) {
        if (id == 'xplot') {
          const xplot = document.getElementById('xplot');
          charts[id] = echarts.init(xplot);
        }
        if (id == 'yplot') {
          const yplot = document.getElementById('yplot');
          charts[id] = echarts.init(yplot);
        }
      } else {
        charts[id].clear();
      }
      let sjgj = data['设计轨迹'];
      let option = {},
        xDataList = [],
        yDataList = [];
      for (let i in data) {
        const x = data[i].x;
        const y = data[i].y;
        const z = data[i].z;
        let xitem = {
          name: i,
          type: 'line',
          showSymbol: false,
          clip: true,
          data: [],
        };
        let yitem = {
          name: i,
          type: 'line',
          showSymbol: false,
          clip: true,
          data: [],
        };
        x.forEach((item, index) => {
          xitem.data.push([item, y[index]]);
          yitem.data.push([item, z[index]]);
        });
        xDataList.push(xitem);
        yDataList.push(yitem);

        if ('设计轨迹' === i) {
          let xtarget = {
            type: 'line',
            symbol: 'circle',
            symbolSize: 20,
            lineStyle: {
              color: '#5470C6',
              width: 0,
              type: 'dashed',
            },
            itemStyle: {
              color: 'rgba(255,0,0,0.4)',
            },
            data: [],
          };
          xtarget.data.push([x[x.length - 1], y[y.length - 1]]);
          let ytarget = {
            type: 'line',
            symbol: 'circle',
            symbolSize: 20,
            lineStyle: {
              color: '#5470C6',
              width: 0,
              type: 'dashed',
            },
            itemStyle: {
              color: 'rgba(255,0,0,0.4)',
            },
            data: [],
          };
          ytarget.data.push([x[x.length - 1], z[z.length - 1]]);
          xDataList.push(xtarget);
          yDataList.push(ytarget);
        }
      }

      if (type == 'x') {
        option = {
          animation: false,
          grid: {
            top: 40,
            left: 50,
            right: 40,
            bottom: 50,
          },
          xAxis: {
            name: 'x',
            minorTick: {
              show: true,
            },
            minorSplitLine: {
              show: true,
            },
          },
          yAxis: {
            name: 'y',
            minorTick: {
              show: true,
            },
            minorSplitLine: {
              show: true,
            },
          },
          dataZoom: [
            {
              show: true,
              type: 'inside',
              filterMode: 'none',
              xAxisIndex: [0],
              startValue: sjgj.xmin,
              endValue: sjgj.xmax,
            },
            {
              show: true,
              type: 'inside',
              filterMode: 'none',
              yAxisIndex: [0],
              startValue: sjgj.ymin,
              endValue: sjgj.ymax,
            },
          ],
          series: xDataList,
        };
      }
      if (type == 'y') {
        option = {
          animation: false,
          grid: {
            top: 40,
            left: 50,
            right: 40,
            bottom: 50,
          },
          xAxis: {
            name: 'x',
            minorTick: {
              show: true,
            },
            minorSplitLine: {
              show: true,
            },
          },
          yAxis: {
            name: 'y',
            minorTick: {
              show: true,
            },
            minorSplitLine: {
              show: true,
            },
          },
          dataZoom: [
            {
              show: true,
              type: 'inside',
              filterMode: 'none',
              xAxisIndex: [0],
              startValue: sjgj.xmin,
              endValue: sjgj.xmax,
            },
            {
              show: true,
              type: 'inside',
              filterMode: 'none',
              yAxisIndex: [0],
              startValue: sjgj.zmin,
              endValue: sjgj.zmax,
            },
          ],
          series: yDataList,
        };
      }
      charts[id].setOption(option);
    };

    const init = async () => {
      const data = {
        wellId: '202012310301306814188792',
      };
      try {
        const drilling = await getDrilling(data);
        if (drilling.code === 200) {
          createScene('threePlot', drilling.data);
          getChart('xplot', 'x', drilling.data);
          getChart('yplot', 'y', drilling.data);
        } else {
          ElMessage.error(drilling?.message ?? '查询失败!');
        }
      } catch (error) {
        console.log(error);
      }
    };

    onMounted(init);

    onBeforeUnmount(() => {
      if (plot) {
        plot.dispose();
      }
      for (let i in charts) {
        charts[i].dispose();
      }
    });

    return {};
  },
});
</script>

<style lang="scss" scoped>
.three-home {
  @include singleCardContainerStyle();
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
  overflow: hidden;
}

.left {
  width: 60%;
  height: 100%;
}

.title-3d {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 40px;
}

.canvas3d {
  width: 100%;
  height: calc(100% - 40px);
  background-color: #fff;
}

.title-2d {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 40px;
}

.canvas {
  display: flex;
  flex-wrap: wrap;
  width: 40%;
  height: 100%;
  background-color: #fff;
}

.canvas2d {
  width: 100%;
  height: calc(50% - 40px);
}
</style>
