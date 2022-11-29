import { Router, RouteRecordRaw } from 'vue-router';

import { PAGE_NOT_FOUND_NAME } from '@/router/constant';
// import { RootRoute } from '@/router/routes';
import { PAGE_NOT_FOUND_ROUTE } from '@/router/routes/basic';
import { usePermissionStoreWithOut } from '@/store/modules/permission';

export function createPermissionGuard(router: Router) {
  const permissionStore = usePermissionStoreWithOut();
  router.beforeEach(async (to, from, next) => {
    if (permissionStore.getIsDynamicAddedRoute) {
      next();
      return;
    }
    const routes = await permissionStore.buildRoutesAction();
    routes.forEach((route) => {
      router.addRoute((route as unknown) as RouteRecordRaw);
    });
    router.addRoute((PAGE_NOT_FOUND_ROUTE as unknown) as RouteRecordRaw);
    permissionStore.setDynamicAddedRoute(true);
    if (to.name === PAGE_NOT_FOUND_NAME) {
      next({ path: to.fullPath, replace: true, query: to.query });
    } else {
      const redirectPath = (from.query.redirect || to.path) as string;
      const redirect = decodeURIComponent(redirectPath);
      const nextData = to.path === redirect ? { ...to, replace: true } : { path: redirect };
      next(nextData);
    }
  });
}
