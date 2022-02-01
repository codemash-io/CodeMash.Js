import path from 'path';

import { expect } from 'chai';
import dotenv from 'dotenv';

import { getNotifications } from '../../src/modules/push';
import { GetNotificationsRequest } from '../../src/types/codemash.dtos';

describe('getNotifications', () => {
  beforeEach(() => {
    dotenv.config({
      path: path.resolve(__dirname, '../data/config/.env'),
    });
  });

  it('should return some or none notifications without error', async () => {
    const request = new GetNotificationsRequest();
    const response = await getNotifications(request);
    expect(response).to.not.be.null;
  });
});
