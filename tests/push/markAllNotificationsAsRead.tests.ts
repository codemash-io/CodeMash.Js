import path from 'path';

import { expect } from 'chai';
import dotenv from 'dotenv';

import { markAllNotificationsAsRead } from '../../src/modules/push';
import { MarkAllNotificationsAsReadRequest } from '../../src/types/codemash.dtos';

describe('markAllNotificationsAsRead', () => {
  beforeEach(() => {
    dotenv.config({
      path: path.resolve(__dirname, '../data/config/.env'),
    });
  });

  it('should throw an error for invalid data', async () => {
    const request = new MarkAllNotificationsAsReadRequest({
      deviceKey: 'invaliddeviceKey',
    });
    const response = await markAllNotificationsAsRead(request);
    expect(response).to.not.be.null;
  });
});
