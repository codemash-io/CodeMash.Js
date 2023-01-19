import path from 'path';

import faker from '@faker-js/faker';
import { expect } from 'chai';
import dotenv from 'dotenv';

import {
  createPasswordReset,
  registerUser,
  validatePasswordToken,
} from '../../src/modules/iam';
import {
  CreatePasswordResetRequest,
  RegisterUserRequest,
  ValidatePasswordTokenRequest,
} from '../../src/types/codemash.dtos';

const EMAIL_ADDRESS = faker.internet.email();

describe('validatePasswordToken', () => {
  beforeEach(() => {
    dotenv.config({
      path: path.resolve(__dirname, '../data/config/.env'),
    });
  });

  it('should validate newly created password reset token', async () => {
    const createRequest = new RegisterUserRequest({
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName(),
      displayName: faker.internet.userName(),
      email: EMAIL_ADDRESS,
      password: faker.internet.password(),
    });
    await registerUser(createRequest);

    const request = new CreatePasswordResetRequest({
      email: EMAIL_ADDRESS,
    });
    const resetResult = await createPasswordReset(request);

    // how do we validate this without token?
    // const validationRequest = new ValidatePasswordTokenRequest({
    //   token: ?
    // });
    // expect(response).to.not.be.null;
    // expect(result.response).to.be.not.null;
  });
});
