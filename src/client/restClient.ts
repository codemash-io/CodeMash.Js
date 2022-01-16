import { ApiResult, IReturn, JsonServiceClient } from '@servicestack/client';
import { ICMConfig } from 'config/config';

enum StringifiedFields {
  Update = 'update',
  Filter = 'filter',
  Document = 'document',
}

enum StringifiedArrayFields {
  Documents = 'documents',
}

type DbFilter = {
  [StringifiedFields.Filter]: object | string;
};
type DbUpdate = {
  [StringifiedFields.Update]: object | string;
};
type DbDocument = {
  [StringifiedFields.Document]: object | string;
};
type DbDocuments = {
  [StringifiedArrayFields.Documents]: object[] | string[];
};

export class RestClient extends JsonServiceClient {
  constructor(private config: ICMConfig) {
    super(config.apiUrl);
    if (this.config.isValid()) {
      this.headers.set('X-CM-Cluster', this.config.cluster);
      this.headers.set('Authorization', `Bearer ${this.config.apiKey}`);
      this.headers.set('X-CM-ProjectId', this.config.projectId);
    }
  }

  public dbRequest<TResponse>(
    request: IReturn<TResponse> &
      Partial<DbFilter & DbUpdate & DbDocument & DbDocuments>,
    args?: any,
    method?: string,
  ): Promise<ApiResult<TResponse>> {
    // stringify selected fields that are passed as objects.
    Object.keys(StringifiedArrayFields).forEach(key => {
      const value = request[key as StringifiedFields];
      if (value) {
        request[key as StringifiedFields] =
          typeof value !== 'string' ? JSON.stringify(value) : value;
      }
    });

    Object.keys(StringifiedArrayFields).forEach(key => {
      const value = request[key as StringifiedArrayFields];
      if (value) {
        request[key as StringifiedArrayFields] = value.map(i =>
          typeof i !== 'string' ? JSON.stringify(i) : i,
        );
      }
    });

    return this.api((request as any) as IReturn<TResponse>, args, method);
  }
}
