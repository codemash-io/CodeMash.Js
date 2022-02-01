import path from 'path';

import { expect } from 'chai';
import dotenv from 'dotenv';

import { deleteEmailFromQueue } from '../../src/modules/email';
import { DeleteEmailFromQueueRequest } from '../../src/types';

describe('deleteEmailFromQueue', () => {
  beforeEach(() => {
    dotenv.config({
      path: path.resolve(__dirname, '../data/config/.env'),
    });
  });

  it('should throw an error for invalid email id', async () => {
    const request = new DeleteEmailFromQueueRequest({
      id: 'invalidEmailid',
    });
    await expect(deleteEmailFromQueue(request)).to.be.rejected;
  });
});
