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

  it('should return an error for invalid function id', async () => {
    const request = new ExecuteFunctionRequest({
      data: '',
      id: 'invalidFunctionId',
    });
    const result = await executeFunction(request);

    expect(result.isError).to.be.true;
  });
});
