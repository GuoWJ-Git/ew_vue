import { HttpError } from './types';

export function axiosRetry(error: HttpError) {
  const { config } = error;
  if (!config?.retry) {
    return Promise.reject(error);
  }

  config.retryCount = config.retryCount || 0;

  if (config.retryCount >= config.retry) {
    return Promise.reject(error);
  }

  config.retryCount += 1;

  const backOff = new Promise((resolve) => {
    const timer = setTimeout(() => {
      resolve(config);
      timer && clearTimeout(timer);
    }, config.retryDelay || 1000);
  });

  return backOff;
}
