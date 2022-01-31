import path from 'path';

import { expect } from 'chai';
import dotenv from 'dotenv';

import { markNotificationAsRead } from '../../src/modules/push';
import { MarkNotificationAsReadRequest } from '../../src/types/codemash.dtos';

describe('markNotificationAsRead', () => {
  beforeEach(() => {
    dotenv.config({
      path: path.resolve(__dirname, '../data/config/.env'),
    });
  });

  it('should return an error for invalid data', async () => {
    const request = new MarkNotificationAsReadRequest({
      deviceKey: 'invaliddeviceKey',
      notificationId: 'invalidnotificationId',
    });
    const result = await markNotificationAsRead(request);
    expect(result).to.not.be.null;
  });
});
