/* Options:
Date: 2021-12-16 09:54:00
Version: 5.104
Tip: To override a DTO option, remove "//" prefix before updating
BaseUrl: https://api.codemash.io/

//GlobalNamespace: 
//MakePropertiesOptional: False
AddServiceStackTypes: True
AddResponseStatus: True
//AddImplicitVersion: 
AddDescriptionAsComments: True
//IncludeTypes: 
//ExcludeTypes: 
//DefaultImports: 
*/

import {Cookie} from '@servicestack/client';

export interface IReturn<T> {
	createResponse(): T;
}

export interface IReturnVoid {
	createResponse(): void;
}

export interface IHasSessionId {
	sessionId: string;
}

export interface IHasBearerToken {
	bearerToken: string;
}

export interface IPost {}

export interface IGet {}

// @DataContract(Namespace="http://codemash.io/types/")
export class RequestBase implements ICultureBasedRequest, IVersionBasedRequest {
	// @DataMember
	public cultureCode: string;

	// @DataMember
	public version: string;

	public constructor(init?: Partial<RequestBase>) {
		(Object as any).assign(this, init);
	}
}

export class CodeMashRequestBase extends RequestBase {
	/**
	 * ID of your project. Can be passed in a header as X-CM-ProjectId.
	 */
	// @DataMember
	// @ApiMember(DataType="Guid", Description="ID of your project. Can be passed in a header as X-CM-ProjectId.", Name="ProjectId", ParameterType="query")
	public projectId: string;

	public constructor(init?: Partial<CodeMashRequestBase>) {
		super(init);
		(Object as any).assign(this, init);
	}
}

export class CodeMashDbRequestBase extends CodeMashRequestBase {
	/**
	 * Collection name - unique table name without whitespaces
	 */
	// @DataMember
	// @ApiMember(DataType="string", Description="Collection name - unique table name without whitespaces", IsRequired=true, Name="CollectionName", ParameterType="path")
	public collectionName: string;

	/**
	 * API key of your cluster. Can be passed in a header as X-CM-Cluster.
	 */
	// @DataMember
	// @ApiMember(DataType="string", Description="API key of your cluster. Can be passed in a header as X-CM-Cluster.", IsRequired=true, Name="Cluster", ParameterType="query")
	public cluster: string;

	public constructor(init?: Partial<CodeMashDbRequestBase>) {
		super(init);
		(Object as any).assign(this, init);
	}
}

export interface ICultureBasedRequest {
	cultureCode: string;
}

export interface IVersionBasedRequest {
	cultureCode: string;
}

// @DataContract
export class ResponseError {
	// @DataMember(Order=1)
	public errorCode: string;

	// @DataMember(Order=2)
	public fieldName: string;

	// @DataMember(Order=3)
	public message: string;

	// @DataMember(Order=4)
	public meta: {[index: string]: string};

	public constructor(init?: Partial<ResponseError>) {
		(Object as any).assign(this, init);
	}
}

// @DataContract
export class ResponseStatus {
	// @DataMember(Order=1)
	public errorCode: string;

	// @DataMember(Order=2)
	public message: string;

	// @DataMember(Order=3)
	public stackTrace: string;

	// @DataMember(Order=4)
	public errors: ResponseError[];

	// @DataMember(Order=5)
	public meta: {[index: string]: string};

	public constructor(init?: Partial<ResponseStatus>) {
		(Object as any).assign(this, init);
	}
}

export class ResponseBase<T> {
	// @DataMember
	public responseStatus: ResponseStatus;

	// @DataMember(Name="result")
	public result: T;

	public constructor(init?: Partial<ResponseBase<T>>) {
		(Object as any).assign(this, init);
	}
}

// @DataContract
export class DeleteResult {
	// @DataMember(Name="deletedCount")
	public deletedCount: number;

	// @DataMember(Name="isAcknowledged")
	public isAcknowledged: boolean;

	public constructor(init?: Partial<DeleteResult>) {
		(Object as any).assign(this, init);
	}
}

export class ReferencingField {
	public name: string;

	public pageSize: number;

	public pageNumber: number;

	public sort: string;

	public projection: string;

	public constructor(init?: Partial<ReferencingField>) {
		(Object as any).assign(this, init);
	}
}

export class CodeMashDbListRequestBase
	extends CodeMashDbRequestBase
	implements
		IRequestWithPaging,
		IRequestWithFilter,
		IRequestWithSorting,
		IRequestWithProjection {
	/**
	 * Amount of records to return
	 */
	// @DataMember
	// @ApiMember(DataType="int", Description="Amount of records to return", Name="PageSize", ParameterType="query")
	public pageSize: number;

	/**
	 * Page of records to return
	 */
	// @DataMember
	// @ApiMember(DataType="int", Description="Page of records to return", Name="PageNumber", ParameterType="query")
	public pageNumber: number;

	/**
	 * A query that specifies which records to return
	 */
	// @DataMember
	// @ApiMember(DataType="string", Description="A query that specifies which records to return", Name="Filter", ParameterType="query")
	public filter: string;

	/**
	 * A query that specifies how to sort filtered records
	 */
	// @DataMember
	// @ApiMember(DataType="string", Description="A query that specifies how to sort filtered records", Name="Sort", ParameterType="query")
	public sort: string;

	/**
	 * A query that specifies what fields in records to return
	 */
	// @DataMember
	// @ApiMember(DataType="string", Description="A query that specifies what fields in records to return", Name="Projection", ParameterType="query")
	public projection: string;

	public constructor(init?: Partial<CodeMashDbListRequestBase>) {
		super(init);
		(Object as any).assign(this, init);
	}
}

export interface IRequestWithPaging {
	pageSize: number;
	pageNumber: number;
}

export interface IRequestWithFilter {
	filter: string;
}

export interface IRequestWithSorting {
	sort: string;
}

export interface IRequestWithProjection {
	projection: string;
}

export class Schema {
	public collectionNameAsTitle: string;

	public collectionName: string;

	public uiSchema: string;

	public jsonSchema: string;

	public translatableFields: string[];

	public databaseId: string;

	public schemaId: string;

	public constructor(init?: Partial<Schema>) {
		(Object as any).assign(this, init);
	}
}

// @DataContract
export class ReplaceOneResult {
	/**
	 * A boolean acknowledged as true if the operation ran with write concern or false if write concern was disabled
	 */
	// @DataMember(Name="isAcknowledged")
	// @ApiMember(DataType="bool", Description="A boolean acknowledged as true if the operation ran with write concern or false if write concern was disabled", Name="IsAcknowledged")
	public isAcknowledged: boolean;

	/**
	 * Checks if modifiedCount is available
	 */
	// @DataMember(Name="isModifiedCountAvailable")
	// @ApiMember(DataType="bool", Description="Checks if modifiedCount is available", Name="IsModifiedCountAvailable")
	public isModifiedCountAvailable: boolean;

	/**
	 * matchedCount containing the number of matched documents
	 */
	// @DataMember(Name="matchedCount")
	// @ApiMember(DataType="bool", Description="matchedCount containing the number of matched documents", Name="MatchedCount")
	public matchedCount: number;

	/**
	 * modifiedCount containing the number of modified documents
	 */
	// @DataMember(Name="modifiedCount")
	// @ApiMember(DataType="long", Description="modifiedCount containing the number of modified documents", Name="ModifiedCount")
	public modifiedCount: number;

	/**
	 * upsertedId containing the _id for the upserted document
	 */
	// @DataMember(Name="upsertedId")
	// @ApiMember(DataType="string", Description="upsertedId containing the _id for the upserted document", Name="UpsertedId")
	public upsertedId: string;

	public constructor(init?: Partial<ReplaceOneResult>) {
		(Object as any).assign(this, init);
	}
}

export class UpdateResult {
	public isAcknowledged: boolean;

	public matchedCount: number;

	public modifiedCount: number;

	public upsertedId: string;

	public constructor(init?: Partial<UpdateResult>) {
		(Object as any).assign(this, init);
	}
}

export class Taxonomy {
	public id: string;

	public name: string;

	public title: string;

	public description: string;

	public parentId: string;

	public dependencies: string[];

	public termsUiSchema: string;

	public termsJsonSchema: string;

	public translatableFields: string[];

	public databaseId: string;

	public taxonomyId: string;

	public constructor(init?: Partial<Taxonomy>) {
		(Object as any).assign(this, init);
	}
}

export class TermMultiParent {
	public parentId: string;

	public taxonomyId: string;

	public name: string;

	public names: {[index: string]: string};

	public constructor(init?: Partial<TermMultiParent>) {
		(Object as any).assign(this, init);
	}
}

export class Term {
	public taxonomyId: string;

	public taxonomyName: string;

	public id: string;

	public name: string;

	public description: string;

	public names: {[index: string]: string};

	public descriptions: {[index: string]: string};

	public parentId: string;

	public parentName: string;

	public parentNames: {[index: string]: string};

	public order?: number;

	public multiParents: TermMultiParent[];

	public meta: string;

	public constructor(init?: Partial<Term>) {
		(Object as any).assign(this, init);
	}
}

// @Flags()
export enum CacheControl {
	None = 0,
	Public = 1,
	Private = 2,
	MustRevalidate = 4,
	NoCache = 8,
	NoStore = 16,
	NoTransform = 32,
	ProxyRevalidate = 64,
}

export interface IContentTypeWriter {}

// @Flags()
export enum RequestAttributes {
	None = 0,
	Localhost = 1,
	LocalSubnet = 2,
	External = 4,
	Secure = 8,
	InSecure = 16,
	AnySecurityMode = 24,
	HttpHead = 32,
	HttpGet = 64,
	HttpPost = 128,
	HttpPut = 256,
	HttpDelete = 512,
	HttpPatch = 1024,
	HttpOptions = 2048,
	HttpOther = 4096,
	AnyHttpMethod = 8160,
	OneWay = 8192,
	Reply = 16384,
	AnyCallStyle = 24576,
	Soap11 = 32768,
	Soap12 = 65536,
	Xml = 131072,
	Json = 262144,
	Jsv = 524288,
	ProtoBuf = 1048576,
	Csv = 2097152,
	Html = 4194304,
	Wire = 8388608,
	MsgPack = 16777216,
	FormatOther = 33554432,
	AnyFormat = 67076096,
	Http = 67108864,
	MessageQueue = 134217728,
	Tcp = 268435456,
	Grpc = 536870912,
	EndpointOther = 1073741824,
	AnyEndpoint = 2080374784,
	InProcess = -2147483648,
	InternalNetworkAccess = -2147483645,
	AnyNetworkAccessType = -2147483641,
	Any = -1,
}

export interface IRequestPreferences {
	acceptsGzip: boolean;
	acceptsDeflate: boolean;
}

export interface IRequest {
	originalRequest: Object;
	response: IResponse;
	operationName: string;
	verb: string;
	requestAttributes: RequestAttributes;
	requestPreferences: IRequestPreferences;
	dto: Object;
	contentType: string;
	isLocal: boolean;
	userAgent: string;
	cookies: {[index: string]: Cookie};
	responseContentType: string;
	hasExplicitResponseContentType: boolean;
	items: {[index: string]: Object};
	headers: any;
	queryString: any;
	formData: any;
	useBufferedStream: boolean;
	rawUrl: string;
	absoluteUri: string;
	userHostAddress: string;
	remoteIp: string;
	authorization: string;
	isSecureConnection: boolean;
	acceptTypes: string[];
	pathInfo: string;
	originalPathInfo: string;
	contentLength: number;
	files: IHttpFile[];
	urlReferrer: string;
}

export interface IResponse {
	originalResponse: Object;
	request: IRequest;
	statusCode: number;
	statusDescription: string;
	contentType: string;
	dto: Object;
	useBufferedStream: boolean;
	isClosed: boolean;
	keepAlive: boolean;
	hasStarted: boolean;
	items: {[index: string]: Object};
}

export class File {
	public id: string;

	public description: string;

	public modifiedOn: string;

	public createdOn: string;

	public uniqueName: string;

	public enumerator: number;

	public originalName: string;

	public directory: string;

	public contentType: string;

	public size: number;

	public isPublic: boolean;

	public isParentPublic: boolean;

	public publicUrl: string;

	public constructor(init?: Partial<File>) {
		(Object as any).assign(this, init);
	}
}

export class Base64FileUpload {
	public data: string;

	public contentType: string;

	public fileName: string;

	public constructor(init?: Partial<Base64FileUpload>) {
		(Object as any).assign(this, init);
	}
}

export interface IOAuthRequest {
	mode: string;
	code: string;
	state: string;
	accessToken: string;
}

export class Policy {
	public name: string;

	public displayName: string;

	public disabled: boolean;

	public permissions: string[];

	public constructor(init?: Partial<Policy>) {
		(Object as any).assign(this, init);
	}
}

export class Role {
	public name: string;

	public displayName: string;

	public policies: Policy[];

	public constructor(init?: Partial<Role>) {
		(Object as any).assign(this, init);
	}
}

export interface IAuthTokens {
	provider: string;
	userId: string;
	accessToken: string;
	accessTokenSecret: string;
	refreshToken: string;
	refreshTokenExpiry?: string;
	requestToken: string;
	requestTokenSecret: string;
	items: {[index: string]: string};
}

export class AuthResponse {
	public userId: string;

	public userAuthId: string;

	public userName: string;

	public displayName: string;

	public firstName: string;

	public lastName: string;

	public sessionId: string;

	public referrerUrl: string;

	public bearerToken: string;

	public email: string;

	public roles: Role[];

	public permissions: string[];

	public company: string;

	public phoneNumber: string;

	public birthDate?: string;

	public birthDateRaw: string;

	public address: string;

	public address2: string;

	public city: string;

	public country: string;

	public culture: string;

	public fullName: string;

	public gender: string;

	public language: string;

	public profileUrl: string;

	public tag: number;

	public authProvider: string;

	public mailAddress: string;

	public nickname: string;

	public postalCode: string;

	public timeZone: string;

	public createdAt: string;

	public lastModified: string;

	public status: string;

	public authTokens: IAuthTokens[];

	public meta: {[index: string]: string};

	public constructor(init?: Partial<AuthResponse>) {
		(Object as any).assign(this, init);
	}
}

export class Token {
	public key: string;

	public value: string;

	public owner: string;

	public constructor(init?: Partial<Token>) {
		(Object as any).assign(this, init);
	}
}

export class Project {
	public id: string;

	public tokens: Token[];

	public languages: string[];

	public defaultLanguage: string;

	public defaultTimeZone: string;

	public name: string;

	public description: string;

	public slugifiedName: string;

	public logoUrl: string;

	public constructor(init?: Partial<Project>) {
		(Object as any).assign(this, init);
	}
}

export class PushNotificationToken {
	public provider: string;

	public token: string;

	public accountId: string;

	public constructor(init?: Partial<PushNotificationToken>) {
		(Object as any).assign(this, init);
	}
}

export class Device {
	public id: string;

	public createdOn: string;

	public token: PushNotificationToken;

	public userName: string;

	public userId: string;

	public operatingSystem: string;

	public brand: string;

	public deviceName: string;

	public timeZone: string;

	public language: string;

	public locale: string;

	public meta: {[index: string]: string};

	public totalNotifications: number;

	public deviceKey: string;

	public accountId: string;

	public constructor(init?: Partial<Device>) {
		(Object as any).assign(this, init);
	}
}

export class UserAuthProvider {
	public provider: string;

	public userId: string;

	public constructor(init?: Partial<UserAuthProvider>) {
		(Object as any).assign(this, init);
	}
}

export class User {
	public id: string;

	public createdOn: string;

	public modifiedOn: string;

	public displayName: string;

	public firstName: string;

	public lastName: string;

	public email: string;

	public userName: string;

	public roles: Role[];

	public devices: Device[];

	public rolesEditable: boolean;

	public status: string;

	public type: string;

	public meta: string;

	public language: string;

	public timeZone: string;

	public country: string;

	public countryCode: string;

	public area: string;

	public city: string;

	public address: string;

	public address2: string;

	public phone: string;

	public company: string;

	public companyCode: string;

	public postalCode: string;

	public gender: string;

	public birthDate: string;

	public zone: string;

	public authProviders: UserAuthProvider[];

	public hasCredentials: boolean;

	public subscribedToNews: boolean;

	public unsubscribedNewsTags: string[];

	public unreadNotifications?: number;

	public constructor(init?: Partial<User>) {
		(Object as any).assign(this, init);
	}
}

export class CodeMashListRequestBase
	extends CodeMashRequestBase
	implements IRequestWithPaging, IRequestWithFilter, IRequestWithSorting {
	/**
	 * Amount of records to return
	 */
	// @DataMember
	// @ApiMember(DataType="int", Description="Amount of records to return", Name="PageSize", ParameterType="form")
	public pageSize: number;

	/**
	 * Page of records to return
	 */
	// @DataMember
	// @ApiMember(DataType="int", Description="Page of records to return", Name="PageNumber", ParameterType="form")
	public pageNumber: number;

	/**
	 * A query that specifies which records to return
	 */
	// @DataMember
	// @ApiMember(DataType="string", Description="A query that specifies which records to return", Name="Filter", ParameterType="body")
	public filter: string;

	/**
	 * A query that specifies how to sort filtered records
	 */
	// @DataMember
	// @ApiMember(DataType="string", Description="A query that specifies how to sort filtered records", Name="Sort", ParameterType="body")
	public sort: string;

	/**
	 * A query that specifies what fields in records to return
	 */
	// @DataMember
	// @ApiMember(DataType="string", Description="A query that specifies what fields in records to return", Name="Projection", ParameterType="body")
	public projection: string;

	public constructor(init?: Partial<CodeMashListRequestBase>) {
		super(init);
		(Object as any).assign(this, init);
	}
}

export class UserPolicyUpdateInput {
	public policy: string;

	public permissions: string[];

	public constructor(init?: Partial<UserPolicyUpdateInput>) {
		(Object as any).assign(this, init);
	}
}

export class UserRoleUpdateInput {
	public role: string;

	public policies: UserPolicyUpdateInput[];

	public constructor(init?: Partial<UserRoleUpdateInput>) {
		(Object as any).assign(this, init);
	}
}

export class PushNotification {
	public id: string;

	public receivedOn: string;

	public status: string;

	public title: string;

	public body: string;

	public data: string;

	public subtitle: string;

	public meta: {[index: string]: string};

	public isRead: boolean;

	public userId: string;

	public deviceId: string;

	public senderId: string;

	public constructor(init?: Partial<PushNotification>) {
		(Object as any).assign(this, init);
	}
}

export class FileDetails {
	public id: string;

	public directory: string;

	public originalFileName: string;

	public fileName: string;

	public filePath: string;

	public contentType: string;

	public contentLength: number;

	public constructor(init?: Partial<FileDetails>) {
		(Object as any).assign(this, init);
	}
}

export class PushNotificationTemplateButtons {
	public id: string;

	public text: string;

	public icon: string;

	public constructor(init?: Partial<PushNotificationTemplateButtons>) {
		(Object as any).assign(this, init);
	}
}

export class AndroidBackgroundLayout {
	public image: string;

	public headingColor: string;

	public contentColor: string;

	public constructor(init?: Partial<AndroidBackgroundLayout>) {
		(Object as any).assign(this, init);
	}
}

export class PushNotificationTemplate {
	public id: string;

	public templateName: string;

	public accountId: string;

	public accountName: string;

	public title: string;

	public body: string;

	public code: string;

	public priority: string;

	public data: string;

	public ttl?: number;

	public url: string;

	public collapseId: string;

	public image: FileDetails;

	public fileAccountId?: string;

	public meta: {[index: string]: string};

	public buttons: PushNotificationTemplateButtons[];

	public subtitle: string;

	public iosBadge?: number;

	public iosCategory: string;

	public iosContentAvailable: boolean;

	public iosSound: string;

	public iosAppBundleId: string;

	public iosGroupId: string;

	public iosPushType: string;

	public iosLaunchImage: string;

	public iosAnalyticsLabel: string;

	public androidGroup: string;

	public androidGroupMessage: string;

	public restrictedPackageName: string;

	public androidChannelId: string;

	public androidSound: string;

	public androidVisibility: string;

	public androidDefaultVibration: boolean;

	public androidVibrateTimings: string;

	public androidDefaultLight: boolean;

	public androidAccentColor: string;

	public androidLedColor: string;

	public androidLightOnDuration: string;

	public androidLightOffDuration: string;

	public androidSticky: boolean;

	public androidSmallIcon: string;

	public androidLargeIcon: string;

	public androidBackground: AndroidBackgroundLayout;

	public androidAnalyticsLabel: string;

	public constructor(init?: Partial<PushNotificationTemplate>) {
		(Object as any).assign(this, init);
	}
}

export class Subscription {
	public id: string;

	public createdOn: string;

	public currentPeriodStart: string;

	public currentPeriodEnd: string;

	public canceledAt: string;

	public cancelAtPeriodEnd: boolean;

	public trialStart: string;

	public trialEnd: string;

	public status: string;

	public planId: string;

	public appliedCoupon: string;

	public paymentMethodId: string;

	public customerId: string;

	public constructor(init?: Partial<Subscription>) {
		(Object as any).assign(this, init);
	}
}

export class PaymentMethod {
	public id: string;

	public createdOn: string;

	public type: string;

	public data: string;

	public email: string;

	public name: string;

	public phone: string;

	public countryCode: string;

	public area: string;

	public city: string;

	public address: string;

	public address2: string;

	public postalCode: string;

	public meta: {[index: string]: string};

	public constructor(init?: Partial<PaymentMethod>) {
		(Object as any).assign(this, init);
	}
}

export class Customer {
	public id: string;

	public createdOn: string;

	public provider: string;

	public providerId: string;

	public phone: string;

	public name: string;

	public description: string;

	public email: string;

	public city: string;

	public countryCode: string;

	public address: string;

	public address2: string;

	public postalCode: string;

	public area: string;

	public userId: string;

	public userName: string;

	public projectId: string;

	public paymentAccountId: string;

	public paymentMethods: PaymentMethod[];

	public subscriptions: Subscription[];

	public meta: {[index: string]: string};

	public constructor(init?: Partial<Customer>) {
		(Object as any).assign(this, init);
	}
}

export class PaymentDiscountBoundary {
	public boundary: number;

	public amount: number;

	public type: string;

	public constructor(init?: Partial<PaymentDiscountBoundary>) {
		(Object as any).assign(this, init);
	}
}

export class Discount {
	public id: string;

	public createdOn: string;

	public modifiedOn: string;

	public type: string;

	public code: string;

	public displayName: string;

	public validFrom: string;

	public validUntil: string;

	public schemaId: string;

	public cluster: string;

	public restrictionType: string;

	public amount?: number;

	public boundaries: PaymentDiscountBoundary[];

	public targetType: string;

	public records: string[];

	public categoryField: string;

	public categoryValues: string[];

	public paymentAccounts: string[];

	public users: string[];

	public emails: string[];

	public userCanRedeem?: number;

	public totalCanRedeem?: number;

	public enabled: boolean;

	public combineDiscounts: boolean;

	public constructor(init?: Partial<Discount>) {
		(Object as any).assign(this, init);
	}
}

export class OrderLineInput {
	public collectionName: string;

	public recordId: string;

	public quantity: number;

	public variation: string;

	public constructor(init?: Partial<OrderLineInput>) {
		(Object as any).assign(this, init);
	}
}

export class DiscountIndividualLine {
	public recordId: string;

	public variation: string;

	public discount: number;

	public constructor(init?: Partial<DiscountIndividualLine>) {
		(Object as any).assign(this, init);
	}
}

export class DiscountLine {
	public recordId: string;

	public variation: string;

	public constructor(init?: Partial<DiscountLine>) {
		(Object as any).assign(this, init);
	}
}

export class DiscountCategory {
	public category: string;

	public lines: DiscountLine[];

	public discount: number;

	public constructor(init?: Partial<DiscountCategory>) {
		(Object as any).assign(this, init);
	}
}

export class DiscountAll {
	public lines: DiscountLine[];

	public discount: number;

	public constructor(init?: Partial<DiscountAll>) {
		(Object as any).assign(this, init);
	}
}

export class ApplicableDiscount {
	public id: string;

	public code: string;

	public createdOn: string;

	public validFrom: string;

	public validUntil: string;

	public type: string;

	public targetType: string;

	public displayName: string;

	public description: string;

	public collectionName: string;

	public cluster: string;

	public individualDiscounts: DiscountIndividualLine[];

	public categoryDiscounts: DiscountCategory[];

	public allDiscount: DiscountAll;

	public constructor(init?: Partial<ApplicableDiscount>) {
		(Object as any).assign(this, init);
	}
}

export class PaymentMethodSetup {
	public setupId: string;

	public setupClientSecret: string;

	public status: string;

	public constructor(init?: Partial<PaymentMethodSetup>) {
		(Object as any).assign(this, init);
	}
}

export class OrderCustomerInput {
	public email: string;

	public firstName: string;

	public lastName: string;

	public phone: string;

	public company: string;

	public address: string;

	public address2: string;

	public country: string;

	public countryCode: string;

	public area: string;

	public city: string;

	public postalCode: string;

	public language: string;

	public constructor(init?: Partial<OrderCustomerInput>) {
		(Object as any).assign(this, init);
	}
}

export class OrderCustomer {
	public email: string;

	public firstName: string;

	public lastName: string;

	public phone: string;

	public company: string;

	public address: string;

	public address2: string;

	public country: string;

	public countryCode: string;

	public area: string;

	public city: string;

	public postalCode: string;

	public constructor(init?: Partial<OrderCustomer>) {
		(Object as any).assign(this, init);
	}
}

export class OrderLine {
	public schemaId: string;

	public collectionName: string;

	public recordId: string;

	public priceFields: string[];

	public variation: string;

	public recordData: string;

	public price: number;

	public quantity: number;

	public constructor(init?: Partial<OrderLine>) {
		(Object as any).assign(this, init);
	}
}

export class OrderFile {
	public category: string;

	public id: string;

	public directory: string;

	public originalFileName: string;

	public fileName: string;

	public contentType: string;

	public contentLength: number;

	public constructor(init?: Partial<OrderFile>) {
		(Object as any).assign(this, init);
	}
}

export class OrderTransaction {
	public id: string;

	public createdOn: string;

	public payUntil: string;

	public paidOn: string;

	public callbackOn: string;

	public provider: string;

	public eventStatus: string;

	public eventUniqueId: string;

	public type: string;

	public data: string;

	public payerIpCountry: string;

	public payerCountry: string;

	public payerEmail: string;

	public paymentType: string;

	public eventAccount: string;

	public payText: string;

	public eventCurrency: string;

	public eventAmount: number;

	public constructor(init?: Partial<OrderTransaction>) {
		(Object as any).assign(this, init);
	}
}

export class OrderDiscount {
	public id: string;

	public code: string;

	public type: string;

	public targetType: string;

	public displayName: string;

	public description: string;

	public individualDiscounts: DiscountIndividualLine[];

	public categoryDiscounts: DiscountCategory[];

	public allDiscount: DiscountAll;

	public constructor(init?: Partial<OrderDiscount>) {
		(Object as any).assign(this, init);
	}
}

export class Order {
	public id: string;

	public createdOn: string;

	public modifiedOn: string;

	public paidOn: string;

	public number: number;

	public numberPrefix: string;

	public paymentStatus: string;

	public paymentProvider: string;

	public currency: string;

	public asGuest: boolean;

	public isTest: boolean;

	public customer: OrderCustomer;

	public cluster: string;

	public lines: OrderLine[];

	public files: OrderFile[];

	public transactions: OrderTransaction[];

	public discounts: OrderDiscount[];

	public userId: string;

	public paymentAccountId: string;

	public total: number;

	public meta: {[index: string]: string};

	public constructor(init?: Partial<Order>) {
		(Object as any).assign(this, init);
	}
}

export class StripePaymentIntent {
	public paymentId: string;

