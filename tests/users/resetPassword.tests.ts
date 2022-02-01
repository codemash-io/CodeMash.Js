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

  it('should throw an error for invalid token', async () => {
    const password = faker.internet.password();
    const request = new ResetPasswordRequest({
      token: 'clearlyInvalidToken',
      password,
      repeatedPassword: password,
    });
    await expect(resetPassword(request)).to.be.rejected;
  });
});
