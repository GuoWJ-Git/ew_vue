declare enum ApiResponseCode {
  SUCCESS = 200,
}

// Api 请求响应结果
declare interface ApiResponse<T = Recordable<any> | any> {
  code: ApiResponseCode | number;
  data: T & Recordable<T>;
  message: string;
}
