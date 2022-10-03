import { RestClient } from 'client';
import { CMConfig } from 'config';
import { AggregateResult, FindOneResult, FindResult } from 'types';
import {
  AggregateRequest,
  AggregateResponse,
  CountRequest,
  CountResponse,
  DeleteManyRequest,
  DeleteManyResponse,
  DeleteOneRequest,
  DeleteOneResponse,
  DistinctRequest,
  DistinctResponse,
  FindOneRequest,
  FindOneResponse,
  FindRequest,
  FindResponse,
  FindTermsChildrenRequest,
  FindTermsChildrenResponse,
  FindTermsRequest,
  FindTermsResponse,
  InsertManyRequest,
  InsertManyResponse,
  InsertOneRequest,
  InsertOneResponse,
  ReplaceOneRequest,
  ReplaceOneResponse,
  UpdateManyRequest,
  UpdateManyResponse,
  UpdateOneRequest,
  UpdateOneResponse,
} from 'types/codemash.dtos';

export async function find<TResponse extends object>(
  request: FindRequest,
  deserialize?: (data: string) => TResponse,
): Promise<FindResult<TResponse>> {
  const response = await RestClient.New().CallApi<FindResponse>(request);

  const data = deserialize
    ? deserialize(response.result)
    : JSON.parse(response.result);

  const result: FindResult<TResponse> = { ...response, data };
  return result;
}

export async function findOne<TResponse extends object>(
  request: FindOneRequest,
  deserialize?: (data: string) => TResponse,
): Promise<FindOneResult<TResponse>> {
  const response = await RestClient.New().CallApi<FindOneResponse>(request);

  const data = deserialize
    ? deserialize(response.result)
    : JSON.parse(response.result);

  const result: FindOneResult<TResponse> = { ...response, data };
  return result;
}

export async function insertOne(
  request: InsertOneRequest,
): Promise<InsertOneResponse> {
  const response: InsertOneResponse = await RestClient.New().CallApi<InsertOneResponse>(
    request,
  );
  return response;
}

export async function insertMany(
  request: InsertManyRequest,
): Promise<InsertManyResponse> {
  const response = await RestClient.New().CallApi<InsertManyResponse>(request);
  return response;
}

export async function deleteOne(
  request: DeleteOneRequest,
): Promise<DeleteOneResponse> {
  const response = await RestClient.New().CallApi<DeleteOneResponse>(request);
  return response;
}

export async function deleteMany(
  request: DeleteManyRequest,
): Promise<DeleteManyResponse> {
  const response = await RestClient.New().CallApi<DeleteManyResponse>(request);
  return response;
}

export async function updateOne(
  request: UpdateOneRequest,
): Promise<UpdateOneResponse> {
  const response = await RestClient.New().CallApi<UpdateOneResponse>(request);
  return response;
}

export async function updateMany(
  request: UpdateManyRequest,
): Promise<UpdateManyResponse> {
  const response = await RestClient.New().CallApi<UpdateManyResponse>(request);
  return response;
}

export async function replaceOne(
  request: ReplaceOneRequest,
): Promise<ReplaceOneResponse> {
  const response = await RestClient.New().CallApi<ReplaceOneResponse>(request);
  return response;
}

export async function aggregate<TResponse extends object>(
  request: AggregateRequest,
  deserialize?: (data: string) => TResponse,
): Promise<AggregateResult<TResponse>> {
  const response = await RestClient.New().CallApi<AggregateResponse>(request);

  const data = deserialize
    ? deserialize(response.result)
    : JSON.parse(response.result);

  const result: AggregateResult<TResponse> = { ...response, data };
  return result;
}

export async function count(request: CountRequest): Promise<CountResponse> {
  const response = await RestClient.New().CallApi<CountResponse>(request);
  return response;
}

export async function distinct(
  request: DistinctRequest,
): Promise<DistinctResponse> {
  const response = await RestClient.New().CallApi<DistinctResponse>(request);
  return response;
}

export async function findTerms(
  request: FindTermsRequest,
): Promise<FindTermsResponse> {
  const response = await RestClient.New().CallApi<FindTermsResponse>(request);
  return response;
}

export async function findTermsChildren(request: FindTermsChildrenRequest) {
  const response = await RestClient.New().CallApi<FindTermsChildrenResponse>(
    request,
  );
  return response;
}
