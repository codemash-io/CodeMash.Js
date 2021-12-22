import dotenv from 'dotenv';
import path from 'path';
import { expect } from 'chai';

describe('deleteMany', () => {
	beforeEach(() => {
		dotenv.config({
			path: path.resolve(__dirname, '../data/config/.env'),
		});
	});

	it('should', async () => {});
});
