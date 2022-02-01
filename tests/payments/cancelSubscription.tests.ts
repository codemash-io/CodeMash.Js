import path from 'path';

import { expect } from 'chai';
import dotenv from 'dotenv';

import { cancelSubscription } from '../../src/modules/payments';
import { CancelSubscriptionRequest } from '../../src/types/codemash.dtos';

describe('cancelSubscription', () => {
  beforeEach(() => {
    dotenv.config({
      path: path.resolve(__dirname, '../data/config/.env'),
    });
  });

  it('should throw an error for invalid data', async () => {
    const request = new CancelSubscriptionRequest({
      id: 'emptyId',
      customerId: 'invalidCustomer',
      cancelInstantly: false,
      refundOnCancelInstantly: false,
    });
    await expect(cancelSubscription(request)).to.be.rejected;
  });
});
