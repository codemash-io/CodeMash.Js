import path from 'path';

import { expect } from 'chai';
import dotenv from 'dotenv';

import { deleteOne, insertOne } from '../../src/modules/database';
import {
  DeleteOneRequest,
  InsertOneRequest,
} from '../../src/types/codemash.dtos';

const ENTRY_FIRST_NAME = 'Dummy-name-Single';

describe('deleteOne', () => {
  beforeEach(() => {
    dotenv.config({
      path: path.resolve(__dirname, '../data/config/.env'),
    });
  });

  before(async () => {
    const insertRequest = new InsertOneRequest({
      collectionName: 'employees',
      document: {
        first_name: ENTRY_FIRST_NAME,
      },
    });

    await insertOne(insertRequest);
  });

  it('should delete 1 record', async () => {
    const request = new DeleteOneRequest({
      collectionName: 'employees',
      filter: {
        first_name: ENTRY_FIRST_NAME,
      },
    });

    const result = await deleteOne(request);
    expect(result.response?.result?.deletedCount).to.be.equal(1);
  });

  it('should return an error for a non-existent collection', async () => {
    const request = new DeleteOneRequest({
      collectionName: 'someNonExistentCollection',
    });
    const result = await deleteOne(request);
    expect(result.isError).to.be.true;
  });
});