	public paymentClientSecret: string;

	public status: string;

	public amount: number;

	public transactionId: string;

	public constructor(init?: Partial<StripePaymentIntent>) {
		(Object as any).assign(this, init);
	}
}

// @DataContract
export class UserApiKey {
	// @DataMember(Order=1)
	public key: string;

	// @DataMember(Order=2)
	public keyType: string;

	// @DataMember(Order=3)
	public expiryDate?: string;

	// @DataMember(Order=4)
	public meta: {[index: string]: string};

	public constructor(init?: Partial<UserApiKey>) {
		(Object as any).assign(this, init);
	}
}

export interface IHttpFile {
	name: string;
	fileName: string;
	contentLength: number;
	contentType: string;
}

export class AggregateResponse extends ResponseBase<string> {
	public responseStatus: ResponseStatus;

	public constructor(init?: Partial<AggregateResponse>) {
		super(init);
		(Object as any).assign(this, init);
	}
}

export class CountResponse extends ResponseBase<number> {
	public responseStatus: ResponseStatus;

	public constructor(init?: Partial<CountResponse>) {
		super(init);
		(Object as any).assign(this, init);
	}
}

export class DeleteManyResponse extends ResponseBase<DeleteResult> {
	public responseStatus: ResponseStatus;

	public constructor(init?: Partial<DeleteManyResponse>) {
		super(init);
		(Object as any).assign(this, init);
	}
}

export class DeleteOneResponse extends ResponseBase<DeleteResult> {
	public responseStatus: ResponseStatus;

	public constructor(init?: Partial<DeleteOneResponse>) {
		super(init);
		(Object as any).assign(this, init);
	}
}

export class DistinctResponse extends Array<ResponseBase<Object>> {
	public responseStatus: ResponseStatus;

	public constructor(init?: Partial<DistinctResponse>) {
		super();
		(Object as any).assign(this, init);
	}
}

export class FindResponse extends ResponseBase<string> {
	public totalCount: number;

	public schema: Schema;

	public responseStatus: ResponseStatus;

	public constructor(init?: Partial<FindResponse>) {
		super(init);
		(Object as any).assign(this, init);
	}
}

export class FindOneResponse extends ResponseBase<string> {
	public schema: Schema;

	public responseStatus: ResponseStatus;

	public constructor(init?: Partial<FindOneResponse>) {
		super(init);
		(Object as any).assign(this, init);
	}
}

export class InsertManyResponse extends Array<ResponseBase<string>> {
	public responseStatus: ResponseStatus;

	public constructor(init?: Partial<InsertManyResponse>) {
		super();
		(Object as any).assign(this, init);
	}
}

// @DataContract
export class InsertOneResponse extends ResponseBase<string> {
	public responseStatus: ResponseStatus;

	public constructor(init?: Partial<InsertOneResponse>) {
		super(init);
		(Object as any).assign(this, init);
	}
}

export class ReplaceOneResponse extends ResponseBase<ReplaceOneResult> {
	public responseStatus: ResponseStatus;

	public constructor(init?: Partial<ReplaceOneResponse>) {
		super(init);
		(Object as any).assign(this, init);
	}
}

export class UpdateManyResponse extends ResponseBase<UpdateResult> {
	public responseStatus: ResponseStatus;

	public constructor(init?: Partial<UpdateManyResponse>) {
		super(init);
		(Object as any).assign(this, init);
	}
}

export class UpdateOneResponse extends ResponseBase<UpdateResult> {
	public responseStatus: ResponseStatus;

	public constructor(init?: Partial<UpdateOneResponse>) {
		super(init);
		(Object as any).assign(this, init);
	}
}

export class FindTermsResponse extends Array<ResponseBase<Term>> {
	public totalCount: number;

	public taxonomy: Taxonomy;

	public responseStatus: ResponseStatus;

	public constructor(init?: Partial<FindTermsResponse>) {
		super();
		(Object as any).assign(this, init);
	}
}

export class FindTermsChildrenResponse extends Array<ResponseBase<Term>> {
	public totalCount: number;

	public responseStatus: ResponseStatus;

	public constructor(init?: Partial<FindTermsChildrenResponse>) {
		super();
		(Object as any).assign(this, init);
	}
}

export class HttpResult {
	public responseText: string;

	public fileInfo: any;

	public contentType: string;

	public headers: {[index: string]: string};

	public cookies: Cookie[];

	public eTag: string;

	public age?: string;

	public maxAge?: string;

	public expires?: string;

	public lastModified?: string;

	public cacheControl: CacheControl;

	public resultScope: any;

	public allowsPartialResponse: boolean;

	public options: {[index: string]: string};

	public status: number;

	public statusCode: any;

	public statusDescription: string;

	public response: Object;

	public responseFilter: IContentTypeWriter;

	public requestContext: IRequest;

	public view: string;

	public template: string;

	public paddingLength: number;

	public isPartialRequest: boolean;

	public responseStatus: ResponseStatus;

	public constructor(init?: Partial<HttpResult>) {
		(Object as any).assign(this, init);
	}
}

export class GetFileResponse extends ResponseBase<string> {
	public fileName: string;

	public isImage: boolean;

	public file: File;

	public responseStatus: ResponseStatus;

	public constructor(init?: Partial<GetFileResponse>) {
		super(init);
		(Object as any).assign(this, init);
	}
}

export class UploadFileResponse extends ResponseBase<File> {
	public key: string;

	public name: string;

	public uploadDate: number;

	public responseStatus: ResponseStatus;

	public constructor(init?: Partial<UploadFileResponse>) {
		super(init);
		(Object as any).assign(this, init);
	}
}

export class UploadOrderFileResponse extends ResponseBase<File> {
	public key: string;

	public responseStatus: ResponseStatus;

	public constructor(init?: Partial<UploadOrderFileResponse>) {
		super(init);
		(Object as any).assign(this, init);
	}
}

export class UploadRecordFileResponse extends ResponseBase<File> {
	public key: string;

	public responseStatus: ResponseStatus;

	public constructor(init?: Partial<UploadRecordFileResponse>) {
		super(init);
		(Object as any).assign(this, init);
	}
}

export class UploadUserFileResponse extends ResponseBase<File> {
	public key: string;

	public responseStatus: ResponseStatus;

	public constructor(init?: Partial<UploadUserFileResponse>) {
		super(init);
		(Object as any).assign(this, init);
	}
}

export class CreateLogResponse extends ResponseBase<string> {
	public responseStatus: ResponseStatus;

	public constructor(init?: Partial<CreateLogResponse>) {
		super(init);
		(Object as any).assign(this, init);
	}
}

export class AuthCheckResponse extends ResponseBase<AuthResponse> {
	public responseStatus: ResponseStatus;

	public constructor(init?: Partial<AuthCheckResponse>) {
		super(init);
		(Object as any).assign(this, init);
	}
}

export class ValidateUserDeactivationTokenResponse extends ResponseBase<boolean> {
	public project: Project;

	public hasCredentials: boolean;

	public responseStatus: ResponseStatus;

	public constructor(init?: Partial<ValidateUserDeactivationTokenResponse>) {
		super(init);
		(Object as any).assign(this, init);
	}
}

export class GetProfileResponse extends ResponseBase<User> {
	public responseStatus: ResponseStatus;

	public constructor(init?: Partial<GetProfileResponse>) {
		super(init);
		(Object as any).assign(this, init);
	}
}

export class GetUserResponse extends ResponseBase<User> {
	public responseStatus: ResponseStatus;

	public constructor(init?: Partial<GetUserResponse>) {
		super(init);
		(Object as any).assign(this, init);
	}
}

export class GetUsersResponse extends Array<ResponseBase<User>> {
	public totalCount: number;

	public responseStatus: ResponseStatus;

	public constructor(init?: Partial<GetUsersResponse>) {
		super();
		(Object as any).assign(this, init);
	}
}

export class RegisterGuestUserResponse extends ResponseBase<User> {
	public bearerToken: string;

	public responseStatus: ResponseStatus;

	public constructor(init?: Partial<RegisterGuestUserResponse>) {
		super(init);
		(Object as any).assign(this, init);
	}
}

export class ValidatePasswordTokenResponse extends ResponseBase<boolean> {
	public project: Project;

	public responseStatus: ResponseStatus;

	public constructor(init?: Partial<ValidatePasswordTokenResponse>) {
		super(init);
		(Object as any).assign(this, init);
	}
}

export class CreatePasswordResetResponse extends ResponseBase<boolean> {
	public responseStatus: ResponseStatus;

	public constructor(init?: Partial<CreatePasswordResetResponse>) {
		super(init);
		(Object as any).assign(this, init);
	}
}

export class ValidateInvitationTokenResponse extends ResponseBase<boolean> {
	public project: Project;

	public userId: string;

	public responseStatus: ResponseStatus;

	public constructor(init?: Partial<ValidateInvitationTokenResponse>) {
		super(init);
		(Object as any).assign(this, init);
	}
}

export class DeleteEmailResponse extends ResponseBase<boolean> {
	public responseStatus: ResponseStatus;

	public constructor(init?: Partial<DeleteEmailResponse>) {
		super(init);
		(Object as any).assign(this, init);
	}
}

export class CreateDeviceResponse extends ResponseBase<Device> {
	public responseStatus: ResponseStatus;

	public constructor(init?: Partial<CreateDeviceResponse>) {
		super(init);
		(Object as any).assign(this, init);
	}
}

export class GetDeviceResponse extends ResponseBase<Device> {
	public responseStatus: ResponseStatus;

	public constructor(init?: Partial<GetDeviceResponse>) {
		super(init);
		(Object as any).assign(this, init);
	}
}

export class GetDevicesResponse extends Array<ResponseBase<Device>> {
	public totalCount: number;

	public responseStatus: ResponseStatus;

	public constructor(init?: Partial<GetDevicesResponse>) {
		super();
		(Object as any).assign(this, init);
	}
}

export class DeleteDeviceTokenResponse extends ResponseBase<boolean> {
	public responseStatus: ResponseStatus;

	public constructor(init?: Partial<DeleteDeviceTokenResponse>) {
		super(init);
		(Object as any).assign(this, init);
	}
}

export class RegisterDeviceTokenResponse extends ResponseBase<Device> {
	public responseStatus: ResponseStatus;

	public constructor(init?: Partial<RegisterDeviceTokenResponse>) {
		super(init);
		(Object as any).assign(this, init);
	}
}

export class RegisterDeviceExpoTokenResponse extends ResponseBase<string> {
	public responseStatus: ResponseStatus;

	public constructor(init?: Partial<RegisterDeviceExpoTokenResponse>) {
		super(init);
		(Object as any).assign(this, init);
	}
}

export class UpdateDeviceUserResponse extends ResponseBase<boolean> {
	public responseStatus: ResponseStatus;

	public constructor(init?: Partial<UpdateDeviceUserResponse>) {
		super(init);
		(Object as any).assign(this, init);
	}
}

export class UpdateDeviceMetaResponse extends ResponseBase<boolean> {
	public responseStatus: ResponseStatus;

	public constructor(init?: Partial<UpdateDeviceMetaResponse>) {
		super(init);
		(Object as any).assign(this, init);
	}
}

export class DeleteDeviceMetaResponse extends ResponseBase<boolean> {
	public responseStatus: ResponseStatus;

	public constructor(init?: Partial<DeleteDeviceMetaResponse>) {
		super(init);
		(Object as any).assign(this, init);
	}
}

export class UpdateDeviceTimeZoneResponse extends ResponseBase<boolean> {
	public responseStatus: ResponseStatus;

	public constructor(init?: Partial<UpdateDeviceTimeZoneResponse>) {
		super(init);
		(Object as any).assign(this, init);
	}
}

export class DeleteNotificationResponse extends ResponseBase<boolean> {
	public responseStatus: ResponseStatus;

	public constructor(init?: Partial<DeleteNotificationResponse>) {
		super(init);
		(Object as any).assign(this, init);
	}
}

export class GetNotificationResponse extends ResponseBase<PushNotification> {
	public responseStatus: ResponseStatus;

	public constructor(init?: Partial<GetNotificationResponse>) {
		super(init);
		(Object as any).assign(this, init);
	}
}

export class GetNotificationsResponse extends Array<
	ResponseBase<PushNotification>
> {
	public totalCount: number;

	public responseStatus: ResponseStatus;

	public constructor(init?: Partial<GetNotificationsResponse>) {
		super();
		(Object as any).assign(this, init);
	}
}

export class MarkNotificationAsReadResponse extends ResponseBase<boolean> {
	public responseStatus: ResponseStatus;

	public constructor(init?: Partial<MarkNotificationAsReadResponse>) {
		super(init);
		(Object as any).assign(this, init);
	}
}

export class SendPushNotificationResponse extends ResponseBase<boolean> {
	public responseStatus: ResponseStatus;

	public constructor(init?: Partial<SendPushNotificationResponse>) {
		super(init);
		(Object as any).assign(this, init);
	}
}

export class GetNotificationTemplateResponse extends ResponseBase<PushNotificationTemplate> {
	public responseStatus: ResponseStatus;

	public constructor(init?: Partial<GetNotificationTemplateResponse>) {
		super(init);
		(Object as any).assign(this, init);
	}
}

export class GetNotificationTemplatesResponse extends Array<
	ResponseBase<PushNotificationTemplate>
> {
	public responseStatus: ResponseStatus;

	public constructor(init?: Partial<GetNotificationTemplatesResponse>) {
		super();
		(Object as any).assign(this, init);
	}
}

export class VerifyAppleAppStoreSubscriptionResponse extends Array<
	ResponseBase<Subscription>
> {
	public responseStatus: ResponseStatus;

	public constructor(init?: Partial<VerifyAppleAppStoreSubscriptionResponse>) {
		super();
		(Object as any).assign(this, init);
	}
}

export class CreateCustomerResponse extends ResponseBase<Customer> {
	public responseStatus: ResponseStatus;

	public constructor(init?: Partial<CreateCustomerResponse>) {
		super(init);
		(Object as any).assign(this, init);
	}
}

export class GetCustomerResponse extends ResponseBase<Customer> {
	public responseStatus: ResponseStatus;

	public constructor(init?: Partial<GetCustomerResponse>) {
		super(init);
		(Object as any).assign(this, init);
	}
}

export class GetCustomersResponse extends Array<ResponseBase<Customer>> {
	public totalCount: number;

	public responseStatus: ResponseStatus;

	public constructor(init?: Partial<GetCustomersResponse>) {
		super();
		(Object as any).assign(this, init);
	}
}

export class CreateDiscountResponse extends ResponseBase<Discount> {
	public responseStatus: ResponseStatus;

	public constructor(init?: Partial<CreateDiscountResponse>) {
		super(init);
		(Object as any).assign(this, init);
	}
}

export class GetApplicableCouponsResponse extends Array<
	ResponseBase<ApplicableDiscount>
> {
	public responseStatus: ResponseStatus;

	public constructor(init?: Partial<GetApplicableCouponsResponse>) {
		super();
		(Object as any).assign(this, init);
	}
}

export class GetApplicableDiscountsResponse extends Array<
	ResponseBase<ApplicableDiscount>
> {
	public responseStatus: ResponseStatus;

	public constructor(init?: Partial<GetApplicableDiscountsResponse>) {
		super();
		(Object as any).assign(this, init);
	}
}

export class VerifyGooglePlayStoreSubscriptionResponse extends Array<
	ResponseBase<Subscription>
> {
	public responseStatus: ResponseStatus;

	public constructor(
		init?: Partial<VerifyGooglePlayStoreSubscriptionResponse>
	) {
		super();
		(Object as any).assign(this, init);
	}
}

export class AttachPaymentMethodResponse extends ResponseBase<PaymentMethod> {
	public responseStatus: ResponseStatus;

	public constructor(init?: Partial<AttachPaymentMethodResponse>) {
		super(init);
		(Object as any).assign(this, init);
	}
}

export class GetPaymentMethodSetupResponse extends ResponseBase<PaymentMethodSetup> {
	public responseStatus: ResponseStatus;

	public constructor(init?: Partial<GetPaymentMethodSetupResponse>) {
		super(init);
		(Object as any).assign(this, init);
	}
}

export class CreateOrderResponse extends ResponseBase<Order> {
	public responseStatus: ResponseStatus;

	public constructor(init?: Partial<CreateOrderResponse>) {
		super(init);
		(Object as any).assign(this, init);
	}
}

export class GetOrderResponse extends ResponseBase<Order> {
	public responseStatus: ResponseStatus;

	public constructor(init?: Partial<GetOrderResponse>) {
		super(init);
		(Object as any).assign(this, init);
	}
}

export class GetOrdersResponse extends Array<ResponseBase<Order>> {
	public totalCount: number;

	public responseStatus: ResponseStatus;

	public constructor(init?: Partial<GetOrdersResponse>) {
		super();
		(Object as any).assign(this, init);
	}
}

export class CreatePayseraTransactionResponse extends ResponseBase<string> {
	public responseStatus: ResponseStatus;

	public constructor(init?: Partial<CreatePayseraTransactionResponse>) {
		super(init);
		(Object as any).assign(this, init);
	}
}

export class CheckStripePaymentStatusResponse extends ResponseBase<string> {
	public responseStatus: ResponseStatus;

	public constructor(init?: Partial<CheckStripePaymentStatusResponse>) {
		super(init);
		(Object as any).assign(this, init);
	}
}

export class CreateStripeTransactionResponse extends ResponseBase<StripePaymentIntent> {
	public responseStatus: ResponseStatus;

	public constructor(init?: Partial<CreateStripeTransactionResponse>) {
		super(init);
		(Object as any).assign(this, init);
	}
}

export class CancelSubscriptionResponse extends ResponseBase<Subscription> {
	public responseStatus: ResponseStatus;

	public constructor(init?: Partial<CancelSubscriptionResponse>) {
		super(init);
		(Object as any).assign(this, init);
	}
}

export class ChangeSubscriptionResponse extends ResponseBase<Subscription> {
	public responseStatus: ResponseStatus;

	public constructor(init?: Partial<ChangeSubscriptionResponse>) {
		super(init);
		(Object as any).assign(this, init);
	}
}

export class CreateSubscriptionResponse extends ResponseBase<Subscription> {
	public responseStatus: ResponseStatus;

	public constructor(init?: Partial<CreateSubscriptionResponse>) {
		super(init);
		(Object as any).assign(this, init);
	}
}

export class GetProjectResponse extends ResponseBase<Project> {
	public responseStatus: ResponseStatus;

	public constructor(init?: Partial<GetProjectResponse>) {
		super(init);
		(Object as any).assign(this, init);
	}
}

export class ExecuteFunctionResponse extends ResponseBase<string> {
	public responseStatus: ResponseStatus;

	public constructor(init?: Partial<ExecuteFunctionResponse>) {
		super(init);
		(Object as any).assign(this, init);
	}
}

// @DataContract
export class AuthenticateResponse implements IHasSessionId, IHasBearerToken {
	// @DataMember(Order=1)
	public userId: string;

	// @DataMember(Order=2)
	public sessionId: string;

	// @DataMember(Order=3)
	public userName: string;

	// @DataMember(Order=4)
	public displayName: string;

	// @DataMember(Order=5)
	public referrerUrl: string;

	// @DataMember(Order=6)
	public bearerToken: string;

	// @DataMember(Order=7)
	public refreshToken: string;

	// @DataMember(Order=8)
	public profileUrl: string;

	// @DataMember(Order=9)
	public roles: string[];

	// @DataMember(Order=10)
	public permissions: string[];

	// @DataMember(Order=11)
	public responseStatus: ResponseStatus;

	// @DataMember(Order=12)
	public meta: {[index: string]: string};

	public constructor(init?: Partial<AuthenticateResponse>) {
		(Object as any).assign(this, init);
	}
}

// @DataContract
export class GetApiKeysResponse {
	// @DataMember(Order=1)
	public results: UserApiKey[];

	// @DataMember(Order=2)
	public meta: {[index: string]: string};

	// @DataMember(Order=3)
	public responseStatus: ResponseStatus;

	public constructor(init?: Partial<GetApiKeysResponse>) {
		(Object as any).assign(this, init);
	}
}

// @DataContract
export class RegenerateApiKeysResponse {
	// @DataMember(Order=1)
	public results: UserApiKey[];

	// @DataMember(Order=2)
	public meta: {[index: string]: string};

	// @DataMember(Order=3)
	public responseStatus: ResponseStatus;

	public constructor(init?: Partial<RegenerateApiKeysResponse>) {
		(Object as any).assign(this, init);
	}
}

/**
 * Database services
 */
// @Route("/db/{CollectionName}/aggregate/{id}", "GET POST")
// @Route("/{version}/db/{CollectionName}/aggregate/{id}", "GET POST")
// @Api(Description="Database services")
// @DataContract
export class AggregateRequest
	extends CodeMashDbRequestBase
	implements IReturn<AggregateResponse> {
	/**
	 * ID of an aggregate. Required of Pipeline is empty.
	 */
	// @DataMember
	// @ApiMember(DataType="Guid", Description="ID of an aggregate. Required of Pipeline is empty.", Name="Id", ParameterType="path")
	public id: string;

	/**
	 * Tokens that should be injected into aggregation document
	 */
	// @DataMember
	// @ApiMember(DataType="json", Description="Tokens that should be injected into aggregation document", Name="Tokens", ParameterType="query")
	public tokens: {[index: string]: string};

	public constructor(init?: Partial<AggregateRequest>) {
		super(init);
		(Object as any).assign(this, init);
	}

	public createResponse() {
		return new AggregateResponse();
	}

	public getTypeName() {
		return 'AggregateRequest';
	}
}

/**
 * Database services
 */
// @Route("/db/{CollectionName}/count", "GET POST")
// @Route("/{version}/db/{CollectionName}/count", "GET POST")
// @Api(Description="Database services")
// @DataContract
export class CountRequest
	extends CodeMashDbRequestBase
	implements IReturn<CountResponse> {
	/**
	 * A query that specifies which records to count
	 */
	// @DataMember
	// @ApiMember(DataType="string", Description="A query that specifies which records to count", Name="Filter", ParameterType="query")
	public filter: string;

	/**
	 * The maximum number of records to count
	 */
	// @DataMember
	// @ApiMember(DataType="int", Description="The maximum number of records to count", Name="Limit", ParameterType="query")
	public limit?: number;

	/**
	 * The number of records to skip before counting
	 */
	// @DataMember
	// @ApiMember(DataType="int", Description="The number of records to skip before counting", Name="Skip", ParameterType="query")
	public skip?: number;

	public constructor(init?: Partial<CountRequest>) {
		super(init);
		(Object as any).assign(this, init);
	}

	public createResponse() {
		return new CountResponse();
	}

	public getTypeName() {
		return 'CountRequest';
	}
}

/**
 * Database services
 */
// @Route("/db/{CollectionName}/bulk", "DELETE")
// @Route("/{version}/db/{CollectionName}/bulk", "DELETE")
// @Api(Description="Database services")
// @DataContract
export class DeleteManyRequest
	extends CodeMashDbRequestBase
	implements IReturn<DeleteManyResponse> {
	/**
	 * Specifies deletion criteria using query operators. To delete all documents in a collection, pass in an empty document "{}"
	 */
	// @DataMember
	// @ApiMember(DataType="string", Description="Specifies deletion criteria using query operators. To delete all documents in a collection, pass in an empty document \"{}\"", Name="Filter", ParameterType="query")
	public filter: string;

	/**
	 * If true, does not activate triggers
	 */
	// @DataMember
	// @ApiMember(DataType="bool", Description="If true, does not activate triggers", Name="IgnoreTriggers", ParameterType="query")
	public ignoreTriggers: boolean;

	public constructor(init?: Partial<DeleteManyRequest>) {
		super(init);
		(Object as any).assign(this, init);
	}

	public createResponse() {
		return new DeleteManyResponse();
	}

	public getTypeName() {
		return 'DeleteManyRequest';
	}
}

/**
 * Database services
 */
// @Route("/db/{CollectionName}", "DELETE")
// @Route("/{version}/db/{collectionName}", "DELETE")
// @Route("/{version}/db/{collectionName}/{id}", "DELETE")
// @Api(Description="Database services")
// @DataContract
export class DeleteOneRequest
	extends CodeMashDbRequestBase
	implements IReturn<DeleteOneResponse> {
	/**
	 * ID of a record to delete. Required if Filter is empty.
	 */
	// @DataMember
	// @ApiMember(DataType="string", Description="ID of a record to delete. Required if Filter is empty.", Name="Id", ParameterType="path")
	public id: string;

	/**
	 * Specifies deletion criteria using query operators. Specify an empty document "{}" to delete the first document returned in the collection. Required if Id is not set.
	 */
	// @DataMember
	// @ApiMember(DataType="string", Description="Specifies deletion criteria using query operators. Specify an empty document \"{}\" to delete the first document returned in the collection. Required if Id is not set.", Name="Filter", ParameterType="query")
	public filter: string;

	/**
	 * If true, does not activate triggers
	 */
	// @DataMember
	// @ApiMember(DataType="bool", Description="If true, does not activate triggers", Name="IgnoreTriggers", ParameterType="query")
	public ignoreTriggers: boolean;

	public constructor(init?: Partial<DeleteOneRequest>) {
		super(init);
		(Object as any).assign(this, init);
	}

	public createResponse() {
		return new DeleteOneResponse();
	}

	public getTypeName() {
		return 'DeleteOneRequest';
	}
}

/**
 * Database services
 */
// @Route("/db/{CollectionName}/distinct", "GET POST")
// @Route("/{version}/db/{CollectionName}/distinct", "GET POST")
// @Api(Description="Database services")
// @DataContract
export class DistinctRequest
	extends CodeMashDbRequestBase
	implements IReturn<DistinctResponse> {
	/**
	 * The field for which to return distinct values
	 */
	// @DataMember
	// @ApiMember(DataType="string", Description="The field for which to return distinct values", IsRequired=true, Name="Field", ParameterType="query")
	public field: string;

	/**
	 * A query that specifies the documents from which to retrieve the distinct values
	 */
	// @DataMember
	// @ApiMember(DataType="string", Description="A query that specifies the documents from which to retrieve the distinct values", Name="Filter", ParameterType="query")
	public filter: string;

	public constructor(init?: Partial<DistinctRequest>) {
		super(init);
		(Object as any).assign(this, init);
	}

	public createResponse() {
		return new DistinctResponse();
	}

	public getTypeName() {
		return 'DistinctRequest';
	}
}

/**
 * Database services
 */
// @Route("/db/{CollectionName}/find", "GET POST")
// @Route("/{version}/db/{CollectionName}/find", "GET POST")
// @Api(Description="Database services")
// @DataContract
export class FindRequest
	extends CodeMashDbListRequestBase
	implements IReturn<FindResponse> {
	/**
	 * Includes schema in response
	 */
	// @DataMember
	// @ApiMember(DataType="bool", Description="Includes schema in response", Name="IncludeSchema", ParameterType="query")
	public includeSchema: boolean;

	/**
	 * Includes names of referenced users
	 */
	// @DataMember
	// @ApiMember(DataType="bool", Description="Includes names of referenced users", Name="IncludeUserNames", ParameterType="query")
	public includeUserNames: boolean;

	/**
	 * Includes names of referenced roles
	 */
	// @DataMember
	// @ApiMember(DataType="bool", Description="Includes names of referenced roles", Name="IncludeRoleNames", ParameterType="query")
	public includeRoleNames: boolean;

	/**
	 * Includes names of referenced records
	 */
	// @DataMember
	// @ApiMember(DataType="bool", Description="Includes names of referenced records", Name="IncludeCollectionNames", ParameterType="query")
	public includeCollectionNames: boolean;

	/**
	 * Includes names of referenced terms
	 */
	// @DataMember
	// @ApiMember(DataType="bool", Description="Includes names of referenced terms", Name="IncludeTermNames", ParameterType="query")
	public includeTermNames: boolean;

	/**
	 * Prevent setting culture code from headers
	 */
	// @DataMember
	// @ApiMember(DataType="bool", Description="Prevent setting culture code from headers", Name="ExcludeCulture", ParameterType="query")
	public excludeCulture: boolean;

	/**
	 * Includes data of referenced records
	 */
	// @DataMember
	// @ApiMember(DataType="object", Description="Includes data of referenced records", Name="ReferencedFields", ParameterType="query")
	public referencedFields: ReferencingField[];

	/**
	 * If true, then references are injected before your list queries are applied
	 */
	// @DataMember
	// @ApiMember(DataType="bool", Description="If true, then references are injected before your list queries are applied", Name="AddReferencesFirst", ParameterType="query")
	public addReferencesFirst: boolean;

	public constructor(init?: Partial<FindRequest>) {
		super(init);
		(Object as any).assign(this, init);
	}

	public createResponse() {
		return new FindResponse();
	}

	public getTypeName() {
		return 'FindRequest';
	}
}

