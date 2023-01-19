import path from 'path';

import faker from '@faker-js/faker';
import { expect } from 'chai';
import dotenv from 'dotenv';

import { registerUser } from '../../src/modules/iam';
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
    const response = await registerUser(request);

    expect(response).to.not.be.null;
  });
});
