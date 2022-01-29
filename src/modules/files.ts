import { RestClient } from 'client';
import { CMConfig } from 'config';
import {
  DeleteFileRequest,
  DownloadFileRequest,
  GetFileRequest,
  UploadFileRequest,
  UploadOrderFileRequest,
  UploadRecordFileRequest,
  UploadUserFileRequest,
} from 'types/codemash.dtos';

export async function downloadFile(request: DownloadFileRequest) {
  const client = new RestClient(CMConfig.getInstance());
  return client.request(request);
}

export async function getFile(request: GetFileRequest) {
  const client = new RestClient(CMConfig.getInstance());
  return client.request(request);
}

export async function uploadFile(request: UploadFileRequest) {
  const client = new RestClient(CMConfig.getInstance());
  return client.request(request);
}

export async function uploadRecordFile(request: UploadRecordFileRequest) {
  const client = new RestClient(CMConfig.getInstance());
  return client.request(request);
}

export async function uploadUserFile(request: UploadUserFileRequest) {
  const client = new RestClient(CMConfig.getInstance());
  return client.request(request);
}

export async function uploadOrderFile(request: UploadOrderFileRequest) {
  const client = new RestClient(CMConfig.getInstance());
  return client.request(request);
}

export async function deleteFile(request: DeleteFileRequest) {
  const client = new RestClient(CMConfig.getInstance());
  return client.request(request);
}

export function getFilePath(directory: string, fileName: string) {
  return `${CMConfig.getInstance().baseFilePath}/${directory}/${fileName}`;
}