/**
 * Database services
 */
// @Route("/db/{CollectionName}/{Id}", "GET POST")
// @Route("/db/{CollectionName}/findOne", "GET POST")
// @Route("/{version}/db/{CollectionName}/{Id}", "GET POST")
// @Route("/{version}/db/{CollectionName}/findOne", "GET POST")
// @Api(Description="Database services")
// @DataContract
export class FindOneRequest
	extends CodeMashDbRequestBase
	implements IReturn<FindOneResponse> {
	/**
	 * ID of a record. Required if filter is not set.
	 */
	// @DataMember
	// @ApiMember(DataType="string", Description="ID of a record. Required if filter is not set.", Name="Id", ParameterType="path")
	public id: string;

	/**
	 * The selection criteria for the find one operation. Required if Id is not set.
	 */
	// @DataMember
	// @ApiMember(DataType="string", Description="The selection criteria for the find one operation. Required if Id is not set.", Name="Filter", ParameterType="query")
	public filter: string;

	/**
	 * A query that specifies what fields in record to return
	 */
	// @DataMember
	// @ApiMember(DataType="string", Description="A query that specifies what fields in record to return", Name="Projection", ParameterType="query")
	public projection: string;

	/**
	 * By default schema is excluded in response. To get schema together with the record set this property to true.
	 */
	// @DataMember
	// @ApiMember(DataType="bool", Description="By default schema is excluded in response. To get schema together with the record set this property to true.", Name="ExcludeSchema", ParameterType="query")
	public includeSchema: boolean;

	/**
	 * Prevent setting culture code from headers
	 */
	// @DataMember
	// @ApiMember(DataType="bool", Description="Prevent setting culture code from headers", Name="ExcludeCulture", ParameterType="query")
	public excludeCulture: boolean;

	/**
	 * Includes names of referenced users
	 */
	// @DataMember
	// @ApiMember(DataType="bool", Description="Includes names of referenced users", Name="IncludeUserNames", ParameterType="query")
	public includeUserNames: boolean;

	/**
	 * Includes names of referenced roles
	 */
	// @DataMember
	// @ApiMember(DataType="bool", Description="Includes names of referenced roles", Name="IncludeRoleNames", ParameterType="query")
	public includeRoleNames: boolean;

	/**
	 * Includes names of referenced records
	 */
	// @DataMember
	// @ApiMember(DataType="bool", Description="Includes names of referenced records", Name="IncludeCollectionNames", ParameterType="query")
	public includeCollectionNames: boolean;

	/**
	 * Includes names of referenced terms
	 */
	// @DataMember
	// @ApiMember(DataType="bool", Description="Includes names of referenced terms", Name="IncludeTermNames", ParameterType="query")
	public includeTermNames: boolean;

	/**
	 * Includes data of referenced records
	 */
	// @DataMember
	// @ApiMember(DataType="object", Description="Includes data of referenced records", Name="ReferencedFields", ParameterType="query")
	public referencedFields: ReferencingField[];

	/**
	 * If true, then references are injected before your list queries are applied
	 */
	// @DataMember
	// @ApiMember(DataType="bool", Description="If true, then references are injected before your list queries are applied", Name="AddReferencesFirst", ParameterType="query")
	public addReferencesFirst: boolean;

	public constructor(init?: Partial<FindOneRequest>) {
		super(init);
		(Object as any).assign(this, init);
	}

	public createResponse() {
		return new FindOneResponse();
	}

	public getTypeName() {
		return 'FindOneRequest';
	}
}

/**
 * Database services
 */
// @Route("/db/{collectionName}/bulk", "POST")
// @Route("/{version}/db/{collectionName}/bulk", "POST")
// @Api(Description="Database services")
// @DataContract
export class InsertManyRequest
	extends CodeMashDbRequestBase
	implements IReturn<InsertManyResponse> {
	/**
	 * Array of json records to insert
	 */
	// @DataMember
	// @ApiMember(DataType="Array", Description="Array of json records to insert", IsRequired=true, Name="Document", ParameterType="body")
	public documents: string[];

	/**
	 * By default records are validated before insert, set to true to prevent validation
	 */
	// @DataMember
	// @ApiMember(DataType="bool", Description="By default records are validated before insert, set to true to prevent validation", Name="BypassDocumentValidation", ParameterType="body")
	public bypassDocumentValidation: boolean;

	/**
	 * If true, does not activate triggers
	 */
	// @DataMember
	// @ApiMember(DataType="bool", Description="If true, does not activate triggers", Name="IgnoreTriggers", ParameterType="body")
	public ignoreTriggers: boolean;

	/**
	 * When calling with full permission, can set responsible user ID
	 */
	// @DataMember
	// @ApiMember(DataType="Guid", Description="When calling with full permission, can set responsible user ID", Name="ResponsibleUserId", ParameterType="body")
	public responsibleUserId?: string;

	/**
	 * If true, file fields that are passed will expect file ids given from your storage providers.
	 */
	// @DataMember
	// @ApiMember(DataType="bool", Description="If true, file fields that are passed will expect file ids given from your storage providers.", Name="ResolveProviderFiles", ParameterType="body")
	public resolveProviderFiles: boolean;

	public constructor(init?: Partial<InsertManyRequest>) {
		super(init);
		(Object as any).assign(this, init);
	}

	public createResponse() {
		return new InsertManyResponse();
	}

	public getTypeName() {
		return 'InsertManyRequest';
	}
}

/**
 * Database services
 */
// @Route("/db/{collectionName}", "POST")
// @Route("/{version}/db/{collectionName}", "POST")
// @Api(Description="Database services")
// @DataContract
export class InsertOneRequest
	extends CodeMashDbRequestBase
	implements IReturn<InsertOneResponse> {
	/**
	 * Entity represented as json to insert
	 */
	// @DataMember
	// @ApiMember(DataType="string", Description="Entity represented as json to insert", IsRequired=true, Name="Document", ParameterType="body")
	public document: string;

	/**
	 * By default records are validated before insert, set to true to prevent validation
	 */
	// @DataMember
	// @ApiMember(DataType="bool", Description="By default records are validated before insert, set to true to prevent validation", Name="BypassDocumentValidation", ParameterType="body")
	public bypassDocumentValidation: boolean;

	/**
	 * By default file uploads are done after the record is inserted, set to true in case you need to wait for files to be uploaded
	 */
	// @DataMember
	// @ApiMember(DataType="bool", Description="By default file uploads are done after the record is inserted, set to true in case you need to wait for files to be uploaded", Name="WaitForFileUpload", ParameterType="body")
	public waitForFileUpload: boolean;

	/**
	 * If true, does not activate triggers
	 */
	// @DataMember
	// @ApiMember(DataType="bool", Description="If true, does not activate triggers", Name="IgnoreTriggers", ParameterType="body")
	public ignoreTriggers: boolean;

	/**
	 * When calling with full permission, can set responsible user ID
	 */
	// @DataMember
	// @ApiMember(DataType="Guid", Description="When calling with full permission, can set responsible user ID", Name="ResponsibleUserId", ParameterType="body")
	public responsibleUserId?: string;

	/**
	 * If true, file fields that are passed will expect file ids given from your storage providers.
	 */
	// @DataMember
	// @ApiMember(DataType="bool", Description="If true, file fields that are passed will expect file ids given from your storage providers.", Name="ResolveProviderFiles", ParameterType="body")
	public resolveProviderFiles: boolean;

	public constructor(init?: Partial<InsertOneRequest>) {
		super(init);
		(Object as any).assign(this, init);
	}

	public createResponse() {
		return new InsertOneResponse();
	}

	public getTypeName() {
		return 'InsertOneRequest';
	}
}

/**
 * Database services
 */
// @Route("/db/{CollectionName}/replaceOne", "PUT")
// @Route("/{version}/db/{collectionName}/replaceOne", "PUT")
// @Route("/{version}/db/{collectionName}/replaceOne/{id}", "PUT")
// @Api(Description="Database services")
// @DataContract
export class ReplaceOneRequest
	extends CodeMashDbRequestBase
	implements IReturn<ReplaceOneResponse> {
	/**
	 * Entity represented as json to replace
	 */
	// @DataMember
	// @ApiMember(DataType="string", Description="Entity represented as json to replace", IsRequired=true, Name="Document", ParameterType="body")
	public document: string;

	/**
	 * ID of a record to replace. Required if Filter is empty.
	 */
	// @DataMember
	// @ApiMember(DataType="string", Description="ID of a record to replace. Required if Filter is empty.", Name="Id", ParameterType="path")
	public id: string;

	/**
	 * The selection criteria for the update. The same query selectors as in the Find method are available. - https://docs.mongodb.org/manual/reference/method/db.collection.replaceOne/ . Specify an empty document '{}' to update the first document returned in the collection
	 */
	// @DataMember
	// @ApiMember(DataType="string", Description="The selection criteria for the update. The same query selectors as in the Find method are available. - https://docs.mongodb.org/manual/reference/method/db.collection.replaceOne/ . Specify an empty document '{}' to update the first document returned in the collection", Name="Filter", ParameterType="body")
	public filter: string;

	/**
	 * By default file uploads are done after the record is inserted, set to true in case you need to wait for files to be uploaded
	 */
	// @DataMember
	// @ApiMember(DataType="bool", Description="By default file uploads are done after the record is inserted, set to true in case you need to wait for files to be uploaded", Name="WaitForFileUpload", ParameterType="body")
	public waitForFileUpload: boolean;

	/**
	 * If true, inserts a new record if current record not found
	 */
	// @DataMember
	// @ApiMember(DataType="bool", Description="If true, inserts a new record if current record not found", Name="IsUpsert", ParameterType="body")
	public isUpsert: boolean;

	/**
	 * By default records are validated before insert, set to true to prevent validation
	 */
	// @DataMember
	// @ApiMember(DataType="bool", Description="By default records are validated before insert, set to true to prevent validation", IsRequired=true, Name="BypassDocumentValidation", ParameterType="body")
	public bypassDocumentValidation: boolean;

	/**
	 * If true, does not activate triggers
	 */
	// @DataMember
	// @ApiMember(DataType="bool", Description="If true, does not activate triggers", Name="IgnoreTriggers", ParameterType="body")
	public ignoreTriggers: boolean;

	/**
	 * If true, file fields that are passed will expect file ids given from your storage providers.
	 */
	// @DataMember
	// @ApiMember(DataType="bool", Description="If true, file fields that are passed will expect file ids given from your storage providers.", Name="ResolveProviderFiles", ParameterType="body")
	public resolveProviderFiles: boolean;

	public constructor(init?: Partial<ReplaceOneRequest>) {
		super(init);
		(Object as any).assign(this, init);
	}

	public createResponse() {
		return new ReplaceOneResponse();
	}

	public getTypeName() {
		return 'ReplaceOneRequest';
	}
}

/**
 * Database services
 */
// @Route("/db/{collectionName}/bulk", "PATCH")
// @Route("/{version}/db/{collectionName}/bulk", "PATCH")
// @Api(Description="Database services")
// @DataContract
export class UpdateManyRequest
	extends CodeMashDbRequestBase
	implements IReturn<UpdateManyResponse> {
	/**
	 * The modifications to apply. Use Update Operators such as $set, $unset, or $rename.
	 */
	// @DataMember
	// @ApiMember(DataType="string", Description="The modifications to apply. Use Update Operators such as $set, $unset, or $rename.", IsRequired=true, Name="Update", ParameterType="body")
	public update: string;

	/**
	 * The selection criteria for the update. The same query selectors as in the Find method are available. - https://docs.mongodb.org/manual/reference/method/db.collection.updateMany/#db.collection.updateMany . Specify an empty document '{}' to update the first document returned in the collection
	 */
	// @DataMember
	// @ApiMember(DataType="string", Description="The selection criteria for the update. The same query selectors as in the Find method are available. - https://docs.mongodb.org/manual/reference/method/db.collection.updateMany/#db.collection.updateMany . Specify an empty document '{}' to update the first document returned in the collection", IsRequired=true, Name="Filter", ParameterType="body")
	public filter: string;

	/**
	 * By default records are validated before insert, set to true to prevent validation
	 */
	// @DataMember
	// @ApiMember(DataType="bool", Description="By default records are validated before insert, set to true to prevent validation", Name="BypassDocumentValidation", ParameterType="body")
	public bypassDocumentValidation: boolean;

	/**
	 * If true, does not activate triggers
	 */
	// @DataMember
	// @ApiMember(DataType="bool", Description="If true, does not activate triggers", Name="IgnoreTriggers", ParameterType="body")
	public ignoreTriggers: boolean;

	/**
	 * If true, file fields that are passed will expect file ids given from your storage providers.
	 */
	// @DataMember
	// @ApiMember(DataType="bool", Description="If true, file fields that are passed will expect file ids given from your storage providers.", Name="ResolveProviderFiles", ParameterType="body")
	public resolveProviderFiles: boolean;

	public constructor(init?: Partial<UpdateManyRequest>) {
		super(init);
		(Object as any).assign(this, init);
	}

	public createResponse() {
		return new UpdateManyResponse();
	}

	public getTypeName() {
		return 'UpdateManyRequest';
	}
}

/**
 * Database services
 */
// @Route("/db/{collectionName}", "PATCH")
// @Route("/db/{collectionName}/{id}", "PATCH")
// @Route("/{version}/db/{collectionName}", "PATCH")
// @Route("/{version}/db/{collectionName}/{id}", "PATCH")
// @Api(Description="Database services")
// @DataContract
export class UpdateOneRequest
	extends CodeMashDbRequestBase
	implements IReturn<UpdateOneResponse> {
	/**
	 * ID of record to update. Required if Filter is empty.
	 */
	// @DataMember
	// @ApiMember(DataType="string", Description="ID of record to update. Required if Filter is empty.", Name="Id", ParameterType="path")
	public id: string;

	/**
	 * The modifications to apply. Use Update Operators such as $set, $unset, or $rename.
	 */
	// @DataMember
	// @ApiMember(DataType="string", Description="The modifications to apply. Use Update Operators such as $set, $unset, or $rename.", IsRequired=true, Name="Update", ParameterType="body")
	public update: string;

	/**
	 * The selection criteria for the update. Required if Id is empty.
	 */
	// @DataMember
	// @ApiMember(DataType="string", Description="The selection criteria for the update. Required if Id is empty.", Name="Filter", ParameterType="body")
	public filter: string;

	/**
	 * By default file uploads are done after the record is inserted, set to true in case you need to wait for files to be uploaded
	 */
	// @DataMember
	// @ApiMember(DataType="bool", Description="By default file uploads are done after the record is inserted, set to true in case you need to wait for files to be uploaded", Name="WaitForFileUpload", ParameterType="body")
	public waitForFileUpload: boolean;

	/**
	 * By default records are validated before insert, set to true to prevent validation
	 */
	// @DataMember
	// @ApiMember(DataType="bool", Description="By default records are validated before insert, set to true to prevent validation", IsRequired=true, Name="BypassDocumentValidation", ParameterType="body")
	public bypassDocumentValidation: boolean;

	/**
	 * If true, does not activate triggers
	 */
	// @DataMember
	// @ApiMember(DataType="bool", Description="If true, does not activate triggers", Name="IgnoreTriggers", ParameterType="body")
	public ignoreTriggers: boolean;

	/**
	 * If true, file fields that are passed will expect file ids given from your storage providers.
	 */
	// @DataMember
	// @ApiMember(DataType="bool", Description="If true, file fields that are passed will expect file ids given from your storage providers.", Name="ResolveProviderFiles", ParameterType="body")
	public resolveProviderFiles: boolean;

	public constructor(init?: Partial<UpdateOneRequest>) {
		super(init);
		(Object as any).assign(this, init);
	}

	public createResponse() {
		return new UpdateOneResponse();
	}

	public getTypeName() {
		return 'UpdateOneRequest';
	}
}

/**
 * Database services
 */
// @Route("/db/taxonomies/{CollectionName}/terms", "GET POST")
// @Route("/{version}/db/taxonomies/{CollectionName}/terms", "GET POST")
// @Api(Description="Database services")
// @DataContract
export class FindTermsRequest
	extends CodeMashDbListRequestBase
	implements IReturn<FindTermsResponse> {
	/**
	 * Includes taxonomy to response
	 */
	// @DataMember
	// @ApiMember(DataType="bool", Description="Includes taxonomy to response", Name="IncludeTaxonomy", ParameterType="query")
	public includeTaxonomy: boolean;

	/**
	 * Prevent setting culture code from headers
	 */
	// @DataMember
	// @ApiMember(DataType="bool", Description="Prevent setting culture code from headers", Name="ExcludeCulture", ParameterType="query")
	public excludeCulture: boolean;

	public constructor(init?: Partial<FindTermsRequest>) {
		super(init);
		(Object as any).assign(this, init);
	}

	public createResponse() {
		return new FindTermsResponse();
	}

	public getTypeName() {
		return 'FindTermsRequest';
	}
}

/**
 * Database services
 */
// @Route("/db/taxonomies/{CollectionName}/terms/{id}/children", "GET POST")
// @Route("/{version}/db/taxonomies/{CollectionName}/terms/{id}/children", "GET POST")
// @Route("/db/taxonomies/{CollectionName}/terms/children", "GET POST")
// @Route("/{version}/db/taxonomies/{CollectionName}/terms/children", "GET POST")
// @Api(Description="Database services")
// @DataContract
export class FindTermsChildrenRequest
	extends CodeMashDbListRequestBase
	implements IReturn<FindTermsChildrenResponse> {
	/**
	 * ID of a parent term. Required if filter is not set.
	 */
	// @DataMember
	// @ApiMember(DataType="string", Description="ID of a parent term. Required if filter is not set.", Name="Id", ParameterType="path")
	public id: string;

	/**
	 * The selection criteria for the parent terms. Required if Id is not set.
	 */
	// @DataMember
	// @ApiMember(DataType="string", Description="The selection criteria for the parent terms. Required if Id is not set.", Name="ParentFilter", ParameterType="query")
	public parentFilter: string;

	/**
	 * Prevent setting culture code from headers
	 */
	// @DataMember
	// @ApiMember(DataType="bool", Description="Prevent setting culture code from headers", Name="ExcludeCulture", ParameterType="query")
	public excludeCulture: boolean;

	public constructor(init?: Partial<FindTermsChildrenRequest>) {
		super(init);
		(Object as any).assign(this, init);
	}

	public createResponse() {
		return new FindTermsChildrenResponse();
	}

	public getTypeName() {
		return 'FindTermsChildrenRequest';
	}
}

/**
 * File services
 */
// @Route("/files/{fileId}", "DELETE")
// @Route("/{version}/files/{fileId}", "DELETE")
// @Api(Description="File services")
// @DataContract
export class DeleteFileRequest extends CodeMashRequestBase {
	/**
	 * ID of a file to delete
	 */
	// @DataMember
	// @ApiMember(DataType="string", Description="ID of a file to delete", IsRequired=true, Name="FileId", ParameterType="path")
	public fileId: string;

	public constructor(init?: Partial<DeleteFileRequest>) {
		super(init);
		(Object as any).assign(this, init);
	}
}

/**
 * File services
 */
// @Route("/files", "GET")
// @Route("/{version}/files", "GET")
// @Api(Description="File services")
// @DataContract
export class DownloadFileRequest
	extends CodeMashRequestBase
	implements IReturn<HttpResult> {
	/**
	 * ID of a file to download
	 */
	// @DataMember
	// @ApiMember(DataType="string", Description="ID of a file to download", IsRequired=true, Name="FileId", ParameterType="query")
	public fileId: string;

	/**
	 * Optimization code of optimized image
	 */
	// @DataMember
	// @ApiMember(DataType="string", Description="Optimization code of optimized image", Name="Optimization", ParameterType="query")
	public optimization: string;

	public constructor(init?: Partial<DownloadFileRequest>) {
		super(init);
		(Object as any).assign(this, init);
	}

	public createResponse() {
		return new HttpResult();
	}

	public getTypeName() {
		return 'DownloadFileRequest';
	}
}

/**
 * File services
 */
// @Route("/files/url", "GET")
// @Route("/{version}/files/url", "GET")
// @Api(Description="File services")
// @DataContract
export class GetFileRequest
	extends CodeMashRequestBase
	implements IReturn<GetFileResponse> {
	/**
	 * ID of a file to download
	 */
	// @DataMember
	// @ApiMember(DataType="string", Description="ID of a file to download", IsRequired=true, Name="FileId", ParameterType="query")
	public fileId: string;

	/**
	 * Optimization code of optimized image
	 */
	// @DataMember
	// @ApiMember(DataType="string", Description="Optimization code of optimized image", Name="Optimization", ParameterType="query")
	public optimization: string;

	public constructor(init?: Partial<GetFileRequest>) {
		super(init);
		(Object as any).assign(this, init);
	}

	public createResponse() {
		return new GetFileResponse();
	}

	public getTypeName() {
		return 'GetFileRequest';
	}
}

/**
 * File services
 */
// @Route("/files", "POST")
// @Route("/{version}/files", "POST")
// @Api(Description="File services")
// @DataContract
export class UploadFileRequest
	extends CodeMashRequestBase
	implements IReturn<UploadFileResponse> {
	/**
	 * Path of directory to store the file into. Leave it as empty to store file into root directory
	 */
	// @DataMember
	// @ApiMember(DataType="string", Description="Path of directory to store the file into. Leave it as empty to store file into root directory", IsRequired=true, Name="Path", ParameterType="form")
	public path: string;

	/**
	 * Alternative way to upload a file by providing a base64 encoded string
	 */
	// @DataMember
	// @ApiMember(DataType="object", Description="Alternative way to upload a file by providing a base64 encoded string", Name="Base64File", ParameterType="body")
	public base64File: Base64FileUpload;

	/**
	 * File account ID. If not provided, default account will be used.
	 */
	// @DataMember
	// @ApiMember(DataType="Guid", Description="File account ID. If not provided, default account will be used.", Name="AccountId", ParameterType="body")
	public accountId?: string;

	public constructor(init?: Partial<UploadFileRequest>) {
		super(init);
		(Object as any).assign(this, init);
	}

	public createResponse() {
		return new UploadFileResponse();
	}

	public getTypeName() {
		return 'UploadFileRequest';
	}
}

/**
 * File services
 */
// @Route("/payments/orders/{id}/files", "POST")
// @Route("/{version}/payments/orders/{id}/files", "POST")
// @Api(Description="File services")
// @DataContract
export class UploadOrderFileRequest
	extends CodeMashRequestBase
	implements IReturn<UploadOrderFileResponse> {
	/**
	 * ID of an order to upload this file for.
	 */
	// @DataMember
	// @ApiMember(DataType="string", Description="ID of an order to upload this file for.", IsRequired=true, Name="Id", ParameterType="form")
	public id: string;

	/**
	 * Category of a file inside order.
	 */
	// @DataMember
	// @ApiMember(DataType="string", Description="Category of a file inside order.", Name="Category", ParameterType="form")
	public category: string;

	/**
	 * Alternative way to upload a file by providing a base64 encoded string
	 */
	// @DataMember
	// @ApiMember(DataType="object", Description="Alternative way to upload a file by providing a base64 encoded string", Name="Base64File", ParameterType="body")
	public base64File: Base64FileUpload;

	public constructor(init?: Partial<UploadOrderFileRequest>) {
		super(init);
		(Object as any).assign(this, init);
	}

	public createResponse() {
		return new UploadOrderFileResponse();
	}

	public getTypeName() {
		return 'UploadOrderFileRequest';
	}
}

/**
 * File services
 */
// @Route("/db/{collectionName}/files", "POST")
// @Route("/{version}/db/{collectionName}/files", "POST")
// @Api(Description="File services")
// @DataContract
export class UploadRecordFileRequest
	extends CodeMashDbRequestBase
	implements IReturn<UploadRecordFileResponse> {
	/**
	 * ID of a record to upload this file for. If empty, creates a temporary file which then can be saved during record operations.
	 */
	// @DataMember
	// @ApiMember(DataType="string", Description="ID of a record to upload this file for. If empty, creates a temporary file which then can be saved during record operations.", Name="RecordId", ParameterType="form")
	public recordId: string;

	/**
	 * Record file field name
	 */
	// @DataMember
	// @ApiMember(DataType="string", Description="Record file field name", IsRequired=true, Name="UniqueFieldName", ParameterType="form")
	public uniqueFieldName: string;

	/**
	 * Alternative way to upload a file by providing a base64 encoded string
	 */
	// @DataMember
	// @ApiMember(DataType="object", Description="Alternative way to upload a file by providing a base64 encoded string", Name="Base64File", ParameterType="body")
	public base64File: Base64FileUpload;

	public constructor(init?: Partial<UploadRecordFileRequest>) {
		super(init);
		(Object as any).assign(this, init);
	}

	public createResponse() {
		return new UploadRecordFileResponse();
	}

	public getTypeName() {
		return 'UploadRecordFileRequest';
	}
}

/**
 * File services
 */
// @Route("/membership/users/files", "POST")
// @Route("/{version}/membership/users/files", "POST")
// @Api(Description="File services")
// @DataContract
export class UploadUserFileRequest
	extends CodeMashRequestBase
	implements IReturn<UploadUserFileResponse> {
	/**
	 * ID of a user to upload this file for. If empty, creates a temporary file which then can be saved during user save operations.
	 */
	// @DataMember
	// @ApiMember(DataType="string", Description="ID of a user to upload this file for. If empty, creates a temporary file which then can be saved during user save operations.", Name="UserId", ParameterType="form")
	public userId?: string;

	/**
	 * User meta file field name
	 */
	// @DataMember
	// @ApiMember(DataType="string", Description="User meta file field name", IsRequired=true, Name="MetaFieldName", ParameterType="form")
	public metaFieldName: string;

	/**
	 * Alternative way to upload a file by providing a base64 encoded string
	 */
	// @DataMember
	// @ApiMember(DataType="object", Description="Alternative way to upload a file by providing a base64 encoded string", Name="Base64File", ParameterType="body")
	public base64File: Base64FileUpload;

	public constructor(init?: Partial<UploadUserFileRequest>) {
		super(init);
		(Object as any).assign(this, init);
	}

	public createResponse() {
		return new UploadUserFileResponse();
	}

	public getTypeName() {
		return 'UploadUserFileRequest';
	}
}

/**
 * Logs
 */
// @Route("/logs", "POST")
// @Route("/{version}/logs", "POST")
// @Api(Description="Logs")
// @DataContract
export class CreateLogRequest
	extends CodeMashRequestBase
	implements IReturn<CreateLogResponse> {
	/**
	 * Message to log.
	 */
	// @DataMember
	// @ApiMember(DataType="string", Description="Message to log.", IsRequired=true, Name="Message", ParameterType="body")
	public message: string;

	/**
	 * Custom items providing information.
	 */
	// @DataMember
	// @ApiMember(DataType="Dictionary", Description="Custom items providing information.", Name="Items", ParameterType="body")
	public items: {[index: string]: string};

	/**
	 * Severity level of the log.
	 */
	// @DataMember
	// @ApiMember(DataType="string", Description="Severity level of the log.", Name="Level", ParameterType="body")
	public level: string;

	public constructor(init?: Partial<CreateLogRequest>) {
		super(init);
		(Object as any).assign(this, init);
	}

	public createResponse() {
		return new CreateLogResponse();
	}

	public getTypeName() {
		return 'CreateLogRequest';
	}
}

