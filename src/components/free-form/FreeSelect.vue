<template>
  <el-select v-bind="$attrs" style="width: 100%;">
    <el-option
      v-for="(item, index) in options"
      :key="item.id || item.value || index"
      :label="item.label"
      :value="item.value"
    >
      <free-render v-if="render" :scope="item" :render="render" />
    </el-option>
  </el-select>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';

import FreeRender from '@/components/free-render';

import type { OptionItem } from './types';

export default defineComponent({
  name: 'FreeSelect',
  components: {
    FreeRender,
  },

  props: {
    render: {
      type: Function || null,
      default: null,
    },
    options: {
      type: Array as PropType<OptionItem[]>,
      default: () => [],
    },
  },
});
</script>
