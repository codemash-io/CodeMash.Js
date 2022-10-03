import path from 'path';

import { expect } from 'chai';
import dotenv from 'dotenv';

import { aggregate, deleteMany, insertMany } from '../../src/modules/database';
import {
  AggregateRequest,
  DeleteManyRequest,
  InsertManyRequest,
} from '../../src/types/codemash.dtos';

const RECORD_COUNT = 5;
const MATCH_NAME = 'DummyName';
const AGGREGATION_ID = '80c1b212-9af9-44ef-b158-00b8227b6127';

describe('db.aggregate', () => {
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

  it('should find at least given amount of records with filter', async () => {
    const request = new AggregateRequest({
      collectionName: 'employees',
      id: AGGREGATION_ID,
      tokens: {
        FirstName: MATCH_NAME,
      },
    });
    const response = await aggregate(request);
    const count = response.result?.length;

    expect(count).to.be.greaterThanOrEqual(RECORD_COUNT);
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
