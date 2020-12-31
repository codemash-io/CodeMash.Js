import * as server from '../server/server';
import Config from '../config/config';
import { CONFIG as Endpoints } from '../routes';
import { objectOrStringToString, toQueryString } from '../utils/utils';

export async function registerDeviceToken({
  secretKey, provider, token, userId, deviceId,
  operatingSystem, brand, deviceName, timeZone, language, locale, meta
}) {
  const response = await server.loadJson(`${Config.apiUrl}${Endpoints.PROJECT.NOTIFICATIONS.PUSH.REGISTER_TOKEN}`,
    {
      method: 'POST',
      headers: {
        'X-CM-ProjectId': Config.projectId,
        Authorization: `Bearer ${secretKey || Config.secretKey}`,
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        provider,
        token,
        userId,
        deviceId,
        operatingSystem,
        brand,
        deviceName,
        timeZone,
        language,
        locale,
        meta
      })
    });

  return response;
}

export async function deleteDeviceToken({ secretKey, deviceId, deviceKey }) {
  const request = {
    deviceKey
  };

  const requestUrl = `${Endpoints.PROJECT.NOTIFICATIONS.PUSH.DELETE_DEVICE_TOKEN(deviceId)}?${toQueryString(request)}`;
  const response = await server.loadJson(`${Config.apiUrl}${requestUrl}`,
    {
      method: 'DELETE',
      headers: {
        'X-CM-ProjectId': Config.projectId,
        Authorization: `Bearer ${secretKey || Config.secretKey}`,
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: null
    });

  return response;
}

export async function getDevice({ secretKey, idOrKey }) {
  const response = await server.loadJson(`${Config.apiUrl}${Endpoints.PROJECT.NOTIFICATIONS.PUSH.GET_DEVICE(idOrKey)}`,
    {
      method: 'GET',
      headers: {
        'X-CM-ProjectId': Config.projectId,
        Authorization: `Bearer ${secretKey || Config.secretKey}`,
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: null
    });
  return response;
}

export async function getDevices({ secretKey, userId, pageNumber, pageSize, filter, sort }) {
  const request = {
    userId,
    pageSize: pageSize || Config.tablePageSize,
    pageNumber: pageNumber || 0,
    filter: objectOrStringToString(filter),
    sort: objectOrStringToString(sort)
  };
  const requestUrl = `${Endpoints.PROJECT.NOTIFICATIONS.PUSH.GET_DEVICES}?${toQueryString(request)}`;

  const response = await server.loadJson(`${Config.apiUrl}${requestUrl}`,
    {
      method: 'GET',
      headers: {
        'X-CM-ProjectId': Config.projectId,
        Authorization: `Bearer ${secretKey || Config.secretKey}`,
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: null
    });
  return response;
}

export async function updateDevice({
  secretKey, idOrKey, operatingSystem, brand, deviceName, timeZone, language, locale, meta
}) {
  const response = await server.loadJson(`${Config.apiUrl}${Endpoints.PROJECT.NOTIFICATIONS.PUSH.UPDATE_DEVICE(idOrKey)}`,
    {
      method: 'PATCH',
      headers: {
        'X-CM-ProjectId': Config.projectId,
        Authorization: `Bearer ${secretKey || Config.secretKey}`,
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        operatingSystem,
        brand,
        deviceName,
        timeZone,
        language,
        locale,
        meta
      })
    });

  return response;
}

export async function deleteDevice({ secretKey, idOrKey }) {
  const response = await server.loadJson(`${Config.apiUrl}${Endpoints.PROJECT.NOTIFICATIONS.PUSH.DELETE_DEVICE(idOrKey)}`,
    {
      method: 'DELETE',
      headers: {
        'X-CM-ProjectId': Config.projectId,
        Authorization: `Bearer ${secretKey || Config.secretKey}`,
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: null
    });
  return response;
}

export async function getNotifications({ secretKey, userId, deviceId, pageNumber, pageSize, filter, sort, deviceKey }) {
  const request = {
    userId,
    deviceId,
    pageSize: pageSize || Config.tablePageSize,
    pageNumber: pageNumber || 0,
    filter: objectOrStringToString(filter),
    sort: objectOrStringToString(sort),
    deviceKey
  };

  const requestUrl = `${Endpoints.PROJECT.NOTIFICATIONS.PUSH.GET_ALL}?${toQueryString(request)}`;
  const response = await server.loadJson(`${Config.apiUrl}${requestUrl}`,
    {
      method: 'GET',
      headers: {
        'X-CM-ProjectId': Config.projectId,
        Authorization: `Bearer ${secretKey || Config.secretKey}`,
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: null
    });
  return response;
}

export async function getNotification({ secretKey, id, deviceKey }) {
  const request = {
    deviceKey
  };

  const requestUrl = `${Endpoints.PROJECT.NOTIFICATIONS.PUSH.GET(id)}?${toQueryString(request)}`;
  const response = await server.loadJson(`${Config.apiUrl}${requestUrl}`,
    {
      method: 'GET',
      headers: {
        'X-CM-ProjectId': Config.projectId,
        Authorization: `Bearer ${secretKey || Config.secretKey}`,
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: null
    });
  return response;
}

export async function sendPushNotification({
  secretKey, templateId, users, devices, roles, tokens, postpone, respectTimeZone, isNonPushable, forceRequestLanguage
}) {
  const response = await server.loadJson(`${Config.apiUrl}${Endpoints.PROJECT.NOTIFICATIONS.PUSH.SEND}`,
    {
      method: 'POST',
      headers: {
        'X-CM-ProjectId': Config.projectId,
        Authorization: `Bearer ${secretKey || Config.secretKey}`,
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        templateId,
        users,
        devices,
        roles,
        tokens,
        postpone,
        respectTimeZone,
        isNonPushable,
        forceRequestLanguage
      })
    });
  return response;
}

export async function markNotificationAsRead({ secretKey, id, userId, deviceId, deviceKey }) {
  const response = await server.loadJson(`${Config.apiUrl}${Endpoints.PROJECT.NOTIFICATIONS.PUSH.MARK_NOTIFICATION_AS_READ(id)}`,
    {
      method: 'PATCH',
      headers: {
        'X-CM-ProjectId': Config.projectId,
        Authorization: `Bearer ${secretKey || Config.secretKey}`,
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        userId,
        deviceId,
        notificationId: id,
        deviceKey
      })
    });
  return response;
}

export async function markNotificationsAsRead({ secretKey, userId, deviceId, filter, deviceKey }) {
  const response = await server.loadJson(`${Config.apiUrl}${Endpoints.PROJECT.NOTIFICATIONS.PUSH.MARK_NOTIFICATIONS_AS_READ}`,
    {
      method: 'PATCH',
      headers: {
        'X-CM-ProjectId': Config.projectId,
        Authorization: `Bearer ${secretKey || Config.secretKey}`,
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        userId,
        deviceId,
        filter: objectOrStringToString(filter),
        deviceKey
      })
    });

  return response;
}

export async function getNotificationsCount({ secretKey, userId, deviceId, filter, groupBy, deviceKey }) {
  const request = {
    userId,
    deviceId,
    filter: objectOrStringToString(filter),
    groupBy,
    deviceKey
  };

  const requestUrl = `${Config.apiUrl}${Endpoints.PROJECT.NOTIFICATIONS.PUSH.GET_NOTIFICATIONS_COUNT}?${toQueryString(request)}`;
  const response = await server.loadJson(requestUrl,
    {
      method: 'GET',
      headers: {
        'X-CM-ProjectId': Config.projectId,
        Authorization: `Bearer ${secretKey || Config.secretKey}`,
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: null
    });
  return response;
}

export async function deleteNotification({ secretKey, id, deviceKey }) {
  const request = {
    deviceKey
  };

  const requestUrl = `${Config.apiUrl}${Endpoints.PROJECT.NOTIFICATIONS.PUSH.DELETE(id)}?${toQueryString(request)}`;
  const response = await server.loadJson(requestUrl,
    {
      method: 'DELETE',
      headers: {
        'X-CM-ProjectId': Config.projectId,
        Authorization: `Bearer ${secretKey || Config.secretKey}`,
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: null
    });
  return response;
}
