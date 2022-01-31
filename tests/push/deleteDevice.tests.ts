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

  it('should return an error for invalid data', async () => {
    const request = new DeleteDeviceRequest({
      id: 'invalidId',
    });
    const result = await deleteDevice(request);
    expect(result.isError).to.be.true;
  });
});
