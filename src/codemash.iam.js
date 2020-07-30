import * as server from '../server/server';
import Config from '../config/config';
import { CONFIG as Endpoints } from '../routes';
import { objectOrStringToString } from '../utils/utils';

export async function register ({
  email, password, displayName, firstName, lastName,
  autoLogin = true, meta, language, timeZone, subscribeToNews, country, countryCode,
  area, city, address, address2, phone, fax, company, postalCode, gender, birthday, roles
}) {
  const response = await server.loadJson(`${Config.apiUrl}${Endpoints.PROJECT.MEMBERSHIP.USERS.REGISTER}`,
    {
      method: 'POST',
      headers: {
        'X-CM-ProjectId': Config.projectId,
        Authorization: `Bearer ${Config.secretKey}`,
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email,
        password,
        displayName,
        firstName,
        lastName,
        autoLogin,
        meta: objectOrStringToString(meta),
        language,
        timeZone,
        subscribeToNews,
        country,
        countryCode,
        area,
        city,
        address,
        address2,
        phone,
        fax,
        company,
        postalCode,
        gender,
        birthday,
        roles
      })
    });
  return response;
}

export async function invite ({
  email, displayName, firstName, lastName,
  meta, language, timeZone, subscribeToNews, country, countryCode,
  area, city, address, address2, phone, fax, company, postalCode, gender, birthday, roles
}) {
  const response = await server.loadJson(`${Config.apiUrl}${Endpoints.PROJECT.MEMBERSHIP.USERS.INVITE}`,
    {
      method: 'POST',
      headers: {
        'X-CM-ProjectId': Config.projectId,
        Authorization: `Bearer ${Config.secretKey}`,
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email,
        displayName,
        firstName,
        lastName,
        meta: objectOrStringToString(meta),
        language,
        timeZone,
        subscribeToNews,
        country,
        countryCode,
        area,
        city,
        address,
        address2,
        phone,
        fax,
        company,
        postalCode,
        gender,
        birthday,
        roles
      })
    });
  return response;
}

export async function updateUser ({
  id, displayName, firstName, lastName,
  meta, language, timeZone, subscribeToNews, unsubscribedNewsTags, country, countryCode,
  area, city, address, address2, phone, fax, company, postalCode, gender, birthday, roles
}) {
  const response = await server.loadJson(`${Config.apiUrl}${Endpoints.PROJECT.MEMBERSHIP.USERS.UPDATE(id)}`,
    {
      method: 'PATCH',
      headers: {
        'X-CM-ProjectId': Config.projectId,
        Authorization: `Bearer ${Config.secretKey}`,
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        displayName,
        firstName,
        lastName,
        meta: objectOrStringToString(meta),
        language,
        timeZone,
        subscribeToNews,
        unsubscribedNewsTags,
        country,
        countryCode,
        area,
        city,
        address,
        address2,
        phone,
        fax,
        company,
        postalCode,
        gender,
        birthday,
        roles
      })
    });
  return response;
}

export async function updateProfile ({
  secretKey, displayName, firstName, lastName,
  meta, language, timeZone, subscribeToNews, unsubscribedNewsTags, country, countryCode,
  area, city, address, address2, phone, fax, company, postalCode, gender, birthday
}) {
  const response = await server.loadJson(`${Config.apiUrl}${Endpoints.PROJECT.MEMBERSHIP.USERS.UPDATE_PROFILE}`,
    {
      method: 'PATCH',
      headers: {
        'X-CM-ProjectId': Config.projectId,
        Authorization: `Bearer ${secretKey || Config.secretKey}`,
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        displayName,
        firstName,
        lastName,
        meta: objectOrStringToString(meta),
        language,
        timeZone,
        subscribeToNews,
        unsubscribedNewsTags,
        country,
        countryCode,
        area,
        city,
        address,
        address2,
        phone,
        fax,
        company,
        postalCode,
        gender,
        birthday
      })
    });
  return response;
}

