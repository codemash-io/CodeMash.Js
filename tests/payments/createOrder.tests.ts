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

  it('should return an error for invalid data', async () => {
    const request = new CreateOrderRequest({
      accountId: 'invalidId',
      orderSchemaId: 'invalidId',
    });
    const result = await createOrder(request);
    expect(result.isError).to.be.true;
  });
});
