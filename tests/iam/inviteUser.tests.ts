import path from 'path';

import faker from '@faker-js/faker';
import { expect } from 'chai';
import dotenv from 'dotenv';

import { inviteUser } from '../../src/modules/iam';
import { InviteUserRequest } from '../../src/types/codemash.dtos';

describe('inviteUser', () => {
  beforeEach(() => {
    dotenv.config({
      path: path.resolve(__dirname, '../data/config/.env'),
    });
  });

  it('should create a new user invitation', async () => {
    const request = new InviteUserRequest({
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName(),
      email: faker.internet.email(),
      displayName: faker.internet.userName(),
    });

    const response = await inviteUser(request);
    expect(response).to.not.be.null;
  });
});
