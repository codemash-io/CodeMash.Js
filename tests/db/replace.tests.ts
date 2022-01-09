import path from 'path';

import { expect } from 'chai';
import dotenv from 'dotenv';

import { deleteMany, insertOne, replace } from '../../src/modules/database';
import {
  DeleteManyRequest,
  InsertOneRequest,
  ReplaceOneRequest,
} from '../../src/types/codemash.dtos';

const INITIAL_ENTRY_NAME = 'initial_entry';
const REPLACE_WITH_NAME = 'replaced';

describe('replace', () => {
  beforeEach(() => {
    dotenv.config({
      path: path.resolve(__dirname, '../data/config/.env'),
    });
  });

  it('should replace one record', async () => {
    const insertRequest = new InsertOneRequest({
      collectionName: 'employees',
      document: JSON.stringify({
        first_name: INITIAL_ENTRY_NAME,
      }),
    });
    const newEntry = await insertOne(insertRequest);

    const request = new ReplaceOneRequest({
      collectionName: 'employees',
      id: newEntry.response?._id?.$oid,
      document: JSON.stringify({
        first_name: REPLACE_WITH_NAME,
      }),
    });
    const result = await replace(request);
    expect(result.response?.result.matchedCount).to.be.equal(1);
  });

  it('should return an error for a non-existent collection', async () => {
    const request = new ReplaceOneRequest({
      collectionName: 'nonExistentCollection',
      id: 'empty',
    });
    const response = await replace(request);
    expect(response).to.be.not.null;
    expect(response.isError).to.be.true;
  });

  after(async () => {
    const deleteRequest = new DeleteManyRequest({
      collectionName: 'employees',
      filter: JSON.stringify({
        $or: [
          {
            first_name: INITIAL_ENTRY_NAME,
          },
          {
            first_name: REPLACE_WITH_NAME,
          },
        ],
      }),
    });
    await deleteMany(deleteRequest);
  });
});
