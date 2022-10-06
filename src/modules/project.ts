import { RestClient } from 'client';
import { CMConfig } from 'config';
import { GetProjectRequest, GetProjectResponse } from 'types/codemash.dtos';

export async function getProject(
  request: GetProjectRequest,
): Promise<GetProjectResponse> {
  const response = RestClient.New().CallApi<GetProjectResponse>(request);
  return response;
}
