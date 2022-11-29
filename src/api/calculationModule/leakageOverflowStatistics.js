import { instance } from "../config";

export const LeakageOverflowStatisticsApi = {
    GetLeakageOverflowStatisticsList: "/api/cfbgc-warning/leakageOverflow/page",
    AddLeakageOverflowStatistics: "/api/cfbgc-warning/leakageOverflow/save",
    DeleteLeakageOverflowStatistics: "/api/cfbgc-warning/leakageOverflow/delete",
    LeakageOverflowStatisticsSwitch: "/api/cfbgc-warning/leakageOverflow/closeOnOff",
}

/**
 * @description 漏失、溢流量统计-分页
 * @export
 * @param {*} params
 * @return {*} 
 */
export function getLeakageOverflowStatisticsList(params) {
    return instance.get(LeakageOverflowStatisticsApi.GetLeakageOverflowStatisticsList, { params })
}

/**
 * @description 漏失、溢流量统计-添加
 * @export
 * @param {*} data
 * @return {*} 
 */
export function addLeakageOverflowStatistics(data) {
    return instance.post(LeakageOverflowStatisticsApi.AddLeakageOverflowStatistics, data)
}

/**
 * @description 漏失、溢流量统计-删除
 * @export
 * @param {*} data
 * @return {*} 
 */
export function deleteLeakageOverflowStatistics(data) {
    return instance.post(LeakageOverflowStatisticsApi.DeleteLeakageOverflowStatistics, data)
}

/**
 * @description 漏失、溢流量统计-开关切换
 * @export
 * @param {*} params
 * @return {*} 
 */
 export function leakageOverflowStatisticsSwitch(params) {
    return instance.get(LeakageOverflowStatisticsApi.LeakageOverflowStatisticsSwitch, { params })
}




