import path from 'path';

import { expect } from 'chai';
import dotenv from 'dotenv';

import { getFile } from '../../src/modules/files';
import { GetFileRequest } from '../../src/types/codemash.dtos';

describe('getFile', () => {
  beforeEach(() => {
    dotenv.config({
      path: path.resolve(__dirname, '../data/config/.env'),
    });
  });

  it('should return an error for invalid file id', async () => {
    const request = new GetFileRequest({
      fileId: 'badFileId',
    });
    const result = await getFile(request);
    expect(result.isError).to.be.true;
  });
});
