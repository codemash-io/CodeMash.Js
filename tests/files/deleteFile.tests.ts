import fs from 'fs';
import path from 'path';

import { expect } from 'chai';
import dotenv from 'dotenv';

import { deleteFile, uploadFile } from '../../src/modules/files';
import {
  DeleteFileRequest,
  UploadFileRequest,
} from '../../src/types/codemash.dtos';

const FILENAME = 'tests/data/delete_file_test.txt';

describe('deleteFile', () => {
  beforeEach(() => {
    dotenv.config({
      path: path.resolve(__dirname, '../data/config/.env'),
    });
  });

  before(() => {
    fs.writeFileSync(FILENAME, 'This is a file example');
  });

  it('should upload a file and delete it successfully', async () => {
    const fileContents = fs.readFileSync(FILENAME, { encoding: 'base64' });
    const newFileReq = new UploadFileRequest({
      path: 'tests/',
      base64File: {
        data: fileContents,
        fileName: 'delete_file_test.txt',
        contentType: 'text/plain',
      },
    });
    const newFile = await uploadFile(newFileReq);

    const delRequest = new DeleteFileRequest({
      fileId: newFile.key,
    });
    const response = await deleteFile(delRequest);
    expect(response).to.not.be.null;
  });

  after(async () => {
    fs.unlinkSync(FILENAME);
  });
});
