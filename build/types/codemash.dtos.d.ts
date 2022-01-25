import { Cookie } from '@servicestack/client';
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
export interface IPost {
}
export interface IGet {
}
export declare class RequestBase implements ICultureBasedRequest, IVersionBasedRequest {
    cultureCode: string;
    version: string;
    constructor(init?: Partial<RequestBase>);
}
export declare class CodeMashRequestBase extends RequestBase {
    /**
     * ID of your project. Can be passed in a header as X-CM-ProjectId.
     */
    projectId: string;
    constructor(init?: Partial<CodeMashRequestBase>);
}
export declare class CodeMashDbRequestBase extends CodeMashRequestBase {
    /**
     * Collection name - unique table name without whitespaces
     */
    collectionName: string;
    /**
     * API key of your cluster. Can be passed in a header as X-CM-Cluster.
     */
    cluster: string;
    constructor(init?: Partial<CodeMashDbRequestBase>);
}
export interface ICultureBasedRequest {
    cultureCode: string;
}
export interface IVersionBasedRequest {
    cultureCode: string;
}
export declare class ResponseError {
    errorCode: string;
    fieldName: string;
    message: string;
    meta: {
        [index: string]: string;
    };
    constructor(init?: Partial<ResponseError>);
}
export declare class ResponseStatus {
    errorCode: string;
    message: string;
    stackTrace: string;
    errors: ResponseError[];
    meta: {
        [index: string]: string;
    };
    constructor(init?: Partial<ResponseStatus>);
}
export declare class ResponseBase<T> {
    responseStatus: ResponseStatus;
    result: T;
    constructor(init?: Partial<ResponseBase<T>>);
}
export declare class UpdateResult {
    isAcknowledged: boolean;
    matchedCount: number;
    modifiedCount: number;
    upsertedId: string;
    constructor(init?: Partial<UpdateResult>);
}
export declare class DeleteResult {
    deletedCount: number;
    isAcknowledged: boolean;
    constructor(init?: Partial<DeleteResult>);
}
export declare class ReferencingField {
    name: string;
    pageSize: number;
    pageNumber: number;
    sort: string;
    projection: string;
    constructor(init?: Partial<ReferencingField>);
}
export declare class CodeMashDbListRequestBase extends CodeMashDbRequestBase implements IRequestWithPaging, IRequestWithFilter, IRequestWithSorting, IRequestWithProjection {
    /**
     * Amount of records to return
     */
    pageSize: number;
    /**
     * Page of records to return
     */
    pageNumber: number;
    /**
     * A query that specifies which records to return
     */
    filter: object | string;
    /**
     * A query that specifies how to sort filtered records
     */
    sort: string;
    /**
     * A query that specifies what fields in records to return
     */
    projection: string;
    constructor(init?: Partial<CodeMashDbListRequestBase>);
}
export interface IRequestWithPaging {
    pageSize: number;
    pageNumber: number;
}
export interface IRequestWithFilter {
    filter: object | string;
}
export interface IRequestWithSorting {
    sort: string;
}
export interface IRequestWithProjection {
    projection: string;
}
export declare class Schema {
    collectionNameAsTitle: string;
    collectionName: string;
    uiSchema: string;
    jsonSchema: string;
    translatableFields: string[];
    databaseId: string;
    schemaId: string;
    constructor(init?: Partial<Schema>);
}
export declare class ReplaceOneResult {
    /**
     * A boolean acknowledged as true if the operation ran with write concern or false if write concern was disabled
     */
    isAcknowledged: boolean;
    /**
     * Checks if modifiedCount is available
     */
    isModifiedCountAvailable: boolean;
    /**
     * matchedCount containing the number of matched documents
     */
    matchedCount: number;
    /**
     * modifiedCount containing the number of modified documents
     */
    modifiedCount: number;
    /**
     * upsertedId containing the _id for the upserted document
     */
    upsertedId: string;
    constructor(init?: Partial<ReplaceOneResult>);
}
export declare class Taxonomy {
    id: string;
    name: string;
    title: string;
    description: string;
    parentId: string;
    dependencies: string[];
    termsUiSchema: string;
    termsJsonSchema: string;
    translatableFields: string[];
    databaseId: string;
    taxonomyId: string;
    constructor(init?: Partial<Taxonomy>);
}
export declare class TermMultiParent {
    parentId: string;
    taxonomyId: string;
    name: string;
    names: {
        [index: string]: string;
    };
    constructor(init?: Partial<TermMultiParent>);
}
export declare class Term {
    taxonomyId: string;
    taxonomyName: string;
    id: string;
    name: string;
    description: string;
    names: {
        [index: string]: string;
    };
    descriptions: {
        [index: string]: string;
    };
    parentId: string;
    parentName: string;
    parentNames: {
        [index: string]: string;
    };
    order?: number;
    multiParents: TermMultiParent[];
    meta: string;
    constructor(init?: Partial<Term>);
}
export declare enum CacheControl {
    None = 0,
    Public = 1,
    Private = 2,
    MustRevalidate = 4,
    NoCache = 8,
    NoStore = 16,
    NoTransform = 32,
    ProxyRevalidate = 64
}
export interface IContentTypeWriter {
}
export declare enum RequestAttributes {
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
    Any = -1
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
    cookies: {
        [index: string]: Cookie;
    };
    responseContentType: string;
    hasExplicitResponseContentType: boolean;
    items: {
        [index: string]: Object;
    };
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
    items: {
        [index: string]: Object;
    };
}
export declare class File {
    id: string;
    description: string;
    modifiedOn: string;
    createdOn: string;
    uniqueName: string;
    enumerator: number;
    originalName: string;
    directory: string;
    contentType: string;
    size: number;
    isPublic: boolean;
    isParentPublic: boolean;
    publicUrl: string;
    constructor(init?: Partial<File>);
}
export declare class Base64FileUpload {
    data: string;
    contentType: string;
    fileName: string;
    constructor(init?: Partial<Base64FileUpload>);
}
export interface IOAuthRequest {
    mode: string;
    code: string;
    state: string;
    accessToken: string;
}
export declare class Policy {
    name: string;
    displayName: string;
    disabled: boolean;
    permissions: string[];
    constructor(init?: Partial<Policy>);
}
export declare class Role {
    name: string;
    displayName: string;
    policies: Policy[];
    constructor(init?: Partial<Role>);
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
    items: {
        [index: string]: string;
    };
}
export declare class AuthResponse {
    userId: string;
    userAuthId: string;
    userName: string;
    displayName: string;
    firstName: string;
    lastName: string;
    sessionId: string;
    referrerUrl: string;
    bearerToken: string;
    email: string;
    roles: Role[];
    permissions: string[];
    company: string;
    phoneNumber: string;
    birthDate?: string;
    birthDateRaw: string;
    address: string;
    address2: string;
    city: string;
    country: string;
    culture: string;
    fullName: string;
    gender: string;
    language: string;
    profileUrl: string;
    tag: number;
    authProvider: string;
    mailAddress: string;
    nickname: string;
    postalCode: string;
    timeZone: string;
    createdAt: string;
    lastModified: string;
    status: string;
    authTokens: IAuthTokens[];
    meta: {
        [index: string]: string;
    };
    constructor(init?: Partial<AuthResponse>);
}
export declare class Token {
    key: string;
    value: string;
    owner: string;
    constructor(init?: Partial<Token>);
}
export declare class Project {
    id: string;
    tokens: Token[];
    languages: string[];
    defaultLanguage: string;
    defaultTimeZone: string;
    name: string;
    description: string;
    slugifiedName: string;
    logoUrl: string;
    constructor(init?: Partial<Project>);
}
export declare class PushNotificationToken {
    provider: string;
    token: string;
    accountId: string;
    constructor(init?: Partial<PushNotificationToken>);
}
export declare class Device {
    id: string;
    createdOn: string;
    token: PushNotificationToken;
    userName: string;
    userId: string;
    operatingSystem: string;
    brand: string;
    deviceName: string;
    timeZone: string;
    language: string;
    locale: string;
    meta: {
        [index: string]: string;
    };
    totalNotifications: number;
    deviceKey: string;
    accountId: string;
    constructor(init?: Partial<Device>);
}
export declare class UserAuthProvider {
    provider: string;
    userId: string;
    constructor(init?: Partial<UserAuthProvider>);
}
export declare class User {
    id: string;
    createdOn: string;
    modifiedOn: string;
    displayName: string;
    firstName: string;
    lastName: string;
    email: string;
    userName: string;
    roles: Role[];
    devices: Device[];
    rolesEditable: boolean;
    status: string;
    type: string;
    meta: string;
    language: string;
    timeZone: string;
    country: string;
    countryCode: string;
    area: string;
    city: string;
    address: string;
    address2: string;
    phone: string;
    company: string;
    companyCode: string;
    postalCode: string;
    gender: string;
    birthDate: string;
    zone: string;
    authProviders: UserAuthProvider[];
    hasCredentials: boolean;
    subscribedToNews: boolean;
    unsubscribedNewsTags: string[];
    unreadNotifications?: number;
    constructor(init?: Partial<User>);
}
export declare class CodeMashListRequestBase extends CodeMashRequestBase implements IRequestWithPaging, IRequestWithFilter, IRequestWithSorting {
    /**
     * Amount of records to return
     */
    pageSize: number;
    /**
     * Page of records to return
     */
    pageNumber: number;
    /**
     * A query that specifies which records to return
     */
    filter: object | string;
    /**
     * A query that specifies how to sort filtered records
     */
    sort: string;
    /**
     * A query that specifies what fields in records to return
     */
    projection: string;
    constructor(init?: Partial<CodeMashListRequestBase>);
}
export declare class UserPolicyUpdateInput {
    policy: string;
    permissions: string[];
    constructor(init?: Partial<UserPolicyUpdateInput>);
}
export declare class UserRoleUpdateInput {
    role: string;
    policies: UserPolicyUpdateInput[];
    constructor(init?: Partial<UserRoleUpdateInput>);
}
export declare class PushNotification {
    id: string;
    receivedOn: string;
    status: string;
    title: string;
    body: string;
    data: string;
    subtitle: string;
    meta: {
        [index: string]: string;
    };
    isRead: boolean;
    userId: string;
    deviceId: string;
    senderId: string;
    constructor(init?: Partial<PushNotification>);
}
export declare class FileDetails {
    id: string;
    directory: string;
    originalFileName: string;
    fileName: string;
    filePath: string;
    contentType: string;
    contentLength: number;
    constructor(init?: Partial<FileDetails>);
}
export declare class PushNotificationTemplateButtons {
    id: string;
    text: string;
    icon: string;
    constructor(init?: Partial<PushNotificationTemplateButtons>);
}
export declare class AndroidBackgroundLayout {
    image: string;
    headingColor: string;
    contentColor: string;
    constructor(init?: Partial<AndroidBackgroundLayout>);
}
export declare class PushNotificationTemplate {
    id: string;
    templateName: string;
    accountId: string;
    accountName: string;
    title: string;
    body: string;
    code: string;
    priority: string;
    data: string;
    ttl?: number;
    url: string;
    collapseId: string;
    image: FileDetails;
    fileAccountId?: string;
    meta: {
        [index: string]: string;
    };
    buttons: PushNotificationTemplateButtons[];
    subtitle: string;
    iosBadge?: number;
    iosCategory: string;
    iosContentAvailable: boolean;
    iosSound: string;
    iosAppBundleId: string;
    iosGroupId: string;
    iosPushType: string;
    iosLaunchImage: string;
    iosAnalyticsLabel: string;
    androidGroup: string;
    androidGroupMessage: string;
    restrictedPackageName: string;
    androidChannelId: string;
    androidSound: string;
    androidVisibility: string;
    androidDefaultVibration: boolean;
    androidVibrateTimings: string;
    androidDefaultLight: boolean;
    androidAccentColor: string;
    androidLedColor: string;
    androidLightOnDuration: string;
    androidLightOffDuration: string;
    androidSticky: boolean;
    androidSmallIcon: string;
    androidLargeIcon: string;
    androidBackground: AndroidBackgroundLayout;
    androidAnalyticsLabel: string;
    constructor(init?: Partial<PushNotificationTemplate>);
}
export declare class Subscription {
    id: string;
    createdOn: string;
    currentPeriodStart: string;
    currentPeriodEnd: string;
    canceledAt: string;
    cancelAtPeriodEnd: boolean;
    trialStart: string;
    trialEnd: string;
    status: string;
    planId: string;
    appliedCoupon: string;
    paymentMethodId: string;
    customerId: string;
    constructor(init?: Partial<Subscription>);
}
export declare class PaymentMethod {
    id: string;
    createdOn: string;
    type: string;
    data: string;
    email: string;
    name: string;
    phone: string;
    countryCode: string;
    area: string;
    city: string;
    address: string;
    address2: string;
    postalCode: string;
    meta: {
        [index: string]: string;
    };
    constructor(init?: Partial<PaymentMethod>);
}
export declare class Customer {
    id: string;
    createdOn: string;
    provider: string;
    providerId: string;
    phone: string;
    name: string;
    description: string;
    email: string;
    city: string;
    countryCode: string;
    address: string;
    address2: string;
    postalCode: string;
    area: string;
    userId: string;
    userName: string;
    projectId: string;
    paymentAccountId: string;
    paymentMethods: PaymentMethod[];
    subscriptions: Subscription[];
    meta: {
        [index: string]: string;
    };
    constructor(init?: Partial<Customer>);
}
export declare class PaymentDiscountBoundary {
    boundary: number;
    amount: number;
    type: string;
    constructor(init?: Partial<PaymentDiscountBoundary>);
}
export declare class Discount {
    id: string;
    createdOn: string;
    modifiedOn: string;
    type: string;
    code: string;
    displayName: string;
    validFrom: string;
    validUntil: string;
    schemaId: string;
    cluster: string;
    restrictionType: string;
    amount?: number;
    boundaries: PaymentDiscountBoundary[];
    targetType: string;
    records: string[];
    categoryField: string;
    categoryValues: string[];
    paymentAccounts: string[];
    users: string[];
    emails: string[];
    userCanRedeem?: number;
    totalCanRedeem?: number;
    enabled: boolean;
    combineDiscounts: boolean;
    constructor(init?: Partial<Discount>);
}
export declare class OrderLineInput {
    collectionName: string;
    recordId: string;
    quantity: number;
    variation: string;
    constructor(init?: Partial<OrderLineInput>);
}
export declare class DiscountIndividualLine {
    recordId: string;
    variation: string;
    discount: number;
    constructor(init?: Partial<DiscountIndividualLine>);
}
export declare class DiscountLine {
    recordId: string;
    variation: string;
    constructor(init?: Partial<DiscountLine>);
}
export declare class DiscountCategory {
    category: string;
    lines: DiscountLine[];
    discount: number;
    constructor(init?: Partial<DiscountCategory>);
}
export declare class DiscountAll {
    lines: DiscountLine[];
    discount: number;
    constructor(init?: Partial<DiscountAll>);
}
export declare class ApplicableDiscount {
    id: string;
    code: string;
    createdOn: string;
    validFrom: string;
    validUntil: string;
    type: string;
    targetType: string;
    displayName: string;
    description: string;
    collectionName: string;
    cluster: string;
    individualDiscounts: DiscountIndividualLine[];
    categoryDiscounts: DiscountCategory[];
    allDiscount: DiscountAll;
    constructor(init?: Partial<ApplicableDiscount>);
}
export declare class PaymentMethodSetup {
    setupId: string;
    setupClientSecret: string;
    status: string;
    constructor(init?: Partial<PaymentMethodSetup>);
}
export declare class OrderCustomerInput {
    email: string;
    firstName: string;
    lastName: string;
    phone: string;
    company: string;
    address: string;
    address2: string;
    country: string;
    countryCode: string;
    area: string;
    city: string;
    postalCode: string;
    language: string;
    constructor(init?: Partial<OrderCustomerInput>);
}
export declare class OrderCustomer {
    email: string;
    firstName: string;
    lastName: string;
    phone: string;
    company: string;
    address: string;
    address2: string;
    country: string;
    countryCode: string;
    area: string;
    city: string;
    postalCode: string;
    constructor(init?: Partial<OrderCustomer>);
}
export declare class OrderLine {
    schemaId: string;
    collectionName: string;
    recordId: string;
    priceFields: string[];
    variation: string;
    recordData: string;
    price: number;
    quantity: number;
    constructor(init?: Partial<OrderLine>);
}
export declare class OrderFile {
    category: string;
    id: string;
    directory: string;
    originalFileName: string;
    fileName: string;
    contentType: string;
    contentLength: number;
    constructor(init?: Partial<OrderFile>);
}
export declare class OrderTransaction {
    id: string;
    createdOn: string;
    payUntil: string;
    paidOn: string;
    callbackOn: string;
    provider: string;
    eventStatus: string;
    eventUniqueId: string;
    type: string;
    data: string;
    payerIpCountry: string;
    payerCountry: string;
    payerEmail: string;
    paymentType: string;
    eventAccount: string;
    payText: string;
    eventCurrency: string;
    eventAmount: number;
    constructor(init?: Partial<OrderTransaction>);
}
export declare class OrderDiscount {
    id: string;
    code: string;
    type: string;
    targetType: string;
    displayName: string;
    description: string;
    individualDiscounts: DiscountIndividualLine[];
    categoryDiscounts: DiscountCategory[];
    allDiscount: DiscountAll;
    constructor(init?: Partial<OrderDiscount>);
}
export declare class Order {
    id: string;
    createdOn: string;
    modifiedOn: string;
    paidOn: string;
    number: number;
    numberPrefix: string;
    paymentStatus: string;
    paymentProvider: string;
    currency: string;
    asGuest: boolean;
    isTest: boolean;
    customer: OrderCustomer;
    cluster: string;
    lines: OrderLine[];
    files: OrderFile[];
    transactions: OrderTransaction[];
    discounts: OrderDiscount[];
    userId: string;
    paymentAccountId: string;
    total: number;
    meta: {
        [index: string]: string;
    };
    constructor(init?: Partial<Order>);
}
export declare class StripePaymentIntent {
    paymentId: string;
    paymentClientSecret: string;
    status: string;
    amount: number;
    transactionId: string;
    constructor(init?: Partial<StripePaymentIntent>);
}
export declare class UserApiKey {
    key: string;
    keyType: string;
    expiryDate?: string;
    meta: {
        [index: string]: string;
    };
    constructor(init?: Partial<UserApiKey>);
}
export interface IHttpFile {
    name: string;
    fileName: string;
    contentLength: number;
    contentType: string;
}
export declare class AggregateResponse extends ResponseBase<string> {
    constructor(init?: Partial<AggregateResponse>);
}
export declare class ChangeResponsibilityResponse extends ResponseBase<UpdateResult> {
    constructor(init?: Partial<ChangeResponsibilityResponse>);
}
export declare class CountResponse extends ResponseBase<number> {
    constructor(init?: Partial<CountResponse>);
}
export declare class DeleteManyResponse extends ResponseBase<DeleteResult> {
    constructor(init?: Partial<DeleteManyResponse>);
}
export declare class DeleteOneResponse extends ResponseBase<DeleteResult> {
    constructor(init?: Partial<DeleteOneResponse>);
}
export declare class DistinctResponse extends Array<ResponseBase<Object>> {
    constructor(init?: Partial<DistinctResponse>);
}
export declare class FindResponse extends ResponseBase<string> {
    totalCount: number;
    schema: Schema;
    constructor(init?: Partial<FindResponse>);
}
export declare class FindOneResponse extends ResponseBase<string> {
    schema: Schema;
    constructor(init?: Partial<FindOneResponse>);
}
export declare class InsertManyResponse extends Array<ResponseBase<string>> {
    constructor(init?: Partial<InsertManyResponse>);
}
export declare class InsertOneResponse extends ResponseBase<string> {
    constructor(init?: Partial<InsertOneResponse>);
}
export declare class ReplaceOneResponse extends ResponseBase<ReplaceOneResult> {
    constructor(init?: Partial<ReplaceOneResponse>);
}
export declare class UpdateManyResponse extends ResponseBase<UpdateResult> {
    constructor(init?: Partial<UpdateManyResponse>);
}
export declare class UpdateOneResponse extends ResponseBase<UpdateResult> {
    constructor(init?: Partial<UpdateOneResponse>);
}
export declare class FindTermsResponse extends Array<ResponseBase<Term>> {
    totalCount: number;
    taxonomy: Taxonomy;
    constructor(init?: Partial<FindTermsResponse>);
}
export declare class FindTermsChildrenResponse extends Array<ResponseBase<Term>> {
    totalCount: number;
    constructor(init?: Partial<FindTermsChildrenResponse>);
}
export declare class HttpResult {
    responseText: string;
    fileInfo: any;
    contentType: string;
    headers: {
        [index: string]: string;
    };
    cookies: Cookie[];
    eTag: string;
    age?: string;
    maxAge?: string;
    expires?: string;
    lastModified?: string;
    cacheControl: CacheControl;
    resultScope: any;
    allowsPartialResponse: boolean;
    options: {
        [index: string]: string;
    };
    status: number;
    statusCode: any;
    statusDescription: string;
    response: Object;
    responseFilter: IContentTypeWriter;
    requestContext: IRequest;
    view: string;
    template: string;
    paddingLength: number;
    isPartialRequest: boolean;
    constructor(init?: Partial<HttpResult>);
}
export declare class GetFileResponse extends ResponseBase<string> {
    fileName: string;
    isImage: boolean;
    file: File;
    constructor(init?: Partial<GetFileResponse>);
}
export declare class UploadFileResponse extends ResponseBase<File> {
    key: string;
    name: string;
    uploadDate: number;
    constructor(init?: Partial<UploadFileResponse>);
}
export declare class UploadOrderFileResponse extends ResponseBase<File> {
    key: string;
    constructor(init?: Partial<UploadOrderFileResponse>);
}
export declare class UploadRecordFileResponse extends ResponseBase<File> {
    key: string;
    constructor(init?: Partial<UploadRecordFileResponse>);
}
export declare class UploadUserFileResponse extends ResponseBase<File> {
    key: string;
    constructor(init?: Partial<UploadUserFileResponse>);
}
export declare class CreateLogResponse extends ResponseBase<string> {
    constructor(init?: Partial<CreateLogResponse>);
}
export declare class AadAuthenticationResponse extends ResponseBase<AuthResponse> {
    constructor(init?: Partial<AadAuthenticationResponse>);
}
export declare class AuthCheckResponse extends ResponseBase<AuthResponse> {
    constructor(init?: Partial<AuthCheckResponse>);
}
export declare class CredentialsAuthenticationResponse extends ResponseBase<AuthResponse> {
    constructor(init?: Partial<CredentialsAuthenticationResponse>);
}
export declare class FacebookAuthenticationResponse extends ResponseBase<AuthResponse> {
    constructor(init?: Partial<FacebookAuthenticationResponse>);
}
export declare class GoogleAuthenticationResponse extends ResponseBase<AuthResponse> {
    constructor(init?: Partial<GoogleAuthenticationResponse>);
}
export declare class TwitterAuthenticationResponse extends ResponseBase<AuthResponse> {
    constructor(init?: Partial<TwitterAuthenticationResponse>);
}
export declare class ValidateUserDeactivationTokenResponse extends ResponseBase<boolean> {
    project: Project;
    hasCredentials: boolean;
    constructor(init?: Partial<ValidateUserDeactivationTokenResponse>);
}
export declare class GetProfileResponse extends ResponseBase<User> {
    constructor(init?: Partial<GetProfileResponse>);
}
export declare class GetUserResponse extends ResponseBase<User> {
    constructor(init?: Partial<GetUserResponse>);
}
export declare class GetUsersResponse extends Array<ResponseBase<User>> {
    totalCount: number;
    constructor(init?: Partial<GetUsersResponse>);
}
export declare class InviteUserV2Response extends ResponseBase<User> {
    constructor(init?: Partial<InviteUserV2Response>);
}
export declare class RegisterGuestUserResponse extends ResponseBase<User> {
    bearerToken: string;
    constructor(init?: Partial<RegisterGuestUserResponse>);
}
export declare class RegisterUserV2Response extends ResponseBase<User> {
    bearerToken: string;
    constructor(init?: Partial<RegisterUserV2Response>);
}
export declare class ValidatePasswordTokenResponse extends ResponseBase<boolean> {
    project: Project;
    constructor(init?: Partial<ValidatePasswordTokenResponse>);
}
export declare class CreatePasswordResetResponse extends ResponseBase<boolean> {
    constructor(init?: Partial<CreatePasswordResetResponse>);
}
export declare class ValidateInvitationTokenResponse extends ResponseBase<boolean> {
    project: Project;
    userId: string;
    constructor(init?: Partial<ValidateInvitationTokenResponse>);
}
export declare class DeleteEmailResponse extends ResponseBase<boolean> {
    constructor(init?: Partial<DeleteEmailResponse>);
}
export declare class SendEmailNotificationV2Response extends ResponseBase<string> {
    constructor(init?: Partial<SendEmailNotificationV2Response>);
}
export declare class CreateDeviceResponse extends ResponseBase<Device> {
    constructor(init?: Partial<CreateDeviceResponse>);
}
export declare class GetDeviceResponse extends ResponseBase<Device> {
    constructor(init?: Partial<GetDeviceResponse>);
}
export declare class GetDevicesResponse extends Array<ResponseBase<Device>> {
    totalCount: number;
    constructor(init?: Partial<GetDevicesResponse>);
}
export declare class DeleteDeviceTokenResponse extends ResponseBase<boolean> {
    constructor(init?: Partial<DeleteDeviceTokenResponse>);
}
export declare class RegisterDeviceTokenResponse extends ResponseBase<Device> {
    constructor(init?: Partial<RegisterDeviceTokenResponse>);
}
export declare class RegisterDeviceExpoTokenResponse extends ResponseBase<string> {
    constructor(init?: Partial<RegisterDeviceExpoTokenResponse>);
}
export declare class UpdateDeviceUserResponse extends ResponseBase<boolean> {
    constructor(init?: Partial<UpdateDeviceUserResponse>);
}
export declare class UpdateDeviceMetaResponse extends ResponseBase<boolean> {
    constructor(init?: Partial<UpdateDeviceMetaResponse>);
}
export declare class DeleteDeviceMetaResponse extends ResponseBase<boolean> {
    constructor(init?: Partial<DeleteDeviceMetaResponse>);
}
export declare class UpdateDeviceTimeZoneResponse extends ResponseBase<boolean> {
    constructor(init?: Partial<UpdateDeviceTimeZoneResponse>);
}
export declare class DeleteNotificationResponse extends ResponseBase<boolean> {
    constructor(init?: Partial<DeleteNotificationResponse>);
}
export declare class GetNotificationResponse extends ResponseBase<PushNotification> {
    constructor(init?: Partial<GetNotificationResponse>);
}
export declare class GetNotificationsResponse extends Array<ResponseBase<PushNotification>> {
    totalCount: number;
    constructor(init?: Partial<GetNotificationsResponse>);
}
export declare class MarkNotificationAsReadResponse extends ResponseBase<boolean> {
    constructor(init?: Partial<MarkNotificationAsReadResponse>);
}
export declare class SendPushNotificationResponse extends ResponseBase<boolean> {
    constructor(init?: Partial<SendPushNotificationResponse>);
}
export declare class GetNotificationTemplateResponse extends ResponseBase<PushNotificationTemplate> {
    constructor(init?: Partial<GetNotificationTemplateResponse>);
}
export declare class GetNotificationTemplatesResponse extends Array<ResponseBase<PushNotificationTemplate>> {
    constructor(init?: Partial<GetNotificationTemplatesResponse>);
}
export declare class VerifyAppleAppStoreSubscriptionResponse extends Array<ResponseBase<Subscription>> {
    constructor(init?: Partial<VerifyAppleAppStoreSubscriptionResponse>);
}
export declare class CreateCustomerResponse extends ResponseBase<Customer> {
    constructor(init?: Partial<CreateCustomerResponse>);
}
export declare class GetCustomerResponse extends ResponseBase<Customer> {
    constructor(init?: Partial<GetCustomerResponse>);
}
export declare class GetCustomersResponse extends Array<ResponseBase<Customer>> {
    totalCount: number;
    constructor(init?: Partial<GetCustomersResponse>);
}
export declare class CreateDiscountResponse extends ResponseBase<Discount> {
    constructor(init?: Partial<CreateDiscountResponse>);
}
export declare class GetApplicableCouponsResponse extends Array<ResponseBase<ApplicableDiscount>> {
    constructor(init?: Partial<GetApplicableCouponsResponse>);
}
export declare class GetApplicableDiscountsResponse extends Array<ResponseBase<ApplicableDiscount>> {
    constructor(init?: Partial<GetApplicableDiscountsResponse>);
}
export declare class VerifyGooglePlayStoreSubscriptionResponse extends Array<ResponseBase<Subscription>> {
    constructor(init?: Partial<VerifyGooglePlayStoreSubscriptionResponse>);
}
export declare class AttachPaymentMethodResponse extends ResponseBase<PaymentMethod> {
    constructor(init?: Partial<AttachPaymentMethodResponse>);
}
export declare class GetPaymentMethodSetupResponse extends ResponseBase<PaymentMethodSetup> {
    constructor(init?: Partial<GetPaymentMethodSetupResponse>);
}
export declare class CreateOrderResponse extends ResponseBase<Order> {
    constructor(init?: Partial<CreateOrderResponse>);
}
export declare class GetOrderResponse extends ResponseBase<Order> {
    constructor(init?: Partial<GetOrderResponse>);
}
export declare class GetOrdersResponse extends Array<ResponseBase<Order>> {
    totalCount: number;
    constructor(init?: Partial<GetOrdersResponse>);
}
export declare class CreatePayseraTransactionResponse extends ResponseBase<string> {
    constructor(init?: Partial<CreatePayseraTransactionResponse>);
}
export declare class CheckStripePaymentStatusResponse extends ResponseBase<string> {
    constructor(init?: Partial<CheckStripePaymentStatusResponse>);
}
export declare class CreateStripeTransactionResponse extends ResponseBase<StripePaymentIntent> {
    constructor(init?: Partial<CreateStripeTransactionResponse>);
}
export declare class CancelSubscriptionResponse extends ResponseBase<Subscription> {
    constructor(init?: Partial<CancelSubscriptionResponse>);
}
export declare class ChangeSubscriptionResponse extends ResponseBase<Subscription> {
    constructor(init?: Partial<ChangeSubscriptionResponse>);
}
export declare class CreateSubscriptionResponse extends ResponseBase<Subscription> {
    constructor(init?: Partial<CreateSubscriptionResponse>);
}
export declare class GetProjectResponse extends ResponseBase<Project> {
    constructor(init?: Partial<GetProjectResponse>);
}
export declare class ExecuteFunctionResponse extends ResponseBase<string> {
    constructor(init?: Partial<ExecuteFunctionResponse>);
}
export declare class AppleAuthenticationResponse extends ResponseBase<AuthResponse> {
    constructor(init?: Partial<AppleAuthenticationResponse>);
}
export declare class AuthenticateResponse implements IHasSessionId, IHasBearerToken {
    userId: string;
    sessionId: string;
    userName: string;
    displayName: string;
    referrerUrl: string;
    bearerToken: string;
    refreshToken: string;
    profileUrl: string;
    roles: string[];
    permissions: string[];
    responseStatus: ResponseStatus;
    meta: {
        [index: string]: string;
    };
    constructor(init?: Partial<AuthenticateResponse>);
}
export declare class GetApiKeysResponse {
    results: UserApiKey[];
    meta: {
        [index: string]: string;
    };
    responseStatus: ResponseStatus;
    constructor(init?: Partial<GetApiKeysResponse>);
}
export declare class RegenerateApiKeysResponse {
    results: UserApiKey[];
    meta: {
        [index: string]: string;
    };
    responseStatus: ResponseStatus;
    constructor(init?: Partial<RegenerateApiKeysResponse>);
}
/**
 * Database services
 */
