import path from 'path';

import { expect } from 'chai';
import dotenv from 'dotenv';

import { uploadOrderFile } from '../../src/modules/files';
import { UploadOrderFileRequest } from '../../src/types/codemash.dtos';

describe('uploadOrderFile', () => {
  beforeEach(() => {
    dotenv.config({
      path: path.resolve(__dirname, '../data/config/.env'),
    });
  });

  it('should return error for invalid request', async () => {
    const request = new UploadOrderFileRequest({
      base64File: {
        data: 'clearlyInvalid64Data',
        fileName: '',
        contentType: '',
      },
    });

    await expect(uploadOrderFile(request)).to.be.rejected;
  });
});
