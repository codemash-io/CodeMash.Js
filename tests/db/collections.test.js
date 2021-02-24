import {getRecords} from 'Components/db';
import config from 'Config';

require('dotenv').config();

beforeEach(() => {
	config.init({
		secretKey: process.env.CODEMASH_SECRET_KEY,
		projectId: process.env.CODEMASH_PROJECT_ID,
	});
});

test('do search and find records', async () => {
	const request = {collectionName: 'contacts'};
	const response = await getRecords(request);
	expect(response.totalCount).toBe(2);
});
