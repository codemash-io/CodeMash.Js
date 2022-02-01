import path from 'path';

import { expect } from 'chai';
import dotenv from 'dotenv';

import { deleteDeviceToken } from '../../src/modules/push';
import { DeleteDeviceTokenRequest } from '../../src/types/codemash.dtos';

describe('deleteDeviceToken', () => {
  beforeEach(() => {
    dotenv.config({
      path: path.resolve(__dirname, '../data/config/.env'),
    });
  });

  it('should throw an error for invalid data', async () => {
    const request = new DeleteDeviceTokenRequest({
      id: 'invalidId',
      deviceKey: 'invaliddeviceKey',
    });
    await expect(deleteDeviceToken(request)).to.be.rejected;
  });
});
