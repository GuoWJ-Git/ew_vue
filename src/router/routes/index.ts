import { PageEnum } from '@/enums/pageEnum';
import Layout from '@/layout/BasicLayout.vue';
import { HOME_PAGE } from '@/router/constant';
import { ErrorRoutes, PAGE_NOT_FOUND_ROUTE } from '@/router/routes/basic';
import { AppRouteModule, AppRouteRecordRaw } from '@/router/types';
import Home from '@/views/Home.vue';

const modules = import.meta.globEager('./modules/**/*.ts');

const routeModuleList: AppRouteModule[] = [];

Object.keys(modules).forEach((key) => {
  const mod = modules[key].default || {};
  const modList = Array.isArray(mod) ? [...mod] : [mod];
  routeModuleList.push(...modList);
});

export const asyncRoutes = [...routeModuleList];

export const RootRoute: AppRouteRecordRaw = {
  path: '/',
  name: HOME_PAGE,
  redirect: PageEnum.BASE_HOME,
  component: Layout,
  meta: {
    title: '首页',
    icon: 'el-icon-s-home',
    hideChildrenInMenu: true,
  },
  children: [
    {
      path: '',
      name: HOME_PAGE,
      meta: { title: '首页', icon: 'el-icon-s-home', currentActiveMenu: '/', affix: true },
      component: Home,
    },
  ],
};

// Basic routing without permission
export const basicRoutes = [RootRoute, ...ErrorRoutes, PAGE_NOT_FOUND_ROUTE];
