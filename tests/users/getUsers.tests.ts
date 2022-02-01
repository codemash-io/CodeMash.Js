import path from 'path';

import { expect } from 'chai';
import dotenv from 'dotenv';

import { getUsers } from '../../src/modules/users';
import { GetUsersRequest } from '../../src/types/codemash.dtos';

describe('getUsers', () => {
  beforeEach(() => {
    dotenv.config({
      path: path.resolve(__dirname, '../data/config/.env'),
    });
  });

  it('should get all users', async () => {
    const request = new GetUsersRequest();
    const response = await getUsers(request);

    expect(response.totalCount).to.be.greaterThanOrEqual(0);
  });
});
