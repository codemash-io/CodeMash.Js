import path from 'path';

import { expect } from 'chai';
import dotenv from 'dotenv';

import { createPayseraTransaction } from '../../src/modules/payments';
import { CreatePayseraTransactionRequest } from '../../src/types/codemash.dtos';

describe('createPayseraTransaction', () => {
  beforeEach(() => {
    dotenv.config({
      path: path.resolve(__dirname, '../data/config/.env'),
    });
  });

  it('should return an error for invalid data', async () => {
    const request = new CreatePayseraTransactionRequest({
      id: 'invalidId',
    });
    const result = await createPayseraTransaction(request);
    expect(result.isError).to.be.true;
  });
});
