import path from 'path';

import { expect } from 'chai';
import dotenv from 'dotenv';

import { updateSubscription } from '../../src/modules/payments';
import { UpdateSubscriptionRequest } from '../../src/types/codemash.dtos';

describe('updateSubscription', () => {
  beforeEach(() => {
    dotenv.config({
      path: path.resolve(__dirname, '../data/config/.env'),
    });
  });

  it('should return an error for invalid data', async () => {
    const request = new UpdateSubscriptionRequest({
      id: 'invalidId',
    });
    const result = await updateSubscription(request);
    expect(result.isError).to.be.true;
  });
});
