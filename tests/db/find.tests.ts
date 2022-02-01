import path from 'path';

import { expect } from 'chai';
import dotenv from 'dotenv';

import { find } from '../../src/modules/database';
import { FindRequest } from '../../src/types/codemash.dtos';

describe('find', () => {
  beforeEach(() => {
    dotenv.config({
      path: path.resolve(__dirname, '../data/config/.env'),
    });
  });

  it('should get all records', async () => {
    const request = new FindRequest({
      collectionName: 'employees',
    });
    const response = await find(request);
    console.log(`response`, response.result[0]._id, response);

    expect(response.totalCount).to.be.greaterThanOrEqual(0);
  });

  it('should throw an error for a non-existent collection', async () => {
    const request = new FindRequest({
      collectionName: 'someNonExistentCollection',
    });

    await expect(find(request)).to.be.rejected;
  });
});