/**
 * Authentication
 */
// @Route("/auth/aad", "GET POST")
// @Route("/{version}/auth/aad", "GET POST")
// @Api(Description="Authentication")
// @DataContract
export class AadAuthenticationRequest
	extends CodeMashRequestBase
	implements IOAuthRequest {
	/**
	 * Mode to use for authentication
	 */
	// @DataMember
	// @ApiMember(DataType="string", Description="Mode to use for authentication", Name="Mode", ParameterType="query")
	public mode: string;

	/**
	 * Code received from Microsoft services
	 */
	// @DataMember
	// @ApiMember(DataType="string", Description="Code received from Microsoft services", Name="Code", ParameterType="query")
	public code: string;

	/**
	 * State received with a code
	 */
	// @DataMember
	// @ApiMember(DataType="string", Description="State received with a code", Name="State", ParameterType="query")
	public state: string;

	/**
	 * When transferring access token from client app
	 */
	// @DataMember
	// @ApiMember(DataType="string", Description="When transferring access token from client app", Name="AccessToken", ParameterType="query")
	public accessToken: string;

	public constructor(init?: Partial<AadAuthenticationRequest>) {
		super(init);
		(Object as any).assign(this, init);
	}
}

/**
 * Gets one user
 */
// @Route("/auth", "GET POST")
// @Route("/{version}/auth", "GET POST")
// @Api(Description="Gets one user")
// @DataContract
export class AuthCheckRequest
	extends CodeMashRequestBase
	implements IReturn<AuthCheckResponse> {
	public constructor(init?: Partial<AuthCheckRequest>) {
		super(init);
		(Object as any).assign(this, init);
	}

	public createResponse() {
		return new AuthCheckResponse();
	}

	public getTypeName() {
		return 'AuthCheckRequest';
	}
}

/**
 * Authentication
 */
// @Route("/auth/credentials", "GET POST")
// @Route("/{version}/auth/credentials", "GET POST")
// @Api(Description="Authentication")
// @DataContract
export class CredentialsAuthenticationRequest extends CodeMashRequestBase {
	/**
	 * User's login e-mail address.
	 */
	// @DataMember
	// @ApiMember(DataType="string", Description="User's login e-mail address.", IsRequired=true, Name="UserName", ParameterType="body")
	public userName: string;

	/**
	 * User's login password.
	 */
	// @DataMember
	// @ApiMember(DataType="string", Description="User's login password.", IsRequired=true, Name="Password", ParameterType="body")
	public password: string;

	public constructor(init?: Partial<CredentialsAuthenticationRequest>) {
		super(init);
		(Object as any).assign(this, init);
	}
}

/**
 * Authentication
 */
// @Route("/auth/facebook", "GET POST")
// @Route("/{version}/auth/facebook", "GET POST")
// @Api(Description="Authentication")
// @DataContract
export class FacebookAuthenticationRequest
	extends CodeMashRequestBase
	implements IOAuthRequest {
	/**
	 * Mode to use for authentication
	 */
	// @DataMember
	// @ApiMember(DataType="string", Description="Mode to use for authentication", Name="Mode", ParameterType="query")
	public mode: string;

	/**
	 * Code received from Facebook services
	 */
	// @DataMember
	// @ApiMember(DataType="string", Description="Code received from Facebook services", Name="Code", ParameterType="query")
	public code: string;

	/**
	 * State received with a code
	 */
	// @DataMember
	// @ApiMember(DataType="string", Description="State received with a code", Name="State", ParameterType="query")
	public state: string;

	/**
	 * When transferring access token from client app
	 */
	// @DataMember
	// @ApiMember(DataType="string", Description="When transferring access token from client app", Name="AccessToken", ParameterType="query")
	public accessToken: string;

	public constructor(init?: Partial<FacebookAuthenticationRequest>) {
		super(init);
		(Object as any).assign(this, init);
	}
}

/**
 * Authentication
 */
// @Route("/auth/google", "GET POST")
// @Route("/{version}/auth/google", "GET POST")
// @Api(Description="Authentication")
// @DataContract
export class GoogleAuthenticationRequest
	extends CodeMashRequestBase
	implements IOAuthRequest {
	/**
	 * Mode to use for authentication
	 */
	// @DataMember
	// @ApiMember(DataType="string", Description="Mode to use for authentication", Name="Mode", ParameterType="query")
	public mode: string;

	/**
	 * Code received from Google services
	 */
	// @DataMember
	// @ApiMember(DataType="string", Description="Code received from Google services", Name="Code", ParameterType="query")
	public code: string;

	/**
	 * State received with a code
	 */
	// @DataMember
	// @ApiMember(DataType="string", Description="State received with a code", Name="State", ParameterType="query")
	public state: string;

	/**
	 * When transferring access token from client app
	 */
	// @DataMember
	// @ApiMember(DataType="string", Description="When transferring access token from client app", Name="AccessToken", ParameterType="query")
	public accessToken: string;

	public constructor(init?: Partial<GoogleAuthenticationRequest>) {
		super(init);
		(Object as any).assign(this, init);
	}
}

/**
 * Authentication
 */
// @Route("/auth/twitter", "GET POST")
// @Route("/{version}/auth/twitter", "GET POST")
// @Api(Description="Authentication")
// @DataContract
export class TwitterAuthenticationRequest
	extends CodeMashRequestBase
	implements IOAuthRequest {
	/**
	 * Mode to use for authentication
	 */
	// @DataMember
	// @ApiMember(DataType="string", Description="Mode to use for authentication", Name="Mode", ParameterType="query")
	public mode: string;

	/**
	 * Code received from Twitter services
	 */
	// @DataMember
	// @ApiMember(DataType="string", Description="Code received from Twitter services", Name="Code", ParameterType="query")
	public code: string;

	/**
	 * State received with a code
	 */
	// @DataMember
	// @ApiMember(DataType="string", Description="State received with a code", Name="State", ParameterType="query")
	public state: string;

	/**
	 * When transferring access token from client app
	 */
	// @DataMember
	// @ApiMember(DataType="string", Description="When transferring access token from client app", Name="AccessToken", ParameterType="query")
	public accessToken: string;

	/**
	 * When transferring access token from client app
	 */
	// @DataMember
	// @ApiMember(DataType="string", Description="When transferring access token from client app", Name="AccessTokenSecret", ParameterType="query")
	public accessTokenSecret: string;

	/**
	 * Auth token
	 */
	// @DataMember
	// @ApiMember(DataType="string", Description="Auth token", Name="OAuthToken", ParameterType="query")
	public oAuthToken: string;

	/**
	 * Auth verifier
	 */
	// @DataMember
	// @ApiMember(DataType="string", Description="Auth verifier", Name="OAuthVerifier", ParameterType="query")
	public oAuthVerifier: string;

	public constructor(init?: Partial<TwitterAuthenticationRequest>) {
		super(init);
		(Object as any).assign(this, init);
	}
}

/**
 * Membership
 */
// @Route("/membership/users/deactivate/token", "GET")
// @Route("/{version}/membership/users/deactivate/token", "GET")
// @Api(Description="Membership")
// @DataContract
export class ValidateUserDeactivationTokenRequest
	extends RequestBase
	implements IReturn<ValidateUserDeactivationTokenResponse> {
	/**
	 * Secret token received by email for user deactivation
	 */
	// @DataMember
	// @ApiMember(DataType="string", Description="Secret token received by email for user deactivation", IsRequired=true, Name="Token", ParameterType="query")
	public token: string;

	/**
	 * If true, includes project details in response
	 */
	// @DataMember
	// @ApiMember(DataType="bool", Description="If true, includes project details in response", IsRequired=true, Name="IncludeProject", ParameterType="query")
	public includeProject: boolean;

	public constructor(init?: Partial<ValidateUserDeactivationTokenRequest>) {
		super(init);
		(Object as any).assign(this, init);
	}

	public createResponse() {
		return new ValidateUserDeactivationTokenResponse();
	}

	public getTypeName() {
		return 'ValidateUserDeactivationTokenRequest';
	}
}

/**
 * Membership
 */
// @Route("/membership/users/deactivate/token", "POST")
// @Route("/{version}/membership/users/deactivate/token", "POST")
// @Api(Description="Membership")
// @DataContract
export class CreateUserDeactivationRequest extends CodeMashRequestBase {
	public constructor(init?: Partial<CreateUserDeactivationRequest>) {
		super(init);
		(Object as any).assign(this, init);
	}
}

/**
 * Membership
 */
// @Route("/membership/users/deactivate", "POST")
// @Route("/{version}/membership/users/deactivate", "POST")
// @Api(Description="Membership")
// @DataContract
export class DeactivateUserRequest extends RequestBase {
	/**
	 * Secret token received by email for deactivation
	 */
	// @DataMember
	// @ApiMember(DataType="string", Description="Secret token received by email for deactivation", IsRequired=true, Name="Token", ParameterType="body")
	public token: string;

	/**
	 * Password for confirmation
	 */
	// @DataMember
	// @ApiMember(DataType="string", Description="Password for confirmation", IsRequired=true, Name="Password", ParameterType="body")
	public password: string;

	public constructor(init?: Partial<DeactivateUserRequest>) {
		super(init);
		(Object as any).assign(this, init);
	}
}

/**
 * Blocks selected user preventing the use of authenticated actions
 */
// @Route("/membership/users/{Id}/block", "PUT PATCH")
// @Route("/{version}/membership/users/{Id}/block", "PUT PATCH")
// @Api(Description="Blocks selected user preventing the use of authenticated actions")
// @DataContract
export class BlockUserRequest extends CodeMashRequestBase {
	/**
	 * ID of user to be blocked
	 */
	// @DataMember
	// @ApiMember(DataType="Guid", Description="ID of user to be blocked", IsRequired=true, Name="Id", ParameterType="body")
	public id: string;

	public constructor(init?: Partial<BlockUserRequest>) {
		super(init);
		(Object as any).assign(this, init);
	}
}

/**
 * Deletes user
 */
// @Route("/membership/users/{Id}", "DELETE")
// @Route("/{version}/membership/users/{Id}", "DELETE")
// @Api(Description="Deletes user")
// @DataContract
export class DeleteUserRequest extends CodeMashRequestBase {
	/**
	 * ID of user to be deleted
	 */
	// @DataMember
	// @ApiMember(DataType="Guid", Description="ID of user to be deleted", IsRequired=true, Name="Id", ParameterType="path")
	public id: string;

	public constructor(init?: Partial<DeleteUserRequest>) {
		super(init);
		(Object as any).assign(this, init);
	}
}

/**
 * Gets one user
 */
// @Route("/membership/users/profile", "GET")
// @Route("/{version}/membership/users/profile", "GET")
// @Api(Description="Gets one user")
// @DataContract
export class GetProfileRequest
	extends CodeMashRequestBase
	implements IReturn<GetProfileResponse> {
	/**
	 * Set true if permissions should be returned
	 */
	// @DataMember
	// @ApiMember(DataType="bool", Description="Set true if permissions should be returned", Name="IncludePermissions", ParameterType="query")
	public includePermissions: boolean;

	/**
	 * Set true if user devices should be returned
	 */
	// @DataMember
	// @ApiMember(DataType="bool", Description="Set true if user devices should be returned", Name="IncludeDevices", ParameterType="query")
	public includeDevices: boolean;

	/**
	 * Set true if user unread notifications count should be returned
	 */
	// @DataMember
	// @ApiMember(DataType="bool", Description="Set true if user unread notifications count should be returned", Name="IncludeNotificationsCount", ParameterType="query")
	public includeUnreadNotifications: boolean;

	/**
	 * Set true if user meta data should be returned
	 */
	// @DataMember
	// @ApiMember(DataType="bool", Description="Set true if user meta data should be returned", Name="IncludeMeta", ParameterType="query")
	public includeMeta: boolean;

	public constructor(init?: Partial<GetProfileRequest>) {
		super(init);
		(Object as any).assign(this, init);
	}

	public createResponse() {
		return new GetProfileResponse();
	}

	public getTypeName() {
		return 'GetProfileRequest';
	}
}

/**
 * Gets one user
 */
// @Route("/membership/users/{Id}", "GET")
// @Route("/{version}/membership/users/{id}", "GET")
// @Route("/{version}/membership/users/by-email", "GET")
// @Api(Description="Gets one user")
// @DataContract
export class GetUserRequest
	extends CodeMashRequestBase
	implements IReturn<GetUserResponse> {
	/**
	 * User identifier ID
	 */
	// @DataMember
	// @ApiMember(DataType="Guid", Description="User identifier ID", IsRequired=true, Name="Id", ParameterType="path")
	public id: string;

	/**
	 * Email of user
	 */
	// @DataMember
	// @ApiMember(DataType="string", Description="Email of user", Name="Email", ParameterType="query")
	public email: string;

	/**
	 * Provider of user
	 */
	// @DataMember
	// @ApiMember(DataType="string", Description="Provider of user", Name="Provider", ParameterType="query")
	public provider: string;

	/**
	 * Set true if permissions should be returned
	 */
	// @DataMember
	// @ApiMember(DataType="bool", Description="Set true if permissions should be returned", Name="IncludePermissions", ParameterType="query")
	public includePermissions: boolean;

	/**
	 * Set true if user devices should be returned
	 */
	// @DataMember
	// @ApiMember(DataType="bool", Description="Set true if user devices should be returned", Name="IncludeDevices", ParameterType="query")
	public includeDevices: boolean;

	/**
	 * Set true if user unread notifications count should be returned
	 */
	// @DataMember
	// @ApiMember(DataType="bool", Description="Set true if user unread notifications count should be returned", Name="IncludeNotificationsCount", ParameterType="query")
	public includeUnreadNotifications: boolean;

	/**
	 * Set true if user meta data should be returned
	 */
	// @DataMember
	// @ApiMember(DataType="bool", Description="Set true if user meta data should be returned", Name="IncludeMeta", ParameterType="query")
	public includeMeta: boolean;

	public constructor(init?: Partial<GetUserRequest>) {
		super(init);
		(Object as any).assign(this, init);
	}

	public createResponse() {
		return new GetUserResponse();
	}

	public getTypeName() {
		return 'GetUserRequest';
	}
}

/**
 * Gets many users
 */
// @Route("/membership/users", "GET POST")
// @Route("/{version}/membership/users", "GET POST")
// @Api(Description="Gets many users")
// @DataContract
export class GetUsersRequest
	extends CodeMashListRequestBase
	implements IReturn<GetUsersResponse> {
	/**
	 * Set true if permissions should be returned
	 */
	// @DataMember
	// @ApiMember(DataType="bool", Description="Set true if permissions should be returned", Name="IncludePermissions", ParameterType="path")
	public includePermissions: boolean;

	/**
	 * Set true if user devices should be returned
	 */
	// @DataMember
	// @ApiMember(DataType="bool", Description="Set true if user devices should be returned", Name="IncludeDevices", ParameterType="path")
	public includeDevices: boolean;

	/**
	 * Set true if user meta data should be returned
	 */
	// @DataMember
	// @ApiMember(DataType="bool", Description="Set true if user meta data should be returned", Name="IncludeMeta", ParameterType="path")
	public includeMeta: boolean;

	public constructor(init?: Partial<GetUsersRequest>) {
		super(init);
		(Object as any).assign(this, init);
	}

	public createResponse() {
		return new GetUsersResponse();
	}

	public getTypeName() {
		return 'GetUsersRequest';
	}
}

/**
 * Unblocks blocked user
 */
// @Route("/membership/users/{Id}/unblock", "PUT PATCH")
// @Route("/{version}/membership/users/{Id}/unblock", "PUT PATCH")
// @Api(Description="Unblocks blocked user")
// @DataContract
export class UnblockUserRequest extends CodeMashRequestBase {
	/**
	 * User Id
	 */
	// @DataMember
	// @ApiMember(DataType="Guid", Description="User Id", IsRequired=true, Name="Id", ParameterType="path")
	public id: string;

	public constructor(init?: Partial<UnblockUserRequest>) {
		super(init);
		(Object as any).assign(this, init);
	}
}

/**
 * Membership
 */
// @Route("/membership/users/password", "PATCH")
// @Route("/{version}/membership/users/password", "PATCH")
// @Api(Description="Membership")
// @DataContract
export class UpdatePasswordRequest extends CodeMashRequestBase {
	/**
	 * User whose password to change.
	 */
	// @DataMember
	// @ApiMember(DataType="Guid", Description="User whose password to change.", Name="UserId", ParameterType="body")
	public userId?: string;

	/**
	 * Current password
	 */
	// @DataMember
	// @ApiMember(DataType="string", Description="Current password", Name="CurrentPassword", ParameterType="body")
	public currentPassword: string;

	/**
	 * New password
	 */
	// @DataMember
	// @ApiMember(DataType="string", Description="New password", IsRequired=true, Name="Password", ParameterType="body")
	public password: string;

	/**
	 * New repeated password
	 */
	// @DataMember
	// @ApiMember(DataType="string", Description="New repeated password", IsRequired=true, Name="RepeatedPassword", ParameterType="body")
	public repeatedPassword: string;

	public constructor(init?: Partial<UpdatePasswordRequest>) {
		super(init);
		(Object as any).assign(this, init);
	}
}

/**
 * Membership
 */
// @Route("/membership/users/profile", "PATCH")
// @Route("/{version}/membership/users/profile", "PATCH")
// @Api(Description="Membership")
// @DataContract
export class UpdateProfileRequest extends CodeMashRequestBase {
	/**
	 * Guest email. Will not work for normal user.
	 */
	// @DataMember
	// @ApiMember(DataType="string", Description="Guest email. Will not work for normal user.", Name="Email", ParameterType="body")
	public email: string;

	/**
	 * Member first name
	 */
	// @DataMember
	// @ApiMember(DataType="string", Description="Member first name", Name="FirstName", ParameterType="form")
	public firstName: string;

	/**
	 * Member last name
	 */
	// @DataMember
	// @ApiMember(DataType="string", Description="Member last name", Name="LastName", ParameterType="form")
	public lastName: string;

	/**
	 * Member display name
	 */
	// @DataMember
	// @ApiMember(DataType="string", Description="Member display name", Name="DisplayName", ParameterType="form")
	public displayName: string;

	/**
	 * Meta details as JSON object
	 */
	// @DataMember
	// @ApiMember(DataType="string", Description="Meta details as JSON object", Name="Meta", ParameterType="form")
	public meta: string;

	/**
	 * Main user language
	 */
	// @DataMember
	// @ApiMember(DataType="string", Description="Main user language", Name="Language", ParameterType="form")
	public language: string;

	/**
	 * User's time zone
	 */
	// @DataMember
	// @ApiMember(DataType="string", Description="User's time zone", Name="TimeZone", ParameterType="form")
	public timeZone: string;

	/**
	 * Should user get marketing emails
	 */
	// @DataMember
	// @ApiMember(DataType="bool", Description="Should user get marketing emails", Name="SubscribeToNews", ParameterType="form")
	public subscribeToNews?: boolean;

	/**
	 * Marketing email types to unsubscribe from
	 */
	// @DataMember
	// @ApiMember(DataType="Array", Description="Marketing email types to unsubscribe from", Name="UnsubscribedNewsTags", ParameterType="form")
	public unsubscribedNewsTags: string[];

	/**
	 * User's country
	 */
	// @DataMember
	// @ApiMember(DataType="string", Description="User's country", Name="Country", ParameterType="body")
	public country: string;

	/**
	 * User's 2 letter country code
	 */
	// @DataMember
	// @ApiMember(DataType="string", Description="User's 2 letter country code", Name="CountryCode", ParameterType="body")
	public countryCode: string;

	/**
	 * User's state / province
	 */
	// @DataMember
	// @ApiMember(DataType="string", Description="User's state / province", Name="Area", ParameterType="body")
	public area: string;

	/**
	 * User's city
	 */
	// @DataMember
	// @ApiMember(DataType="string", Description="User's city", Name="City", ParameterType="body")
	public city: string;

	/**
	 * User's street address
	 */
	// @DataMember
	// @ApiMember(DataType="string", Description="User's street address", Name="Address", ParameterType="body")
	public address: string;

	/**
	 * User's secondary street address
	 */
	// @DataMember
	// @ApiMember(DataType="string", Description="User's secondary street address", Name="Address2", ParameterType="body")
	public address2: string;

	/**
	 * User's phone number
	 */
	// @DataMember
	// @ApiMember(DataType="string", Description="User's phone number", Name="Phone", ParameterType="body")
	public phone: string;

	/**
	 * User's company
	 */
	// @DataMember
	// @ApiMember(DataType="string", Description="User's company", Name="Company", ParameterType="body")
	public company: string;

	/**
	 * User's company code
	 */
	// @DataMember
	// @ApiMember(DataType="string", Description="User's company code", Name="CompanyCode", ParameterType="body")
	public companyCode: string;

	/**
	 * User's postal code
	 */
	// @DataMember
	// @ApiMember(DataType="string", Description="User's postal code", Name="PostalCode", ParameterType="body")
	public postalCode: string;

	/**
	 * User's gender
	 */
	// @DataMember
	// @ApiMember(DataType="string", Description="User's gender", Name="Gender", ParameterType="body")
	public gender: string;

	/**
	 * User's birthdate
	 */
	// @DataMember
	// @ApiMember(DataType="string", Description="User's birthdate", Name="BirthDate", ParameterType="body")
	public birthDate: string;

	public constructor(init?: Partial<UpdateProfileRequest>) {
		super(init);
		(Object as any).assign(this, init);
	}
}

/**
 * Membership
 */
// @Route("/membership/users", "PATCH PUT")
// @Route("/{version}/membership/users", "PATCH PUT")
// @Route("/membership/users/{id}", "PATCH PUT")
// @Route("/{version}/membership/users/{id}", "PATCH PUT")
// @Api(Description="Membership")
// @DataContract
export class UpdateUserRequest extends CodeMashRequestBase {
	/**
	 * User Id
	 */
	// @DataMember
	// @ApiMember(DataType="Guid", Description="User Id", IsRequired=true, Name="Id", ParameterType="body")
	public id: string;

	/**
	 * Guest email. Will not work for normal user.
	 */
	// @DataMember
	// @ApiMember(DataType="string", Description="Guest email. Will not work for normal user.", Name="Email", ParameterType="body")
	public email: string;

	/**
	 * Member first name
	 */
	// @DataMember
	// @ApiMember(DataType="string", Description="Member first name", Name="FirstName", ParameterType="body")
	public firstName: string;

	/**
	 * Member last name
	 */
	// @DataMember
	// @ApiMember(DataType="string", Description="Member last name", Name="LastName", ParameterType="body")
	public lastName: string;

	/**
	 * Member display name
	 */
	// @DataMember
	// @ApiMember(DataType="string", Description="Member display name", Name="DisplayName", ParameterType="body")
	public displayName: string;

	/**
	 * Role names to be applied
	 */
	// @DataMember
	// @ApiMember(DataType="Array", Description="Role names to be applied", Name="Roles", ParameterType="body")
	public roles: string[];

	/**
	 * Full permission tree
	 */
	// @DataMember
	// @ApiMember(DataType="Array", Description="Full permission tree", Name="RolesTree", ParameterType="body")
	public rolesTree: UserRoleUpdateInput[];

	/**
	 * Meta details as JSON object
	 */
	// @DataMember
	// @ApiMember(DataType="string", Description="Meta details as JSON object", Name="Meta", ParameterType="body")
	public meta: string;

	/**
	 * Main user language
	 */
	// @DataMember
	// @ApiMember(DataType="string", Description="Main user language", Name="Language", ParameterType="body")
	public language: string;

	/**
	 * User's time zone
	 */
	// @DataMember
	// @ApiMember(DataType="string", Description="User's time zone", Name="TimeZone", ParameterType="body")
	public timeZone: string;

	/**
	 * Should user get marketing emails
	 */
	// @DataMember
	// @ApiMember(DataType="bool", Description="Should user get marketing emails", Name="SubscribeToNews", ParameterType="body")
	public subscribeToNews?: boolean;

	/**
	 * Marketing email types to unsubscribe from
	 */
	// @DataMember
	// @ApiMember(DataType="Array", Description="Marketing email types to unsubscribe from", Name="UnsubscribedNewsTags", ParameterType="body")
	public unsubscribedNewsTags: string[];

	/**
	 * User's country
	 */
	// @DataMember
	// @ApiMember(DataType="string", Description="User's country", Name="Country", ParameterType="body")
	public country: string;

	/**
	 * User's 2 letter country code
	 */
	// @DataMember
	// @ApiMember(DataType="string", Description="User's 2 letter country code", Name="CountryCode", ParameterType="body")
	public countryCode: string;

	/**
	 * User's state / province
	 */
	// @DataMember
	// @ApiMember(DataType="string", Description="User's state / province", Name="Area", ParameterType="body")
	public area: string;

	/**
	 * User's city
	 */
	// @DataMember
	// @ApiMember(DataType="string", Description="User's city", Name="City", ParameterType="body")
	public city: string;

	/**
	 * User's street address
	 */
	// @DataMember
	// @ApiMember(DataType="string", Description="User's street address", Name="Address", ParameterType="body")
	public address: string;

	/**
	 * User's secondary street address
	 */
	// @DataMember
	// @ApiMember(DataType="string", Description="User's secondary street address", Name="Address2", ParameterType="body")
	public address2: string;

	/**
	 * User's phone number
	 */
	// @DataMember
	// @ApiMember(DataType="string", Description="User's phone number", Name="Phone", ParameterType="body")
	public phone: string;

	/**
	 * User's company
	 */
	// @DataMember
	// @ApiMember(DataType="string", Description="User's company", Name="Company", ParameterType="body")
	public company: string;

	/**
	 * User's company code
	 */
	// @DataMember
	// @ApiMember(DataType="string", Description="User's company code", Name="CompanyCode", ParameterType="body")
	public companyCode: string;

	/**
	 * User's postal code
	 */
	// @DataMember
	// @ApiMember(DataType="string", Description="User's postal code", Name="PostalCode", ParameterType="body")
	public postalCode: string;

	/**
	 * User's gender
	 */
	// @DataMember
	// @ApiMember(DataType="string", Description="User's gender", Name="Gender", ParameterType="body")
	public gender: string;

	/**
	 * User's birthdate
	 */
	// @DataMember
	// @ApiMember(DataType="string", Description="User's birthdate", Name="BirthDate", ParameterType="body")
	public birthDate: string;

	/**
	 * User's zone
	 */
	// @DataMember
	// @ApiMember(DataType="string", Description="User's zone", Name="Zone", ParameterType="body")
	public zone: string;

	public constructor(init?: Partial<UpdateUserRequest>) {
		super(init);
		(Object as any).assign(this, init);
	}
}

/**
 * Membership
 */
// @Route("/membership/users/invite", "POST")
// @Route("/{version}/membership/users/invite", "POST")
// @Api(Description="Membership")
// @DataContract
export class InviteUserRequest extends CodeMashRequestBase {
	/**
	 * Member display name
	 */
	// @DataMember
	// @ApiMember(DataType="string", Description="Member display name", Name="DisplayName", ParameterType="form")
	public displayName: string;

	/**
	 * Email address
	 */
	// @DataMember
	// @ApiMember(DataType="string", Description="Email address", IsRequired=true, Name="Email", ParameterType="form")
	public email: string;

	/**
	 * Member first name
	 */
	// @DataMember
	// @ApiMember(DataType="string", Description="Member first name", Name="FirstName", ParameterType="form")
	public firstName: string;

