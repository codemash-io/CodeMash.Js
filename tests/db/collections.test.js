import {getRecords} from 'Components/db';
import config from 'Config';

if (process.env.NODE_ENV == 'test') require('dotenv').config();

const OLD_ENV = process.env;

beforeEach(() => {
	jest.resetModules(); // Most important - it clears the cache
	process.env = {...OLD_ENV}; // Make a copy

	config.init(
		{
			secretKey: 'fe964bc0-3475-4ac2-81a9-2a3abdaf614b',
			projectId: 'GGzMupRM7upe9HPsZnrtWeOx-0AMF9UI',
		},
		process.env.NODE_ENV
	);
});

afterAll(() => {
	process.env = OLD_ENV; // Restore old environment
});

test('do search and find records', async () => {
	const request = {collectionName: 'contacts'};
	const response = await getRecords(request);
	expect(response.totalCount).toBe(2);
});
