<template>
  <el-radio-group v-bind="$attrs">
    <el-radio
      v-for="(item, index) in options"
      :key="item.id || index"
      :label="item.value"
      :disabled="item.disabled"
    >
      <free-render v-if="render" :scope="item" :render="render" />
      <template v-else>
        {{ item.label }}
      </template>
    </el-radio>
  </el-radio-group>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';

import FreeRender from '@/components/free-render';

import type { OptionItem } from './types';

export default defineComponent({
  name: 'FreeRadio',
  components: {
    FreeRender,
  },

  props: {
    render: {
      type: Function || null,
      default: null
    },
    options: {
      type: Array as PropType<OptionItem[]>,
      default: () => [],
    },
  },
});
</script>
