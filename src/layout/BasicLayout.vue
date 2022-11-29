<template>
  <el-container>
    <el-aside v-if="!isCollapse" width="200px">
      <sidebar />
    </el-aside>
    <el-container direction="vertical">
      <main class="micro-main">
        <router-view v-slot="{ Component }">
          <component :is="Component">
            {{ Component }}
            <slot />
          </component>
        </router-view>
      </main>
    </el-container>
  </el-container>
</template>

<script lang="ts">
import { computed, defineComponent, onMounted, onUnmounted } from 'vue';

import Sidebar from '@/layout/components/sidebar/index.vue';
import { useAppStore } from '@/store/modules/app';
import actions from '@/utils/actions';

export default defineComponent({
  name: 'BasicLayout',
  components: { Sidebar },
  setup() {
    const appStore = useAppStore();
    const isCollapse = computed(() => appStore.getMicroConfig?.isCollapse);

    onMounted(() => {
      actions?.setGlobalState({ microLoading: false });
    });

    onUnmounted(() => {
      actions?.setGlobalState({ microLoading: true });
    });

    return {
      isCollapse,
    };
  },
});
</script>

<style lang="scss" scoped>
.micro-main {
  box-sizing: border-box;
  height: 100%;
}

.el-container {
  height: 100%;
  overflow: hidden;
}

.el-aside {
  height: inherit;
  background-color: #001529;
  transition: all 0.3s ease-in-out;

  .el-scrollbar {
    border-right: 1px solid #f0f0f0;
  }
}

:deep .el-menu {
  height: inherit;
  font-weight: 600;
  background-color: #001529;
  border-right: none;

  &.no-transition {
    transition: none;
  }

  &-item {
    padding-right: 0;
    color: #ffffffb3;
    @include textOverflowEllipsis;

    &:hover {
      background-color: inherit;
    }

    &.is-active {
      color: #fff;
      background-color: #0960bd;
    }

    &-group {
      background-color: #444b51;
    }
  }

  .el-submenu {
    &-item {
      min-width: 0;
    }

    &.is-active {
      & > .el-submenu__title {
        color: #fff;
      }
    }

    &__title {
      color: #ffffffb3;

      &:hover {
        background-color: inherit;
      }

      & > span {
        display: inline-block;
        max-width: calc(100% - 45px);
        @include textOverflowEllipsis;
      }
    }
  }
}
</style>
