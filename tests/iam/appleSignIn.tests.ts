import path from 'path';

import { expect } from 'chai';
import dotenv from 'dotenv';

import { sighInWithApple } from '../../src/modules/iam';
import { Guid, RequestContext } from '../../src/types';
import { AppleAuthenticationRequest } from '../../src/types/codemash.dtos';

describe('iam.signInWithApple', () => {
  beforeEach(() => {
    dotenv.config({
      path: path.resolve(__dirname, '../data/config/.env'),
    });
  });

  it('should sign in with apple code and access token', async () => {
    const appleRequest = new AppleAuthenticationRequest({
      code: 'c9c13dfe1c7b148a4be6a3238436063c9.0.rvvv.eQBAWbCJwDsdY95_STbPlg',
      accessToken:
        'eyJraWQiOiJZdXlYb1kiLCJhbGciOiJSUzI1NiJ9.eyJpc3MiOiJodHRwczovL2FwcGxlaWQuYXBwbGUuY29tIiwiYXVkIjoiY29tLmNvZGVtYXNoLmF1dGgiLCJleHAiOjE2NzM4NzAyMDIsImlhdCI6MTY3Mzc4MzgwMiwic3ViIjoiMDAwNTU1LjI0OTIwMGU1YjM5ODRmNDg4Y2U3YWEwN2NhZDBkZjVkLjE5MjciLCJjX2hhc2giOiJucnFGOVJQNE9lSGNNWUNSdUU3RlN3IiwiZW1haWwiOiJkb21hbnRhc2pvdmFpc2FzQGdtYWlsLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjoidHJ1ZSIsImF1dGhfdGltZSI6MTY3Mzc4MzgwMiwibm9uY2Vfc3VwcG9ydGVkIjp0cnVlfQ.Ixe8KCXoHl-rhj0eK7Y1a_j1DY0FIi-TtOdYq95K89EpER5g1OPfJT-VCu8HkBj0qKvEUQD2BbC1vEp7o2_ov1QqU2kTW-ZNuiXeNfqhsQ3bsyN7s-Z7A_cwxeBxH0XtYmOu4J82KXGdCu2OjOR85d5FfcSKD2LESU6Q09N-8_gQgmFfzG_UIDZHjAMYGvaSiUDwNNU0D6X17kzTmf9A8Hkiukl18e9EfpvQaSUhlNxQBpP1povZ49VzgOvcLF6gKuBNjmj-FPrOVAp5iSg61v_dYuxFQY4_lfldXFTMcql8hlhl0WBam2QiGCrVtCWr3_Rqw8F2OyAmGT6SHxZU6Q',
      meta: {
        authorizationCode:
          'eyJraWQiOiJZdXlYb1kiLCJhbGciOiJSUzI1NiJ9.eyJpc3MiOiJodHRwczovL2FwcGxlaWQuYXBwbGUuY29tIiwiYXVkIjoiY29tLmNvZGVtYXNoLmF1dGgiLCJleHAiOjE2NzM4NzAyMDIsImlhdCI6MTY3Mzc4MzgwMiwic3ViIjoiMDAwNTU1LjI0OTIwMGU1YjM5ODRmNDg4Y2U3YWEwN2NhZDBkZjVkLjE5MjciLCJjX2hhc2giOiJucnFGOVJQNE9lSGNNWUNSdUU3RlN3IiwiZW1haWwiOiJkb21hbnRhc2pvdmFpc2FzQGdtYWlsLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjoidHJ1ZSIsImF1dGhfdGltZSI6MTY3Mzc4MzgwMiwibm9uY2Vfc3VwcG9ydGVkIjp0cnVlfQ.Ixe8KCXoHl-rhj0eK7Y1a_j1DY0FIi-TtOdYq95K89EpER5g1OPfJT-VCu8HkBj0qKvEUQD2BbC1vEp7o2_ov1QqU2kTW-ZNuiXeNfqhsQ3bsyN7s-Z7A_cwxeBxH0XtYmOu4J82KXGdCu2OjOR85d5FfcSKD2LESU6Q09N-8_gQgmFfzG_UIDZHjAMYGvaSiUDwNNU0D6X17kzTmf9A8Hkiukl18e9EfpvQaSUhlNxQBpP1povZ49VzgOvcLF6gKuBNjmj-FPrOVAp5iSg61v_dYuxFQY4_lfldXFTMcql8hlhl0WBam2QiGCrVtCWr3_Rqw8F2OyAmGT6SHxZU6Q',
        givenName: 'Liurbis',
        familyName: 'Kliunkis',
      },
    });

    const requestContext = new RequestContext(
      new Guid('b25d83a5-79b5-45e2-bf3d-097ef6050196'),
      'EnNFecBRzr3qwwCMvLHgpXwfrizJIjjc',
      undefined,
      'https://api.codemash.io',
    );

    const response = await sighInWithApple(appleRequest, requestContext);
    console.log('response', response);
    expect(response).to.not.be.null;
  });
});
