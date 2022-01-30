import { RestClient } from 'client';
import { CMConfig } from 'config';
import { ExecuteFunctionRequest } from 'types/codemash.dtos';

export async function executeFunction(request: ExecuteFunctionRequest) {
  const client = new RestClient(CMConfig.getInstance());
  return client.request(request);
}
