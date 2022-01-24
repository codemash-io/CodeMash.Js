import path from 'path';

import { expect } from 'chai';
import dotenv from 'dotenv';

import { deleteMany, insertMany } from '../../src/modules/database';
import {
  DeleteManyRequest,
  InsertManyRequest,
} from '../../src/types/codemash.dtos';

describe('insertMany', () => {
  beforeEach(() => {
    dotenv.config({
      path: path.resolve(__dirname, '../data/config/.env'),
    });
  });

  it('should successfully insert new records', async () => {
    const request = new InsertManyRequest({
      collectionName: 'employees',
      documents: [{ first_name: 'Dummy' }, { first_name: 'Dummy' }],
    });
    const response = await insertMany(request);
    expect(response).to.be.not.null;
    expect(response.isSuccess).to.be.true;
  });

  it('should return an error for a non-existent collection', async () => {
    const request = new InsertManyRequest({
      collectionName: 'nonExistentCollection',
      documents: [{ first_name: 'Dummy' }, { first_name: 'Dummy' }],
    });
    const response = await insertMany(request);
    expect(response).to.be.not.null;
    expect(response.isError).to.be.true;
  });

  after(async () => {
    const request = new DeleteManyRequest({
      collectionName: 'employees',
      filter: {
        first_name: 'Dummy',
      },
    });
    await deleteMany(request);
  });
});