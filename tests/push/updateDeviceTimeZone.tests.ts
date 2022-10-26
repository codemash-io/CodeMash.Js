import path from 'path';

import { expect } from 'chai';
import dotenv from 'dotenv';

import { updateDeviceTimeZone } from '../../src/modules/push';
import { UpdateDeviceTimeZoneRequest } from '../../src/types/codemash.dtos';

describe('updateDeviceTimeZone', () => {
  beforeEach(() => {
    dotenv.config({
      path: path.resolve(__dirname, '../data/config/.env'),
    });
  });

  it('should throw an error for invalid data', async () => {
    const request = new UpdateDeviceTimeZoneRequest({
      id: 'invalidId',
      timeZone: 'invaldiTimeZone',
    });
    await expect(updateDeviceTimeZone(request)).to.be.rejected;
  });
});