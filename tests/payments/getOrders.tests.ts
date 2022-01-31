import path from 'path';

import { expect } from 'chai';
import dotenv from 'dotenv';

import { getOrders } from '../../src/modules/payments';
import { GetOrdersRequest } from '../../src/types/codemash.dtos';

describe('getOrders', () => {
  beforeEach(() => {
    dotenv.config({
      path: path.resolve(__dirname, '../data/config/.env'),
    });
  });

  it('should return success and some or none orders', async () => {
    const request = new GetOrdersRequest();
    const result = await getOrders(request);
    expect(result.isSuccess).to.be.true;
  });
});
