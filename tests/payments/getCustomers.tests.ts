import path from 'path';

import { expect } from 'chai';
import dotenv from 'dotenv';

import { getCustomers } from '../../src/modules/payments';
import { GetCustomersRequest } from '../../src/types/codemash.dtos';

describe('getCustomers', () => {
  beforeEach(() => {
    dotenv.config({
      path: path.resolve(__dirname, '../data/config/.env'),
    });
  });

  it('should return success for all customers', async () => {
    const request = new GetCustomersRequest();
    const response = await getCustomers(request);
    expect(response).to.not.be.null;
  });
});