	/**
	 * Member last name
	 */
	// @DataMember
	// @ApiMember(DataType="string", Description="Member last name", Name="LastName", ParameterType="form")
	public lastName: string;

	/**
	 * Role names to be applied
	 */
	// @DataMember
	// @ApiMember(DataType="Array", Description="Role names to be applied", Name="Roles", ParameterType="form")
	public roles: string[];

	/**
	 * Full permission tree
	 */
	// @DataMember
	// @ApiMember(DataType="Array", Description="Full permission tree", Name="RolesTree", ParameterType="body")
	public rolesTree: UserRoleUpdateInput[];

	/**
	 * Meta details as JSON object
	 */
	// @DataMember
	// @ApiMember(DataType="string", Description="Meta details as JSON object", Name="Meta", ParameterType="form")
	public meta: string;

	/**
	 * Main user language
	 */
	// @DataMember
	// @ApiMember(DataType="string", Description="Main user language", Name="Language", ParameterType="form")
	public language: string;

	/**
	 * User's time zone
	 */
	// @DataMember
	// @ApiMember(DataType="string", Description="User's time zone", Name="TimeZone", ParameterType="form")
	public timeZone: string;

	/**
	 * Should user get marketing emails
	 */
	// @DataMember
	// @ApiMember(DataType="bool", Description="Should user get marketing emails", Name="SubscribeToNews", ParameterType="form")
	public subscribeToNews?: boolean;

	/**
	 * User's country
	 */
	// @DataMember
	// @ApiMember(DataType="string", Description="User's country", Name="Country", ParameterType="body")
	public country: string;

	/**
	 * User's 2 letter country code
	 */
	// @DataMember
	// @ApiMember(DataType="string", Description="User's 2 letter country code", Name="CountryCode", ParameterType="body")
	public countryCode: string;

	/**
	 * User's state / province
	 */
	// @DataMember
	// @ApiMember(DataType="string", Description="User's state / province", Name="Area", ParameterType="body")
	public area: string;

	/**
	 * User's city
	 */
	// @DataMember
	// @ApiMember(DataType="string", Description="User's city", Name="City", ParameterType="body")
	public city: string;

	/**
	 * User's street address
	 */
	// @DataMember
	// @ApiMember(DataType="string", Description="User's street address", Name="Address", ParameterType="body")
	public address: string;

	/**
	 * User's secondary street address
	 */
	// @DataMember
	// @ApiMember(DataType="string", Description="User's secondary street address", Name="Address2", ParameterType="body")
	public address2: string;

	/**
	 * User's phone number
	 */
	// @DataMember
	// @ApiMember(DataType="string", Description="User's phone number", Name="Phone", ParameterType="body")
	public phone: string;

	/**
	 * User's company
	 */
	// @DataMember
	// @ApiMember(DataType="string", Description="User's company", Name="Company", ParameterType="body")
	public company: string;

	/**
	 * User's company code
	 */
	// @DataMember
	// @ApiMember(DataType="string", Description="User's company code", Name="CompanyCode", ParameterType="body")
	public companyCode: string;

	/**
	 * User's postal code
	 */
	// @DataMember
	// @ApiMember(DataType="string", Description="User's postal code", Name="PostalCode", ParameterType="body")
	public postalCode: string;

	/**
	 * User's gender
	 */
	// @DataMember
	// @ApiMember(DataType="string", Description="User's gender", Name="Gender", ParameterType="body")
	public gender: string;

	/**
	 * User's birthdate
	 */
	// @DataMember
	// @ApiMember(DataType="string", Description="User's birthdate", Name="BirthDate", ParameterType="body")
	public birthDate: string;

	/**
	 * User's zone
	 */
	// @DataMember
	// @ApiMember(DataType="string", Description="User's zone", Name="Zone", ParameterType="body")
	public zone: string;

	public constructor(init?: Partial<InviteUserRequest>) {
		super(init);
		(Object as any).assign(this, init);
	}
}

/**
 * Membership
 */
// @Route("/membership/users/register/guest", "POST")
// @Route("/{version}/membership/users/register/guest", "POST")
// @Api(Description="Membership")
// @DataContract
export class RegisterGuestUserRequest
	extends CodeMashRequestBase
	implements IReturn<RegisterGuestUserResponse> {
	/**
	 * Member display name
	 */
	// @DataMember
	// @ApiMember(DataType="string", Description="Member display name", Name="DisplayName", ParameterType="body")
	public displayName: string;

	/**
	 * Email address
	 */
	// @DataMember
	// @ApiMember(DataType="string", Description="Email address", IsRequired=true, Name="Email", ParameterType="body")
	public email: string;

	/**
	 * Member first name
	 */
	// @DataMember
	// @ApiMember(DataType="string", Description="Member first name", Name="FirstName", ParameterType="body")
	public firstName: string;

	/**
	 * Member last name
	 */
	// @DataMember
	// @ApiMember(DataType="string", Description="Member last name", Name="LastName", ParameterType="body")
	public lastName: string;

	/**
	 * Meta details as JSON object
	 */
	// @DataMember
	// @ApiMember(DataType="string", Description="Meta details as JSON object", Name="Meta", ParameterType="body")
	public meta: string;

	/**
	 * Main user language
	 */
	// @DataMember
	// @ApiMember(DataType="string", Description="Main user language", Name="Language", ParameterType="body")
	public language: string;

	/**
	 * User's time zone
	 */
	// @DataMember
	// @ApiMember(DataType="string", Description="User's time zone", Name="TimeZone", ParameterType="body")
	public timeZone: string;

	/**
	 * Should user get marketing emails
	 */
	// @DataMember
	// @ApiMember(DataType="bool", Description="Should user get marketing emails", Name="SubscribeToNews", ParameterType="body")
	public subscribeToNews?: boolean;

	/**
	 * User's country
	 */
	// @DataMember
	// @ApiMember(DataType="string", Description="User's country", Name="Country", ParameterType="body")
	public country: string;

	/**
	 * User's 2 letter country code
	 */
	// @DataMember
	// @ApiMember(DataType="string", Description="User's 2 letter country code", Name="CountryCode", ParameterType="body")
	public countryCode: string;

	/**
	 * User's state / province
	 */
	// @DataMember
	// @ApiMember(DataType="string", Description="User's state / province", Name="Area", ParameterType="body")
	public area: string;

	/**
	 * User's city
	 */
	// @DataMember
	// @ApiMember(DataType="string", Description="User's city", Name="City", ParameterType="body")
	public city: string;

	/**
	 * User's street address
	 */
	// @DataMember
	// @ApiMember(DataType="string", Description="User's street address", Name="Address", ParameterType="body")
	public address: string;

	/**
	 * User's secondary street address
	 */
	// @DataMember
	// @ApiMember(DataType="string", Description="User's secondary street address", Name="Address2", ParameterType="body")
	public address2: string;

	/**
	 * User's phone number
	 */
	// @DataMember
	// @ApiMember(DataType="string", Description="User's phone number", Name="Phone", ParameterType="body")
	public phone: string;

	/**
	 * User's company
	 */
	// @DataMember
	// @ApiMember(DataType="string", Description="User's company", Name="Company", ParameterType="body")
	public company: string;

	/**
	 * User's company code
	 */
	// @DataMember
	// @ApiMember(DataType="string", Description="User's company code", Name="CompanyCode", ParameterType="body")
	public companyCode: string;

	/**
	 * User's postal code
	 */
	// @DataMember
	// @ApiMember(DataType="string", Description="User's postal code", Name="PostalCode", ParameterType="body")
	public postalCode: string;

	/**
	 * User's gender
	 */
	// @DataMember
	// @ApiMember(DataType="string", Description="User's gender", Name="Gender", ParameterType="body")
	public gender: string;

	/**
	 * User's birthdate
	 */
	// @DataMember
	// @ApiMember(DataType="string", Description="User's birthdate", Name="BirthDate", ParameterType="body")
	public birthDate: string;

	/**
	 * Full permission tree
	 */
	// @DataMember
	// @ApiMember(DataType="Array", Description="Full permission tree", Name="RolesTree", ParameterType="body")
	public rolesTree: UserRoleUpdateInput[];

	/**
	 * User's zone
	 */
	// @DataMember
	// @ApiMember(DataType="string", Description="User's zone", Name="Zone", ParameterType="body")
	public zone: string;

	public constructor(init?: Partial<RegisterGuestUserRequest>) {
		super(init);
		(Object as any).assign(this, init);
	}

	public createResponse() {
		return new RegisterGuestUserResponse();
	}

	public getTypeName() {
		return 'RegisterGuestUserRequest';
	}
}

/**
 * Membership
 */
// @Route("/membership/users/register", "POST")
// @Route("/{version}/membership/users/register", "POST")
// @Api(Description="Membership")
// @DataContract
export class RegisterUserRequest extends CodeMashRequestBase {
	/**
	 * Member display name
	 */
	// @DataMember
	// @ApiMember(DataType="string", Description="Member display name", Name="DisplayName", ParameterType="body")
	public displayName: string;

	/**
	 * Email address
	 */
	// @DataMember
	// @ApiMember(DataType="string", Description="Email address", Name="Email", ParameterType="body")
	public email: string;

	/**
	 * Username
	 */
	// @DataMember
	// @ApiMember(DataType="string", Description="Username", Name="UserName", ParameterType="body")
	public userName: string;

	/**
	 * Member first name
	 */
	// @DataMember
	// @ApiMember(DataType="string", Description="Member first name", Name="FirstName", ParameterType="body")
	public firstName: string;

	/**
	 * Member last name
	 */
	// @DataMember
	// @ApiMember(DataType="string", Description="Member last name", Name="LastName", ParameterType="body")
	public lastName: string;

	/**
	 * Password
	 */
	// @DataMember
	// @ApiMember(DataType="string", Description="Password", IsRequired=true, Name="Password", ParameterType="body")
	public password: string;

	/**
	 * Role names to be applied
	 */
	// @DataMember
	// @ApiMember(DataType="Array", Description="Role names to be applied", Name="Roles", ParameterType="body")
	public roles: string[];

	/**
	 * Full permission tree
	 */
	// @DataMember
	// @ApiMember(DataType="Array", Description="Full permission tree", Name="RolesTree", ParameterType="body")
	public rolesTree: UserRoleUpdateInput[];

	/**
	 * Login immediately ?
	 */
	// @DataMember
	// @ApiMember(DataType="bool", Description="Login immediately ?", Name="AutoLogin", ParameterType="body")
	public autoLogin: boolean;

	/**
	 * Meta details as JSON object
	 */
	// @DataMember
	// @ApiMember(DataType="string", Description="Meta details as JSON object", Name="Meta", ParameterType="body")
	public meta: string;

	/**
	 * Main user language
	 */
	// @DataMember
	// @ApiMember(DataType="string", Description="Main user language", Name="Language", ParameterType="body")
	public language: string;

	/**
	 * User's time zone
	 */
	// @DataMember
	// @ApiMember(DataType="string", Description="User's time zone", Name="TimeZone", ParameterType="body")
	public timeZone: string;

	/**
	 * Should user get marketing emails
	 */
	// @DataMember
	// @ApiMember(DataType="bool", Description="Should user get marketing emails", Name="SubscribeToNews", ParameterType="body")
	public subscribeToNews?: boolean;

	/**
	 * User's country
	 */
	// @DataMember
	// @ApiMember(DataType="string", Description="User's country", Name="Country", ParameterType="body")
	public country: string;

	/**
	 * User's 2 letter country code
	 */
	// @DataMember
	// @ApiMember(DataType="string", Description="User's 2 letter country code", Name="CountryCode", ParameterType="body")
	public countryCode: string;

	/**
	 * User's state / province
	 */
	// @DataMember
	// @ApiMember(DataType="string", Description="User's state / province", Name="Area", ParameterType="body")
	public area: string;

	/**
	 * User's city
	 */
	// @DataMember
	// @ApiMember(DataType="string", Description="User's city", Name="City", ParameterType="body")
	public city: string;

	/**
	 * User's street address
	 */
	// @DataMember
	// @ApiMember(DataType="string", Description="User's street address", Name="Address", ParameterType="body")
	public address: string;

	/**
	 * User's secondary street address
	 */
	// @DataMember
	// @ApiMember(DataType="string", Description="User's secondary street address", Name="Address2", ParameterType="body")
	public address2: string;

	/**
	 * User's phone number
	 */
	// @DataMember
	// @ApiMember(DataType="string", Description="User's phone number", Name="Phone", ParameterType="body")
	public phone: string;

	/**
	 * User's company
	 */
	// @DataMember
	// @ApiMember(DataType="string", Description="User's company", Name="Company", ParameterType="body")
	public company: string;

	/**
	 * User's company code
	 */
	// @DataMember
	// @ApiMember(DataType="string", Description="User's company code", Name="CompanyCode", ParameterType="body")
	public companyCode: string;

	/**
	 * User's postal code
	 */
	// @DataMember
	// @ApiMember(DataType="string", Description="User's postal code", Name="PostalCode", ParameterType="body")
	public postalCode: string;

	/**
	 * User's gender
	 */
	// @DataMember
	// @ApiMember(DataType="string", Description="User's gender", Name="Gender", ParameterType="body")
	public gender: string;

	/**
	 * User's birthdate
	 */
	// @DataMember
	// @ApiMember(DataType="string", Description="User's birthdate", Name="BirthDate", ParameterType="body")
	public birthDate: string;

	/**
	 * User's zone
	 */
	// @DataMember
	// @ApiMember(DataType="string", Description="User's zone", Name="Zone", ParameterType="body")
	public zone: string;

	public constructor(init?: Partial<RegisterUserRequest>) {
		super(init);
		(Object as any).assign(this, init);
	}
}

/**
 * Membership
 */
// @Route("/membership/users/password/reset/token", "GET")
// @Route("/{version}/membership/users/password/reset/token", "GET")
// @Api(Description="Membership")
// @DataContract
export class ValidatePasswordTokenRequest
	extends RequestBase
	implements IReturn<ValidatePasswordTokenResponse> {
	/**
	 * Secret token received by email for password reset
	 */
	// @DataMember
	// @ApiMember(DataType="string", Description="Secret token received by email for password reset", IsRequired=true, Name="Token", ParameterType="query")
	public token: string;

	/**
	 * If true, includes project details in response
	 */
	// @DataMember
	// @ApiMember(DataType="bool", Description="If true, includes project details in response", IsRequired=true, Name="IncludeProject", ParameterType="query")
	public includeProject: boolean;

	public constructor(init?: Partial<ValidatePasswordTokenRequest>) {
		super(init);
		(Object as any).assign(this, init);
	}

	public createResponse() {
		return new ValidatePasswordTokenResponse();
	}

	public getTypeName() {
		return 'ValidatePasswordTokenRequest';
	}
}

/**
 * Membership
 */
// @Route("/membership/users/password/reset/token", "POST")
// @Route("/{version}/membership/users/password/reset/token", "POST")
// @Api(Description="Membership")
// @DataContract
export class CreatePasswordResetRequest
	extends CodeMashRequestBase
	implements IReturn<CreatePasswordResetResponse> {
	/**
	 * User login email
	 */
	// @DataMember
	// @ApiMember(DataType="string", Description="User login email", IsRequired=true, Name="Email", ParameterType="body")
	public email: string;

	public constructor(init?: Partial<CreatePasswordResetRequest>) {
		super(init);
		(Object as any).assign(this, init);
	}

	public createResponse() {
		return new CreatePasswordResetResponse();
	}

	public getTypeName() {
		return 'CreatePasswordResetRequest';
	}
}

/**
 * Membership
 */
// @Route("/membership/users/password/reset", "POST")
// @Route("/{version}/membership/users/password/reset", "POST")
// @Api(Description="Membership")
// @DataContract
export class ResetPasswordRequest extends RequestBase {
	/**
	 * Secret token received by email for password reset
	 */
	// @DataMember
	// @ApiMember(DataType="string", Description="Secret token received by email for password reset", IsRequired=true, Name="Token", ParameterType="body")
	public token: string;

	/**
	 * New user password
	 */
	// @DataMember
	// @ApiMember(DataType="string", Description="New user password", IsRequired=true, Name="Password", ParameterType="body")
	public password: string;

	/**
	 * New repeated user password
	 */
	// @DataMember
	// @ApiMember(DataType="string", Description="New repeated user password", IsRequired=true, Name="RepeatedPassword", ParameterType="body")
	public repeatedPassword: string;

	public constructor(init?: Partial<ResetPasswordRequest>) {
		super(init);
		(Object as any).assign(this, init);
	}
}

/**
 * Membership
 */
// @Route("/membership/users/invitation/token", "GET")
// @Route("/{version}/membership/users/invitation/token", "GET")
// @Api(Description="Membership")
// @DataContract
export class ValidateInvitationTokenRequest
	extends RequestBase
	implements IReturn<ValidateInvitationTokenResponse> {
	/**
	 * Secret token received by email for invitation
	 */
	// @DataMember
	// @ApiMember(DataType="string", Description="Secret token received by email for invitation", IsRequired=true, Name="Token", ParameterType="query")
	public token: string;

	/**
	 * If true, includes project details in response
	 */
	// @DataMember
	// @ApiMember(DataType="bool", Description="If true, includes project details in response", IsRequired=true, Name="IncludeProject", ParameterType="query")
	public includeProject: boolean;

	public constructor(init?: Partial<ValidateInvitationTokenRequest>) {
		super(init);
		(Object as any).assign(this, init);
	}

	public createResponse() {
		return new ValidateInvitationTokenResponse();
	}

	public getTypeName() {
		return 'ValidateInvitationTokenRequest';
	}
}

/**
 * Membership
 */
// @Route("/membership/users/verify", "POST")
// @Route("/{version}/membership/users/verify", "POST")
// @Api(Description="Membership")
// @DataContract
export class VerifyUserRequest extends RequestBase {
	/**
	 * Secret token received by email for registration confirmation
	 */
	// @DataMember
	// @ApiMember(DataType="string", Description="Secret token received by email for registration confirmation", IsRequired=true, Name="Token", ParameterType="body")
	public token: string;

	public constructor(init?: Partial<VerifyUserRequest>) {
		super(init);
		(Object as any).assign(this, init);
	}
}

/**
 * Membership
 */
// @Route("/membership/users/invitation/verify", "POST")
// @Route("/{version}/membership/users/invitation/verify", "POST")
// @Api(Description="Membership")
// @DataContract
export class VerifyUserInvitationRequest extends RequestBase {
	/**
	 * Secret token received by email for invitation confirmation
	 */
	// @DataMember
	// @ApiMember(DataType="string", Description="Secret token received by email for invitation confirmation", IsRequired=true, Name="Token", ParameterType="body")
	public token: string;

	/**
	 * New user password
	 */
	// @DataMember
	// @ApiMember(DataType="string", Description="New user password", IsRequired=true, Name="Password", ParameterType="body")
	public password: string;

	/**
	 * New repeated user password
	 */
	// @DataMember
	// @ApiMember(DataType="string", Description="New repeated user password", IsRequired=true, Name="RepeatedPassword", ParameterType="body")
	public repeatedPassword: string;

	public constructor(init?: Partial<VerifyUserInvitationRequest>) {
		super(init);
		(Object as any).assign(this, init);
	}
}

/**
 * Deletes an email from queue
 */
// @Route("/notifications/email/{id}", "DELETE")
// @Route("/{version}/notifications/email/{id}", "DELETE")
// @Route("/{version}/notifications/emails/{id}", "DELETE")
// @Api(Description="Deletes an email from queue")
// @DataContract
export class DeleteEmailRequest
	extends CodeMashRequestBase
	implements IReturn<DeleteEmailResponse> {
	/**
	 * ID of an email to delete
	 */
	// @DataMember
	// @ApiMember(DataType="string", Description="ID of an email to delete", IsRequired=true, Name="Id", ParameterType="path")
	public id: string;

	public constructor(init?: Partial<DeleteEmailRequest>) {
		super(init);
		(Object as any).assign(this, init);
	}

	public createResponse() {
		return new DeleteEmailResponse();
	}

	public getTypeName() {
		return 'DeleteEmailRequest';
	}
}

/**
 * Sends an email message
 */
// @Route("/notifications/email", "POST")
// @Route("/{version}/notifications/email", "POST")
// @Api(Description="Sends an email message")
// @DataContract
export class SendEmailRequest extends CodeMashRequestBase {
	/**
	 * ID of a template to use
	 */
	// @DataMember
	// @ApiMember(DataType="Guid", Description="ID of a template to use", IsRequired=true, Name="TemplateId", ParameterType="body")
	public templateId: string;

	/**
	 * Recipients' email addresses. Emails, Users or Roles are required.
	 */
	// @DataMember
	// @ApiMember(DataType="Array", Description="Recipients' email addresses. Emails, Users or Roles are required.", Name="Emails", ParameterType="body")
	public emails: string[];

	/**
	 * Recipients' user IDs. Emails, Users or Roles are required.
	 */
	// @DataMember
	// @ApiMember(DataType="Array", Description="Recipients' user IDs. Emails, Users or Roles are required.", Name="Users", ParameterType="body")
	public users: string[];

	/**
	 * Recipients' roles. Emails, Users or Roles are required.
	 */
	// @DataMember
	// @ApiMember(DataType="Array", Description="Recipients' roles. Emails, Users or Roles are required.", Name="Roles", ParameterType="body")
	public roles: string[];

	/**
	 * CC recipients' email addresses
	 */
	// @DataMember
	// @ApiMember(DataType="Array", Description="CC recipients' email addresses", Name="CcEmails", ParameterType="body")
	public ccEmails: string[];

	/**
	 * CC recipients' user IDs
	 */
	// @DataMember
	// @ApiMember(DataType="Array", Description="CC recipients' user IDs", Name="CcUsers", ParameterType="body")
	public ccUsers: string[];

	/**
	 * BCC recipients' email addresses
	 */
	// @DataMember
	// @ApiMember(DataType="Array", Description="BCC recipients' email addresses", Name="BccEmails", ParameterType="body")
	public bccEmails: string[];

	/**
	 * BCC recipients' user IDs
	 */
	// @DataMember
	// @ApiMember(DataType="Array", Description="BCC recipients' user IDs", Name="BccUsers", ParameterType="body")
	public bccUsers: string[];

	/**
	 * Custom tokens to inject into template
	 */
	// @DataMember
	// @ApiMember(DataType="Object", Description="Custom tokens to inject into template", Name="Tokens", ParameterType="body")
	public tokens: {[index: string]: string};

	/**
	 * Amount of milliseconds to postpone sending the email
	 */
	// @DataMember
	// @ApiMember(DataType="long", Description="Amount of milliseconds to postpone sending the email", Name="Postpone", ParameterType="body")
	public postpone?: number;

	/**
	 * If true, sends an email by recipient's time zone. Postpone needs to be set for this to have an effect. Requires Users or Roles recipients. Default - true
	 */
	// @DataMember
	// @ApiMember(DataType="bool", Description="If true, sends an email by recipient's time zone. Postpone needs to be set for this to have an effect. Requires Users or Roles recipients. Default - true", Name="RespectTimeZone", ParameterType="body")
	public respectTimeZone: boolean;

	/**
	 * If true, will try to send an email using a language from CultureCode instead of user's language
	 */
	// @DataMember
	// @ApiMember(DataType="bool", Description="If true, will try to send an email using a language from CultureCode instead of user's language", Name="ForceRequestLanguage", ParameterType="body")
	public forceRequestLanguage: boolean;

	/**
	 * File IDs to attach to email message
	 */
	// @DataMember
	// @ApiMember(DataType="Array", Description="File IDs to attach to email message", Name="Attachments", ParameterType="body")
	public attachments: string[];

	public constructor(init?: Partial<SendEmailRequest>) {
		super(init);
		(Object as any).assign(this, init);
	}
}

/**
 * Registers notification device which can receive push notifications
 */
// @Route("/notifications/push/devices", "POST")
// @Route("/{version}/notifications/push/devices", "POST")
// @Api(Description="Registers notification device which can receive push notifications")
// @DataContract
export class CreateDeviceRequest
	extends CodeMashRequestBase
	implements IReturn<CreateDeviceResponse> {
	/**
	 * UserId. Parameter can be nullable, but if you provide it, device will be combined with the one of membership users.
	 */
	// @DataMember
	// @ApiMember(DataType="Guid", Description="UserId. Parameter can be nullable, but if you provide it, device will be combined with the one of membership users.", Name="UserId", ParameterType="form")
	public userId?: string;

	/**
	 * Device operating system
	 */
	// @DataMember
	// @ApiMember(DataType="string", Description="Device operating system", Name="OperatingSystem", ParameterType="body")
	public operatingSystem: string;

	/**
	 * Device brand
	 */
	// @DataMember
	// @ApiMember(DataType="string", Description="Device brand", Name="Brand", ParameterType="body")
	public brand: string;

	/**
	 * Device name
	 */
	// @DataMember
	// @ApiMember(DataType="string", Description="Device name", Name="DeviceName", ParameterType="body")
	public deviceName: string;

	/**
	 * Device timezone, expects to get a TZ database name
	 */
	// @DataMember
	// @ApiMember(DataType="string", Description="Device timezone, expects to get a TZ database name", Name="TimeZone", ParameterType="body")
	public timeZone: string;

	/**
	 * Device language, expects to get a 2 letter identifier
	 */
	// @DataMember
	// @ApiMember(DataType="string", Description="Device language, expects to get a 2 letter identifier", Name="Language", ParameterType="body")
	public language: string;

	/**
	 * Device locale
	 */
	// @DataMember
	// @ApiMember(DataType="string", Description="Device locale", Name="Locale", ParameterType="body")
	public locale: string;

	/**
	 * Meta information that comes from device.
	 */
	// @DataMember
	// @ApiMember(DataType="Dictionary", Description="Meta information that comes from device.", Name="Meta", ParameterType="body")
	public meta: {[index: string]: string};

	public constructor(init?: Partial<CreateDeviceRequest>) {
		super(init);
		(Object as any).assign(this, init);
	}

	public createResponse() {
		return new CreateDeviceResponse();
	}

	public getTypeName() {
		return 'CreateDeviceRequest';
	}
}

/**
 * Deletes the device from push notifications recipients list.
 */
// @Route("/notifications/push/devices/{Id}", "DELETE")
// @Route("/{version}/notifications/push/devices/{Id}", "DELETE")
// @Api(Description="Deletes the device from push notifications recipients list.")
// @DataContract
export class DeleteDeviceRequest extends CodeMashRequestBase {
	/**
	 * Device Id or device key
	 */
	// @DataMember
	// @ApiMember(DataType="Guid", Description="Device Id or device key", IsRequired=true, Name="Id", ParameterType="path")
	public id: string;

	public constructor(init?: Partial<DeleteDeviceRequest>) {
		super(init);
		(Object as any).assign(this, init);
	}
}

/**
 * Gets the device which can receive push notifications.
 */
// @Route("/notifications/push/devices/{Id}", "GET")
// @Route("/{version}/notifications/push/devices/{Id}", "GET")
// @Api(Description="Gets the device which can receive push notifications.")
// @DataContract
export class GetDeviceRequest
	extends CodeMashRequestBase
	implements IReturn<GetDeviceResponse> {
	/**
	 * Device Id or device key
	 */
	// @DataMember
	// @ApiMember(DataType="Guid", Description="Device Id or device key", IsRequired=true, Name="Id", ParameterType="path")
	public id: string;

	public constructor(init?: Partial<GetDeviceRequest>) {
		super(init);
		(Object as any).assign(this, init);
	}

	public createResponse() {
		return new GetDeviceResponse();
	}

	public getTypeName() {
		return 'GetDeviceRequest';
	}
}

/**
 * Gets mobile devices
 */
