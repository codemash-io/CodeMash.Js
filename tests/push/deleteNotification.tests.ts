import path from 'path';

import { expect } from 'chai';
import dotenv from 'dotenv';

import { deleteNotification } from '../../src/modules/push';
import { DeleteNotificationRequest } from '../../src/types/codemash.dtos';

describe('deleteNotification', () => {
  beforeEach(() => {
    dotenv.config({
      path: path.resolve(__dirname, '../data/config/.env'),
    });
  });

  it('should throw an error for invalid data', async () => {
    const request = new DeleteNotificationRequest({
      id: 'invalidId',
      deviceKey: 'invaliddeviceKey',
    });
    await expect(deleteNotification(request)).to.be.rejected;
  });
});
