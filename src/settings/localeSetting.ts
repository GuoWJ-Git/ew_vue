import { LocaleSetting, LocaleType } from '../../types/config';

export const LOCALE: { [key: string]: LocaleType } = {
  ZH_CN: 'zh_CN',
  EN_US: 'en',
};

export const localeSetting: LocaleSetting = {
  showPicker: true,
  // Locale
  locale: LOCALE.zh_CN,
  // Default locale
  fallback: LOCALE.zh_CN,
  // available Locales
  availableLocales: [LOCALE.ZH_CN, LOCALE.EN_US],
};

// locale list
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const localeList: Array<Record<string, any>> = [
  {
    text: '简体中文',
    event: LOCALE.ZH_CN,
  },
  {
    text: 'English',
    event: LOCALE.EN_US,
  },
];
