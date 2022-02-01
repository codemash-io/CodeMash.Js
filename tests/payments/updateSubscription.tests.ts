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

  it('should throw an error for invalid data', async () => {
    const request = new UpdateSubscriptionRequest({
      id: 'invalidId',
    });
    await expect(updateSubscription(request)).to.be.rejected;
  });
});
