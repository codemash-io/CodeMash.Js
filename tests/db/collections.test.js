import {getRecords} from 'Components/db';
import config from 'Config';

if (process.env.NODE_ENV == 'test') require('dotenv').config();

beforeEach(() => {
	config.init(
		{
			secretKey: process.env.CODEMASH_SECRET_KEY,
			projectId: process.env.CODEMASH_PROJECT_ID,
		},
		process.env.NODE_ENV
	);
});

test('do search and find records', async () => {
	const request = {collectionName: 'contacts'};
	const response = await getRecords(request);
	expect(response.totalCount).toBe(2);
});
