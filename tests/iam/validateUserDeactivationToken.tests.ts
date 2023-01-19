import path from 'path';

import { expect } from 'chai';
import dotenv from 'dotenv';

import { validateUserDeactivationToken } from '../../src/modules/iam';
import { ValidateUserDeactivationTokenRequest } from '../../src/types/codemash.dtos';

describe('validateUserDeactivationToken', () => {
  beforeEach(() => {
    dotenv.config({
      path: path.resolve(__dirname, '../data/config/.env'),
    });
  });

  it('should validate newly created deactivation token', async () => {
    const request = new ValidateUserDeactivationTokenRequest({
      token: '?',
    });

    expect(validateUserDeactivationToken(request)).to.be.rejected;
  });
});
