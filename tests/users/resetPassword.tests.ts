import path from 'path';

import faker from '@faker-js/faker';
import { expect } from 'chai';
import dotenv from 'dotenv';

import { resetPassword } from '../../src/modules/users';
import { ResetPasswordRequest } from '../../src/types/codemash.dtos';

describe('resetPassword', () => {
  beforeEach(() => {
    dotenv.config({
      path: path.resolve(__dirname, '../data/config/.env'),
    });
  });

  it('should reset the password', async () => {
    const request = new ResetPasswordRequest({
      token: '?',
      password: faker.internet.password(),
      repeatedPassword: faker.internet.password(),
    });
    const result = await resetPassword(request);

    expect(result.isSuccess).to.be.true;
    expect(result.response?.bearerToken).to.be.not.null;
  });
});
