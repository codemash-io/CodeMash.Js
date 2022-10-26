import path from 'path';

import { expect } from 'chai';
import dotenv from 'dotenv';

import { downloadFile } from '../../src/modules/files';
import { DownloadFileRequest } from '../../src/types/codemash.dtos';

describe('downloadFile', () => {
  beforeEach(() => {
    dotenv.config({
      path: path.resolve(__dirname, '../data/config/.env'),
    });
  });

  it('should throw an error for invalid file id', async () => {
    const request = new DownloadFileRequest({
      fileId: 'badFileId',
    });

    await expect(downloadFile(request)).to.be.rejected;
  });
});