// @Route("/notifications/push/devices", "GET")
// @Route("/{version}/notifications/push/devices", "GET")
// @Api(Description="Gets mobile devices")
// @DataContract
export class GetDevicesRequest
	extends CodeMashListRequestBase
	implements IReturn<GetDevicesResponse> {
	/**
	 * User ID of who's devices to get.
	 */
	// @DataMember
	// @ApiMember(DataType="Guid", Description="User ID of who's devices to get.", Name="UserId", ParameterType="query")
	public userId?: string;

	public constructor(init?: Partial<GetDevicesRequest>) {
		super(init);
		(Object as any).assign(this, init);
	}

	public createResponse() {
		return new GetDevicesResponse();
	}

	public getTypeName() {
		return 'GetDevicesRequest';
	}
}

/**
 * Deletes push notification token
 */
// @Route("/notifications/push/devices/{Id}/token", "DELETE")
// @Route("/{version}/notifications/push/devices/{Id}/token", "DELETE")
// @Api(Description="Deletes push notification token")
// @DataContract
export class DeleteDeviceTokenRequest
	extends CodeMashRequestBase
	implements IReturn<DeleteDeviceTokenResponse> {
	/**
	 * Device Id
	 */
	// @DataMember
	// @ApiMember(DataType="Guid", Description="Device Id", IsRequired=true, Name="Id", ParameterType="path")
	public id: string;

	/**
	 * Device key
	 */
	// @DataMember
	// @ApiMember(DataType="string", Description="Device key", Name="DeviceKey", ParameterType="query")
	public deviceKey: string;

	public constructor(init?: Partial<DeleteDeviceTokenRequest>) {
		super(init);
		(Object as any).assign(this, init);
	}

	public createResponse() {
		return new DeleteDeviceTokenResponse();
	}

	public getTypeName() {
		return 'DeleteDeviceTokenRequest';
	}
}

/**
 * Registers One Signal push notification token
 */
// @Route("/notifications/push/devices/token", "POST")
// @Route("/{version}/notifications/push/devices/token", "POST")
// @Api(Description="Registers One Signal push notification token")
// @DataContract
export class RegisterDeviceTokenRequest
	extends CodeMashRequestBase
	implements IReturn<RegisterDeviceTokenResponse> {
	/**
	 * Notification provider. Can be "Expo", "OneSignal", "Firebase"
	 */
	// @DataMember
	// @ApiMember(DataType="string", Description="Notification provider. Can be \"Expo\", \"OneSignal\", \"Firebase\"", Name="Provider", ParameterType="body")
	public provider: string;

	/**
	 * Push account ID. If you have more than 1 account for provider pass this instead.
	 */
	// @DataMember
	// @ApiMember(DataType="Guid", Description="Push account ID. If you have more than 1 account for provider pass this instead.", Name="AccountId", ParameterType="body")
	public accountId?: string;

	/**
	 * Identifier for device depending on provider (device ID, player ID)
	 */
	// @DataMember
	// @ApiMember(DataType="string", Description="Identifier for device depending on provider (device ID, player ID)", IsRequired=true, Name="Token", ParameterType="body")
	public token: string;

	/**
	 * User ID to attach this token to.
	 */
	// @DataMember
	// @ApiMember(DataType="Guid", Description="User ID to attach this token to.", Name="UserId", ParameterType="body")
	public userId?: string;

	/**
	 * Device ID to attach this token to. New device will be created if this is null.
	 */
	// @DataMember
	// @ApiMember(DataType="Guid", Description="Device ID to attach this token to. New device will be created if this is null.", Name="DeviceId", ParameterType="body")
	public deviceId?: string;

	/**
	 * Device operating system
	 */
	// @DataMember
	// @ApiMember(DataType="string", Description="Device operating system", Name="OperatingSystem", ParameterType="body")
	public operatingSystem: string;

	/**
	 * Device brand
	 */
	// @DataMember
	// @ApiMember(DataType="string", Description="Device brand", Name="Brand", ParameterType="body")
	public brand: string;

	/**
	 * Device name
	 */
	// @DataMember
	// @ApiMember(DataType="string", Description="Device name", Name="DeviceName", ParameterType="body")
	public deviceName: string;

	/**
	 * Device timezone, expects to get a TZ database name
	 */
	// @DataMember
	// @ApiMember(DataType="string", Description="Device timezone, expects to get a TZ database name", Name="TimeZone", ParameterType="body")
	public timeZone: string;

	/**
	 * Device language, expects to get a 2 letter identifier
	 */
	// @DataMember
	// @ApiMember(DataType="string", Description="Device language, expects to get a 2 letter identifier", Name="Language", ParameterType="body")
	public language: string;

	/**
	 * Device locale
	 */
	// @DataMember
	// @ApiMember(DataType="string", Description="Device locale", Name="Locale", ParameterType="body")
	public locale: string;

	/**
	 * Other device information
	 */
	// @DataMember
	// @ApiMember(DataType="Dictionary", Description="Other device information", Name="Meta", ParameterType="body")
	public meta: {[index: string]: string};

	public constructor(init?: Partial<RegisterDeviceTokenRequest>) {
		super(init);
		(Object as any).assign(this, init);
	}

	public createResponse() {
		return new RegisterDeviceTokenResponse();
	}

	public getTypeName() {
		return 'RegisterDeviceTokenRequest';
	}
}

/**
 * Registers expo push notification token
 */
// @Route("/notifications/push/token/expo", "POST")
// @Route("/{version}/notifications/push/token/expo", "POST")
// @Api(Description="Registers expo push notification token")
// @DataContract
export class RegisterDeviceExpoTokenRequest
	extends CodeMashRequestBase
	implements IReturn<RegisterDeviceExpoTokenResponse> {
	/**
	 * User Id
	 */
	// @DataMember
	// @ApiMember(DataType="Guid", Description="User Id", Name="UserId", ParameterType="form")
	public userId?: string;

	/**
	 * Device Id
	 */
	// @DataMember
	// @ApiMember(DataType="Guid", Description="Device Id", Name="DeviceId", ParameterType="form")
	public deviceId?: string;

	/**
	 * Token
	 */
	// @DataMember
	// @ApiMember(DataType="string", Description="Token", IsRequired=true, Name="Token", ParameterType="form")
	public token: string;

	/**
	 * TimeZone
	 */
	// @DataMember
	// @ApiMember(DataType="string", Description="TimeZone", Name="TimeZone", ParameterType="form")
	public timeZone: string;

	/**
	 * Meta information that comes from device.
	 */
	// @DataMember
	// @ApiMember(DataType="Dictionary", Description="Meta information that comes from device.", Name="Meta", ParameterType="body")
	public meta: {[index: string]: string};

	public constructor(init?: Partial<RegisterDeviceExpoTokenRequest>) {
		super(init);
		(Object as any).assign(this, init);
	}

	public createResponse() {
		return new RegisterDeviceExpoTokenResponse();
	}

	public getTypeName() {
		return 'RegisterDeviceExpoTokenRequest';
	}
}

/**
 * Updates device details
 */
// @Route("/notifications/push/devices/{Id}", "PATCH")
// @Route("/{version}/notifications/push/devices/{Id}", "PATCH")
// @Api(Description="Updates device details")
// @DataContract
export class UpdateDeviceRequest extends CodeMashRequestBase {
	/**
	 * Device id or device key
	 */
	// @DataMember
	// @ApiMember(DataType="Guid", Description="Device id or device key", IsRequired=true, Name="Id", ParameterType="path")
	public id: string;

	/**
	 * Device operating system
	 */
	// @DataMember
	// @ApiMember(DataType="string", Description="Device operating system", Name="OperatingSystem", ParameterType="body")
	public operatingSystem: string;

	/**
	 * Device brand
	 */
	// @DataMember
	// @ApiMember(DataType="string", Description="Device brand", Name="Brand", ParameterType="body")
	public brand: string;

	/**
	 * Device name
	 */
	// @DataMember
	// @ApiMember(DataType="string", Description="Device name", Name="DeviceName", ParameterType="body")
	public deviceName: string;

	/**
	 * Device timezone, expects to get a TZ database name
	 */
	// @DataMember
	// @ApiMember(DataType="string", Description="Device timezone, expects to get a TZ database name", Name="TimeZone", ParameterType="body")
	public timeZone: string;

	/**
	 * Device language, expects to get a 2 letter identifier
	 */
	// @DataMember
	// @ApiMember(DataType="string", Description="Device language, expects to get a 2 letter identifier", Name="Language", ParameterType="body")
	public language: string;

	/**
	 * Device locale
	 */
	// @DataMember
	// @ApiMember(DataType="string", Description="Device locale", Name="Locale", ParameterType="body")
	public locale: string;

	/**
	 * Meta information that comes from device. Pass an empty object to delete.
	 */
	// @DataMember
	// @ApiMember(DataType="Object", Description="Meta information that comes from device. Pass an empty object to delete.", Name="Meta", ParameterType="body")
	public meta: {[index: string]: string};

	public constructor(init?: Partial<UpdateDeviceRequest>) {
		super(init);
		(Object as any).assign(this, init);
	}
}

/**
 * Attaches user to the device which can receive push notifications
 */
// @Route("/notifications/push/devices/{Id}/user", "PATCH")
// @Route("/{version}/notifications/push/devices/{Id}/user", "PATCH")
// @Api(Description="Attaches user to the device which can receive push notifications")
// @DataContract
export class UpdateDeviceUserRequest
	extends CodeMashRequestBase
	implements IReturn<UpdateDeviceUserResponse> {
	/**
	 * Device Id or device key
	 */
	// @DataMember
	// @ApiMember(DataType="string", Description="Device Id or device key", IsRequired=true, Name="Id", ParameterType="path")
	public id: string;

	/**
	 * User Id
	 */
	// @DataMember
	// @ApiMember(DataType="Guid", Description="User Id", Name="UserId", ParameterType="body")
	public userId?: string;

	public constructor(init?: Partial<UpdateDeviceUserRequest>) {
		super(init);
		(Object as any).assign(this, init);
	}

	public createResponse() {
		return new UpdateDeviceUserResponse();
	}

	public getTypeName() {
		return 'UpdateDeviceUserRequest';
	}
}

/**
 * Applies metadata on the device
 */
// @Route("/notifications/push/devices/{Id}/metadata", "PATCH PUT")
// @Route("/{version}/notifications/push/devices/{Id}/metadata", "PATCH PUT")
// @Api(Description="Applies metadata on the device")
// @DataContract
export class UpdateDeviceMetaRequest
	extends CodeMashRequestBase
	implements IReturn<UpdateDeviceMetaResponse> {
	/**
	 * Device Id
	 */
	// @DataMember
	// @ApiMember(DataType="Guid", Description="Device Id", IsRequired=true, Name="Id", ParameterType="form")
	public id: string;

	/**
	 * Device Id
	 */
	// @DataMember
	// @ApiMember(DataType="Dictionary", Description="Device Id", IsRequired=true, Name="Id", ParameterType="body")
	public meta: {[index: string]: string};

	public constructor(init?: Partial<UpdateDeviceMetaRequest>) {
		super(init);
		(Object as any).assign(this, init);
	}

	public createResponse() {
		return new UpdateDeviceMetaResponse();
	}

	public getTypeName() {
		return 'UpdateDeviceMetaRequest';
	}
}

/**
 * Deletes metadata of the device
 */
// @Route("/notifications/push/devices/{Id}/metadata", "PATCH")
// @Route("/{version}/notifications/push/devices/{Id}/metadata", "PATCH")
// @Api(Description="Deletes metadata of the device")
// @DataContract
export class DeleteDeviceMetaRequest
	extends CodeMashRequestBase
	implements IReturn<DeleteDeviceMetaResponse> {
	/**
	 * Device Id
	 */
	// @DataMember
	// @ApiMember(DataType="Guid", Description="Device Id", Name="Id", ParameterType="path")
	public id: string;

	/**
	 * Keys to be deleted
	 */
	// @DataMember
	// @ApiMember(DataType="List", Description="Keys to be deleted", Name="Keys", ParameterType="body")
	public keys: string[];

	/**
	 * Delete all keys
	 */
	// @DataMember
	// @ApiMember(DataType="bool", Description="Delete all keys", Name="DeleteAllKeys", ParameterType="form")
	public deleteAllKeys: boolean;

	public constructor(init?: Partial<DeleteDeviceMetaRequest>) {
		super(init);
		(Object as any).assign(this, init);
	}

	public createResponse() {
		return new DeleteDeviceMetaResponse();
	}

	public getTypeName() {
		return 'DeleteDeviceMetaRequest';
	}
}

/**
 * Updates the time zone of the device
 */
// @Route("/notifications/push/devices/{Id}/timezone", "PATCH PUT")
// @Route("/{version}/notifications/push/devices/{Id}/timezone", "PATCH PUT")
// @Api(Description="Updates the time zone of the device")
// @DataContract
export class UpdateDeviceTimeZoneRequest
	extends CodeMashRequestBase
	implements IReturn<UpdateDeviceTimeZoneResponse> {
	/**
	 * Device Id
	 */
	// @DataMember
	// @ApiMember(DataType="Guid", Description="Device Id", IsRequired=true, Name="Id", ParameterType="form")
	public id: string;

	/**
	 * In which time zone device is registered. If we are aware of location, we can provide notifications in right time frame.
	 */
	// @DataMember
	// @ApiMember(DataType="string", Description="In which time zone device is registered. If we are aware of location, we can provide notifications in right time frame.", Name="TimeZone", ParameterType="form")
	public timeZone: string;

	public constructor(init?: Partial<UpdateDeviceTimeZoneRequest>) {
		super(init);
		(Object as any).assign(this, init);
	}

	public createResponse() {
		return new UpdateDeviceTimeZoneResponse();
	}

	public getTypeName() {
		return 'UpdateDeviceTimeZoneRequest';
	}
}

/**
 * Deletes the push notification from queue
 */
// @Route("/notifications/push/{id}", "DELETE")
// @Route("/{version}/notifications/push/{id}", "DELETE")
// @Api(Description="Deletes the push notification from queue")
// @DataContract
export class DeleteNotificationRequest
	extends CodeMashRequestBase
	implements IReturn<DeleteNotificationResponse> {
	/**
	 * Notification Id
	 */
	// @DataMember
	// @ApiMember(DataType="string", Description="Notification Id", IsRequired=true, Name="Id", ParameterType="path")
	public id: string;

	/**
	 * Device key
	 */
	// @DataMember
	// @ApiMember(DataType="string", Description="Device key", Name="DeviceKey", ParameterType="query")
	public deviceKey: string;

	public constructor(init?: Partial<DeleteNotificationRequest>) {
		super(init);
		(Object as any).assign(this, init);
	}

	public createResponse() {
		return new DeleteNotificationResponse();
	}

	public getTypeName() {
		return 'DeleteNotificationRequest';
	}
}

/**
 * Gets the push notifications
 */
// @Route("/notifications/push/{id}", "GET")
// @Route("/{version}/notifications/push/{id}", "GET")
// @Api(Description="Gets the push notifications")
// @DataContract
export class GetNotificationRequest
	extends CodeMashRequestBase
	implements IReturn<GetNotificationResponse> {
	/**
	 * Notification Id.
	 */
	// @DataMember
	// @ApiMember(DataType="string", Description="Notification Id.", Name="Id", ParameterType="body")
	public id: string;

	/**
	 * Device key
	 */
	// @DataMember
	// @ApiMember(DataType="string", Description="Device key", Name="DeviceKey", ParameterType="query")
	public deviceKey: string;

	public constructor(init?: Partial<GetNotificationRequest>) {
		super(init);
		(Object as any).assign(this, init);
	}

	public createResponse() {
		return new GetNotificationResponse();
	}

	public getTypeName() {
		return 'GetNotificationRequest';
	}
}

/**
 * Gets the push notifications
 */
// @Route("/notifications/push", "GET POST")
// @Route("/{version}/notifications/push", "GET POST")
// @Api(Description="Gets the push notifications")
// @DataContract
export class GetNotificationsRequest
	extends CodeMashListRequestBase
	implements IReturn<GetNotificationsResponse> {
	/**
	 * Notifications delivered to specified user.
	 */
	// @DataMember
	// @ApiMember(DataType="Guid", Description="Notifications delivered to specified user.", Name="UserId", ParameterType="body")
	public userId?: string;

	/**
	 * Notifications delivered to specified device.
	 */
	// @DataMember
	// @ApiMember(DataType="Guid", Description="Notifications delivered to specified device.", Name="DeviceId", ParameterType="body")
	public deviceId?: string;

	/**
	 * Device key
	 */
	// @DataMember
	// @ApiMember(DataType="string", Description="Device key", Name="DeviceKey", ParameterType="query")
	public deviceKey: string;

	public constructor(init?: Partial<GetNotificationsRequest>) {
		super(init);
		(Object as any).assign(this, init);
	}

	public createResponse() {
		return new GetNotificationsResponse();
	}

	public getTypeName() {
		return 'GetNotificationsRequest';
	}
}

/**
 * Gets amount of push notifications
 */
// @Route("/notifications/push/count", "GET")
// @Route("/{version}/notifications/push/count", "GET")
// @Api(Description="Gets amount of push notifications")
// @DataContract
export class GetNotificationsCountRequest
	extends CodeMashRequestBase
	implements IReturn<GetNotificationsResponse> {
	/**
	 * Notifications delivered to specified user.
	 */
	// @DataMember
	// @ApiMember(DataType="Guid", Description="Notifications delivered to specified user.", Name="UserId", ParameterType="body")
	public userId?: string;

	/**
	 * Notifications delivered to specified device.
	 */
	// @DataMember
	// @ApiMember(DataType="Guid", Description="Notifications delivered to specified device.", Name="DeviceId", ParameterType="body")
	public deviceId?: string;

	/**
	 * Device key
	 */
	// @DataMember
	// @ApiMember(DataType="string", Description="Device key", Name="DeviceKey", ParameterType="query")
	public deviceKey: string;

	/**
	 * Optional filter to count only matched notifications.
	 */
	// @DataMember
	// @ApiMember(DataType="string", Description="Optional filter to count only matched notifications.", IsRequired=true, Name="Filter", ParameterType="body")
	public filter: string;

	/**
	 * Optional filter to count only matched notifications.
	 */
	// @DataMember
	// @ApiMember(DataType="string", Description="Optional filter to count only matched notifications.", IsRequired=true, Name="Filter", ParameterType="body")
	public groupBy: string;

	public constructor(init?: Partial<GetNotificationsCountRequest>) {
		super(init);
		(Object as any).assign(this, init);
	}

	public createResponse() {
		return new GetNotificationsResponse();
	}

	public getTypeName() {
		return 'GetNotificationsCountRequest';
	}
}

/**
 * Marks notification as read
 */
// @Route("/notifications/push/read", "PATCH")
// @Route("/{version}/notifications/push/read", "PATCH")
// @Api(Description="Marks notification as read")
// @DataContract
export class MarkAllNotificationsAsReadRequest
	extends CodeMashRequestBase
	implements IReturn<MarkNotificationAsReadResponse> {
	/**
	 * UserId - (Either userId or deviceId is required). The same massage can be spread across many users, so we need to identify which user read the message
	 */
	// @DataMember
	// @ApiMember(DataType="Guid", Description="UserId - (Either userId or deviceId is required). The same massage can be spread across many users, so we need to identify which user read the message", Name="UserId", ParameterType="body")
	public userId?: string;

	/**
	 * DeviceId - (Either userId or deviceId is required). The same massage can be spread across many devices, so we need to identify in which device the message has been read
	 */
	// @DataMember
	// @ApiMember(DataType="Guid", Description="DeviceId - (Either userId or deviceId is required). The same massage can be spread across many devices, so we need to identify in which device the message has been read", IsRequired=true, Name="DeviceId", ParameterType="body")
	public deviceId: string;

	/**
	 * Device key
	 */
	// @DataMember
	// @ApiMember(DataType="string", Description="Device key", Name="DeviceKey", ParameterType="query")
	public deviceKey: string;

	/**
	 * Optional filter to read only matched notifications.
	 */
	// @DataMember
	// @ApiMember(DataType="string", Description="Optional filter to read only matched notifications.", IsRequired=true, Name="Filter", ParameterType="body")
	public filter: string;

	public constructor(init?: Partial<MarkAllNotificationsAsReadRequest>) {
		super(init);
		(Object as any).assign(this, init);
	}

	public createResponse() {
		return new MarkNotificationAsReadResponse();
	}

	public getTypeName() {
		return 'MarkAllNotificationsAsReadRequest';
	}
}

/**
 * Marks notification as read
 */
// @Route("/notifications/push/{notificationId}/read", "PATCH")
// @Route("/{version}/notifications/push/{notificationId}/read", "PATCH")
// @Api(Description="Marks notification as read")
// @DataContract
export class MarkNotificationAsReadRequest
	extends CodeMashRequestBase
	implements IReturn<MarkNotificationAsReadResponse> {
	/**
	 * NotificationId - notification to be marked as read
	 */
	// @DataMember
	// @ApiMember(DataType="string", Description="NotificationId - notification to be marked as read", IsRequired=true, Name="NotificationId", ParameterType="form")
	public notificationId: string;

	/**
	 * UserId - (Either userId or deviceId is required). The same massage can be spread across many users, so we need to identify which user read the message
	 */
	// @DataMember
	// @ApiMember(DataType="Guid", Description="UserId - (Either userId or deviceId is required). The same massage can be spread across many users, so we need to identify which user read the message", Name="UserId", ParameterType="form")
	public userId?: string;

	/**
	 * DeviceId - (Either userId or deviceId is required). The same massage can be spread across many devices, so we need to identify in which device the message has been read
	 */
	// @DataMember
	// @ApiMember(DataType="Guid", Description="DeviceId - (Either userId or deviceId is required). The same massage can be spread across many devices, so we need to identify in which device the message has been read", IsRequired=true, Name="DeviceId", ParameterType="form")
	public deviceId: string;

	/**
	 * Device key
	 */
	// @DataMember
	// @ApiMember(DataType="string", Description="Device key", Name="DeviceKey", ParameterType="query")
	public deviceKey: string;

	public constructor(init?: Partial<MarkNotificationAsReadRequest>) {
		super(init);
		(Object as any).assign(this, init);
	}

	public createResponse() {
		return new MarkNotificationAsReadResponse();
	}

	public getTypeName() {
		return 'MarkNotificationAsReadRequest';
	}
}

/**
 * Pushes a mobile notification
 */
// @Route("/notifications/push", "POST")
// @Route("/{version}/notifications/push", "POST")
// @Api(Description="Pushes a mobile notification")
// @DataContract
export class SendPushNotificationRequest
	extends CodeMashRequestBase
	implements IReturn<SendPushNotificationResponse> {
	/**
	 * Template Id
	 */
	// @DataMember
	// @ApiMember(DataType="Guid", Description="Template Id", IsRequired=true, Name="TemplateId", ParameterType="form")
	public templateId: string;

	/**
	 * Recipients list. You can send messages by specifying CodeMash membership users which are combined with devices.
	 */
	// @DataMember
	// @ApiMember(DataType="List", Description="Recipients list. You can send messages by specifying CodeMash membership users which are combined with devices.", Name="Users", ParameterType="body")
	public users: string[];

	/**
	 * Messages to be delivered into specified devices.
	 */
	// @DataMember
	// @ApiMember(DataType="List", Description="Messages to be delivered into specified devices.", Name="Devices", ParameterType="body")
	public devices: string[];

	/**
	 * Messages to be delivered to specified roles.
	 */
	// @DataMember
	// @ApiMember(DataType="List", Description="Messages to be delivered to specified roles.", Name="Roles", ParameterType="body")
	public roles: string[];

	/**
	 * Custom tokens which are not provided in project
	 */
	// @DataMember
	// @ApiMember(DataType="Dictionary", Description="Custom tokens which are not provided in project", Name="Tokens", ParameterType="body")
	public tokens: {[index: string]: string};

	/**
	 * Amount of milliseconds to postpone pushing the notification.
	 */
	// @DataMember
	// @ApiMember(DataType="long", Description="Amount of milliseconds to postpone pushing the notification.", Name="Postpone", ParameterType="body")
	public postpone?: number;

	/**
	 * Respects user's time zone. If false, send by project time zone. Default - true. Postpone needs to be set.
	 */
	// @DataMember
	// @ApiMember(DataType="bool", Description="Respects user's time zone. If false, send by project time zone. Default - true. Postpone needs to be set.", Name="RespectTimeZone", ParameterType="body")
	public respectTimeZone: boolean;

	/**
	 * If set to true, notification will not be pushed to user's device. Cannot be true if postpone is set.
	 */
	// @DataMember
	// @ApiMember(DataType="bool", Description="If set to true, notification will not be pushed to user's device. Cannot be true if postpone is set.", Name="IsNonPushable", ParameterType="body")
	public isNonPushable: boolean;

	/**
	 * Will try to send a template for language from CultureCode over the user's language
	 */
	// @DataMember
	// @ApiMember(DataType="bool", Description="Will try to send a template for language from CultureCode over the user's language", Name="ForceRequestLanguage", ParameterType="body")
	public forceRequestLanguage: boolean;

	public constructor(init?: Partial<SendPushNotificationRequest>) {
		super(init);
		(Object as any).assign(this, init);
	}

	public createResponse() {
		return new SendPushNotificationResponse();
	}

	public getTypeName() {
		return 'SendPushNotificationRequest';
	}
}

/**
 * Get push notification template
 */
// @Route("/notifications/push/templates/{id}", "GET")
// @Route("/{version}/notifications/push/templates/{id}", "GET")
// @Api(Description="Get push notification template")
// @DataContract
export class GetNotificationTemplateRequest
	extends CodeMashRequestBase
	implements IReturn<GetNotificationTemplateResponse> {
	/**
	 * ID of push notification template
	 */
	// @DataMember
	// @ApiMember(DataType="Guid", Description="ID of push notification template", IsRequired=true, Name="Id", ParameterType="path")
	public id: string;

	public constructor(init?: Partial<GetNotificationTemplateRequest>) {
		super(init);
		(Object as any).assign(this, init);
	}

	public createResponse() {
		return new GetNotificationTemplateResponse();
	}

	public getTypeName() {
		return 'GetNotificationTemplateRequest';
	}
}

/**
 * Get push notification templates
 */
// @Route("/notifications/push/templates", "GET")
// @Route("/{version}/notifications/push/templates", "GET")
// @Api(Description="Get push notification templates")
// @DataContract
export class GetNotificationTemplatesRequest
	extends CodeMashRequestBase
	implements IReturn<GetNotificationTemplatesResponse> {
	public constructor(init?: Partial<GetNotificationTemplatesRequest>) {
		super(init);
		(Object as any).assign(this, init);
	}

	public createResponse() {
		return new GetNotificationTemplatesResponse();
	}

	public getTypeName() {
		return 'GetNotificationTemplatesRequest';
	}
}

/**
 * Payments
 */
// @Route("/payments/customers/subscriptions/apple", "POST")
// @Route("/{version}/payments/customers/subscriptions/apple", "POST")
// @Api(Description="Payments")
// @DataContract
export class VerifyAppleAppStoreSubscriptionRequest
	extends CodeMashRequestBase
	implements IReturn<VerifyAppleAppStoreSubscriptionResponse> {
	/**
	 * Payment receipt.
	 */
	// @DataMember
	// @ApiMember(DataType="string", Description="Payment receipt.", IsRequired=true, Name="Receipt", ParameterType="body")
	public receipt: string;

	/**
	 * ID of customer who subscribed. Required for first time calling this endpoint.
	 */
	// @DataMember
	// @ApiMember(DataType="string", Description="ID of customer who subscribed. Required for first time calling this endpoint.", Name="CustomerId", ParameterType="body")
	public customerId: string;

	/**
	 * Subscription plan ID. Required for first time calling this endpoint.
	 */
	// @DataMember
	// @ApiMember(DataType="Guid", Description="Subscription plan ID. Required for first time calling this endpoint.", Name="PlanId", ParameterType="body")
	public planId: string;

	public constructor(init?: Partial<VerifyAppleAppStoreSubscriptionRequest>) {
		super(init);
		(Object as any).assign(this, init);
	}

	public createResponse() {
		return new VerifyAppleAppStoreSubscriptionResponse();
	}

	public getTypeName() {
		return 'VerifyAppleAppStoreSubscriptionRequest';
	}
}

