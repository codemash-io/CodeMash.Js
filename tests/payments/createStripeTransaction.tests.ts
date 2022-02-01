import path from 'path';

import { expect } from 'chai';
import dotenv from 'dotenv';

import { createStripeTransaction } from '../../src/modules/payments';
import { CreateStripeTransactionRequest } from '../../src/types/codemash.dtos';

describe('createStripeTransaction', () => {
  beforeEach(() => {
    dotenv.config({
      path: path.resolve(__dirname, '../data/config/.env'),
    });
  });

  it('should throw an error for invalid data', async () => {
    const request = new CreateStripeTransactionRequest({
      id: 'invalidId',
      paymentMethodId: 'invalidPaymentMethod',
    });
    await expect(createStripeTransaction(request)).to.be.rejected;
  });
});
