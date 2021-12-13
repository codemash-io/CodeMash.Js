export interface RequestBase {
  cultureCode?: string;
  version?: string;
}

export interface ICodeMashRequestBase {
  projectId?: string; // guid
}

export interface IResponseBase<T> {
  responseStatus: number; // for now
  result: T;
}