import { RestClient } from 'client';
import { CMConfig } from 'config';
import {
  ExecuteFunctionRequest,
  ExecuteFunctionResponse,
} from 'types/codemash.dtos';

export async function executeFunction(
  request: ExecuteFunctionRequest,
): Promise<ExecuteFunctionResponse> {
  const response = RestClient.New().CallApi<ExecuteFunctionResponse>(request);
  return response;
}
