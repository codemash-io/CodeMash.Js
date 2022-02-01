import path from 'path';

import { expect } from 'chai';
import dotenv from 'dotenv';

import { deleteMany, insertMany, updateMany } from '../../src/modules/database';
import {
  DeleteManyRequest,
  InsertManyRequest,
  UpdateManyRequest,
} from '../../src/types/codemash.dtos';

const ENTRIES_TO_CREATE = 3;
const CREATE_NAME = 'update-many-initial';
const UPDATE_NAME = 'updated-many';

describe('updateMany', () => {
  beforeEach(() => {
    dotenv.config({
      path: path.resolve(__dirname, '../data/config/.env'),
    });
  });

  it('should update all created records', async () => {
    const insert = new InsertManyRequest({
      collectionName: 'employees',
      documents: Array.from({ length: ENTRIES_TO_CREATE }).map(() => ({
        first_name: CREATE_NAME,
      })),
    });
    await insertMany(insert);

    const request = new UpdateManyRequest({
      bypassDocumentValidation: true,
      collectionName: 'employees',
      filter: {
        first_name: CREATE_NAME,
      },
      update: {
        $set: {
          first_name: UPDATE_NAME,
        },
      },
    });
    const response = await updateMany(request);

    expect(response.result?.modifiedCount).to.be.greaterThanOrEqual(
      ENTRIES_TO_CREATE,
    );
  });

  it('should throw an error for a non-existent collection', async () => {
    const insert = new InsertManyRequest({
      collectionName: 'employees',
      documents: Array.from({ length: ENTRIES_TO_CREATE }).map(() => ({
        first_name: CREATE_NAME,
      })),
    });
    await insertMany(insert);

    const request = new UpdateManyRequest({
      collectionName: 'nonExistentCollection',
      filter: {
        first_name: CREATE_NAME,
      },
      update: {
        $set: {
          first_name: UPDATE_NAME,
        },
      },
    });
    await expect(updateMany(request)).to.be.rejected;
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
