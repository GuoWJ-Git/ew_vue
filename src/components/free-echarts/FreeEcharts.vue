<template>
  <div ref="echartsRef" :style="echartsWrapperStyle"></div>
</template>

<script lang="ts">
import { useDebounceFn } from '@vueuse/core';
import {
  BarChart,
  EffectScatterChart,
  GaugeChart,
  LineChart,
  PieChart,
  ScatterChart,
} from 'echarts/charts';
import {
  DatasetComponent,
  GridComponent,
  LegendComponent,
  TitleComponent,
  ToolboxComponent,
  TooltipComponent,
  TransformComponent,
} from 'echarts/components';
import * as echarts from 'echarts/core';
import { UniversalTransition } from 'echarts/features';
import { CanvasRenderer } from 'echarts/renderers';
import { markRaw } from 'vue';
import {
  computed,
  defineComponent,
  nextTick,
  onMounted,
  onUnmounted,
  Ref,
  ref,
  StyleValue,
  toRef,
  useAttrs,
  watch,
} from 'vue';

import { ECOption } from './types';

echarts.use([
  BarChart,
  GaugeChart,
  PieChart,
  LineChart,
  ScatterChart,
  CanvasRenderer,
  DatasetComponent,
  GridComponent,
  LegendComponent,
  TitleComponent,
  ToolboxComponent,
  TooltipComponent,
  TransformComponent,
  UniversalTransition,
  EffectScatterChart,
]);

export default defineComponent({
  name: 'FreeEcharts',
  props: {
    options: {
      type: Object as PropType<ECOption>,
      default: () => ({}),
    },
    onlyUpdateData: {
      type: Boolean,
      default: false,
    },
  },
  setup(props) {
    const aside = computed(() => document.querySelector('.el-aside'));

    const echartsRef = ref<HTMLDivElement>();

    const myEcharts: Ref<echarts.ECharts | undefined> = ref();

    const echartsWrapperStyle = computed<StyleValue>(() => {
      const attrs = useAttrs();
      return {
        width: (attrs.width || '100%') as string,
        height: (attrs.height || '400px') as string,
      };
    });

    const resizeEcharts = () => {
      const ids = setTimeout(() => {
        myEcharts.value?.resize();
        ids && clearTimeout(ids);
      });
    };

    const initMyEcharts = () => {
      if (!myEcharts.value && echartsRef.value) {
        myEcharts.value = markRaw(echarts.init(echartsRef.value));
      }
    };

    const setEchartsOptions = (onlyUpdateData) => {
      !onlyUpdateData && myEcharts.value?.clear();
      myEcharts.value?.setOption(props.options, !onlyUpdateData);
      resizeEcharts();
    };

    const asideTransitionendHandler = (event: TransitionEvent) => {
      if (event.target === aside.value && event.propertyName === 'width') {
        useDebounceFn(resizeEcharts, 100, { maxWait: 200 })();
      }
    };

    onMounted(() => {
      aside.value?.addEventListener('transitionend', asideTransitionendHandler);
    });

    onUnmounted(() => {
      window.removeEventListener('resize', resizeEcharts);
      aside.value?.removeEventListener('transitionend', asideTransitionendHandler);
    });

    watch(
      toRef(props, 'options'),
      () => {
        nextTick(() => {
          window.removeEventListener('resize', resizeEcharts);
          initMyEcharts();
          setEchartsOptions(props.onlyUpdateData);
          window.addEventListener('resize', resizeEcharts);
        });
      },
      { immediate: true, deep: true }
    );

    return {
      echartsRef,
      echartsWrapperStyle,
      myEcharts,
      setEchartsOptions,
    };
  },
});
</script>
