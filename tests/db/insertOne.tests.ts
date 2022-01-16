import path from 'path';

import { expect } from 'chai';
import dotenv from 'dotenv';

import { deleteOne, insertOne } from '../../src/modules/database';
import {
  DeleteOneRequest,
  InsertOneRequest,
} from '../../src/types/codemash.dtos';

describe('insertOne', () => {
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
    expect(response.isSuccess).to.be.true;
  });

  it('should return an error for a non-existent collection', async () => {
    const request = new InsertOneRequest({
      collectionName: 'nonExistentCollection',
      document: {
        dummy: 'data',
      },
    });
    const response = await insertOne(request);
    expect(response).to.be.not.null;
    expect(response.isError).to.be.true;
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
