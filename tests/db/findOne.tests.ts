import path from 'path';

import { expect, use } from 'chai';
import chaiAsPromised from 'chai-as-promised';
import dotenv from 'dotenv';

import { findOne } from '../../src/modules/database';
import { FindOneRequest } from '../../src/types/codemash.dtos';

use(chaiAsPromised);

describe('findOne', () => {
  beforeEach(() => {
    dotenv.config({
      path: path.resolve(__dirname, '../data/config/.env'),
    });
  });

  it('should get a single record', async () => {
    const request = new FindOneRequest({
      collectionName: 'employees',
      filter: {
        FirstName: 'updateMyName',
      },
    });
    const response = await findOne(request);
    expect(response).to.be.not.null;
  });

  it('should throw an error for a non-existent collection', async () => {
    const request = new FindOneRequest({
      collectionName: 'someNonExistentCollection',
    });

    await expect(findOne(request)).to.be.rejected;
  });
});
