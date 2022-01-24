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
  UpdateManyRequest,
  UpdateOneRequest,
} from 'types/codemash.dtos';

export async function find(request: FindRequest) {
  const client = new RestClient(CMConfig.getInstance());
  return client.dbRequest(request);
}

export async function findOne(request: FindOneRequest) {
  const client = new RestClient(CMConfig.getInstance());
  return client.dbRequest(request);
}

export async function insertOne(request: InsertOneRequest) {
  const client = new RestClient(CMConfig.getInstance());
  return client.dbRequest(request);
}

export async function insertMany(request: InsertManyRequest) {
  const client = new RestClient(CMConfig.getInstance());
  return client.dbRequest(request);
}

export async function deleteOne(request: DeleteOneRequest) {
  const client = new RestClient(CMConfig.getInstance());
  return client.dbRequest(request);
}

export async function deleteMany(request: DeleteManyRequest) {
  const client = new RestClient(CMConfig.getInstance());
  return client.dbRequest(request);
}

export async function updateOne(request: UpdateOneRequest) {
  const client = new RestClient(CMConfig.getInstance());
  return client.dbRequest(request);
}

export async function updateMany(request: UpdateManyRequest) {
  const client = new RestClient(CMConfig.getInstance());
  return client.dbRequest(request);
}

export async function replaceOne(request: ReplaceOneRequest) {
  const client = new RestClient(CMConfig.getInstance());
  return client.dbRequest(request);
}

export async function aggregate(request: AggregateRequest) {
  const client = new RestClient(CMConfig.getInstance());
  return client.dbRequest(request);
}

export async function count(request: CountRequest) {
  const client = new RestClient(CMConfig.getInstance());
  return client.dbRequest(request);
}

export async function distinct(request: DistinctRequest) {
  const client = new RestClient(CMConfig.getInstance());
  return client.dbRequest(request);
}

export async function findTerms(request: FindTermsRequest) {
  const client = new RestClient(CMConfig.getInstance());
  return client.dbRequest(request);
}

export async function findTermsChildren(request: FindTermsChildrenRequest) {
  const client = new RestClient(CMConfig.getInstance());
  return client.dbRequest(request);
}
