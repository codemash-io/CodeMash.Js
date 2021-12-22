import path from 'path';

import {expect} from 'chai';
import dotenv from 'dotenv';

import {deleteMany, insertMany} from '../../src/modules/database';
import {
  DeleteManyRequest,
	InsertManyRequest,
} from '../../src/types/codemash.dtos';

describe('insertMany', () => {
	beforeEach(() => {
		dotenv.config({
			path: path.resolve(__dirname, '../data/config/.env'),
		});
	});

	it('should successfully insert new records', async () => {
		const request = new InsertManyRequest({
			collectionName: 'employees',
			documents: [JSON.stringify({first_name: 'Dummy'}), JSON.stringify({first_name: 'Dummy'})],
		});
		const response = await insertMany(request);
		expect(response).to.be.not.null;
		expect(response.isSuccess).to.be.true;
	});

	it('should return an error for a non-existent collection', async () => {
		const request = new InsertManyRequest({
			collectionName: 'nonExistentCollection',
			documents: [JSON.stringify({first_name: 'Dummy'}), JSON.stringify({first_name: 'Dummy'})],
		});
		const response = await insertMany(request);
		expect(response).to.be.not.null;
		expect(response.isError).to.be.true;
	});
  
  after(async () => {
    const request = new DeleteManyRequest({
      collectionName: 'employees',
      filter: JSON.stringify({
        first_name: 'Dummy'
      })
    });
    await deleteMany(request);
  });
});
