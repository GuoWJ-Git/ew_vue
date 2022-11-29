// eslint-disable @typescript-eslint/naming-convention
// CSS modules
type CSSModuleClasses = { readonly [key: string]: string };

declare module '*.module.css' {
  const classes: CSSModuleClasses;
  export default classes;
}
declare module '*.module.scss' {
  const classes: CSSModuleClasses;
  export default classes;
}
declare module '*.module.sass' {
  const classes: CSSModuleClasses;
  export default classes;
}

// CSS
declare module '*.css' {
  const css: string;
  export default css;
}
declare module '*.scss' {
  const css: string;
  export default css;
}
declare module '*.sass' {
  const css: string;
  export default css;
}

declare module 'moment/dist/locale/*' {
  import { LocaleSpecification } from 'moment';
  const locale: LocaleSpecification & ReadonlyRecordable;
  export default locale;
}

declare module '*.vue' {
  import { DefineComponent } from 'vue';
  const Component: DefineComponent<{}, {}, any>;
  export default Component;
}

declare module 'virtual:*' {
  const result: any;
  export default result;
}
