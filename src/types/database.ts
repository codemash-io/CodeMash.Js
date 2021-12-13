export interface ICodeMashDbRequestBase {
  collectionName: string;
  cluster: string;
}

export interface ICodeMashDbListRequestBase {
  pageSize?: number;
  pageNumber?: number;
  filters?: string;
  sort?: string;
  projection?: string;
}

export interface IFindRequest extends ICodeMashDbListRequestBase, ICodeMashDbRequestBase {
  includeSchema?: boolean;	// Includes schema in response
  includeUserNames?: boolean;	// Includes names of referenced users
  includeRoleNames?: boolean;	// Includes names of referenced roles
  includeCollectionNames?: boolean;	// Includes names of referenced records
  includeTermNames?: boolean;	// Includes names of referenced terms
  excludeCulture?: boolean;	// Prevent setting culture code from headers
  referencedFields: object;	// Includes data of referenced records
  addReferencesFirst: boolean;	// If true, then references are injected before your list queries are applied
}

export interface IFindResponse {
  totalCount: number;
  schema: object;
}
