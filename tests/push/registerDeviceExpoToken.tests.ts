import path from 'path';

import { expect } from 'chai';
import dotenv from 'dotenv';

import { registerDeviceExpoToken } from '../../src/modules/push';
import { RegisterDeviceExpoTokenRequest } from '../../src/types/codemash.dtos';

describe('registerDeviceExpoToken', () => {
  beforeEach(() => {
    dotenv.config({
      path: path.resolve(__dirname, '../data/config/.env'),
    });
  });

  it('should throw an error for invalid data', async () => {
    const request = new RegisterDeviceExpoTokenRequest({
      token: 'invalidtoken',
      userId: 'invalidUserId',
      deviceId: 'invaliddeviceId',
    });
    await expect(registerDeviceExpoToken(request)).to.be.rejected;
  });
});
