import path from 'path';

import { expect } from 'chai';
import dotenv from 'dotenv';

import { verifyUser } from '../../src/modules/iam';
import { VerifyUserRequest } from '../../src/types/codemash.dtos';

describe('verifyUser', () => {
  beforeEach(() => {
    dotenv.config({
      path: path.resolve(__dirname, '../data/config/.env'),
    });
  });

  it('should throw an error for invalid token', async () => {
    const request = new VerifyUserRequest({
      token: 'clearlyInvalidToken',
    });

    expect(verifyUser(request)).to.be.rejected;
  });
});
