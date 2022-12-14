import { viteMockServe } from 'vite-plugin-mock';

/**
 * Mock plugin for development and production.
 * https://github.com/anncwb/vite-plugin-mock
 */
export function configMockPlugin(isBuild: boolean) {
  return viteMockServe({
    // eslint-disable-next-line no-useless-escape
    ignore: /^\_/,
    mockPath: 'mock',
    localEnabled: !isBuild,
    prodEnabled: isBuild,
    injectCode: `
      import { setupProdMockServer } from '../mock/_createMockServer';

      setupProdMockServer();
      `,
  });
}
