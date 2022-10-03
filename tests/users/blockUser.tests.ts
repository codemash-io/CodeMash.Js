import path from 'path';

import faker from '@faker-js/faker';
import { expect } from 'chai';
import dotenv from 'dotenv';

import { blockUser, registerUser } from '../../src/modules/users';
import {
  BlockUserRequest,
  RegisterUserRequest,
  RegisterUserV2Response,
} from '../../src/types/codemash.dtos';

describe('blockUser', () => {
  beforeEach(() => {
    dotenv.config({
      path: path.resolve(__dirname, '../data/config/.env'),
    });
  });

  it('should block a new user', async () => {
    const createUser = new RegisterUserRequest({
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName(),
      email: faker.internet.email(),
      password: faker.internet.password(),
    });
    const createdUser = await registerUser(createUser);

    const request = new BlockUserRequest({
      id: createdUser.result.id,
    });
    const response = await blockUser(request);

    expect(response).to.not.be.null;
  });
});
