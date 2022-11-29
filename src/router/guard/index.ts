import { ElMessage } from 'element-plus';
import { RouteLocationNormalized, Router } from 'vue-router';

import { AxiosCanceler } from '@/utils/http/axios/cancel';

import { createPermissionGuard } from './permissionGuard';

type ToPath = RouteLocationNormalized & { href: string };

/**
 * The interface used to close the current page to complete the request when the route is switched
 */
function createHttpGuard(router: Router) {
  const axiosCanceler = new AxiosCanceler();
  router.beforeEach(async () => {
    axiosCanceler?.removeAllPending();
    return true;
  });
}

/**
 * Routing switch back to the top
 */
function createScrollGuard(router: Router) {
  // const isHash = (href: string) => /^#/.test(href);
  const isHash = (href: string) => /^\//.test(href);
  const { body } = document;
  router.afterEach(async (to: ToPath) => {
    isHash(to?.href) && body.scrollTo(0, 0);
    return true;
  });
}

/**
 * Used to close the message instance when the route is switched
 */
function createMessageGuard(router: Router) {
  router.beforeEach(() => {
    try {
      ElMessage?.closeAll();
    } catch (error) {
      console.warn(`message guard error:${error}`);
    }
    return true;
  });
}

export function setupRouterGuard(router: Router) {
  createHttpGuard(router);
  createScrollGuard(router);
  createMessageGuard(router);
  createPermissionGuard(router);
}
