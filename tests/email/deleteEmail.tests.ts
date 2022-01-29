import path from 'path';

import { expect } from 'chai';
import dotenv from 'dotenv';

import { deleteEmail } from '../../src/modules/email';
import { DeleteEmailRequest } from '../../src/types/codemash.dtos';

describe('deleteEmail', () => {
  beforeEach(() => {
    dotenv.config({
      path: path.resolve(__dirname, '../data/config/.env'),
    });
  });

  it('should return an error for invalid email id', async () => {
    const request = new DeleteEmailRequest({
      id: 'invalidEmailid',
    });
    const result = await deleteEmail(request);

    expect(result.isError).to.be.true;
  });
});
