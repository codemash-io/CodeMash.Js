import path from 'path';

import faker from '@faker-js/faker';
import { expect } from 'chai';
import dotenv from 'dotenv';

import { logout, registerUser } from '../../src/modules/users';
import {
  Authenticate,
  RegisterUserRequest,
} from '../../src/types/codemash.dtos';

const EMAIL = faker.internet.email();
const PASSWORD = faker.internet.password();

describe('logout', () => {
  beforeEach(() => {
    dotenv.config({
      path: path.resolve(__dirname, '../data/config/.env'),
    });
  });

  it('should logout with newly created user credentials', async () => {
    const createRequest = new RegisterUserRequest({
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName(),
      displayName: faker.internet.userName(),
      email: EMAIL,
      password: PASSWORD,
      autoLogin: true,
    });
    await registerUser(createRequest);

    const request = new Authenticate();
    const result = await logout(request);

    expect(result.response).to.not.be.null;
  });
});
