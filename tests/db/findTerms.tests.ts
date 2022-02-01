import path from 'path';

import { expect } from 'chai';
import dotenv from 'dotenv';

import { findTerms } from '../../src/modules/database';
import { FindTermsRequest } from '../../src/types/codemash.dtos';

describe('findTerms', () => {
  beforeEach(() => {
    dotenv.config({
      path: path.resolve(__dirname, '../data/config/.env'),
    });
  });

  it('should return some taxonomies for example project', async () => {
    const request = new FindTermsRequest({
      collectionName: 'countries',
    });

    const response = await findTerms(request);
    expect(response.result).length.to.be.greaterThanOrEqual(0);
  });

  it('should throw an error for non-existent taxonomy', async () => {
    const request = new FindTermsRequest({
      collectionName: 'n0nExistentTaxonomy',
    });

    await expect(findTerms(request)).to.be.rejected;
  });
});
