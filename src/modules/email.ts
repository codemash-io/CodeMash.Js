import { RestClient } from 'client';
import { CMConfig } from 'config';
import { DeleteEmailRequest, SendEmailRequest } from 'types/codemash.dtos';

export async function sendEmail(request: SendEmailRequest) {
  const client = new RestClient(CMConfig.getInstance());
  return client.request(request);
}

export async function deleteEmail(request: DeleteEmailRequest) {
  const client = new RestClient(CMConfig.getInstance());
  return client.request(request);
}
