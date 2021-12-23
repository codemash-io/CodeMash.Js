import path from 'path';

import { expect } from 'chai';
import dotenv from 'dotenv';

describe('distinct', () => {
  beforeEach(() => {
    dotenv.config({
      path: path.resolve(__dirname, '../data/config/.env'),
    });
  });

  it('should', async () => {});
});
