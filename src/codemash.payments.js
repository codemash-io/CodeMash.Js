import * as server from '../server/server';
import Config from '../config/config';
import { CONFIG as Endpoints } from '../routes';
import { objectOrStringToString, toQueryString } from '../utils/utils';

export async function getOrder ({ secretKey, id }) {
  const response = await server.loadJson(`${Config.apiUrl}${Endpoints.PROJECT.PAYMENTS.ORDERS.GET(id)}`,
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

export async function getOrders ({ secretKey, pageNumber, pageSize, sort, filter, userId }) {
  const request = {
    userId,
    pageSize: pageSize || Config.tablePageSize,
    pageNumber: pageNumber || 0,
    filter: objectOrStringToString(filter),
    sort: objectOrStringToString(sort)
  };

  const requestUrl = `${Endpoints.PROJECT.PAYMENTS.ORDERS.GET_ALL}?${toQueryString(request)}`;

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

export async function createOrder ({ secretKey, accountId, orderSchemaId, userId, lines, asGuest, customerDetails, isTest, meta }) {
  const response = await server.loadJson(`${Config.apiUrl}${Endpoints.PROJECT.PAYMENTS.ORDERS.CREATE}`,
    {
      method: 'POST',
      headers: {
        'X-CM-ProjectId': Config.projectId,
        Authorization: `Bearer ${secretKey || Config.secretKey}`,
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        accountId,
        orderSchemaId,
        userId,
        lines,
        asGuest,
        customerDetails,
        isTest,
        meta
      })
    });

  return response;
}

export async function createPayseraTransaction ({ secretKey, orderId, mode }) {
  const response = await server.loadJson(`${Config.apiUrl}${Endpoints.PROJECT.PAYMENTS.TRANSACTIONS.CREATE_PAYSERA(orderId)}`,
    {
      method: 'POST',
      headers: {
        'X-CM-ProjectId': Config.projectId,
        Authorization: `Bearer ${secretKey || Config.secretKey}`,
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        mode
      })
    });

  return response;
}

export async function createCustomer ({
  secretKey, accountId, userId, name, email, description, phone, countryCode, city,
  address, address2, postalCode, area, meta
}) {
  const response = await server.loadJson(`${Config.apiUrl}${Endpoints.PROJECT.PAYMENTS.CUSTOMERS.CREATE}`,
    {
      method: 'POST',
      headers: {
        'X-CM-ProjectId': Config.projectId,
        Authorization: `Bearer ${secretKey || Config.secretKey}`,
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        accountId,
        userId,
        name,
        email,
        description,
        phone,
        countryCode,
        city,
        address,
        address2,
        postalCode,
        area,
        meta
      })
    });

  return response;
}

export async function updateCustomer ({
  secretKey, id, name, email, description, phone, countryCode, city,
  address, address2, postalCode, area, meta
}) {
  const response = await server.loadJson(`${Config.apiUrl}${Endpoints.PROJECT.PAYMENTS.CUSTOMERS.UPDATE(id)}`,
    {
      method: 'POST',
      headers: {
        'X-CM-ProjectId': Config.projectId,
        Authorization: `Bearer ${secretKey || Config.secretKey}`,
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name,
        email,
        description,
        phone,
        countryCode,
        city,
        address,
        address2,
        postalCode,
        area,
        meta
      })
    });

  return response;
}

export async function getCustomers ({ secretKey, userId, pageNumber, pageSize, filter, sort }) {
  const request = {
    userId: '5a9c84c0-0d3d-40b8-a254-e967407bb17a',
    pageSize: pageSize || Config.tablePageSize,
    pageNumber: pageNumber || 0,
    filter: objectOrStringToString(filter),
    sort: objectOrStringToString(sort)
  };

  const requestUrl = `${Endpoints.PROJECT.PAYMENTS.CUSTOMERS.GET_ALL}?${toQueryString(request)}`;
  const response = await server.loadJson(`${Config.apiUrl}${requestUrl}`,
    {
      method: 'GET',
      headers: {
        'X-CM-ProjectId': Config.projectId,
        Authorization: `Bearer ${secretKey || Config.secretKey}`,
        Accept: 'application/json',
        'Content-Type': 'application/json'
      }
    });

  return response;
}

export async function getCustomer ({ secretKey, id }) {
  const response = await server.loadJson(`${Config.apiUrl}${Endpoints.PROJECT.PAYMENTS.CUSTOMERS.GET(id)}`,
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

export async function deleteCustomer ({ secretKey, id }) {
  const response = await server.loadJson(`${Config.apiUrl}${Endpoints.PROJECT.PAYMENTS.CUSTOMERS.DELETE(id)}`,
    {
      method: 'DELETE',
      headers: {
        'X-CM-ProjectId': Config.projectId,
        Authorization: `Bearer ${secretKey || Config.secretKey}`,
        Accept: 'application/json',
        'Content-Type': 'application/json'
      }
    });

  return response;
}

export async function getPaymentMethodSetup ({ secretKey, accountId, usage }) {
  const request = {
    accountId, usage
  };
  const response = await server.loadJson(`${Config.apiUrl}${Endpoints.PROJECT.PAYMENTS.METHODS.GET_SETUP}?${toQueryString(request)}`,
    {
      method: 'GET',
      headers: {
        'X-CM-ProjectId': Config.projectId,
        Authorization: `Bearer ${secretKey || Config.secretKey}`,
        Accept: 'application/json',
        'Content-Type': 'application/json'
      }
    });

  return response;
}

export async function attachPaymentMethod ({ secretKey, customerId, setupId, setupClientSecret, asDefault }) {
  const response = await server.loadJson(`${Config.apiUrl}${Endpoints.PROJECT.PAYMENTS.METHODS.ATTACH}`,
    {
      method: 'POST',
      headers: {
        'X-CM-ProjectId': Config.projectId,
        Authorization: `Bearer ${secretKey || Config.secretKey}`,
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        customerId,
        setupId,
        setupClientSecret,
        asDefault
      })
    });

  return response;
}

export async function detachPaymentMethod ({ secretKey, id, customerId }) {
  const response = await server.loadJson(`${Config.apiUrl}${Endpoints.PROJECT.PAYMENTS.METHODS.DETACH}?paymentMethodId=${id}&customerId=${customerId}`,
    {
      method: 'DELETE',
      headers: {
        'X-CM-ProjectId': Config.projectId,
        Authorization: `Bearer ${secretKey || Config.secretKey}`,
        Accept: 'application/json',
        'Content-Type': 'application/json'
      }
    });

  return response;
}
