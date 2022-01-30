import path from 'path';

import { expect } from 'chai';
import dotenv from 'dotenv';

import { getCustomer } from '../../src/modules/payments';
import { GetCustomerRequest } from '../../src/types/codemash.dtos';

describe('getCustomer', () => {
  beforeEach(() => {
    dotenv.config({
      path: path.resolve(__dirname, '../data/config/.env'),
    });
  });

  it('should return an error for invalid data', async () => {
    const request = new GetCustomerRequest({
      id: 'invalidCustomerId',
    });
    const result = await getCustomer(request);
    expect(result.isError).to.be.true;
  });
});
