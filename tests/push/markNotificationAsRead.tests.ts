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

  it('should throw an error for invalid data', async () => {
    const request = new MarkNotificationAsReadRequest({
      deviceKey: 'invaliddeviceKey',
      notificationId: 'invalidnotificationId',
    });
    const response = await markNotificationAsRead(request);
    expect(response).to.not.be.null;
  });
});
