import Layout from '@/layout/BasicLayout.vue';
import { AppRouteRecordRaw } from '@/router/types';
import Error403 from '@/views/error/403.vue';
import Error404 from '@/views/error/404.vue';
import Error500 from '@/views/error/500.vue';
import NetworkError from '@/views/error/NetworkError.vue';

// page not found redirect to 404
export const PAGE_NOT_FOUND_ROUTE: AppRouteRecordRaw = {
  path: '/:path(.*)*',
  name: 'ErrorNotFound',
  component: Error404,
  redirect: '/error/404',
  meta: { title: 'ErrorNotFound', hideMenu: true },
};

// error page
export const ERROR_PAGE: AppRouteRecordRaw = {
  path: '/error',
  name: 'ErrorPage',
  component: Layout,
  meta: { title: 'ErrorPage', hideMenu: true },
  redirect: '/error/404',
  children: [
    {
      path: '403',
      name: 'NotAccess',
      meta: { title: '403' },
      component: Error403,
    },
    {
      path: '404',
      name: 'NotFound',
      meta: { title: '404' },
      component: Error404,
    },
    {
      path: '500',
      name: 'ServiceError',
      meta: { title: '500' },
      component: Error500,
    },
    {
      path: 'network-error',
      name: 'NetworkError',
      meta: { title: 'NetworkError' },
      component: NetworkError,
    },
  ],
};

export const ErrorRoutes: AppRouteRecordRaw[] = [ERROR_PAGE];
