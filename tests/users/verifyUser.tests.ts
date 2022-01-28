import path from 'path';

import { expect } from 'chai';
import dotenv from 'dotenv';

import { verifyUser } from '../../src/modules/users';
import { VerifyUserRequest } from '../../src/types/codemash.dtos';

describe('verifyUser', () => {
  beforeEach(() => {
    dotenv.config({
      path: path.resolve(__dirname, '../data/config/.env'),
    });
  });

  it('should return an error for invalid token', async () => {
    const request = new VerifyUserRequest({
      token: 'clearlyInvalidToken',
    });
    const result = await verifyUser(request);

    expect(result.response).to.not.be.null;
  });
});
