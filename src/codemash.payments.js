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
