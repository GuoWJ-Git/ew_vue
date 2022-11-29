<template>
  <div class="free-button-operator">
    <template v-for="(item, index) in operatorItems">
      <el-button v-if="!item.hidden" :key="index" v-bind="item" @click="item.onClick">
        {{ item.text }}
      </el-button>
    </template>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, PropType } from 'vue';

import { isFunction } from '@/utils/is'

import type { ButtonOperator } from './model';
import { BUTTON_OPERATOR_MAP } from './model';

export default defineComponent({
  name: 'FreeButton',
  props: {
    scope: {
      type: Object,
      default: () => ({}),
    },
    column: {
      type: Object,
      default: () => ({}),
    },
    operator: {
      type: Array as PropType<ButtonOperator[]>,
      default: () => [],
    },
  },

  setup(props) {
    const operatorItems = computed(() => {
      const { operator, scope, column } = props;
      return operator?.map((item) => {
        const btn = BUTTON_OPERATOR_MAP.find((btn) => btn.action === item.action);
        const isDisabled: boolean = isFunction(item.disabled)
          ? scope && item.disabled(scope, column)
          : item.disabled;
        const textValue: string = isFunction(item.text)
          ? scope && item.text(scope, column)
          : item.text;
        const icon = item.icon || btn?.icon;
        const iconValue: string = isFunction(icon) ? scope && icon(scope, column) : icon;
        const hidden = isFunction(item.hidden) ? scope && item.hidden(scope, column) : item.hidden;
        const onClick = () => {
          scope ? item?.click(scope, column) : item?.click();
        };
        return {
          ...btn,
          ...item,
          disabled: isDisabled,
          text: textValue,
          icon: iconValue,
          hidden,
          onClick,
        };
      });
    });

    return { operatorItems };
  },
});
</script>
