<template>
  <div class="table-operate">
    <el-tooltip :effect="mode" content="刷新" placement="bottom">
      <div class="refresh">
        <refresh-right @click="refreshHandler" />
      </div>
    </el-tooltip>
    <el-dropdown trigger="click" @command="densityChangeHandler">
      <el-tooltip :effect="mode" content="密度" placement="bottom">
        <div class="density">
          <free-icon :size="15" name="page-density"></free-icon>
        </div>
      </el-tooltip>

      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item
            v-for="item in densityTypeList"
            :key="item.value"
            :command="item.value"
            :class="{ 'active-dropdown': densityClass === item.value }"
          >
            {{ item.label }}
          </el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>

    <el-popover :width="300" trigger="click">
      <template #reference>
        <div class="setting">
          <setting />
        </div>
      </template>
      <template #default>
        <div class="popover-title">
          <el-checkbox
            v-model="checkAll"
            label="列展示"
            size="large"
            :indeterminate="isIndeterminate"
            @change="handleCheckAllChange"
          />
          <el-checkbox
            v-model="checkIndex"
            label="序号列"
            size="large"
            @change="indexClickHandler"
          />
          <el-button style="margin-left: 40px;" type="text" @click="resetCheckHandler">
            重置
          </el-button>
        </div>
        <el-divider />
        <div class="table-checkbox-box">
          <el-checkbox-group
            v-model="checkList"
            class="table-checkbox"
            @change="checkboxGroupChange"
          >
            <div v-for="item in sortTableColumn" :key="item.label" class="checkbox-item">
              <rank class="rank" />
              <el-checkbox :label="item.label" />
            </div>
          </el-checkbox-group>
        </div>
      </template>
    </el-popover>

    <el-tooltip :effect="mode" content="全屏" placement="bottom">
      <div class="full-screen">
        <free-icon v-if="!isFullscreen" :size="18" name="page-full-screen-max" @click="handler" />
        <free-icon v-else :size="18" name="page-full-screen-min" @click="handler" />
      </div>
    </el-tooltip>
  </div>
</template>

<script lang="ts">
import { Rank, RefreshRight, Setting } from '@element-plus/icons';
import { useFullscreen } from '@vueuse/core';
import { cloneDeep, intersectionBy, remove } from 'lodash-es';
import { computed, defineComponent, onMounted, reactive, ref, toRaw, toRefs, watch } from 'vue';

import { useSortable } from '@/hooks/useSortable';
import { useAppStore } from '@/store/modules/app';

import { densityTypeList, indexColumn } from './model';

export default defineComponent({
  name: 'TableOperate',
  components: { RefreshRight, Setting, Rank },
  props: {
    tableColumn: {
      type: Array,
      default: () => [],
    },
    containerRef: {
      type: HTMLElement,
      default: undefined,
    },
  },
  emits: ['onRefresh', 'onDensityChang'],
  setup(props, { emit }) {
    const appStore = useAppStore();
    const mode = computed(() => (appStore.getNightMode ? 'dark' : 'light'));

    const refreshHandler = () => {
      emit('onRefresh');
    };

    const densityClass = ref('compact-table');
    const densityChangeHandler = (value: string) => {
      densityClass.value = value;
      emit('onDensityChang', densityClass.value);
    };

    const realTableColumn = ref<any>(cloneDeep(props.tableColumn));
    const sortTableColumn = ref<any>(cloneDeep(props.tableColumn));

    const checkAll = ref(true);
    const checkIndex = ref(false);
    const checkList = ref(props.tableColumn.map((item: { label: string }) => item.label));
    const isIndeterminate = ref(false);

    const handleCheckAllChange = (val: boolean) => {
      checkList.value = val ? props.tableColumn.map((item: { label: string }) => item.label) : [];
      isIndeterminate.value = false;
    };

    const indexClickHandler = (value) => {
      if (value) {
        realTableColumn.value.splice(0, 0, indexColumn);
        sortTableColumn.value.splice(0, 0, indexColumn);
        checkList.value.splice(0, 0, indexColumn.label);
      } else {
        remove(realTableColumn.value, (n) => n.prop === 'index');
        remove(sortTableColumn.value, (n) => n.prop === 'index');
        remove(checkList.value, (n) => n === 'index');
      }
    };

    const resetCheckHandler = () => {
      checkAll.value = true;
      checkIndex.value = false;
      checkList.value = props.tableColumn.map((item: { label: string }) => item.label);
      sortTableColumn.value = cloneDeep(props.tableColumn);
      realTableColumn.value = cloneDeep(props.tableColumn);
    };

    const checkboxGroupChange = (value: string[]) => {
      const checkedCount = value.length;
      const currentListLength = props.tableColumn.length;
      checkAll.value = checkedCount === currentListLength;
      isIndeterminate.value = checkedCount > 0 && checkedCount < currentListLength;
      const transformArr = value.map((item) => ({ label: item }));
      const arr = intersectionBy(sortTableColumn.value, transformArr, 'label');
      realTableColumn.value = toRaw(arr);
    };

    const initSortable = () => {
      const queryStr = '.table-checkbox ';
      const componentBox = document.querySelector(queryStr);
      const { initSortable: initComponentBoxSortable } = useSortable(componentBox as HTMLElement, {
        animation: 150,
        handle: '.rank',
        onEnd({ newIndex, oldIndex }) {
          const oldArr = cloneDeep(sortTableColumn.value);
          const oldItem = oldArr[oldIndex as number];
          oldArr.splice(oldIndex, 1);
          oldArr.splice(newIndex, 0, oldItem);
          sortTableColumn.value = oldArr;
          const arr = intersectionBy(
            sortTableColumn.value,
            checkList.value.map((item) => ({ label: item })),
            'label'
          );
          realTableColumn.value = toRaw(arr);
        },
      });
      initComponentBoxSortable();
    };

    const fullScreenData = reactive<any>({
      handler: () => {},
      isFullscreen: false,
    });

    watch(
      () => props.containerRef,
      () => {
        const { toggle, isFullscreen } = useFullscreen(props.containerRef);
        fullScreenData.handler = toggle;
        fullScreenData.isFullscreen = isFullscreen;
      }
    );

    onMounted(() => {
      initSortable();
    });

    return {
      mode,
      densityClass,
      densityTypeList,
      checkAll,
      checkIndex,
      checkList,
      isIndeterminate,
      realTableColumn,
      sortTableColumn,
      ...toRefs(fullScreenData),
      refreshHandler,
      densityChangeHandler,
      handleCheckAllChange,
      checkboxGroupChange,
      indexClickHandler,
      resetCheckHandler,
    };
  },
});
</script>

<style lang="scss" scoped>
.table-operate {
  display: flex;
  align-items: center;

  & > div {
    margin-left: 20px;
  }

  .refresh,
  .setting,
  .open {
    width: 18px;
    height: 18px;
  }

  .refresh,
  .density,
  .setting,
  .open,
  .full-screen {
    cursor: pointer;
  }

  .density {
    color: #000;
  }

  :deep .el-dropdown {
    margin-left: 20px;
  }
}

.active-dropdown {
  color: var(--systemThemeColor) !important;
  background-color: var(--systemThemeColorActive) !important;
}

.el-divider {
  margin: 0 0 10px 0 !important;
}

.table-checkbox-box {
  max-height: 300px;
  overflow: auto;
}

.table-checkbox {
  .checkbox-item {
    .rank {
      width: 14px;
      height: 14px;
      margin-right: 10px;
      margin-bottom: -2px;
      font-size: 12px;
      color: #000;
      cursor: move;
    }
  }
}
</style>
