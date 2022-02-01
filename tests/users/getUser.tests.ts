import path from 'path';

import faker from '@faker-js/faker';
import { expect } from 'chai';
import dotenv from 'dotenv';

import { getUser, registerUser } from '../../src/modules/users';
import {
  GetUserRequest,
  RegisterUserRequest,
} from '../../src/types/codemash.dtos';

const NAME_TO_MATCH = faker.name.firstName();

describe('getUser', () => {
  beforeEach(() => {
    dotenv.config({
      path: path.resolve(__dirname, '../data/config/.env'),
    });
  });

  it('should get the created user', async () => {
    const createReq = new RegisterUserRequest({
      firstName: NAME_TO_MATCH,
      lastName: faker.name.lastName(),
      email: faker.internet.email(),
      password: faker.internet.password(),
    });
    const createRes = await registerUser(createReq);

    const request = new GetUserRequest({
      id: createRes.userId,
    });
    const response = await getUser(request);

    expect(response.result?.firstName).to.equal(NAME_TO_MATCH);
  });
});
