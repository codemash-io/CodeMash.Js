import path from 'path';

import { expect } from 'chai';
import dotenv from 'dotenv';

import { getApplicableDiscounts } from '../../src/modules/payments';
import { GetApplicableDiscountsRequest } from '../../src/types/codemash.dtos';

describe('getApplicableDiscounts', () => {
  beforeEach(() => {
    dotenv.config({
      path: path.resolve(__dirname, '../data/config/.env'),
    });
  });

  it('should throw an error for invalid data', async () => {
    const request = new GetApplicableDiscountsRequest({
      orderSchemaId: 'invalidSchemaId',
    });
    await expect(getApplicableDiscounts(request)).to.be.rejected;
  });
});
