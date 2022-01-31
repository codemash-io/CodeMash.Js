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

  it('should return an error for invalid data', async () => {
    const request = new GetNotificationsCountRequest();
    const result = await getNotificationsCount(request);
    expect(result).to.not.be.null;
  });
});
