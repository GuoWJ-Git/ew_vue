<template>
  <el-table-column v-bind="column">
    <template #default="scope">
      <!-- render -->
      <free-render v-if="column.render" :scope="scope" :render="column.render" />

      <!-- component -->
      <component
        :is="column.component"
        v-if="column.component"
        v-bind="getComponentAttr(scope, column)"
      />

      <!-- 嵌套表格 -->
      <template v-if="column.children">
        <free-column
          v-for="(col, index) in column.children"
          :key="col.prop || index"
          :column="col"
        />
      </template>

      <!-- operator -->
      <template v-if="column.operator">
        <free-button :scope="scope" :column="column" :operator="column.operator" />
      </template>
    </template>
  </el-table-column>
</template>

<script lang="ts">
import { defineComponent, watchEffect } from 'vue';

import FreeButton from '@/components/free-button';
import FreeRender from '@/components/free-render';

import CellForced from './CellForced';

export default defineComponent({
  name: 'FreeColumn',
  components: {
    FreeRender,
    FreeButton,
  },

  props: {
    column: {
      type: Object,
      default: () => ({}),
    },
  },

  setup(props) {
    const renderColumn = () => {
      const { column } = props;
      // 多选：selection / 索引：index / 展开的按钮：expand
      if (column.type) {
        if (column.renderHeader) {
          column.renderHeader = column.renderHeader || CellForced[column.type].renderHeader;
        }
        column.render = column.render || CellForced[column.type].renderCell;
      }

      // formatter content
      if (column.formatter) {
        column.render = (scope) => {
          if (scope?.column?.formatter) {
            return scope.column.formatter(
              scope.row,
              scope.column,
              scope.row[scope.column.property],
              scope.$index
            );
          }
          return null;
        };
      }

      // Render to text
      if (!column.render) {
        column.render = (scope) => {
          if (scope?.row && scope?.column) {
            const currentTxt = scope.row[scope.column.property];
            return currentTxt === undefined ? currentTxt : `${currentTxt}`;
          }
          return null;
        };
      }

      return column;
    };

    watchEffect(renderColumn);

    const getComponentAttr = ({ row, column }, col) => {
      const props = { row, col, column, ...col.event, ...col.props };
      return props;
    };

    return {
      getComponentAttr,
    };
  },
});
</script>
