import dotenv from 'dotenv';
import path from 'path';
import { expect } from 'chai';
import { AggregateRequest, DeleteManyRequest, InsertManyRequest } from '../../src/types/codemash.dtos';
import { aggregate, deleteMany, insertMany } from '../../src/modules/database';

const RECORD_COUNT = 5;
const MATCH_NAME = 'DummyName';
const AGGREGATION_ID = '80c1b212-9af9-44ef-b158-00b8227b6127'

describe('aggregate', () => {

	beforeEach(() => {
		dotenv.config({
			path: path.resolve(__dirname, '../data/config/.env'),
		});
	});

  before(async () => {
    const insertRequest = new InsertManyRequest({
      collectionName: 'employees',
      documents: Array.from({ length: RECORD_COUNT }).map(() => JSON.stringify({
        first_name: MATCH_NAME
      }))
    })
    await insertMany(insertRequest);
  });
  
	it('should find at least given amount of records with filter', async () => {
    const request = new AggregateRequest({
      collectionName: 'employees',
      id: AGGREGATION_ID,
      tokens: {
        "FirstName": MATCH_NAME
      }
    });
    const result = await aggregate(request);
    const count = result.response?.length;
    
    expect(count).to.be.greaterThanOrEqual(RECORD_COUNT);
	});


  after(async () => {
    const deleteRequest = new DeleteManyRequest({
      collectionName: 'employees',
      filter: JSON.stringify({
        first_name: MATCH_NAME
      })
    });
    await deleteMany(deleteRequest);
  })

});
