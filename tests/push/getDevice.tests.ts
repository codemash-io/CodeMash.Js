import path from 'path';

import { expect } from 'chai';
import dotenv from 'dotenv';

import { getDevice } from '../../src/modules/push';
import { GetDeviceRequest } from '../../src/types/codemash.dtos';

describe('getDevice', () => {
  beforeEach(() => {
    dotenv.config({
      path: path.resolve(__dirname, '../data/config/.env'),
    });
  });

  it('should return an error for invalid data', async () => {
    const request = new GetDeviceRequest({
      id: 'invalidId',
    });
    const result = await getDevice(request);
    expect(result.isError).to.be.true;
  });
});
