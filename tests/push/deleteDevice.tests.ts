import path from 'path';

import { expect } from 'chai';
import dotenv from 'dotenv';

import { deleteDevice } from '../../src/modules/push';
import { DeleteDeviceRequest } from '../../src/types/codemash.dtos';

describe('deleteDevice', () => {
  beforeEach(() => {
    dotenv.config({
      path: path.resolve(__dirname, '../data/config/.env'),
    });
  });

  it('should throw an error for invalid data', async () => {
    const request = new DeleteDeviceRequest({
      id: 'invalidId',
    });
    await expect(deleteDevice(request)).to.be.rejected;
  });
});
