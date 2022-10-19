/* eslint-disable func-names */
/* eslint-disable no-extend-native */
/// <reference path="../../src/types/extensions.d.ts" />
import fs from 'fs';
import path from 'path';

import { Schema } from '../../src/types/codemash.dtos';

String.prototype.ToSchema = function (
  this: string,
  collectionName: string,
): Schema {
  const buildDir = path.resolve(__dirname, this);

  const jsonSchema = fs.readFileSync(`${buildDir}/schema.json`);
  const uiSchema = fs.readFileSync(`${buildDir}/ui.json`);

  return new Schema({
    collectionName,
    jsonSchema: JSON.parse(jsonSchema.toString()),
    uiSchema: JSON.parse(uiSchema.toString()),
  });
};
