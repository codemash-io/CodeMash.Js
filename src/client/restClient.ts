import { getMethod, IReturn, JsonServiceClient } from '@servicestack/client';
import { CMConfig } from 'config';
import { ICMConfig } from 'config/config';
import { ICMDbResult } from 'types';
import { isJsonResponse } from 'utils/api';

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
type DbRequest<T> = IReturn<T> &
  Partial<DbFilter & DbUpdate & DbDocument & DbDocuments>;

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

  private transformApiResult(target: any): ICMDbResult {
    // transform given api string result to a js object.
    const { response } = target;

    if (CMConfig.getInstance().showLogs) {
      console.log(`Result for ${getMethod(target)} request: `, target.response);
    }

    return {
      response: isJsonResponse(response) ? JSON.parse(response) : response,
    };
  }

  public async dbRequest<T>(
    request: any, // FIXME: should be DbRequest<T>
    args?: any,
    method?: string,
  ): Promise<any> {
    // FIXME: should be: Promise<ICMDbResult>
    // stringify selected fields that are passed as objects.
    Object.values(StringifiedFields).forEach(key => {
      const value = request[key];
      if (value) {
        request[key] =
          typeof value !== 'string' ? JSON.stringify(value) : value;
      }
    });

    Object.values(StringifiedArrayFields).forEach(key => {
      const value = request[key];
      if (value) {
        request[key] = value.map((
          i: any, // FIXME: remove any
        ) => (typeof i !== 'string' ? JSON.stringify(i) : i));
      }
    });

    if (CMConfig.getInstance().showLogs) {
      console.log(`Outgoing ${getMethod(request)} request: `, request);
    }

    const result = await this.fetch(
      method || getMethod(request),
      (request as any) as IReturn<T>,
      args,
    );

    return this.transformApiResult(result);
  }
}
