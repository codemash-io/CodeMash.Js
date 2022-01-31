import path from 'path';

import { expect } from 'chai';
import dotenv from 'dotenv';

import { getNotification } from '../../src/modules/push';
import { GetNotificationRequest } from '../../src/types/codemash.dtos';

describe('getNotification', () => {
  beforeEach(() => {
    dotenv.config({
      path: path.resolve(__dirname, '../data/config/.env'),
    });
  });

  it('should return an error for invalid data', async () => {
    const request = new GetNotificationRequest({
      id: 'invalidId',
      deviceKey: 'invaliddeviceKey',
    });
    const result = await getNotification(request);
    expect(result.isError).to.be.true;
  });
});
