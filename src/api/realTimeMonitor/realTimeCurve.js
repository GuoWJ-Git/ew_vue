import { instance } from '../config';

export const RealTimeCurveApi = {
  GetExceptionPageList: '/api/cfbgc-warning/warn/warnPage',
  GetExceptionDetail: '/api/cfbgc-warning/warn/detail',
  AddException: '/api/cfbgc-warning/warn/save',
  DeleteException: '/api/cfbgc-warning/warn/remove',
  UpdateException: '/api/cfbgc-warning/warn/update',
  DownloadFile: '/api/cfbgc-warning/warnFile/download',
  DeleteFile: '/api/cfbgc-warning/warnFile/delete',
  GetTemplateTree: '/api/cfbgc-warning/template/getTemplateTree',
  GetTemplateTrackCurveList: '/api/cfbgc-warning/templateTrackCurve/list',
  EditorTemplateTrackCurve: '/api/cfbgc-warning/templateTrackCurve/edit',
  GetAdjoiningWellAlarm: '/api/cfbgc-warning/warn/adjoiningWell',
  GetWitsHistory: '/api/cfbgc-warning/wits/history',
  DeleteTemplateTrack: '/api/cfbgc-warning/templateTrack/delete',
  DeleteTemplateTrackCurve: '/api/cfbgc-warning/templateTrackCurve/delete',
  AddTemplateTrack: '/api/cfbgc-warning/templateTrack/add',
  GetUnitConversion: '/api/cfbgc-warning/unitConversion/list',
  GetCurveConfigDetail: '/api/cfbgc-warning/CurveUnit/detail',
  AddTemplateTrackCurve: '/api/cfbgc-warning/templateTrackCurve/add',
  GetTemplateCurveList: '/api/cfbgc-warning/CurveUnit/list',
  GetRiskData: '/api/cfbgc-warning/templateRisk/list',
  GetWellDetails: '/api/cfbgc-warning/well/detailByWid',
};

/**
 * @description 异常列表(分页)
 * @export
 * @param {*} data
 * @return {*}
 */
export function getExceptionPageList(params = {}) {
  return instance.get(RealTimeCurveApi.GetExceptionPageList, { params });
}

/**
 * @description 异常详情
 * @export
 * @param {*} [params={}]
 * @return {*}
 */
export function getExceptionDetail(params = {}) {
  return instance.get(RealTimeCurveApi.GetExceptionDetail, { params });
}

/**
 * @description 异常添加
 * @export
 * @param {*} data
 * @return {*}
 */
export function addException(data) {
  return instance.post(RealTimeCurveApi.AddException, data);
}

/**
 * @description 异常删除
 * @export
 * @param {*} data
 * @return {*}
 */
export function deleteException(params) {
  return instance.get(RealTimeCurveApi.DeleteException, { params });
}

/**
 * @description 异常处理
 * @export
 * @param {*} data
 * @return {*}
 */
export function updateException(data) {
  return instance.post(RealTimeCurveApi.UpdateException, data);
}

/**
 * @description 文件下载
 * @export
 * @param {*} [params={}]
 * @return {*}
 */
export function downloadFile(params = {}) {
  return instance.get(RealTimeCurveApi.DownloadFile, {
    params,
    responseType: 'blob',
  });
}

/**
 * @description 文件删除
 * @export
 * @param {*} [params={}]
 * @return {*}
 */
export function deleteFile(params = {}) {
  return instance.get(RealTimeCurveApi.DeleteFile, { params });
}

/**
 * @description 获取模板树
 * @export
 * @param {*} [params={}]
 * @return {*}
 */
export function getTemplateTree(params = {}) {
  return instance.get(RealTimeCurveApi.GetTemplateTree, { params });
}

/**
 * @description 获取曲线列表
 * @export
 * @param {*} [params={}]
 * @return {*}
 */
export function getTemplateTrackCurveList(params = {}) {
  return instance.get(RealTimeCurveApi.GetTemplateTrackCurveList, { params });
}

/**
 * @description 曲线编辑
 * @export
 * @param {*} data
 * @return {*}
 */
export function editorTemplateTrackCurve(data) {
  return instance.post(RealTimeCurveApi.EditorTemplateTrackCurve, data);
}

/**
 * @description 邻井报警数据
 * @export
 * @param {*} [params={}]
 * @return {*}
 */
export function getAdjoiningWellAlarm(params = {}) {
  return instance.get(RealTimeCurveApi.GetAdjoiningWellAlarm, { params });
}

/**
 * @description 获取wits历史数据
 * @export
 * @param {*} data
 * @return {*}
 */
export function getWitsHistory(data) {
  return instance.post(RealTimeCurveApi.GetWitsHistory, data);
}

/**
 * @description 删除模板图道
 * @export
 * @param {*} [params={}]
 * @return {*}
 */
export function deleteTemplateTrack(params = {}) {
  return instance.get(RealTimeCurveApi.DeleteTemplateTrack, { params });
}

/**
 * @description 删除模板图道曲线
 * @export
 * @param {*} [params={}]
 * @return {*}
 */
export function deleteTemplateTrackCurve(params = {}) {
  return instance.get(RealTimeCurveApi.DeleteTemplateTrackCurve, { params });
}

/**
 * @description 添加模板图道
 * @export
 * @param {*} [params={}]
 * @return {*}
 */
export function addTemplateTrack(data) {
  return instance.post(RealTimeCurveApi.AddTemplateTrack, data);
}

/**
 * @description 获取单位转换列表
 * @export
 * @param {*} [params={}]
 * @return {*}
 */
export function getUnitConversion(params = {}) {
  return instance.get(RealTimeCurveApi.GetUnitConversion, { params });
}

/**
 * @description 获取曲线配置信息
 * @export
 * @param {*} [params={}]
 * @return {*}
 */
export function getCurveConfigDetail(params = {}) {
  return instance.get(RealTimeCurveApi.GetCurveConfigDetail, { params });
}

/**
 * @description 添加模板图道曲线
 * @export
 * @param {*} [params={}]
 * @return {*}
 */
export function addTemplateTrackCurve(data) {
  return instance.post(RealTimeCurveApi.AddTemplateTrackCurve, data);
}

/**
 * @description 获取曲线列表
 * @export
 * @param {*} [params={}]
 * @return {*}
 */
export function getTemplateCurveList(params = {}) {
  return instance.get(RealTimeCurveApi.GetTemplateCurveList, { params });
}

export function getRiskData(params = {}) {
  return instance.get(RealTimeCurveApi.GetRiskData, { params });
}

export function getWellDetails(params = {}) {
  return instance.get(RealTimeCurveApi.GetWellDetails, { params });
}
