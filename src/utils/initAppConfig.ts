import { useAppStore } from '@/store/modules/app';
import { useBaseAddressStore } from '@/store/modules/baseAddress';
import { useChooseWellStore } from '@/store/modules/chooseWell';
import { useLocaleStore } from '@/store/modules/locale';
import { useRealTimeStore } from '@/store/modules/realTime';
import { getCommonStoragePrefix, getStorageShortName } from '@/utils/env';

import actions from './actions';

export function initAppConfigStore() {
  const appStore = useAppStore();
  const chooseWellStore = useChooseWellStore();
  const realTimeStore = useRealTimeStore();
  const baseAddressStore = useBaseAddressStore();

  actions?.onGlobalStateChange((state) => {
    const { microConfig, menuConfig, chooseWellConfig, realTimeConfig, baseAddressConfig } = state;
    appStore.setMicroConfig(microConfig);
    appStore.setMenuConfig(menuConfig);
    chooseWellStore.setChooseWellConfig(chooseWellConfig);
    realTimeStore.setRealTimeConfig(realTimeConfig);
    baseAddressStore.setBaseAddressConfig(baseAddressConfig);
  }, true);

  const localeStore = useLocaleStore();
  localeStore.initLocale();

  setTimeout(() => {
    clearObsoleteStorage();
  }, 16);
}

export function clearObsoleteStorage() {
  const commonPrefix = getCommonStoragePrefix();
  const shortPrefix = getStorageShortName();

  [localStorage, sessionStorage].forEach((item: Storage) => {
    Object.keys(item).forEach((key) => {
      if (key && key.startsWith(commonPrefix) && !key.startsWith(shortPrefix)) {
        item.removeItem(key);
      }
    });
  });
}
