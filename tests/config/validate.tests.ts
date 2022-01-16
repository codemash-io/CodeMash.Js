import path from 'path';

import { expect } from 'chai';
import dotenv from 'dotenv';

import { CMConfig } from '../../src/config';

describe('CMConfig', () => {
  beforeEach(() => {
    dotenv.config({
      path: path.resolve(__dirname, '../data/config/.env'),
    });
  });

  it('should validate default config', () => {
    expect(CMConfig.getInstance().Validate()).to.not.throw;
  });
});
