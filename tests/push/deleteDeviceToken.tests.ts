import path from 'path';

import { expect } from 'chai';
import dotenv from 'dotenv';

import { deleteDeviceToken } from '../../src/modules/push';
import { DeleteDeviceTokenRequest } from '../../src/types/codemash.dtos';

describe('deleteDeviceToken', () => {
  beforeEach(() => {
    dotenv.config({
      path: path.resolve(__dirname, '../data/config/.env'),
    });
  });

  it('should return an error for invalid data', async () => {
    const request = new DeleteDeviceTokenRequest({
      id: 'invalidId',
      deviceKey: 'invaliddeviceKey',
    });
    const result = await deleteDeviceToken(request);
    expect(result.isError).to.be.true;
  });
});
