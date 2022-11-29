import http from '@/utils/http/index';

export enum threeFileApi {
  GetTrajectory = '/drilling-api/drilling/trajectory/get',
  GetExtensionPoint = '/drilling-api/drilling/trajectory/extensionPoint',
}
export function getDrilling(parameter) {
  return http.get({
    url: threeFileApi.GetTrajectory,
    params: parameter,
  });
}

export function extensionPoint(parameter) {
  return http.post({
    url: threeFileApi.GetExtensionPoint,
    data: parameter,
  });
}
