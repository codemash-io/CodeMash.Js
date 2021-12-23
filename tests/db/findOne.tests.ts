import path from 'path';

import { expect } from 'chai';
import dotenv from 'dotenv';

import { findOne } from '../../src/modules/database';
import { FindOneRequest } from '../../src/types/codemash.dtos';

describe('findOne', () => {
  beforeEach(() => {
    dotenv.config({
      path: path.resolve(__dirname, '../data/config/.env'),
    });
  });

  it('should get a single record', async () => {
    const request = new FindOneRequest({ collectionName: 'employees' });
    const response = await findOne(request);
    expect(response).to.be.not.null;
  });

  it('should return an error for a non-existent collection', async () => {
    const request = new FindOneRequest({
      collectionName: 'someNonExistentCollection',
    });
    const result = await findOne(request);
    expect(result.isError).to.be.true;
  });
});
