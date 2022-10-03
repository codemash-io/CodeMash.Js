import { RestClient } from 'client';
import { CMConfig } from 'config';
import {
  DeleteFileRequest,
  DownloadFileRequest,
  GetFileRequest,
  GetFileResponse,
  HttpResult,
  IReturnVoid,
  UploadFileRequest,
  UploadFileResponse,
  UploadOrderFileRequest,
  UploadOrderFileResponse,
  UploadRecordFileRequest,
  UploadRecordFileResponse,
  UploadUserFileRequest,
  UploadUserFileResponse,
} from 'types/codemash.dtos';

export async function downloadFile(
  request: DownloadFileRequest,
): Promise<HttpResult> {
  const response = RestClient.New().CallApi<HttpResult>(request);
  return response;
}

export async function getFile(
  request: GetFileRequest,
): Promise<GetFileResponse> {
  const response = RestClient.New().CallApi<GetFileResponse>(request);
  return response;
}

export async function uploadFile(
  request: UploadFileRequest,
): Promise<UploadFileResponse> {
  const response = RestClient.New().CallApi<UploadFileResponse>(request);
  return response;
}

export async function uploadRecordFile(
  request: UploadRecordFileRequest,
): Promise<UploadRecordFileResponse> {
  const response = RestClient.New().CallApi<UploadRecordFileResponse>(request);
  return response;
}

export async function uploadUserFile(
  request: UploadUserFileRequest,
): Promise<UploadUserFileResponse> {
  const response = RestClient.New().CallApi<UploadUserFileResponse>(request);
  return response;
}

export async function uploadOrderFile(
  request: UploadOrderFileRequest,
): Promise<UploadOrderFileResponse> {
  const response = RestClient.New().CallApi<UploadOrderFileResponse>(request);
  return response;
}

export async function deleteFile(
  request: DeleteFileRequest,
): Promise<IReturnVoid> {
  const response = RestClient.New().CallApi<IReturnVoid>(request);
  return response;
}

export function getFilePath(directory: string, fileName: string) {
  return `${CMConfig.getInstance().baseFilePath}/${directory}/${fileName}`;
}
