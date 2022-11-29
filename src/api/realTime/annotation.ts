import http from '@/utils/http/index';

export enum AnnotationApi {
  add = '/track-api/curve/tagging/add',
  del = '/track-api/curve/tagging/del',
  get = '/track-api/curve/tagging/list',
}

export function addAnnotation(params = {}) {
  return http.post({
    url: AnnotationApi.add,
    data: params,
  });
}

export function delAnnotation(params = {}) {
  return http.post({
    url: AnnotationApi.del,
    data: params,
  });
}

export function getAnnotationList(params = {}) {
  return http.post({
    url: AnnotationApi.get,
    data: params,
  });
}
