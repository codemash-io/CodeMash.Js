import { RestClient } from 'app/client';
import { CMConfig } from 'app/config';
import { GetUsersRequest,GetUsersResponse } from 'app/types/codemash.dtos';

export async function getUsers(
	request: GetUsersRequest
): Promise<GetUsersResponse> {
	const client = RestClient.Json(new CMConfig());
  const response = await client.post(request);
  return response;
}