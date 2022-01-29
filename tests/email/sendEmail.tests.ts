import path from 'path';

import { expect } from 'chai';
import dotenv from 'dotenv';

import { sendEmail } from '../../src/modules/email';
import { SendEmailRequest } from '../../src/types/codemash.dtos';

describe('sendEmail', () => {
  beforeEach(() => {
    dotenv.config({
      path: path.resolve(__dirname, '../data/config/.env'),
    });
  });

  it('should return an error for invalid template id', async () => {
    const request = new SendEmailRequest({
      emails: ['no-reply@codemash.io'],
      templateId: 'invalidTemplateId',
    });
    const result = await sendEmail(request);

    expect(result.isError).to.be.true;
  });
});
