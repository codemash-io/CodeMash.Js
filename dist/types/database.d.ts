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
    includeSchema?: boolean;
    includeUserNames?: boolean;
    includeRoleNames?: boolean;
    includeCollectionNames?: boolean;
    includeTermNames?: boolean;
    excludeCulture?: boolean;
    referencedFields: object;
    addReferencesFirst: boolean;
}
export interface IFindResponse {
    totalCount: number;
    schema: object;
}
