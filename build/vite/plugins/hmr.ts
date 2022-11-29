import type { Plugin } from 'vite';

/**
 * configure the HMR plug-in
 */
export function configHmrPlugin(): Plugin {
  return {
    name: 'singleHMR',
    handleHotUpdate({ modules, file }) {
      if (file.match(/xml$/)) return [];

      modules.forEach((m) => {
        if (!m.url.match(/\.(css|scss)/)) {
          m.importedModules = new Set();
          m.importers = new Set();
        }
      });

      return modules;
    },
  };
}
