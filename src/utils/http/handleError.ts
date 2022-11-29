import axios from 'axios';
import { ElMessage } from 'element-plus';

export const ERROR_MESSAGES = {
  400: '错误请求!',
  401: '登录失效，请尝试重新登录!',
  403: '暂无该操作权限!',
  404: '资源不存在!',
  500: '服务异常!',
  CommonError: '操作失败',
  NetworkError: '网络异常，请检查您的网络连接是否正常!',
  TimeoutError: '请求超时，请刷新页面重试!',
  CancelToken: '请求已取消!',
};

export enum AbnormalCode {
  CONTENT_EMPTY = 1019001,
  INCOMPLETE_INFORMATION = 1019002,
  EXPIRED = 1019003,
  CONTENT_TAMPERED = 1019004,
}

export const ABNORMAL_CODE_LIST = [
  AbnormalCode.CONTENT_EMPTY,
  AbnormalCode.INCOMPLETE_INFORMATION,
  AbnormalCode.EXPIRED,
  AbnormalCode.CONTENT_TAMPERED,
];

export enum ErrorStatus {
  NetworkError = 'NetworkError',
  TimeoutError = 'TimeoutError',
  CancelToken = 'CancelToken',
}

export enum ErrorMessageKeyWords {
  ECONNABORTED = 'ECONNABORTED',
  NetworkError = 'Network Error',
  Timeout = 'timeout',
}

export enum ErrorCode {
  ECONNABORTED = 'ECONNABORTED',
}

export function handleError(error) {
  const { response, message, code, config } = error || {};
  if (code === ErrorCode.ECONNABORTED && message.includes(ErrorMessageKeyWords.Timeout)) {
    error.message = ERROR_MESSAGES.TimeoutError;
    error.status = ErrorStatus.TimeoutError;
  }

  if (message === ErrorMessageKeyWords.NetworkError) {
    error.message = ERROR_MESSAGES.NetworkError;
    error.status = ErrorStatus.NetworkError;
  }

  if (ERROR_MESSAGES[response?.status]) {
    error.message = ERROR_MESSAGES[response?.status];
  }

  if (axios.isCancel(error)) {
    error.message = ERROR_MESSAGES.CancelToken;
    error.status = ErrorStatus.CancelToken;
  }

  if (config?.showErrorMessage) {
    error.status = error.status ?? response?.status;
    ElMessage?.closeAll();
    ElMessage({
      message: error.message,
      type: error.type || 'error',
      duration: error.timeout,
    });
  }
  return error;
}
