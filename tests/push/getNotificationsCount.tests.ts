import path from 'path';

import { expect } from 'chai';
import dotenv from 'dotenv';

import { getNotificationsCount } from '../../src/modules/push';
import { GetNotificationsCountRequest } from '../../src/types/codemash.dtos';

describe('getNotificationsCount', () => {
  beforeEach(() => {
    dotenv.config({
      path: path.resolve(__dirname, '../data/config/.env'),
    });
  });

  it('should throw an error for invalid data', async () => {
    const request = new GetNotificationsCountRequest();
    const response = await getNotificationsCount(request);
    expect(response).to.not.be.null;
  });
});
