import path from 'path';

import { expect } from 'chai';
import dotenv from 'dotenv';

import { findMany } from '../../src/modules/database';
import { FindRequest } from '../../src/types/codemash.dtos';

describe('findMany', () => {
	beforeEach(() => {
		dotenv.config({
			path: path.resolve(__dirname, '../data/config/.env'),
		});
	});

	it('should get all records', async () => {
		const request = new FindRequest({ collectionName: 'employees' });
		const response = await findMany(request);
		expect(response).to.be.not.null.and.to.have.key('isSuccess');
	});
  
  it('should return an error for a non-existent collection', async () => {
    const request = new FindRequest({ collectionName: 'someNonExistentCollection' });
    const result = await findMany(request);
    expect(result.isError).to.be.true;
  });
});
