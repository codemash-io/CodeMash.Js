import { ApiResult } from '@servicestack/client';
import { RestClient } from 'client';
import { CMConfig } from 'config';
import {
  AggregateRequest,
  CountRequest,
  DeleteManyRequest,
  DeleteOneRequest,
  DistinctRequest,
  FindOneRequest,
  FindRequest,
  FindTermsChildrenRequest,
  FindTermsRequest,
  InsertManyRequest,
  InsertOneRequest,
  ReplaceOneRequest,
  ResponseStatus,
  UpdateManyRequest,
  UpdateOneRequest,
} from 'types/codemash.dtos';

const isJsonResponse = (value: any): value is string =>
  typeof value === 'string';
interface ICMDbResult {
  response: any;
  responseStatus?: ResponseStatus;
  isSuccess: boolean;
  isError: boolean;
}

const transformApiResult = (target: ApiResult<any>): ICMDbResult => {
  // transform given api string result to a js object.
  const { isSuccess, response, isError } = target;
  const { responseStatus, result } = response || {};

  return {
    isSuccess,
    isError,
    responseStatus,
    response: isJsonResponse(result) ? JSON.parse(result) : response,
  };
};

export async function findMany(request: FindRequest) {
  const client = RestClient.Json(new CMConfig());
  const result = await client.api(request);
  return transformApiResult(result);
}

export async function findOne(request: FindOneRequest) {
  const client = RestClient.Json(new CMConfig());
  const result = await client.api(request);
  return transformApiResult(result);
}

export async function insertOne(request: InsertOneRequest) {
  const client = RestClient.Json(new CMConfig());
  const result = await client.api(request);
  return transformApiResult(result);
}

export async function insertMany(request: InsertManyRequest) {
  const client = RestClient.Json(new CMConfig());
  const result = await client.api(request);
  return transformApiResult(result);
}

export async function deleteOne(request: DeleteOneRequest) {
  const client = RestClient.Json(new CMConfig());
  const result = await client.api(request);
  return transformApiResult(result);
}

export async function deleteMany(request: DeleteManyRequest) {
  const client = RestClient.Json(new CMConfig());
  const result = await client.api(request);
  return transformApiResult(result);
}

export async function updateOne(request: UpdateOneRequest) {
  const client = RestClient.Json(new CMConfig());
  const result = await client.api(request);
  return transformApiResult(result);
}

export async function updateMany(request: UpdateManyRequest) {
  const client = RestClient.Json(new CMConfig());
  const result = await client.api(request);
  return transformApiResult(result);
}

export async function replaceOne(request: ReplaceOneRequest) {
  const client = RestClient.Json(new CMConfig());
  const result = await client.api(request);
  return transformApiResult(result);
}

export async function aggregate(request: AggregateRequest) {
  const client = RestClient.Json(new CMConfig());
  const result = await client.api(request);
  return transformApiResult(result);
}

export async function count(request: CountRequest) {
  const client = RestClient.Json(new CMConfig());
  const result = await client.api(request);
  return transformApiResult(result);
}

export async function distinct(request: DistinctRequest) {
  const client = RestClient.Json(new CMConfig());
  const result = await client.api(request);
  return transformApiResult(result);
}

export async function findTerms(request: FindTermsRequest) {
  const client = RestClient.Json(new CMConfig());
  const result = await client.api(request);
  return transformApiResult(result);
}

export async function findTermsChildren(request: FindTermsChildrenRequest) {
  const client = RestClient.Json(new CMConfig());
  const result = await client.api(request);
  return transformApiResult(result);
}
