import router from '@/router';
import { useAppStore } from '@/store/modules/app';
import { usePermissionStore } from '@/store/modules/permission';
import { useUserStore } from '@/store/modules/user';
/**
 * 清空用户数据（清除用户信息、用户权限token、用户登录账号密码），返回登录页
 * @param delay 延迟时间
 * @param query 请求 query
 */
export function useClearUserData({ delay = 0, query = {} } = {}) {
  const appStore = useAppStore();
  const userStore = useUserStore();
  const permissionStore = usePermissionStore();
  appStore.resetAllState();
  userStore.resetState();
  permissionStore.resetState();

  const goLoginPage = () =>
    router.push({
      path: '/login',
      query,
    });
  const ids = setTimeout(() => {
    goLoginPage();
    ids && clearTimeout(ids);
  }, delay);
}
