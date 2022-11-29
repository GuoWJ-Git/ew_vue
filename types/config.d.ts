import {
  ContentEnum,
  PermissionModeEnum,
  RouterTransitionEnum,
  SettingButtonPositionEnum,
  SessionTimeoutProcessingEnum,
} from '@/enums/appEnum';

import { CacheTypeEnum } from '/@/enums/cacheEnum';

export type LocaleType = 'zh_CN' | 'en' | 'ru' | 'ja' | 'ko';

export interface MultiTabsSetting {
  cache: boolean;
}

declare interface TransitionSetting {
  //  Whether to open the page switching animation
  enable: boolean;
  // Route basic switching animation
  basicTransition: RouterTransitionEnum;
  // Whether to open page switching loading
  openPageLoading: boolean;
  // Whether to open the top progress bar
  openNProgress: boolean;
}

declare interface ProjectConfig {
  /** Permission mode */
  permissionMode: PermissionModeEnum;
  /** Storage location of permission related information */
  permissionCacheType: CacheTypeEnum;
  /** Multi-tab settings */
  multiTabsSetting: MultiTabsSetting;
  /** Whether to display the project Settings button */
  drawer: boolean;
  /** Dark Theme switch */
  nightMode: boolean;
  /** Select menu type */
  navbarType: string;
  /** Select menu type list */
  navbarList: string[];
  /** Select system theme */
  systemThemeColor: string;
  /** List of System topics */
  systemThemeList: string[];
  /** Select the top bar theme */
  navbarThemeColor: string;
  /** Top column topic list */
  navbarThemeList: string[];
  /** Select menu theme */
  sidebarThemeColor: string;
  /** List of menu topics */
  sidebarThemeList: string[];
}

declare interface GlobConfig {
  // Site title
  title: string;
  // Service interface url
  apiUrl: string;
  // Upload url
  uploadUrl?: string;
  //  Service interface url prefix
  urlPrefix?: string;
  // Project abbreviation
  shortName: string;
}

declare interface GlobEnvConfig {
  // Site title
  VITE_GLOB_APP_TITLE: string;
  VITE_GLOB_APP_SUBTITLE: string;
  // Service interface url
  VITE_GLOB_API_URL: string;
  // Service interface url prefix
  VITE_GLOB_API_URL_PREFIX?: string;
  // Project abbreviation
  VITE_GLOB_APP_SHORT_NAME: string;
  // Upload url
  VITE_GLOB_UPLOAD_URL?: string;
}

export interface LocaleSetting {
  showPicker: boolean;
  // Current language
  locale: LocaleType;
  // default language
  fallback: LocaleType;
  // available Locales
  availableLocales: LocaleType[];
}
