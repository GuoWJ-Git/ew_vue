import { RouteRecordRaw } from 'vue-router';

import router from '@/router';
import { PAGE_NOT_FOUND_ROUTE } from '@/router/routes/basic';
import { usePermissionStoreWithOut } from '@/store/modules/permission';
import { useUserStoreWithOut } from '@/store/modules/user';

export const useInit = async () => {
  const userStore = useUserStoreWithOut();
  const permissionStore = usePermissionStoreWithOut();
  const token = userStore.getToken;
  // 本地开发时关掉，嵌入主应用打开
  if (token) {
    const routes = await permissionStore.buildRoutesAction();
    routes.forEach((route) => {
      router.addRoute((route as unknown) as RouteRecordRaw);
    });
    router.addRoute((PAGE_NOT_FOUND_ROUTE as unknown) as RouteRecordRaw);
  }
  return {
    router,
  };
};
