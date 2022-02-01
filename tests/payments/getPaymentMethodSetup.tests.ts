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

  it('should throw an error for invalid data', async () => {
    const request = new GetPaymentMethodSetupRequest({
      accountId: 'invalidId',
    });
    await expect(getPaymentMethodSetup(request)).to.be.rejected;
  });
});
