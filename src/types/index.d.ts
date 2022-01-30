import { ResponseStatus } from '@servicestack/client';

import { DeleteEmailRequest } from './codemash.dtos';

interface ICMDbResult {
  response: any;
  isSuccess: boolean;
  isError: boolean;
  responseStatus?: ResponseStatus;
  errorStatus?: ResponseStatus;
}

export class DeleteEmailFromQueueRequest extends DeleteEmailRequest {}
