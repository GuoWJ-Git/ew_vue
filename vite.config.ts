// import * as path from 'path';
import { resolve } from 'path';
import { ConfigEnv, loadEnv, UserConfig } from 'vite';

import { OUTPUT_DIR } from './build/constant';
import { wrapperEnv } from './build/utils';
import { createVitePlugins } from './build/vite/plugins/index';
import { createProxy } from './build/vite/proxy';

// 详细配置：https://cn.vitejs.dev/config/
export default ({ command, mode }: ConfigEnv): UserConfig => {
  const root = process.cwd();

  const env = loadEnv(mode, root);

  const viteEnv = wrapperEnv(env);

  const { VITE_PORT, VITE_PUBLIC_PATH, VITE_PROXY, VITE_DROP_CONSOLE } = viteEnv;

  const isBuild = command === 'build';

  const optimizeDeps = {
    include: [
      'vue',
      'vue-router',
      '@vueuse/core',
      'dayjs',
      'dayjs/plugin/localizedFormat',
      'dayjs/plugin/relativeTime',
      'dayjs/locale/zh-cn',
      'moment/dist/locale/zh-cn',
      'moment/dist/locale/eu',
      'element-plus/lib/locale/lang/zh-cn',
      'element-plus/lib/locale/lang/en',
    ],
  };

  const alias = {
    '@': resolve(__dirname, 'src'),
    '#': resolve(__dirname, 'types'),
  };

  return {
    base: VITE_PUBLIC_PATH,
    root,
    resolve: {
      alias,
    },
    server: {
      host: true,
      https: false,
      port: VITE_PORT,
      proxy: createProxy(VITE_PROXY),
    },
    esbuild: {
      pure: VITE_DROP_CONSOLE ? ['console.log', 'debugger'] : [],
    },
    build: {
      target: 'esnext',
      cssTarget: 'chrome80',
      outDir: OUTPUT_DIR || 'dist',
      brotliSize: false,
      chunkSizeWarningLimit: 2000,
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@use "src/styles/variables.scss" as *; @use "src/styles/mixin.scss" as *;`,
          javascriptEnabled: true,
        },
      },
    },
    plugins: createVitePlugins(viteEnv, isBuild),
    optimizeDeps,
  };
};
