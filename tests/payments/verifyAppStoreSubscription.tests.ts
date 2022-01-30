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

  it('should return an error for invalid data', async () => {
    const request = new VerifyAppleAppStoreSubscriptionRequest({
      customerId: 'invalidId',
      planId: 'invalidId',
    });
    const result = await verifyAppStoreSubscription(request);
    expect(result.isError).to.be.true;
  });
});
