import path from 'path';

import { expect } from 'chai';
import dotenv from 'dotenv';

import { getDevice } from '../../src/modules/push';
import { GetDeviceRequest } from '../../src/types/codemash.dtos';

describe('getDevice', () => {
  beforeEach(() => {
    dotenv.config({
      path: path.resolve(__dirname, '../data/config/.env'),
    });
  });

  it('should throw an error for invalid data', async () => {
    const request = new GetDeviceRequest({
      id: 'invalidId',
    });
    await expect(getDevice(request)).to.be.rejected;
  });
});
