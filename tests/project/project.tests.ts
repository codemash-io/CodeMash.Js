import path from 'path';

import { expect } from 'chai';
import dotenv from 'dotenv';

import { getProject } from '../../src/modules/project';
import {
  GetProjectRequest,
  GetProjectResponse,
} from '../../src/types/codemash.dtos';

describe('project.info', () => {
  beforeEach(async () => {
    dotenv.config({
      path: path.resolve(__dirname, '../data/config/.env'),
    });
  });

  it('can get project info', async () => {
    const request = new GetProjectRequest();
    const response: GetProjectResponse = await getProject(request);

    expect(response.result).to.not.be.null;
    expect(response.result).to.be.equal(process.env.CODEMASH_PROJECT_ID);
  });
});
