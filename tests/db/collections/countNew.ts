import path from 'path';

import { expect } from 'chai';
import dotenv from 'dotenv';

import { count } from '../../../src/modules/database';
import { RequestContext } from '../../../src/types';
import { CountRequest } from '../../../src/types/codemash.dtos';
import {
  CodeMashProjectBuilder,
  ProjectOutput,
} from '../../codeMashProjectBuilder';

describe('db.countNew', () => {
  let output: ProjectOutput;

  before(async () => {
    dotenv.config({
      path: path.resolve(__dirname, '../data/config/.env'),
    });

    output = await CodeMashProjectBuilder.New.CreateAccount()
      .SignInToHub()
      .CreateNewProject()
      .EnableDatabase()
      // .AddNewCollection('../utils/db/schemas'.ToSchema('employees'))
      .AddEmployeesTemplateSchema()
      .CreateAdminAsServiceUser()
      .Build();
  });

  it('should return count bigger or equal to 0', async () => {
    const request = new CountRequest({ collectionName: 'employees' });
    const response = await count(
      request,
      new RequestContext(output.projectId!, output.apiAdminToken!),
    );
    expect(response.result).to.be.greaterThanOrEqual(0);
  });

  it('should throw an error for a non-existent collection', async () => {
    const request = new CountRequest({
      collectionName: 'someNonExistentCollection',
    });
    await expect(count(request)).to.be.rejected;
  });
});
