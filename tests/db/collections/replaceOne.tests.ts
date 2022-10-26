import path from 'path';

import { expect } from 'chai';
import dotenv from 'dotenv';

import {
  deleteMany,
  insertOne,
  replaceOne,
} from '../../../src/modules/database';
import {
  DeleteManyRequest,
  InsertOneRequest,
  ReplaceOneRequest,
} from '../../../src/types/codemash.dtos';

const INITIAL_ENTRY_NAME = 'initial_entry';
const REPLACE_WITH_NAME = 'replaced';

describe('db.replaceOne', () => {
  beforeEach(() => {
    dotenv.config({
      path: path.resolve(__dirname, '../data/config/.env'),
    });
  });

  it('should replace one record', async () => {
    const insertRequest = new InsertOneRequest({
      collectionName: 'employees',
      document: {
        first_name: INITIAL_ENTRY_NAME,
      },
    });
    const newEntryResponse = await insertOne(insertRequest);

    const request = new ReplaceOneRequest({
      collectionName: 'employees',
      id: newEntryResponse.result,
      document: {
        first_name: REPLACE_WITH_NAME,
      },
    });
    const response = await replaceOne(request);
    expect(response.result?.matchedCount).to.be.equal(1);
  });

  it('should throw an error for a non-existent collection', async () => {
    const request = new ReplaceOneRequest({
      collectionName: 'nonExistentCollection',
      id: 'empty',
    });
    await expect(replaceOne(request)).to.be.rejected;
  });

  after(async () => {
    const deleteRequest = new DeleteManyRequest({
      collectionName: 'employees',
      filter: {
        $or: [
          {
            first_name: INITIAL_ENTRY_NAME,
          },
          {
            first_name: REPLACE_WITH_NAME,
          },
        ],
      },
    });
    await deleteMany(deleteRequest);
  });
});
