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
    const response = await getOrders(request);
    expect(response).to.not.be.null;
  });
});
