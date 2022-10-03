import {
  AggregateResponse,
  FindOneResponse,
  FindRequest as FindRequestBase,
  FindResponse,
  FindTermsChildrenResponse,
  FindTermsResponse,
  ResponseBase,
  Schema,
} from './codemash.dtos';

export class FindResult<T> extends FindResponse {
  // @DataMember(Name="result")
  public data: T;

  public constructor(init?: Partial<FindResult<T>>) {
    super(init);
    (Object as any).assign(this, init);
  }
}

export class FindOneResult<T> extends FindOneResponse {
  // @DataMember(Name="result")
  public data: T;

  public constructor(init?: Partial<FindOneResult<T>>) {
    super(init);
    (Object as any).assign(this, init);
  }
}

export class AggregateResult<T> extends AggregateResponse {
  // @DataMember(Name="result")
  public data: T;

  public constructor(init?: Partial<AggregateResult<T>>) {
    super(init);
    (Object as any).assign(this, init);
  }
}