export declare class AggregateRequest extends CodeMashDbRequestBase implements IReturn<AggregateResponse> {
    /**
     * ID of an aggregate. Required of Pipeline is empty.
     */
    id: string;
    /**
     * Tokens that should be injected into aggregation document
     */
    tokens: {
        [index: string]: string;
    };
    constructor(init?: Partial<AggregateRequest>);
    createResponse(): AggregateResponse;
    getTypeName(): string;
}
/**
 * Database services
 */
export declare class ChangeResponsibilityRequest extends CodeMashDbRequestBase implements IReturn<ChangeResponsibilityResponse> {
    /**
     * Id of a record to change responsibility for
     */
    id: string;
    /**
     * New responsible user for this record
     */
    newResponsibleUserId: string;
    constructor(init?: Partial<ChangeResponsibilityRequest>);
    createResponse(): ChangeResponsibilityResponse;
    getTypeName(): string;
}
/**
 * Database services
 */
export declare class CountRequest extends CodeMashDbRequestBase implements IReturn<CountResponse> {
    /**
     * A query that specifies which records to count
     */
    filter: object | string;
    /**
     * The maximum number of records to count
     */
    limit?: number;
    /**
     * The number of records to skip before counting
     */
    skip?: number;
    constructor(init?: Partial<CountRequest>);
    createResponse(): CountResponse;
    getTypeName(): string;
}
/**
 * Database services
 */
