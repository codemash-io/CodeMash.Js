import path from 'path';

import { expect } from 'chai';
import dotenv from 'dotenv';

describe('deleteMany', () => {
	beforeEach(() => {
		dotenv.config({
			path: path.resolve(__dirname, '../data/config/.env'),
		});
	});

	it('should', async () => {});
});
