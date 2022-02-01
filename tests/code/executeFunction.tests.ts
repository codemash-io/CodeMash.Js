import path from 'path';

import { expect } from 'chai';
import dotenv from 'dotenv';

import { executeFunction } from '../../src/modules/code';
import { ExecuteFunctionRequest } from '../../src/types/codemash.dtos';

describe('executeFunction', () => {
  beforeEach(() => {
    dotenv.config({
      path: path.resolve(__dirname, '../data/config/.env'),
    });
  });

  it('should throw an error for invalid function id', async () => {
    const request = new ExecuteFunctionRequest({
      data: '',
      id: 'invalidFunctionId',
    });
    await expect(executeFunction(request)).to.be.rejected;
  });
});
