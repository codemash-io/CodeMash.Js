export const isJsonResponse = (value: any): value is string =>
  typeof value === 'string';
