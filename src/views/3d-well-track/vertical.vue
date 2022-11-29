<template>
  <div class="echarts-home">
    <div class="title-2d">
      垂直投影
    </div>
    <div id="xplot" class="canvas2d"></div>
  </div>
</template>

<script lang="ts">
import * as echarts from 'echarts';
import { ElMessage } from 'element-plus';
import { defineComponent, onBeforeUnmount, onMounted, ref, watch } from 'vue';

import { getDrilling } from '@/api/3dFile/index';
import { useChooseWellStore } from '@/store/modules/chooseWell';

export default defineComponent({
  name: 'Vertical',
  setup() {
    let charts = null;
    const wellId = ref('');
    const chooseWellStore = useChooseWellStore();
    const wellDetailInfo = ref(chooseWellStore.getChooseWellConfig.chooseWellData);
    watch(chooseWellStore, () => {
      wellId.value = wellDetailInfo.value.wellId;
      init();
    });
    const getChart = (id, type, data) => {
      if (!charts) {
        const xplot = document.getElementById('xplot');
        charts = echarts.init(xplot);
      } else {
        charts.clear();
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
      charts.setOption(option);
    };

    const init = async () => {
      const data = {
        wellId: '202012310301306814188792',
      };
      try {
        const drilling = await getDrilling(data);
        if (drilling.code === 200) {
          getChart('xplot', 'x', drilling.data);
        } else {
          ElMessage.error(drilling?.message ?? '查询失败!');
        }
      } catch (error) {
        console.log(error);
      }
    };

    onMounted(() => {
      wellId.value = wellDetailInfo.value.wellId;
      init();
    });
    onBeforeUnmount(() => {
      charts.dispose();
    });
    return {};
  },
});
</script>

<style lang="scss" scoped>
.echarts-home {
  @include singleCardContainerStyle();
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
  overflow: hidden;

  .title-2d {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 40px;
  }

  .canvas2d {
    width: 100%;
    height: calc(100% - 40px);
  }
}
</style>
