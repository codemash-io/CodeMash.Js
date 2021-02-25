import {getRecords} from 'Components/db';
import config from 'Config';

if (process.env.NODE_ENV == 'test') require('dotenv').config();

describe('db tests', () => {
	test('do search and find records', async () => {
		console.log(process.env.CODEMASH_SECRET_KEY);
		console.log(process.env.CODEMASH_PROJECT_ID);

		config.init(
			{
				secretKey: 'GGzMupRM7upe9HPsZnrtWeOx-0AMF9UI',
				projectId: 'fe964bc0-3475-4ac2-81a9-2a3abdaf614b',
			},
			process.env.NODE_ENV
		);
		const request = {collectionName: 'contacts'};
		const response = await getRecords(request);
		expect(response.totalCount).toBe(2);
	});
});
