import { AggregateRequest, CountRequest, DeleteManyRequest, DeleteOneRequest, DistinctRequest, FindOneRequest, FindRequest, FindTermsChildrenRequest, FindTermsRequest, InsertManyRequest, InsertOneRequest, ReplaceOneRequest, ResponseStatus, UpdateManyRequest, UpdateOneRequest } from 'types/codemash.dtos';
interface ICMDbResult {
    response: any;
    isSuccess: boolean;
    isError: boolean;
    responseStatus?: ResponseStatus;
    errorStatus?: ResponseStatus;
}
export declare function find(request: FindRequest): Promise<ICMDbResult>;
export declare function findOne(request: FindOneRequest): Promise<ICMDbResult>;
export declare function insertOne(request: InsertOneRequest): Promise<ICMDbResult>;
export declare function insertMany(request: InsertManyRequest): Promise<ICMDbResult>;
export declare function deleteOne(request: DeleteOneRequest): Promise<ICMDbResult>;
export declare function deleteMany(request: DeleteManyRequest): Promise<ICMDbResult>;
export declare function updateOne(request: UpdateOneRequest): Promise<ICMDbResult>;
export declare function updateMany(request: UpdateManyRequest): Promise<ICMDbResult>;
export declare function replaceOne(request: ReplaceOneRequest): Promise<ICMDbResult>;
export declare function aggregate(request: AggregateRequest): Promise<ICMDbResult>;
export declare function count(request: CountRequest): Promise<ICMDbResult>;
export declare function distinct(request: DistinctRequest): Promise<ICMDbResult>;
export declare function findTerms(request: FindTermsRequest): Promise<ICMDbResult>;
export declare function findTermsChildren(request: FindTermsChildrenRequest): Promise<ICMDbResult>;
export {};
