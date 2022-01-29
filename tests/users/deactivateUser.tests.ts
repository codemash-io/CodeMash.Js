import path from 'path';

import { expect } from 'chai';
import dotenv from 'dotenv';

import { deactivateUser } from '../../src/modules/users';
import { DeactivateUserRequest } from '../../src/types/codemash.dtos';

describe('deactivateUser', () => {
  beforeEach(() => {
    dotenv.config({
      path: path.resolve(__dirname, '../data/config/.env'),
    });
  });

  it('should return an error for bad token', async () => {
    const request = new DeactivateUserRequest({
      token: 'clearlyABadToken',
    });
    const result = await deactivateUser(request);

    expect(result.isError).to.be.true;
  });
});
