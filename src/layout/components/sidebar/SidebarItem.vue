<template>
  <el-submenu v-if="!item.hideChildrenInMenu && item.children?.length" :index="item.path">
    <template #title>
      <free-icon v-if="item?.icon" :name="item?.icon" />
      <span>{{ item.title }}</span>
    </template>
    <template v-for="submenuItem in item.children" :key="submenuItem.path">
      <sidebar-item :item="submenuItem" />
    </template>
  </el-submenu>
  <el-menu-item v-else :index="item.path"  v-show="!item.hideMenu">
    <free-icon v-if="item?.icon || item?.meta.icon" :name="item?.icon || item?.meta.icon" />
    <template #title>
      <span>{{ item.title }}</span>
    </template>
  </el-menu-item>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'SidebarItem',
  props: {
    item: {
      type: Object,
      default: () => ({}),
    },
  },
});
</script>
