import { defineStore } from 'pinia';

import { BaseAddressSetting } from '@/settings/baseAddressSetting';
import { store } from '@/store';
import { deepMerge } from '@/utils';

interface BaseAddressState {
  baseAddressConfig: Partial<BaseAddressSetting>;
}

export const useBaseAddressStore = defineStore({
  id: 'welllog-micro-base-address',
  state: (): BaseAddressState => ({
    baseAddressConfig: {},
  }),
  getters: {
    getBaseAddressConfig(): Partial<BaseAddressSetting> {
      return this.baseAddressConfig;
    },
  },
  actions: {
    setBaseAddressConfig(config: BaseAddressSetting): void {
      this.baseAddressConfig = deepMerge(this.baseAddressConfig || {}, config);
    },
  },
});

export function useBaseAddressStoreWithOut() {
  return useBaseAddressStore(store);
}
