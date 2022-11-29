import legacyPlugin from '@vitejs/plugin-legacy';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import type { PluginOption } from 'vite';
import qiankun from 'vite-plugin-qiankun';

import { name } from '../../../package.json'
import { configCompressPlugin } from './compress';
import { configHmrPlugin } from './hmr';
import { configHtmlPlugin } from './html';
import { configMockPlugin } from './mock';
import { configStyleImportPlugin } from './styleImport';
import { configSvgIconsPlugin } from './svgSprite';

/**
 * Create a list of Vite plug-ins
 */
export function createVitePlugins(viteEnv: ViteEnv, isBuild: boolean) {
  const {
    VITE_USE_MOCK: shouldUseMock,
    VITE_BUILD_COMPRESS: compressType,
    VITE_BUILD_COMPRESS_DELETE_ORIGIN_FILE: shouldBuildCompressDeleteFile,
  } = viteEnv;
  const vitePlugins: (PluginOption | PluginOption[])[] = [
    vue(),
    vueJsx(),
    legacyPlugin({
      targets: [
        'Android > 39',
        'Chrome >= 60',
        'Safari >= 10.1',
        'iOS >= 10.3',
        'Firefox >= 54',
        'Edge >= 15',
      ],
    }),
    qiankun(name, { useDevMode: true }) as PluginOption
  ];

  // HMR
  !isBuild && vitePlugins.push(configHmrPlugin());

  // vite-plugin-html
  vitePlugins.push(configHtmlPlugin(viteEnv, isBuild));

  // vite-plugin-svg-icons
  vitePlugins.push(configSvgIconsPlugin(isBuild));

  // vite-plugin-mock
  shouldUseMock && vitePlugins.push(configMockPlugin(isBuild));

  // vite-plugin-style-import
  vitePlugins.push(configStyleImportPlugin(isBuild));

  if (isBuild) {
    vitePlugins.push(configCompressPlugin(compressType, shouldBuildCompressDeleteFile));
  }

  return vitePlugins;
}
