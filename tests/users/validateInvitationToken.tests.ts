import path from 'path';

import faker from '@faker-js/faker';
import { expect } from 'chai';
import dotenv from 'dotenv';

import { inviteUser, validateInvitationToken } from '../../src/modules/users';
import {
  InviteUserRequest,
  ValidateInvitationTokenRequest,
} from '../../src/types/codemash.dtos';

describe('validateInvitationToken', () => {
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
    await inviteUser(request);

    // const validationRequest = new ValidateInvitationTokenRequest({
    //   token: ?
    // });
    // expect(result.isSuccess).to.be.true;
    // expect(result.response).to.be.not.null;
  });
});
