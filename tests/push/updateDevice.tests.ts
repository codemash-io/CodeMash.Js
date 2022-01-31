import path from 'path';

import { expect } from 'chai';
import dotenv from 'dotenv';

import { updateDevice } from '../../src/modules/push';
import { UpdateDeviceRequest } from '../../src/types/codemash.dtos';

describe('updateDevice', () => {
  beforeEach(() => {
    dotenv.config({
      path: path.resolve(__dirname, '../data/config/.env'),
    });
  });

  it('should return an error for invalid data', async () => {
    const request = new UpdateDeviceRequest({
      id: 'invalidId',
    });
    const result = await updateDevice(request);
    expect(result.isError).to.be.true;
  });
});
