import { uploadFile } from 'Components/files';
import config from 'Config';

require('dotenv').config();
var FormData = require('form-data');
const fs = require('fs');

beforeEach(() => {
  config.init({
    secretKey: process.env.CODEMASH_SECRET_KEY,
    projectId: process.env.CODEMASH_PROJECT_ID
  }, process.env.NODE_ENV);
});

test('upload file as base 64', async () => {
  const txtFile = fs.readFileSync('tests/files/uploads/document.txt', { encoding: 'base64' });

  console.log(txtFile);
  const request =
  {
    collectionName: 'js_employees',
    base64: txtFile
  };

  const response = await uploadFile(request);
  console.log(response);
  expect(response).not.toBeNull();
});

test('upload file', async () => {
  const txtFile = fs.createReadStream('tests/files/uploads/document.txt');

  const request =
  {
    collectionName: 'js_employees',
    formDataTest: new FormData(),
    file: txtFile
  };

  const response = await uploadFile(request);
  console.log(response);
  expect(response).not.toBeNull();
});