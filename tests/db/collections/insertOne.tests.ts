import path from 'path';

import { expect } from 'chai';
import dotenv from 'dotenv';

import { deleteOne, insertOne } from '../../../src/modules/database';
import {
  DeleteOneRequest,
  InsertOneRequest,
} from '../../../src/types/codemash.dtos';

describe('db.insertOne', () => {
  beforeEach(() => {
    dotenv.config({
      path: path.resolve(__dirname, '../data/config/.env'),
    });
  });

  it('should successfully insert a new record', async () => {
    const request = new InsertOneRequest({
      collectionName: 'employees',
      document: {
        first_name: 'Test',
      },
    });
    const response = await insertOne(request);
    expect(response).to.be.not.null;
  });

  it('should throw an error for a non-existent collection', async () => {
    const request = new InsertOneRequest({
      collectionName: 'nonExistentCollection',
      document: {
        dummy: 'data',
      },
    });

    await expect(insertOne(request)).to.be.rejected;
  });

  after(async () => {
    const deleteRequest = new DeleteOneRequest({
      collectionName: 'employees',
      filter: {
        first_name: 'Test',
      },
    });
    await deleteOne(deleteRequest);
  });
});
