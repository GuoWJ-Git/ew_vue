import { defineStore } from 'pinia';

import { resetRouter } from '@/router';
import { store } from '@/store';
import { deepMerge } from '@/utils';
import { Persistent } from '@/utils/cache/persistent';

export const useAppStore = defineStore({
  id: 'welllog-micro-app',
  state: (): any => ({
    microConfig: {},
  }),
  getters: {
    getMenuConfig(): boolean {
      return this.menuConfig;
    },
    getMicroConfig(): any {
      return this.microConfig;
    },
  },
  actions: {
    setMenuConfig(config: any): void {
      this.menuConfig = deepMerge(this.menuConfig || {}, config);
    },
    setMicroConfig(config: any): void {
      this.microConfig = deepMerge(this.microConfig || {}, config);
    },
    async resetAllState() {
      resetRouter();
      Persistent.clearAll();
    },
  },
});

export function useAppStoreWithOut() {
  return useAppStore(store);
}
