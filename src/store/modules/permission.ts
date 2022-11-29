import { defineStore } from 'pinia';
import { toRaw } from 'vue';

import { transformRouteToMenu } from '@/router/helper/menuHelper';
import { asyncRoutes } from '@/router/routes';
import { AppRouteRecordRaw, Menu } from '@/router/types';
import { store } from '@/store';
import { filter } from '@/utils/helper/treeHelper';

import { useUserStore } from './user';

interface PermissionState {
  isDynamicAddedRoute: boolean;
  lastBuildMenuTime: number;
  frontMenuList: Menu[];
}
export const usePermissionStore = defineStore({
  id: 'welllog-micro-permission',
  state: (): PermissionState => ({
    isDynamicAddedRoute: false,
    lastBuildMenuTime: 0,
    frontMenuList: [],
  }),
  getters: {
    getIsDynamicAddedRoute(): boolean {
      return this.isDynamicAddedRoute;
    },
    getLastBuildMenuTime(): number {
      return this.lastBuildMenuTime;
    },
    getFrontMenuList(): Menu[] {
      return this.frontMenuList;
    },
  },
  actions: {
    setDynamicAddedRoute(added: boolean) {
      this.isDynamicAddedRoute = added;
    },

    setLastBuildMenuTime() {
      this.lastBuildMenuTime = new Date().getTime();
    },

    setFrontMenuList(list: Menu[]) {
      this.frontMenuList = list;
    },

    resetState(): void {
      this.isDynamicAddedRoute = false;
      this.lastBuildMenuTime = 0;
      this.frontMenuList = [];
    },

    async buildRoutesAction(): Promise<AppRouteRecordRaw[]> {
      const userStore = useUserStore();
      let routes: AppRouteRecordRaw[] = [];
      const roleList = toRaw(userStore.getRoleList) || [];
      /** roles filter */
      const routeFilter = (route: AppRouteRecordRaw) => {
        const { meta } = route;
        const { roles } = meta || {};
        if (!roles) return true;
        return roleList.some((role) => (roles as Array<string>).includes(role));
      };
      /** ignoreRoute filter */
      const routeRemoveIgnoreFilter = (route: AppRouteRecordRaw) => {
        const { meta } = route;
        const { ignoreRoute } = meta || {};
        return !ignoreRoute;
      };
      routes = filter(asyncRoutes, routeFilter);
      routes = routes.filter(routeFilter);
      const menuList = transformRouteToMenu(routes, true);
      routes = filter(routes, routeRemoveIgnoreFilter);
      routes = routes.filter(routeRemoveIgnoreFilter);
      menuList.sort((a, b) => {
        return ((a.meta?.orderNo as number) || 0) - ((b.meta?.orderNo as number) || 0);
      });
      this.setFrontMenuList(menuList);
      return routes;
    },
  },
});

export function usePermissionStoreWithOut() {
  return usePermissionStore(store);
}
