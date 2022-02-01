import path from 'path';

import { expect } from 'chai';
import dotenv from 'dotenv';

import { updatePaymentMethod } from '../../src/modules/payments';
import { UpdatePaymentMethodRequest } from '../../src/types/codemash.dtos';

describe('updatePaymentMethod', () => {
  beforeEach(() => {
    dotenv.config({
      path: path.resolve(__dirname, '../data/config/.env'),
    });
  });

  it('should throw an error for invalid data', async () => {
    const request = new UpdatePaymentMethodRequest({
      id: 'invalidId',
    });
    expect(updatePaymentMethod(request)).to.be.rejected;
  });
});
