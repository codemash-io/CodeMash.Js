import path from 'path';

import { expect } from 'chai';
import dotenv from 'dotenv';

import { getOrder } from '../../src/modules/payments';
import { GetOrderRequest } from '../../src/types/codemash.dtos';

describe('getOrder', () => {
  beforeEach(() => {
    dotenv.config({
      path: path.resolve(__dirname, '../data/config/.env'),
    });
  });

  it('should throw an error for invalid data', async () => {
    const request = new GetOrderRequest({
      id: 'invalidOrderId',
    });
    await expect(getOrder(request)).to.be.rejected;
  });
});
