import { qiankunWindow } from 'vite-plugin-qiankun/dist/helper';
import { App } from 'vue';
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

import { basicRoutes } from './routes/index';

// 白名单
const WHITE_NAME_LIST: string[] = [];

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const getRouteNames = (array: any[]) =>
  array.forEach((item) => {
    WHITE_NAME_LIST.push(item.name);
    getRouteNames(item.children || []);
  });

getRouteNames(basicRoutes);

export function resetRouter() {
  router.getRoutes().forEach((route) => {
    const { name } = route;
    if (name && !WHITE_NAME_LIST.includes(name as string)) {
      router.hasRoute(name) && router.removeRoute(name);
    }
  });
}

export const router = createRouter({
  history: createWebHistory(
    qiankunWindow.__POWERED_BY_QIANKUN__ ? '/app-welllog-micro-admin/' : '/welllog-micro-admin/'
  ),
  routes: (basicRoutes as unknown) as RouteRecordRaw[],
  strict: true,
  scrollBehavior: () => ({ left: 0, top: 0 }),
});

export function setupRouter(app: App<Element>) {
  app.use(router);
}

export default router;
