import path from 'path';

import { expect } from 'chai';
import dotenv from 'dotenv';

import { sendPushNotification } from '../../src/modules/push';
import { SendPushNotificationRequest } from '../../src/types/codemash.dtos';

describe('sendPushNotification', () => {
  beforeEach(() => {
    dotenv.config({
      path: path.resolve(__dirname, '../data/config/.env'),
    });
  });

  it('should return an error for invalid data', async () => {
    const request = new SendPushNotificationRequest({
      users: ['nonExistentUser'],
      templateId: 'invalidtemplateId',
    });
    const result = await sendPushNotification(request);
    expect(result.isError).to.be.true;
  });
});
