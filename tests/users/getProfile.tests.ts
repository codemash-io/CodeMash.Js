import path from 'path';

import { expect } from 'chai';
import dotenv from 'dotenv';

import { getProfile } from '../../src/modules/users';
import { GetProfileRequest } from '../../src/types/codemash.dtos';

describe('getProfile', () => {
  beforeEach(() => {
    dotenv.config({
      path: path.resolve(__dirname, '../data/config/.env'),
    });
  });

  it('should get the profile', async () => {
    const request = new GetProfileRequest();
    const result = await getProfile(request);

    expect(result.isSuccess).to.be.true;
    expect(result.response?.result).to.be.not.null;
  });
});
