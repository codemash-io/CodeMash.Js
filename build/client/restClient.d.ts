import { ApiResult, IReturn, JsonServiceClient } from '@servicestack/client';
import { ICMConfig } from 'config/config';
declare enum StringifiedFields {
    Update = "update",
    Filter = "filter",
    Document = "document"
}
declare enum StringifiedArrayFields {
    Documents = "documents"
}
declare type DbFilter = {
    [StringifiedFields.Filter]: object | string;
};
declare type DbUpdate = {
    [StringifiedFields.Update]: object | string;
};
declare type DbDocument = {
    [StringifiedFields.Document]: object | string;
};
declare type DbDocuments = {
    [StringifiedArrayFields.Documents]: object[] | string[];
};
export declare class RestClient extends JsonServiceClient {
    private config;
    constructor(config: ICMConfig);
    dbRequest<TResponse>(request: IReturn<TResponse> & Partial<DbFilter & DbUpdate & DbDocument & DbDocuments>, args?: any, method?: string): Promise<ApiResult<TResponse>>;
}
export {};
