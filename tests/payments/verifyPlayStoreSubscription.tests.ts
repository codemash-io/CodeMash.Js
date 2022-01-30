import path from 'path';

import { expect } from 'chai';
import dotenv from 'dotenv';

import { verifyPlayStoreSubscription } from '../../src/modules/payments';
import { VerifyGooglePlayStoreSubscriptionRequest } from '../../src/types/codemash.dtos';

describe('verifyPlayStoreSubscription', () => {
  beforeEach(() => {
    dotenv.config({
      path: path.resolve(__dirname, '../data/config/.env'),
    });
  });

  it('should return an error for invalid data', async () => {
    const request = new VerifyGooglePlayStoreSubscriptionRequest({
      customerId: 'invalidId',
      planId: 'invalidId',
    });
    const result = await verifyPlayStoreSubscription(request);
    expect(result.isError).to.be.true;
  });
});
