import { RestClient } from 'client';
import { CMConfig } from 'config';
import {
  DeleteDeviceRequest,
  DeleteDeviceTokenRequest,
  DeleteDeviceTokenResponse,
  DeleteNotificationRequest,
  DeleteNotificationResponse,
  GetDeviceRequest,
  GetDeviceResponse,
  GetDevicesRequest,
  GetDevicesResponse,
  GetNotificationRequest,
  GetNotificationResponse,
  GetNotificationsCountRequest,
  GetNotificationsRequest,
  GetNotificationsResponse,
  IReturnVoid,
  MarkAllNotificationsAsReadRequest,
  MarkNotificationAsReadRequest,
  MarkNotificationAsReadResponse,
  RegisterDeviceExpoTokenRequest,
  RegisterDeviceExpoTokenResponse,
  RegisterDeviceTokenRequest,
  RegisterDeviceTokenResponse,
  SendPushNotificationRequest,
  SendPushNotificationResponse,
  UpdateDeviceMetaRequest,
  UpdateDeviceMetaResponse,
  UpdateDeviceRequest,
  UpdateDeviceTimeZoneRequest,
  UpdateDeviceTimeZoneResponse,
  UpdateDeviceUserRequest,
  UpdateDeviceUserResponse,
} from 'types/codemash.dtos';

export async function registerDeviceToken(
  request: RegisterDeviceTokenRequest,
): Promise<RegisterDeviceTokenResponse> {
  const response = RestClient.New().CallApi<RegisterDeviceTokenResponse>(
    request,
  );
  return response;
}

export async function registerDeviceExpoToken(
  request: RegisterDeviceExpoTokenRequest,
): Promise<RegisterDeviceExpoTokenResponse> {
  const response = RestClient.New().CallApi<RegisterDeviceExpoTokenResponse>(
    request,
  );
  return response;
}

export async function deleteDeviceToken(
  request: DeleteDeviceTokenRequest,
): Promise<DeleteDeviceTokenResponse> {
  const response = RestClient.New().CallApi<DeleteDeviceTokenResponse>(request);
  return response;
}

export async function getDevice(
  request: GetDeviceRequest,
): Promise<GetDeviceResponse> {
  const response = RestClient.New().CallApi<GetDeviceResponse>(request);
  return response;
}

export async function getDevices(
  request: GetDevicesRequest,
): Promise<GetDevicesResponse> {
  const response = RestClient.New().CallApi<GetDevicesResponse>(request);
  return response;
}

export async function updateDevice(
  request: UpdateDeviceRequest,
): Promise<IReturnVoid> {
  const response = RestClient.New().CallApi<IReturnVoid>(request);
  return response;
}

export async function updateDeviceUser(
  request: UpdateDeviceUserRequest,
): Promise<UpdateDeviceUserResponse> {
  const response = RestClient.New().CallApi<UpdateDeviceUserResponse>(request);
  return response;
}

export async function updateDeviceMeta(
  request: UpdateDeviceMetaRequest,
): Promise<UpdateDeviceMetaResponse> {
  const response = RestClient.New().CallApi<UpdateDeviceMetaResponse>(request);
  return response;
}

export async function updateDeviceTimeZone(
  request: UpdateDeviceTimeZoneRequest,
): Promise<UpdateDeviceTimeZoneResponse> {
  const response = RestClient.New().CallApi<UpdateDeviceTimeZoneResponse>(
    request,
  );
  return response;
}

export async function getNotifications(
  request: GetNotificationsRequest,
): Promise<GetNotificationsResponse> {
  const response = RestClient.New().CallApi<GetNotificationsResponse>(request);
  return response;
}

export async function getNotification(
  request: GetNotificationRequest,
): Promise<GetNotificationResponse> {
  const response = RestClient.New().CallApi<GetNotificationResponse>(request);
  return response;
}

export async function deleteDevice(
  request: DeleteDeviceRequest,
): Promise<IReturnVoid> {
  const response = RestClient.New().CallApi<IReturnVoid>(request);
  return response;
}

export async function sendPushNotification(
  request: SendPushNotificationRequest,
): Promise<SendPushNotificationResponse> {
  const response = RestClient.New().CallApi<SendPushNotificationResponse>(
    request,
  );
  return response;
}

export async function markNotificationAsRead(
  request: MarkNotificationAsReadRequest,
): Promise<MarkNotificationAsReadResponse> {
  const response = RestClient.New().CallApi<MarkNotificationAsReadResponse>(
    request,
  );
  return response;
}

export async function markAllNotificationsAsRead(
  request: MarkAllNotificationsAsReadRequest,
): Promise<MarkNotificationAsReadResponse> {
  const response = RestClient.New().CallApi<MarkNotificationAsReadResponse>(
    request,
  );
  return response;
}

export async function getNotificationsCount(
  request: GetNotificationsCountRequest,
): Promise<GetNotificationsResponse> {
  const response = RestClient.New().CallApi<GetNotificationsResponse>(request);
  return response;
}

export async function deleteNotification(
  request: DeleteNotificationRequest,
): Promise<DeleteNotificationResponse> {
  const response = RestClient.New().CallApi<DeleteNotificationResponse>(
    request,
  );
  return response;
}
