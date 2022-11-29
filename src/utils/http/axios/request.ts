import axios, { AxiosInstance, AxiosResponse } from 'axios';

import { useUserStore } from '@/store/modules/user';

import { axiosCanceler } from './cancel';
import { axiosRetry } from './retry';
import { ContentTypeEnum, HttpError, HttpRequestOptions, MethodEnum } from './types';

export class AxiosRequest {
  private axiosInstance: AxiosInstance;
  private options: HttpRequestOptions;

  constructor(options: HttpRequestOptions) {
    this.options = options;
    this.axiosInstance = axios.create(options);
    this.setupInterceptors();
  }

  request<T = unknown>(config: HttpRequestOptions): Promise<T> {
    return new Promise((resolve, reject) => {
      this.axiosInstance
        .request<unknown, AxiosResponse>(config)
        .then((res: AxiosResponse) => {
          if (axios.isCancel(res)) return;
          resolve((res as unknown) as Promise<T>);
        })
        .catch((error: Error) => reject(error));
    });
  }

  get<T = unknown>(config: HttpRequestOptions): Promise<ApiResponse<T>> {
    return this.request({ ...config, method: MethodEnum.GET });
  }

  post<T = unknown>(config: HttpRequestOptions): Promise<ApiResponse<T>> {
    return this.request({ ...config, method: MethodEnum.POST });
  }

  put<T = unknown>(config: HttpRequestOptions): Promise<ApiResponse<T>> {
    return this.request({ ...config, method: MethodEnum.PUT });
  }

  patch<T = unknown>(config: HttpRequestOptions): Promise<ApiResponse<T>> {
    return this.request({ ...config, method: MethodEnum.PATCH });
  }

  delete<T = unknown>(config: HttpRequestOptions): Promise<ApiResponse<T>> {
    return this.request({ ...config, method: MethodEnum.DELETE });
  }

  upload<T = ApiResponse>(config: HttpRequestOptions): Promise<T> {
    const formData = new FormData();
    const isFormData = (value) => value instanceof FormData;

    if (!isFormData(config.data) && config.data) {
      Object.keys(config.data).forEach((key) => {
        formData.append(key, config.data[key]);
      });
    }

    return this.request({
      ...config,
      data: isFormData(config.data) ? config.data : formData,
      method: MethodEnum.POST,
      headers: { 'Content-type': ContentTypeEnum.FORM_DATA },
    });
  }

  private setupInterceptors() {
    const transform = this.options?.transform;

    const requestInterceptors = async (config: HttpRequestOptions) => {
      if (transform?.onBeforeRequest) {
        // eslint-disable-next-line no-param-reassign
        config = await transform?.onBeforeRequest(config);
      }

      const shouldIgnoreCancel = config?.closeCancelToken ?? this.options?.closeCancelToken;

      if (!shouldIgnoreCancel) {
        axiosCanceler.addPending(config);
      }

      const userStore = useUserStore();
      const authorization = userStore.getToken;
      if (authorization && config.headers) config.headers.Authorization = authorization;

      return config;
    };

    const responseInterceptors = (res: ApiResponse & AxiosResponse) => {
      res && axiosCanceler.removePending(res.config);

      if (transform?.onSuccessResponse) {
        return transform?.onSuccessResponse(res);
      }
      return res;
    };

    const responseInterceptorsRetry = (error: HttpError) =>
      axiosRetry(error).then(() => this.request(error?.config));

    const responseInterceptorsError = (error: HttpError) => {
      if (transform?.onErrorResponse) {
        return transform?.onErrorResponse(error);
      }

      return Promise.reject(error);
    };

    this.axiosInstance.interceptors.request.use(requestInterceptors, undefined);

    this.axiosInstance.interceptors.response.use(responseInterceptors, undefined);

    this.axiosInstance.interceptors.response.use(undefined, responseInterceptorsRetry);

    this.axiosInstance.interceptors.response.use(undefined, responseInterceptorsError);
  }
}
