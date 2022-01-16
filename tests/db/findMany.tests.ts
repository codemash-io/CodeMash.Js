import path from 'path';

import { expect } from 'chai';
import dotenv from 'dotenv';

import { find } from '../../src/modules/database';
import { FindRequest } from '../../src/types/codemash.dtos';

describe('find', () => {
  beforeEach(() => {
    dotenv.config({
      path: path.resolve(__dirname, '../data/config/.env'),
    });
  });

  it('should get all records', async () => {
    const request = new FindRequest({
      collectionName: 'employees',
    });
    const response = await find(request);
    expect(response).to.be.not.null.and.to.have.key('isSuccess');
  });

  it('should return an error for a non-existent collection', async () => {
    const request = new FindRequest({
      collectionName: 'someNonExistentCollection',
    });
    const result = await find(request);
    expect(result.isError).to.be.true;
  });
});
