import { instance } from '../config';

export const GasUpshotVelocityApi = {
  GetLogDepthList: '/api/cfbgc-warning/lsUpSpeed/logDepth/page',
  LogDepthCalculate: '/api/cfbgc-warning/lsUpSpeed/logDepth',
  GetLogTimeList: '/api/cfbgc-warning/lsUpSpeed/logTime/page',
  LogTimeCalculate: '/api/cfbgc-warning/lsUpSpeed/logTime',
  GetPumpStrokeList: '/api/cfbgc-warning/lsUpSpeed/pumpStroke/page',
  PumpStrokeCalculate: '/api/cfbgc-warning/lsUpSpeed/pumpStroke',
};

/**
 * @description 气体上窜速度迟到深度法-分页
 * @export
 * @param {*} data
 * @return {*}
 */
export function getLogDepthList(data) {
  return instance.post(GasUpshotVelocityApi.GetLogDepthList, data);
}

/**
 * @description 气体上窜速度迟到深度法-计算
 * @export
 * @param {*} data
 * @return {*}
 */
export function logDepthCalculate(data) {
  return instance.post(GasUpshotVelocityApi.LogDepthCalculate, data);
}

/**
 * @description 气体上窜速度迟到时间法-分页
 * @export
 * @param {*} data
 * @return {*}
 */
export function getLogTimeList(data) {
  return instance.post(GasUpshotVelocityApi.GetLogTimeList, data);
}

/**
 * @description 气体上窜速度迟到时间法-计算
 * @export
 * @param {*} data
 * @return {*}
 */
export function logTimeCalculate(data) {
  return instance.post(GasUpshotVelocityApi.LogTimeCalculate, data);
}

/**
 * @description 气体上窜速度泵冲法-分页
 * @export
 * @param {*} data
 * @return {*}
 */
export function getPumpStrokeList(data) {
  return instance.post(GasUpshotVelocityApi.GetPumpStrokeList, data);
}

/**
 * @description 气体上窜速度泵冲法-计算
 * @export
 * @param {*} data
 * @return {*}
 */
export function pumpStrokeCalculate(data) {
  return instance.post(GasUpshotVelocityApi.PumpStrokeCalculate, data);
}
