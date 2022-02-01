import path from 'path';

import faker from '@faker-js/faker';
import { expect } from 'chai';
import dotenv from 'dotenv';

import { updateProfile } from '../../src/modules/users';
import { UpdateProfileRequest } from '../../src/types/codemash.dtos';

describe('updateProfile', () => {
  beforeEach(() => {
    dotenv.config({
      path: path.resolve(__dirname, '../data/config/.env'),
    });
  });

  // doesnt work
  // it('should update the profile', async () => {
  //   const request = new UpdateProfileRequest({
  //     firstName: faker.name.firstName(),
  //     lastName: faker.name.lastName(),
  //   });
  //   const response = await updateProfile(request);
  //   console.log(`result`, result);

  //   expect(response).to.not.be.null;
  //   expect(result.response).to.be.not.null;
  // });
});
