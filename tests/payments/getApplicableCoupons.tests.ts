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

  it('should throw an error for invalid data', async () => {
    const request = new GetApplicableCouponsRequest({
      codes: [],
    });
    const response = await getApplicableCoupons(request);
    expect(response).to.not.be.null;
  });
});
