import path from 'path';

import faker from '@faker-js/faker';
import { expect } from 'chai';
import dotenv from 'dotenv';

import {
  credentialsAuthentication,
  registerUser,
} from '../../src/modules/users';
import {
  CredentialsAuthenticationRequest,
  RegisterUserRequest,
} from '../../src/types/codemash.dtos';

const EMAIL = faker.internet.email();
const PASSWORD = faker.internet.password();

describe('credentialsAuthentication', () => {
  beforeEach(() => {
    dotenv.config({
      path: path.resolve(__dirname, '../data/config/.env'),
    });
  });

  it('should login with newly created user credentials', async () => {
    const createRequest = new RegisterUserRequest({
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName(),
      displayName: faker.internet.userName(),
      email: EMAIL,
      password: PASSWORD,
      autoLogin: false,
    });
    await registerUser(createRequest);

    const request = new CredentialsAuthenticationRequest({
      userName: EMAIL,
      password: PASSWORD,
    });
    const result = await credentialsAuthentication(request);

    expect(result.isSuccess).to.be.true;
    expect(result.response?.bearerToken).to.be.not.null;
  });
});
