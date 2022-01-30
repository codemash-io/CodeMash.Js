import path from 'path';

import { expect } from 'chai';
import dotenv from 'dotenv';

import { deleteCustomer } from '../../src/modules/payments';
import { DeleteCustomerRequest } from '../../src/types/codemash.dtos';

describe('deleteCustomer', () => {
  beforeEach(() => {
    dotenv.config({
      path: path.resolve(__dirname, '../data/config/.env'),
    });
  });

  it('should return an error for invalid data', async () => {
    const request = new DeleteCustomerRequest({
      id: 'nonExistentCustomer',
    });
    const result = await deleteCustomer(request);
    expect(result.isError).to.be.true;
  });
});
