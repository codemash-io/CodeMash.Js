import path from 'path';

import * as faker from '@faker-js/faker';
import { expect } from 'chai';
import dotenv from 'dotenv';

import { registerUser } from '../../src/modules/users';
import { RegisterUserRequest } from '../../src/types/codemash.dtos';

describe('registerUser', () => {
  beforeEach(() => {
    dotenv.config({
      path: path.resolve(__dirname, '../data/config/.env'),
    });
  });

  it('should register a new user', async () => {
    const request = new RegisterUserRequest({
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName(),
      email: faker.internet.email(),
      password: faker.internet.password(),
    });

    const result = await registerUser(request);
    expect(result).to.not.throw;
  });
});
