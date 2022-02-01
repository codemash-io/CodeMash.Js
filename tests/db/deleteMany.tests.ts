import path from 'path';

import { expect } from 'chai';
import dotenv from 'dotenv';

import { deleteMany, insertMany } from '../../src/modules/database';
import {
  DeleteManyRequest,
  InsertManyRequest,
} from '../../src/types/codemash.dtos';

const ENTRIES_TO_INSERT = 5;
const ENTRY_FIRST_NAME = 'Dummy-name';

describe('deleteMany', () => {
  beforeEach(() => {
    dotenv.config({
      path: path.resolve(__dirname, '../data/config/.env'),
    });
  });

  before(async () => {
    const insertRequest = new InsertManyRequest({
      collectionName: 'employees',
      documents: Array.from({ length: ENTRIES_TO_INSERT }).map(() => ({
        first_name: ENTRY_FIRST_NAME,
      })),
    });

    await insertMany(insertRequest);
  });

  it('should delete at least inserted amount of records', async () => {
    const request = new DeleteManyRequest({
      collectionName: 'employees',
      filter: {
        first_name: ENTRY_FIRST_NAME,
      },
    });

    const response = await deleteMany(request);
    expect(response.result?.deletedCount).to.be.greaterThanOrEqual(
      ENTRIES_TO_INSERT,
    );
  });

  it('should throw an error for a non-existent collection', async () => {
    const request = new DeleteManyRequest({
      collectionName: 'someNonExistentCollection',
    });
    await expect(deleteMany(request)).to.be.rejected;
  });
});
