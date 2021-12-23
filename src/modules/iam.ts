import {RestClient} from 'client';
import {CMConfig} from 'config';
import {GetUsersRequest, GetUsersResponse} from 'types/codemash.dtos';

export async function getUsers(
  request: GetUsersRequest,
): Promise<GetUsersResponse> {
  const client = RestClient.Json(new CMConfig());
  const response = await client.post(request);
  return response;
}
