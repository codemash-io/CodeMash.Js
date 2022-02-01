import path from 'path';

import { expect } from 'chai';
import dotenv from 'dotenv';

import { createSubscription } from '../../src/modules/payments';
import { CreateSubscriptionRequest } from '../../src/types/codemash.dtos';

describe('createSubscription', () => {
  beforeEach(() => {
    dotenv.config({
      path: path.resolve(__dirname, '../data/config/.env'),
    });
  });

  it('should throw an error for invalid data', async () => {
    const request = new CreateSubscriptionRequest({
      customerId: 'invalidId',
      planId: 'invalidId',
      paymentMethodId: 'invalidId',
    });
    expect(createSubscription(request)).to.be.rejected;
  });
});
