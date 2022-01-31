import { ResponseStatus } from '@servicestack/client';

import { DeleteEmailRequest } from './codemash.dtos';

export interface ICMDbResult {
  response: any;
  isSuccess: boolean;
  isError: boolean;
  responseStatus?: ResponseStatus;
  errorStatus?: ResponseStatus;
}

export class DeleteEmailFromQueueRequest extends DeleteEmailRequest {}
