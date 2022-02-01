import path from 'path';

import { expect } from 'chai';
import dotenv from 'dotenv';

import { attachPaymentMethod } from '../../src/modules/payments';
import { AttachPaymentMethodRequest } from '../../src/types/codemash.dtos';

describe('attachPaymentMethod', () => {
  beforeEach(() => {
    dotenv.config({
      path: path.resolve(__dirname, '../data/config/.env'),
    });
  });

  it('should throw an error for invalid data', async () => {
    const request = new AttachPaymentMethodRequest({
      customerId: 'invalidCustomer',
      setupId: 'invalidSetup',
      setupClientSecret: 'invalidSecret',
      asDefault: false,
      detachOthers: false,
    });
    await expect(attachPaymentMethod(request)).to.be.rejected;
  });
});
