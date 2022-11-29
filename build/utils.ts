import { Recordable } from 'vite-plugin-mock';

import { VITE_PORT, VITE_PROXY } from './constant';

export function isDevFn(mode: string): boolean {
  return mode === 'development';
}

export function isProdFn(mode: string): boolean {
  return mode === 'production';
}

/**
 * 读取所有环境变量配置文件到 process.env
 * @param envConf 环境变量配置
 * @returns
 */
export function wrapperEnv(envConf: Recordable): ViteEnv {
  const ret: any = {};

  for (const envName of Object.keys(envConf)) {
    let realName = envConf[envName].replace(/\\n/g, '\n');
    realName = ['true', 'false'].includes(realName) ? JSON.parse(realName) : realName;
    if (envName === VITE_PORT) {
      realName = Number(realName);
    }
    if (envName === VITE_PROXY) {
      try {
        realName = JSON.parse(realName);
      } catch (error) {
        console.log(error);
      }
    }
    ret[envName] = realName;
    process.env[envName] = realName;
  }
  return ret;
}
