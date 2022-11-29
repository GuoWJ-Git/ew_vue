// import antdLocale from 'ant-design-vue/es/locale/en_US';
import antdLocale from 'element-plus/lib/locale/lang/en';

import { genMessage } from '../helper';

const modules = import.meta.globEager('./en/**/*.ts');
export default {
  message: {
    ...genMessage(modules, 'en'),
    antdLocale,
  },
  momentLocale: null,
  momentLocaleName: 'en',
};