export async function getUsers ({ pageNumber, pageSize, filter, sort, includePermissions, includeDevices, includeMeta }) {
  const response = await server.loadJson(`${Config.apiUrl}${Endpoints.PROJECT.MEMBERSHIP.USERS.GET_ALL}`,
    {
      method: 'POST',
      headers: {
        'X-CM-ProjectId': Config.projectId,
        Authorization: `Bearer ${Config.secretKey}`,
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        pageSize: pageSize || Config.tablePageSize,
        pageNumber: pageNumber || 0,
        filter: objectOrStringToString(filter),
        sort: objectOrStringToString(sort),
        includePermissions,
        includeDevices,
        includeMeta
      })
    });
  return response;
}

export async function getUser ({ id, provider, includePermissions, includeDevices, includeMeta, includeUnreadNotifications }) {
  let url = `${Config.apiUrl}${Endpoints.PROJECT.MEMBERSHIP.USERS.GET(id)}`;
  const queries = [];

  if (provider) queries.push(`provider=${provider}`);
  if (includePermissions) queries.push(`includePermissions=${true}`);
  if (includeDevices) queries.push(`includeDevices=${true}`);
  if (includeMeta) queries.push(`includeMeta=${true}`);
  if (includeUnreadNotifications) queries.push(`includeUnreadNotifications=${true}`);

  if (queries.length > 0) {
    url += `?${queries.join('&')}`;
  }

  const response = await server.loadJson(url,
    {
      method: 'GET',
      headers: {
        'X-CM-ProjectId': Config.projectId,
        Authorization: `Bearer ${Config.secretKey}`,
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: null
    });
  return response.result;
}

export async function getUserByEmail ({ email, provider, includePermissions, includeDevices, includeMeta, includeUnreadNotifications }) {
  let url = `${Config.apiUrl}${Endpoints.PROJECT.MEMBERSHIP.USERS.GET_BY_EMAIL}`;
  const queries = [];

  if (email) queries.push(`email=${email}`);
  if (provider) queries.push(`provider=${provider}`);
  if (includePermissions) queries.push(`includePermissions=${true}`);
  if (includeDevices) queries.push(`includeDevices=${true}`);
  if (includeMeta) queries.push(`includeMeta=${true}`);
  if (includeUnreadNotifications) queries.push(`includeUnreadNotifications=${true}`);

  if (queries.length > 0) {
    url += `?${queries.join('&')}`;
  }

  const response = await server.loadJson(url,
    {
      method: 'GET',
      headers: {
        'X-CM-ProjectId': Config.projectId,
        Authorization: `Bearer ${Config.secretKey}`,
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: null
    });
  return response.result;
}

export async function getProfile ({ secretKey, includePermissions, includeDevices, includeMeta, includeUnreadNotifications }) {
  let url = `${Config.apiUrl}${Endpoints.PROJECT.MEMBERSHIP.USERS.GET_PROFILE}`;
  const queries = [];

  if (includePermissions) queries.push(`includePermissions=${true}`);
  if (includeDevices) queries.push(`includeDevices=${true}`);
  if (includeMeta) queries.push(`includeMeta=${true}`);
  if (includeUnreadNotifications) queries.push(`includeUnreadNotifications=${true}`);

  if (queries.length > 0) {
    url += `?${queries.join('&')}`;
  }

  const response = await server.loadJson(url,
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
  return response.result;
}

export async function deleteUser ({ id }) {
  const response = await server.loadJson(`${Config.apiUrl}${Endpoints.PROJECT.MEMBERSHIP.USERS.DELETE(id)}`,
    {
      method: 'DELETE',
      headers: {
        'X-CM-ProjectId': Config.projectId,
        Authorization: `Bearer ${Config.secretKey}`,
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: null
    });
  return response;
}

export async function blockUser ({ id }) {
  const response = await server.loadJson(`${Config.apiUrl}${Endpoints.PROJECT.MEMBERSHIP.USERS.BLOCK(id)}`,
    {
      method: 'PUT',
      headers: {
        'X-CM-ProjectId': Config.projectId,
        Authorization: `Bearer ${Config.secretKey}`,
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: null
    });
  return response;
}

export async function unblockUser ({ id }) {
  const response = await server.loadJson(`${Config.apiUrl}${Endpoints.PROJECT.MEMBERSHIP.USERS.UNBLOCK(id)}`,
    {
      method: 'PUT',
      headers: {
        'X-CM-ProjectId': Config.projectId,
        Authorization: `Bearer ${Config.secretKey}`,
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: null
    });
  return response;
}

export async function updatePassword ({ secretKey, userId, currentPassword, password, repeatedPassword }) {
  const response = await server.loadJson(`${Config.apiUrl}${Endpoints.PROJECT.MEMBERSHIP.USERS.UPDATE_PASSWORD}`,
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
        currentPassword,
        password,
        repeatedPassword
      })
    });
  return response;
}

export async function createPasswordReset ({ email }) {
  const response = await server.loadJson(`${Config.apiUrl}${Endpoints.PROJECT.MEMBERSHIP.USERS.CREATE_PASSWORD_RESET}`,
    {
      method: 'POST',
      headers: {
        'X-CM-ProjectId': Config.projectId,
        Authorization: `Bearer ${Config.secretKey}`,
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email })
    });
  return response;
}

export async function checkPasswordReset ({ token }) {
  const response = await server.loadJson(`${Config.apiUrl}${Endpoints.PROJECT.MEMBERSHIP.USERS.CHECK_PASSWORD_RESET}?token=${token}`,
    {
      method: 'GET',
      headers: {
        'X-CM-ProjectId': Config.projectId,
        Authorization: `Bearer ${Config.secretKey}`,
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: null
    });
  return response;
}

export async function resetPassword ({ token, password, repeatedPassword }) {
  const response = await server.loadJson(`${Config.apiUrl}${Endpoints.PROJECT.MEMBERSHIP.USERS.RESET_PASSWORD}`,
    {
      method: 'POST',
      headers: {
        'X-CM-ProjectId': Config.projectId,
        Authorization: `Bearer ${Config.secretKey}`,
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ token, password, repeatedPassword })
    });
  return response;
}

export async function verifyRegistration ({ token }) {
  const response = await server.loadJson(`${Config.apiUrl}${Endpoints.PROJECT.MEMBERSHIP.USERS.VERIFY_REGISTRATION}`,
    {
      method: 'POST',
      headers: {
        'X-CM-ProjectId': Config.projectId,
        Authorization: `Bearer ${Config.secretKey}`,
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ token })
    });
  return response;
}

export async function checkInvitationToken ({ token }) {
  const response = await server.loadJson(`${Config.apiUrl}${Endpoints.PROJECT.MEMBERSHIP.USERS.CHECK_INVITATION_TOKEN}?token=${token}`,
    {
      method: 'GET',
      headers: {
        'X-CM-ProjectId': Config.projectId,
        Authorization: `Bearer ${Config.secretKey}`,
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: null
    });
  return response;
}

export async function verifyInvitation ({ token, password, repeatedPassword }) {
  const response = await server.loadJson(`${Config.apiUrl}${Endpoints.PROJECT.MEMBERSHIP.USERS.VERIFY_INVITATION}`,
    {
      method: 'POST',
      headers: {
        'X-CM-ProjectId': Config.projectId,
        Authorization: `Bearer ${Config.secretKey}`,
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ token, password, repeatedPassword })
    });
  return response;
}

export async function login ({ username, password }) {
  const response = await server.loadJson(`${Config.apiUrl}${Endpoints.ACCOUNT.LOGIN(username, password)}`,
    {
      method: 'POST',
      headers: {
        'X-CM-ProjectId': Config.projectId,
        Authorization: `Bearer ${Config.secretKey}`,
        Accept: 'application/json',
        'Content-Type': 'application/json'
      }
    });
  return response ? response.result : null;
}

export async function checkAuthentication ({ secretKey }) {
  const response = await server.loadJson(`${Config.apiUrl}${Endpoints.ACCOUNT.CHECK_AUTH}`,
    {
      method: 'GET',
      headers: {
        'X-CM-ProjectId': Config.projectId,
        Authorization: `Bearer ${secretKey || Config.secretKey}`,
        Accept: 'application/json',
        'Content-Type': 'application/json'
      }
    });
  return response ? response.result : null;
}