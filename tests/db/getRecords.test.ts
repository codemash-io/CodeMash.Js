import dotenv from 'dotenv';
import {expect} from 'chai';
import {getRecords} from '../../src/modules/database';
import {FindRequest} from '../../src/types/codemash.dtos';

describe('getRecords', () => {
	beforeEach(() => {
		const path = require('path');
		dotenv.config({
			path: path.resolve(__dirname, '../data/config/.env'),
		});
	});

	test('should get all records', async () => {
		const request = new FindRequest({collectionName: 'contacts'});
		const response = await getRecords(request);
		expect(response).to.be.not.null;
	});
});