/**
 * Payments
 */
// @Route("/payments/customers", "POST")
// @Route("/{version}/payments/customers", "POST")
// @Api(Description="Payments")
// @DataContract
export class CreateCustomerRequest
	extends CodeMashRequestBase
	implements IReturn<CreateCustomerResponse> {
	/**
	 * Payment account ID.
	 */
	// @DataMember
	// @ApiMember(DataType="Guid", Description="Payment account ID.", IsRequired=true, Name="AccountId", ParameterType="body")
	public accountId: string;

	/**
	 * User's ID to whom to attach this customer.
	 */
	// @DataMember
	// @ApiMember(DataType="Guid", Description="User's ID to whom to attach this customer.", Name="UserId", ParameterType="body")
	public userId: string;

	/**
	 * Customer's phone. Overrides user's phone.
	 */
	// @DataMember
	// @ApiMember(DataType="string", Description="Customer's phone. Overrides user's phone.", Name="Phone", ParameterType="body")
	public phone: string;

	/**
	 * Customer's full name. Overrides user's name.
	 */
	// @DataMember
	// @ApiMember(DataType="string", Description="Customer's full name. Overrides user's name.", Name="Name", ParameterType="body")
	public name: string;

	/**
	 * Customer's description.
	 */
	// @DataMember
	// @ApiMember(DataType="string", Description="Customer's description.", Name="Description", ParameterType="body")
	public description: string;

	/**
	 * Customer's email. Overrides user's email.
	 */
	// @DataMember
	// @ApiMember(DataType="string", Description="Customer's email. Overrides user's email.", Name="Email", ParameterType="body")
	public email: string;

	/**
	 * Customer's city. Overrides user's city.
	 */
	// @DataMember
	// @ApiMember(DataType="string", Description="Customer's city. Overrides user's city.", Name="City", ParameterType="body")
	public city: string;

	/**
	 * Customer's country. Overrides user's country.
	 */
	// @DataMember
	// @ApiMember(DataType="string", Description="Customer's country. Overrides user's country.", Name="CountryCode", ParameterType="body")
	public countryCode: string;

	/**
	 * Customer's address 1. Overrides user's address 1.
	 */
	// @DataMember
	// @ApiMember(DataType="string", Description="Customer's address 1. Overrides user's address 1.", Name="Address1", ParameterType="body")
	public address: string;

	/**
	 * Customer's address 2. Overrides user's address 2.
	 */
	// @DataMember
	// @ApiMember(DataType="string", Description="Customer's address 2. Overrides user's address 2.", Name="Address2", ParameterType="body")
	public address2: string;

	/**
	 * Customer's postal code. Overrides user's postal code.
	 */
	// @DataMember
	// @ApiMember(DataType="string", Description="Customer's postal code. Overrides user's postal code.", Name="PostalCode", ParameterType="body")
	public postalCode: string;

	/**
	 * Customer's state. Overrides user's area.
	 */
	// @DataMember
	// @ApiMember(DataType="string", Description="Customer's state. Overrides user's area.", Name="Area", ParameterType="body")
	public area: string;

	/**
	 * Additional key, value data.
	 */
	// @DataMember
	// @ApiMember(DataType="object", Description="Additional key, value data.", Name="Meta", ParameterType="body")
	public meta: {[index: string]: string};

	public constructor(init?: Partial<CreateCustomerRequest>) {
		super(init);
		(Object as any).assign(this, init);
	}

	public createResponse() {
		return new CreateCustomerResponse();
	}

	public getTypeName() {
		return 'CreateCustomerRequest';
	}
}

/**
 * Payments
 */
// @Route("/payments/customers/{id}", "DELETE")
// @Route("/{version}/payments/customers/{id}", "DELETE")
// @Api(Description="Payments")
// @DataContract
export class DeleteCustomerRequest extends CodeMashRequestBase {
	/**
	 * Customer's ID to delete.
	 */
	// @DataMember
	// @ApiMember(DataType="string", Description="Customer's ID to delete.", IsRequired=true, Name="Id", ParameterType="path")
	public id: string;

	public constructor(init?: Partial<DeleteCustomerRequest>) {
		super(init);
		(Object as any).assign(this, init);
	}
}

/**
 * Payments
 */
// @Route("/payments/customers/{id}", "GET")
// @Route("/{version}/payments/customers/{id}", "GET")
// @Api(Description="Payments")
// @DataContract
export class GetCustomerRequest
	extends CodeMashRequestBase
	implements IReturn<GetCustomerResponse> {
	/**
	 * Customer's ID to get.
	 */
	// @DataMember
	// @ApiMember(DataType="string", Description="Customer's ID to get.", IsRequired=true, Name="Id", ParameterType="path")
	public id: string;

	/**
	 * If true, id should be customer's provider Id.
	 */
	// @DataMember
	// @ApiMember(DataType="bool", Description="If true, id should be customer's provider Id.", Name="UseProviderId", ParameterType="query")
	public useProviderId: boolean;

	/**
	 * If true, id should be customer's user Id.
	 */
	// @DataMember
	// @ApiMember(DataType="bool", Description="If true, id should be customer's user Id.", Name="UseUserId", ParameterType="query")
	public useUserId: boolean;

	/**
	 * Required if UseUserId is set to true.
	 */
	// @DataMember
	// @ApiMember(DataType="string", Description="Required if UseUserId is set to true.", Name="PaymentProvider", ParameterType="query")
	public paymentProvider: string;

	public constructor(init?: Partial<GetCustomerRequest>) {
		super(init);
		(Object as any).assign(this, init);
	}

	public createResponse() {
		return new GetCustomerResponse();
	}

	public getTypeName() {
		return 'GetCustomerRequest';
	}
}

/**
 * Payments
 */
// @Route("/payments/customers", "GET")
// @Route("/{version}/payments/customers", "GET")
// @Api(Description="Payments")
// @DataContract
export class GetCustomersRequest
	extends CodeMashListRequestBase
	implements IReturn<GetCustomersResponse> {
	/**
	 * User's ID whose customers to get.
	 */
	// @DataMember
	// @ApiMember(DataType="Guid", Description="User's ID whose customers to get.", Name="UserId", ParameterType="body")
	public userId?: string;

	public constructor(init?: Partial<GetCustomersRequest>) {
		super(init);
		(Object as any).assign(this, init);
	}

	public createResponse() {
		return new GetCustomersResponse();
	}

	public getTypeName() {
		return 'GetCustomersRequest';
	}
}

/**
 * Payments
 */
// @Route("/payments/customers/{id}", "PATCH PUT")
// @Route("/{version}/payments/customers/{id}", "PATCH PUT")
// @Api(Description="Payments")
// @DataContract
export class UpdateCustomerRequest extends CodeMashRequestBase {
	/**
	 * Customer's ID.
	 */
	// @DataMember
	// @ApiMember(DataType="string", Description="Customer's ID.", IsRequired=true, Name="Id", ParameterType="path")
	public id: string;

	/**
	 * Customer's phone. Overrides user's phone.
	 */
	// @DataMember
	// @ApiMember(DataType="string", Description="Customer's phone. Overrides user's phone.", Name="Phone", ParameterType="body")
	public phone: string;

	/**
	 * Customer's full name. Overrides user's name.
	 */
	// @DataMember
	// @ApiMember(DataType="string", Description="Customer's full name. Overrides user's name.", Name="Name", ParameterType="body")
	public name: string;

	/**
	 * Customer's description.
	 */
	// @DataMember
	// @ApiMember(DataType="string", Description="Customer's description.", Name="Description", ParameterType="body")
	public description: string;

	/**
	 * Customer's email. Overrides user's email.
	 */
	// @DataMember
	// @ApiMember(DataType="string", Description="Customer's email. Overrides user's email.", Name="Email", ParameterType="body")
	public email: string;

	/**
	 * Customer's city. Overrides user's city.
	 */
	// @DataMember
	// @ApiMember(DataType="string", Description="Customer's city. Overrides user's city.", Name="City", ParameterType="body")
	public city: string;

	/**
	 * Customer's country. Overrides user's country.
	 */
	// @DataMember
	// @ApiMember(DataType="string", Description="Customer's country. Overrides user's country.", Name="CountryCode", ParameterType="body")
	public countryCode: string;

	/**
	 * Customer's address 1. Overrides user's address 1.
	 */
	// @DataMember
	// @ApiMember(DataType="string", Description="Customer's address 1. Overrides user's address 1.", Name="Address1", ParameterType="body")
	public address: string;

	/**
	 * Customer's address 2. Overrides user's address 2.
	 */
	// @DataMember
	// @ApiMember(DataType="string", Description="Customer's address 2. Overrides user's address 2.", Name="Address2", ParameterType="body")
	public address2: string;

	/**
	 * Customer's postal code. Overrides user's postal code.
	 */
	// @DataMember
	// @ApiMember(DataType="string", Description="Customer's postal code. Overrides user's postal code.", Name="PostalCode", ParameterType="body")
	public postalCode: string;

	/**
	 * Customer's state. Overrides user's area.
	 */
	// @DataMember
	// @ApiMember(DataType="string", Description="Customer's state. Overrides user's area.", Name="Area", ParameterType="body")
	public area: string;

	/**
	 * Additional key, value data.
	 */
	// @DataMember
	// @ApiMember(DataType="object", Description="Additional key, value data.", Name="Meta", ParameterType="body")
	public meta: {[index: string]: string};

	public constructor(init?: Partial<UpdateCustomerRequest>) {
		super(init);
		(Object as any).assign(this, init);
	}
}

/**
 * Payments
 */
// @Route("/payments/discounts", "POST")
// @Route("/{version}/payments/discounts", "POST")
// @Api(Description="Payments")
// @DataContract
export class CreateDiscountRequest
	extends CodeMashDbRequestBase
	implements IReturn<CreateDiscountResponse> {
	/**
	 * Type of the discount (Coupon or Discount).
	 */
	// @DataMember
	// @ApiMember(DataType="string", Description="Type of the discount (Coupon or Discount).", IsRequired=true, Name="Type", ParameterType="body")
	public type: string;

	/**
	 * Unique discount code.
	 */
	// @DataMember
	// @ApiMember(DataType="string", Description="Unique discount code.", Name="Code", ParameterType="body")
	public code: string;

	/**
	 * Display name of the discount.
	 */
	// @DataMember
	// @ApiMember(DataType="string", Description="Display name of the discount.", Name="DisplayName", ParameterType="body")
	public displayName: string;

	/**
	 * Start date of being active.
	 */
	// @DataMember
	// @ApiMember(DataType="long", Description="Start date of being active.", Name="ValidFrom", ParameterType="body")
	public validFrom?: number;

	/**
	 * End date of being active.
	 */
	// @DataMember
	// @ApiMember(DataType="long", Description="End date of being active.", Name="ValidUntil", ParameterType="body")
	public validUntil?: number;

	/**
	 * Restriction type of discount. Can be Fixed, Percentage, Price or Quantity.
	 */
	// @DataMember
	// @ApiMember(DataType="string", Description="Restriction type of discount. Can be Fixed, Percentage, Price or Quantity.", Name="RestrictionType", ParameterType="body")
	public restrictionType: string;

	/**
	 * Discount amount for Fixed or Percentage restriction types.
	 */
	// @DataMember
	// @ApiMember(DataType="double", Description="Discount amount for Fixed or Percentage restriction types.", Name="Amount", ParameterType="body")
	public amount?: number;

	/**
	 * Discount amounts for Price or Quantity restriction types.
	 */
	// @DataMember
	// @ApiMember(DataType="array", Description="Discount amounts for Price or Quantity restriction types.", Name="Boundaries", ParameterType="body")
	public boundaries: PaymentDiscountBoundary[];

	/**
	 * Target type for specific records. Can be All, Category, Individual.
	 */
	// @DataMember
	// @ApiMember(DataType="string", Description="Target type for specific records. Can be All, Category, Individual.", Name="TargetType", ParameterType="body")
	public targetType: string;

	/**
	 * Records for Individual target type.
	 */
	// @DataMember
	// @ApiMember(DataType="array", Description="Records for Individual target type.", Name="Records", ParameterType="body")
	public records: string[];

	/**
	 * Collection field for Category target type.
	 */
	// @DataMember
	// @ApiMember(DataType="string", Description="Collection field for Category target type.", Name="CategoryField", ParameterType="body")
	public categoryField: string;

	/**
	 * Values for Category target type.
	 */
	// @DataMember
	// @ApiMember(DataType="array", Description="Values for Category target type.", Name="CategoryValues", ParameterType="body")
	public categoryValues: string[];

	/**
	 * Limitations for discounts to be used only with certain payment accounts.
	 */
	// @DataMember
	// @ApiMember(DataType="array", Description="Limitations for discounts to be used only with certain payment accounts.", Name="PaymentAccounts", ParameterType="body")
	public paymentAccounts: string[];

	/**
	 * Users who can redeem this discount.
	 */
	// @DataMember
	// @ApiMember(DataType="array", Description="Users who can redeem this discount.", Name="Users", ParameterType="body")
	public users: string[];

	/**
	 * Emails for potential users who can redeem this discount. When user registers with one of the provided emails, he will be allowed to use this discount. Doesn't work with existing users.
	 */
	// @DataMember
	// @ApiMember(DataType="array", Description="Emails for potential users who can redeem this discount. When user registers with one of the provided emails, he will be allowed to use this discount. Doesn't work with existing users.", Name="Users", ParameterType="body")
	public emails: string[];

	/**
	 * Amount of times that the same user can redeem. Default - 1.
	 */
	// @DataMember
	// @ApiMember(DataType="int", Description="Amount of times that the same user can redeem. Default - 1.", Name="UserCanRedeem", ParameterType="body")
	public userCanRedeem?: number;

	/**
	 * Amount of times in total this discount can be redeemed.
	 */
	// @DataMember
	// @ApiMember(DataType="int", Description="Amount of times in total this discount can be redeemed.", Name="TotalCanRedeem", ParameterType="body")
	public totalCanRedeem?: number;

	/**
	 * Should the discount be enabled. Default - true.
	 */
	// @DataMember
	// @ApiMember(DataType="bool", Description="Should the discount be enabled. Default - true.", Name="Enabled", ParameterType="body")
	public enabled: boolean;

	/**
	 * Should the discount be combined with other discounts. Default - true.
	 */
	// @DataMember
	// @ApiMember(DataType="bool", Description="Should the discount be combined with other discounts. Default - true.", Name="CombineDiscounts", ParameterType="body")
	public combineDiscounts: boolean;

	public constructor(init?: Partial<CreateDiscountRequest>) {
		super(init);
		(Object as any).assign(this, init);
	}

	public createResponse() {
		return new CreateDiscountResponse();
	}

	public getTypeName() {
		return 'CreateDiscountRequest';
	}
}

/**
 * Payments
 */
// @Route("/payments/discounts/{id}", "DELETE")
// @Route("/{version}/payments/discounts/{id}", "DELETE")
// @Api(Description="Payments")
// @DataContract
export class DeleteDiscountRequest extends CodeMashRequestBase {
	/**
	 * Id of discount.
	 */
	// @DataMember
	// @ApiMember(DataType="string", Description="Id of discount.", IsRequired=true, Name="Id", ParameterType="body")
	public id: string;

	public constructor(init?: Partial<DeleteDiscountRequest>) {
		super(init);
		(Object as any).assign(this, init);
	}
}

/**
 * Payments
 */
// @Route("/payments/discounts/coupon", "GET POST")
// @Route("/{version}/payments/discounts/coupon", "GET POST")
// @Api(Description="Payments")
// @DataContract
export class GetApplicableCouponsRequest
	extends CodeMashRequestBase
	implements IReturn<GetApplicableCouponsResponse> {
	/**
	 * Unique code of a discount.
	 */
	// @DataMember
	// @ApiMember(DataType="string", Description="Unique code of a discount.", IsRequired=true, Name="Code", ParameterType="query")
	public codes: string[];

	/**
	 * Order schema ID. Must match one of your order schemas including user zone.
	 */
	// @DataMember
	// @ApiMember(DataType="Guid", Description="Order schema ID. Must match one of your order schemas including user zone.", Name="OrderSchemaId", ParameterType="query")
	public orderSchemaId: string;

	/**
	 * User ID. Requires administrator permission.
	 */
	// @DataMember
	// @ApiMember(DataType="Guid", Description="User ID. Requires administrator permission.", Name="UserId", ParameterType="body")
	public userId?: string;

	/**
	 * If true, will consider a buyer as a guest user.
	 */
	// @DataMember
	// @ApiMember(DataType="bool", Description="If true, will consider a buyer as a guest user.", Name="AsGuest", ParameterType="body")
	public asGuest: boolean;

	/**
	 * Order lines. Check which records are applicable for discount.
	 */
	// @DataMember
	// @ApiMember(DataType="Array", Description="Order lines. Check which records are applicable for discount.", IsRequired=true, Name="Lines", ParameterType="query")
	public lines: OrderLineInput[];

	public constructor(init?: Partial<GetApplicableCouponsRequest>) {
		super(init);
		(Object as any).assign(this, init);
	}

	public createResponse() {
		return new GetApplicableCouponsResponse();
	}

	public getTypeName() {
		return 'GetApplicableCouponsRequest';
	}
}

/**
 * Payments
 */
// @Route("/payments/discounts/applicable", "GET POST")
// @Route("/{version}/payments/discounts/applicable", "GET POST")
// @Api(Description="Payments")
// @DataContract
export class GetApplicableDiscountsRequest
	extends CodeMashRequestBase
	implements IReturn<GetApplicableDiscountsResponse> {
	/**
	 * Order schema ID. Must match one of your order schemas including user zone.
	 */
	// @DataMember
	// @ApiMember(DataType="Guid", Description="Order schema ID. Must match one of your order schemas including user zone.", IsRequired=true, Name="OrderSchemaId", ParameterType="query")
	public orderSchemaId: string;

	/**
	 * User ID. Requires administrator permission.
	 */
	// @DataMember
	// @ApiMember(DataType="Guid", Description="User ID. Requires administrator permission.", Name="UserId", ParameterType="body")
	public userId?: string;

	/**
	 * If true, will consider a buyer as a guest user.
	 */
	// @DataMember
	// @ApiMember(DataType="bool", Description="If true, will consider a buyer as a guest user.", Name="AsGuest", ParameterType="body")
	public asGuest: boolean;

	/**
	 * Order lines. Check which records are applicable for discount.
	 */
	// @DataMember
	// @ApiMember(DataType="Array", Description="Order lines. Check which records are applicable for discount.", IsRequired=true, Name="Lines", ParameterType="query")
	public lines: OrderLineInput[];

	public constructor(init?: Partial<GetApplicableDiscountsRequest>) {
		super(init);
		(Object as any).assign(this, init);
	}

	public createResponse() {
		return new GetApplicableDiscountsResponse();
	}

	public getTypeName() {
		return 'GetApplicableDiscountsRequest';
	}
}

/**
 * Payments
 */
// @Route("/payments/discounts/{id}", "PUT PATCH")
// @Route("/{version}/payments/discounts/{id}", "PUT PATCH")
// @Api(Description="Payments")
// @DataContract
export class UpdateDiscountRequest extends CodeMashRequestBase {
	/**
	 * Id of discount.
	 */
	// @DataMember
	// @ApiMember(DataType="string", Description="Id of discount.", IsRequired=true, Name="Id", ParameterType="body")
	public id: string;

	/**
	 * Display name of the discount.
	 */
	// @DataMember
	// @ApiMember(DataType="string", Description="Display name of the discount.", Name="DisplayName", ParameterType="body")
	public displayName: string;

	/**
	 * Start date of being active.
	 */
	// @DataMember
	// @ApiMember(DataType="long", Description="Start date of being active.", Name="ValidFrom", ParameterType="body")
	public validFrom?: number;

	/**
	 * End date of being active.
	 */
	// @DataMember
	// @ApiMember(DataType="long", Description="End date of being active.", Name="ValidUntil", ParameterType="body")
	public validUntil?: number;

	/**
	 * Restriction type of discount. Can be Fixed, Percentage, Price or Quantity.
	 */
	// @DataMember
	// @ApiMember(DataType="string", Description="Restriction type of discount. Can be Fixed, Percentage, Price or Quantity.", Name="RestrictionType", ParameterType="body")
	public restrictionType: string;

	/**
	 * Discount amount for Fixed or Percentage restriction types.
	 */
	// @DataMember
	// @ApiMember(DataType="double", Description="Discount amount for Fixed or Percentage restriction types.", Name="Amount", ParameterType="body")
	public amount?: number;

	/**
	 * Discount amounts for Price or Quantity restriction types.
	 */
	// @DataMember
	// @ApiMember(DataType="array", Description="Discount amounts for Price or Quantity restriction types.", Name="Boundaries", ParameterType="body")
	public boundaries: PaymentDiscountBoundary[];

	/**
	 * Target type for specific records. Can be All, Category, Individual.
	 */
	// @DataMember
	// @ApiMember(DataType="string", Description="Target type for specific records. Can be All, Category, Individual.", Name="TargetType", ParameterType="body")
	public targetType: string;

	/**
	 * Records for Individual target type.
	 */
	// @DataMember
	// @ApiMember(DataType="array", Description="Records for Individual target type.", Name="Records", ParameterType="body")
	public records: string[];

	/**
	 * Collection field for Category target type.
	 */
	// @DataMember
	// @ApiMember(DataType="string", Description="Collection field for Category target type.", Name="CategoryField", ParameterType="body")
	public categoryField: string;

	/**
	 * Values for Category target type.
	 */
	// @DataMember
	// @ApiMember(DataType="array", Description="Values for Category target type.", Name="CategoryValues", ParameterType="body")
	public categoryValues: string[];

	/**
	 * Limitations for discounts to be used only with certain payment accounts.
	 */
	// @DataMember
	// @ApiMember(DataType="array", Description="Limitations for discounts to be used only with certain payment accounts.", Name="PaymentAccounts", ParameterType="body")
	public paymentAccounts: string[];

	/**
	 * Users who can redeem this discount.
	 */
	// @DataMember
	// @ApiMember(DataType="array", Description="Users who can redeem this discount.", Name="Users", ParameterType="body")
	public users: string[];

	/**
	 * Emails for potential users who can redeem this discount. When user registers with one of the provided emails, he will be allowed to use this discount. Doesn't work with existing users.
	 */
	// @DataMember
	// @ApiMember(DataType="array", Description="Emails for potential users who can redeem this discount. When user registers with one of the provided emails, he will be allowed to use this discount. Doesn't work with existing users.", Name="Users", ParameterType="body")
	public emails: string[];

	/**
	 * Amount of times that the same user can redeem.
	 */
	// @DataMember
	// @ApiMember(DataType="int", Description="Amount of times that the same user can redeem.", Name="UserCanRedeem", ParameterType="body")
	public userCanRedeem?: number;

	/**
	 * Amount of times in total this discount can be redeemed.
	 */
	// @DataMember
	// @ApiMember(DataType="int", Description="Amount of times in total this discount can be redeemed.", Name="TotalCanRedeem", ParameterType="body")
	public totalCanRedeem?: number;

	/**
	 * Should the discount be enabled.
	 */
	// @DataMember
	// @ApiMember(DataType="bool", Description="Should the discount be enabled.", Name="Enabled", ParameterType="body")
	public enabled?: boolean;

	/**
	 * Should the discount be combined with other discounts
	 */
	// @DataMember
	// @ApiMember(DataType="bool", Description="Should the discount be combined with other discounts", Name="CombineDiscounts", ParameterType="body")
	public combineDiscounts?: boolean;

	public constructor(init?: Partial<UpdateDiscountRequest>) {
		super(init);
		(Object as any).assign(this, init);
	}
}

/**
 * Payments
 */
// @Route("/payments/customers/subscriptions/google", "POST")
// @Route("/{version}/payments/customers/subscriptions/google", "POST")
// @Api(Description="Payments")
// @DataContract
export class VerifyGooglePlayStoreSubscriptionRequest
	extends CodeMashRequestBase
	implements IReturn<VerifyGooglePlayStoreSubscriptionResponse> {
	/**
	 * Payment receipt.
	 */
	// @DataMember
	// @ApiMember(DataType="string", Description="Payment receipt.", IsRequired=true, Name="Receipt", ParameterType="body")
	public receipt: string;

	/**
	 * ID of customer who subscribed. Required for first time calling this endpoint.
	 */
	// @DataMember
	// @ApiMember(DataType="string", Description="ID of customer who subscribed. Required for first time calling this endpoint.", Name="CustomerId", ParameterType="body")
	public customerId: string;

	/**
	 * Subscription plan ID. Required for first time calling this endpoint.
	 */
	// @DataMember
	// @ApiMember(DataType="Guid", Description="Subscription plan ID. Required for first time calling this endpoint.", Name="PlanId", ParameterType="body")
	public planId: string;

	public constructor(init?: Partial<VerifyGooglePlayStoreSubscriptionRequest>) {
		super(init);
		(Object as any).assign(this, init);
	}

	public createResponse() {
		return new VerifyGooglePlayStoreSubscriptionResponse();
	}

	public getTypeName() {
		return 'VerifyGooglePlayStoreSubscriptionRequest';
	}
}

/**
 * Payments
 */
// @Route("/payments/methods/attach", "POST")
// @Route("/{version}/payments/methods/attach", "POST")
// @Api(Description="Payments")
// @DataContract
export class AttachPaymentMethodRequest
	extends CodeMashRequestBase
	implements IReturn<AttachPaymentMethodResponse> {
	/**
	 * Customer's ID.
	 */
	// @DataMember
	// @ApiMember(DataType="string", Description="Customer's ID.", Name="CustomerId", ParameterType="body")
	public customerId: string;

	/**
	 * Setup intent ID.
	 */
	// @DataMember
	// @ApiMember(DataType="string", Description="Setup intent ID.", Name="SetupId", ParameterType="body")
	public setupId: string;

	/**
	 * Client secret got from creating setup intent.
	 */
	// @DataMember
	// @ApiMember(DataType="string", Description="Client secret got from creating setup intent.", Name="SetupClientSecret", ParameterType="body")
	public setupClientSecret: string;

	/**
	 * Should this payment method be default.
	 */
	// @DataMember
	// @ApiMember(DataType="bool", Description="Should this payment method be default.", Name="AsDefault", ParameterType="body")
	public asDefault: boolean;

	/**
	 * Should current payment methods be detached.
	 */
	// @DataMember
	// @ApiMember(DataType="bool", Description="Should current payment methods be detached.", Name="DetachOthers", ParameterType="body")
	public detachOthers: boolean;

	public constructor(init?: Partial<AttachPaymentMethodRequest>) {
		super(init);
		(Object as any).assign(this, init);
	}

	public createResponse() {
		return new AttachPaymentMethodResponse();
	}

	public getTypeName() {
		return 'AttachPaymentMethodRequest';
	}
}

/**
 * Payments
 */
// @Route("/payments/methods/{id}", "DELETE")
// @Route("/{version}/payments/methods/{id}", "DELETE")
// @Api(Description="Payments")
// @DataContract
export class DetachPaymentMethodRequest extends CodeMashRequestBase {
	/**
	 * Payment method's ID.
	 */
	// @DataMember
	// @ApiMember(DataType="string", Description="Payment method's ID.", IsRequired=true, Name="Id", ParameterType="query")
	public id: string;

	/**
	 * Customer's ID.
	 */
	// @DataMember
	// @ApiMember(DataType="string", Description="Customer's ID.", Name="CustomerId", ParameterType="query")
	public customerId: string;

