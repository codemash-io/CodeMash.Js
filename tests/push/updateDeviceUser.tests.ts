import path from 'path';

import { expect } from 'chai';
import dotenv from 'dotenv';

import { updateDeviceUser } from '../../src/modules/push';
import { UpdateDeviceUserRequest } from '../../src/types/codemash.dtos';

describe('updateDeviceUser', () => {
  beforeEach(() => {
    dotenv.config({
      path: path.resolve(__dirname, '../data/config/.env'),
    });
  });

  it('should throw an error for invalid data', async () => {
    const request = new UpdateDeviceUserRequest({
      id: 'invalidId',
      userId: 'nonExistentUser',
    });
    await expect(updateDeviceUser(request)).to.be.rejected;
  });
});
