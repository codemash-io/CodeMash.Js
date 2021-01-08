import * as server from './server';
import Config from './config';
import { CONFIG as Endpoints } from './routes';

export async function sendEmail(record) {
  const response = await server.loadJson(`${Config.apiUrl}${Endpoints.PROJECT.NOTIFICATIONS.EMAIL.SEND}`,
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

  return response;
}
