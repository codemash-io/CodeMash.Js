import path from 'path';

import * as faker from '@faker-js/faker';
import { expect } from 'chai';
import dotenv from 'dotenv';

import { registerGuest } from '../../src/modules/users';
import { RegisterGuestUserRequest } from '../../src/types/codemash.dtos';

describe('registerGuest', () => {
  beforeEach(() => {
    dotenv.config({
      path: path.resolve(__dirname, '../data/config/.env'),
    });
  });

  it('should register a new guest user', async () => {
    const request = new RegisterGuestUserRequest({
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName(),
      email: faker.internet.email(),
    });

    const result = await registerGuest(request);
    expect(result).to.not.throw;
  });
});
