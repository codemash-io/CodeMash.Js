import path from 'path';

import faker from '@faker-js/faker';
import { expect } from 'chai';
import dotenv from 'dotenv';

import { createPasswordReset, registerUser } from '../../src/modules/users';
import {
  CreatePasswordResetRequest,
  RegisterUserRequest,
} from '../../src/types/codemash.dtos';

const EMAIL_ADDRESS = faker.internet.email();

describe('createPasswordReset', () => {
  beforeEach(() => {
    dotenv.config({
      path: path.resolve(__dirname, '../data/config/.env'),
    });
  });

  it('should create a password reset for the created user', async () => {
    const createRequest = new RegisterUserRequest({
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName(),
      displayName: faker.internet.userName(),
      email: EMAIL_ADDRESS,
      password: faker.internet.password(),
    });
    await registerUser(createRequest);

    const request = new CreatePasswordResetRequest({
      email: EMAIL_ADDRESS,
    });
    const result = await createPasswordReset(request);
    expect(result.isSuccess).to.be.true;
    expect(result.response).to.be.not.null;
  });
});
