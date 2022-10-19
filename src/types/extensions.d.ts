import { Schema } from './codemash.dtos';

declare global {
  export interface String {
    ToSchema(collectionName: string): Schema;
  }
}
