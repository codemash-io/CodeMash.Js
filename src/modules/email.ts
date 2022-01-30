import { RestClient } from 'client';
import { CMConfig } from 'config';
import { DeleteEmailFromQueueRequest } from 'types';
import { SendEmailRequest } from 'types/codemash.dtos';

export async function sendEmail(request: SendEmailRequest) {
  const client = new RestClient(CMConfig.getInstance());
  return client.request(request);
}

export async function deleteEmailFromQueue(
  request: DeleteEmailFromQueueRequest,
) {
  const client = new RestClient(CMConfig.getInstance());
  return client.request(request);
}
