import { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';

/**
 * http 请求配置项
 */
export interface HttpRequestOptions extends AxiosRequestConfig {
  /** 拦截处理 */
  transform?: HttpRequestHooks;
  /** 重试次数 */
  retry?: number;
  /** 重试延迟毫秒, 默认值为 100 */
  retryDelay?: number;
  /** 重试次数限制 */
  retryCount?: number;
  /** 关闭取消重复请求限制 */
  closeCancelToken?: boolean;
  /** 路由改变是否取消请求，默认值为 true */
  routeChangeCancel?: boolean;
  /** 是否显示错误信息 */
  showErrorMessage?: boolean;
  /** 错误消息提示类型 */
  errorMessageType?: 'warning' | 'error';
  /** 错误信息显示时间 */
  errorMessageTimeout?: number;
  /** api 接口需要携带的请求头 */
  Authorization?: string;
}

/**
 * http异常错误接口
 */
export interface HttpError extends AxiosError {
  config: HttpRequestOptions;
}

/**
 * 上传文件参数
 * multipart/form-data: upload file
 */
export interface UploadFileParams {
  /** 额外参数 */
  data?: Recordable;
  /** 文件参数字段名称 */
  name?: string;
  /** 上传的文件 */
  file: File | Blob;
  /** 上传的文件名称 */
  filename?: string;
  [key: string]: unknown;
}

/**
 * 请求方法
 */
export enum MethodEnum {
  GET = 'GET',
  POST = 'POST',
  PATCH = 'PATCH',
  PUT = 'PUT',
  DELETE = 'DELETE',
}

/**
 * 请求提内容类型
 */
export enum ContentTypeEnum {
  /** json 格式数据 */
  JSON = 'application/json;charset=UTF-8',
  /** form-data 查询字符串形式 */
  FORM_URLENCODED = 'application/x-www-form-urlencoded;charset=UTF-8',
  /** form-data 文件上传形式 */
  FORM_DATA = 'multipart/form-data;charset=UTF-8',
  X_Requested_With = 'XMLHttpRequest',
}

/**
 * 请求钩子函数
 */
export type HttpRequestHooks = {
  /**
   * 请求之前时的请求拦截器
   */
  onBeforeRequest?: (
    config: HttpRequestOptions
  ) => HttpRequestOptions | Promise<HttpRequestOptions>;
  /**
   * 请求成功时的响应拦截器
   */
  onSuccessResponse?: (res: AxiosResponse<unknown>) => Promise<unknown>;
  /**
   * 请求失败时的响应拦截器
   */
  onErrorResponse?: (error: Error) => void;
};
