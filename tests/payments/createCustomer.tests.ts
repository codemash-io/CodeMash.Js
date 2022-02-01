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

  it('should throw an error for invalid data', async () => {
    const request = new CreateCustomerRequest({
      accountId: 'invalidaccountId',
      userId: 'invaliduserId',
    });
    expect(createCustomer(request)).to.be.rejected;
  });
});
