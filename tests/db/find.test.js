import {getRecords} from '../../src/modules/database';
import {expect} from 'chai';
import dotenv from 'dotenv';

dotenv.config();

describe('Find tests', () => {
	it('find all records', async () => {
		const response = await getRecords({collectionName: 'contacts'});
		expect(response).to.be.not.null;
	});
});
