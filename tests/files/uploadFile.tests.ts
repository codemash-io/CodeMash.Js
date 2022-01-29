import fs from 'fs';
import path from 'path';

import { expect } from 'chai';
import dotenv from 'dotenv';

import { deleteFile, uploadFile } from '../../src/modules/files';
import {
  DeleteFileRequest,
  UploadFileRequest,
} from '../../src/types/codemash.dtos';

const FILENAME = 'tests/data/upload_file_test.txt';

describe('uploadFile', () => {
  beforeEach(() => {
    dotenv.config({
      path: path.resolve(__dirname, '../data/config/.env'),
    });
  });

  before(() => {
    fs.writeFileSync(FILENAME, 'This is a file example');
  });

  it('should upload a file', async () => {
    const fileContents = fs.readFileSync(FILENAME, { encoding: 'base64' });
    const request = new UploadFileRequest({
      path: 'tests/',
      base64File: {
        data: fileContents,
        fileName: 'upload_file_test.txt',
        contentType: 'text/plain',
      },
    });
    const result = await uploadFile(request);
    expect(result.isSuccess).to.be.true;
    expect(result.response?.result).to.not.be.null;

    const delRequest = new DeleteFileRequest({
      fileId: result?.response?.result?.id,
    });
    await deleteFile(delRequest);
  });

  after(async () => {
    fs.unlinkSync(FILENAME);
  });
});
