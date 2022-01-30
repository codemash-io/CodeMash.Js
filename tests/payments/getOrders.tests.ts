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

  it('should return an error for invalid data', async () => {
    const request = new GetOrdersRequest({
      userId: 'nonExistentUser',
    });
    const result = await getOrders(request);
    expect(result.isError).to.be.true;
  });
});
