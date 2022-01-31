import { RestClient } from 'client';
import { CMConfig } from 'config';
import {
  DeleteDeviceRequest,
  DeleteDeviceTokenRequest,
  DeleteNotificationRequest,
  GetDeviceRequest,
  GetDevicesRequest,
  GetNotificationRequest,
  GetNotificationsCountRequest,
  GetNotificationsRequest,
  MarkAllNotificationsAsReadRequest,
  MarkNotificationAsReadRequest,
  RegisterDeviceExpoTokenRequest,
  RegisterDeviceTokenRequest,
  SendPushNotificationRequest,
  UpdateDeviceMetaRequest,
  UpdateDeviceRequest,
  UpdateDeviceTimeZoneRequest,
  UpdateDeviceUserRequest,
} from 'types/codemash.dtos';

export async function registerDeviceToken(request: RegisterDeviceTokenRequest) {
  const client = new RestClient(CMConfig.getInstance());
  return client.request(request);
}

export async function registerDeviceExpoToken(
  request: RegisterDeviceExpoTokenRequest,
) {
  const client = new RestClient(CMConfig.getInstance());
  return client.request(request);
}

export async function deleteDeviceToken(request: DeleteDeviceTokenRequest) {
  const client = new RestClient(CMConfig.getInstance());
  return client.request(request);
}

export async function getDevice(request: GetDeviceRequest) {
  const client = new RestClient(CMConfig.getInstance());
  return client.request(request);
}

export async function getDevices(request: GetDevicesRequest) {
  const client = new RestClient(CMConfig.getInstance());
  return client.request(request);
}

export async function updateDevice(request: UpdateDeviceRequest) {
  const client = new RestClient(CMConfig.getInstance());
  return client.request(request);
}

export async function updateDeviceUser(request: UpdateDeviceUserRequest) {
  const client = new RestClient(CMConfig.getInstance());
  return client.request(request);
}

export async function updateDeviceMeta(request: UpdateDeviceMetaRequest) {
  const client = new RestClient(CMConfig.getInstance());
  return client.request(request);
}

export async function updateDeviceTimeZone(
  request: UpdateDeviceTimeZoneRequest,
) {
  const client = new RestClient(CMConfig.getInstance());
  return client.request(request);
}

export async function getNotifications(request: GetNotificationsRequest) {
  const client = new RestClient(CMConfig.getInstance());
  return client.request(request);
}

export async function getNotification(request: GetNotificationRequest) {
  const client = new RestClient(CMConfig.getInstance());
  return client.request(request);
}

export async function deleteDevice(request: DeleteDeviceRequest) {
  const client = new RestClient(CMConfig.getInstance());
  return client.request(request);
}

export async function sendPushNotification(
  request: SendPushNotificationRequest,
) {
  const client = new RestClient(CMConfig.getInstance());
  return client.request(request);
}

export async function markNotificationAsRead(
  request: MarkNotificationAsReadRequest,
) {
  const client = new RestClient(CMConfig.getInstance());
  return client.request(request);
}

export async function markAllNotificationsAsRead(
  request: MarkAllNotificationsAsReadRequest,
) {
  const client = new RestClient(CMConfig.getInstance());
  return client.request(request);
}

export async function getNotificationsCount(
  request: GetNotificationsCountRequest,
) {
  const client = new RestClient(CMConfig.getInstance());
  return client.request(request);
}

export async function deleteNotification(request: DeleteNotificationRequest) {
  const client = new RestClient(CMConfig.getInstance());

  return client.request(request);
}
