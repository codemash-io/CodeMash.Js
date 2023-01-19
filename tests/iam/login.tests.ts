import path from 'path';

import faker from '@faker-js/faker';
import { expect } from 'chai';
import dotenv from 'dotenv';

import { login, registerUser } from '../../src/modules/iam';
import {
  CredentialsAuthenticationRequest,
  CredentialsAuthenticationResponse,
  RegisterUserRequest,
} from '../../src/types/codemash.dtos';

const EMAIL = faker.internet.email();
const PASSWORD = faker.internet.password();

describe('login', () => {
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
    const response: CredentialsAuthenticationResponse = await login(request);

    expect(response.result.bearerToken).to.be.not.null;
  });
});