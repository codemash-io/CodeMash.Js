import * as server from '../server/server';
import Config from '../config/config';
import { CONFIG as Endpoints } from '../routes';

export async function getOrder (id) {
  const response = await server.loadJson(`${Config.apiUrl}${Endpoints.PROJECT.PAYMENTS.ORDERS.GET(id)}`,
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

export async function getOrders (pageNumber, pageSize, sort, filter, userId) {
  const response = await server.loadJson(`${Config.apiUrl}${Endpoints.PROJECT.PAYMENTS.ORDERS.GET_ALL}`,
    {
      method: 'GET',
      headers: {
        'X-CM-ProjectId': Config.projectId,
        Authorization: `Bearer ${Config.secretKey}`,
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        userId,
        pageNumber,
        pageSize,
        sort,
        filter
      })
    });
  return response;
}

export async function createOrder (record) {
  const response = await server.loadJson(`${Config.apiUrl}${Endpoints.PROJECT.PAYMENTS.ORDERS.CREATE}`,
    {
      method: 'POST',
      headers: {
        'X-CM-ProjectId': Config.projectId,
        Authorization: `Bearer ${Config.secretKey}`,
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(record)
    });

  return response.result;
}

export async function createPayseraTransaction (orderId, record) {
  const response = await server.loadJson(`${Config.apiUrl}${Endpoints.PROJECT.PAYMENTS.TRANSACTIONS.CREATE_PAYSERA(orderId)}`,
    {
      method: 'POST',
      headers: {
        'X-CM-ProjectId': Config.projectId,
        Authorization: `Bearer ${Config.secretKey}`,
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(record)
    });

  return response.result;
}