export declare class DeleteManyRequest extends CodeMashDbRequestBase implements IReturn<DeleteManyResponse> {
    /**
     * Specifies deletion criteria using query operators. To delete all documents in a collection, pass in an empty document "{}"
     */
    filter: object | string;
    /**
     * If true, does not activate triggers
     */
    ignoreTriggers: boolean;
    constructor(init?: Partial<DeleteManyRequest>);
    createResponse(): DeleteManyResponse;
    getTypeName(): string;
}
/**
 * Database services
 */
export declare class DeleteOneRequest extends CodeMashDbRequestBase implements IReturn<DeleteOneResponse> {
    /**
     * ID of a record to delete. Required if Filter is empty.
     */
    id: string;
    /**
     * Specifies deletion criteria using query operators. Specify an empty document "{}" to delete the first document returned in the collection. Required if Id is not set.
     */
    filter: object | string;
    /**
     * If true, does not activate triggers
     */
    ignoreTriggers: boolean;
    constructor(init?: Partial<DeleteOneRequest>);
    createResponse(): DeleteOneResponse;
    getTypeName(): string;
}
/**
 * Database services
 */
export declare class DistinctRequest extends CodeMashDbRequestBase implements IReturn<DistinctResponse> {
    /**
     * The field for which to return distinct values
     */
    field: string;
    /**
     * A query that specifies the documents from which to retrieve the distinct values
     */
    filter: object | string;
    constructor(init?: Partial<DistinctRequest>);
    createResponse(): DistinctResponse;
    getTypeName(): string;
}
/**
 * Database services
 */
export declare class FindRequest extends CodeMashDbListRequestBase implements IReturn<FindResponse> {
    /**
     * Includes schema in response
     */
    includeSchema: boolean;
    /**
     * Includes names of referenced users
     */
    includeUserNames: boolean;
    /**
     * Includes names of referenced roles
     */
    includeRoleNames: boolean;
    /**
     * Includes names of referenced records
     */
    includeCollectionNames: boolean;
    /**
     * Includes names of referenced terms
     */
    includeTermNames: boolean;
    /**
     * Prevent setting culture code from headers
     */
    excludeCulture: boolean;
    /**
     * Includes data of referenced records
     */
    referencedFields: ReferencingField[];
    /**
     * If true, then references are injected before your list queries are applied
     */
    addReferencesFirst: boolean;
    constructor(init?: Partial<FindRequest>);
    createResponse(): FindResponse;
    getTypeName(): string;
}
/**
 * Database services
 */
export declare class FindOneRequest extends CodeMashDbRequestBase implements IReturn<FindOneResponse> {
    /**
     * ID of a record. Required if filter is not set.
     */
    id: string;
    /**
     * The selection criteria for the find one operation. Required if Id is not set.
     */
    filter: object | string;
    /**
     * A query that specifies what fields in record to return
     */
    projection: string;
    /**
     * By default schema is excluded in response. To get schema together with the record set this property to true.
     */
    includeSchema: boolean;
    /**
     * Prevent setting culture code from headers
     */
    excludeCulture: boolean;
    /**
     * Includes names of referenced users
     */
    includeUserNames: boolean;
    /**
     * Includes names of referenced roles
     */
    includeRoleNames: boolean;
    /**
     * Includes names of referenced records
     */
    includeCollectionNames: boolean;
    /**
     * Includes names of referenced terms
     */
    includeTermNames: boolean;
    /**
     * Includes data of referenced records
     */
    referencedFields: ReferencingField[];
    /**
     * If true, then references are injected before your list queries are applied
     */
    addReferencesFirst: boolean;
    constructor(init?: Partial<FindOneRequest>);
    createResponse(): FindOneResponse;
    getTypeName(): string;
}
/**
 * Database services
 */
export declare class InsertManyRequest extends CodeMashDbRequestBase implements IReturn<InsertManyResponse> {
    /**
     * Array of json records to insert
     */
    documents: string[];
    /**
     * By default records are validated before insert, set to true to prevent validation
     */
    bypassDocumentValidation: boolean;
    /**
     * If true, does not activate triggers
     */
    ignoreTriggers: boolean;
    /**
     * When calling with full permission, can set responsible user ID
     */
    responsibleUserId?: string;
    /**
     * If true, file fields that are passed will expect file ids given from your storage providers.
     */
    resolveProviderFiles: boolean;
    constructor(init?: Partial<InsertManyRequest>);
    createResponse(): InsertManyResponse;
    getTypeName(): string;
}
/**
 * Database services
 */
export declare class InsertOneRequest extends CodeMashDbRequestBase implements IReturn<InsertOneResponse> {
    /**
     * Entity represented as json to insert
     */
    document: string;
    /**
     * By default records are validated before insert, set to true to prevent validation
     */
    bypassDocumentValidation: boolean;
    /**
     * By default file uploads are done after the record is inserted, set to true in case you need to wait for files to be uploaded
     */
    waitForFileUpload: boolean;
    /**
     * If true, does not activate triggers
     */
    ignoreTriggers: boolean;
    /**
     * When calling with full permission, can set responsible user ID
     */
    responsibleUserId?: string;
    /**
     * If true, file fields that are passed will expect file ids given from your storage providers.
     */
    resolveProviderFiles: boolean;
    constructor(init?: Partial<InsertOneRequest>);
    createResponse(): InsertOneResponse;
    getTypeName(): string;
}
/**
 * Database services
 */
