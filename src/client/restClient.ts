import {
  ApiResult,
  getMethod,
  IReturn,
  JsonServiceClient,
} from '@servicestack/client';
import chalk from 'chalk';
import { CMConfig } from 'config';
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
      if (this.config.cluster) {
        this.headers.set('X-CM-Cluster', this.config.cluster);
      }
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
    Object.values(StringifiedFields).forEach((key) => {
      const value = request[key];
      if (value) {
        request[key] =
          typeof value !== 'string' ? JSON.stringify(value) : value;
      }
    });

    Object.values(StringifiedArrayFields).forEach((key) => {
      const value = request[key];
      if (value) {
        request[key] = value.map((i) =>
          typeof i !== 'string' ? JSON.stringify(i) : i,
        );
      }
    });

    if (CMConfig.getInstance().showLogs) {
      console.log(`Outgoing ${getMethod(request)} request: `, request);
    }

    return this.api((request as any) as IReturn<TResponse>, args, method);
  }
}
