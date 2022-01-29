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

  private transformApiResult(target: any): ICMDbResult {
    // transform given api string result to a js object.
    const { isSuccess, response, isError, errorStatus } = target;
    const { responseStatus, result } = response || {};

    if (CMConfig.getInstance().showLogs) {
      console.log(`Result for ${getMethod(target)} request: `, target);
    }

    // Fixes the issue when sometimes result comes with { isSuccess: false, isError: false }.
    return {
      isSuccess: isSuccess || isError === false,
      isError,
      errorStatus,
      responseStatus,
      response: isJsonResponse(result) ? JSON.parse(result) : response,
    };
  }

  public async request<T>(request: TRequest<T>): Promise<ICMDbResult> {
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

    const result = await this.api((request as any) as IReturn<T>);

    return this.transformApiResult(result);
  }
}
