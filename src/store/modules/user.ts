import { defineStore } from 'pinia';

import { APP_LOCAL_CACHE_KEY, ROLES_KEY, TOKEN_KEY, USER_INFO_KEY } from '@/enums/cacheEnum';
import { RoleEnum } from '@/enums/roleEnum';
import { store } from '@/store';
import { createLocalStorage } from '@/utils/cache';
import { UserInfo } from '#/store';

interface UserState {
  userInfo: Nullable<UserInfo>;
  token?: string;
  roleList: RoleEnum[];
  sessionTimeout?: boolean;
  lastUpdateTime: number;
}

const ls = createLocalStorage();

const lsTokenSetting = ls.get(APP_LOCAL_CACHE_KEY)?.[TOKEN_KEY];
const lsUserInfoSetting = ls.get(APP_LOCAL_CACHE_KEY)?.[USER_INFO_KEY];
const lsRoleListSetting = ls.get(APP_LOCAL_CACHE_KEY)?.[ROLES_KEY];

export const useUserStore = defineStore({
  id: 'welllog-micro-user',
  state: (): UserState => ({
    userInfo: null,
    token: undefined,
    roleList: [],
    // Whether the login expired
    sessionTimeout: false,
    // Last fetch time
    lastUpdateTime: 0,
  }),
  getters: {
    getUserInfo(): UserInfo {
      return this.userInfo || lsUserInfoSetting?.value;
    },
    getToken(): string {
      return this.token || lsTokenSetting?.value;
    },
    getRoleList(): RoleEnum[] {
      return this.roleList.length > 0 ? this.roleList : lsRoleListSetting?.value;
    },
  },
  actions: {
    resetState() {
      this.userInfo = null;
      this.token = '';
      this.roleList = [];
      this.sessionTimeout = false;
    },
  },
});

export function useUserStoreWithOut() {
  return useUserStore(store);
}