export declare class ReplaceOneRequest extends CodeMashDbRequestBase implements IReturn<ReplaceOneResponse> {
    /**
     * Entity represented as json to replace
     */
    document: string;
    /**
     * ID of a record to replace. Required if Filter is empty.
     */
    id: string;
    /**
     * The selection criteria for the update. The same query selectors as in the Find method are available. - https://docs.mongodb.org/manual/reference/method/db.collection.replaceOne/ . Specify an empty document '{}' to update the first document returned in the collection
     */
    filter: object | string;
    /**
     * By default file uploads are done after the record is inserted, set to true in case you need to wait for files to be uploaded
     */
    waitForFileUpload: boolean;
    /**
     * If true, inserts a new record if current record not found
     */
    isUpsert: boolean;
    /**
     * By default records are validated before insert, set to true to prevent validation
     */
    bypassDocumentValidation: boolean;
    /**
     * If true, does not activate triggers
     */
    ignoreTriggers: boolean;
    /**
     * If true, file fields that are passed will expect file ids given from your storage providers.
     */
    resolveProviderFiles: boolean;
    constructor(init?: Partial<ReplaceOneRequest>);
    createResponse(): ReplaceOneResponse;
    getTypeName(): string;
}
/**
 * Database services
 */
export declare class UpdateManyRequest extends CodeMashDbRequestBase implements IReturn<UpdateManyResponse> {
    /**
     * The modifications to apply. Use Update Operators such as $set, $unset, or $rename.
     */
    update: string;
    /**
     * The selection criteria for the update. The same query selectors as in the Find method are available. - https://docs.mongodb.org/manual/reference/method/db.collection.updateMany/#db.collection.updateMany . Specify an empty document '{}' to update the first document returned in the collection
     */
    filter: object | string;
    /**
     * By default records are validated before insert, set to true to prevent validation
     */
    bypassDocumentValidation: boolean;
    /**
     * If true, does not activate triggers
     */
    ignoreTriggers: boolean;
    /**
     * If true, file fields that are passed will expect file ids given from your storage providers.
     */
    resolveProviderFiles: boolean;
    constructor(init?: Partial<UpdateManyRequest>);
    createResponse(): UpdateManyResponse;
    getTypeName(): string;
}
/**
 * Database services
 */
export declare class UpdateOneRequest extends CodeMashDbRequestBase implements IReturn<UpdateOneResponse> {
    /**
     * ID of record to update. Required if Filter is empty.
     */
    id: string;
    /**
     * The modifications to apply. Use Update Operators such as $set, $unset, or $rename.
     */
    update: string;
    /**
     * The selection criteria for the update. Required if Id is empty.
     */
    filter: object | string;
    /**
     * By default file uploads are done after the record is inserted, set to true in case you need to wait for files to be uploaded
     */
    waitForFileUpload: boolean;
    /**
     * By default records are validated before insert, set to true to prevent validation
     */
    bypassDocumentValidation: boolean;
    /**
     * If true, does not activate triggers
     */
    ignoreTriggers: boolean;
    /**
     * If true, file fields that are passed will expect file ids given from your storage providers.
     */
    resolveProviderFiles: boolean;
    constructor(init?: Partial<UpdateOneRequest>);
    createResponse(): UpdateOneResponse;
    getTypeName(): string;
}
/**
 * Database services
 */
export declare class FindTermsRequest extends CodeMashDbListRequestBase implements IReturn<FindTermsResponse> {
    /**
     * Includes taxonomy to response
     */
    includeTaxonomy: boolean;
    /**
     * Prevent setting culture code from headers
     */
    excludeCulture: boolean;
    constructor(init?: Partial<FindTermsRequest>);
    createResponse(): FindTermsResponse;
    getTypeName(): string;
}
/**
 * Database services
 */
export declare class FindTermsChildrenRequest extends CodeMashDbListRequestBase implements IReturn<FindTermsChildrenResponse> {
    /**
     * ID of a parent term. Required if filter is not set.
     */
    id: string;
    /**
     * The selection criteria for the parent terms. Required if Id is not set.
     */
    parentFilter: string;
    /**
     * Prevent setting culture code from headers
     */
    excludeCulture: boolean;
    constructor(init?: Partial<FindTermsChildrenRequest>);
    createResponse(): FindTermsChildrenResponse;
    getTypeName(): string;
}
/**
 * File services
 */
export declare class DeleteFileRequest extends CodeMashRequestBase implements IReturnVoid {
    /**
     * ID of a file to delete
     */
    fileId: string;
    constructor(init?: Partial<DeleteFileRequest>);
    createResponse(): void;
    getTypeName(): string;
}
/**
 * File services
 */
export declare class DownloadFileRequest extends CodeMashRequestBase implements IReturn<HttpResult> {
    /**
     * ID of a file to download
     */
    fileId: string;
    /**
     * Optimization code of optimized image
     */
    optimization: string;
    constructor(init?: Partial<DownloadFileRequest>);
    createResponse(): HttpResult;
    getTypeName(): string;
}
/**
 * File services
 */
export declare class GetFileRequest extends CodeMashRequestBase implements IReturn<GetFileResponse> {
    /**
     * ID of a file to download
     */
    fileId: string;
    /**
     * Optimization code of optimized image
     */
    optimization: string;
    constructor(init?: Partial<GetFileRequest>);
    createResponse(): GetFileResponse;
    getTypeName(): string;
}
/**
 * File services
 */
export declare class UploadFileRequest extends CodeMashRequestBase implements IReturn<UploadFileResponse> {
    /**
     * Path of directory to store the file into. Leave it as empty to store file into root directory
     */
    path: string;
    /**
     * Alternative way to upload a file by providing a base64 encoded string
     */
    base64File: Base64FileUpload;
    /**
     * File account ID. If not provided, default account will be used.
     */
    accountId?: string;
    constructor(init?: Partial<UploadFileRequest>);
    createResponse(): UploadFileResponse;
    getTypeName(): string;
}
/**
 * File services
 */
export declare class UploadOrderFileRequest extends CodeMashRequestBase implements IReturn<UploadOrderFileResponse> {
    /**
     * ID of an order to upload this file for.
     */
    id: string;
    /**
     * Category of a file inside order.
     */
    category: string;
    /**
     * Alternative way to upload a file by providing a base64 encoded string
     */
    base64File: Base64FileUpload;
    constructor(init?: Partial<UploadOrderFileRequest>);
    createResponse(): UploadOrderFileResponse;
    getTypeName(): string;
}
/**
 * File services
 */
export declare class UploadRecordFileRequest extends CodeMashDbRequestBase implements IReturn<UploadRecordFileResponse> {
    /**
     * ID of a record to upload this file for. If empty, creates a temporary file which then can be saved during record operations.
     */
    recordId: string;
    /**
     * Record file field name
     */
    uniqueFieldName: string;
    /**
     * Alternative way to upload a file by providing a base64 encoded string
     */
    base64File: Base64FileUpload;
    /**
     * If true, does not activate triggers
     */
    ignoreTriggers: boolean;
    constructor(init?: Partial<UploadRecordFileRequest>);
    createResponse(): UploadRecordFileResponse;
    getTypeName(): string;
}
/**
 * File services
 */
export declare class UploadUserFileRequest extends CodeMashRequestBase implements IReturn<UploadUserFileResponse> {
    /**
     * ID of a user to upload this file for. If empty, creates a temporary file which then can be saved during user save operations.
     */
    userId?: string;
    /**
     * User meta file field name
     */
    metaFieldName: string;
    /**
     * Alternative way to upload a file by providing a base64 encoded string
     */
    base64File: Base64FileUpload;
    constructor(init?: Partial<UploadUserFileRequest>);
    createResponse(): UploadUserFileResponse;
    getTypeName(): string;
}
/**
 * Logs
 */
export declare class CreateLogRequest extends CodeMashRequestBase implements IReturn<CreateLogResponse> {
    /**
     * Message to log.
     */
    message: string;
    /**
     * Custom items providing information.
     */
    items: {
        [index: string]: string;
    };
    /**
     * Severity level of the log.
     */
    level: string;
    constructor(init?: Partial<CreateLogRequest>);
    createResponse(): CreateLogResponse;
    getTypeName(): string;
}
/**
 * Authentication
 */
export declare class AadAuthenticationRequest extends CodeMashRequestBase implements IReturn<AadAuthenticationResponse>, IOAuthRequest {
    /**
     * Mode to use for authentication
     */
    mode: string;
    /**
     * Code received from Microsoft services
     */
    code: string;
    /**
     * State received with a code
     */
    state: string;
    /**
     * When transferring access token from client app
     */
    accessToken: string;
    constructor(init?: Partial<AadAuthenticationRequest>);
    createResponse(): AadAuthenticationResponse;
    getTypeName(): string;
}
/**
 * Gets one user
 */
export declare class AuthCheckRequest extends CodeMashRequestBase implements IReturn<AuthCheckResponse> {
    constructor(init?: Partial<AuthCheckRequest>);
    createResponse(): AuthCheckResponse;
    getTypeName(): string;
}
/**
 * Authentication
 */
export declare class CredentialsAuthenticationRequest extends CodeMashRequestBase implements IReturn<CredentialsAuthenticationResponse> {
    /**
     * User's login e-mail address.
     */
    userName: string;
    /**
     * User's login password.
     */
    password: string;
    constructor(init?: Partial<CredentialsAuthenticationRequest>);
    createResponse(): CredentialsAuthenticationResponse;
    getTypeName(): string;
}
/**
 * Authentication
 */
export declare class FacebookAuthenticationRequest extends CodeMashRequestBase implements IReturn<FacebookAuthenticationResponse>, IOAuthRequest {
    /**
     * Mode to use for authentication
     */
    mode: string;
    /**
     * Code received from Facebook services
     */
    code: string;
    /**
     * State received with a code
     */
    state: string;
    /**
     * When transferring access token from client app
     */
    accessToken: string;
    constructor(init?: Partial<FacebookAuthenticationRequest>);
    createResponse(): FacebookAuthenticationResponse;
    getTypeName(): string;
}
/**
 * Authentication
 */
export declare class GoogleAuthenticationRequest extends CodeMashRequestBase implements IReturn<GoogleAuthenticationResponse>, IOAuthRequest {
    /**
     * Mode to use for authentication
     */
    mode: string;
    /**
     * Code received from Google services
     */
    code: string;
    /**
     * State received with a code
     */
    state: string;
    /**
     * When transferring access token from client app
     */
    accessToken: string;
    constructor(init?: Partial<GoogleAuthenticationRequest>);
    createResponse(): GoogleAuthenticationResponse;
    getTypeName(): string;
}
/**
 * Authentication
 */
export declare class TwitterAuthenticationRequest extends CodeMashRequestBase implements IReturn<TwitterAuthenticationResponse>, IOAuthRequest {
    /**
     * Mode to use for authentication
     */
    mode: string;
    /**
     * Code received from Twitter services
     */
    code: string;
    /**
     * State received with a code
     */
    state: string;
    /**
     * When transferring access token from client app
     */
    accessToken: string;
    /**
     * When transferring access token from client app
     */
    accessTokenSecret: string;
    /**
     * Auth token
     */
    oAuthToken: string;
    /**
     * Auth verifier
     */
    oAuthVerifier: string;
    constructor(init?: Partial<TwitterAuthenticationRequest>);
    createResponse(): TwitterAuthenticationResponse;
    getTypeName(): string;
}
/**
 * Membership
 */
export declare class ValidateUserDeactivationTokenRequest extends RequestBase implements IReturn<ValidateUserDeactivationTokenResponse> {
    /**
     * Secret token received by email for user deactivation
     */
    token: string;
    /**
     * If true, includes project details in response
     */
    includeProject: boolean;
    constructor(init?: Partial<ValidateUserDeactivationTokenRequest>);
    createResponse(): ValidateUserDeactivationTokenResponse;
    getTypeName(): string;
}
/**
 * Membership
 */
export declare class CreateUserDeactivationRequest extends CodeMashRequestBase implements IReturnVoid {
    constructor(init?: Partial<CreateUserDeactivationRequest>);
    createResponse(): void;
    getTypeName(): string;
}
/**
 * Membership
 */
export declare class DeactivateUserRequest extends RequestBase implements IReturnVoid {
    /**
     * Secret token received by email for deactivation
     */
    token: string;
    /**
     * Password for confirmation
     */
    password: string;
    constructor(init?: Partial<DeactivateUserRequest>);
    createResponse(): void;
    getTypeName(): string;
}
/**
 * Blocks selected user preventing the use of authenticated actions
 */
