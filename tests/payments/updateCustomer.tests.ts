import path from 'path';

import { expect } from 'chai';
import dotenv from 'dotenv';

import { updateCustomer } from '../../src/modules/payments';
import { UpdateCustomerRequest } from '../../src/types/codemash.dtos';

describe('updateCustomer', () => {
  beforeEach(() => {
    dotenv.config({
      path: path.resolve(__dirname, '../data/config/.env'),
    });
  });

  it('should throw an error for invalid data', async () => {
    const request = new UpdateCustomerRequest({
      id: 'nonExistentCustomer',
    });
    await expect(updateCustomer(request)).to.be.rejected;
  });
});
