import path from 'path';

import faker from '@faker-js/faker';
import { expect } from 'chai';
import dotenv from 'dotenv';

import { verifyUserInvitation } from '../../src/modules/iam';
import { VerifyUserInvitationRequest } from '../../src/types/codemash.dtos';

describe('verifyUserInvitation', () => {
  beforeEach(() => {
    dotenv.config({
      path: path.resolve(__dirname, '../data/config/.env'),
    });
  });

  it('should verify new user invitation token', async () => {
    const password = faker.internet.password();

    const request = new VerifyUserInvitationRequest({
      token: '?',
      password,
      repeatedPassword: password,
    });
    await expect(verifyUserInvitation(request)).to.be.rejected;
  });
});
