import path from 'path';

import { expect } from 'chai';
import dotenv from 'dotenv';

import { deactivateUser } from '../../src/modules/iam';
import { DeactivateUserRequest } from '../../src/types/codemash.dtos';

describe('deactivateUser', () => {
  beforeEach(() => {
    dotenv.config({
      path: path.resolve(__dirname, '../data/config/.env'),
    });
  });

  it('should throw an error for bad token', async () => {
    const request = new DeactivateUserRequest({
      token: 'clearlyABadToken',
    });
    await expect(deactivateUser(request)).to.be.rejected;
  });
});
