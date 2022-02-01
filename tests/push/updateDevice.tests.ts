import path from 'path';

import { expect } from 'chai';
import dotenv from 'dotenv';

import { updateDevice } from '../../src/modules/push';
import { UpdateDeviceRequest } from '../../src/types/codemash.dtos';

describe('updateDevice', () => {
  beforeEach(() => {
    dotenv.config({
      path: path.resolve(__dirname, '../data/config/.env'),
    });
  });

  it('should throw an error for invalid data', async () => {
    const request = new UpdateDeviceRequest({
      id: 'invalidId',
    });
    await expect(updateDevice(request)).to.be.rejected;
  });
});
