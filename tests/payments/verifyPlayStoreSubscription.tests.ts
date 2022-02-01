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

  it('should throw an error for invalid data', async () => {
    const request = new VerifyGooglePlayStoreSubscriptionRequest({
      customerId: 'invalidId',
      planId: 'invalidId',
    });
    await expect(verifyPlayStoreSubscription(request)).to.be.rejected;
  });
});
