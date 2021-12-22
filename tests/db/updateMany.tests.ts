import dotenv from 'dotenv';
import path from 'path';
import { expect } from 'chai';

describe('updateMany', () => {
	beforeEach(() => {
		dotenv.config({
			path: path.resolve(__dirname, '../data/config/.env'),
		});
	});

	it('should', async () => {});
});
