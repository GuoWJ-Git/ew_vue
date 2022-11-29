import http from '@/utils/http/index';

export enum VisualConfigApi {
  GetWellList = '/drilling-api/drillingEngineering/loggingReal/wellPage',
  GetOneWellChooseWellPage = '/coredata-api/well/oneWellChooseWell/page',
}

export function getWellListApi(params = {}) {
  return http.get({
    url: VisualConfigApi.GetWellList,
    params,
  });
}
export function getOneWellChooseWellPage(params = {}) {
  return http.get({
    url: VisualConfigApi.GetOneWellChooseWellPage,
    params,
  });
}
