import { instance } from "../config";

export const GroutRecordApi = {
    GetGroutRecordList: "/api/cfbgc-warning/grout/page",
    GroutRecordSwitch: "/api/cfbgc-warning/grout/closeOnOff",
    DeleteGroutRecord: "/api/cfbgc-warning/grout/delete",
    AddGroutRecord: "/api/cfbgc-warning/grout/save",
}

/**
 * @description 灌浆记录-分页
 * @export
 * @param {*} params
 * @return {*} 
 */
export function getGroutRecordList(params) {
    return instance.get(GroutRecordApi.GetGroutRecordList, { params })
}

/**
 * @description 灌浆记录-开关切换
 * @export
 * @param {*} params
 * @return {*} 
 */
export function groutRecordSwitch(params) {
    return instance.get(GroutRecordApi.GroutRecordSwitch, { params })
}

/**
 * @description 灌浆记录-删除
 * @export
 * @param {*} data
 * @return {*} 
 */
export function deleteGroutRecord(data) {
    return instance.post(GroutRecordApi.DeleteGroutRecord, data)
}

/**
 * @description 灌浆记录-添加
 * @export
 * @param {*} data
 * @return {*} 
 */
export function addGroutRecord(data) {
    return instance.post(GroutRecordApi.AddGroutRecord, data)
}



