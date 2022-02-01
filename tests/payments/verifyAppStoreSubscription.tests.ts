import path from 'path';

import { expect } from 'chai';
import dotenv from 'dotenv';

import { verifyAppStoreSubscription } from '../../src/modules/payments';
import { VerifyAppleAppStoreSubscriptionRequest } from '../../src/types/codemash.dtos';

describe('verifyAppStoreSubscription', () => {
  beforeEach(() => {
    dotenv.config({
      path: path.resolve(__dirname, '../data/config/.env'),
    });
  });

  it('should throw an error for invalid data', async () => {
    const request = new VerifyAppleAppStoreSubscriptionRequest({
      customerId: 'invalidId',
      planId: 'invalidId',
    });
    await expect(verifyAppStoreSubscription(request)).to.be.rejected;
  });
});
