import path from 'path';

import { expect } from 'chai';
import dotenv from 'dotenv';

import { find } from '../../src/modules/database';
import { FindRequest } from '../../src/types/codemash.dtos';
import Config from '../config/codemash.json';
import { TestUtils } from './utils';

// export class Employee {
//   public first_name: string;
//   public last_name: number;
// }

describe('db.find', () => {
  beforeEach(async () => {
    if (Config.TESTS.SETTINGS)
      dotenv.config({
        path: path.resolve(__dirname, '../data/config/.env'),
      });
    await TestUtils.FillInEmployees();
  });

  it('should get all records', async () => {
    const request = new FindRequest({
      collectionName: 'employees',
    });
    const response = await find<object>(request);

    expect(response.totalCount).to.be.greaterThanOrEqual(0);
  });

  it('should throw an error for a non-existent collection', async () => {
    const request = new FindRequest({
      collectionName: 'someNonExistentCollection',
    });

    await expect(find(request)).to.be.rejected;
  });
});
