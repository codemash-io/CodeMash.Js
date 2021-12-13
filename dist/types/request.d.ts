export interface RequestBase {
    cultureCode?: string;
    version?: string;
}
export interface ICodeMashRequestBase {
    projectId?: string;
}
export interface IResponseBase<T> {
    responseStatus: number;
    result: T;
}
