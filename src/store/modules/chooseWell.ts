import { defineStore } from 'pinia';

import { ChooseWellSetting } from '@/settings/chooseWellSetting';
import { store } from '@/store';
import { deepMerge } from '@/utils';

interface chooseWellState {
  chooseWellConfig: Partial<ChooseWellSetting>;
}

export const useChooseWellStore = defineStore({
  id: 'welllog-micro-choose-well',
  state: (): chooseWellState => ({
    chooseWellConfig: {},
  }),
  getters: {
    getChooseWellConfig(): Partial<ChooseWellSetting> {
      return this.chooseWellConfig;
    },
  },
  actions: {
    setChooseWellConfig(config: ChooseWellSetting): void {
      this.chooseWellConfig = deepMerge(this.chooseWellConfig || {}, config);
    },
  },
});

export function useChooseWellStoreWithOut() {
  return useChooseWellStore(store);
}
