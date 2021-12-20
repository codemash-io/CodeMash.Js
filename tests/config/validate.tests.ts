import dotenv from 'dotenv';
import path from 'path';
import { expect } from 'chai';
import { CMConfig } from '../../src/config';

describe('CMConfig', () => {
	beforeEach(() => {
		dotenv.config({
			path: path.resolve(__dirname, '../data/config/.env'),
		});
	});

  it('should validate default config', () => {
    const client = new CMConfig();
    expect(client.Validate()).to.not.throw;
  });
})