	public constructor(init?: Partial<DetachPaymentMethodRequest>) {
		super(init);
		(Object as any).assign(this, init);
	}
}

/**
 * Payments
 */
// @Route("/payments/methods/setup", "GET")
// @Route("/{version}/payments/methods/setup", "GET")
// @Api(Description="Payments")
// @DataContract
export class GetPaymentMethodSetupRequest
	extends CodeMashRequestBase
	implements IReturn<GetPaymentMethodSetupResponse> {
	/**
	 * Payment account ID.
	 */
	// @DataMember
	// @ApiMember(DataType="Guid", Description="Payment account ID.", IsRequired=true, Name="AccountId", ParameterType="query")
	public accountId: string;

	/**
	 * Can payment method be used without a user.
	 */
	// @DataMember
	// @ApiMember(DataType="bool", Description="Can payment method be used without a user.", Name="AllowOffline", ParameterType="query")
	public allowOffline: boolean;

	public constructor(init?: Partial<GetPaymentMethodSetupRequest>) {
		super(init);
		(Object as any).assign(this, init);
	}

	public createResponse() {
		return new GetPaymentMethodSetupResponse();
	}

	public getTypeName() {
		return 'GetPaymentMethodSetupRequest';
	}
}

/**
 * Payments
 */
// @Route("/payments/methods/{id}", "PATCH PUT")
// @Route("/{version}/payments/methods/{id}", "PATCH PUT")
// @Api(Description="Payments")
// @DataContract
export class UpdatePaymentMethodRequest extends CodeMashRequestBase {
	/**
	 * Payment method's ID.
	 */
	// @DataMember
	// @ApiMember(DataType="string", Description="Payment method's ID.", IsRequired=true, Name="Id", ParameterType="query")
	public id: string;

	/**
	 * Customer's ID.
	 */
	// @DataMember
	// @ApiMember(DataType="string", Description="Customer's ID.", Name="CustomerId", ParameterType="query")
	public customerId: string;

	/**
	 * Payment method's phone. Overrides user's phone.
	 */
	// @DataMember
	// @ApiMember(DataType="string", Description="Payment method's phone. Overrides user's phone.", Name="Phone", ParameterType="body")
	public phone: string;

	/**
	 * Payment method's full name. Overrides user's name.
	 */
	// @DataMember
	// @ApiMember(DataType="string", Description="Payment method's full name. Overrides user's name.", Name="Name", ParameterType="body")
	public name: string;

	/**
	 * Payment method's description.
	 */
	// @DataMember
	// @ApiMember(DataType="string", Description="Payment method's description.", Name="Description", ParameterType="body")
	public description: string;

	/**
	 * Payment method's email. Overrides user's email.
	 */
	// @DataMember
	// @ApiMember(DataType="string", Description="Payment method's email. Overrides user's email.", Name="Email", ParameterType="body")
	public email: string;

	/**
	 * Payment method's city. Overrides user's city.
	 */
	// @DataMember
	// @ApiMember(DataType="string", Description="Payment method's city. Overrides user's city.", Name="City", ParameterType="body")
	public city: string;

	/**
	 * Payment method's country. Overrides user's country.
	 */
	// @DataMember
	// @ApiMember(DataType="string", Description="Payment method's country. Overrides user's country.", Name="CountryCode", ParameterType="body")
	public countryCode: string;

	/**
	 * Payment method's address 1. Overrides user's address 1.
	 */
	// @DataMember
	// @ApiMember(DataType="string", Description="Payment method's address 1. Overrides user's address 1.", Name="Address1", ParameterType="body")
	public address: string;

	/**
	 * Payment method's address 2. Overrides user's address 2.
	 */
	// @DataMember
	// @ApiMember(DataType="string", Description="Payment method's address 2. Overrides user's address 2.", Name="Address2", ParameterType="body")
	public address2: string;

	/**
	 * Payment method's postal code. Overrides user's postal code.
	 */
	// @DataMember
	// @ApiMember(DataType="string", Description="Payment method's postal code. Overrides user's postal code.", Name="PostalCode", ParameterType="body")
	public postalCode: string;

	/**
	 * Payment method's state. Overrides user's area.
	 */
	// @DataMember
	// @ApiMember(DataType="string", Description="Payment method's state. Overrides user's area.", Name="Area", ParameterType="body")
	public area: string;

	/**
	 * Additional key, value data.
	 */
	// @DataMember
	// @ApiMember(DataType="object", Description="Additional key, value data.", Name="Meta", ParameterType="body")
	public meta: {[index: string]: string};

	public constructor(init?: Partial<UpdatePaymentMethodRequest>) {
		super(init);
		(Object as any).assign(this, init);
	}
}

/**
 * Payments
 */
// @Route("/payments/orders", "POST")
// @Route("/{version}/payments/orders", "POST")
// @Api(Description="Payments")
// @DataContract
export class CreateOrderRequest
	extends CodeMashRequestBase
	implements IReturn<CreateOrderResponse> {
	/**
	 * Payment account ID.
	 */
	// @DataMember
	// @ApiMember(DataType="Guid", Description="Payment account ID.", IsRequired=true, Name="AccountId", ParameterType="body")
	public accountId: string;

	/**
	 * Order schema ID. Must match one of your order schemas including user zone.
	 */
	// @DataMember
	// @ApiMember(DataType="Guid", Description="Order schema ID. Must match one of your order schemas including user zone.", IsRequired=true, Name="OrderSchemaId", ParameterType="body")
	public orderSchemaId: string;

	/**
	 * User ID. Requires administrator permission.
	 */
	// @DataMember
	// @ApiMember(DataType="Guid", Description="User ID. Requires administrator permission.", Name="UserId", ParameterType="body")
	public userId?: string;

	/**
	 * Order lines.
	 */
	// @DataMember
	// @ApiMember(DataType="Array", Description="Order lines.", IsRequired=true, Name="Lines", ParameterType="body")
	public lines: OrderLineInput[];

	/**
	 * Coupon discounts.
	 */
	// @DataMember
	// @ApiMember(DataType="Array", Description="Coupon discounts.", Name="Coupons", ParameterType="body")
	public coupons: string[];

	/**
	 * If true, will consider a buyer as a guest user.
	 */
	// @DataMember
	// @ApiMember(DataType="bool", Description="If true, will consider a buyer as a guest user.", Name="AsGuest", ParameterType="body")
	public asGuest: boolean;

	/**
	 * Customer details. Should be provided if this is a guest. If this is a user, then this will override user details.
	 */
	// @DataMember
	// @ApiMember(DataType="Object", Description="Customer details. Should be provided if this is a guest. If this is a user, then this will override user details.", Name="BuyerDetails", ParameterType="body")
	public customerDetails: OrderCustomerInput;

	/**
	 * Consider this as a test order
	 */
	// @DataMember
	// @ApiMember(DataType="bool", Description="Consider this as a test order", Name="IsTest", ParameterType="body")
	public isTest: boolean;

	/**
	 * Additional information for order
	 */
	// @DataMember
	// @ApiMember(DataType="Object", Description="Additional information for order", Name="Meta", ParameterType="body")
	public meta: {[index: string]: string};

	public constructor(init?: Partial<CreateOrderRequest>) {
		super(init);
		(Object as any).assign(this, init);
	}

	public createResponse() {
		return new CreateOrderResponse();
	}

	public getTypeName() {
		return 'CreateOrderRequest';
	}
}

/**
 * Payments
 */
// @Route("/payments/orders/{id}", "GET")
// @Route("/{version}/payments/orders/{id}", "GET")
// @Api(Description="Payments")
// @DataContract
export class GetOrderRequest
	extends CodeMashRequestBase
	implements IReturn<GetOrderResponse> {
	/**
	 * Order ID.
	 */
	// @DataMember
	// @ApiMember(DataType="string", Description="Order ID.", IsRequired=true, Name="Id", ParameterType="path")
	public id: string;

	/**
	 * If true, includes paid transactions to response.
	 */
	// @DataMember
	// @ApiMember(DataType="bool", Description="If true, includes paid transactions to response.", Name="IncludePaidTransactions", ParameterType="query")
	public includePaidTransactions: boolean;

	public constructor(init?: Partial<GetOrderRequest>) {
		super(init);
		(Object as any).assign(this, init);
	}

	public createResponse() {
		return new GetOrderResponse();
	}

	public getTypeName() {
		return 'GetOrderRequest';
	}
}

/**
 * Payments
 */
// @Route("/payments/orders", "GET")
// @Route("/{version}/payments/orders", "GET")
// @Api(Description="Payments")
// @DataContract
export class GetOrdersRequest
	extends CodeMashListRequestBase
	implements IReturn<GetOrdersResponse> {
	/**
	 * User ID. Requires administrator permission.
	 */
	// @DataMember
	// @ApiMember(DataType="Guid", Description="User ID. Requires administrator permission.", IsRequired=true, Name="UserId", ParameterType="query")
	public userId: string;

	/**
	 * If true, includes paid transactions to response.
	 */
	// @DataMember
	// @ApiMember(DataType="bool", Description="If true, includes paid transactions to response.", Name="IncludePaidTransactions", ParameterType="query")
	public includePaidTransactions: boolean;

	/**
	 * API key of your cluster. Can be passed in a header as X-CM-Cluster.
	 */
	// @DataMember
	// @ApiMember(DataType="string", Description="API key of your cluster. Can be passed in a header as X-CM-Cluster.", IsRequired=true, Name="Cluster", ParameterType="query")
	public cluster: string;

	public constructor(init?: Partial<GetOrdersRequest>) {
		super(init);
		(Object as any).assign(this, init);
	}

	public createResponse() {
		return new GetOrdersResponse();
	}

	public getTypeName() {
		return 'GetOrdersRequest';
	}
}

/**
 * Payments
 */
// @Route("/payments/orders/{Id}/paysera/pay", "POST")
// @Route("/{version}/payments/orders/{Id}/paysera/pay", "POST")
// @Api(Description="Payments")
// @DataContract
export class CreatePayseraTransactionRequest
	extends CodeMashRequestBase
	implements IReturn<CreatePayseraTransactionResponse> {
	/**
	 * Order ID to pay for.
	 */
	// @DataMember
	// @ApiMember(DataType="string", Description="Order ID to pay for.", IsRequired=true, Name="Id", ParameterType="path")
	public id: string;

	/**
	 * To choose which mode to use from payment settings.
	 */
	// @DataMember
	// @ApiMember(DataType="string", Description="To choose which mode to use from payment settings.", IsRequired=true, Name="Mode", ParameterType="body")
	public mode: string;

	public constructor(init?: Partial<CreatePayseraTransactionRequest>) {
		super(init);
		(Object as any).assign(this, init);
	}

	public createResponse() {
		return new CreatePayseraTransactionResponse();
	}

	public getTypeName() {
		return 'CreatePayseraTransactionRequest';
	}
}

export class ValidatePayseraRequest {
	public pathInfo: string;

	public constructor(init?: Partial<ValidatePayseraRequest>) {
		(Object as any).assign(this, init);
	}
}

/**
 * Payments
 */
// @Route("/payments/orders/{Id}/stripe/payment/status", "GET")
// @Route("/{version}/payments/orders/{Id}/stripe/payment/status", "GET")
// @Api(Description="Payments")
// @DataContract
export class CheckStripePaymentStatusRequest
	extends CodeMashRequestBase
	implements IReturn<CheckStripePaymentStatusResponse> {
	/**
	 * Order ID.
	 */
	// @DataMember
	// @ApiMember(DataType="string", Description="Order ID.", IsRequired=true, Name="Id", ParameterType="path")
	public id: string;

	/**
	 * Payment account ID.
	 */
	// @DataMember
	// @ApiMember(DataType="Guid", Description="Payment account ID.", IsRequired=true, Name="AccountId", ParameterType="query")
	public accountId: string;

	/**
	 * Transaction ID which was used with this order and client secret.
	 */
	// @DataMember
	// @ApiMember(DataType="string", Description="Transaction ID which was used with this order and client secret.", IsRequired=true, Name="TransactionId", ParameterType="query")
	public transactionId: string;

	/**
	 * ClientSecret got from creating stripe transaction.
	 */
	// @DataMember
	// @ApiMember(DataType="string", Description="ClientSecret got from creating stripe transaction.", IsRequired=true, Name="ClientSecret", ParameterType="query")
	public clientSecret: string;

	public constructor(init?: Partial<CheckStripePaymentStatusRequest>) {
		super(init);
		(Object as any).assign(this, init);
	}

	public createResponse() {
		return new CheckStripePaymentStatusResponse();
	}

	public getTypeName() {
		return 'CheckStripePaymentStatusRequest';
	}
}

/**
 * Payments
 */
// @Route("/payments/orders/{Id}/stripe/pay", "POST")
// @Route("/{version}/payments/orders/{Id}/stripe/pay", "POST")
// @Api(Description="Payments")
// @DataContract
export class CreateStripeTransactionRequest
	extends CodeMashRequestBase
	implements IReturn<CreateStripeTransactionResponse> {
	/**
	 * Order ID to pay for.
	 */
	// @DataMember
	// @ApiMember(DataType="string", Description="Order ID to pay for.", IsRequired=true, Name="Id", ParameterType="path")
	public id: string;

	/**
	 * Payment method ID to use.
	 */
	// @DataMember
	// @ApiMember(DataType="string", Description="Payment method ID to use.", IsRequired=true, Name="PaymentMethodId", ParameterType="body")
	public paymentMethodId: string;

	/**
	 * Customer ID to whom belongs this payment method.
	 */
	// @DataMember
	// @ApiMember(DataType="string", Description="Customer ID to whom belongs this payment method.", IsRequired=true, Name="CustomerId", ParameterType="body")
	public customerId: string;

	public constructor(init?: Partial<CreateStripeTransactionRequest>) {
		super(init);
		(Object as any).assign(this, init);
	}

	public createResponse() {
		return new CreateStripeTransactionResponse();
	}

	public getTypeName() {
		return 'CreateStripeTransactionRequest';
	}
}

/**
 * Payments
 */
// @Route("/payments/customers/{customerId}/subscriptions/{id}", "DELETE")
// @Route("/{version}/payments/customers/{customerId}/subscriptions/{id}", "DELETE")
// @Api(Description="Payments")
// @DataContract
export class CancelSubscriptionRequest
	extends CodeMashRequestBase
	implements IReturn<CancelSubscriptionResponse> {
	/**
	 * Subscription ID.
	 */
	// @DataMember
	// @ApiMember(DataType="string", Description="Subscription ID.", IsRequired=true, Name="SubscriptionId", ParameterType="path")
	public id: string;

	/**
	 * Customer's ID.
	 */
	// @DataMember
	// @ApiMember(DataType="string", Description="Customer's ID.", IsRequired=true, Name="CustomerId", ParameterType="path")
	public customerId: string;

	/**
	 * Should cancel instantly. Overrides payment settings
	 */
	// @DataMember
	// @ApiMember(DataType="bool", Description="Should cancel instantly. Overrides payment settings", Name="CancelInstantly", ParameterType="query")
	public cancelInstantly?: boolean;

	/**
	 * Should refund on cancel instantly. Overrides payment settings
	 */
	// @DataMember
	// @ApiMember(DataType="bool", Description="Should refund on cancel instantly. Overrides payment settings", Name="RefundOnCancelInstantly", ParameterType="query")
	public refundOnCancelInstantly?: boolean;

	public constructor(init?: Partial<CancelSubscriptionRequest>) {
		super(init);
		(Object as any).assign(this, init);
	}

	public createResponse() {
		return new CancelSubscriptionResponse();
	}

	public getTypeName() {
		return 'CancelSubscriptionRequest';
	}
}

/**
 * Payments
 */
// @Route("/payments/customers/{customerId}/subscriptions/{id}", "PUT")
// @Route("/{version}/payments/customers/{customerId}/subscriptions/{id}", "PUT")
// @Api(Description="Payments")
// @DataContract
export class ChangeSubscriptionRequest
	extends CodeMashRequestBase
	implements IReturn<ChangeSubscriptionResponse> {
	/**
	 * Subscription ID.
	 */
	// @DataMember
	// @ApiMember(DataType="string", Description="Subscription ID.", IsRequired=true, Name="SubscriptionId", ParameterType="path")
	public id: string;

	/**
	 * Customer's ID.
	 */
	// @DataMember
	// @ApiMember(DataType="string", Description="Customer's ID.", IsRequired=true, Name="CustomerId", ParameterType="path")
	public customerId: string;

	/**
	 * Subscription plan ID.
	 */
	// @DataMember
	// @ApiMember(DataType="Guid", Description="Subscription plan ID.", IsRequired=true, Name="PlanId", ParameterType="body")
	public newPlanId: string;

	/**
	 * Payment method's ID. If not provided will use default.
	 */
	// @DataMember
	// @ApiMember(DataType="string", Description="Payment method's ID. If not provided will use default.", Name="PaymentMethodId", ParameterType="body")
	public paymentMethodId: string;

	/**
	 * Discount coupon ID if supported.
	 */
	// @DataMember
	// @ApiMember(DataType="string", Description="Discount coupon ID if supported.", Name="Coupon", ParameterType="body")
	public coupon: string;

	public constructor(init?: Partial<ChangeSubscriptionRequest>) {
		super(init);
		(Object as any).assign(this, init);
	}

	public createResponse() {
		return new ChangeSubscriptionResponse();
	}

	public getTypeName() {
		return 'ChangeSubscriptionRequest';
	}
}

/**
 * Payments
 */
// @Route("/payments/customers/{customerId}/subscriptions", "POST")
// @Route("/{version}/payments/customers/{customerId}/subscriptions", "POST")
// @Api(Description="Payments")
// @DataContract
export class CreateSubscriptionRequest
	extends CodeMashRequestBase
	implements IReturn<CreateSubscriptionResponse> {
	/**
	 * Customer's ID.
	 */
	// @DataMember
	// @ApiMember(DataType="string", Description="Customer's ID.", IsRequired=true, Name="CustomerId", ParameterType="path")
	public customerId: string;

	/**
	 * Subscription plan ID.
	 */
	// @DataMember
	// @ApiMember(DataType="Guid", Description="Subscription plan ID.", IsRequired=true, Name="PlanId", ParameterType="body")
	public planId: string;

	/**
	 * Payment method's ID. If not provided will use default.
	 */
	// @DataMember
	// @ApiMember(DataType="string", Description="Payment method's ID. If not provided will use default.", Name="PaymentMethodId", ParameterType="body")
	public paymentMethodId: string;

	/**
	 * Discount coupon ID if supported.
	 */
	// @DataMember
	// @ApiMember(DataType="string", Description="Discount coupon ID if supported.", Name="Coupon", ParameterType="body")
	public coupon: string;

	public constructor(init?: Partial<CreateSubscriptionRequest>) {
		super(init);
		(Object as any).assign(this, init);
	}

	public createResponse() {
		return new CreateSubscriptionResponse();
	}

	public getTypeName() {
		return 'CreateSubscriptionRequest';
	}
}

/**
 * Payments
 */
// @Route("/payments/customers/{customerId}/subscriptions/{id}", "PATCH")
// @Route("/{version}/payments/customers/{customerId}/subscriptions/{id}", "PATCH")
// @Api(Description="Payments")
// @DataContract
export class UpdateSubscriptionRequest extends CodeMashRequestBase {
	/**
	 * Subscription ID.
	 */
	// @DataMember
	// @ApiMember(DataType="string", Description="Subscription ID.", IsRequired=true, Name="SubscriptionId", ParameterType="path")
	public id: string;

	/**
	 * Customer's ID.
	 */
	// @DataMember
	// @ApiMember(DataType="string", Description="Customer's ID.", IsRequired=true, Name="CustomerId", ParameterType="path")
	public customerId: string;

	/**
	 * Discount coupon ID if supported.
	 */
	// @DataMember
	// @ApiMember(DataType="string", Description="Discount coupon ID if supported.", Name="Coupon", ParameterType="body")
	public coupon: string;

	/**
	 * Payment method's ID to use for subscription.
	 */
	// @DataMember
	// @ApiMember(DataType="string", Description="Payment method's ID to use for subscription.", Name="PaymentMethodId", ParameterType="body")
	public paymentMethodId: string;

	/**
	 * If subscription is set to cancel at period end, renews the subscription.
	 */
	// @DataMember
	// @ApiMember(DataType="bool", Description="If subscription is set to cancel at period end, renews the subscription.", Name="RenewCanceled", ParameterType="body")
	public renewCanceled: boolean;

	public constructor(init?: Partial<UpdateSubscriptionRequest>) {
		super(init);
		(Object as any).assign(this, init);
	}
}

/**
 * Returns project details
 */
// @Route("/projects/{projectId}", "GET")
// @Route("/{version}/projects/{projectId}", "GET")
// @Api(Description="Returns project details")
// @DataContract
export class GetProjectRequest
	extends CodeMashRequestBase
	implements IReturn<GetProjectResponse> {
	public constructor(init?: Partial<GetProjectRequest>) {
		super(init);
		(Object as any).assign(this, init);
	}

	public createResponse() {
		return new GetProjectResponse();
	}

	public getTypeName() {
		return 'GetProjectRequest';
	}
}

/**
 * Executes a function
 */
// @Route("/serverless/functions/{Id}/execute", "GET POST")
// @Route("/{version}/serverless/functions/{Id}/execute", "GET POST")
// @Api(Description="Executes a function")
// @DataContract
export class ExecuteFunctionRequest
	extends CodeMashRequestBase
	implements IReturn<ExecuteFunctionResponse> {
	/**
	 * Function Id
	 */
	// @DataMember
	// @ApiMember(DataType="Guid", Description="Function Id", IsRequired=true, Name="Id", ParameterType="path")
	public id: string;

	/**
	 * Parameters of to pass into function
	 */
	// @DataMember
	// @ApiMember(DataType="string", Description="Parameters of to pass into function", Name="Template", ParameterType="body")
	public data: string;

	/**
	 * Additional parameters for specific functions
	 */
	// @DataMember
	// @ApiMember(DataType="Dictionary", Description="Additional parameters for specific functions", Name="Meta", ParameterType="body")
	public meta: {[index: string]: string};

	/**
	 * Tokens to inject into queries
	 */
	// @DataMember
	// @ApiMember(DataType="Dictionary", Description="Tokens to inject into queries", Name="Tokens", ParameterType="body")
	public tokens: {[index: string]: string};

	/**
	 * Version or Alias of a function
	 */
	// @DataMember
	// @ApiMember(DataType="string", Description="Version or Alias of a function", Name="Qualifier", ParameterType="body")
	public qualifier: string;

	public constructor(init?: Partial<ExecuteFunctionRequest>) {
		super(init);
		(Object as any).assign(this, init);
	}

	public createResponse() {
		return new ExecuteFunctionResponse();
	}

	public getTypeName() {
		return 'ExecuteFunctionRequest';
	}
}

// @Route("/notifications/email/aws/events", "POST")
export class AwsSesEndpoint implements IReturn<HttpResult> {
	public constructor(init?: Partial<AwsSesEndpoint>) {
		(Object as any).assign(this, init);
	}

	public createResponse() {
		return new HttpResult();
	}

	public getTypeName() {
		return 'AwsSesEndpoint';
	}
}

// @Route("/notifications/email/mailgun/events", "POST")
export class MailGunEndpoint implements IReturn<HttpResult> {
	public constructor(init?: Partial<MailGunEndpoint>) {
		(Object as any).assign(this, init);
	}

	public createResponse() {
		return new HttpResult();
	}

	public getTypeName() {
		return 'MailGunEndpoint';
	}
}

// @Route("/notifications/email/sendgrid/events", "POST")
export class SendGridEndpoint implements IReturn<HttpResult> {
	public constructor(init?: Partial<SendGridEndpoint>) {
		(Object as any).assign(this, init);
	}

	public createResponse() {
		return new HttpResult();
	}

	public getTypeName() {
		return 'SendGridEndpoint';
	}
}

/**
 * Authentication
 */
// @Route("/auth/apple", "GET POST")
// @Route("/{version}/auth/apple", "GET POST")
// @Api(Description="Authentication")
// @DataContract
export class AppleAuthenticationRequest
	extends CodeMashRequestBase
	implements IOAuthRequest {
	/**
	 * Mode to use for authentication
	 */
	// @DataMember
	// @ApiMember(DataType="string", Description="Mode to use for authentication", Name="Mode", ParameterType="query")
	public mode: string;

	/**
	 * Code received from Google services
	 */
	// @DataMember
	// @ApiMember(DataType="string", Description="Code received from Google services", Name="Code", ParameterType="query")
	public code: string;

	/**
	 * State received with a code
	 */
	// @DataMember
	// @ApiMember(DataType="string", Description="State received with a code", Name="State", ParameterType="query")
	public state: string;

	/**
	 * When transferring access token from client app
	 */
	// @DataMember
	// @ApiMember(DataType="string", Description="When transferring access token from client app", Name="AccessToken", ParameterType="query")
	public accessToken: string;

	/**
	 * Attach any data to the request
	 */
	// @DataMember
	// @ApiMember(DataType="string", Description="Attach any data to the request", Name="Meta", ParameterType="body")
	public meta: {[index: string]: string};

	public constructor(init?: Partial<AppleAuthenticationRequest>) {
		super(init);
		(Object as any).assign(this, init);
	}
}

// @Route("/auth")
// @Route("/auth/{provider}")
// @DataContract
export class Authenticate implements IReturn<AuthenticateResponse>, IPost {
	// @DataMember(Order=1)
	public provider: string;

	// @DataMember(Order=2)
	public state: string;

	// @DataMember(Order=3)
	public oauth_token: string;

	// @DataMember(Order=4)
	public oauth_verifier: string;

	// @DataMember(Order=5)
	public userName: string;

	// @DataMember(Order=6)
	public password: string;

	// @DataMember(Order=7)
	public rememberMe?: boolean;

	// @DataMember(Order=9)
	public errorView: string;

	// @DataMember(Order=10)
	public nonce: string;

	// @DataMember(Order=11)
	public uri: string;

	// @DataMember(Order=12)
	public response: string;

	// @DataMember(Order=13)
	public qop: string;

	// @DataMember(Order=14)
	public nc: string;

	// @DataMember(Order=15)
	public cnonce: string;

	// @DataMember(Order=16)
	public useTokenCookie?: boolean;

	// @DataMember(Order=17)
	public accessToken: string;

	// @DataMember(Order=18)
	public accessTokenSecret: string;

	// @DataMember(Order=19)
	public scope: string;

	// @DataMember(Order=20)
	public meta: {[index: string]: string};

	public constructor(init?: Partial<Authenticate>) {
		(Object as any).assign(this, init);
	}

	public createResponse() {
		return new AuthenticateResponse();
	}

	public getTypeName() {
		return 'Authenticate';
	}
}

// @Route("/apikeys")
// @Route("/apikeys/{Environment}")
// @DataContract
export class GetApiKeys implements IReturn<GetApiKeysResponse>, IGet {
	// @DataMember(Order=1)
	public environment: string;

	// @DataMember(Order=2)
	public meta: {[index: string]: string};

	public constructor(init?: Partial<GetApiKeys>) {
		(Object as any).assign(this, init);
	}

	public createResponse() {
		return new GetApiKeysResponse();
	}

	public getTypeName() {
		return 'GetApiKeys';
	}
}

// @Route("/apikeys/regenerate")
// @Route("/apikeys/regenerate/{Environment}")
// @DataContract
export class RegenerateApiKeys
	implements IReturn<RegenerateApiKeysResponse>, IPost {
	// @DataMember(Order=1)
	public environment: string;

	// @DataMember(Order=2)
	public meta: {[index: string]: string};

	public constructor(init?: Partial<RegenerateApiKeys>) {
		(Object as any).assign(this, init);
	}

	public createResponse() {
		return new RegenerateApiKeysResponse();
	}

	public getTypeName() {
		return 'RegenerateApiKeys';
	}
}
