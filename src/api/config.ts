// import { message } from 'ant-design-vue';
import { ElMessage } from 'element-plus';
import axios from 'axios';

export const prefix = import.meta.env.VITE_APP_PREFIX;

const request = axios.create({});

request.interceptors.request.use(
  (config) => {
    const access_token = localStorage.getItem('access_token');
    // @ts-ignore
    config!.headers.client_id = import.meta.env.VITE_APP_ID;
    // @ts-ignore
    config!.headers.client_secret = import.meta.env.VITE_APP_ID;
    if (access_token) {
      // @ts-ignore
      config!.headers.Authorization = access_token;
    }
    return config;
  },
  (err) => {
    return Promise.reject(err);
  }
);

request.interceptors.response.use(
  (response) => {
    //拦截响应，做统一处理
    if (response.data.code == 401) {
      // message.warn(response.data.msg);
      return Promise.reject(response);
    }
    if (response.config.responseType === 'blob') {
      return Promise.resolve(response);
    }
    return response.data;
  },
  //接口错误状态处理，也就是说无响应时的处理
  (error: any) => {
    switch (error.response.status) {
      case 400:
        ElMessage.error('请求错误,请稍后重试。若仍然无响应，请联系技术人员');
        break;
      case 401:
        ElMessage.error('未授权,即将跳转到登录页');
        setTimeout(() => {
          logOut();
        }, 2000);
        break;
      case 403:
        ElMessage.error('拒绝访问,请稍后重试。若仍然无响应，请联系技术人员');
        break;
      case 404:
        ElMessage.error('请求地址出错,请稍后重试。若仍然无响应，请联系技术人员');
        break;
      case 408:
        ElMessage.error('请求超时,请稍后重试。若仍然无响应，请联系技术人员');
        break;
      case 500:
        ElMessage.error('服务器内部错误,请稍后重试。若仍然无响应，请联系技术人员');
        break;
      case 501:
        ElMessage.error('服务未实现,请稍后重试。若仍然无响应，请联系技术人员');
        break;
      case 502:
        ElMessage.error('网关错误,请稍后重试。若仍然无响应，请联系技术人员');
        break;
      case 503:
        ElMessage.error('服务不可用,请稍后重试。若仍然无响应，请联系技术人员');
        break;
      case 504:
        ElMessage.error('网关超时,请稍后重试。若仍然无响应，请联系技术人员');
        break;
      case 505:
        ElMessage.error('HTTP版本不受支持,请稍后重试。若仍然无响应，请联系技术人员');
        break;
      default:
        break;
    }

    return Promise.reject(error.response.status); // 返回接口返回的错误信息
  }
);

const logOut = () => {
  localStorage.clear();
  window.location.href = '/login';
};

export const instance = request;
