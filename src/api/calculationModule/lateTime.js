import { instance } from '../config';

export const LateTimeApi = {
  GetPhysicalDeterminationList: '/api/cfbgc-warning/lateTime/physicalDetermination/page',
  PhysicalDeterminationCalculate: '/api/cfbgc-warning/lateTime/physicalDetermination',
  GetLogTimePumpStrokeList: '/api/cfbgc-warning/lateTime/logTimePumpStroke/page',
  LogTimePumpStrokeListCalculate: '/api/cfbgc-warning/lateTime/logTimePumpStroke',
};

/**
 * @description 实物测定法-分页
 * @export
 * @param {*} data
 * @return {*}
 */
export function getPhysicalDeterminationList(data) {
  return instance.post(LateTimeApi.GetPhysicalDeterminationList, data);
}

/**
 * @description 实物测定法-计算
 * @export
 * @param {*} data
 * @return {*}
 */
export function physicalDeterminationCalculate(data) {
  return instance.post(LateTimeApi.PhysicalDeterminationCalculate, data);
}

/**
 * @description 泵冲法-分页
 * @export
 * @param {*} data
 * @return {*}
 */
export function getLogTimePumpStrokeList(data) {
  return instance.post(LateTimeApi.GetLogTimePumpStrokeList, data);
}

/**
 * @description 泵冲法-计算
 * @export
 * @param {*} data
 * @return {*}
 */
export function logTimePumpStrokeListCalculate(data) {
  return instance.post(LateTimeApi.LogTimePumpStrokeListCalculate, data);
}
