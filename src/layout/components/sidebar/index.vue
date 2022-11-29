<template>
  <el-scrollbar>
    <el-menu
      menu-trigger="click"
      :default-active="currentActiveKey"
      :mode="mode"
      @select="clickMenuHandler"
    >
      <template v-for="item in menuList" :key="item.path">
        <sidebar-item :item="item" />
      </template>
    </el-menu>
  </el-scrollbar>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';
import { useRoute } from 'vue-router';

import { useGo } from '@/hooks/web/usePage';
import { usePermissionStore } from '@/store/modules/permission';

import SidebarItem from './SidebarItem.vue';

export default defineComponent({
  name: 'Sidebar',
  components: { SidebarItem },
  props: {
    mode: {
      type: String,
      default: 'vertical',
    },
    collapse: {
      type: Boolean,
      default: false,
    },
  },
  setup() {
    const go = useGo();
    const route = useRoute();
    const permissionStore = usePermissionStore();

    const menuList = computed(() => {
      return [...permissionStore.getFrontMenuList];
    });

    const currentActiveKey = computed(() => {
      const { meta, path } = route;
      if (meta?.currentActiveMenu) {
        return meta.currentActiveMenu;
      }
      return path;
    });

    const clickMenuHandler = (path) => {
      go(path);
    };

    return {
      menuList,
      currentActiveKey,
      clickMenuHandler,
    };
  },
});
</script>