export declare class BlockUserRequest extends CodeMashRequestBase implements IReturnVoid {
    /**
     * ID of user to be blocked
     */
    id: string;
    constructor(init?: Partial<BlockUserRequest>);
    createResponse(): void;
    getTypeName(): string;
}
/**
 * Deletes user
 */
export declare class DeleteUserRequest extends CodeMashRequestBase implements IReturnVoid {
    /**
     * ID of user to be deleted
     */
    id: string;
    constructor(init?: Partial<DeleteUserRequest>);
    createResponse(): void;
    getTypeName(): string;
}
/**
 * Gets one user
 */
export declare class GetProfileRequest extends CodeMashRequestBase implements IReturn<GetProfileResponse> {
    /**
     * Set true if permissions should be returned
     */
    includePermissions: boolean;
    /**
     * Set true if user devices should be returned
     */
    includeDevices: boolean;
    /**
     * Set true if user unread notifications count should be returned
     */
    includeUnreadNotifications: boolean;
    /**
     * Set true if user meta data should be returned
     */
    includeMeta: boolean;
    constructor(init?: Partial<GetProfileRequest>);
    createResponse(): GetProfileResponse;
    getTypeName(): string;
}
/**
 * Gets one user
 */
export declare class GetUserRequest extends CodeMashRequestBase implements IReturn<GetUserResponse> {
    /**
     * User identifier ID
     */
    id: string;
    /**
     * Email of user
     */
    email: string;
    /**
     * Provider of user
     */
    provider: string;
    /**
     * Set true if permissions should be returned
     */
    includePermissions: boolean;
    /**
     * Set true if user devices should be returned
     */
    includeDevices: boolean;
    /**
     * Set true if user unread notifications count should be returned
     */
    includeUnreadNotifications: boolean;
    /**
     * Set true if user meta data should be returned
     */
    includeMeta: boolean;
    constructor(init?: Partial<GetUserRequest>);
    createResponse(): GetUserResponse;
    getTypeName(): string;
}
/**
 * Gets many users
 */
export declare class GetUsersRequest extends CodeMashListRequestBase implements IReturn<GetUsersResponse> {
    /**
     * Set true if permissions should be returned
     */
    includePermissions: boolean;
    /**
     * Set true if user devices should be returned
     */
    includeDevices: boolean;
    /**
     * Set true if user meta data should be returned
     */
    includeMeta: boolean;
    constructor(init?: Partial<GetUsersRequest>);
    createResponse(): GetUsersResponse;
    getTypeName(): string;
}
/**
 * Unblocks blocked user
 */
export declare class UnblockUserRequest extends CodeMashRequestBase implements IReturnVoid {
    /**
     * User Id
     */
    id: string;
    constructor(init?: Partial<UnblockUserRequest>);
    createResponse(): void;
    getTypeName(): string;
}
/**
 * Membership
 */
export declare class UpdatePasswordRequest extends CodeMashRequestBase implements IReturnVoid {
    /**
     * User whose password to change.
     */
    userId?: string;
    /**
     * Current password
     */
    currentPassword: string;
    /**
     * New password
     */
    password: string;
    /**
     * New repeated password
     */
    repeatedPassword: string;
    constructor(init?: Partial<UpdatePasswordRequest>);
    createResponse(): void;
    getTypeName(): string;
}
/**
 * Membership
 */
export declare class UpdateProfileRequest extends CodeMashRequestBase implements IReturnVoid {
    /**
     * Guest email. Will not work for normal user.
     */
    email: string;
    /**
     * Member first name
     */
    firstName: string;
    /**
     * Member last name
     */
    lastName: string;
    /**
     * Member display name
     */
    displayName: string;
    /**
     * Meta details as JSON object
     */
    meta: string;
    /**
     * Main user language
     */
    language: string;
    /**
     * User's time zone
     */
    timeZone: string;
    /**
     * Should user get marketing emails
     */
    subscribeToNews?: boolean;
    /**
     * Marketing email types to unsubscribe from
     */
    unsubscribedNewsTags: string[];
    /**
     * User's country
     */
    country: string;
    /**
     * User's 2 letter country code
     */
    countryCode: string;
    /**
     * User's state / province
     */
    area: string;
    /**
     * User's city
     */
    city: string;
    /**
     * User's street address
     */
    address: string;
    /**
     * User's secondary street address
     */
    address2: string;
    /**
     * User's phone number
     */
    phone: string;
    /**
     * User's company
     */
    company: string;
    /**
     * User's company code
     */
    companyCode: string;
    /**
     * User's postal code
     */
    postalCode: string;
    /**
     * User's gender
     */
    gender: string;
    /**
     * User's birthdate
     */
    birthDate: string;
    constructor(init?: Partial<UpdateProfileRequest>);
    createResponse(): void;
    getTypeName(): string;
}
/**
 * Membership
 */
export declare class UpdateUserRequest extends CodeMashRequestBase implements IReturnVoid {
    /**
     * User Id
     */
    id: string;
    /**
     * Guest email. Will not work for normal user.
     */
    email: string;
    /**
     * Member first name
     */
    firstName: string;
    /**
     * Member last name
     */
    lastName: string;
    /**
     * Member display name
     */
    displayName: string;
    /**
     * Role names to be applied
     */
    roles: string[];
    /**
     * Full permission tree
     */
    rolesTree: UserRoleUpdateInput[];
    /**
     * Meta details as JSON object
     */
    meta: string;
    /**
     * Main user language
     */
    language: string;
    /**
     * User's time zone
     */
    timeZone: string;
    /**
     * Should user get marketing emails
     */
    subscribeToNews?: boolean;
    /**
     * Marketing email types to unsubscribe from
     */
    unsubscribedNewsTags: string[];
    /**
     * User's country
     */
    country: string;
    /**
     * User's 2 letter country code
     */
    countryCode: string;
    /**
     * User's state / province
     */
    area: string;
    /**
     * User's city
     */
    city: string;
    /**
     * User's street address
     */
    address: string;
    /**
     * User's secondary street address
     */
    address2: string;
    /**
     * User's phone number
     */
    phone: string;
    /**
     * User's company
     */
    company: string;
    /**
     * User's company code
     */
    companyCode: string;
    /**
     * User's postal code
     */
    postalCode: string;
    /**
     * User's gender
     */
    gender: string;
    /**
     * User's birthdate
     */
    birthDate: string;
    /**
     * User's zone
     */
    zone: string;
    constructor(init?: Partial<UpdateUserRequest>);
    createResponse(): void;
    getTypeName(): string;
}
/**
 * Membership
 */
export declare class InviteUserRequest extends CodeMashRequestBase implements IReturn<InviteUserV2Response> {
    /**
     * Member display name
     */
    displayName: string;
    /**
     * Email address
     */
    email: string;
    /**
     * Member first name
     */
    firstName: string;
    /**
     * Member last name
     */
    lastName: string;
    /**
     * Role names to be applied
     */
    roles: string[];
    /**
     * Full permission tree
     */
    rolesTree: UserRoleUpdateInput[];
    /**
     * Meta details as JSON object
     */
    meta: string;
    /**
     * Main user language
     */
    language: string;
    /**
     * User's time zone
     */
    timeZone: string;
    /**
     * Should user get marketing emails
     */
    subscribeToNews?: boolean;
    /**
     * User's country
     */
    country: string;
    /**
     * User's 2 letter country code
     */
    countryCode: string;
    /**
     * User's state / province
     */
    area: string;
    /**
     * User's city
     */
    city: string;
    /**
     * User's street address
     */
    address: string;
    /**
     * User's secondary street address
     */
    address2: string;
    /**
     * User's phone number
     */
    phone: string;
    /**
     * User's company
     */
    company: string;
    /**
     * User's company code
     */
    companyCode: string;
    /**
     * User's postal code
     */
    postalCode: string;
    /**
     * User's gender
     */
    gender: string;
    /**
     * User's birthdate
     */
    birthDate: string;
    /**
     * User's zone
     */
    zone: string;
    constructor(init?: Partial<InviteUserRequest>);
    createResponse(): InviteUserV2Response;
    getTypeName(): string;
}
/**
 * Membership
 */
export declare class RegisterGuestUserRequest extends CodeMashRequestBase implements IReturn<RegisterGuestUserResponse> {
    /**
     * Member display name
     */
    displayName: string;
    /**
     * Email address
     */
    email: string;
    /**
     * Member first name
     */
    firstName: string;
    /**
     * Member last name
     */
    lastName: string;
    /**
     * Meta details as JSON object
     */
    meta: string;
    /**
     * Main user language
     */
    language: string;
    /**
     * User's time zone
     */
    timeZone: string;
    /**
     * Should user get marketing emails
     */
    subscribeToNews?: boolean;
    /**
     * User's country
     */
    country: string;
    /**
     * User's 2 letter country code
     */
    countryCode: string;
    /**
     * User's state / province
     */
    area: string;
    /**
     * User's city
     */
    city: string;
    /**
     * User's street address
     */
    address: string;
    /**
     * User's secondary street address
     */
    address2: string;
    /**
     * User's phone number
     */
    phone: string;
    /**
     * User's company
     */
    company: string;
    /**
     * User's company code
     */
    companyCode: string;
    /**
     * User's postal code
     */
    postalCode: string;
    /**
     * User's gender
     */
    gender: string;
    /**
     * User's birthdate
     */
    birthDate: string;
    /**
     * Full permission tree
     */
    rolesTree: UserRoleUpdateInput[];
    /**
     * User's zone
     */
    zone: string;
    constructor(init?: Partial<RegisterGuestUserRequest>);
    createResponse(): RegisterGuestUserResponse;
    getTypeName(): string;
}
/**
 * Membership
 */
export declare class RegisterUserRequest extends CodeMashRequestBase implements IReturn<RegisterUserV2Response> {
    /**
     * Member display name
     */
    displayName: string;
    /**
     * Email address
     */
    email: string;
    /**
     * Username
     */
    userName: string;
    /**
     * Member first name
     */
    firstName: string;
    /**
     * Member last name
     */
    lastName: string;
    /**
     * Password
     */
    password: string;
    /**
     * Role names to be applied
     */
    roles: string[];
    /**
     * Full permission tree
     */
    rolesTree: UserRoleUpdateInput[];
    /**
     * Login immediately ?
     */
    autoLogin: boolean;
    /**
     * Meta details as JSON object
     */
    meta: string;
    /**
     * Main user language
     */
    language: string;
    /**
     * User's time zone
     */
    timeZone: string;
    /**
     * Should user get marketing emails
     */
    subscribeToNews?: boolean;
    /**
     * User's country
     */
    country: string;
    /**
     * User's 2 letter country code
     */
    countryCode: string;
    /**
     * User's state / province
     */
    area: string;
    /**
     * User's city
     */
    city: string;
    /**
     * User's street address
     */
    address: string;
    /**
     * User's secondary street address
     */
    address2: string;
    /**
     * User's phone number
     */
    phone: string;
    /**
     * User's company
     */
    company: string;
    /**
     * User's company code
     */
    companyCode: string;
    /**
     * User's postal code
     */
    postalCode: string;
    /**
     * User's gender
     */
    gender: string;
    /**
     * User's birthdate
     */
    birthDate: string;
    /**
     * User's zone
     */
    zone: string;
    constructor(init?: Partial<RegisterUserRequest>);
    createResponse(): RegisterUserV2Response;
    getTypeName(): string;
}
/**
 * Membership
 */
export declare class ValidatePasswordTokenRequest extends RequestBase implements IReturn<ValidatePasswordTokenResponse> {
    /**
     * Secret token received by email for password reset
     */
    token: string;
    /**
     * If true, includes project details in response
     */
    includeProject: boolean;
    constructor(init?: Partial<ValidatePasswordTokenRequest>);
    createResponse(): ValidatePasswordTokenResponse;
    getTypeName(): string;
}
/**
 * Membership
 */
export declare class CreatePasswordResetRequest extends CodeMashRequestBase implements IReturn<CreatePasswordResetResponse> {
    /**
     * User login email
     */
    email: string;
    constructor(init?: Partial<CreatePasswordResetRequest>);
    createResponse(): CreatePasswordResetResponse;
    getTypeName(): string;
}
/**
 * Membership
 */
export declare class ResetPasswordRequest extends RequestBase implements IReturnVoid {
    /**
     * Secret token received by email for password reset
     */
    token: string;
    /**
     * New user password
     */
    password: string;
    /**
     * New repeated user password
     */
    repeatedPassword: string;
    constructor(init?: Partial<ResetPasswordRequest>);
    createResponse(): void;
    getTypeName(): string;
}
/**
 * Membership
 */
