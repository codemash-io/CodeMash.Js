import { RestClient } from 'client';
import { DeleteEmailFromQueueRequest } from 'types';
import {
  DeleteEmailResponse,
  SendEmailNotificationV2Response,
  SendEmailRequest,
} from 'types/codemash.dtos';

export async function sendEmail(
  request: SendEmailRequest,
): Promise<SendEmailNotificationV2Response> {
  const response = RestClient.New().CallApi<SendEmailNotificationV2Response>(
    request,
  );
  return response;
}

export async function deleteEmailFromQueue(
  request: DeleteEmailFromQueueRequest,
): Promise<DeleteEmailResponse> {
  const response = RestClient.New().CallApi<DeleteEmailResponse>(request);
  return response;
}
