import http from '@/utils/http/index';

export enum VisualConfigApi {
  SaveTemplate = '/track-api/template/save',
  GetCurveData = '/track-api/curve/fieldData',
  GetCurveDataList = '/track-api/curve/fields',
  DataSourceChoose = '/transmission-api/wist/connect',
  GetLineList = '/track-api/curve/cda-parameter/list/dropDown',//获取曲线列表
  GetLineDetail = '/track-api/curve/cda-parameter/detail',//获取曲线详细信息
  GetUnitList = '/track-api/unit/gwdc-available-conversion/listByGroup',//获取单位下拉列表
  SaveTemplateStruct = '/track-api/template/save/struct',//新增模板
  EditTemplateStruct = '/track-api/template/update/struct',//编辑模板（结构）
  EditTemplate = '/track-api/template/update',//编辑模板
  GetTemplate = '/track-api/template/list',//查询模板列表
  GetTemplateDetailStruct = '/track-api/template/detail/struct',//查询模板详情(结构)
  GetTemplateDetail = '/track-api/template/detail',//查询模板详情
  GetTemplateCheckName = '/track-api/template/check/name',//校验模板名称
  DelTemplate = '/track-api/template/delete',//删除模板
  GetHistoryCurveData = '/track-api/curve/historyCurveData',//获取历史数据根据曲线Idlist
}

export function getLineListApi(params = {}) {
  return http.get({
    url: VisualConfigApi.GetLineList,
    params,
  });
}
export function getLineDetailApi(params = {}) {
  return http.get({
    url: VisualConfigApi.GetLineDetail,
    params,
  });
}
export function getUnitListApi(params = {}) {
  return http.get({
    url: VisualConfigApi.GetUnitList,
    params,
  });
}
export function saveTemplateStructApi(data) {
  return http.post({
    url: VisualConfigApi.SaveTemplateStruct,
    data,
  });
}
export function editTemplateStructApi(data) {
  return http.post({
    url: VisualConfigApi.EditTemplateStruct,
    data,
  });
}
export function editTemplateApi(data) {
  return http.post({
    url: VisualConfigApi.EditTemplate,
    data,
  });
}
export function getTemplateApi(params = {}) {
  return http.get({
    url: VisualConfigApi.GetTemplate,
    params,
  });
}
export function getHistoryCurveDataApi(params = {}) {
  return http.get({
    url: VisualConfigApi.GetHistoryCurveData,
    params,
  });
}
export function getTemplateDetailStructApi(params = {}) {
  return http.get({
    url: VisualConfigApi.GetTemplateDetailStruct + '/'+params.id,
    params,
  });
}
export function getTemplateDetailApi(params = {}) {
  return http.get({
    url: VisualConfigApi.GetTemplateDetail,
    params,
  });
}
export function getTemplateCheckNameApi(params = {}) {
  return http.get({
    url: VisualConfigApi.GetTemplateCheckName,
    params,
  });
}
export function delTemplateApi(data) {
  return http.post({
    url: VisualConfigApi.DelTemplate,
    data,
  });
}
export function saveTemplate(data) {
  return http.post({
    url: VisualConfigApi.SaveTemplate,
    data,
  });
}

export function getCurveData(params = {}) {
  return http.get({
    url: VisualConfigApi.GetCurveData,
    params,
  });
}

export function getCurveDataList(params = {}) {
  return http.get({
    url: VisualConfigApi.GetCurveDataList,
    params,
  });
}

export function dataSourceChoose(data) {
  return http.post({
    url: VisualConfigApi.DataSourceChoose,
    data,
  });
}
