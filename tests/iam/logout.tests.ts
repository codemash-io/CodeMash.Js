import path from 'path';

import faker from '@faker-js/faker';
import { expect } from 'chai';
import dotenv from 'dotenv';

import { logout, registerUser } from '../../src/modules/iam';
import { RegisterUserRequest } from '../../src/types/codemash.dtos';

const EMAIL = faker.internet.email();
const PASSWORD = faker.internet.password();

describe('logout', () => {
  beforeEach(() => {
    dotenv.config({
      path: path.resolve(__dirname, '../data/config/.env'),
    });
  });

  it('should throw forbidden error', async () => {
    const createRequest = new RegisterUserRequest({
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName(),
      displayName: faker.internet.userName(),
      email: EMAIL,
      password: PASSWORD,
      autoLogin: false,
    });
    await registerUser(createRequest);

    await expect(registerUser(createRequest)).to.be.rejected;
  });
});
