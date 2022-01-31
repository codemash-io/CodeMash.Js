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

  it('should return an error for invalid data', async () => {
    const request = new MarkAllNotificationsAsReadRequest({
      deviceKey: 'invaliddeviceKey',
    });
    const result = await markAllNotificationsAsRead(request);
    expect(result).to.not.be.null;
  });
});
