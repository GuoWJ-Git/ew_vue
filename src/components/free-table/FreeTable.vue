<template>
  <div class="free-table">
    <el-table ref="tableRef" :data="data" v-bind="$attrs">
      <template v-for="item in tbColumns">
        <el-table-column v-if="item.slot" v-bind="item" :key="item.prop">
          <template #default="scope">
            <slot :name="item.prop" v-bind="scope"></slot>
          </template>
        </el-table-column>

        <free-column v-else :key="item.label" :column="item" />
      </template>

      <template #empty>
        <slot v-if="$slots.empty" name="empty"></slot>
        <el-empty v-else :description="t('components.components.freeTable.noData')"></el-empty>
      </template>

      <template #append>
        <slot name="append"></slot>
      </template>
    </el-table>

    <template v-if="pagination">
      <free-pagination v-if="data.length > 0 && $attrs.total" v-bind="$attrs" />
    </template>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, PropType, ref } from 'vue';

import FreePagination from '@/components/free-pagination';
import { useI18n } from '@/hooks/web/useI18n';

import FreeColumn from './FreeColumn.vue';

export interface ColumnItem {
  label: string;
  prop: string;
  children?: Array<ColumnItem>;
  [key: string]: unknown;
}

type ColumnProps = Partial<ColumnItem>;

export default defineComponent({
  name: 'FreeTable',

  components: {
    FreePagination,
    FreeColumn,
  },

  inheritAttrs: false,

  props: {
    data: {
      type: Array,
      default: () => [],
    },
    column: {
      type: Array as PropType<ColumnItem[]>,
      default: () => [],
    },
    columnProps: {
      type: Object as PropType<ColumnProps>,
      default: () => ({}),
    },
    pagination: {
      type: Boolean,
      default: false,
    },
  },

  setup(props) {
    const { t } = useI18n();
    const tableRef = ref();
    const tbColumns = computed(() => {
      const { column, columnProps } = props;
      return column.map((col) => Object.assign({}, columnProps, col));
    });

    return {
      t,
      tableRef,
      tbColumns,
    };
  },
});
</script>

<style lang="scss" scoped>
// tighten the cell height, can be modified according to the prototype
.el-table {
  font-size: 14px;
  border-radius: 10px;
  box-shadow: 0 0 0 1px var(--border-color);

  :deep(th) {
    padding: 14px 0;

    .cell {
      color: rgba(54, 54, 54, 1);
    }
  }

  :deep(td) {
    padding: 5px 0;
  }
}

:deep .el-table thead.is-group th {
  background: none;
}

:deep .el-table--striped .el-table__body tr.el-table__row--striped td {
  background-color: rgba(229, 240, 255, 0.2);
}

:deep .el-table__body tr.current-row > td {
  background-color: var(--systemThemeColorActive);
}
</style>
