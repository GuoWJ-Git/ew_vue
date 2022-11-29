import ElementPlus from 'element-plus';
import { App } from 'vue';

export function setupElement(app: App<Element>) {
  app.use(ElementPlus);
}
