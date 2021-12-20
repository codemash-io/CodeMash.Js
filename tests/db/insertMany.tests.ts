import dotenv from 'dotenv';
import path from 'path';
import {expect} from 'chai';
import {insertMany} from '../../src/modules/database';
import {
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
			documents: [JSON.stringify({first_name: 'dummy1'}), JSON.stringify({first_name: 'dummy2'})],
		});
		const response = await insertMany(request);
		expect(response).to.be.not.null;
		expect(response.isSuccess).to.be.true;
	});

	it('should return an error for a non-existent collection', async () => {
		const request = new InsertManyRequest({
			collectionName: 'nonExistentCollection',
			documents: [JSON.stringify({first_name: 'dummy1'}), JSON.stringify({first_name: 'dummy2'})],
		});
		const response = await insertMany(request);
		expect(response).to.be.not.null;
		expect(response.isError).to.be.true;
	});
});
