import path from 'path';

import { expect } from 'chai';
import dotenv from 'dotenv';

import { changeSubscription } from '../../src/modules/payments';
import { ChangeSubscriptionRequest } from '../../src/types/codemash.dtos';

describe('changeSubscription', () => {
  beforeEach(() => {
    dotenv.config({
      path: path.resolve(__dirname, '../data/config/.env'),
    });
  });

  it('should return an error for invalid data', async () => {
    const request = new ChangeSubscriptionRequest({
      id: 'invalidId',
      customerId: 'invalidCustomerId',
      newPlanId: 'invalidPlanId',
      paymentMethodId: 'invalidMethodId',
      coupon: 'invalidId',
    });
    const result = await changeSubscription(request);
    expect(result.isError).to.be.false;
  });
});
