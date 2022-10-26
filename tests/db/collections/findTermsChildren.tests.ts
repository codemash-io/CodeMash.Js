import path from 'path';

import { expect } from 'chai';
import dotenv from 'dotenv';

import { findTermsChildren } from '../../../src/modules/database';
import { FindTermsChildrenRequest } from '../../../src/types/codemash.dtos';

describe('db.findTermsChildren', () => {
  beforeEach(() => {
    dotenv.config({
      path: path.resolve(__dirname, '../data/config/.env'),
    });
  });

  it('should return some taxonomy children for example project', async () => {
    const request = new FindTermsChildrenRequest({
      collectionName: 'countries',
    });

    const response = await findTermsChildren(request);
    expect(response.totalCount).to.be.greaterThanOrEqual(0);
  });

  it('should throw an error for non-existent taxonomy', async () => {
    const request = new FindTermsChildrenRequest({
      collectionName: 'n0nExistentTaxonomy',
    });

    await expect(findTermsChildren(request)).to.be.rejected;
  });
});
