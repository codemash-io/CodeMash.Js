import path from 'path';

import { expect } from 'chai';
import dotenv from 'dotenv';

import { getPaymentMethodSetup } from '../../src/modules/payments';
import { GetPaymentMethodSetupRequest } from '../../src/types/codemash.dtos';

describe('getPaymentMethodSetup', () => {
  beforeEach(() => {
    dotenv.config({
      path: path.resolve(__dirname, '../data/config/.env'),
    });
  });

  it('should return an error for invalid data', async () => {
    const request = new GetPaymentMethodSetupRequest({
      accountId: 'invalidId',
    });
    const result = await getPaymentMethodSetup(request);
    expect(result.isError).to.be.true;
  });
});
