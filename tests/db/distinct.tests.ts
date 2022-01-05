import path from 'path';

import { expect } from 'chai';
import dotenv from 'dotenv';

import {
  deleteMany,
  distinct,
  findMany,
  insertMany,
} from '../../src/modules/database';
import {
  DeleteManyRequest,
  DistinctRequest,
  FindRequest,
  InsertManyRequest,
} from '../../src/types/codemash.dtos';

const RECORD_COUNT = 5;
const MATCH_NAME = 'DistinctReally';

describe('distinct', () => {
  beforeEach(() => {
    dotenv.config({
      path: path.resolve(__dirname, '../data/config/.env'),
    });
  });

  before(async () => {
    const insertRequest = new InsertManyRequest({
      collectionName: 'employees',
      documents: Array.from({ length: RECORD_COUNT }).map(() =>
        JSON.stringify({
          first_name: MATCH_NAME,
        }),
      ),
    });
    await insertMany(insertRequest);
  });

  it('should return only 1 distinct record', async () => {
    const request = new DistinctRequest({
      collectionName: 'employees',
      field: 'first_name',
    });
    const response = await distinct(request);

    expect(response.response?.result as Array<string>).to.include(MATCH_NAME);
    expect(response.response?.result?.length).to.be.greaterThanOrEqual(1);
  });

  it('should return an error for a non-existent collection', async () => {
    const request = new DistinctRequest({
      collectionName: 'someNonExistentCollection',
      field: 'first_name',
    });
    const result = await distinct(request);
    expect(result.isError).to.be.true;
  });

  after(async () => {
    const deleteRequest = new DeleteManyRequest({
      collectionName: 'employees',
      filter: JSON.stringify({
        first_name: MATCH_NAME,
      }),
    });
    await deleteMany(deleteRequest);
  });
});
