import http from '@/utils/http/index';

export enum VisualShowApi {
  GetHistoryData = '/track-api/curve/templateWithFieldData',
  GetTimeQuantum = '/track-api/curve/time-slot',
  GetTemplateList = '/track-api/template/dropdown',
  GetDefaultingTemplate = '/track-api/template/defaulting',
}

export function getDefaultingTemplateIdApi(params = {}) {
  return http.get({
    url: VisualShowApi.GetDefaultingTemplate+'/'+params.classify,
    params,
  });
}

export function getHistoryData(params = {}) {
  return http.get({
    url: VisualShowApi.GetHistoryData,
    params,
  });
}

export function getTimeQuantum(params = {}) {
  return http.get({
    url: VisualShowApi.GetTimeQuantum,
    params,
  });
}

export function getTemplateList(params = {}) {
  return http.get({
    url: VisualShowApi.GetTemplateList,
    params,
  });
}
