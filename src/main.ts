import 'element-plus/lib/theme-chalk/index.css';
import './styles/main.scss';
import 'virtual:svg-icons-register';

// import cfbgcPermissions from 'cfbgc-permissions';
// import cfbgcRem from 'cfbgc-rem/lib';
import { qiankunWindow, renderWithQiankun } from 'vite-plugin-qiankun/dist/helper';
import { createApp } from 'vue';

import { useInit } from '@/hooks/useInit';
import { setupI18n } from '@/locales/setupI18n';
import {
  // loadFonts,
  // resetVuetifyStyle,
  setupComponents,
  setupElement,
  // setupVuetify,
} from '@/plugins';
import { setupRouter } from '@/router';
import { setupRouterGuard } from '@/router/guard';
import { setupStore } from '@/store';
import { initAppConfigStore } from '@/utils/initAppConfig';

import App from './App.vue';
import actions from './utils/actions';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
let instance: any = null;

async function render(props) {
  const { container } = props;

  instance = createApp(App);

  const { router: initRouter } = await useInit();

  // App.use(cfbgcPermissions);
  // // cfbgcPermissions(instance);
  // cfbgcRem(instance);

  setupStore(instance);

  initAppConfigStore();

  await setupI18n(instance);

  setupElement(instance);

  // loadFonts();

  // setupVuetify(instance);

  // resetVuetifyStyle();

  setupComponents(instance);

  setupRouter(instance);

  setupRouterGuard(initRouter);

  instance.mount(
    container ? container.querySelector('#welllog-micro-admin') : '#welllog-micro-admin'
  );
}

renderWithQiankun({
  mount(props) {
    console.log('welllog-micro-admin mount');
    props && actions.setActions(props);
    render(props);
  },

  bootstrap() {
    console.log('welllog-micro-admin bootstrap');
  },

  unmount() {
    console.log('welllog-micro-admin unmount');
    instance.unmount();
    instance = null;
  },
} as any);

if (!qiankunWindow.__POWERED_BY_QIANKUN__) {
  render({});
}
