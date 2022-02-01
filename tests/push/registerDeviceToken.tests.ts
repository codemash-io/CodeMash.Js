import path from 'path';

import { expect } from 'chai';
import dotenv from 'dotenv';

import { registerDeviceToken } from '../../src/modules/push';
import { RegisterDeviceTokenRequest } from '../../src/types/codemash.dtos';

describe('registerDeviceToken', () => {
  beforeEach(() => {
    dotenv.config({
      path: path.resolve(__dirname, '../data/config/.env'),
    });
  });

  it('should throw an error for invalid data', async () => {
    const request = new RegisterDeviceTokenRequest({
      provider: 'invalidPprvider',
      accountId: 'invalidAccountId',
      token: 'invalidtoken',
      userId: 'invalidUserId',
      deviceId: 'invaliddeviceId',
    });
    await expect(registerDeviceToken(request)).to.be.rejected;
  });
});
