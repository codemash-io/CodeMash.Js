import path from 'path';

import { expect } from 'chai';
import dotenv from 'dotenv';

import { createOrder } from '../../src/modules/payments';
import { CreateOrderRequest } from '../../src/types/codemash.dtos';

describe('createOrder', () => {
  beforeEach(() => {
    dotenv.config({
      path: path.resolve(__dirname, '../data/config/.env'),
    });
  });

  it('should throw an error for invalid data', async () => {
    const request = new CreateOrderRequest({
      accountId: 'invalidId',
      orderSchemaId: 'invalidId',
    });
    await expect(createOrder(request)).to.be.rejected;
  });
});
