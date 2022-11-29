/**
 * mlog
 */
import http from '@/utils/http/index';

enum CementWellApi {
  getWellHis = '/mlog-api/cementWell/getPlantNumData',
  getWellList = '/mlog-api/cementWell/getWell',
  getWellTask = '/mlog-api/cementWell/getWellTask',

}

export function getWellHis(params = {}) {
  return http.get({
    url: CementWellApi.getWellHis,
    params,
  });
}

export function getWellList(params = {}) {
  return http.get({
    url: CementWellApi.getWellList,
    params,
  });
}

export function getWellTask(params = {}) {
  return http.get({
    url: CementWellApi.getWellTask,
    params,
  });
}