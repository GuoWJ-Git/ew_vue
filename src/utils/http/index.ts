import { ElMessage } from 'element-plus';

import { ExceptionEnum } from '@/enums/exceptionEnum';
import { useClearUserData } from '@/hooks/useUserData';
import router from '@/router';
import { sleep } from '@/utils/domUtils';

import { getAppEnvConfig } from '../env';
import { axiosCanceler as canceler } from './axios/cancel';
import { AxiosRequest } from './axios/request';
import { ContentTypeEnum, HttpRequestHooks, HttpRequestOptions } from './axios/types';
import { ABNORMAL_CODE_LIST, ERROR_MESSAGES, handleError } from './handleError';

async function onBeforeRequest(config: HttpRequestOptions) {
  return config;
}

function onSuccessResponse(response) {
  const code = response?.status;

  const isNormalResponseCode = (code >= 200 && code < 300) || code === 304;
  if (isNormalResponseCode) {
    if (response?.data && ABNORMAL_CODE_LIST.includes(response?.data?.code)) {
      ElMessage?.closeAll();
      ElMessage({
        type: 'warning',
        message: response.data?.msg || ERROR_MESSAGES.CommonError,
        onClose: () => router.push('/login'),
      });
      return Promise.reject(response?.data);
    }
    if (response.config.responseType === 'blob') {
      return Promise.resolve(response);
    }
    return Promise.resolve(response?.data);
  }
  return Promise.reject(response);
}

async function onErrorResponse(error: Error) {
  const errorData = handleError(error);
  const shouldReLogin = [ExceptionEnum.TOKEN_UNAUTHORIZED, ExceptionEnum.PAGE_NOT_ACCESS].includes(
    errorData.status
  );
  if (shouldReLogin) {
    await sleep(1000);
    useClearUserData();
    return Promise.resolve({});
  }
  return Promise.reject(errorData);
}

const transform: HttpRequestHooks = {
  onBeforeRequest,
  onSuccessResponse,
  onErrorResponse,
};

// eslint-disable-next-line @typescript-eslint/naming-convention
const Axios = new AxiosRequest({
  baseURL: getAppEnvConfig()?.VITE_GLOB_API_URL ?? import.meta.env?.VITE_GLOB_API_URL ?? '',
  timeout: 30 * 1000,
  headers: {
    'Content-Type': ContentTypeEnum.JSON,
    'X-Requested-With': ContentTypeEnum.X_Requested_With,
  },
  transform,
  withCredentials: true,
  showErrorMessage: true,
});

export default Axios;

export { canceler };
