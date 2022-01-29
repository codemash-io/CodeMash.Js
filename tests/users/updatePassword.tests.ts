import path from 'path';

import faker from '@faker-js/faker';
import { expect } from 'chai';
import dotenv from 'dotenv';

import { registerUser, updatePassword } from '../../src/modules/users';
import {
  RegisterUserRequest,
  UpdatePasswordRequest,
} from '../../src/types/codemash.dtos';

describe('updatePassword', () => {
  beforeEach(() => {
    dotenv.config({
      path: path.resolve(__dirname, '../data/config/.env'),
    });
  });

  it('should verify new user invitation token', async () => {
    const oldPassword = faker.internet.password();
    const newPassword = faker.internet.password();

    const newUserRequest = new RegisterUserRequest({
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName(),
      email: faker.internet.email(),
      password: oldPassword,
      displayName: faker.internet.userName(),
    });
    const newUser = await registerUser(newUserRequest);

    const request = new UpdatePasswordRequest({
      userId: newUser?.response?.userId,
      currentPassword: oldPassword,
      password: newPassword,
      repeatedPassword: newPassword,
    });
    const result = await updatePassword(request);

    expect(result.isError).to.be.false;
  });
});
