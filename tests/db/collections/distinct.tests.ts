import path from 'path';

import { expect } from 'chai';
import dotenv from 'dotenv';

import {
  deleteMany,
  distinct,
  insertMany,
} from '../../../src/modules/database';
import {
  DeleteManyRequest,
  DistinctRequest,
  FindRequest,
  InsertManyRequest,
} from '../../../src/types/codemash.dtos';

const RECORD_COUNT = 5;
const MATCH_NAME = 'DistinctReally';

describe('db.distinct', () => {
  beforeEach(() => {
    dotenv.config({
      path: path.resolve(__dirname, '../data/config/.env'),
    });
  });

  before(async () => {
    const insertRequest = new InsertManyRequest({
      collectionName: 'employees',
      documents: Array.from({ length: RECORD_COUNT }).map(() => ({
        first_name: MATCH_NAME,
      })),
    });
    await insertMany(insertRequest);
  });

  it('should return only 1 distinct record', async () => {
    const request = new DistinctRequest({
      collectionName: 'employees',
      field: 'first_name',
    });
    const response = await distinct(request);

    // expect(response.result as Array<string>).to.include(MATCH_NAME);
    // expect(response.result?.length).to.be.greaterThanOrEqual(1);
  });

  it('should throw an error for a non-existent collection', async () => {
    const request = new DistinctRequest({
      collectionName: 'someNonExistentCollection',
      field: 'first_name',
    });
    await expect(distinct(request)).to.be.rejected;
  });

  after(async () => {
    const deleteRequest = new DeleteManyRequest({
      collectionName: 'employees',
      filter: {
        first_name: MATCH_NAME,
      },
    });
    await deleteMany(deleteRequest);
  });
});
