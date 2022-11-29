import { instance } from '../config';

export const AllApi = {
  GetWellSiteList: '/api/cfbgc-warning/well/page',
  GetWellSiteRealTimeData: '/api/cfbgc-warning/well/realTimeInfo',
  GetAuthWell: '/api/cfbgc-warning/auth/auth/queryWell',
  GetAuthCompany: '/api/cfbgc-warning/auth/auth/queryCompany',
  GetAuthBlock: '/api/cfbgc-warning/auth/auth/queryBlock',
  GetAllPlatformList: '/api/cfbgc-warning/platformConfig/platformConfig/queryAll',
};

/**
 * @description 获取井场列表
 * @export
 * @param {*} [params={}]
 * @return {*}
 */
export function getWellSiteList(params = {}) {
  return instance.get(AllApi.GetWellSiteList, { params });
}

/**
 * @description 井场实时信息
 * @export
 * @param {*} [params={}]
 * @return {*}
 */
export function getWellSiteRealTimeData(params = {}) {
  return instance.get(AllApi.GetWellSiteRealTimeData, { params });
}

/**
 * @description 用户关联所有井
 * @export
 * @param {*} data
 * @return {*}
 */
export function getAuthWell(data) {
  return instance.post(AllApi.GetAuthWell, data);
}

/**
 * @description 用户关联公司
 * @export
 * @param {*} data
 * @return {*}
 */
export function getAuthCompany(data) {
  return instance.post(AllApi.GetAuthCompany, data);
}

/**
 * @description 用户关联所有区块
 * @export
 * @param {*} data
 * @return {*}
 */
export function getAuthBlock(data) {
  return instance.post(AllApi.GetAuthBlock, data);
}

/**
 * @description 平台查询(全部)
 * @export
 * @param {*} data
 * @return {*}
 */
export function getAllPlatformList() {
  return instance.post(AllApi.GetAllPlatformList);
}
