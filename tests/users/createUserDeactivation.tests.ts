import path from 'path';

import faker from '@faker-js/faker';
import { expect } from 'chai';
import dotenv from 'dotenv';

import { createUserDeactivation, registerUser } from '../../src/modules/users';
import {
  CreateUserDeactivationRequest,
  RegisterUserRequest,
} from '../../src/types/codemash.dtos';

describe('createUserDeactivation', () => {
  beforeEach(() => {
    dotenv.config({
      path: path.resolve(__dirname, '../data/config/.env'),
    });
  });

  it('should create a new user deactivation token', async () => {
    const createRequest = new RegisterUserRequest({
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName(),
      displayName: faker.internet.userName(),
      email: faker.internet.email(),
      password: faker.internet.password(),
      autoLogin: true,
    });
    await registerUser(createRequest);

    const request = new CreateUserDeactivationRequest(); // TODO: select new user from above
    const result = await createUserDeactivation(request);
    expect(result.response).to.not.be.null;
  });
});
