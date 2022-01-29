import { ResponseStatus } from '@servicestack/client';

interface ICMDbResult {
  response: any;
  isSuccess: boolean;
  isError: boolean;
  responseStatus?: ResponseStatus;
  errorStatus?: ResponseStatus;
}
