import { getMethod, IReturn, JsonServiceClient } from '@servicestack/client';
import { CMConfig } from 'config';
import { ICMConfig } from 'config/config';
import { deepParseJson } from 'deep-parse-json';

enum StringifiedFields {
  Update = 'update',
  Filter = 'filter',
  Document = 'document',
}

enum StringifiedArrayFields {
  Documents = 'documents',
}

type TFilter = {
  [StringifiedFields.Filter]: object | string;
};
type TUpdate = {
  [StringifiedFields.Update]: object | string;
};
type TDocument = {
  [StringifiedFields.Document]: object | string;
};
type TDocuments = {
  [StringifiedArrayFields.Documents]: object[] | string[];
};
type TRequest<T> = IReturn<T> &
  Partial<TFilter & TUpdate & TDocument & TDocuments>;

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

  private getRequestName(request: any) {
    return request?.getTypeName();
  }

  private transformApiResult(result: any, requestName?: string) {
    // transform given api string result to a js object.
    if (CMConfig.getInstance().showLogs) {
      console.log(
        `Result for ${getMethod(result)} ${requestName} request: `,
        deepParseJson(result),
      );
    }

    return deepParseJson(result);
  }

  public async request<T>(request: TRequest<T>) {
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
        request[key] = value.map(i =>
          typeof i !== 'string' ? JSON.stringify(i) : i,
        );
      }
    });

    if (CMConfig.getInstance().showLogs) {
      console.log(`Outgoing ${getMethod(request)} request: `, request);
    }

    const response = await this.fetch(
      getMethod(request),
      (request as any) as IReturn<T>,
    );

    return this.transformApiResult(response, this.getRequestName(request));
  }
}
