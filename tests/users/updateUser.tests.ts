import path from 'path';

import faker from '@faker-js/faker';
import { expect } from 'chai';
import dotenv from 'dotenv';

import { registerUser, updateUser } from '../../src/modules/users';
import {
  RegisterUserRequest,
  UpdateUserRequest,
} from '../../src/types/codemash.dtos';

describe('updateUser', () => {
  beforeEach(() => {
    dotenv.config({
      path: path.resolve(__dirname, '../data/config/.env'),
    });
  });

  it('should update a user', async () => {
    const createRequest = new RegisterUserRequest({
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName(),
      displayName: faker.internet.userName(),
      email: faker.internet.email(),
      password: faker.internet.password(),
    });
    const createResult = await registerUser(createRequest);

    const request = new UpdateUserRequest({
      id: createResult.userId,
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName(),
      displayName: faker.internet.userName(),
    });
    const response = await updateUser(request);
    expect(response).to.not.be.null;
  });
});
