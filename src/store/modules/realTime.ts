import { defineStore } from 'pinia';

import { RealTimeSetting } from '@/settings/realTimeSetting';
import { store } from '@/store';
import { deepMerge } from '@/utils';

interface RealTimeState {
  realTimeConfig: Partial<RealTimeSetting>;
}

export const useRealTimeStore = defineStore({
  id: 'welllog-micro-real-time',
  state: (): RealTimeState => ({
    realTimeConfig: {},
  }),
  getters: {
    getRealTimeConfig(): Partial<RealTimeSetting> {
      return this.realTimeConfig;
    },
  },
  actions: {
    setRealTimeConfig(config: RealTimeSetting): void {
      this.realTimeConfig = deepMerge(this.realTimeConfig || {}, config);
    },
  },
});

export function useRealTimeStoreWithOut() {
  return useRealTimeStore(store);
}