export declare class ValidateInvitationTokenRequest extends RequestBase implements IReturn<ValidateInvitationTokenResponse> {
    /**
     * Secret token received by email for invitation
     */
    token: string;
    /**
     * If true, includes project details in response
     */
    includeProject: boolean;
    constructor(init?: Partial<ValidateInvitationTokenRequest>);
    createResponse(): ValidateInvitationTokenResponse;
    getTypeName(): string;
}
/**
 * Membership
 */
export declare class VerifyUserRequest extends RequestBase implements IReturnVoid {
    /**
     * Secret token received by email for registration confirmation
     */
    token: string;
    constructor(init?: Partial<VerifyUserRequest>);
    createResponse(): void;
    getTypeName(): string;
}
/**
 * Membership
 */
export declare class VerifyUserInvitationRequest extends RequestBase implements IReturnVoid {
    /**
     * Secret token received by email for invitation confirmation
     */
    token: string;
    /**
     * New user password
     */
    password: string;
    /**
     * New repeated user password
     */
    repeatedPassword: string;
    constructor(init?: Partial<VerifyUserInvitationRequest>);
    createResponse(): void;
    getTypeName(): string;
}
/**
 * Deletes an email from queue
 */
export declare class DeleteEmailRequest extends CodeMashRequestBase implements IReturn<DeleteEmailResponse> {
    /**
     * ID of an email to delete
     */
    id: string;
    constructor(init?: Partial<DeleteEmailRequest>);
    createResponse(): DeleteEmailResponse;
    getTypeName(): string;
}
/**
 * Sends an email message
 */
export declare class SendEmailRequest extends CodeMashRequestBase implements IReturn<SendEmailNotificationV2Response> {
    /**
     * ID of a template to use
     */
    templateId: string;
    /**
     * Recipients' email addresses. Emails, Users or Roles are required.
     */
    emails: string[];
    /**
     * Recipients' user IDs. Emails, Users or Roles are required.
     */
    users: string[];
    /**
     * Recipients' roles. Emails, Users or Roles are required.
     */
    roles: string[];
    /**
     * CC recipients' email addresses
     */
    ccEmails: string[];
    /**
     * CC recipients' user IDs
     */
    ccUsers: string[];
    /**
     * BCC recipients' email addresses
     */
    bccEmails: string[];
    /**
     * BCC recipients' user IDs
     */
    bccUsers: string[];
    /**
     * Custom tokens to inject into template
     */
    tokens: {
        [index: string]: string;
    };
    /**
     * Amount of milliseconds to postpone sending the email
     */
    postpone?: number;
    /**
     * If true, sends an email by recipient's time zone. Postpone needs to be set for this to have an effect. Requires Users or Roles recipients. Default - true
     */
    respectTimeZone: boolean;
    /**
     * If true, will try to send an email using a language from CultureCode instead of user's language
     */
    forceRequestLanguage: boolean;
    /**
     * File IDs to attach to email message
     */
    attachments: string[];
    constructor(init?: Partial<SendEmailRequest>);
    createResponse(): SendEmailNotificationV2Response;
    getTypeName(): string;
}
/**
 * Registers notification device which can receive push notifications
 */
export declare class CreateDeviceRequest extends CodeMashRequestBase implements IReturn<CreateDeviceResponse> {
    /**
     * UserId. Parameter can be nullable, but if you provide it, device will be combined with the one of membership users.
     */
    userId?: string;
    /**
     * Device operating system
     */
    operatingSystem: string;
    /**
     * Device brand
     */
    brand: string;
    /**
     * Device name
     */
    deviceName: string;
    /**
     * Device timezone, expects to get a TZ database name
     */
    timeZone: string;
    /**
     * Device language, expects to get a 2 letter identifier
     */
    language: string;
    /**
     * Device locale
     */
    locale: string;
    /**
     * Meta information that comes from device.
     */
    meta: {
        [index: string]: string;
    };
    constructor(init?: Partial<CreateDeviceRequest>);
    createResponse(): CreateDeviceResponse;
    getTypeName(): string;
}
/**
 * Deletes the device from push notifications recipients list.
 */
export declare class DeleteDeviceRequest extends CodeMashRequestBase implements IReturnVoid {
    /**
     * Device Id or device key
     */
    id: string;
    constructor(init?: Partial<DeleteDeviceRequest>);
    createResponse(): void;
    getTypeName(): string;
}
/**
 * Gets the device which can receive push notifications.
 */
export declare class GetDeviceRequest extends CodeMashRequestBase implements IReturn<GetDeviceResponse> {
    /**
     * Device Id or device key
     */
    id: string;
    constructor(init?: Partial<GetDeviceRequest>);
    createResponse(): GetDeviceResponse;
    getTypeName(): string;
}
/**
 * Gets mobile devices
 */
export declare class GetDevicesRequest extends CodeMashListRequestBase implements IReturn<GetDevicesResponse> {
    /**
     * User ID of who's devices to get.
     */
    userId?: string;
    constructor(init?: Partial<GetDevicesRequest>);
    createResponse(): GetDevicesResponse;
    getTypeName(): string;
}
/**
 * Deletes push notification token
 */
export declare class DeleteDeviceTokenRequest extends CodeMashRequestBase implements IReturn<DeleteDeviceTokenResponse> {
    /**
     * Device Id
     */
    id: string;
    /**
     * Device key
     */
    deviceKey: string;
    constructor(init?: Partial<DeleteDeviceTokenRequest>);
    createResponse(): DeleteDeviceTokenResponse;
    getTypeName(): string;
}
/**
 * Registers One Signal push notification token
 */
export declare class RegisterDeviceTokenRequest extends CodeMashRequestBase implements IReturn<RegisterDeviceTokenResponse> {
    /**
     * Notification provider. Can be "Expo", "OneSignal", "Firebase"
     */
    provider: string;
    /**
     * Push account ID. If you have more than 1 account for provider pass this instead.
     */
    accountId?: string;
    /**
     * Identifier for device depending on provider (device ID, player ID)
     */
    token: string;
    /**
     * User ID to attach this token to.
     */
    userId?: string;
    /**
     * Device ID to attach this token to. New device will be created if this is null.
     */
    deviceId?: string;
    /**
     * Device operating system
     */
    operatingSystem: string;
    /**
     * Device brand
     */
    brand: string;
    /**
     * Device name
     */
    deviceName: string;
    /**
     * Device timezone, expects to get a TZ database name
     */
    timeZone: string;
    /**
     * Device language, expects to get a 2 letter identifier
     */
    language: string;
    /**
     * Device locale
     */
    locale: string;
    /**
     * Other device information
     */
    meta: {
        [index: string]: string;
    };
    constructor(init?: Partial<RegisterDeviceTokenRequest>);
    createResponse(): RegisterDeviceTokenResponse;
    getTypeName(): string;
}
/**
 * Registers expo push notification token
 */
export declare class RegisterDeviceExpoTokenRequest extends CodeMashRequestBase implements IReturn<RegisterDeviceExpoTokenResponse> {
    /**
     * User Id
     */
    userId?: string;
    /**
     * Device Id
     */
    deviceId?: string;
    /**
     * Token
     */
    token: string;
    /**
     * TimeZone
     */
    timeZone: string;
    /**
     * Meta information that comes from device.
     */
    meta: {
        [index: string]: string;
    };
    constructor(init?: Partial<RegisterDeviceExpoTokenRequest>);
    createResponse(): RegisterDeviceExpoTokenResponse;
    getTypeName(): string;
}
/**
 * Updates device details
 */
export declare class UpdateDeviceRequest extends CodeMashRequestBase implements IReturnVoid {
    /**
     * Device id or device key
     */
    id: string;
    /**
     * Device operating system
     */
    operatingSystem: string;
    /**
     * Device brand
     */
    brand: string;
    /**
     * Device name
     */
    deviceName: string;
    /**
     * Device timezone, expects to get a TZ database name
     */
    timeZone: string;
    /**
     * Device language, expects to get a 2 letter identifier
     */
    language: string;
    /**
     * Device locale
     */
    locale: string;
    /**
     * Meta information that comes from device. Pass an empty object to delete.
     */
    meta: {
        [index: string]: string;
    };
    constructor(init?: Partial<UpdateDeviceRequest>);
    createResponse(): void;
    getTypeName(): string;
}
/**
 * Attaches user to the device which can receive push notifications
 */
export declare class UpdateDeviceUserRequest extends CodeMashRequestBase implements IReturn<UpdateDeviceUserResponse> {
    /**
     * Device Id or device key
     */
    id: string;
    /**
     * User Id
     */
    userId?: string;
    constructor(init?: Partial<UpdateDeviceUserRequest>);
    createResponse(): UpdateDeviceUserResponse;
    getTypeName(): string;
}
/**
 * Applies metadata on the device
 */
export declare class UpdateDeviceMetaRequest extends CodeMashRequestBase implements IReturn<UpdateDeviceMetaResponse> {
    /**
     * Device Id
     */
    id: string;
    /**
     * Device Id
     */
    meta: {
        [index: string]: string;
    };
    constructor(init?: Partial<UpdateDeviceMetaRequest>);
    createResponse(): UpdateDeviceMetaResponse;
    getTypeName(): string;
}
/**
 * Deletes metadata of the device
 */
export declare class DeleteDeviceMetaRequest extends CodeMashRequestBase implements IReturn<DeleteDeviceMetaResponse> {
    /**
     * Device Id
     */
    id: string;
    /**
     * Keys to be deleted
     */
    keys: string[];
    /**
     * Delete all keys
     */
    deleteAllKeys: boolean;
    constructor(init?: Partial<DeleteDeviceMetaRequest>);
    createResponse(): DeleteDeviceMetaResponse;
    getTypeName(): string;
}
/**
 * Updates the time zone of the device
 */
export declare class UpdateDeviceTimeZoneRequest extends CodeMashRequestBase implements IReturn<UpdateDeviceTimeZoneResponse> {
    /**
     * Device Id
     */
    id: string;
    /**
     * In which time zone device is registered. If we are aware of location, we can provide notifications in right time frame.
     */
    timeZone: string;
    constructor(init?: Partial<UpdateDeviceTimeZoneRequest>);
    createResponse(): UpdateDeviceTimeZoneResponse;
    getTypeName(): string;
}
/**
 * Deletes the push notification from queue
 */
export declare class DeleteNotificationRequest extends CodeMashRequestBase implements IReturn<DeleteNotificationResponse> {
    /**
     * Notification Id
     */
    id: string;
    /**
     * Device key
     */
    deviceKey: string;
    constructor(init?: Partial<DeleteNotificationRequest>);
    createResponse(): DeleteNotificationResponse;
    getTypeName(): string;
}
/**
 * Gets the push notifications
 */
export declare class GetNotificationRequest extends CodeMashRequestBase implements IReturn<GetNotificationResponse> {
    /**
     * Notification Id.
     */
    id: string;
    /**
     * Device key
     */
    deviceKey: string;
    constructor(init?: Partial<GetNotificationRequest>);
    createResponse(): GetNotificationResponse;
    getTypeName(): string;
}
/**
 * Gets the push notifications
 */
export declare class GetNotificationsRequest extends CodeMashListRequestBase implements IReturn<GetNotificationsResponse> {
    /**
     * Notifications delivered to specified user.
     */
    userId?: string;
    /**
     * Notifications delivered to specified device.
     */
    deviceId?: string;
    /**
     * Device key
     */
    deviceKey: string;
    constructor(init?: Partial<GetNotificationsRequest>);
    createResponse(): GetNotificationsResponse;
    getTypeName(): string;
}
/**
 * Gets amount of push notifications
 */
export declare class GetNotificationsCountRequest extends CodeMashRequestBase implements IReturn<GetNotificationsResponse> {
    /**
     * Notifications delivered to specified user.
     */
    userId?: string;
    /**
     * Notifications delivered to specified device.
     */
    deviceId?: string;
    /**
     * Device key
     */
    deviceKey: string;
    /**
     * Optional filter to count only matched notifications.
     */
    filter: object | string;
    /**
     * Optional filter to count only matched notifications.
     */
    groupBy: string;
    constructor(init?: Partial<GetNotificationsCountRequest>);
    createResponse(): GetNotificationsResponse;
    getTypeName(): string;
}
/**
 * Marks notification as read
 */
export declare class MarkAllNotificationsAsReadRequest extends CodeMashRequestBase implements IReturn<MarkNotificationAsReadResponse> {
    /**
     * UserId - (Either userId or deviceId is required). The same massage can be spread across many users, so we need to identify which user read the message
     */
    userId?: string;
    /**
     * DeviceId - (Either userId or deviceId is required). The same massage can be spread across many devices, so we need to identify in which device the message has been read
     */
    deviceId: string;
    /**
     * Device key
     */
    deviceKey: string;
    /**
     * Optional filter to read only matched notifications.
     */
    filter: object | string;
    constructor(init?: Partial<MarkAllNotificationsAsReadRequest>);
    createResponse(): MarkNotificationAsReadResponse;
    getTypeName(): string;
}
/**
 * Marks notification as read
 */
