import { getMethod, IReturn, JsonServiceClient } from '@servicestack/client';
import { CMConfig } from 'config';
import { ICMConfig } from 'config/config';
import { deepParseJson } from 'deep-parse-json';
import { RequestContext } from 'types';
import {
  CodeMashDbListRequestBase,
  CodeMashDbRequestBase,
  CodeMashRequestBase,
  RequestBase,
  ResponseBase,
} from 'types/codemash.dtos';

enum StringifiedFields {
  Update = 'update',
  Filter = 'filter',
  Document = 'document',
}

enum StringifiedArrayFields {
  Documents = 'documents',
}

type TFilter = {
  [StringifiedFields.Filter]: object;
};
type TUpdate = {
  [StringifiedFields.Update]: object;
};
type TDocument = {
  [StringifiedFields.Document]: object;
};
type TDocuments = {
  [StringifiedArrayFields.Documents]: object[];
};
type TRequest<T> = CodeMashRequestBase &
  IReturn<T> &
  Partial<TFilter & TUpdate & TDocument & TDocuments>;

type TResponse<T> = ResponseBase<T>;

export class RestClient extends JsonServiceClient {
  constructor(private config: ICMConfig) {
    super(config.apiUri);

    if (this.config.isValid()) {
      if (this.config.cluster) {
        this.headers.set('X-CM-Cluster', this.config.cluster);
      }
      this.headers.set('Authorization', `Bearer ${this.config.apiKey}`);
      this.headers.set('X-CM-ProjectId', this.config.projectId!);
    }
  }

  public static New(
    requestContext: RequestContext | undefined = undefined,
  ): RestClient {
    const config = CMConfig.getInstance();

    if (requestContext && requestContext.apiUrl) {
      config.apiUri = requestContext.apiUrl;
    }

    if (requestContext && requestContext.projectId) {
      config.projectId = requestContext.projectId.ToString();
    }
    if (requestContext && requestContext.cluster) {
      config.cluster = requestContext.cluster;
    }
    if (requestContext && requestContext.apiKey) {
      config.apiKey = requestContext.apiKey;
    }
    return new RestClient(config);
  }

  private getRequestName(request: any) {
    return request?.getTypeName();
  }

  private transformApiResult(result: any, requestName?: string): any {
    // transform given api string result to a js object.
    if (CMConfig.getInstance().showLogs) {
      console.log(
        `Result for ${getMethod(result)} ${requestName} request: `,
        // JSON.parse(result),
        deepParseJson(result),
      );
    }

    // return JSON.parse(result);
    return deepParseJson(result);
  }

  public async CallApi<TR>(request: any | null): Promise<TR> {
    // TODO remove when API requat will have objects (JValue) instead of strings
    // stringify selected fields that are passed as objects.
    Object.values(StringifiedFields).forEach((key) => {
      const value = request[key];
      if (value) {
        request[key] = JSON.stringify(value);
      }
    });

    Object.values(StringifiedArrayFields).forEach((key) => {
      const value = request[key];
      if (value) {
        request[key] = value.map((i: any) => JSON.stringify(i));
      }
    });

    if (this.config.showLogs) {
      console.log(`Outgoing ${getMethod(request)} request: `, request);
    }

    const response = await this.fetch<TR>(
      getMethod(request),
      (request as any) as IReturn<any>,
    );

    return response;
    // return this.transformApiResult(response, this.getRequestName(request));
  }
}
