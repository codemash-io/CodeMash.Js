import path from 'path';

import { expect } from 'chai';
import dotenv from 'dotenv';

import { getDevices } from '../../src/modules/push';
import { GetDevicesRequest } from '../../src/types/codemash.dtos';

describe('getDevices', () => {
  beforeEach(() => {
    dotenv.config({
      path: path.resolve(__dirname, '../data/config/.env'),
    });
  });

  it('should return some or none devices without error', async () => {
    const request = new GetDevicesRequest();
    const response = await getDevices(request);
    expect(response).to.not.be.null;
  });
});
