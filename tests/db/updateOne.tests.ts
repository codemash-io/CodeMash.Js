import path from 'path';

import { expect } from 'chai';
import dotenv from 'dotenv';

import { deleteMany, insertOne, updateOne } from '../../src/modules/database';
import {
  DeleteManyRequest,
  InsertOneRequest,
  UpdateOneRequest,
} from '../../src/types/codemash.dtos';

const CREATE_NAME = 'updateMyName';
const UPDATE_NAME = 'updated-name';

describe('db.updateOne', () => {
  before(() => {
    dotenv.config({
      path: path.resolve(__dirname, '../data/config/.env'),
    });
  });

  it('should update at least 1 record', async () => {
    const insert = new InsertOneRequest({
      collectionName: 'employees',
      document: {
        first_name: CREATE_NAME,
      },
    });
    const newEntryResponse = await insertOne(insert);

    const request = new UpdateOneRequest({
      collectionName: 'employees',
      id: newEntryResponse.result,
      update: {
        $set: {
          first_name: UPDATE_NAME,
        },
      },
    });
    const response = await updateOne(request);
    expect(response.result?.modifiedCount).to.be.equal(1);
  });

  it('should throw an error for a non-existent collection', async () => {
    const insert = new InsertOneRequest({
      collectionName: 'employees',
      document: {
        first_name: CREATE_NAME,
      },
    });
    const newEntry = await insertOne(insert);

    const request = new UpdateOneRequest({
      collectionName: 'nonExistentCollection',
      id: newEntry.result,
      update: {
        $set: {
          first_name: UPDATE_NAME,
        },
      },
    });

    await expect(updateOne(request)).to.be.rejected;
  });

  after(async () => {
    const request = new DeleteManyRequest({
      collectionName: 'employees',
      filter: {
        $or: [
          {
            first_name: CREATE_NAME,
          },
          {
            first_name: UPDATE_NAME,
          },
        ],
      },
    });
    await deleteMany(request);
  });
});
