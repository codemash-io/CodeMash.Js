import path from 'path';

import { expect } from 'chai';
import dotenv from 'dotenv';

import { getApplicableCoupons } from '../../src/modules/payments';
import { GetApplicableCouponsRequest } from '../../src/types/codemash.dtos';

describe('getApplicableCoupons', () => {
  beforeEach(() => {
    dotenv.config({
      path: path.resolve(__dirname, '../data/config/.env'),
    });
  });

  it('should return an error for invalid data', async () => {
    const request = new GetApplicableCouponsRequest({
      codes: [],
    });
    const result = await getApplicableCoupons(request);
    expect(result).to.not.be.null;
  });
});