export declare class MarkNotificationAsReadRequest extends CodeMashRequestBase implements IReturn<MarkNotificationAsReadResponse> {
    /**
     * NotificationId - notification to be marked as read
     */
    notificationId: string;
    /**
     * UserId - (Either userId or deviceId is required). The same massage can be spread across many users, so we need to identify which user read the message
     */
    userId?: string;
    /**
     * DeviceId - (Either userId or deviceId is required). The same massage can be spread across many devices, so we need to identify in which device the message has been read
     */
    deviceId: string;
    /**
     * Device key
     */
    deviceKey: string;
    constructor(init?: Partial<MarkNotificationAsReadRequest>);
    createResponse(): MarkNotificationAsReadResponse;
    getTypeName(): string;
}
/**
 * Pushes a mobile notification
 */
export declare class SendPushNotificationRequest extends CodeMashRequestBase implements IReturn<SendPushNotificationResponse> {
    /**
     * Template Id
     */
    templateId: string;
    /**
     * Recipients list. You can send messages by specifying CodeMash membership users which are combined with devices.
     */
    users: string[];
    /**
     * Messages to be delivered into specified devices.
     */
    devices: string[];
    /**
     * Messages to be delivered to specified roles.
     */
    roles: string[];
    /**
     * Custom tokens which are not provided in project
     */
    tokens: {
        [index: string]: string;
    };
    /**
     * Amount of milliseconds to postpone pushing the notification.
     */
    postpone?: number;
    /**
     * Respects user's time zone. If false, send by project time zone. Default - true. Postpone needs to be set.
     */
    respectTimeZone: boolean;
    /**
     * If set to true, notification will not be pushed to user's device. Cannot be true if postpone is set.
     */
    isNonPushable: boolean;
    /**
     * Will try to send a template for language from CultureCode over the user's language
     */
    forceRequestLanguage: boolean;
    constructor(init?: Partial<SendPushNotificationRequest>);
    createResponse(): SendPushNotificationResponse;
    getTypeName(): string;
}
/**
 * Get push notification template
 */
export declare class GetNotificationTemplateRequest extends CodeMashRequestBase implements IReturn<GetNotificationTemplateResponse> {
    /**
     * ID of push notification template
     */
    id: string;
    constructor(init?: Partial<GetNotificationTemplateRequest>);
    createResponse(): GetNotificationTemplateResponse;
    getTypeName(): string;
}
/**
 * Get push notification templates
 */
export declare class GetNotificationTemplatesRequest extends CodeMashRequestBase implements IReturn<GetNotificationTemplatesResponse> {
    constructor(init?: Partial<GetNotificationTemplatesRequest>);
    createResponse(): GetNotificationTemplatesResponse;
    getTypeName(): string;
}
/**
 * Payments
 */
export declare class VerifyAppleAppStoreSubscriptionRequest extends CodeMashRequestBase implements IReturn<VerifyAppleAppStoreSubscriptionResponse> {
    /**
     * Payment receipt.
     */
    receipt: string;
    /**
     * ID of customer who subscribed. Required for first time calling this endpoint.
     */
    customerId: string;
    /**
     * Subscription plan ID. Required for first time calling this endpoint.
     */
    planId: string;
    constructor(init?: Partial<VerifyAppleAppStoreSubscriptionRequest>);
    createResponse(): VerifyAppleAppStoreSubscriptionResponse;
    getTypeName(): string;
}
/**
 * Payments
 */
export declare class CreateCustomerRequest extends CodeMashRequestBase implements IReturn<CreateCustomerResponse> {
    /**
     * Payment account ID.
     */
    accountId: string;
    /**
     * User's ID to whom to attach this customer.
     */
    userId: string;
    /**
     * Customer's phone. Overrides user's phone.
     */
    phone: string;
    /**
     * Customer's full name. Overrides user's name.
     */
    name: string;
    /**
     * Customer's description.
     */
    description: string;
    /**
     * Customer's email. Overrides user's email.
     */
    email: string;
    /**
     * Customer's city. Overrides user's city.
     */
    city: string;
    /**
     * Customer's country. Overrides user's country.
     */
    countryCode: string;
    /**
     * Customer's address 1. Overrides user's address 1.
     */
    address: string;
    /**
     * Customer's address 2. Overrides user's address 2.
     */
    address2: string;
    /**
     * Customer's postal code. Overrides user's postal code.
     */
    postalCode: string;
    /**
     * Customer's state. Overrides user's area.
     */
    area: string;
    /**
     * Additional key, value data.
     */
    meta: {
        [index: string]: string;
    };
    constructor(init?: Partial<CreateCustomerRequest>);
    createResponse(): CreateCustomerResponse;
    getTypeName(): string;
}
/**
 * Payments
 */
export declare class DeleteCustomerRequest extends CodeMashRequestBase implements IReturnVoid {
    /**
     * Customer's ID to delete.
     */
    id: string;
    constructor(init?: Partial<DeleteCustomerRequest>);
    createResponse(): void;
    getTypeName(): string;
}
/**
 * Payments
 */
export declare class GetCustomerRequest extends CodeMashRequestBase implements IReturn<GetCustomerResponse> {
    /**
     * Customer's ID to get.
     */
    id: string;
    /**
     * If true, id should be customer's provider Id.
     */
    useProviderId: boolean;
    /**
     * If true, id should be customer's user Id.
     */
    useUserId: boolean;
    /**
     * Required if UseUserId is set to true.
     */
    paymentProvider: string;
    constructor(init?: Partial<GetCustomerRequest>);
    createResponse(): GetCustomerResponse;
    getTypeName(): string;
}
/**
 * Payments
 */
export declare class GetCustomersRequest extends CodeMashListRequestBase implements IReturn<GetCustomersResponse> {
    /**
     * User's ID whose customers to get.
     */
    userId?: string;
    constructor(init?: Partial<GetCustomersRequest>);
    createResponse(): GetCustomersResponse;
    getTypeName(): string;
}
/**
 * Payments
 */
export declare class UpdateCustomerRequest extends CodeMashRequestBase implements IReturnVoid {
    /**
     * Customer's ID.
     */
    id: string;
    /**
     * Customer's phone. Overrides user's phone.
     */
    phone: string;
    /**
     * Customer's full name. Overrides user's name.
     */
    name: string;
    /**
     * Customer's description.
     */
    description: string;
    /**
     * Customer's email. Overrides user's email.
     */
    email: string;
    /**
     * Customer's city. Overrides user's city.
     */
    city: string;
    /**
     * Customer's country. Overrides user's country.
     */
    countryCode: string;
    /**
     * Customer's address 1. Overrides user's address 1.
     */
    address: string;
    /**
     * Customer's address 2. Overrides user's address 2.
     */
    address2: string;
    /**
     * Customer's postal code. Overrides user's postal code.
     */
    postalCode: string;
    /**
     * Customer's state. Overrides user's area.
     */
    area: string;
    /**
     * Additional key, value data.
     */
    meta: {
        [index: string]: string;
    };
    constructor(init?: Partial<UpdateCustomerRequest>);
    createResponse(): void;
    getTypeName(): string;
}
/**
 * Payments
 */
export declare class CreateDiscountRequest extends CodeMashDbRequestBase implements IReturn<CreateDiscountResponse> {
    /**
     * Type of the discount (Coupon or Discount).
     */
    type: string;
    /**
     * Unique discount code.
     */
    code: string;
    /**
     * Display name of the discount.
     */
    displayName: string;
    /**
     * Start date of being active.
     */
    validFrom?: number;
    /**
     * End date of being active.
     */
    validUntil?: number;
    /**
     * Restriction type of discount. Can be Fixed, Percentage, Price or Quantity.
     */
    restrictionType: string;
    /**
     * Discount amount for Fixed or Percentage restriction types.
     */
    amount?: number;
    /**
     * Discount amounts for Price or Quantity restriction types.
     */
    boundaries: PaymentDiscountBoundary[];
    /**
     * Target type for specific records. Can be All, Category, Individual.
     */
    targetType: string;
    /**
     * Records for Individual target type.
     */
    records: string[];
    /**
     * Collection field for Category target type.
     */
    categoryField: string;
    /**
     * Values for Category target type.
     */
    categoryValues: string[];
    /**
     * Limitations for discounts to be used only with certain payment accounts.
     */
    paymentAccounts: string[];
    /**
     * Users who can redeem this discount.
     */
    users: string[];
    /**
     * Emails for potential users who can redeem this discount. When user registers with one of the provided emails, he will be allowed to use this discount. Doesn't work with existing users.
     */
    emails: string[];
    /**
     * Amount of times that the same user can redeem. Default - 1.
     */
    userCanRedeem?: number;
    /**
     * Amount of times in total this discount can be redeemed.
     */
    totalCanRedeem?: number;
    /**
     * Should the discount be enabled. Default - true.
     */
    enabled: boolean;
    /**
     * Should the discount be combined with other discounts. Default - true.
     */
    combineDiscounts: boolean;
    constructor(init?: Partial<CreateDiscountRequest>);
    createResponse(): CreateDiscountResponse;
    getTypeName(): string;
}
/**
 * Payments
 */
export declare class DeleteDiscountRequest extends CodeMashRequestBase implements IReturnVoid {
    /**
     * Id of discount.
     */
    id: string;
    constructor(init?: Partial<DeleteDiscountRequest>);
    createResponse(): void;
    getTypeName(): string;
}
/**
 * Payments
 */
export declare class GetApplicableCouponsRequest extends CodeMashRequestBase implements IReturn<GetApplicableCouponsResponse> {
    /**
     * Unique code of a discount.
     */
    codes: string[];
    /**
     * Order schema ID. Must match one of your order schemas including user zone.
     */
    orderSchemaId: string;
    /**
     * User ID. Requires administrator permission.
     */
    userId?: string;
    /**
     * If true, will consider a buyer as a guest user.
     */
    asGuest: boolean;
    /**
     * Order lines. Check which records are applicable for discount.
     */
    lines: OrderLineInput[];
    constructor(init?: Partial<GetApplicableCouponsRequest>);
    createResponse(): GetApplicableCouponsResponse;
    getTypeName(): string;
}
/**
 * Payments
 */
export declare class GetApplicableDiscountsRequest extends CodeMashRequestBase implements IReturn<GetApplicableDiscountsResponse> {
    /**
     * Order schema ID. Must match one of your order schemas including user zone.
     */
    orderSchemaId: string;
    /**
     * User ID. Requires administrator permission.
     */
    userId?: string;
    /**
     * If true, will consider a buyer as a guest user.
     */
    asGuest: boolean;
    /**
     * Order lines. Check which records are applicable for discount.
     */
    lines: OrderLineInput[];
    constructor(init?: Partial<GetApplicableDiscountsRequest>);
    createResponse(): GetApplicableDiscountsResponse;
    getTypeName(): string;
}
/**
 * Payments
 */
export declare class UpdateDiscountRequest extends CodeMashRequestBase implements IReturnVoid {
    /**
     * Id of discount.
     */
    id: string;
    /**
     * Display name of the discount.
     */
    displayName: string;
    /**
     * Start date of being active.
     */
    validFrom?: number;
    /**
     * End date of being active.
     */
    validUntil?: number;
    /**
     * Restriction type of discount. Can be Fixed, Percentage, Price or Quantity.
     */
    restrictionType: string;
    /**
     * Discount amount for Fixed or Percentage restriction types.
     */
    amount?: number;
    /**
     * Discount amounts for Price or Quantity restriction types.
     */
    boundaries: PaymentDiscountBoundary[];
    /**
     * Target type for specific records. Can be All, Category, Individual.
     */
    targetType: string;
    /**
     * Records for Individual target type.
     */
    records: string[];
    /**
     * Collection field for Category target type.
     */
    categoryField: string;
    /**
     * Values for Category target type.
     */
    categoryValues: string[];
    /**
     * Limitations for discounts to be used only with certain payment accounts.
     */
    paymentAccounts: string[];
    /**
     * Users who can redeem this discount.
     */
    users: string[];
    /**
     * Emails for potential users who can redeem this discount. When user registers with one of the provided emails, he will be allowed to use this discount. Doesn't work with existing users.
     */
    emails: string[];
    /**
     * Amount of times that the same user can redeem.
     */
    userCanRedeem?: number;
    /**
     * Amount of times in total this discount can be redeemed.
     */
    totalCanRedeem?: number;
    /**
     * Should the discount be enabled.
     */
    enabled?: boolean;
    /**
     * Should the discount be combined with other discounts
     */
    combineDiscounts?: boolean;
    constructor(init?: Partial<UpdateDiscountRequest>);
    createResponse(): void;
    getTypeName(): string;
}
/**
 * Payments
 */
