// import antdLocale from 'ant-design-vue/es/locale/zh_CN';
import antdLocale from 'element-plus/lib/locale/lang/zh-cn';
import momentLocale from 'moment/dist/locale/zh-cn';

import { genMessage } from '../helper';

const modules = import.meta.globEager('./zh-CN/**/*.ts');
export default {
  message: {
    ...genMessage(modules, 'zh-CN'),
    antdLocale,
  },
  momentLocale,
  momentLocaleName: 'zh-cn',
};
