import path from 'path';

import faker from '@faker-js/faker';
import { expect } from 'chai';
import dotenv from 'dotenv';

import { deleteUser, registerUser } from '../../src/modules/users';
import {
  DeleteUserRequest,
  RegisterUserRequest,
} from '../../src/types/codemash.dtos';

describe('deleteUser', () => {
  beforeEach(() => {
    dotenv.config({
      path: path.resolve(__dirname, '../data/config/.env'),
    });
  });

  it('should delete a newly created user', async () => {
    const createUser = new RegisterUserRequest({
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName(),
      email: faker.internet.email(),
      password: faker.internet.password(),
    });
    const createdUser = await registerUser(createUser);

    const request = new DeleteUserRequest({
      id: createdUser.response?.userId,
    });
    const result = await deleteUser(request);

    expect(result.isSuccess).to.be.true;
    expect(result.response).to.be.not.null;
  });
});
