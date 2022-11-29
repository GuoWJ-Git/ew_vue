<template>
  <el-checkbox-group v-bind="$attrs">
    <el-checkbox v-for="(item, index) in options" :key="item.id || index" :label="item.value">
      {{ item.label }}
    </el-checkbox>
  </el-checkbox-group>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';

import type { OptionItem } from './types';

export default defineComponent({
  name: 'FreeCheckbox',
  props: {
    options: {
      type: Array as PropType<OptionItem[]>,
      default: () => [],
    },
  },
});
</script>
