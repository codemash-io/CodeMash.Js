import path from 'path';

import faker from '@faker-js/faker';
import { expect } from 'chai';
import dotenv from 'dotenv';

import { blockUser, registerUser, unblockUser } from '../../src/modules/users';
import {
  BlockUserRequest,
  RegisterUserRequest,
  UnblockUserRequest,
} from '../../src/types/codemash.dtos';

describe('unblockUser', () => {
  beforeEach(() => {
    dotenv.config({
      path: path.resolve(__dirname, '../data/config/.env'),
    });
  });

  it('should unblock a new blocked user', async () => {
    const createUser = new RegisterUserRequest({
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName(),
      email: faker.internet.email(),
      password: faker.internet.password(),
    });
    const createdUser = await registerUser(createUser);

    const blockReq = new BlockUserRequest({
      id: createdUser.response?.userId,
    });
    await blockUser(blockReq);

    const request = new UnblockUserRequest({
      id: createdUser.response?.userId,
    });
    const result = await unblockUser(request);

    expect(result.isSuccess).to.be.true;
    expect(result.response).to.be.not.null;
  });
});
