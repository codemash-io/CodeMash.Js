import path from 'path';

import { expect } from 'chai';
import dotenv from 'dotenv';

import { updateDeviceMeta } from '../../src/modules/push';
import { UpdateDeviceMetaRequest } from '../../src/types/codemash.dtos';

describe('updateDeviceMeta', () => {
  beforeEach(() => {
    dotenv.config({
      path: path.resolve(__dirname, '../data/config/.env'),
    });
  });

  it('should return an error for invalid data', async () => {
    const request = new UpdateDeviceMetaRequest();
    const result = await updateDeviceMeta(request);
    
    expect(result.response).to.not.be.null;
  });
});
