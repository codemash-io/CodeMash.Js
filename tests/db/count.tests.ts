import path from 'path';

import { expect } from 'chai';
import dotenv from 'dotenv';

import { count } from '../../src/modules/database';
import { CountRequest } from '../../src/types/codemash.dtos';

describe('count', () => {
  beforeEach(() => {
    dotenv.config({
      path: path.resolve(__dirname, '../data/config/.env'),
    });
  });

  it('should return count bigger or equal to 0', async () => {
    const request = new CountRequest({ collectionName: 'employees' });
    const response = await count(request);
    expect(response.response?.result).to.be.greaterThanOrEqual(0);
  });

  it('should return an error for a non-existent collection', async () => {
    const request = new CountRequest({
      collectionName: 'someNonExistentCollection',
    });
    const result = await count(request);
    expect(result.isError).to.be.true;
  });
});