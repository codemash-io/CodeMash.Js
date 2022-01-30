import path from 'path';

import { expect } from 'chai';
import dotenv from 'dotenv';

import { createCustomer } from '../../src/modules/payments';
import { CreateCustomerRequest } from '../../src/types/codemash.dtos';

describe('createCustomer', () => {
  beforeEach(() => {
    dotenv.config({
      path: path.resolve(__dirname, '../data/config/.env'),
    });
  });

  it('should return an error for invalid data', async () => {
    const request = new CreateCustomerRequest({
      accountId: 'invalidaccountId',
      userId: 'invaliduserId',
    });
    const result = await createCustomer(request);
    expect(result.isError).to.be.true;
  });
});
