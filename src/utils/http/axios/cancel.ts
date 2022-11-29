import axios, { AxiosRequestConfig, Canceler } from 'axios';
import { isFunction } from 'lodash-es';
import qs from 'qs';

import { HttpRequestOptions } from './types';

type PendingValue = [Canceler, boolean | undefined];

let pendingMap = new Map<string, PendingValue>();

export const getPendingUrl = (config: AxiosRequestConfig) =>
  [config.method, config.url, qs.stringify(config.data), qs.stringify(config.params)].join('&');

export class AxiosCanceler {
  addPending(config: HttpRequestOptions) {
    this.removePending(config);
    const url = getPendingUrl(config);

    config.cancelToken =
      config.cancelToken ||
      new axios.CancelToken((cancel) => {
        if (!pendingMap.has(url)) {
          const isRouteChangeCancel =
            config?.routeChangeCancel === undefined ? true : config?.routeChangeCancel;
          pendingMap.set(url, [cancel, isRouteChangeCancel]);
        }
      });
  }

  removeAllPending() {
    pendingMap.forEach(([cancel]) => {
      isFunction(cancel) && cancel();
    });
    pendingMap.clear();
  }

  removeRouterPending() {
    pendingMap.forEach(([cancel, routeChangeCancel]) => {
      if (routeChangeCancel) {
        isFunction(cancel) && cancel();
      }
    });
    pendingMap.clear();
  }

  removePending(config: HttpRequestOptions) {
    const url = getPendingUrl(config);

    if (pendingMap.has(url)) {
      const [cancel] = pendingMap.get(url) as PendingValue;
      cancel?.(config.url);
      pendingMap.delete(url);
    }
  }

  reset(): void {
    pendingMap = new Map<string, PendingValue>();
  }
}

// eslint-disable-next-line @typescript-eslint/naming-convention
export const axiosCanceler = new AxiosCanceler();
