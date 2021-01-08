import { test, expect } from 'jest';
import { db, config } from 'codemash';

test('the data is peanut butter', async () => {
  console.log("Be sure you have run 'npm link' before testing");
  console.log('Initializing codemash');
  config.init({
    secretKey: process.env.CODEMASH_SECRET_KEY,
    projectId: process.env.CODEMASH_PROJECT_ID
  }, process.env.NODE_ENV);

  const request = {};
  const response = db.find('holidays', request);
  expect(response).toBe('peanut butter');
});
