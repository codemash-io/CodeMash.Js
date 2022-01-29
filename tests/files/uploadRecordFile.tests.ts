import path from 'path';

import { expect } from 'chai';
import dotenv from 'dotenv';

import { uploadRecordFile } from '../../src/modules/files';
import { UploadRecordFileRequest } from '../../src/types/codemash.dtos';

describe('uploadRecordFile', () => {
  beforeEach(() => {
    dotenv.config({
      path: path.resolve(__dirname, '../data/config/.env'),
    });
  });

  it('should return error for invalid request', async () => {
    const request = new UploadRecordFileRequest({
      base64File: {
        data: 'clearlyInvalid64Data',
        fileName: '',
        contentType: '',
      },
    });
    const result = await uploadRecordFile(request);
    expect(result.isError).to.be.true;
  });
});
