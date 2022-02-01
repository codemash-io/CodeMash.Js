import path from 'path';

import { expect } from 'chai';
import dotenv from 'dotenv';

import { uploadUserFile } from '../../src/modules/files';
import { UploadUserFileRequest } from '../../src/types/codemash.dtos';

describe('uploadUserFile', () => {
  beforeEach(() => {
    dotenv.config({
      path: path.resolve(__dirname, '../data/config/.env'),
    });
  });

  it('should return error for invalid request', async () => {
    const request = new UploadUserFileRequest({
      base64File: {
        data: 'clearlyInvalid64Data',
        fileName: '',
        contentType: '',
      },
    });
    await expect(uploadUserFile(request)).to.be.rejected;
  });
});