export declare class VerifyGooglePlayStoreSubscriptionRequest extends CodeMashRequestBase implements IReturn<VerifyGooglePlayStoreSubscriptionResponse> {
    /**
     * Payment receipt.
     */
    receipt: string;
    /**
     * ID of customer who subscribed. Required for first time calling this endpoint.
     */
    customerId: string;
    /**
     * Subscription plan ID. Required for first time calling this endpoint.
     */
    planId: string;
    constructor(init?: Partial<VerifyGooglePlayStoreSubscriptionRequest>);
    createResponse(): VerifyGooglePlayStoreSubscriptionResponse;
    getTypeName(): string;
}
/**
 * Payments
 */
export declare class AttachPaymentMethodRequest extends CodeMashRequestBase implements IReturn<AttachPaymentMethodResponse> {
    /**
     * Customer's ID.
     */
    customerId: string;
    /**
     * Setup intent ID.
     */
    setupId: string;
    /**
     * Client secret got from creating setup intent.
     */
    setupClientSecret: string;
    /**
     * Should this payment method be default.
     */
    asDefault: boolean;
    /**
     * Should current payment methods be detached.
     */
    detachOthers: boolean;
    constructor(init?: Partial<AttachPaymentMethodRequest>);
    createResponse(): AttachPaymentMethodResponse;
    getTypeName(): string;
}
/**
 * Payments
 */
export declare class DetachPaymentMethodRequest extends CodeMashRequestBase implements IReturnVoid {
    /**
     * Payment method's ID.
     */
    id: string;
    /**
     * Customer's ID.
     */
    customerId: string;
    constructor(init?: Partial<DetachPaymentMethodRequest>);
    createResponse(): void;
    getTypeName(): string;
}
/**
 * Payments
 */
export declare class GetPaymentMethodSetupRequest extends CodeMashRequestBase implements IReturn<GetPaymentMethodSetupResponse> {
    /**
     * Payment account ID.
     */
    accountId: string;
    /**
     * Can payment method be used without a user.
     */
    allowOffline: boolean;
    constructor(init?: Partial<GetPaymentMethodSetupRequest>);
    createResponse(): GetPaymentMethodSetupResponse;
    getTypeName(): string;
}
/**
 * Payments
 */
export declare class UpdatePaymentMethodRequest extends CodeMashRequestBase implements IReturnVoid {
    /**
     * Payment method's ID.
     */
    id: string;
    /**
     * Customer's ID.
     */
    customerId: string;
    /**
     * Payment method's phone. Overrides user's phone.
     */
    phone: string;
    /**
     * Payment method's full name. Overrides user's name.
     */
    name: string;
    /**
     * Payment method's description.
     */
    description: string;
    /**
     * Payment method's email. Overrides user's email.
     */
    email: string;
    /**
     * Payment method's city. Overrides user's city.
     */
    city: string;
    /**
     * Payment method's country. Overrides user's country.
     */
    countryCode: string;
    /**
     * Payment method's address 1. Overrides user's address 1.
     */
    address: string;
    /**
     * Payment method's address 2. Overrides user's address 2.
     */
    address2: string;
    /**
     * Payment method's postal code. Overrides user's postal code.
     */
    postalCode: string;
    /**
     * Payment method's state. Overrides user's area.
     */
    area: string;
    /**
     * Additional key, value data.
     */
    meta: {
        [index: string]: string;
    };
    constructor(init?: Partial<UpdatePaymentMethodRequest>);
    createResponse(): void;
    getTypeName(): string;
}
/**
 * Payments
 */
export declare class CreateOrderRequest extends CodeMashRequestBase implements IReturn<CreateOrderResponse> {
    /**
     * Payment account ID.
     */
    accountId: string;
    /**
     * Order schema ID. Must match one of your order schemas including user zone.
     */
    orderSchemaId: string;
    /**
     * User ID. Requires administrator permission.
     */
    userId?: string;
    /**
     * Order lines.
     */
    lines: OrderLineInput[];
    /**
     * Coupon discounts.
     */
    coupons: string[];
    /**
     * If true, will consider a buyer as a guest user.
     */
    asGuest: boolean;
    /**
     * Customer details. Should be provided if this is a guest. If this is a user, then this will override user details.
     */
    customerDetails: OrderCustomerInput;
    /**
     * Consider this as a test order
     */
    isTest: boolean;
    /**
     * Additional information for order
     */
    meta: {
        [index: string]: string;
    };
    constructor(init?: Partial<CreateOrderRequest>);
    createResponse(): CreateOrderResponse;
    getTypeName(): string;
}
/**
 * Payments
 */
export declare class GetOrderRequest extends CodeMashRequestBase implements IReturn<GetOrderResponse> {
    /**
     * Order ID.
     */
    id: string;
    /**
     * If true, includes paid transactions to response.
     */
    includePaidTransactions: boolean;
    constructor(init?: Partial<GetOrderRequest>);
    createResponse(): GetOrderResponse;
    getTypeName(): string;
}
/**
 * Payments
 */
export declare class GetOrdersRequest extends CodeMashListRequestBase implements IReturn<GetOrdersResponse> {
    /**
     * User ID. Requires administrator permission.
     */
    userId: string;
    /**
     * If true, includes paid transactions to response.
     */
    includePaidTransactions: boolean;
    /**
     * API key of your cluster. Can be passed in a header as X-CM-Cluster.
     */
    cluster: string;
    constructor(init?: Partial<GetOrdersRequest>);
    createResponse(): GetOrdersResponse;
    getTypeName(): string;
}
/**
 * Payments
 */
export declare class CreatePayseraTransactionRequest extends CodeMashRequestBase implements IReturn<CreatePayseraTransactionResponse> {
    /**
     * Order ID to pay for.
     */
    id: string;
    /**
     * To choose which mode to use from payment settings.
     */
    mode: string;
    constructor(init?: Partial<CreatePayseraTransactionRequest>);
    createResponse(): CreatePayseraTransactionResponse;
    getTypeName(): string;
}
/**
 * Payments
 */
export declare class CheckStripePaymentStatusRequest extends CodeMashRequestBase implements IReturn<CheckStripePaymentStatusResponse> {
    /**
     * Order ID.
     */
    id: string;
    /**
     * Payment account ID.
     */
    accountId: string;
    /**
     * Transaction ID which was used with this order and client secret.
     */
    transactionId: string;
    /**
     * ClientSecret got from creating stripe transaction.
     */
    clientSecret: string;
    constructor(init?: Partial<CheckStripePaymentStatusRequest>);
    createResponse(): CheckStripePaymentStatusResponse;
    getTypeName(): string;
}
/**
 * Payments
 */
export declare class CreateStripeTransactionRequest extends CodeMashRequestBase implements IReturn<CreateStripeTransactionResponse> {
    /**
     * Order ID to pay for.
     */
    id: string;
    /**
     * Payment method ID to use.
     */
    paymentMethodId: string;
    /**
     * Customer ID to whom belongs this payment method.
     */
    customerId: string;
    constructor(init?: Partial<CreateStripeTransactionRequest>);
    createResponse(): CreateStripeTransactionResponse;
    getTypeName(): string;
}
/**
 * Payments
 */
export declare class CancelSubscriptionRequest extends CodeMashRequestBase implements IReturn<CancelSubscriptionResponse> {
    /**
     * Subscription ID.
     */
    id: string;
    /**
     * Customer's ID.
     */
    customerId: string;
    /**
     * Should cancel instantly. Overrides payment settings
     */
    cancelInstantly?: boolean;
    /**
     * Should refund on cancel instantly. Overrides payment settings
     */
    refundOnCancelInstantly?: boolean;
    constructor(init?: Partial<CancelSubscriptionRequest>);
    createResponse(): CancelSubscriptionResponse;
    getTypeName(): string;
}
/**
 * Payments
 */
export declare class ChangeSubscriptionRequest extends CodeMashRequestBase implements IReturn<ChangeSubscriptionResponse> {
    /**
     * Subscription ID.
     */
    id: string;
    /**
     * Customer's ID.
     */
    customerId: string;
    /**
     * Subscription plan ID.
     */
    newPlanId: string;
    /**
     * Payment method's ID. If not provided will use default.
     */
    paymentMethodId: string;
    /**
     * Discount coupon ID if supported.
     */
    coupon: string;
    constructor(init?: Partial<ChangeSubscriptionRequest>);
    createResponse(): ChangeSubscriptionResponse;
    getTypeName(): string;
}
/**
 * Payments
 */
export declare class CreateSubscriptionRequest extends CodeMashRequestBase implements IReturn<CreateSubscriptionResponse> {
    /**
     * Customer's ID.
     */
    customerId: string;
    /**
     * Subscription plan ID.
     */
    planId: string;
    /**
     * Payment method's ID. If not provided will use default.
     */
    paymentMethodId: string;
    /**
     * Discount coupon ID if supported.
     */
    coupon: string;
    constructor(init?: Partial<CreateSubscriptionRequest>);
    createResponse(): CreateSubscriptionResponse;
    getTypeName(): string;
}
/**
 * Payments
 */
export declare class UpdateSubscriptionRequest extends CodeMashRequestBase implements IReturnVoid {
    /**
     * Subscription ID.
     */
    id: string;
    /**
     * Customer's ID.
     */
    customerId: string;
    /**
     * Discount coupon ID if supported.
     */
    coupon: string;
    /**
     * Payment method's ID to use for subscription.
     */
    paymentMethodId: string;
    /**
     * If subscription is set to cancel at period end, renews the subscription.
     */
    renewCanceled: boolean;
    constructor(init?: Partial<UpdateSubscriptionRequest>);
    createResponse(): void;
    getTypeName(): string;
}
/**
 * Returns project details
 */
export declare class GetProjectRequest extends CodeMashRequestBase implements IReturn<GetProjectResponse> {
    constructor(init?: Partial<GetProjectRequest>);
    createResponse(): GetProjectResponse;
    getTypeName(): string;
}
/**
 * Executes a function
 */
export declare class ExecuteFunctionRequest extends CodeMashRequestBase implements IReturn<ExecuteFunctionResponse> {
    /**
     * Function Id
     */
    id: string;
    /**
     * Parameters of to pass into function
     */
    data: string;
    /**
     * Additional parameters for specific functions
     */
    meta: {
        [index: string]: string;
    };
    /**
     * Tokens to inject into queries
     */
    tokens: {
        [index: string]: string;
    };
    /**
     * Version or Alias of a function
     */
    qualifier: string;
    constructor(init?: Partial<ExecuteFunctionRequest>);
    createResponse(): ExecuteFunctionResponse;
    getTypeName(): string;
}
export declare class AwsSesEndpoint implements IReturn<HttpResult> {
    constructor(init?: Partial<AwsSesEndpoint>);
    createResponse(): HttpResult;
    getTypeName(): string;
}
export declare class MailGunEndpoint implements IReturn<HttpResult> {
    constructor(init?: Partial<MailGunEndpoint>);
    createResponse(): HttpResult;
    getTypeName(): string;
}
export declare class SendGridEndpoint implements IReturn<HttpResult> {
    constructor(init?: Partial<SendGridEndpoint>);
    createResponse(): HttpResult;
    getTypeName(): string;
}
/**
 * Authentication
 */
export declare class AppleAuthenticationRequest extends CodeMashRequestBase implements IReturn<AppleAuthenticationResponse>, IOAuthRequest {
    /**
     * Mode to use for authentication
     */
    mode: string;
    /**
     * Code received from Google services
     */
    code: string;
    /**
     * State received with a code
     */
    state: string;
    /**
     * When transferring access token from client app
     */
    accessToken: string;
    /**
     * Attach any data to the request
     */
    meta: {
        [index: string]: string;
    };
    constructor(init?: Partial<AppleAuthenticationRequest>);
    createResponse(): AppleAuthenticationResponse;
    getTypeName(): string;
}
export declare class Authenticate implements IReturn<AuthenticateResponse>, IPost {
    provider: string;
    state: string;
    oauth_token: string;
    oauth_verifier: string;
    userName: string;
    password: string;
    rememberMe?: boolean;
    errorView: string;
    nonce: string;
    uri: string;
    response: string;
    qop: string;
    nc: string;
    cnonce: string;
    useTokenCookie?: boolean;
    accessToken: string;
    accessTokenSecret: string;
    scope: string;
    meta: {
        [index: string]: string;
    };
    constructor(init?: Partial<Authenticate>);
    createResponse(): AuthenticateResponse;
    getTypeName(): string;
}
export declare class GetApiKeys implements IReturn<GetApiKeysResponse>, IGet {
    environment: string;
    meta: {
        [index: string]: string;
    };
    constructor(init?: Partial<GetApiKeys>);
    createResponse(): GetApiKeysResponse;
    getTypeName(): string;
}
export declare class RegenerateApiKeys implements IReturn<RegenerateApiKeysResponse>, IPost {
    environment: string;
    meta: {
        [index: string]: string;
    };
    constructor(init?: Partial<RegenerateApiKeys>);
    createResponse(): RegenerateApiKeysResponse;
    getTypeName(): string;
}
