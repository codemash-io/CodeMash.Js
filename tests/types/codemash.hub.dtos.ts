/* eslint-disable lines-between-class-members */
/* Options:
Date: 2022-10-19 10:05:34
Version: 6.02
Tip: To override a DTO option, remove "//" prefix before updating
BaseUrl: http://localhost:5001

GlobalNamespace: Hub
//MakePropertiesOptional: False
AddServiceStackTypes: True
AddResponseStatus: False
//AddImplicitVersion:
AddDescriptionAsComments: True
//IncludeTypes:
//ExcludeTypes:
//DefaultImports:
*/
import { Cookie } from '@servicestack/client';

export module Hub {
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
  export class RequestBase
    implements ICultureBasedRequest, IVersionBasedRequest {
    /**
     * Specify culture code when your output should be localised. E.g.: en
     */
    // @DataMember
    // @ApiMember(DataType="string", Description="Specify culture code when your output should be localised. E.g.: en", Name="CultureCode", ParameterType="header")
    public cultureCode: string;

    /**
     * Specify culture code when your output should be localised. E.g.: en
     */
    // @DataMember
    // @ApiMember(DataType="string", Description="Specify culture code when your output should be localised. E.g.: en", Name="CultureCode", ParameterType="header")
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
    // @ApiMember(DataType="string", Description="ID of your project. Can be passed in a header as X-CM-ProjectId.", IsRequired=true, Name="X-CM-ProjectId", ParameterType="header")
    public projectId: string;

    public constructor(init?: Partial<CodeMashRequestBase>) {
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

  export class CodeMashListRequestBase
    extends CodeMashRequestBase
    implements IRequestWithPaging, IRequestWithFilter, IRequestWithSorting {
    /**
     * Amount of records to return
     */
    // @DataMember
    // @ApiMember(DataType="integer", Description="Amount of records to return", Format="int32", Name="PageSize", ParameterType="form")
    public pageSize: number;

    /**
     * Page of records to return
     */
    // @DataMember
    // @ApiMember(DataType="integer", Description="Page of records to return", Format="int32", Name="PageNumber", ParameterType="form")
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

  export enum PushProvider {
    None = 0,
    Expo = 1,
    OneSignal = 2,
    Firebase = 4,
  }

  export class PushAccountProperties {
    public pushProvider: PushProvider;
    public displayName: string;
    public accessKey: string;
    public secretKey: string;

    public constructor(init?: Partial<PushAccountProperties>) {
      (Object as any).assign(this, init);
    }
  }

  export enum CustomerBillingType {
    Margin = 'Margin',
    Fixed = 'Fixed',
  }

  export enum CustomerMarginType {
    Percent = 'Percent',
    Fixed = 'Fixed',
  }

  export enum BillingType {
    Organization = 'Organization',
    Individual = 'Individual',
  }

  // @Flags()
  export enum Modules {
    None = 0,
    Membership = 1,
    Database = 2,
    Email = 4,
    Marketing = 8,
    Logging = 16,
    Files = 32,
    Translation = 64,
    Notification = 128,
    Scheduler = 256,
    Serverless = 512,
    Payment = 1024,
    ServerEvents = 2048,
  }

  export enum SubscriptionPlan {
    Growth = 'Growth',
    Standard = 'Standard',
    Enterprise = 'Enterprise',
  }

  export enum SystemFunctionProvider {
    Amazon = 'Amazon',
    CodeMash = 'CodeMash',
  }

  export interface IRequestBase {}

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
    // @ApiMember(DataType="string", Description="API key of your cluster. Can be passed in a header as X-CM-Cluster.", Name="Cluster", ParameterType="query")
    public cluster: string;

    public constructor(init?: Partial<CodeMashDbRequestBase>) {
      super(init);
      (Object as any).assign(this, init);
    }
  }

  export enum ExportFileTypes {
    Csv = 'Csv',
    Json = 'Json',
  }

  export enum ImportFileTypes {
    Csv = 'Csv',
    Json = 'Json',
  }

  export class SchemaTriggerCreateDto {
    public id: string;
    public name: string;
    public clusters: string[];
    public types: string[];
    public actionType: string;
    public action: string;
    public activationCode: string;
    public disabled: boolean;
    public order?: number;
    public breakOnError: boolean;

    public constructor(init?: Partial<SchemaTriggerCreateDto>) {
      (Object as any).assign(this, init);
    }
  }

  export enum FileProvider {
    None = 'None',
    CodeMash = 'CodeMash',
    S3 = 'S3',
  }

  export class FileAccountProperties {
    public provider: FileProvider;
    public displayName: string;
    public publicKey: string;
    public privateKey: string;
    public bucketName: string;
    public region: string;

    public constructor(init?: Partial<FileAccountProperties>) {
      (Object as any).assign(this, init);
    }
  }

  export class FilesTriggerCreateDto {
    public id: string;
    public name: string;
    public directory: string;
    public types: string[];
    public actionType: string;
    public action: string;
    public disabled: boolean;
    public order?: number;
    public breakOnError: boolean;
    public fileAccounts: string[];

    public constructor(init?: Partial<FilesTriggerCreateDto>) {
      (Object as any).assign(this, init);
    }
  }

  export class CodeMashFormRequest extends RequestBase {
    public token: string;

    public constructor(init?: Partial<CodeMashFormRequest>) {
      super(init);
      (Object as any).assign(this, init);
    }
  }

  export enum ProjectUserProviders {
    apple = 'apple',
    aad = 'aad',
    google = 'google',
    facebook = 'facebook',
    twitter = 'twitter',
    credentials = 'credentials',
    apikey = 'apikey',
  }

  export enum UsersTriggerActionTypes {
    Lambda = 'Lambda',
    Notification = 'Notification',
    Email = 'Email',
    Webhooks = 'Webhooks',
  }

  export class UsersTriggerCreateDto {
    public id: string;
    public name: string;
    public types: string[];
    public actionType: UsersTriggerActionTypes;
    public action: string;
    public disabled: boolean;
    public order?: number;
    public breakOnError: boolean;

    public constructor(init?: Partial<UsersTriggerCreateDto>) {
      (Object as any).assign(this, init);
    }
  }

  export enum EmailProvider {
    None = 'None',
    Smtp = 'Smtp',
    Sendgrid = 'Sendgrid',
    Mailgun = 'Mailgun',
    AwsSes = 'AwsSes',
    CodeMashAws = 'CodeMashAws',
  }

  export class EmailProperties {
    public emailProvider: EmailProvider;
    public emailAddress: string;
    public emailDisplayName: string;
    public host: string;
    public port: number;
    public userName: string;
    public password: string;
    public useSsl: boolean;
    public useCredentials: boolean;
    public token: string;
    public webHookSigningKey: string;
    public domain: string;
    public accessKey: string;
    public region: string;
    public configurationSetName: string;

    public constructor(init?: Partial<EmailProperties>) {
      (Object as any).assign(this, init);
    }
  }

  export class EmailPreferenceTexts {
    public title: string;
    public description: string;
    public unsubAllTitle: string;
    public unsubAllDescription: string;
    public updateButton: string;

    public constructor(init?: Partial<EmailPreferenceTexts>) {
      (Object as any).assign(this, init);
    }
  }

  export enum EmailTemplateType {
    Transactional = 'Transactional',
    Marketing = 'Marketing',
  }

  export enum NotificationPriority {
    None = 'None',
    Default = 'Default',
    Normal = 'Normal',
    High = 'High',
  }

  export class PushNotificationButtons {
    public id: string;
    public text: string;
    public icon: string;

    public constructor(init?: Partial<PushNotificationButtons>) {
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

  export enum PaymentProvider {
    None = 'None',
    Paysera = 'Paysera',
    Stripe = 'Stripe',
    AppleAppStore = 'AppleAppStore',
    GooglePlayStore = 'GooglePlayStore',
    Kevin = 'Kevin',
    Decta = 'Decta',
  }

  export class PaymentAccountProperties {
    public provider: PaymentProvider;
    public displayName: string;
    public validationToken: string;
    public secretKey: string;
    public webHookKey: string;
    public endpointKey: string;
    public accessKey: string;
    public authRedirectUrl: string;
    public paymentRedirectUrl: string;
    public receiverName: string;
    public receiverIban: string;

    public constructor(init?: Partial<PaymentAccountProperties>) {
      (Object as any).assign(this, init);
    }
  }

  export class PaymentPlanProperties {
    public paymentAccountId: string;
    public displayName: string;
    public productId: string;
    public packageName: string;
    public pricingId: string;
    public roles: string[];
    public rolesAfterExpire: string[];

    public constructor(init?: Partial<PaymentPlanProperties>) {
      (Object as any).assign(this, init);
    }
  }

  export class PaymentProductCollection {
    public schemaId: string;
    public priceField: string;
    public variationField: string;
    public variation: string;

    public constructor(init?: Partial<PaymentProductCollection>) {
      (Object as any).assign(this, init);
    }
  }

  export enum PaymentTriggerActionTypes {
    Lambda = 'Lambda',
    Notification = 'Notification',
    Email = 'Email',
  }

  export class PaymentTriggerCreateDto {
    public id: string;
    public name: string;
    public types: string[];
    public actionType: PaymentTriggerActionTypes;
    public action: string;
    public disabled: boolean;
    public order?: number;
    public breakOnError: boolean;

    public constructor(init?: Partial<PaymentTriggerCreateDto>) {
      (Object as any).assign(this, init);
    }
  }

  export enum ServerlessProvider {
    None = 'None',
    CodemashAmazon = 'CodemashAmazon',
    Amazon = 'Amazon',
    Azure = 'Azure',
    Google = 'Google',
  }

  export class ConnectionProperties {
    public provider: ServerlessProvider;
    public accessKey: string;
    public secretKey: string;
    public regions: string[];
    public refreshRate: number;
    public tags: { [index: string]: string };

    public constructor(init?: Partial<ConnectionProperties>) {
      (Object as any).assign(this, init);
    }
  }

  export class TokenResolverField {
    public name: string;
    public config: string;

    public constructor(init?: Partial<TokenResolverField>) {
      (Object as any).assign(this, init);
    }
  }

  export enum CampaignType {
    Manual = 1,
    OneTime = 2,
    Recurrent = 3,
  }

  // @Flags()
  export enum CampaignRepeatType {
    None = 1,
    EveryMonday = 2,
    EveryTuesday = 4,
    EveryWednesday = 8,
    EveryThursday = 16,
    EveryFriday = 32,
    EverySaturday = 64,
    EverySunday = 128,
    EveryDay = 254,
    EveryWeek = 256,
    EveryMonth = 512,
    EveryYear = 1024,
  }

  // @Flags()
  export enum CampaignTargetType {
    All = 0,
    ByTags = 1,
  }

  export enum SchedulerRepeatType {
    None = 'None',
    Minutely = 'Minutely',
    Hourly = 'Hourly',
    Daily = 'Daily',
    Weekly = 'Weekly',
    Monthly = 'Monthly',
    Yearly = 'Yearly',
  }

  export enum SchedulerType {
    None = 'None',
    Notification = 'Notification',
    Custom = 'Custom',
  }

  export enum TriggerUsages {
    All = 'All',
    Collections = 'Collections',
    Users = 'Users',
    Files = 'Files',
    Payment = 'Payment',
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

  export class AppleOAuthSettingsMode implements IOAuthModeSettings {
    public name: string;
    public callbackUrl: string;
    public logoutUrl: string;
    public failureRedirectUrl: string;
    public role: string;
    public zone: string;
    public overrideDefaultScopes: boolean;
    public scopes: string[];

    public constructor(init?: Partial<AppleOAuthSettingsMode>) {
      (Object as any).assign(this, init);
    }
  }

  export class AzureActiveDirSettingsMode implements IOAuthModeSettings {
    public name: string;
    public callbackUrl: string;
    public logoutUrl: string;
    public failureRedirectUrl: string;
    public role: string;
    public zone: string;
    public overrideDefaultScopes: boolean;
    public scopes: string[];

    public constructor(init?: Partial<AzureActiveDirSettingsMode>) {
      (Object as any).assign(this, init);
    }
  }

  // @DataContract(Name="FacebookSettingsMode")
  export class FacebookSettingsMode implements IOAuthModeSettings {
    // @DataMember
    public name: string;

    // @DataMember
    public callbackUrl: string;

    // @DataMember
    public logoutUrl: string;

    // @DataMember
    public failureRedirectUrl: string;

    // @DataMember
    public role: string;

    // @DataMember
    public zone: string;

    // @DataMember
    public overrideDefaultScopes: boolean;

    // @DataMember
    public scopes: string[];

    public constructor(init?: Partial<FacebookSettingsMode>) {
      (Object as any).assign(this, init);
    }
  }

  export class GoogleSettingsMode implements IOAuthModeSettings {
    public name: string;
    public callbackUrl: string;
    public logoutUrl: string;
    public failureRedirectUrl: string;
    public role: string;
    public zone: string;
    public overrideDefaultScopes: boolean;
    public scopes: string[];

    public constructor(init?: Partial<GoogleSettingsMode>) {
      (Object as any).assign(this, init);
    }
  }

  export class TwitterSettingsMode implements IOAuthModeSettings {
    public name: string;
    public codeCallbackUrl: string;
    public callbackUrl: string;
    public logoutUrl: string;
    public failureRedirectUrl: string;
    public role: string;
    public zone: string;
    public overrideDefaultScopes: boolean;
    public scopes: string[];

    public constructor(init?: Partial<TwitterSettingsMode>) {
      (Object as any).assign(this, init);
    }
  }

  export class CredentialsSettingsMode {
    public name: string;
    public logoutUrl: string;

    public constructor(init?: Partial<CredentialsSettingsMode>) {
      (Object as any).assign(this, init);
    }
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
    public meta: { [index: string]: string };

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
    public meta: { [index: string]: string };

    public constructor(init?: Partial<ResponseStatus>) {
      (Object as any).assign(this, init);
    }
  }

  export enum PaymentDiscountType {
    Coupon = 'Coupon',
    Discount = 'Discount',
  }

  export enum PaymentDiscountRestrictionType {
    Fixed = 'Fixed',
    Percentage = 'Percentage',
    Price = 'Price',
    Quantity = 'Quantity',
  }

  export enum PaymentDiscountPriceType {
    Fixed = 'Fixed',
    Percentage = 'Percentage',
  }

  export class PaymentDiscountBoundary {
    public boundary: number;
    public amount: number;
    public type: PaymentDiscountPriceType;

    public constructor(init?: Partial<PaymentDiscountBoundary>) {
      (Object as any).assign(this, init);
    }
  }

  export enum PaymentDiscountTargetType {
    All = 'All',
    Category = 'Category',
    Individual = 'Individual',
  }

  export class PaymentDiscountDto {
    public id: string;
    public type: PaymentDiscountType;
    public code: string;
    public displayName: string;
    public validFrom: string;
    public validUntil: string;
    public collectionId: string;
    public cluster: string;
    public restrictionType: PaymentDiscountRestrictionType;
    public amount?: number;
    public boundaries: PaymentDiscountBoundary[];
    public targetType: PaymentDiscountTargetType;
    public labelField: string;
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

    public constructor(init?: Partial<PaymentDiscountDto>) {
      (Object as any).assign(this, init);
    }
  }

  export class ResponseBase<T> {
    // @DataMember

    // @DataMember(Name="result")
    public result: T;

    public constructor(init?: Partial<ResponseBase<T>>) {
      (Object as any).assign(this, init);
    }
  }

  export class PaymentDiscountListDto {
    public id: string;
    public code: string;
    public displayName: string;
    public validFrom: string;
    public validUntil: string;
    public enabled: boolean;
    public totalRedeemed: string;
    public type: string;

    public constructor(init?: Partial<PaymentDiscountListDto>) {
      (Object as any).assign(this, init);
    }
  }

  export class PushAccountDto {
    public id: string;
    public displayName: string;
    public provider: string;
    public accessKey: string;
    public secretKeyEnding: string;
    public isDefault: boolean;

    public constructor(init?: Partial<PushAccountDto>) {
      (Object as any).assign(this, init);
    }
  }

  export class ActivityListDto {
    public id: string;
    public activity: string;
    public displayName: string;
    public date: number;
    public module: string;
    public userName: string;
    public userId: string;
    public projectName: string;
    public projectId: string;

    public constructor(init?: Partial<ActivityListDto>) {
      (Object as any).assign(this, init);
    }
  }

  export class NameIdDto {
    public id: string;
    public name: string;
    public description: string;
    public isDefault: boolean;

    public constructor(init?: Partial<NameIdDto>) {
      (Object as any).assign(this, init);
    }
  }

  export class ActivityFiltersDto {
    public members: NameIdDto[];
    public projects: NameIdDto[];
    public activities: NameIdDto[];

    public constructor(init?: Partial<ActivityFiltersDto>) {
      (Object as any).assign(this, init);
    }
  }

  export class AccountListItemDto {
    public accountId: string;
    public accountNumber: number;
    public ownerEmail: string;
    public isOwner: boolean;

    public constructor(init?: Partial<AccountListItemDto>) {
      (Object as any).assign(this, init);
    }
  }

  export class DiscountDto {
    public name: string;
    public code: string;
    public isPercentDiscount: boolean;
    public percentOff: number;
    public fixedDiscount: number;
    public usedAmount: number;
    public durationType: string;
    public appliedOn: number;
    public appliedOnString: string;
    public validUntil?: number;
    public validUntilString: string;
    public discountType: string;

    public constructor(init?: Partial<DiscountDto>) {
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
    acceptsBrotli: boolean;
    acceptsDeflate: boolean;
    acceptsGzip: boolean;
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
    cookies: { [index: string]: Cookie };
    responseContentType: string;
    hasExplicitResponseContentType: boolean;
    items: { [index: string]: Object };
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
    items: { [index: string]: Object };
  }

  export class InvoiceDto {
    public id: string;
    public invoiceNo: string;
    public created: string;
    public currency: string;
    public amount: number;
    public plan: string;
    public paid: boolean;
    public status: string;

    public constructor(init?: Partial<InvoiceDto>) {
      (Object as any).assign(this, init);
    }
  }

  export class MonthlyUsageSettingsDto {
    public year: number;
    public month: number;
    public currency: string;
    public vat: number;
    public accumulated: number;
    public subtotal: number;
    public vatFee: number;
    public total: number;
    public totalTrial: number;

    public constructor(init?: Partial<MonthlyUsageSettingsDto>) {
      (Object as any).assign(this, init);
    }
  }

  export class MonthlyUsageDto {
    public awsFilesCost: number;
    public awsLambdaCost: number;
    public backupsCost: number;
    public clustersCost: { [index: string]: number };
    public additionalCost: number;
    public total: number;
    public projectId: string;
    public projectName: string;

    public constructor(init?: Partial<MonthlyUsageDto>) {
      (Object as any).assign(this, init);
    }
  }

  export class CardDto {
    public expMonth: number;
    public expYear: number;
    public last4: string;
    public name: string;
    public brand: string;
    public zipCode: string;
    public funding: string;

    public constructor(init?: Partial<CardDto>) {
      (Object as any).assign(this, init);
    }
  }

  export class CustomerSettingsDto {
    public card: CardDto;
    public userId: string;

    public constructor(init?: Partial<CustomerSettingsDto>) {
      (Object as any).assign(this, init);
    }
  }

  export class AccountStatusDto {
    public status: string;
    public subscriptionStatus: string;
    public isTrial: boolean;
    public emailWithVerificationCode: string;
    public plan: string;
    public permissions: string[];
    public roles: string[];
    public allowedProjects: string[];
    public accountPermissions: { [index: string]: string };
    public projectPermissions: { [index: string]: string };
    public membershipPermissions: { [index: string]: string };
    public emailPermissions: { [index: string]: string };
    public pushPermissions: { [index: string]: string };
    public loggingPermissions: { [index: string]: string };
    public filesPermissions: { [index: string]: string };
    public schedulerPermissions: { [index: string]: string };
    public serverlessPermissions: { [index: string]: string };
    public databasePermissions: { [index: string]: string };
    public paymentPermissions: { [index: string]: string };
    public serverEventsPermissions: { [index: string]: string };

    public constructor(init?: Partial<AccountStatusDto>) {
      (Object as any).assign(this, init);
    }
  }

  export class ProjectZoneDto {
    public uniqueName: string;
    public name: string;
    public continent: string;

    public constructor(init?: Partial<ProjectZoneDto>) {
      (Object as any).assign(this, init);
    }
  }

  export enum OwnerType {
    System = 'System',
    User = 'User',
  }

  export class RoleBaseDto {
    public name: string;
    public displayName: string;
    public type: OwnerType;

    public constructor(init?: Partial<RoleBaseDto>) {
      (Object as any).assign(this, init);
    }
  }

  export class PolicyBaseDto {
    public name: string;
    public displayName: string;
    public type: OwnerType;

    public constructor(init?: Partial<PolicyBaseDto>) {
      (Object as any).assign(this, init);
    }
  }

  export class DisplayOption {
    public key: string;
    public subGroup: DisplayOption;
    public group: string;
    public groupOrder: number;
    public withCustomPolicyOnly: boolean;

    public constructor(init?: Partial<DisplayOption>) {
      (Object as any).assign(this, init);
    }
  }

  export class PermissionDisplayItemDto {
    public value: string;
    public title: string;
    public description: string;
    public group: DisplayOption;
    public order: number;
    public policyOwner: OwnerType;
    public module: Modules;

    public constructor(init?: Partial<PermissionDisplayItemDto>) {
      (Object as any).assign(this, init);
    }
  }

  export class PolicyDisplayItemDto extends PolicyBaseDto {
    public role: string;
    public permissions: PermissionDisplayItemDto[];
    public group: DisplayOption;
    public order: number;

    public constructor(init?: Partial<PolicyDisplayItemDto>) {
      super(init);
      (Object as any).assign(this, init);
    }
  }

  export class RoleDisplayItemDto extends RoleBaseDto {
    public policies: PolicyDisplayItemDto[];
    public projectId: string;

    public constructor(init?: Partial<RoleDisplayItemDto>) {
      super(init);
      (Object as any).assign(this, init);
    }
  }

  export class ProjectBillingChargeDto {
    public billingType: string;
    public marginType: string;
    public marginPercent: number;
    public fixedPrice: number;
    public chargeCustomer: boolean;

    public constructor(init?: Partial<ProjectBillingChargeDto>) {
      (Object as any).assign(this, init);
    }
  }

  export class ProjectBillingInvoiceDto {
    public numberPrefix: string;

    public constructor(init?: Partial<ProjectBillingInvoiceDto>) {
      (Object as any).assign(this, init);
    }
  }

  export class BillingDto {
    public type: string;
    public firstName: string;
    public lastName: string;
    public organization: string;
    public vat: string;
    public address: string;
    public zip: string;
    public country: string;
    public city: string;
    public phone: string;
    public iban: string;
    public billingEmail: string;

    public constructor(init?: Partial<BillingDto>) {
      (Object as any).assign(this, init);
    }
  }

  export class ProjectBillingSettingsDto {
    public enabled: boolean;
    public charge: ProjectBillingChargeDto;
    public invoice: ProjectBillingInvoiceDto;
    public billing: BillingDto;

    public constructor(init?: Partial<ProjectBillingSettingsDto>) {
      (Object as any).assign(this, init);
    }
  }

  export class DatabaseCredentials {
    public dbName: string;
    public userName: string;
    public password: string;
    public region: string;
    public srvClusterName: string;
    public useSrvName: boolean;
    public encVersion: string;

    public constructor(init?: Partial<DatabaseCredentials>) {
      (Object as any).assign(this, init);
    }
  }

  export class DatabaseCollectionStats {
    public collectionName: string;
    public collectionNameAsTitle: string;
    public recordsSize: number;
    public recordsCount: number;
    public averageRecordSize: number;
    public storageSize: number;
    public indexesCount: number;
    public indexesSize: number;
    public indexesSizes: { [index: string]: number };

    public constructor(init?: Partial<DatabaseCollectionStats>) {
      (Object as any).assign(this, init);
    }
  }

  export class CodeMashDatabaseClusterUpgrade {
    public tier: string;
    public region: string;
    public regionName: string;
    public autoScaling: boolean;
    public multiRegion: boolean;
    public readOnlyRegions: string[];
    public storageSize?: number;
    public updateOn?: string;

    public constructor(init?: Partial<CodeMashDatabaseClusterUpgrade>) {
      (Object as any).assign(this, init);
    }
  }

  export class ClusterDto {
    public id: string;
    public provider: string;
    public tier: string;
    public name: string;
    public displayName: string;
    public region: string;
    public regionName: string;
    public autoScaling: boolean;
    public multiRegion: boolean;
    public readOnlyRegions: string[];
    public state: string;
    public specsId: string;
    public storageSize?: number;
    public dataSize: number;
    public credentials: DatabaseCredentials;
    public isDefault: boolean;
    public collectionStats: DatabaseCollectionStats[];
    public upgrade: CodeMashDatabaseClusterUpgrade;
    public backupsEnabled: boolean;
    public backupHour: number;
    public backupCopies: number;

    public constructor(init?: Partial<ClusterDto>) {
      (Object as any).assign(this, init);
    }
  }

  export class FileAccountBasicDto {
    public id: string;
    public isDefault: boolean;
    public displayName: string;

    public constructor(init?: Partial<FileAccountBasicDto>) {
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

  export class ModuleWidget {
    public constructor(init?: Partial<ModuleWidget>) {
      (Object as any).assign(this, init);
    }
  }

  export class ModuleData {
    public widgetType: string;
    public settings: ModuleWidget;

    public constructor(init?: Partial<ModuleData>) {
      (Object as any).assign(this, init);
    }
  }

  export class ProjectModulesData {
    public database: ModuleData;
    public membership: ModuleData;
    public emails: ModuleData;
    public notifications: ModuleData;
    public files: ModuleData;
    public logging: ModuleData;
    public scheduler: ModuleData;
    public serverless: ModuleData;

    public constructor(init?: Partial<ProjectModulesData>) {
      (Object as any).assign(this, init);
    }
  }

  export class ProjectWidgetDto {
    public widgetType: string;
    public module: string;

    public constructor(init?: Partial<ProjectWidgetDto>) {
      (Object as any).assign(this, init);
    }
  }

  export class ProjectExposedDto {
    public id: string;
    public databaseEstablished: boolean;
    public databaseEnabled: boolean;
    public emailEstablished: boolean;
    public emailEnabled: boolean;
    public membershipEstablished: boolean;
    public membershipEnabled: boolean;
    public loggingEstablished: boolean;
    public loggingEnabled: boolean;
    public notificationEstablished: boolean;
    public notificationEnabled: boolean;
    public schedulerEstablished: boolean;
    public schedulerEnabled: boolean;
    public serverlessEstablished: boolean;
    public serverlessEnabled: boolean;
    public filingEstablished: boolean;
    public filingEnabled: boolean;
    public paymentEstablished: boolean;
    public paymentEnabled: boolean;
    public serverEventsEstablished: boolean;
    public serverEventsEnabled: boolean;
    public authorizationEnabled: boolean;
    public authenticationEnabled: boolean;
    public backupsEnabled: boolean;
    public tokens: Token[];
    public logoUrl: string;
    public url: string;
    public logoId: string;
    public languages: string[];
    public defaultLanguage: string;
    public projectZone: ProjectZoneDto;
    public defaultTimeZone: string;
    public name: string;
    public description: string;
    public slugifiedName: string;
    public userZones: string[];
    public moduleData: ProjectModulesData;
    public allowedOrigins: string[];
    public widgets: ProjectWidgetDto[];
    public connections: number;
    public members: number;
    public canCallDatabaseService: boolean;
    public canCallEmailService: boolean;
    public canCallMembershipService: boolean;
    public canCallFilingService: boolean;
    public canCallLoggingService: boolean;
    public canCallNotificationService: boolean;
    public canCallSchedulerService: boolean;
    public canCallServerlessService: boolean;
    public canCallPaymentService: boolean;
    public canCallServerEventsService: boolean;

    public constructor(init?: Partial<ProjectExposedDto>) {
      (Object as any).assign(this, init);
    }
  }

  export class ProjectSmallDto {
    public id: string;
    public databaseEstablished: boolean;
    public databaseEnabled: boolean;
    public databaseVersion?: number;
    public emailEstablished: boolean;
    public emailEnabled: boolean;
    public membershipEstablished: boolean;
    public membershipEnabled: boolean;
    public loggingEstablished: boolean;
    public loggingEnabled: boolean;
    public serverEventsEstablished: boolean;
    public serverEventsEnabled: boolean;
    public notificationEstablished: boolean;
    public notificationEnabled: boolean;
    public schedulerEstablished: boolean;
    public schedulerEnabled: boolean;
    public serverlessEstablished: boolean;
    public serverlessEnabled: boolean;
    public filingEstablished: boolean;
    public filingEnabled: boolean;
    public filesVersion?: number;
    public paymentEstablished: boolean;
    public paymentEnabled: boolean;
    public authorizationEnabled: boolean;
    public authenticationEnabled: boolean;
    public backupsEnabled: boolean;
    public databaseCredentials: DatabaseCredentials;
    public tokens: Token[];
    public logoUrl: string;
    public url: string;
    public logoId: string;
    public languages: string[];
    public defaultLanguage: string;
    public projectZone: ProjectZoneDto;
    public userZones: string[];
    public defaultTimeZone: string;
    public name: string;
    public description: string;
    public slugifiedName: string;
    public moduleData: ProjectModulesData;
    public allowedOrigins: string[];
    public widgets: ProjectWidgetDto[];
    public connections: number;
    public members: number;
    public canCallDatabaseService: boolean;
    public canCallEmailService: boolean;
    public canCallMembershipService: boolean;
    public canCallFilingService: boolean;
    public canCallLoggingService: boolean;
    public canCallNotificationService: boolean;
    public canCallSchedulerService: boolean;
    public canCallServerlessService: boolean;
    public canCallPaymentService: boolean;
    public canCallServerEventsService: boolean;

    public constructor(init?: Partial<ProjectSmallDto>) {
      (Object as any).assign(this, init);
    }
  }

  export class PasswordResetAccountDto {
    public ownerEmail: string;
    public accountId: string;
    public accountNumber: number;
    public isOwner: boolean;

    public constructor(init?: Partial<PasswordResetAccountDto>) {
      (Object as any).assign(this, init);
    }
  }

  export class ProjectPlanChangeCheckDto {
    public projectName: string;
    public errorCode: string;
    public currentDataSize: number;
    public newStorageSize?: number;

    public constructor(init?: Partial<ProjectPlanChangeCheckDto>) {
      (Object as any).assign(this, init);
    }
  }

  export enum SubscriptionStatus {
    Inactive = 'Inactive',
    Pending = 'Pending',
    Active = 'Active',
    PendingCancel = 'PendingCancel',
    Expired = 'Expired',
    Changed = 'Changed',
    Unpaid = 'Unpaid',
  }

  export class SubscriptionDto {
    public plan: SubscriptionPlan;
    public status: SubscriptionStatus;
    public started: number;
    public from: number;
    public to: number;
    public canceled?: number;
    public suspendedOn?: number;
    public isTrialPeriod: boolean;

    public constructor(init?: Partial<SubscriptionDto>) {
      (Object as any).assign(this, init);
    }
  }

  export class BaseInvoice {
    public created: string;
    public generatedInvoiceId: string;
    public invoiceId: string;
    public invoiceNumber: string;
    public customInvoiceNumber: string;
    public cmInvoiceNo?: number;
    public cmInvoiceNumber: string;
    public amountPaid: number;
    public amountRemaining: number;
    public attemptCount: number;
    public currency: string;
    public invoiceUrl: string;
    public invoicePdf: string;
    public paid: boolean;
    public status: string;

    public constructor(init?: Partial<BaseInvoice>) {
      (Object as any).assign(this, init);
    }
  }

  export class SubscriptionInvoice extends BaseInvoice {
    public subscriptionId: string;
    public plan: SubscriptionPlan;

    public constructor(init?: Partial<SubscriptionInvoice>) {
      super(init);
      (Object as any).assign(this, init);
    }
  }

  export class AccountSettingsDto {
    public isAccountUnverified: boolean;
    public subscription: SubscriptionDto;
    public unpaidInvoice: SubscriptionInvoice;
    public card: CardDto;
    public billing: BillingDto;

    public constructor(init?: Partial<AccountSettingsDto>) {
      (Object as any).assign(this, init);
    }
  }

  export class AccountUserDto {
    public id: string;
    public accountId: string;
    public createdOn: string;
    public displayName: string;
    public firstName: string;
    public lastName: string;
    public phoneNumber: string;
    public city: string;
    public address: string;
    public state: string;
    public country: string;
    public billingEmail: string;
    public email: string;
    public isUser: boolean;
    public permissions: string[];
    public allowedProjects: string[];
    public status: string;

    public constructor(init?: Partial<AccountUserDto>) {
      (Object as any).assign(this, init);
    }
  }

  export class CollectionAggregateDto {
    public id: string;
    public displayName: string;
    public description: string;
    public query: string;
    public collectionName: string;
    public collectionNameAsTitle: string;
    public schemaId: string;

    public constructor(init?: Partial<CollectionAggregateDto>) {
      (Object as any).assign(this, init);
    }
  }

  export class BackupListItemDto {
    public id: string;
    public type: string;
    public createdOn: string;
    public status: string;
    public clusterId: string;

    public constructor(init?: Partial<BackupListItemDto>) {
      (Object as any).assign(this, init);
    }
  }

  export class BackupClusterSettingsDto {
    public id: string;
    public backupHour: number;
    public backupCopies: number;
    public backupsEnabled: boolean;

    public constructor(init?: Partial<BackupClusterSettingsDto>) {
      (Object as any).assign(this, init);
    }
  }

  export class BackupSettingsDto {
    public backupHour: number;
    public backupCopies: number;
    public backupsEnabled: boolean;
    public clusters: BackupClusterSettingsDto[];

    public constructor(init?: Partial<BackupSettingsDto>) {
      (Object as any).assign(this, init);
    }
  }

  export class DatabaseFeatureTestDto {
    public canCallFind: boolean;
    public errorMessage: string;

    public constructor(init?: Partial<DatabaseFeatureTestDto>) {
      (Object as any).assign(this, init);
    }
  }

  export class ExportItemDto {
    public id: string;
    public createdOn: string;
    public completedDate: string;
    public collectionName: string;
    public collectionNameAsTitle: string;
    public jsonSchema: string;
    public uiSchema: string;
    public status: string;
    public totalRecords: number;
    public sort: string;
    public filter: string;
    public outputType: string;
    public includedFields: string[];
    public fileId: string;
    public fileName: string;
    public fileSize: number;

    public constructor(init?: Partial<ExportItemDto>) {
      (Object as any).assign(this, init);
    }
  }

  export class ExportListItemDto {
    public id: string;
    public createdOn: string;
    public completedDate: string;
    public collectionNameAsTitle: string;
    public status: string;
    public totalRecords: number;

    public constructor(init?: Partial<ExportListItemDto>) {
      (Object as any).assign(this, init);
    }
  }

  export class CollectionFormDto {
    public token: string;
    public schemaId: string;
    public isPublic: boolean;
    public limitOneResponse: boolean;
    public canEdit: boolean;
    public authentications: string[];
    public title: string;
    public description: string;
    public disabled: boolean;
    public disabledMessage: string;
    public cluster: string;

    public constructor(init?: Partial<CollectionFormDto>) {
      (Object as any).assign(this, init);
    }
  }

  export class DatabaseRegion {
    public id: string;
    public name: string;
    public available: boolean;
    public region: string;
    public sharedAvailable: boolean;
    public freeAvailable: boolean;
    public nodeValue: number;

    public constructor(init?: Partial<DatabaseRegion>) {
      (Object as any).assign(this, init);
    }
  }

  export class DatabaseTier {
    public tier: string;
    public availableClusters: string[];

    public constructor(init?: Partial<DatabaseTier>) {
      (Object as any).assign(this, init);
    }
  }

  export class DatabaseSettingsDto {
    public regions: DatabaseRegion[];
    public tiers: DatabaseTier[];

    public constructor(init?: Partial<DatabaseSettingsDto>) {
      (Object as any).assign(this, init);
    }
  }

  // @DataContract
  export class EntityBase implements IEntity, IEntityWithCreatedOn {
    // @DataMember
    public id: string;

    // @DataMember
    public createdOn: string;

    public constructor(init?: Partial<EntityBase>) {
      (Object as any).assign(this, init);
    }
  }

  export class Entity extends EntityBase implements IEntityWithModifiedOn {
    // @DataMember
    public modifiedOn: string;

    public constructor(init?: Partial<Entity>) {
      super(init);
      (Object as any).assign(this, init);
    }
  }

  export class SchemaTemplateRef {
    public tempId: string;
    public isTax: boolean;
    public title: string;
    public uiSchema: string;
    public jsonSchema: string;
    public description: string;
    public parentId: string;
    public dependencies: string[];

    public constructor(init?: Partial<SchemaTemplateRef>) {
      (Object as any).assign(this, init);
    }
  }

  export class SchemaTemplateRefStructure {
    public tempId: string;
    public title: string;
    public isTax: boolean;
    public references: SchemaTemplateRefStructure[];

    public constructor(init?: Partial<SchemaTemplateRefStructure>) {
      (Object as any).assign(this, init);
    }
  }

  export class SchemaTemplate extends Entity {
    public title: string;
    public iconUrl: string;
    public iconUrlDark: string;
    public references: SchemaTemplateRef[];
    public structure: SchemaTemplateRefStructure;

    public constructor(init?: Partial<SchemaTemplate>) {
      super(init);
      (Object as any).assign(this, init);
    }
  }

  export class SchemaTemplateDto {
    public id: string;
    public title: string;
    public iconUrl: string;
    public iconUrlDark: string;

    public constructor(init?: Partial<SchemaTemplateDto>) {
      (Object as any).assign(this, init);
    }
  }

  export class ImportItemDto {
    public id: string;
    public createdOn: string;
    public completedDate: string;
    public collectionName: string;
    public collectionNameAsTitle: string;
    public status: string;
    public totalImported: number;
    public totalRecords: number;
    public totalSkipped: number;
    public totalErrors: number;
    public inputType: string;
    public errorFileId: string;
    public errorFileName: string;
    public errorFileSize: number;
    public fileId: string;
    public fileName: string;
    public fileSize: number;

    public constructor(init?: Partial<ImportItemDto>) {
      (Object as any).assign(this, init);
    }
  }

  export class ImportListItemDto {
    public id: string;
    public createdOn: string;
    public completedDate: string;
    public collectionNameAsTitle: string;
    public status: string;
    public totalImported: number;
    public totalErrors: number;

    public constructor(init?: Partial<ImportListItemDto>) {
      (Object as any).assign(this, init);
    }
  }

  export class CollectionIndexDto {
    public id: string;
    public schemaId: string;
    public name: string;
    public key: { [index: string]: Object };
    public operations: number;
    public since?: string;
    public sinceString: string;
    public options: string;
    public size?: number;
    public cluster: string;

    public constructor(init?: Partial<CollectionIndexDto>) {
      (Object as any).assign(this, init);
    }
  }

  export class SchemaSettings {
    public softDelete: boolean;

    public constructor(init?: Partial<SchemaSettings>) {
      (Object as any).assign(this, init);
    }
  }

  export class SchemaProperty {
    public name: string;
    public path: string;
    public restrictInsert: boolean;
    public restrictUpdate: boolean;

    public constructor(init?: Partial<SchemaProperty>) {
      (Object as any).assign(this, init);
    }
  }

  export class SchemaNestProperty extends SchemaProperty {
    public constructor(init?: Partial<SchemaNestProperty>) {
      super(init);
      (Object as any).assign(this, init);
    }
  }

  export class SchemaFilePropertyStorage {
    public path: string;
    public cluster: string;
    public storage: string;

    public constructor(init?: Partial<SchemaFilePropertyStorage>) {
      (Object as any).assign(this, init);
    }
  }

  export class SchemaFileProperty extends SchemaProperty {
    public filePath: string;
    public allowedFileType: string;
    public setPublicAccess: boolean;
    public maxSizeMb?: number;
    public isMultiple: boolean;
    public strongConnection: boolean;
    public storages: SchemaFilePropertyStorage[];

    public constructor(init?: Partial<SchemaFileProperty>) {
      super(init);
      (Object as any).assign(this, init);
    }
  }

  export class SchemaUserProperty extends SchemaProperty {
    public fieldToDisplay: string;
    public isMultiple: boolean;
    public asResponsible: boolean;
    public asResponsibleUpdate: boolean;
    public asResponsibleDelete: boolean;

    public constructor(init?: Partial<SchemaUserProperty>) {
      super(init);
      (Object as any).assign(this, init);
    }
  }

  export class SchemaEmailProperty extends SchemaProperty {
    public constructor(init?: Partial<SchemaEmailProperty>) {
      super(init);
      (Object as any).assign(this, init);
    }
  }

  export class SchemaUriProperty extends SchemaProperty {
    public constructor(init?: Partial<SchemaUriProperty>) {
      super(init);
      (Object as any).assign(this, init);
    }
  }

  export class SchemaNumberProperty extends SchemaProperty {
    public isDecimal: boolean;
    public isCurrency: boolean;
    public isTotal: boolean;
    public decimalNumbers: number;

    public constructor(init?: Partial<SchemaNumberProperty>) {
      super(init);
      (Object as any).assign(this, init);
    }
  }

  export class SchemaTextProperty extends SchemaProperty {
    public constructor(init?: Partial<SchemaTextProperty>) {
      super(init);
      (Object as any).assign(this, init);
    }
  }

  export class SchemaRoleProperty extends SchemaProperty {
    public isMultiple: boolean;

    public constructor(init?: Partial<SchemaRoleProperty>) {
      super(init);
      (Object as any).assign(this, init);
    }
  }

  export class SchemaTaxonomyProperty extends SchemaProperty {
    public taxonomyId: string;
    public isMultiple: boolean;

    public constructor(init?: Partial<SchemaTaxonomyProperty>) {
      super(init);
      (Object as any).assign(this, init);
    }
  }

  export class SchemaCollectionProperty extends SchemaProperty {
    public collectionId: string;
    public fieldToDisplay: string;
    public isMultiple: boolean;
    public responsibleInsertReference: string[];

    public constructor(init?: Partial<SchemaCollectionProperty>) {
      super(init);
      (Object as any).assign(this, init);
    }
  }

  export class SchemaDateProperty extends SchemaProperty {
    public minType: string;
    public minDifference: number;
    public maxType: string;
    public maxDifference: number;
    public concreteMinDate?: number;
    public concreteMaxDate?: number;

    public constructor(init?: Partial<SchemaDateProperty>) {
      super(init);
      (Object as any).assign(this, init);
    }
  }

  export class SchemaTagsProperty extends SchemaProperty {
    public constructor(init?: Partial<SchemaTagsProperty>) {
      super(init);
      (Object as any).assign(this, init);
    }
  }

  export class SchemaDto {
    public collectionNameAsTitle: string;
    public collectionName: string;
    public uiSchema: string;
    public jsonSchema: string;
    public mongoDbJsonSchema: string;
    public translatableFields: string[];
    public triggers: SchemaTriggerCreateDto[];
    public settings: SchemaSettings;
    public databaseId: string;
    public schemaId: string;
    public properties: SchemaProperty[];
    public nestedProperties: SchemaNestProperty[];
    public duplicateInProgress: boolean;
    public fileProperties: SchemaFileProperty[];
    public userProperties: SchemaUserProperty[];
    public emailProperties: SchemaEmailProperty[];
    public uriProperties: SchemaUriProperty[];
    public numberProperties: SchemaNumberProperty[];
    public textProperties: SchemaTextProperty[];
    public roleProperties: SchemaRoleProperty[];
    public taxonomyProperties: SchemaTaxonomyProperty[];
    public collectionProperties: SchemaCollectionProperty[];
    public dateProperties: SchemaDateProperty[];
    public tagsProperties: SchemaTagsProperty[];

    public constructor(init?: Partial<SchemaDto>) {
      (Object as any).assign(this, init);
    }
  }

  export class SchemaBasicDto {
    public id: string;
    public name: string;
    public description: string;
    public translatableFields: string[];
    public totalEnabledTriggers: number;
    public duplicateInProgress: boolean;
    public duplicateFailed: boolean;
    public isFieldRenaming: boolean;
    public renamingFieldFrom: string;
    public renamingFieldTo: string;

    public constructor(init?: Partial<SchemaBasicDto>) {
      (Object as any).assign(this, init);
    }
  }

  export class DbSettingsDto {
    public storageSize?: number;
    public dataSize: number;
    public maxSize?: number;
    public databaseRegion: string;
    public databaseRegionName: string;
    public collectionStats: DatabaseCollectionStats[];

    public constructor(init?: Partial<DbSettingsDto>) {
      (Object as any).assign(this, init);
    }
  }

  export class TaxonomyListDto {
    public id: string;
    public recordId: string;
    public name: string;
    public title: string;
    public description: string;
    public parentName: string;
    public dependencyNames: string[];

    public constructor(init?: Partial<TaxonomyListDto>) {
      (Object as any).assign(this, init);
    }
  }

  export class TaxonomyDto {
    public id: string;
    public name: string;
    public title: string;
    public description: string;
    public parentId: string;
    public dependencies: string[];
    public termsUiSchema: string;
    public termsJsonSchema: string;
    public metaProperties: SchemaProperty[];
    public translatableFields: string[];
    public databaseId: string;
    public taxonomyId: string;
    public userProperties: SchemaUserProperty[];
    public taxonomyProperties: SchemaTaxonomyProperty[];
    public collectionProperties: SchemaCollectionProperty[];
    public fileProperties: SchemaFileProperty[];

    public constructor(init?: Partial<TaxonomyDto>) {
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

  export class TermDto {
    public id: string;
    public name: { [index: string]: string };
    public description: { [index: string]: string };
    public order?: number;
    public parent: string;
    public dependencies: { [index: string]: string[] };
    public meta: string;

    public constructor(init?: Partial<TermDto>) {
      (Object as any).assign(this, init);
    }
  }

  export class TaxonomyBasicDto {
    public id: string;
    public recordId: string;
    public name: string;
    public title: string;
    public description: string;
    public parentTaxonomy: string;
    public dependencies: string[];
    public translatableFields: string[];
    public isFieldRenaming: boolean;
    public renamingFieldFrom: string;
    public renamingFieldTo: string;

    public constructor(init?: Partial<TaxonomyBasicDto>) {
      (Object as any).assign(this, init);
    }
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

  export class FileAccountDto {
    public id: string;
    public provider: string;
    public isDefault: boolean;
    public displayName: string;
    public tokenEnding: string;
    public publicKey: string;
    public privateKey: string;
    public region: string;
    public bucketName: string;
    public encVersion: string;
    public isSyncing: boolean;
    public lastSyncDate?: number;
    public syncWithError: boolean;
    public organizationId: string;
    public userName: string;
    public policyArn: string;

    public constructor(init?: Partial<FileAccountDto>) {
      (Object as any).assign(this, init);
    }
  }

  export class FileAccountFeatureTestDto {
    public canGetFiles: boolean;
    public errorMessage: string;

    public constructor(init?: Partial<FileAccountFeatureTestDto>) {
      (Object as any).assign(this, init);
    }
  }

  export class BrowseObjectDto {
    public id: string;
    public key: string;
    public description: string;
    public size: number;
    public contentType: string;
    public originalName: string;
    public createdOn: string;
    public lastModified: string;
    public isFolder: boolean;
    public canDelete: boolean;
    public canRename: boolean;
    public canMove: boolean;
    public usedInCollection: string;
    public referrers: string[];
    public isPublic: boolean;
    public isParentPublic: boolean;
    public publicUrl: string;
    public providerKey: string;

    public constructor(init?: Partial<BrowseObjectDto>) {
      (Object as any).assign(this, init);
    }
  }

  export class DbFileOptimization {
    public optimizedFileId: string;
    public optimization: string;
    public originalFileName: string;
    public fileName: string;
    public filePath: string;
    public contentType: string;
    public contentLength: number;
    public directory: string;

    public constructor(init?: Partial<DbFileOptimization>) {
      (Object as any).assign(this, init);
    }
  }

  export class FilesSettingsDto {
    public totalSize?: number;
    public usedSize: number;

    public constructor(init?: Partial<FilesSettingsDto>) {
      (Object as any).assign(this, init);
    }
  }

  export class SelectItem {
    public label: string;
    public value: string;

    public constructor(init?: Partial<SelectItem>) {
      (Object as any).assign(this, init);
    }
  }

  export class LogDto {
    public id: string;
    public type: string;
    public level: string;
    public message: string;
    public createdOn: string;
    public properties: string;

    public constructor(init?: Partial<LogDto>) {
      (Object as any).assign(this, init);
    }
  }

  export class LogListItemDto {
    public id: string;
    public createdOn: string;
    public level: string;
    public type: string;
    public method: string;
    public statusCode?: number;
    public description: string;
    public isFromHub?: boolean;

    public constructor(init?: Partial<LogListItemDto>) {
      (Object as any).assign(this, init);
    }
  }

  export class Permission {
    public title: string;
    public description: string;
    public value: string;
    public disabled: boolean;
    public module: Modules;

    public constructor(init?: Partial<Permission>) {
      (Object as any).assign(this, init);
    }
  }

  export class Policy {
    public name: string;
    public type: OwnerType;
    public displayName: string;
    public permissions: Permission[];
    public disabled: boolean;
    public isFullAccess: boolean;

    public constructor(init?: Partial<Policy>) {
      (Object as any).assign(this, init);
    }
  }

  export class Role {
    public name: string;
    public displayName: string;
    public policies: Policy[];
    public type: OwnerType;
    public userAbleModify: boolean;

    public constructor(init?: Partial<Role>) {
      (Object as any).assign(this, init);
    }
  }

  export class EmailAccountDto {
    public id: string;
    public emailAddress: string;
    public emailDisplayName: string;
    public provider: string;
    public isDefault: boolean;
    public tokenEnding: string;
    public webHookSigningKeyEnding: string;
    public domain: string;
    public region: string;
    public configurationSetName: string;
    public accessKey: string;
    public signatures: { [index: string]: string };
    public subscriptionLinks: { [index: string]: string };

    public constructor(init?: Partial<EmailAccountDto>) {
      (Object as any).assign(this, init);
    }
  }

  export class FeatureTestDto {
    public canSendEmail: boolean;
    public errorMessage: string;

    public constructor(init?: Partial<FeatureTestDto>) {
      (Object as any).assign(this, init);
    }
  }

  export class EmailPreferencesTagDto {
    public identifier: string;
    public titles: { [index: string]: string };
    public descriptions: { [index: string]: string };

    public constructor(init?: Partial<EmailPreferencesTagDto>) {
      (Object as any).assign(this, init);
    }
  }

  export class EmailMetricsDto {
    public totalEmailAccounts: number;
    public totalEmailsOnQueue: number;
    public totalUsedInTriggers: number;
    public totalTemplates: number;
    public emailTags: EmailPreferencesTagDto[];
    public preferencesTexts: { [index: string]: EmailPreferenceTexts };

    public constructor(init?: Partial<EmailMetricsDto>) {
      (Object as any).assign(this, init);
    }
  }

  export class EmailEventDto {
    public date: string;
    public type: string;
    public userAgent: string;
    public status: string;
    public reason: string;
    public attempt: string;
    public response: string;
    public clickUrl: string;

    public constructor(init?: Partial<EmailEventDto>) {
      (Object as any).assign(this, init);
    }
  }

  export class KeyValue {
    public key: string;
    public value: string;

    public constructor(init?: Partial<KeyValue>) {
      (Object as any).assign(this, init);
    }
  }

  export class EmailDataEditDto {
    public id: string;
    public subject: string;
    public body: string;
    public recipientEmail: string;
    public deliveredOn: string;
    public createdOn: string;
    public events: EmailEventDto[];
    public delivered: boolean;
    public deliverSuccessful: boolean;
    public currentStatus: string;
    public emailProvider: string;
    public responseMessage: string;
    public responseError: string;
    public initialTokens: KeyValue[];
    public recipientTokens: KeyValue[];
    public additionalTokens: KeyValue[];

    public constructor(init?: Partial<EmailDataEditDto>) {
      (Object as any).assign(this, init);
    }
  }

  export class EmailNotificationGroupAccountDto {
    public emailAccountId: string;
    public emailAddress: string;
    public displayName: string;
    public provider: string;
    public languages: string[];

    public constructor(init?: Partial<EmailNotificationGroupAccountDto>) {
      (Object as any).assign(this, init);
    }
  }

  export class EmailGroupDataEditDto {
    public id: string;
    public createdOn: string;
    public deliverOn: string;
    public totalToDeliver: number;
    public totalDeliverToProvider: number;
    public totalDeliverToProviderError: number;
    public templateName: string;
    public templateId: string;
    public isPostponed: boolean;
    public respectTimeZone: boolean;
    public lockedInProgress: boolean;
    public requestLanguage: string;
    public accounts: EmailNotificationGroupAccountDto[];
    public languages: string[];

    public constructor(init?: Partial<EmailGroupDataEditDto>) {
      (Object as any).assign(this, init);
    }
  }

  export class EmailGroupEventDto {
    public type: number;
    public count: number;

    public constructor(init?: Partial<EmailGroupEventDto>) {
      (Object as any).assign(this, init);
    }
  }

  export class EmailGroupDataDto {
    public id: string;
    public createdOn: string;
    public deliverOn: string;
    public totalDeliverToProvider: number;
    public totalDeliverToProviderError: number;
    public totalSuccess: number;
    public totalError: number;
    public totalToDeliver: number;
    public templateName: string;
    public templateId: string;
    public recipientEmail: string;
    public recipientUserId: string;
    public isCreating: boolean;
    public lockedInProgress: boolean;

    public constructor(init?: Partial<EmailGroupDataDto>) {
      (Object as any).assign(this, init);
    }
  }

  export class EmailDataDto {
    public id: string;
    public createdOn: string;
    public deliveredOn: string;
    public recipientEmail: string;
    public recipientUser: string;
    public subject: string;
    public delivered: boolean;
    public timeZone: string;
    public deliverSuccessful: boolean;
    public currentStatus: string;

    public constructor(init?: Partial<EmailDataDto>) {
      (Object as any).assign(this, init);
    }
  }

  export class DbFile {
    public id: string;
    public directory: string;
    public originalFileName: string;
    public fileName: string;
    public filePath: string;
    public contentType: string;
    public contentLength: number;
    public optimizations: DbFileOptimization[];

    public constructor(init?: Partial<DbFile>) {
      (Object as any).assign(this, init);
    }
  }

  export class MessageTemplateDto {
    public id: string;
    public templateName: string;
    public emailAccountId: string;
    public emailAccountName: string;
    public fileAccountId?: string;
    public staticAttachments: DbFile[];
    public subject: string;
    public body: string;
    public code: string;
    public type: string;
    public preferenceTags: string[];
    public includeSubscriptionLink: boolean;

    public constructor(init?: Partial<MessageTemplateDto>) {
      (Object as any).assign(this, init);
    }
  }

  export class EmailTemplateUsageDto {
    public collectionTriggers: { [index: string]: string[] };
    public fileTriggers: string[];
    public userTriggers: string[];

    public constructor(init?: Partial<EmailTemplateUsageDto>) {
      (Object as any).assign(this, init);
    }
  }

  export class PushFeatureTestDto {
    public canConnect: boolean;
    public errorMessage: string;

    public constructor(init?: Partial<PushFeatureTestDto>) {
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

  export class NotificationResponseDevice {
    public id: string;
    public token: PushNotificationToken;
    public timeZone: string;
    public meta: { [index: string]: string };
    public responseMessage: string;
    public responseError: string;

    public constructor(init?: Partial<NotificationResponseDevice>) {
      (Object as any).assign(this, init);
    }
  }

  export class NotificationDataEditDto {
    public id: string;
    public createdOn: string;
    public deliveredOn: string;
    public title: string;
    public body: string;
    public data: string;
    public meta: { [index: string]: string };
    public subtitle: string;
    public pushProvider: string;
    public responseMessage: string;
    public responseError: string;
    public blockPush: boolean;
    public delivered: boolean;
    public currentStatus: string;
    public userDisplayName: string;
    public userId: string;
    public senderId: string;
    public devices: NotificationResponseDevice[];
    public initialTokens: KeyValue[];
    public recipientTokens: KeyValue[];
    public additionalTokens: KeyValue[];

    public constructor(init?: Partial<NotificationDataEditDto>) {
      (Object as any).assign(this, init);
    }
  }

  export class PushNotificationGroupAccountDto {
    public accountId: string;
    public displayName: string;
    public provider: string;

    public constructor(init?: Partial<PushNotificationGroupAccountDto>) {
      (Object as any).assign(this, init);
    }
  }

  export class NotificationGroupDataEditDto {
    public id: string;
    public createdOn: string;
    public deliverOn: string;
    public totalSuccess: number;
    public totalError: number;
    public totalToDeliver: number;
    public totalDelivered: number;
    public totalToDeliverToProvider: number;
    public totalDeliverToProvider: number;
    public totalDeliverToProviderError: number;
    public totalSavedWithoutPushing: number;
    public templateName: string;
    public templateId: string;
    public isNonPushable: boolean;
    public isPostponed: boolean;
    public respectTimeZone: boolean;
    public lockedInProgress: boolean;
    public requestLanguage: string;
    public accounts: PushNotificationGroupAccountDto[];
    public languages: string[];

    public constructor(init?: Partial<NotificationGroupDataEditDto>) {
      (Object as any).assign(this, init);
    }
  }

  export class NotificationGroupDataDto {
    public id: string;
    public createdOn: string;
    public deliverOn: string;
    public totalSuccess: number;
    public totalError: number;
    public totalToDeliver: number;
    public totalDelivered: number;
    public totalDeliverToProvider: number;
    public totalDeliverToProviderError: number;
    public totalSavedWithoutPushing: number;
    public templateName: string;
    public templateId: string;
    public isNonPushable: boolean;
    public recipientUser: string;
    public recipientUserId: string;
    public isCreating: boolean;
    public lockedInProgress: boolean;

    public constructor(init?: Partial<NotificationGroupDataDto>) {
      (Object as any).assign(this, init);
    }
  }

  export class NotificationDataDto {
    public id: string;
    public title: string;
    public createdOn: string;
    public deliveredOn: string;
    public recipientUser: string;
    public recipientUserId: string;
    public delivered: boolean;
    public timeZone: string;
    public totalDeliveredSuccessful: number;
    public totalDeliveredUnsuccessful: number;
    public isStatic: boolean;
    public currentStatus: string;

    public constructor(init?: Partial<NotificationDataDto>) {
      (Object as any).assign(this, init);
    }
  }

  export class ServerEventsSettingsDto {
    public fileAccountId?: string;
    public sendPush: boolean;

    public constructor(init?: Partial<ServerEventsSettingsDto>) {
      (Object as any).assign(this, init);
    }
  }

  export class PaymentFeatureTestDto {
    public canConnect: boolean;
    public errorMessage: string;

    public constructor(init?: Partial<PaymentFeatureTestDto>) {
      (Object as any).assign(this, init);
    }
  }

  export class PaymentAccountDto {
    public id: string;
    public displayName: string;
    public provider: string;
    public validationToken: string;
    public clientId: string;
    public accessKey: string;
    public tokenEnding: string;
    public hookTokenEnding: string;
    public endpointTokenEnding: string;
    public authRedirectUrl: string;
    public paymentRedirectUrl: string;
    public receiverName: string;
    public receiverIban: string;

    public constructor(init?: Partial<PaymentAccountDto>) {
      (Object as any).assign(this, init);
    }
  }

  export class TransactionDto {
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

    public constructor(init?: Partial<TransactionDto>) {
      (Object as any).assign(this, init);
    }
  }

  export class PaymentPlanDto {
    public id: string;
    public paymentAccountId: string;
    public paymentAccountName: string;
    public provider: string;
    public displayName: string;
    public productId: string;
    public pricingId: string;
    public packageName: string;
    public roles: string[];
    public rolesAfterExpire: string[];

    public constructor(init?: Partial<PaymentPlanDto>) {
      (Object as any).assign(this, init);
    }
  }

  export class SchedulerTaskExecutionLogDto {
    public id: string;
    public startDate: string;
    public endDate: string;
    public success: boolean;
    public errors: string[];
    public timeZone: string;
    public response: string;

    public constructor(init?: Partial<SchedulerTaskExecutionLogDto>) {
      (Object as any).assign(this, init);
    }
  }

  export class ServerlessFeatureTestDto {
    public canConnect: boolean;
    public errorMessage: string;

    public constructor(init?: Partial<ServerlessFeatureTestDto>) {
      (Object as any).assign(this, init);
    }
  }

  export class ServerlessProviderDto {
    public provider: string;
    public totalFunctions: number;
    public refreshRate: number;
    public lastUpdated: number;
    public isSystem: boolean;
    public accessKey: string;
    public secretKey: string;
    public encVersion: string;
    public regions: string[];
    public tags: { [index: string]: string };
    public clientId: string;
    public privateKeyEnding: string;
    public subscriptionId: string;
    public resourceGroup: string;
    public secretKeys: { [index: string]: string };
    public orgId: string;

    public constructor(init?: Partial<ServerlessProviderDto>) {
      (Object as any).assign(this, init);
    }
  }

  export class ServerlessTestFunctionLog {
    public success: boolean;
    public errors: string[];
    public response: string;
    public timeZone: string;

    public constructor(init?: Partial<ServerlessTestFunctionLog>) {
      (Object as any).assign(this, init);
    }
  }

  export class FunctionResource extends Entity {
    public uniqueName: string;
    public configName: string;

    public constructor(init?: Partial<FunctionResource>) {
      super(init);
      (Object as any).assign(this, init);
    }
  }

  export class GoogleSettingsServiceAccount {
    public id: string;
    public name: string;
    public clientId: string;
    public email: string;
    public secretJsonKey: string;
    public encVersion: string;
    public privateKeyEnding: string;
    public scopes: string[];

    public constructor(init?: Partial<GoogleSettingsServiceAccount>) {
      (Object as any).assign(this, init);
    }
  }

  export class GoogleSettings implements IOAuthSettings {
    public clientId: string;
    public clientSecret: string;
    public clientSecretEnding: string;
    public callbackUrl: string;
    public failureRedirectUrl: string;
    public redirectUrl: string;
    public logoutUrl: string;
    public role: string;
    public zone: string;
    public encVersion: string;
    public modes: GoogleSettingsMode[];
    public scopes: string[];
    public serviceAccounts: GoogleSettingsServiceAccount[];

    public constructor(init?: Partial<GoogleSettings>) {
      (Object as any).assign(this, init);
    }
  }

  export class AzureActiveDirSettings implements IOAuthSettings {
    public tenantId: string;
    public clientId: string;
    public clientSecret: string;
    public clientSecretEnding: string;
    public callbackUrl: string;
    public logoutUrl: string;
    public failureRedirectUrl: string;
    public role: string;
    public zone: string;
    public encVersion: string;
    public modes: AzureActiveDirSettingsMode[];
    public scopes: string[];
    public appTenantId: string;

    public constructor(init?: Partial<AzureActiveDirSettings>) {
      (Object as any).assign(this, init);
    }
  }

  export class ServerlessSystemFunctionDto {
    public id: string;
    public name: string;
    public displayName: string;
    public description: string;
    public runtime: string;
    public codeSize?: number;
    public region: string;
    public provider: string;
    public template: string;
    public cantBeTested: boolean;
    public memory: number;
    public timeoutMinutes: number;
    public timeoutSeconds: number;
    public schema: string;
    public docsId: string;

    public constructor(init?: Partial<ServerlessSystemFunctionDto>) {
      (Object as any).assign(this, init);
    }
  }

  export class ServerlessFunctionAliasDto {
    public name: string;
    public createdOnDate?: string;
    public createdOn: string;
    public version: string;
    public additionalVersion: string;
    public additionalVersionWeight: number;
    public description: string;

    public constructor(init?: Partial<ServerlessFunctionAliasDto>) {
      (Object as any).assign(this, init);
    }
  }

  export class ServerlessFunctionVersionDto {
    public version: string;
    public createdOnDate?: string;
    public createdOn: string;
    public description: string;
    public runtime: string;
    public handler: string;
    public memory: number;
    public timeoutMinutes: number;
    public timeoutSeconds: number;
    public codeSize: number;

    public constructor(init?: Partial<ServerlessFunctionVersionDto>) {
      (Object as any).assign(this, init);
    }
  }

  export class ServerlessFunctionDto {
    public id: string;
    public modifiedOn?: number;
    public refreshOn?: number;
    public name: string;
    public displayName: string;
    public description: string;
    public shortDescription: string;
    public mainModule: string;
    public runtime: string;
    public codeSize?: number;
    public region: string;
    public provider: ServerlessProvider;
    public template: string;
    public isCreated: boolean;
    public handler: string;
    public memory: number;
    public timeoutMinutes: number;
    public timeoutSeconds: number;
    public environment: { [index: string]: string };
    public aliases: ServerlessFunctionAliasDto[];
    public versions: ServerlessFunctionVersionDto[];
    public isSystem: boolean;
    public isMultiple: boolean;
    public mustConfigure: boolean;
    public systemVersion: string;
    public meta: { [index: string]: string };
    public availableTokens: string[];
    public tokenResolvers: { [index: string]: TokenResolverField };
    public docsId: string;
    public tags: string[];
    public resourcesTriggerUsages: string[];
    public authProvider: string;
    public invokeUrl: string;
    public serviceAccount: string;

    public constructor(init?: Partial<ServerlessFunctionDto>) {
      (Object as any).assign(this, init);
    }
  }

  export class CollectionSysTriggerConfigCollectionDto {
    public id: string;
    public title: string;
    public fields: { [index: string]: string[] };

    public constructor(
      init?: Partial<CollectionSysTriggerConfigCollectionDto>,
    ) {
      (Object as any).assign(this, init);
    }
  }

  export class CollectionSysTriggerConfigDto {
    public fields: { [index: string]: string[] };
    public collectionsWithFields: CollectionSysTriggerConfigCollectionDto[];
    public disabledParams: string[];
    public allowedTypes: string[];
    public blockTemplateEditInTriggers: boolean;
    public isBsonTemplate: boolean;
    public allowTokens: boolean;
    public tokenFields: string[];
    public ignoredTokens: string[];
    public includedTriggerOptions: string[];
    public triggerSchema: string;

    public constructor(init?: Partial<CollectionSysTriggerConfigDto>) {
      (Object as any).assign(this, init);
    }
  }

  export class TermBasicDto {
    public id: string;
    public name: string;
    public order?: number;
    public meta: { [index: string]: Object };

    public constructor(init?: Partial<TermBasicDto>) {
      (Object as any).assign(this, init);
    }
  }

  export interface IAuthorizedModule extends IModule {}

  export class NameId {
    public id: string;
    public name: string;

    public constructor(init?: Partial<NameId>) {
      (Object as any).assign(this, init);
    }
  }

  export enum CampaignStatus {
    None = 'None',
    Planned = 'Planned',
    Processing = 'Processing',
    Archived = 'Archived',
  }

  export class CampaignToken {
    public key: string;
    public isField: boolean;
    public value: string;

    public constructor(init?: Partial<CampaignToken>) {
      (Object as any).assign(this, init);
    }
  }

  export class Campaign {
    public id: string;
    public templateId: string;
    public title: string;
    public description: string;
    public sendDate?: string;
    public lastSent?: string;
    public status: CampaignStatus;
    public type: CampaignType;
    public repeatType: CampaignRepeatType;
    public target: CampaignTargetType;
    public isDraft: boolean;
    public timesSent: number;
    public tokens: CampaignToken[];
    public targetTags: string[];

    public constructor(init?: Partial<Campaign>) {
      (Object as any).assign(this, init);
    }
  }

  export class CampaignListDto {
    public id: string;
    public title: string;

    public constructor(init?: Partial<CampaignListDto>) {
      (Object as any).assign(this, init);
    }
  }

  export class SchedulerDisplayTaskDto {
    public id: string;
    public title: string;
    public description: string;
    public type: SchedulerType;
    public startDate: string;
    public repeatType: SchedulerRepeatType;
    public repeatInterval?: number;
    public endDate: string;
    public lastStarted: string;
    public lastEnded: string;
    public lastSuccessful: boolean;
    public enabled: boolean;
    public stopOnError: boolean;
    public provider: ServerlessProvider;
    public functionId: string;
    public metaData: string;
    public nextDefaultExecutionSeconds?: number;

    public constructor(init?: Partial<SchedulerDisplayTaskDto>) {
      (Object as any).assign(this, init);
    }
  }

  export class KeyValuesItem {
    public key: string;
    public values: string[];

    public constructor(init?: Partial<KeyValuesItem>) {
      (Object as any).assign(this, init);
    }
  }

  export class CredentialsSettings {
    public logoutUrl: string;
    public allowUsernames: boolean;
    public modes: CredentialsSettingsMode[];

    public constructor(init?: Partial<CredentialsSettings>) {
      (Object as any).assign(this, init);
    }
  }

  export class FacebookSettings implements IOAuthSettings {
    public clientId: string;
    public clientSecret: string;
    public clientSecretEnding: string;
    public callbackUrl: string;
    public failureRedirectUrl: string;
    public logoutUrl: string;
    public role: string;
    public zone: string;
    public encVersion: string;
    public scopes: string[];
    // @DataMember
    public modes: FacebookSettingsMode[];

    public constructor(init?: Partial<FacebookSettings>) {
      (Object as any).assign(this, init);
    }
  }

  export class TwitterSettings implements IOAuthSettings {
    public clientId: string;
    public clientSecret: string;
    public clientSecretEnding: string;
    public codeCallbackUrl: string;
    public callbackUrl: string;
    public failureRedirectUrl: string;
    public logoutUrl: string;
    public role: string;
    public zone: string;
    public encVersion: string;
    public scopes: string[];
    public modes: TwitterSettingsMode[];

    public constructor(init?: Partial<TwitterSettings>) {
      (Object as any).assign(this, init);
    }
  }

  export class AppleOAuthSettings implements IOAuthSettings {
    public teamId: string;
    public bundleId: string;
    public keyId: string;
    public clientId: string;
    public clientSecret: string;
    public clientSecretEnding: string;
    public failureRedirectUrl: string;
    public callbackUrl: string;
    public logoutUrl: string;
    public role: string;
    public zone: string;
    public encVersion: string;
    public modes: AppleOAuthSettingsMode[];
    public scopes: string[];

    public constructor(init?: Partial<AppleOAuthSettings>) {
      (Object as any).assign(this, init);
    }
  }

  export class AuthenticationDto {
    public credentialsSettings: CredentialsSettings;
    public azureActiveDirSettings: AzureActiveDirSettings;
    public azureActiveDirSettingsEnabled: boolean;
    public facebookSettings: FacebookSettings;
    public facebookSettingsEnabled: boolean;
    public twitterSettings: TwitterSettings;
    public twitterSettingsEnabled: boolean;
    public googleSettings: GoogleSettings;
    public googleSettingsEnabled: boolean;
    public appleSettings: AppleOAuthSettings;
    public appleSettingsEnabled: boolean;

    public constructor(init?: Partial<AuthenticationDto>) {
      (Object as any).assign(this, init);
    }
  }

  export class MessageTemplate {
    public id: string;
    public templateName: string;
    public emailAccountId?: string;
    public subject: string;
    public body: string;
    public code: string;
    public isActive: boolean;
    public type: EmailTemplateType;
    public preferenceTags: string[];
    public includeSubscriptionLink: boolean;

    public constructor(init?: Partial<MessageTemplate>) {
      (Object as any).assign(this, init);
    }
  }

  export class OnNewUserRegistration {
    public sendEmail: boolean;
    public template: MessageTemplate;
    public callback: string;

    public constructor(init?: Partial<OnNewUserRegistration>) {
      (Object as any).assign(this, init);
    }
  }

  export class EmailPreferencesForMembership {
    public newUserRegistration: OnNewUserRegistration;
    public newUserVerification: OnNewUserRegistration;
    public passwordReset: OnNewUserRegistration;
    public newUserInvitation: OnNewUserRegistration;
    public userDeactivation: OnNewUserRegistration;

    public constructor(init?: Partial<EmailPreferencesForMembership>) {
      (Object as any).assign(this, init);
    }
  }

  export class PasswordComplexity {
    public minLength?: number;
    public maxLength?: number;
    public minNumbers?: number;
    public maxNumbers?: number;
    public minUpper?: number;
    public maxUpper?: number;
    public minLower?: number;
    public maxLower?: number;
    public minSpecial?: number;
    public maxSpecial?: number;
    public allowedSpecial: string;

    public constructor(init?: Partial<PasswordComplexity>) {
      (Object as any).assign(this, init);
    }
  }

  export class AuthorizationDto {
    public emailPreferences: EmailPreferencesForMembership;
    public userRegistersAsRole: string;
    public guestRegistersAsRole: string;
    public allowedRegisterRoles: string[];
    public allowedProviderRegisterRoles: string[];
    public resetPasswordTokenExpiration?: number;
    public invitationExpiration?: number;
    public emailVerificationExpiration?: number;
    public deactivationExpiration?: number;
    public defaultSubscribeToNews: boolean;
    public passwordComplexity: PasswordComplexity;

    public constructor(init?: Partial<AuthorizationDto>) {
      (Object as any).assign(this, init);
    }
  }

  export class PermissionUsersDetailsDto {
    public totalUsers: number;
    public totalUsersHave: number;
    public totalApplicableUsers: number;

    public constructor(init?: Partial<PermissionUsersDetailsDto>) {
      (Object as any).assign(this, init);
    }
  }

  export class UserMetaSchemaDto {
    public uiSchema: string;
    public jsonSchema: string;
    public translatableFields: string[];
    public properties: SchemaProperty[];
    public isFieldRenaming: boolean;
    public renamingFieldFrom: string;
    public renamingFieldTo: string;

    public constructor(init?: Partial<UserMetaSchemaDto>) {
      (Object as any).assign(this, init);
    }
  }

  export class PaymentOrderSchema {
    public id: string;
    public name: string;
    public currency: string;
    public zone: string;
    public cluster: string;
    public collections: PaymentProductCollection[];

    public constructor(init?: Partial<PaymentOrderSchema>) {
      (Object as any).assign(this, init);
    }
  }

  export class PaymentMode {
    public name: string;
    public isDefault: boolean;
    public acceptUrl: string;
    public cancelUrl: string;
    public payText: string;

    public constructor(init?: Partial<PaymentMode>) {
      (Object as any).assign(this, init);
    }
  }

  export class PaymentSettingsDto {
    public payseraTimeLimit?: number;
    public payseraAllowTest: boolean;
    public allowGuests: boolean;
    public orderPrefix: string;
    public payseraOnlyPayments: string;
    public payseraBlockedPayments: string;
    public payseraLanguage: string;
    public payseraLanguageByIp: boolean;
    public orderSchemas: PaymentOrderSchema[];
    public modes: PaymentMode[];
    public stripeSubscriptionCancelInstant: boolean;
    public stripeSubscriptionRefundOnCancelInstant: boolean;
    public stripeSubscriptionRefundOnChange: boolean;
    public stripeApplyPreviousCouponOnChange: boolean;
    public stripeMaximumSubscriptions?: number;
    public fileAccountId?: string;

    public constructor(init?: Partial<PaymentSettingsDto>) {
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
    public meta: { [index: string]: string };

    public constructor(init?: Partial<UserApiKey>) {
      (Object as any).assign(this, init);
    }
  }

  export interface IOAuthModeSettings {
    name: string;
    callbackUrl: string;
    logoutUrl: string;
    failureRedirectUrl: string;
    role: string;
    zone: string;
    overrideDefaultScopes: boolean;
    scopes: string[];
  }

  export interface IHttpFile {
    name: string;
    fileName: string;
    contentLength: number;
    contentType: string;
  }

  export interface IEntity {
    id: string;
  }

  export interface IEntityWithCreatedOn {
    createdOn: string;
  }

  export interface IEntityWithModifiedOn {
    modifiedOn: string;
  }

  export interface IOAuthSettings {
    clientId: string;
    clientSecret: string;
    failureRedirectUrl: string;
    callbackUrl: string;
    logoutUrl: string;
    role: string;
    zone: string;
    encVersion: string;
    scopes: string[];
  }

  export interface IModule {
    isEnabled: boolean;
    isEstablished: boolean;
    name: string;
  }

  export class GetPaymentDiscountResponse extends ResponseBase<PaymentDiscountDto> {
    public constructor(init?: Partial<GetPaymentDiscountResponse>) {
      super(init);
      (Object as any).assign(this, init);
    }
  }

  export class GetPaymentDiscountsResponse extends Array<
    ResponseBase<PaymentDiscountListDto>
  > {
    public totalCount: number;

    public constructor(init?: Partial<GetPaymentDiscountsResponse>) {
      super();
      (Object as any).assign(this, init);
    }
  }

  export class CreatePushAccountResponse extends ResponseBase<string> {
    public constructor(init?: Partial<CreatePushAccountResponse>) {
      super(init);
      (Object as any).assign(this, init);
    }
  }

  export class DeletePushAccountResponse extends ResponseBase<boolean> {
    public constructor(init?: Partial<DeletePushAccountResponse>) {
      super(init);
      (Object as any).assign(this, init);
    }
  }

  export class GetPushAccountResponse extends ResponseBase<PushAccountDto> {
    public constructor(init?: Partial<GetPushAccountResponse>) {
      super(init);
      (Object as any).assign(this, init);
    }
  }

  export class GetPushAccountsResponse extends Array<
    ResponseBase<PushAccountDto>
  > {
    public constructor(init?: Partial<GetPushAccountsResponse>) {
      super();
      (Object as any).assign(this, init);
    }
  }

  export class SetPushAccountAsDefaultResponse extends ResponseBase<boolean> {
    public constructor(init?: Partial<SetPushAccountAsDefaultResponse>) {
      super(init);
      (Object as any).assign(this, init);
    }
  }

  export class UpdatePushAccountResponse extends ResponseBase<string> {
    public constructor(init?: Partial<UpdatePushAccountResponse>) {
      super(init);
      (Object as any).assign(this, init);
    }
  }

  export class GetActivitiesResponse extends Array<
    ResponseBase<ActivityListDto>
  > {
    public totalCount: number;

    public constructor(init?: Partial<GetActivitiesResponse>) {
      super();
      (Object as any).assign(this, init);
    }
  }

  export class GetActivityFiltersResponse extends ResponseBase<ActivityFiltersDto> {
    public constructor(init?: Partial<GetActivityFiltersResponse>) {
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

    // @DataMember(Order=12)
    public meta: { [index: string]: string };

    public constructor(init?: Partial<AuthenticateResponse>) {
      (Object as any).assign(this, init);
    }
  }

  export class AuthenticateToAccountResponse extends ResponseBase<AuthenticateResponse> {
    public apiLogin: string;

    public constructor(init?: Partial<AuthenticateToAccountResponse>) {
      super(init);
      (Object as any).assign(this, init);
    }
  }

  export class CheckAuthResponse extends ResponseBase<AuthenticateResponse> {
    public constructor(init?: Partial<CheckAuthResponse>) {
      super(init);
      (Object as any).assign(this, init);
    }
  }

  export class CompleteRegisterAuthenticationResponse extends ResponseBase<boolean> {
    public notReady: boolean;
    public apiLogin: string;

    public constructor(init?: Partial<CompleteRegisterAuthenticationResponse>) {
      super(init);
      (Object as any).assign(this, init);
    }
  }

  export class TryAuthenticateResponse extends ResponseBase<AuthenticateResponse> {
    public availableAccounts: AccountListItemDto[];
    public apiLogin: string;

    public constructor(init?: Partial<TryAuthenticateResponse>) {
      super(init);
      (Object as any).assign(this, init);
    }
  }

  export class DeleteDiscountResponse extends ResponseBase<boolean> {
    public constructor(init?: Partial<DeleteDiscountResponse>) {
      super(init);
      (Object as any).assign(this, init);
    }
  }

  export class GetDiscountsResponse extends Array<ResponseBase<DiscountDto>> {
    public constructor(init?: Partial<GetDiscountsResponse>) {
      super();
      (Object as any).assign(this, init);
    }
  }

  export class RedeemDiscountResponse extends ResponseBase<boolean> {
    public constructor(init?: Partial<RedeemDiscountResponse>) {
      super(init);
      (Object as any).assign(this, init);
    }
  }

  export class HttpResult {
    public responseText: string;
    public fileInfo: any;
    public contentType: string;
    public headers: { [index: string]: string };
    public cookies: Cookie[];
    public eTag: string;
    public age?: string;
    public maxAge?: string;
    public expires?: string;
    public lastModified?: string;
    public cacheControl: CacheControl;
    public resultScope: any;
    public allowsPartialResponse: boolean;
    public options: { [index: string]: string };
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

    public constructor(init?: Partial<HttpResult>) {
      (Object as any).assign(this, init);
    }
  }

  export class GetInvoicesResponse extends Array<ResponseBase<InvoiceDto>> {
    public constructor(init?: Partial<GetInvoicesResponse>) {
      super();
      (Object as any).assign(this, init);
    }
  }

  export class GetUsageResponse extends Array<ResponseBase<MonthlyUsageDto>> {
    public settings: MonthlyUsageSettingsDto;

    public constructor(init?: Partial<GetUsageResponse>) {
      super();
      (Object as any).assign(this, init);
    }
  }

  export class CreateAccountResponse extends ResponseBase<string> {
    public session: string;
    public apiLogin: string;

    public constructor(init?: Partial<CreateAccountResponse>) {
      super(init);
      (Object as any).assign(this, init);
    }
  }

  export class GetCustomerPaymentResponse extends ResponseBase<CustomerSettingsDto> {
    public constructor(init?: Partial<GetCustomerPaymentResponse>) {
      super(init);
      (Object as any).assign(this, init);
    }
  }

  export class UpdateCustomerPaymentResponse extends ResponseBase<CardDto> {
    public constructor(init?: Partial<UpdateCustomerPaymentResponse>) {
      super(init);
      (Object as any).assign(this, init);
    }
  }

  export class GetAccountStatusResponse extends ResponseBase<AccountStatusDto> {
    public constructor(init?: Partial<GetAccountStatusResponse>) {
      super(init);
      (Object as any).assign(this, init);
    }
  }

  export class GetProjectRegionsResponse extends Array<
    ResponseBase<ProjectZoneDto>
  > {
    public constructor(init?: Partial<GetProjectRegionsResponse>) {
      super();
      (Object as any).assign(this, init);
    }
  }

  export class GetAccountAvailablePermissionsResponse extends Array<
    ResponseBase<RoleDisplayItemDto>
  > {
    public constructor(init?: Partial<GetAccountAvailablePermissionsResponse>) {
      super();
      (Object as any).assign(this, init);
    }
  }

  export class GetUserPermissionsResponse extends Array<ResponseBase<string>> {
    public role: string;

    public constructor(init?: Partial<GetUserPermissionsResponse>) {
      super();
      (Object as any).assign(this, init);
    }
  }

  export class GetProjectBillingSettingsResponse extends ResponseBase<ProjectBillingSettingsDto> {
    public constructor(init?: Partial<GetProjectBillingSettingsResponse>) {
      super(init);
      (Object as any).assign(this, init);
    }
  }

  export class UpdateProjectBillingChargeSettingsResponse extends ResponseBase<boolean> {
    public constructor(
      init?: Partial<UpdateProjectBillingChargeSettingsResponse>,
    ) {
      super(init);
      (Object as any).assign(this, init);
    }
  }

  export class UpdateProjectBillingDetailsSettingsResponse extends ResponseBase<boolean> {
    public constructor(
      init?: Partial<UpdateProjectBillingDetailsSettingsResponse>,
    ) {
      super(init);
      (Object as any).assign(this, init);
    }
  }

  export class UpdateProjectBillingInvoiceSettingsResponse extends ResponseBase<boolean> {
    public constructor(
      init?: Partial<UpdateProjectBillingInvoiceSettingsResponse>,
    ) {
      super(init);
      (Object as any).assign(this, init);
    }
  }

  export class UpdateProjectBillingStatusResponse extends ResponseBase<boolean> {
    public constructor(init?: Partial<UpdateProjectBillingStatusResponse>) {
      super(init);
      (Object as any).assign(this, init);
    }
  }

  export class CreateProjectResponse extends ResponseBase<string> {
    public constructor(init?: Partial<CreateProjectResponse>) {
      super(init);
      (Object as any).assign(this, init);
    }
  }

  export class DeleteProjectResponse extends ResponseBase<boolean> {
    public constructor(init?: Partial<DeleteProjectResponse>) {
      super(init);
      (Object as any).assign(this, init);
    }
  }

  export class GetProjectResponse extends ResponseBase<ProjectExposedDto> {
    public accountPlan: string;
    public databaseClusters: ClusterDto[];
    public databaseVersion?: number;
    public databaseProvider: string;
    public filesVersion?: number;
    public fileAccounts: FileAccountBasicDto[];

    public constructor(init?: Partial<GetProjectResponse>) {
      super(init);
      (Object as any).assign(this, init);
    }
  }

  export class GetProjectLanguagesResponse extends ResponseBase<boolean> {
    public availableLanguages: string[];
    public defaultLanguage: string;

    public constructor(init?: Partial<GetProjectLanguagesResponse>) {
      super(init);
      (Object as any).assign(this, init);
    }
  }

  export class GetProjectModuleDataResponse extends ResponseBase<ProjectModulesData> {
    public constructor(init?: Partial<GetProjectModuleDataResponse>) {
      super(init);
      (Object as any).assign(this, init);
    }
  }

  export class GetProjectsResponse extends Array<
    ResponseBase<ProjectSmallDto>
  > {
    public constructor(init?: Partial<GetProjectsResponse>) {
      super();
      (Object as any).assign(this, init);
    }
  }

  export class RefreshProjectModuleDataResponse extends ResponseBase<boolean> {
    public constructor(init?: Partial<RefreshProjectModuleDataResponse>) {
      super(init);
      (Object as any).assign(this, init);
    }
  }

  export class DeleteProjectLogoResponse extends ResponseBase<boolean> {
    public constructor(init?: Partial<DeleteProjectLogoResponse>) {
      super(init);
      (Object as any).assign(this, init);
    }
  }

  export class UpdateProjectLogoResponse extends ResponseBase<boolean> {
    public constructor(init?: Partial<UpdateProjectLogoResponse>) {
      super(init);
      (Object as any).assign(this, init);
    }
  }

  export class RegenerateProjectTokenResponse extends ResponseBase<string> {
    public constructor(init?: Partial<RegenerateProjectTokenResponse>) {
      super(init);
      (Object as any).assign(this, init);
    }
  }

  export class UpdateDefaultProjectLanguageResponse extends ResponseBase<boolean> {
    public constructor(init?: Partial<UpdateDefaultProjectLanguageResponse>) {
      super(init);
      (Object as any).assign(this, init);
    }
  }

  export class UpdateDefaultProjectTimeZoneResponse extends ResponseBase<boolean> {
    public constructor(init?: Partial<UpdateDefaultProjectTimeZoneResponse>) {
      super(init);
      (Object as any).assign(this, init);
    }
  }

  export class UpdateProjectAllowedOriginsResponse extends ResponseBase<boolean> {
    public constructor(init?: Partial<UpdateProjectAllowedOriginsResponse>) {
      super(init);
      (Object as any).assign(this, init);
    }
  }

  export class UpdateProjectDescriptionResponse extends ResponseBase<boolean> {
    public constructor(init?: Partial<UpdateProjectDescriptionResponse>) {
      super(init);
      (Object as any).assign(this, init);
    }
  }

  export class UpdateProjectLanguagesResponse extends ResponseBase<boolean> {
    public constructor(init?: Partial<UpdateProjectLanguagesResponse>) {
      super(init);
      (Object as any).assign(this, init);
    }
  }

  export class UpdateProjectNameResponse extends ResponseBase<boolean> {
    public slugifiedName: string;

    public constructor(init?: Partial<UpdateProjectNameResponse>) {
      super(init);
      (Object as any).assign(this, init);
    }
  }

  export class UpdateProjectUrlResponse extends ResponseBase<boolean> {
    public constructor(init?: Partial<UpdateProjectUrlResponse>) {
      super(init);
      (Object as any).assign(this, init);
    }
  }

  export class UpdateProjectUserZonesResponse extends ResponseBase<boolean> {
    public constructor(init?: Partial<UpdateProjectUserZonesResponse>) {
      super(init);
      (Object as any).assign(this, init);
    }
  }

  export class UpdateProjectZoneResponse extends ResponseBase<boolean> {
    public constructor(init?: Partial<UpdateProjectZoneResponse>) {
      super(init);
      (Object as any).assign(this, init);
    }
  }

  export class CreateProjectTokenResponse extends ResponseBase<boolean> {
    public constructor(init?: Partial<CreateProjectTokenResponse>) {
      super(init);
      (Object as any).assign(this, init);
    }
  }

  export class DeleteProjectTokenResponse extends ResponseBase<boolean> {
    public constructor(init?: Partial<DeleteProjectTokenResponse>) {
      super(init);
      (Object as any).assign(this, init);
    }
  }

  export class GetProjectTokensResponse extends Array<ResponseBase<Token>> {
    public runtimeTokens: string[];

    public constructor(init?: Partial<GetProjectTokensResponse>) {
      super();
      (Object as any).assign(this, init);
    }
  }

  export class UpdateProjectTokenResponse extends ResponseBase<boolean> {
    public constructor(init?: Partial<UpdateProjectTokenResponse>) {
      super(init);
      (Object as any).assign(this, init);
    }
  }

  export class UpdateProjectWidgetResponse extends ResponseBase<boolean> {
    public constructor(init?: Partial<UpdateProjectWidgetResponse>) {
      super(init);
      (Object as any).assign(this, init);
    }
  }

  export class ResendVerificationTokenResponse extends ResponseBase<boolean> {
    public constructor(init?: Partial<ResendVerificationTokenResponse>) {
      super(init);
      (Object as any).assign(this, init);
    }
  }

  export class CheckAccountPasswordResetResponse extends ResponseBase<boolean> {
    public accounts: PasswordResetAccountDto[];

    public constructor(init?: Partial<CheckAccountPasswordResetResponse>) {
      super(init);
      (Object as any).assign(this, init);
    }
  }

  export class CreateAccountPasswordResetResponse extends ResponseBase<boolean> {
    public constructor(init?: Partial<CreateAccountPasswordResetResponse>) {
      super(init);
      (Object as any).assign(this, init);
    }
  }

  export class ResetAccountPasswordResponse extends ResponseBase<boolean> {
    public constructor(init?: Partial<ResetAccountPasswordResponse>) {
      super(init);
      (Object as any).assign(this, init);
    }
  }

  export class CancelSubscriptionResponse extends ResponseBase<boolean> {
    public constructor(init?: Partial<CancelSubscriptionResponse>) {
      super(init);
      (Object as any).assign(this, init);
    }
  }

  export class CreateCardIntentResponse extends ResponseBase<string> {
    public constructor(init?: Partial<CreateCardIntentResponse>) {
      super(init);
      (Object as any).assign(this, init);
    }
  }

  export class UpdateCardResponse extends ResponseBase<boolean> {
    public subscriptionError: string;
    public card: CardDto;

    public constructor(init?: Partial<UpdateCardResponse>) {
      super(init);
      (Object as any).assign(this, init);
    }
  }

  export class CheckIfCanChangeSubscriptionResponse extends ResponseBase<boolean> {
    public paymentErrors: string[];
    public projectErrors: ProjectPlanChangeCheckDto[];

    public constructor(init?: Partial<CheckIfCanChangeSubscriptionResponse>) {
      super(init);
      (Object as any).assign(this, init);
    }
  }

  export class GetSubscriptionResponse extends ResponseBase<AccountSettingsDto> {
    public constructor(init?: Partial<GetSubscriptionResponse>) {
      super(init);
      (Object as any).assign(this, init);
    }
  }

  export class PayForUnpaidInvoicesResponse extends ResponseBase<boolean> {
    public constructor(init?: Partial<PayForUnpaidInvoicesResponse>) {
      super(init);
      (Object as any).assign(this, init);
    }
  }

  export class RenewCanceledSubscriptionResponse extends ResponseBase<boolean> {
    public constructor(init?: Partial<RenewCanceledSubscriptionResponse>) {
      super(init);
      (Object as any).assign(this, init);
    }
  }

  export class UpdateBillingDetailsResponse extends ResponseBase<boolean> {
    public constructor(init?: Partial<UpdateBillingDetailsResponse>) {
      super(init);
      (Object as any).assign(this, init);
    }
  }

  export class UpdateSubscriptionResponse extends ResponseBase<boolean> {
    public paymentErrors: string[];
    public projectErrors: ProjectPlanChangeCheckDto[];
    public card: CardDto;

    public constructor(init?: Partial<UpdateSubscriptionResponse>) {
      super(init);
      (Object as any).assign(this, init);
    }
  }

  export class BlockUserResponse extends ResponseBase<boolean> {
    public constructor(init?: Partial<BlockUserResponse>) {
      super(init);
      (Object as any).assign(this, init);
    }
  }

  export class DeleteUserResponse extends ResponseBase<boolean> {
    public constructor(init?: Partial<DeleteUserResponse>) {
      super(init);
      (Object as any).assign(this, init);
    }
  }

  export class GetUserResponse extends ResponseBase<AccountUserDto> {
    public constructor(init?: Partial<GetUserResponse>) {
      super(init);
      (Object as any).assign(this, init);
    }
  }

  export class GetUsersResponse extends Array<ResponseBase<AccountUserDto>> {
    public totalCount: number;

    public constructor(init?: Partial<GetUsersResponse>) {
      super();
      (Object as any).assign(this, init);
    }
  }

  export class InviteUserResponse extends ResponseBase<boolean> {
    public constructor(init?: Partial<InviteUserResponse>) {
      super(init);
      (Object as any).assign(this, init);
    }
  }

  export class GetProfileResponse extends ResponseBase<AccountUserDto> {
    public constructor(init?: Partial<GetProfileResponse>) {
      super(init);
      (Object as any).assign(this, init);
    }
  }

  export class UpdatePasswordResponse extends ResponseBase<boolean> {
    public constructor(init?: Partial<UpdatePasswordResponse>) {
      super(init);
      (Object as any).assign(this, init);
    }
  }

  export class UpdateProfileResponse extends ResponseBase<boolean> {
    public constructor(init?: Partial<UpdateProfileResponse>) {
      super(init);
      (Object as any).assign(this, init);
    }
  }

  export class ResendAccountUserInvitationResponse extends ResponseBase<boolean> {
    public constructor(init?: Partial<ResendAccountUserInvitationResponse>) {
      super(init);
      (Object as any).assign(this, init);
    }
  }

  export class UnblockUserResponse extends ResponseBase<boolean> {
    public constructor(init?: Partial<UnblockUserResponse>) {
      super(init);
      (Object as any).assign(this, init);
    }
  }

  export class UpdateUserResponse extends ResponseBase<boolean> {
    public constructor(init?: Partial<UpdateUserResponse>) {
      super(init);
      (Object as any).assign(this, init);
    }
  }

  export class CheckAccountUserInvitationTokenResponse extends ResponseBase<boolean> {
    public accountDetails: AccountListItemDto;
    public projects: string[];
    public accountId: string;
    public userId: string;

    public constructor(
      init?: Partial<CheckAccountUserInvitationTokenResponse>,
    ) {
      super(init);
      (Object as any).assign(this, init);
    }
  }

  export class VerifyAccountResponse extends ResponseBase<boolean> {
    public accountDetails: AccountListItemDto;

    public constructor(init?: Partial<VerifyAccountResponse>) {
      super(init);
      (Object as any).assign(this, init);
    }
  }

  export class VerifyAccountUserResponse extends ResponseBase<AuthenticateResponse> {
    public apiLogin: string;

    public constructor(init?: Partial<VerifyAccountUserResponse>) {
      super(init);
      (Object as any).assign(this, init);
    }
  }

  export class ReloadSystemFunctionsResponse extends ResponseBase<boolean> {
    public constructor(init?: Partial<ReloadSystemFunctionsResponse>) {
      super(init);
      (Object as any).assign(this, init);
    }
  }

  export class CreateSchemaAggregateResponse extends ResponseBase<string> {
    public constructor(init?: Partial<CreateSchemaAggregateResponse>) {
      super(init);
      (Object as any).assign(this, init);
    }
  }

  export class DeleteSchemaAggregateResponse extends ResponseBase<boolean> {
    public constructor(init?: Partial<DeleteSchemaAggregateResponse>) {
      super(init);
      (Object as any).assign(this, init);
    }
  }

  export class GetSchemaAggregateResponse extends ResponseBase<CollectionAggregateDto> {
    public constructor(init?: Partial<GetSchemaAggregateResponse>) {
      super(init);
      (Object as any).assign(this, init);
    }
  }

  export class GetSchemaAggregatesResponse extends Array<
    ResponseBase<CollectionAggregateDto>
  > {
    public constructor(init?: Partial<GetSchemaAggregatesResponse>) {
      super();
      (Object as any).assign(this, init);
    }
  }

  export class TestAggregateResponse extends ResponseBase<string> {
    public constructor(init?: Partial<TestAggregateResponse>) {
      super(init);
      (Object as any).assign(this, init);
    }
  }

  export class UpdateSchemaAggregateResponse extends ResponseBase<string> {
    public constructor(init?: Partial<UpdateSchemaAggregateResponse>) {
      super(init);
      (Object as any).assign(this, init);
    }
  }

  export class CreateBackupResponse extends ResponseBase<BackupListItemDto> {
    public constructor(init?: Partial<CreateBackupResponse>) {
      super(init);
      (Object as any).assign(this, init);
    }
  }

  export class DeleteBackupResponse extends ResponseBase<boolean> {
    public constructor(init?: Partial<DeleteBackupResponse>) {
      super(init);
      (Object as any).assign(this, init);
    }
  }

  export class DisableBackupsResponse extends ResponseBase<boolean> {
    public constructor(init?: Partial<DisableBackupsResponse>) {
      super(init);
      (Object as any).assign(this, init);
    }
  }

  export class EnableBackupsResponse extends ResponseBase<boolean> {
    public constructor(init?: Partial<EnableBackupsResponse>) {
      super(init);
      (Object as any).assign(this, init);
    }
  }

  export class GetBackupsResponse extends Array<
    ResponseBase<BackupListItemDto>
  > {
    public totalCount: number;

    public constructor(init?: Partial<GetBackupsResponse>) {
      super();
      (Object as any).assign(this, init);
    }
  }

  export class GetBackupSettingsResponse extends ResponseBase<BackupSettingsDto> {
    public backups: BackupListItemDto[];
    public perGbCost: number;

    public constructor(init?: Partial<GetBackupSettingsResponse>) {
      super(init);
      (Object as any).assign(this, init);
    }
  }

  export class RebuildBackupResponse extends ResponseBase<boolean> {
    public constructor(init?: Partial<RebuildBackupResponse>) {
      super(init);
      (Object as any).assign(this, init);
    }
  }

  export class UpdateBackupSettingsResponse extends ResponseBase<boolean> {
    public constructor(init?: Partial<UpdateBackupSettingsResponse>) {
      super(init);
      (Object as any).assign(this, init);
    }
  }

  export class AskCodeMashForClusterUpdateResponse extends ResponseBase<boolean> {
    public constructor(init?: Partial<AskCodeMashForClusterUpdateResponse>) {
      super(init);
      (Object as any).assign(this, init);
    }
  }

  export class AskCodeMashForFreeClusterResponse extends ResponseBase<boolean> {
    public constructor(init?: Partial<AskCodeMashForFreeClusterResponse>) {
      super(init);
      (Object as any).assign(this, init);
    }
  }

  export class CreateClusterResponse extends ResponseBase<ClusterDto> {
    public constructor(init?: Partial<CreateClusterResponse>) {
      super(init);
      (Object as any).assign(this, init);
    }
  }

  export class DeleteClusterResponse extends ResponseBase<boolean> {
    public constructor(init?: Partial<DeleteClusterResponse>) {
      super(init);
      (Object as any).assign(this, init);
    }
  }

  export class TestDatabaseAccountFeaturesResponse extends ResponseBase<DatabaseFeatureTestDto> {
    public constructor(init?: Partial<TestDatabaseAccountFeaturesResponse>) {
      super(init);
      (Object as any).assign(this, init);
    }
  }

  export class UpdateClusterResponse extends ResponseBase<ClusterDto> {
    public constructor(init?: Partial<UpdateClusterResponse>) {
      super(init);
      (Object as any).assign(this, init);
    }
  }

  export class UpdateDefaultClusterResponse extends ResponseBase<boolean> {
    public constructor(init?: Partial<UpdateDefaultClusterResponse>) {
      super(init);
      (Object as any).assign(this, init);
    }
  }

  export class DisableDatabaseResponse extends ResponseBase<boolean> {
    public constructor(init?: Partial<DisableDatabaseResponse>) {
      super(init);
      (Object as any).assign(this, init);
    }
  }

  export class EstablishDatabaseResponse extends ResponseBase<string> {
    public databaseClusters: ClusterDto[];
    public databaseVersion?: number;
    public databaseProvider: string;

    public constructor(init?: Partial<EstablishDatabaseResponse>) {
      super(init);
      (Object as any).assign(this, init);
    }
  }

  export class CreateSchemaExportResponse extends ResponseBase<string> {
    public constructor(init?: Partial<CreateSchemaExportResponse>) {
      super(init);
      (Object as any).assign(this, init);
    }
  }

  export class DeleteSchemaExportResponse extends ResponseBase<boolean> {
    public constructor(init?: Partial<DeleteSchemaExportResponse>) {
      super(init);
      (Object as any).assign(this, init);
    }
  }

  export class GetSchemaExportResponse extends ResponseBase<ExportItemDto> {
    public constructor(init?: Partial<GetSchemaExportResponse>) {
      super(init);
      (Object as any).assign(this, init);
    }
  }

  export class GetSchemaExportsResponse extends Array<
    ResponseBase<ExportListItemDto>
  > {
    public totalCount: number;

    public constructor(init?: Partial<GetSchemaExportsResponse>) {
      super();
      (Object as any).assign(this, init);
    }
  }

  export class CreateCollectionFormResponse extends ResponseBase<string> {
    public token: string;

    public constructor(init?: Partial<CreateCollectionFormResponse>) {
      super(init);
      (Object as any).assign(this, init);
    }
  }

  export class GetCollectionFormResponse extends ResponseBase<CollectionFormDto> {
    public constructor(init?: Partial<GetCollectionFormResponse>) {
      super(init);
      (Object as any).assign(this, init);
    }
  }

  export class UpdateCollectionFormResponse extends ResponseBase<string> {
    public constructor(init?: Partial<UpdateCollectionFormResponse>) {
      super(init);
      (Object as any).assign(this, init);
    }
  }

  export class UpdateCollectionFormTokenResponse extends ResponseBase<string> {
    public constructor(init?: Partial<UpdateCollectionFormTokenResponse>) {
      super(init);
      (Object as any).assign(this, init);
    }
  }

  export class GetCollectionFunctionsResponse extends Array<
    ResponseBase<NameIdDto>
  > {
    public constructor(init?: Partial<GetCollectionFunctionsResponse>) {
      super();
      (Object as any).assign(this, init);
    }
  }

  export class GetDatabaseSystemSettingsResponse extends ResponseBase<DatabaseSettingsDto> {
    public constructor(init?: Partial<GetDatabaseSystemSettingsResponse>) {
      super(init);
      (Object as any).assign(this, init);
    }
  }

  export class GetSchemaTemplateResponse extends ResponseBase<SchemaTemplate> {
    public constructor(init?: Partial<GetSchemaTemplateResponse>) {
      super(init);
      (Object as any).assign(this, init);
    }
  }

  export class GetSchemaTemplatesResponse extends Array<
    ResponseBase<SchemaTemplateDto>
  > {
    public constructor(init?: Partial<GetSchemaTemplatesResponse>) {
      super();
      (Object as any).assign(this, init);
    }
  }

  export class CreateSchemaImportResponse extends ResponseBase<string> {
    public constructor(init?: Partial<CreateSchemaImportResponse>) {
      super(init);
      (Object as any).assign(this, init);
    }
  }

  export class DeleteSchemaImportResponse extends ResponseBase<boolean> {
    public constructor(init?: Partial<DeleteSchemaImportResponse>) {
      super(init);
      (Object as any).assign(this, init);
    }
  }

  export class GetSchemaImportResponse extends ResponseBase<ImportItemDto> {
    public constructor(init?: Partial<GetSchemaImportResponse>) {
      super(init);
      (Object as any).assign(this, init);
    }
  }

  export class GetSchemaImportsResponse extends Array<
    ResponseBase<ImportListItemDto>
  > {
    public totalCount: number;

    public constructor(init?: Partial<GetSchemaImportsResponse>) {
      super();
      (Object as any).assign(this, init);
    }
  }

  export class UploadSchemaImportFileResponse extends Array<
    ResponseBase<Object>
  > {
    public key: string;
    public delimiter: string;

    public constructor(init?: Partial<UploadSchemaImportFileResponse>) {
      super();
      (Object as any).assign(this, init);
    }
  }

  export class CreateIndexResponse extends ResponseBase<string> {
    public constructor(init?: Partial<CreateIndexResponse>) {
      super(init);
      (Object as any).assign(this, init);
    }
  }

  export class DeleteIndexResponse extends ResponseBase<boolean> {
    public constructor(init?: Partial<DeleteIndexResponse>) {
      super(init);
      (Object as any).assign(this, init);
    }
  }

  export class SaveInformDatabaseRegionResponse extends ResponseBase<boolean> {
    public constructor(init?: Partial<SaveInformDatabaseRegionResponse>) {
      super(init);
      (Object as any).assign(this, init);
    }
  }

  export class ClearSchemaDataResponse extends ResponseBase<boolean> {
    public constructor(init?: Partial<ClearSchemaDataResponse>) {
      super(init);
      (Object as any).assign(this, init);
    }
  }

  export class CreateSchemaResponse extends ResponseBase<string> {
    public constructor(init?: Partial<CreateSchemaResponse>) {
      super(init);
      (Object as any).assign(this, init);
    }
  }

  export class CreateSchemaFromTemplateResponse extends ResponseBase<boolean> {
    public constructor(init?: Partial<CreateSchemaFromTemplateResponse>) {
      super(init);
      (Object as any).assign(this, init);
    }
  }

  export class DuplicateSchemaResponse extends ResponseBase<string> {
    public constructor(init?: Partial<DuplicateSchemaResponse>) {
      super(init);
      (Object as any).assign(this, init);
    }
  }

  export class GetSchemaResponse extends ResponseBase<SchemaDto> {
    public availableLanguages: string[];
    public translatableFields: string[];
    public defaultLanguage: string;
    public indexes: CollectionIndexDto[];
    public isFieldRenaming: boolean;
    public renamingFieldFrom: string;
    public renamingFieldTo: string;

    public constructor(init?: Partial<GetSchemaResponse>) {
      super(init);
      (Object as any).assign(this, init);
    }
  }

  export class GetSchemasResponse extends Array<ResponseBase<SchemaBasicDto>> {
    public constructor(init?: Partial<GetSchemasResponse>) {
      super();
      (Object as any).assign(this, init);
    }
  }

  export class CancelRenameFieldUniqueNameResponse extends ResponseBase<boolean> {
    public constructor(init?: Partial<CancelRenameFieldUniqueNameResponse>) {
      super(init);
      (Object as any).assign(this, init);
    }
  }

  export class RenameFieldUniqueNameResponse extends ResponseBase<string> {
    public constructor(init?: Partial<RenameFieldUniqueNameResponse>) {
      super(init);
      (Object as any).assign(this, init);
    }
  }

  export class RenameSchemaResponse extends ResponseBase<boolean> {
    public constructor(init?: Partial<RenameSchemaResponse>) {
      super(init);
      (Object as any).assign(this, init);
    }
  }

  export class ChangeDatabaseStorageSizeResponse extends ResponseBase<boolean> {
    public constructor(init?: Partial<ChangeDatabaseStorageSizeResponse>) {
      super(init);
      (Object as any).assign(this, init);
    }
  }

  export class GetDatabaseSettingsResponse extends ResponseBase<DbSettingsDto> {
    public clusters: ClusterDto[];
    public databaseVersion?: number;
    public databaseProvider: string;
    public systemSettings: DatabaseSettingsDto;
    public freeClusterRequested: boolean;

    public constructor(init?: Partial<GetDatabaseSettingsResponse>) {
      super(init);
      (Object as any).assign(this, init);
    }
  }

  export class ClearTaxonomyDataResponse extends ResponseBase<boolean> {
    public constructor(init?: Partial<ClearTaxonomyDataResponse>) {
      super(init);
      (Object as any).assign(this, init);
    }
  }

  export class CreateTaxonomyResponse extends ResponseBase<string> {
    public taxonomyName: string;

    public constructor(init?: Partial<CreateTaxonomyResponse>) {
      super(init);
      (Object as any).assign(this, init);
    }
  }

  export class DeleteTaxonomyResponse extends ResponseBase<boolean> {
    public constructor(init?: Partial<DeleteTaxonomyResponse>) {
      super(init);
      (Object as any).assign(this, init);
    }
  }

  export class EditTaxonomyResponse extends ResponseBase<string> {
    public taxonomyName: string;

    public constructor(init?: Partial<EditTaxonomyResponse>) {
      super(init);
      (Object as any).assign(this, init);
    }
  }

  export class GetTaxonomiesResponse extends Array<
    ResponseBase<TaxonomyListDto>
  > {
    public canUseAdvance: boolean;

    public constructor(init?: Partial<GetTaxonomiesResponse>) {
      super();
      (Object as any).assign(this, init);
    }
  }

  export class GetTaxonomyResponse extends ResponseBase<TaxonomyDto> {
    public availableLanguages: string[];
    public defaultLanguage: string;

    public constructor(init?: Partial<GetTaxonomyResponse>) {
      super(init);
      (Object as any).assign(this, init);
    }
  }

  export class CancelTaxonomyRenameFieldUniqueNameResponse extends ResponseBase<boolean> {
    public constructor(
      init?: Partial<CancelTaxonomyRenameFieldUniqueNameResponse>,
    ) {
      super(init);
      (Object as any).assign(this, init);
    }
  }

  export class RenameTaxonomyFieldUniqueNameResponse extends ResponseBase<string> {
    public constructor(init?: Partial<RenameTaxonomyFieldUniqueNameResponse>) {
      super(init);
      (Object as any).assign(this, init);
    }
  }

  // @DataContract
  export class InsertOneResponse extends ResponseBase<string> {
    public constructor(init?: Partial<InsertOneResponse>) {
      super(init);
      (Object as any).assign(this, init);
    }
  }

  export class DeleteManyTermsResponse extends ResponseBase<DeleteResult> {
    public constructor(init?: Partial<DeleteManyTermsResponse>) {
      super(init);
      (Object as any).assign(this, init);
    }
  }

  export class GetTermResponse extends ResponseBase<TermDto> {
    public constructor(init?: Partial<GetTermResponse>) {
      super(init);
      (Object as any).assign(this, init);
    }
  }

  export class GetTermForCreateResponse extends ResponseBase<string> {
    public taxonomy: TaxonomyDto;
    public taxonomies: TaxonomyBasicDto[];
    public availableLanguages: string[];
    public defaultLanguage: string;

    public constructor(init?: Partial<GetTermForCreateResponse>) {
      super(init);
      (Object as any).assign(this, init);
    }
  }

  export class UploadRecordFileResponse extends ResponseBase<File> {
    public key: string;

    public constructor(init?: Partial<UploadRecordFileResponse>) {
      super(init);
      (Object as any).assign(this, init);
    }
  }

  export class CreateCollectionTriggerResponse extends ResponseBase<string> {
    public constructor(init?: Partial<CreateCollectionTriggerResponse>) {
      super(init);
      (Object as any).assign(this, init);
    }
  }

  export class DeleteCollectionTriggerResponse extends ResponseBase<boolean> {
    public constructor(init?: Partial<DeleteCollectionTriggerResponse>) {
      super(init);
      (Object as any).assign(this, init);
    }
  }

  export class DisableCollectionTriggerResponse extends ResponseBase<boolean> {
    public constructor(init?: Partial<DisableCollectionTriggerResponse>) {
      super(init);
      (Object as any).assign(this, init);
    }
  }

  export class EnableCollectionTriggerResponse extends ResponseBase<boolean> {
    public constructor(init?: Partial<EnableCollectionTriggerResponse>) {
      super(init);
      (Object as any).assign(this, init);
    }
  }

  export class UpdateCollectionTriggerResponse extends ResponseBase<boolean> {
    public constructor(init?: Partial<UpdateCollectionTriggerResponse>) {
      super(init);
      (Object as any).assign(this, init);
    }
  }

  export class UpdateDatabaseSettingsResponse extends ResponseBase<boolean> {
    public constructor(init?: Partial<UpdateDatabaseSettingsResponse>) {
      super(init);
      (Object as any).assign(this, init);
    }
  }

  export class GrantPublicFileAccessResponse extends ResponseBase<boolean> {
    public constructor(init?: Partial<GrantPublicFileAccessResponse>) {
      super(init);
      (Object as any).assign(this, init);
    }
  }

  export class GrantPublicFolderAccessResponse extends ResponseBase<boolean> {
    public constructor(init?: Partial<GrantPublicFolderAccessResponse>) {
      super(init);
      (Object as any).assign(this, init);
    }
  }

  export class RevokePublicFileAccessResponse extends ResponseBase<boolean> {
    public constructor(init?: Partial<RevokePublicFileAccessResponse>) {
      super(init);
      (Object as any).assign(this, init);
    }
  }

  export class RevokePublicFolderAccessResponse extends ResponseBase<boolean> {
    public constructor(init?: Partial<RevokePublicFolderAccessResponse>) {
      super(init);
      (Object as any).assign(this, init);
    }
  }

  export class CreateFileAccountResponse extends ResponseBase<string> {
    public constructor(init?: Partial<CreateFileAccountResponse>) {
      super(init);
      (Object as any).assign(this, init);
    }
  }

  export class DeleteFileAccountResponse extends ResponseBase<boolean> {
    public constructor(init?: Partial<DeleteFileAccountResponse>) {
      super(init);
      (Object as any).assign(this, init);
    }
  }

  export class EditFileAccountResponse extends ResponseBase<boolean> {
    public constructor(init?: Partial<EditFileAccountResponse>) {
      super(init);
      (Object as any).assign(this, init);
    }
  }

  export class GetFileAccountResponse extends ResponseBase<FileAccountDto> {
    public constructor(init?: Partial<GetFileAccountResponse>) {
      super(init);
      (Object as any).assign(this, init);
    }
  }

  export class GetFileAccountsResponse extends Array<
    ResponseBase<FileAccountDto>
  > {
    public constructor(init?: Partial<GetFileAccountsResponse>) {
      super();
      (Object as any).assign(this, init);
    }
  }

  export class SetFileAccountAsDefaultResponse extends ResponseBase<boolean> {
    public constructor(init?: Partial<SetFileAccountAsDefaultResponse>) {
      super(init);
      (Object as any).assign(this, init);
    }
  }

  export class SyncFilesFromProviderResponse extends ResponseBase<boolean> {
    public constructor(init?: Partial<SyncFilesFromProviderResponse>) {
      super(init);
      (Object as any).assign(this, init);
    }
  }

  export class TestFileAccountFeaturesResponse extends ResponseBase<FileAccountFeatureTestDto> {
    public constructor(init?: Partial<TestFileAccountFeaturesResponse>) {
      super(init);
      (Object as any).assign(this, init);
    }
  }

  export class CreateFolderResponse extends ResponseBase<BrowseObjectDto> {
    public constructor(init?: Partial<CreateFolderResponse>) {
      super(init);
      (Object as any).assign(this, init);
    }
  }

  export class DeleteFolderResponse extends ResponseBase<boolean> {
    public constructor(init?: Partial<DeleteFolderResponse>) {
      super(init);
      (Object as any).assign(this, init);
    }
  }

  export class GetFileOptimizationsResponse extends Array<
    ResponseBase<DbFileOptimization>
  > {
    public constructor(init?: Partial<GetFileOptimizationsResponse>) {
      super();
      (Object as any).assign(this, init);
    }
  }

  export class GetFolderFilesResponse extends Array<
    ResponseBase<BrowseObjectDto>
  > {
    public totalCount: number;
    public canInsert: boolean;
    public isParentPublic: boolean;

    public constructor(init?: Partial<GetFolderFilesResponse>) {
      super();
      (Object as any).assign(this, init);
    }
  }

  export class RenameFolderResponse extends ResponseBase<boolean> {
    public constructor(init?: Partial<RenameFolderResponse>) {
      super(init);
      (Object as any).assign(this, init);
    }
  }

  export class DeleteManyFilesResponse extends ResponseBase<boolean> {
    public constructor(init?: Partial<DeleteManyFilesResponse>) {
      super(init);
      (Object as any).assign(this, init);
    }
  }

  export class DisableFilesResponse extends ResponseBase<boolean> {
    public constructor(init?: Partial<DisableFilesResponse>) {
      super(init);
      (Object as any).assign(this, init);
    }
  }

  export class EnableFilesResponse extends ResponseBase<string> {
    public fileAccountId?: string;
    public fileAccountName: string;
    public filesVersion?: number;

    public constructor(init?: Partial<EnableFilesResponse>) {
      super(init);
      (Object as any).assign(this, init);
    }
  }

  export class GetDirectoriesResponse extends Array<ResponseBase<string>> {
    public constructor(init?: Partial<GetDirectoriesResponse>) {
      super();
      (Object as any).assign(this, init);
    }
  }

  export class GetFilesSettingsResponse extends ResponseBase<FilesSettingsDto> {
    public constructor(init?: Partial<GetFilesSettingsResponse>) {
      super(init);
      (Object as any).assign(this, init);
    }
  }

  export class CreateFilesTriggerResponse extends ResponseBase<string> {
    public constructor(init?: Partial<CreateFilesTriggerResponse>) {
      super(init);
      (Object as any).assign(this, init);
    }
  }

  export class DeleteFilesTriggerResponse extends ResponseBase<boolean> {
    public constructor(init?: Partial<DeleteFilesTriggerResponse>) {
      super(init);
      (Object as any).assign(this, init);
    }
  }

  export class DisableFilesTriggerResponse extends ResponseBase<boolean> {
    public constructor(init?: Partial<DisableFilesTriggerResponse>) {
      super(init);
      (Object as any).assign(this, init);
    }
  }

  export class EnableFilesTriggerResponse extends ResponseBase<boolean> {
    public constructor(init?: Partial<EnableFilesTriggerResponse>) {
      super(init);
      (Object as any).assign(this, init);
    }
  }

  export class GetFilesTriggersResponse extends Array<
    ResponseBase<FilesTriggerCreateDto>
  > {
    public constructor(init?: Partial<GetFilesTriggersResponse>) {
      super();
      (Object as any).assign(this, init);
    }
  }

  export class UpdateFilesTriggerResponse extends ResponseBase<boolean> {
    public constructor(init?: Partial<UpdateFilesTriggerResponse>) {
      super(init);
      (Object as any).assign(this, init);
    }
  }

  export class GetCollectionTagsFilterResponse extends Array<
    ResponseBase<SelectItem>
  > {
    public totalCount: number;

    public constructor(init?: Partial<GetCollectionTagsFilterResponse>) {
      super();
      (Object as any).assign(this, init);
    }
  }

  export class GetFilesFilterResponse extends Array<ResponseBase<SelectItem>> {
    public totalCount: number;

    public constructor(init?: Partial<GetFilesFilterResponse>) {
      super();
      (Object as any).assign(this, init);
    }
  }

  export class GetRecordsFilterResponse extends Array<
    ResponseBase<SelectItem>
  > {
    public totalCount: number;

    public constructor(init?: Partial<GetRecordsFilterResponse>) {
      super();
      (Object as any).assign(this, init);
    }
  }

  export class GetTermsFilterResponse extends Array<ResponseBase<SelectItem>> {
    public totalCount: number;

    public constructor(init?: Partial<GetTermsFilterResponse>) {
      super();
      (Object as any).assign(this, init);
    }
  }

  export class GetUsersFilterResponse extends Array<ResponseBase<SelectItem>> {
    public totalCount: number;

    public constructor(init?: Partial<GetUsersFilterResponse>) {
      super();
      (Object as any).assign(this, init);
    }
  }

  export class AuthCredentialsSharedFormResponse extends ResponseBase<string> {
    public constructor(init?: Partial<AuthCredentialsSharedFormResponse>) {
      super(init);
      (Object as any).assign(this, init);
    }
  }

  export class FormRegisterOAuthUserResponse extends ResponseBase<boolean> {
    public userId: string;
    public userAuthId: number;
    public accountId: string;

    public constructor(init?: Partial<FormRegisterOAuthUserResponse>) {
      super(init);
      (Object as any).assign(this, init);
    }
  }

  export class DownloadFormFileUrlResponse extends ResponseBase<string> {
    public constructor(init?: Partial<DownloadFormFileUrlResponse>) {
      super(init);
      (Object as any).assign(this, init);
    }
  }

  export class UploadFormFileResponse extends ResponseBase<File> {
    public key: string;

    public constructor(init?: Partial<UploadFormFileResponse>) {
      super(init);
      (Object as any).assign(this, init);
    }
  }

  export class GetFormCollectionTagsFilterResponse extends Array<
    ResponseBase<SelectItem>
  > {
    public totalCount: number;

    public constructor(init?: Partial<GetFormCollectionTagsFilterResponse>) {
      super();
      (Object as any).assign(this, init);
    }
  }

  export class GetFormRecordsFilterResponse extends Array<
    ResponseBase<SelectItem>
  > {
    public totalCount: number;

    public constructor(init?: Partial<GetFormRecordsFilterResponse>) {
      super();
      (Object as any).assign(this, init);
    }
  }

  export class GetFormRolesResponse extends Array<ResponseBase<RoleBaseDto>> {
    public constructor(init?: Partial<GetFormRolesResponse>) {
      super();
      (Object as any).assign(this, init);
    }
  }

  export class GetFormTermsFilterResponse extends Array<
    ResponseBase<SelectItem>
  > {
    public totalCount: number;

    public constructor(init?: Partial<GetFormTermsFilterResponse>) {
      super();
      (Object as any).assign(this, init);
    }
  }

  export class GetFormUsersFilterResponse extends Array<
    ResponseBase<SelectItem>
  > {
    public totalCount: number;

    public constructor(init?: Partial<GetFormUsersFilterResponse>) {
      super();
      (Object as any).assign(this, init);
    }
  }

  export class GetSharedFormResponse extends ResponseBase<CollectionFormDto> {
    public jsonSchema: string;
    public uiSchema: string;
    public projectId: string;
    public accountId: string;
    public collectionName: string;
    public schemaId: string;
    public availableLanguages: string[];
    public defaultLanguage: string;
    public translatableFields: string[];
    public timeZone: string;
    public records: string;
    public editRecord: string;
    public needAuth: boolean;
    public totalInserted: number;
    public publicSession: boolean;
    public logoUrl: string;
    public projectName: string;
    public loggedInName: string;

    public constructor(init?: Partial<GetSharedFormResponse>) {
      super(init);
      (Object as any).assign(this, init);
    }
  }

  export class InsertSharedFormResponse extends ResponseBase<string> {
    public constructor(init?: Partial<InsertSharedFormResponse>) {
      super(init);
      (Object as any).assign(this, init);
    }
  }

  export class UpdateSharedFormResponse extends ResponseBase<boolean> {
    public constructor(init?: Partial<UpdateSharedFormResponse>) {
      super(init);
      (Object as any).assign(this, init);
    }
  }

  export class DisableLoggingResponse extends ResponseBase<boolean> {
    public constructor(init?: Partial<DisableLoggingResponse>) {
      super(init);
      (Object as any).assign(this, init);
    }
  }

  export class EnableLoggingResponse extends ResponseBase<string> {
    public constructor(init?: Partial<EnableLoggingResponse>) {
      super(init);
      (Object as any).assign(this, init);
    }
  }

  export class DeleteLogsResponse extends ResponseBase<boolean> {
    public constructor(init?: Partial<DeleteLogsResponse>) {
      super(init);
      (Object as any).assign(this, init);
    }
  }

  export class GetLogResponse extends ResponseBase<LogDto> {
    public constructor(init?: Partial<GetLogResponse>) {
      super(init);
      (Object as any).assign(this, init);
    }
  }

  export class GetLogsResponse extends Array<ResponseBase<LogListItemDto>> {
    public totalCount: number;

    public constructor(init?: Partial<GetLogsResponse>) {
      super();
      (Object as any).assign(this, init);
    }
  }

  export class UpdateAuthorizationResponse extends ResponseBase<boolean> {
    public constructor(init?: Partial<UpdateAuthorizationResponse>) {
      super(init);
      (Object as any).assign(this, init);
    }
  }

  export class UpdatePasswordComplexityResponse extends ResponseBase<boolean> {
    public constructor(init?: Partial<UpdatePasswordComplexityResponse>) {
      super(init);
      (Object as any).assign(this, init);
    }
  }

  export class CreateRoleResponse extends ResponseBase<string> {
    public constructor(init?: Partial<CreateRoleResponse>) {
      super(init);
      (Object as any).assign(this, init);
    }
  }

  export class DeleteRoleResponse extends ResponseBase<boolean> {
    public constructor(init?: Partial<DeleteRoleResponse>) {
      super(init);
      (Object as any).assign(this, init);
    }
  }

  export class GetRoleResponse extends ResponseBase<Role> {
    public constructor(init?: Partial<GetRoleResponse>) {
      super(init);
      (Object as any).assign(this, init);
    }
  }

  export class GetRolesResponse extends Array<ResponseBase<RoleBaseDto>> {
    public constructor(init?: Partial<GetRolesResponse>) {
      super();
      (Object as any).assign(this, init);
    }
  }

  export class UpdateRoleResponse extends ResponseBase<boolean> {
    public constructor(init?: Partial<UpdateRoleResponse>) {
      super(init);
      (Object as any).assign(this, init);
    }
  }

  export class CancelRenameUserFieldUniqueNameResponse extends ResponseBase<boolean> {
    public constructor(
      init?: Partial<CancelRenameUserFieldUniqueNameResponse>,
    ) {
      super(init);
      (Object as any).assign(this, init);
    }
  }

  export class RenameUserFieldUniqueNameResponse extends ResponseBase<string> {
    public constructor(init?: Partial<RenameUserFieldUniqueNameResponse>) {
      super(init);
      (Object as any).assign(this, init);
    }
  }

  export class CreateUsersTriggerResponse extends ResponseBase<string> {
    public constructor(init?: Partial<CreateUsersTriggerResponse>) {
      super(init);
      (Object as any).assign(this, init);
    }
  }

  export class DeleteUsersTriggerResponse extends ResponseBase<boolean> {
    public constructor(init?: Partial<DeleteUsersTriggerResponse>) {
      super(init);
      (Object as any).assign(this, init);
    }
  }

  export class DisableUsersTriggerResponse extends ResponseBase<boolean> {
    public constructor(init?: Partial<DisableUsersTriggerResponse>) {
      super(init);
      (Object as any).assign(this, init);
    }
  }

  export class EnableUsersTriggerResponse extends ResponseBase<boolean> {
    public constructor(init?: Partial<EnableUsersTriggerResponse>) {
      super(init);
      (Object as any).assign(this, init);
    }
  }

  export class GetUsersTriggerResponse extends Array<
    ResponseBase<UsersTriggerCreateDto>
  > {
    public constructor(init?: Partial<GetUsersTriggerResponse>) {
      super();
      (Object as any).assign(this, init);
    }
  }

  export class UpdateUsersTriggerResponse extends ResponseBase<boolean> {
    public constructor(init?: Partial<UpdateUsersTriggerResponse>) {
      super(init);
      (Object as any).assign(this, init);
    }
  }

  export class CreateEmailAccountResponse extends ResponseBase<string> {
    public constructor(init?: Partial<CreateEmailAccountResponse>) {
      super(init);
      (Object as any).assign(this, init);
    }
  }

  export class DeleteEmailAccountResponse extends ResponseBase<boolean> {
    public constructor(init?: Partial<DeleteEmailAccountResponse>) {
      super(init);
      (Object as any).assign(this, init);
    }
  }

  export class EditEmailAccountResponse extends ResponseBase<boolean> {
    public constructor(init?: Partial<EditEmailAccountResponse>) {
      super(init);
      (Object as any).assign(this, init);
    }
  }

  export class EditEmailAccountTokenResponse extends ResponseBase<boolean> {
    public constructor(init?: Partial<EditEmailAccountTokenResponse>) {
      super(init);
      (Object as any).assign(this, init);
    }
  }

  export class GetEmailAccountResponse extends ResponseBase<EmailAccountDto> {
    public constructor(init?: Partial<GetEmailAccountResponse>) {
      super(init);
      (Object as any).assign(this, init);
    }
  }

  export class GetEmailAccountsResponse extends Array<
    ResponseBase<EmailAccountDto>
  > {
    public constructor(init?: Partial<GetEmailAccountsResponse>) {
      super();
      (Object as any).assign(this, init);
    }
  }

  export class SetEmailAccountAsDefaultResponse extends ResponseBase<boolean> {
    public constructor(init?: Partial<SetEmailAccountAsDefaultResponse>) {
      super(init);
      (Object as any).assign(this, init);
    }
  }

  export class SendPushNotificationResponse extends ResponseBase<string> {
    public constructor(init?: Partial<SendPushNotificationResponse>) {
      super(init);
      (Object as any).assign(this, init);
    }
  }

  export class TestEmailAccountFeaturesResponse extends ResponseBase<FeatureTestDto> {
    public constructor(init?: Partial<TestEmailAccountFeaturesResponse>) {
      super(init);
      (Object as any).assign(this, init);
    }
  }

  export class DisableEmailResponse extends ResponseBase<boolean> {
    public constructor(init?: Partial<DisableEmailResponse>) {
      super(init);
      (Object as any).assign(this, init);
    }
  }

  export class EnableEmailResponse extends ResponseBase<string> {
    public constructor(init?: Partial<EnableEmailResponse>) {
      super(init);
      (Object as any).assign(this, init);
    }
  }

  export class GetEmailMetricsResponse extends ResponseBase<EmailMetricsDto> {
    public constructor(init?: Partial<GetEmailMetricsResponse>) {
      super(init);
      (Object as any).assign(this, init);
    }
  }

  export class DeleteEmailGroupResponse extends ResponseBase<boolean> {
    public constructor(init?: Partial<DeleteEmailGroupResponse>) {
      super(init);
      (Object as any).assign(this, init);
    }
  }

  export class GetEmailResponse extends ResponseBase<EmailDataEditDto> {
    public constructor(init?: Partial<GetEmailResponse>) {
      super(init);
      (Object as any).assign(this, init);
    }
  }

  export class GetEmailGroupResponse extends ResponseBase<EmailGroupDataEditDto> {
    public constructor(init?: Partial<GetEmailGroupResponse>) {
      super(init);
      (Object as any).assign(this, init);
    }
  }

  export class GetEmailGroupEventsResponse extends Array<
    ResponseBase<EmailGroupEventDto>
  > {
    public constructor(init?: Partial<GetEmailGroupEventsResponse>) {
      super();
      (Object as any).assign(this, init);
    }
  }

  export class GetEmailGroupsResponse extends Array<
    ResponseBase<EmailGroupDataDto>
  > {
    public totalCount: number;

    public constructor(init?: Partial<GetEmailGroupsResponse>) {
      super();
      (Object as any).assign(this, init);
    }
  }

  export class GetEmailsResponse extends Array<ResponseBase<EmailDataDto>> {
    public totalCount: number;

    public constructor(init?: Partial<GetEmailsResponse>) {
      super();
      (Object as any).assign(this, init);
    }
  }

  export class SendPostponedEmailResponse extends ResponseBase<boolean> {
    public constructor(init?: Partial<SendPostponedEmailResponse>) {
      super(init);
      (Object as any).assign(this, init);
    }
  }

  export class SendPostponedEmailGroupResponse extends ResponseBase<boolean> {
    public constructor(init?: Partial<SendPostponedEmailGroupResponse>) {
      super(init);
      (Object as any).assign(this, init);
    }
  }

  export class CreateOrUpdateEmailTagResponse extends ResponseBase<string> {
    public constructor(init?: Partial<CreateOrUpdateEmailTagResponse>) {
      super(init);
      (Object as any).assign(this, init);
    }
  }

  export class DeleteEmailTagResponse extends ResponseBase<boolean> {
    public constructor(init?: Partial<DeleteEmailTagResponse>) {
      super(init);
      (Object as any).assign(this, init);
    }
  }

  export class UpdateEmailPreferencesResponse extends ResponseBase<boolean> {
    public constructor(init?: Partial<UpdateEmailPreferencesResponse>) {
      super(init);
      (Object as any).assign(this, init);
    }
  }

  export class CreateMessageTemplateResponse extends ResponseBase<string> {
    public subjectError: string;
    public bodyError: string;

    public constructor(init?: Partial<CreateMessageTemplateResponse>) {
      super(init);
      (Object as any).assign(this, init);
    }
  }

  export class DeleteEmailTemplateResponse extends ResponseBase<boolean> {
    public constructor(init?: Partial<DeleteEmailTemplateResponse>) {
      super(init);
      (Object as any).assign(this, init);
    }
  }

  export class DeleteEmailTemplateContentResponse extends ResponseBase<boolean> {
    public constructor(init?: Partial<DeleteEmailTemplateContentResponse>) {
      super(init);
      (Object as any).assign(this, init);
    }
  }

  export class EditMessageTemplateResponse extends ResponseBase<boolean> {
    public subjectError: string;
    public bodyError: string;

    public constructor(init?: Partial<EditMessageTemplateResponse>) {
      super(init);
      (Object as any).assign(this, init);
    }
  }

  export class GetMessageTemplateResponse extends ResponseBase<MessageTemplateDto> {
    public contentFound: boolean;

    public constructor(init?: Partial<GetMessageTemplateResponse>) {
      super(init);
      (Object as any).assign(this, init);
    }
  }

  export class GetMessageTemplatesResponse extends Array<
    ResponseBase<MessageTemplateDto>
  > {
    public hasEmailAccount: boolean;

    public constructor(init?: Partial<GetMessageTemplatesResponse>) {
      super();
      (Object as any).assign(this, init);
    }
  }

  export class GetMessageTemplateTagsResponse extends Array<
    ResponseBase<KeyValue>
  > {
    public constructor(init?: Partial<GetMessageTemplateTagsResponse>) {
      super();
      (Object as any).assign(this, init);
    }
  }

  export class GetMessageTemplateTokensResponse extends Array<
    ResponseBase<string>
  > {
    public constructor(init?: Partial<GetMessageTemplateTokensResponse>) {
      super();
      (Object as any).assign(this, init);
    }
  }

  export class GetMessageTemplateUsageResponse extends ResponseBase<EmailTemplateUsageDto> {
    public constructor(init?: Partial<GetMessageTemplateUsageResponse>) {
      super(init);
      (Object as any).assign(this, init);
    }
  }

  export class UpdaloadEmailTemplateAttachmentResponse extends ResponseBase<boolean> {
    public key: string;

    public constructor(
      init?: Partial<UpdaloadEmailTemplateAttachmentResponse>,
    ) {
      super(init);
      (Object as any).assign(this, init);
    }
  }

  export class GetUserEmailPreferencesResponse extends Array<
    ResponseBase<NameIdDto>
  > {
    public isMarketing: boolean;
    public subscribedToNews: boolean;
    public unsubscribedNewsTags: string[];
    public logoUrl: string;
    public projectName: string;
    public texts: EmailPreferenceTexts;
    public projectId: string;
    public userId: string;

    public constructor(init?: Partial<GetUserEmailPreferencesResponse>) {
      super();
      (Object as any).assign(this, init);
    }
  }

  export class UpdateUserEmailPreferencesResponse extends ResponseBase<boolean> {
    public constructor(init?: Partial<UpdateUserEmailPreferencesResponse>) {
      super(init);
      (Object as any).assign(this, init);
    }
  }

  export class TestPushAccountFeaturesResponse extends ResponseBase<PushFeatureTestDto> {
    public constructor(init?: Partial<TestPushAccountFeaturesResponse>) {
      super(init);
      (Object as any).assign(this, init);
    }
  }

  export class GetNotificationMetricsResponse extends ResponseBase<EmailMetricsDto> {
    public constructor(init?: Partial<GetNotificationMetricsResponse>) {
      super(init);
      (Object as any).assign(this, init);
    }
  }

  export class DeleteManyNotificationGroupsResponse extends ResponseBase<boolean> {
    public constructor(init?: Partial<DeleteManyNotificationGroupsResponse>) {
      super(init);
      (Object as any).assign(this, init);
    }
  }

  export class DeleteNotificationGroupResponse extends ResponseBase<boolean> {
    public constructor(init?: Partial<DeleteNotificationGroupResponse>) {
      super(init);
      (Object as any).assign(this, init);
    }
  }

  export class GetNotificationResponse extends ResponseBase<NotificationDataEditDto> {
    public constructor(init?: Partial<GetNotificationResponse>) {
      super(init);
      (Object as any).assign(this, init);
    }
  }

  export class GetNotificationGroupResponse extends ResponseBase<NotificationGroupDataEditDto> {
    public constructor(init?: Partial<GetNotificationGroupResponse>) {
      super(init);
      (Object as any).assign(this, init);
    }
  }

  export class GetNotificationGroupEventsResponse extends Array<
    ResponseBase<EmailGroupEventDto>
  > {
    public constructor(init?: Partial<GetNotificationGroupEventsResponse>) {
      super();
      (Object as any).assign(this, init);
    }
  }

  export class GetNotificationGroupsResponse extends Array<
    ResponseBase<NotificationGroupDataDto>
  > {
    public totalCount: number;

    public constructor(init?: Partial<GetNotificationGroupsResponse>) {
      super();
      (Object as any).assign(this, init);
    }
  }

  export class GetNotificationsResponse extends Array<
    ResponseBase<NotificationDataDto>
  > {
    public totalCount: number;

    public constructor(init?: Partial<GetNotificationsResponse>) {
      super();
      (Object as any).assign(this, init);
    }
  }

  export class SendPostponedNotificationResponse extends ResponseBase<boolean> {
    public constructor(init?: Partial<SendPostponedNotificationResponse>) {
      super(init);
      (Object as any).assign(this, init);
    }
  }

  export class SendPostponedNotificationGroupResponse extends ResponseBase<boolean> {
    public constructor(init?: Partial<SendPostponedNotificationGroupResponse>) {
      super(init);
      (Object as any).assign(this, init);
    }
  }

  export class CreateNotificationTemplateResponse extends ResponseBase<string> {
    public titleError: string;
    public bodyError: string;
    public subtitleError: string;
    public dataError: string;

    public constructor(init?: Partial<CreateNotificationTemplateResponse>) {
      super(init);
      (Object as any).assign(this, init);
    }
  }

  export class DeleteNotificationTemplateResponse extends ResponseBase<boolean> {
    public constructor(init?: Partial<DeleteNotificationTemplateResponse>) {
      super(init);
      (Object as any).assign(this, init);
    }
  }

  export class DeleteNotificationTemplateContentResponse extends ResponseBase<boolean> {
    public constructor(
      init?: Partial<DeleteNotificationTemplateContentResponse>,
    ) {
      super(init);
      (Object as any).assign(this, init);
    }
  }

  export class GetNotificationTemplateTokensResponse extends Array<
    ResponseBase<string>
  > {
    public constructor(init?: Partial<GetNotificationTemplateTokensResponse>) {
      super();
      (Object as any).assign(this, init);
    }
  }

  export class GetNotificationTemplateUsageResponse extends ResponseBase<EmailTemplateUsageDto> {
    public constructor(init?: Partial<GetNotificationTemplateUsageResponse>) {
      super(init);
      (Object as any).assign(this, init);
    }
  }

  export class UpdateNotificationTemplateResponse extends ResponseBase<boolean> {
    public titleError: string;
    public bodyError: string;
    public subtitleError: string;
    public dataError: string;

    public constructor(init?: Partial<UpdateNotificationTemplateResponse>) {
      super(init);
      (Object as any).assign(this, init);
    }
  }

  export class UploadPushTemplateAttachmentResponse extends ResponseBase<boolean> {
    public key: string;

    public constructor(init?: Partial<UploadPushTemplateAttachmentResponse>) {
      super(init);
      (Object as any).assign(this, init);
    }
  }

  export class DisableServerEventsResponse extends ResponseBase<boolean> {
    public constructor(init?: Partial<DisableServerEventsResponse>) {
      super(init);
      (Object as any).assign(this, init);
    }
  }

  export class EnableServerEventsResponse extends ResponseBase<string> {
    public constructor(init?: Partial<EnableServerEventsResponse>) {
      super(init);
      (Object as any).assign(this, init);
    }
  }

  export class GetServerEventsSettingsResponse extends ResponseBase<ServerEventsSettingsDto> {
    public constructor(init?: Partial<GetServerEventsSettingsResponse>) {
      super(init);
      (Object as any).assign(this, init);
    }
  }

  export class UpdateServerEventsSettingsResponse extends ResponseBase<boolean> {
    public constructor(init?: Partial<UpdateServerEventsSettingsResponse>) {
      super(init);
      (Object as any).assign(this, init);
    }
  }

  export class TestAppleAppStoreConnectionResponse extends ResponseBase<PaymentFeatureTestDto> {
    public constructor(init?: Partial<TestAppleAppStoreConnectionResponse>) {
      super(init);
      (Object as any).assign(this, init);
    }
  }

  export class CreatePaymentAccountResponse extends ResponseBase<string> {
    public constructor(init?: Partial<CreatePaymentAccountResponse>) {
      super(init);
      (Object as any).assign(this, init);
    }
  }

  export class TestDectaAccountConnectionResponse extends ResponseBase<PaymentFeatureTestDto> {
    public constructor(init?: Partial<TestDectaAccountConnectionResponse>) {
      super(init);
      (Object as any).assign(this, init);
    }
  }

  export class DeletePaymentAccountResponse extends ResponseBase<boolean> {
    public constructor(init?: Partial<DeletePaymentAccountResponse>) {
      super(init);
      (Object as any).assign(this, init);
    }
  }

  export class GetPaymentAccountResponse extends ResponseBase<PaymentAccountDto> {
    public constructor(init?: Partial<GetPaymentAccountResponse>) {
      super(init);
      (Object as any).assign(this, init);
    }
  }

  export class GetPaymentAccountsResponse extends Array<
    ResponseBase<PaymentAccountDto>
  > {
    public constructor(init?: Partial<GetPaymentAccountsResponse>) {
      super();
      (Object as any).assign(this, init);
    }
  }

  export class TestGooglePlayStoreAccountConnectionResponse extends ResponseBase<PaymentFeatureTestDto> {
    public constructor(
      init?: Partial<TestGooglePlayStoreAccountConnectionResponse>,
    ) {
      super(init);
      (Object as any).assign(this, init);
    }
  }

  export class TestKevinAccountConnectionResponse extends ResponseBase<PaymentFeatureTestDto> {
    public constructor(init?: Partial<TestKevinAccountConnectionResponse>) {
      super(init);
      (Object as any).assign(this, init);
    }
  }

  export class BeginPaymentAccountValidationResponse extends ResponseBase<boolean> {
    public constructor(init?: Partial<BeginPaymentAccountValidationResponse>) {
      super(init);
      (Object as any).assign(this, init);
    }
  }

  export class TestPayseraAccountConnectionResponse extends ResponseBase<PaymentFeatureTestDto> {
    public constructor(init?: Partial<TestPayseraAccountConnectionResponse>) {
      super(init);
      (Object as any).assign(this, init);
    }
  }

  export class TestStripeAccountConnectionResponse extends ResponseBase<PaymentFeatureTestDto> {
    public constructor(init?: Partial<TestStripeAccountConnectionResponse>) {
      super(init);
      (Object as any).assign(this, init);
    }
  }

  export class UpdatePaymentAccountResponse extends ResponseBase<boolean> {
    public constructor(init?: Partial<UpdatePaymentAccountResponse>) {
      super(init);
      (Object as any).assign(this, init);
    }
  }

  export class DeleteManyCustomersResponse extends ResponseBase<boolean> {
    public constructor(init?: Partial<DeleteManyCustomersResponse>) {
      super(init);
      (Object as any).assign(this, init);
    }
  }

  export class DisablePaymentsResponse extends ResponseBase<boolean> {
    public constructor(init?: Partial<DisablePaymentsResponse>) {
      super(init);
      (Object as any).assign(this, init);
    }
  }

  export class DeleteManyDiscountsResponse extends ResponseBase<boolean> {
    public constructor(init?: Partial<DeleteManyDiscountsResponse>) {
      super(init);
      (Object as any).assign(this, init);
    }
  }

  export class EnablePaymentsResponse extends ResponseBase<string> {
    public constructor(init?: Partial<EnablePaymentsResponse>) {
      super(init);
      (Object as any).assign(this, init);
    }
  }

  export class DeleteAllTestOrdersResponse extends ResponseBase<boolean> {
    public constructor(init?: Partial<DeleteAllTestOrdersResponse>) {
      super(init);
      (Object as any).assign(this, init);
    }
  }

  export class DeleteManyOrdersResponse extends ResponseBase<boolean> {
    public constructor(init?: Partial<DeleteManyOrdersResponse>) {
      super(init);
      (Object as any).assign(this, init);
    }
  }

  export class DeleteOrderResponse extends ResponseBase<boolean> {
    public constructor(init?: Partial<DeleteOrderResponse>) {
      super(init);
      (Object as any).assign(this, init);
    }
  }

  export class GetOrderTransactionResponse extends ResponseBase<TransactionDto> {
    public constructor(init?: Partial<GetOrderTransactionResponse>) {
      super(init);
      (Object as any).assign(this, init);
    }
  }

  export class GetOrderTransactionsResponse extends Array<
    ResponseBase<TransactionDto>
  > {
    public totalCount: number;

    public constructor(init?: Partial<GetOrderTransactionsResponse>) {
      super();
      (Object as any).assign(this, init);
    }
  }

  export class CreatePaymentPlanResponse extends ResponseBase<string> {
    public constructor(init?: Partial<CreatePaymentPlanResponse>) {
      super(init);
      (Object as any).assign(this, init);
    }
  }

  export class DeletePaymentPlanResponse extends ResponseBase<boolean> {
    public constructor(init?: Partial<DeletePaymentPlanResponse>) {
      super(init);
      (Object as any).assign(this, init);
    }
  }

  export class GetPaymentPlanResponse extends ResponseBase<PaymentPlanDto> {
    public constructor(init?: Partial<GetPaymentPlanResponse>) {
      super(init);
      (Object as any).assign(this, init);
    }
  }

  export class GetPaymentPlansResponse extends Array<
    ResponseBase<PaymentPlanDto>
  > {
    public constructor(init?: Partial<GetPaymentPlansResponse>) {
      super();
      (Object as any).assign(this, init);
    }
  }

  export class UpdatePaymentPlanResponse extends ResponseBase<boolean> {
    public constructor(init?: Partial<UpdatePaymentPlanResponse>) {
      super(init);
      (Object as any).assign(this, init);
    }
  }

  export class CreateOrUpdatePaymentModeResponse extends ResponseBase<string> {
    public constructor(init?: Partial<CreateOrUpdatePaymentModeResponse>) {
      super(init);
      (Object as any).assign(this, init);
    }
  }

  export class DeletePaymentModeResponse extends ResponseBase<boolean> {
    public constructor(init?: Partial<DeletePaymentModeResponse>) {
      super(init);
      (Object as any).assign(this, init);
    }
  }

  export class CreateOrUpdatePaymentProductCollectionResponse extends ResponseBase<string> {
    public constructor(
      init?: Partial<CreateOrUpdatePaymentProductCollectionResponse>,
    ) {
      super(init);
      (Object as any).assign(this, init);
    }
  }

  export class DeletePaymentProductCollectionResponse extends ResponseBase<boolean> {
    public constructor(init?: Partial<DeletePaymentProductCollectionResponse>) {
      super(init);
      (Object as any).assign(this, init);
    }
  }

  export class UpdatePaymentSettingsResponse extends ResponseBase<boolean> {
    public constructor(init?: Partial<UpdatePaymentSettingsResponse>) {
      super(init);
      (Object as any).assign(this, init);
    }
  }

  export class CreatePaymentTriggerResponse extends ResponseBase<string> {
    public constructor(init?: Partial<CreatePaymentTriggerResponse>) {
      super(init);
      (Object as any).assign(this, init);
    }
  }

  export class DeletePaymentTriggerResponse extends ResponseBase<boolean> {
    public constructor(init?: Partial<DeletePaymentTriggerResponse>) {
      super(init);
      (Object as any).assign(this, init);
    }
  }

  export class DisablePaymentTriggerResponse extends ResponseBase<boolean> {
    public constructor(init?: Partial<DisablePaymentTriggerResponse>) {
      super(init);
      (Object as any).assign(this, init);
    }
  }

  export class EnablePaymentTriggerResponse extends ResponseBase<boolean> {
    public constructor(init?: Partial<EnablePaymentTriggerResponse>) {
      super(init);
      (Object as any).assign(this, init);
    }
  }

  export class GetPaymentTriggersResponse extends Array<
    ResponseBase<PaymentTriggerCreateDto>
  > {
    public constructor(init?: Partial<GetPaymentTriggersResponse>) {
      super();
      (Object as any).assign(this, init);
    }
  }

  export class UpdatePaymentTriggerResponse extends ResponseBase<boolean> {
    public constructor(init?: Partial<UpdatePaymentTriggerResponse>) {
      super(init);
      (Object as any).assign(this, init);
    }
  }

  export class GetScheduledTaskLogResponse extends ResponseBase<SchedulerTaskExecutionLogDto> {
    public constructor(init?: Partial<GetScheduledTaskLogResponse>) {
      super(init);
      (Object as any).assign(this, init);
    }
  }

  export class GetScheduledTaskLogsResponse extends Array<
    ResponseBase<SchedulerTaskExecutionLogDto>
  > {
    public totalCount: number;

    public constructor(init?: Partial<GetScheduledTaskLogsResponse>) {
      super();
      (Object as any).assign(this, init);
    }
  }

  export class CreateOrUpdateAmazonServerlessConnectionResponse extends ResponseBase<boolean> {
    public constructor(
      init?: Partial<CreateOrUpdateAmazonServerlessConnectionResponse>,
    ) {
      super(init);
      (Object as any).assign(this, init);
    }
  }

  export class TestAmazonAccountConnectionResponse extends ResponseBase<ServerlessFeatureTestDto> {
    public constructor(init?: Partial<TestAmazonAccountConnectionResponse>) {
      super(init);
      (Object as any).assign(this, init);
    }
  }

  export class AzureConnectionAuthStateResponse extends ResponseBase<string> {
    public constructor(init?: Partial<AzureConnectionAuthStateResponse>) {
      super(init);
      (Object as any).assign(this, init);
    }
  }

  export class CreateOrUpdateAzureServerlessConnectionResponse extends ResponseBase<boolean> {
    public validationError: string;
    public redirectUri: string;

    public constructor(
      init?: Partial<CreateOrUpdateAzureServerlessConnectionResponse>,
    ) {
      super(init);
      (Object as any).assign(this, init);
    }
  }

  export class DeleteServerlessConnectionResponse extends ResponseBase<boolean> {
    public constructor(init?: Partial<DeleteServerlessConnectionResponse>) {
      super(init);
      (Object as any).assign(this, init);
    }
  }

  export class GetServerlessConnectionResponse extends ResponseBase<ServerlessProviderDto> {
    public constructor(init?: Partial<GetServerlessConnectionResponse>) {
      super(init);
      (Object as any).assign(this, init);
    }
  }

  export class GetServerlessConnectionsResponse extends Array<
    ResponseBase<ServerlessProviderDto>
  > {
    public constructor(init?: Partial<GetServerlessConnectionsResponse>) {
      super();
      (Object as any).assign(this, init);
    }
  }

  export class CreateOrUpdateGoogleServerlessConnectionResponse extends ResponseBase<boolean> {
    public constructor(
      init?: Partial<CreateOrUpdateGoogleServerlessConnectionResponse>,
    ) {
      super(init);
      (Object as any).assign(this, init);
    }
  }

  export class TestGoogleAccountConnectionResponse extends ResponseBase<ServerlessFeatureTestDto> {
    public constructor(init?: Partial<TestGoogleAccountConnectionResponse>) {
      super(init);
      (Object as any).assign(this, init);
    }
  }

  export class DisableServerlessResponse extends ResponseBase<boolean> {
    public constructor(init?: Partial<DisableServerlessResponse>) {
      super(init);
      (Object as any).assign(this, init);
    }
  }

  export class EnableServerlessResponse extends ResponseBase<string> {
    public constructor(init?: Partial<EnableServerlessResponse>) {
      super(init);
      (Object as any).assign(this, init);
    }
  }

  export class AddSystemFunctionResponse extends ResponseBase<string> {
    public constructor(init?: Partial<AddSystemFunctionResponse>) {
      super(init);
      (Object as any).assign(this, init);
    }
  }

  export class CreateCustomFunctionAliasResponse extends ResponseBase<boolean> {
    public constructor(init?: Partial<CreateCustomFunctionAliasResponse>) {
      super(init);
      (Object as any).assign(this, init);
    }
  }

  export class DeleteCustomFunctionAliasResponse extends ResponseBase<boolean> {
    public constructor(init?: Partial<DeleteCustomFunctionAliasResponse>) {
      super(init);
      (Object as any).assign(this, init);
    }
  }

  export class UpdateCustomFunctionAliasResponse extends ResponseBase<boolean> {
    public constructor(init?: Partial<UpdateCustomFunctionAliasResponse>) {
      super(init);
      (Object as any).assign(this, init);
    }
  }

  export class CreateCustomFunctionResponse extends ResponseBase<string> {
    public constructor(init?: Partial<CreateCustomFunctionResponse>) {
      super(init);
      (Object as any).assign(this, init);
    }
  }

  export class UpdateCustomFunctionResponse extends ResponseBase<boolean> {
    public constructor(init?: Partial<UpdateCustomFunctionResponse>) {
      super(init);
      (Object as any).assign(this, init);
    }
  }

  export class UpdateCustomFunctionCodeResponse extends ResponseBase<boolean> {
    public constructor(init?: Partial<UpdateCustomFunctionCodeResponse>) {
      super(init);
      (Object as any).assign(this, init);
    }
  }

  export class UploadFunctionFileResponse extends ResponseBase<string> {
    public key: string;

    public constructor(init?: Partial<UploadFunctionFileResponse>) {
      super(init);
      (Object as any).assign(this, init);
    }
  }

  export class CreateCustomFunctionVersionResponse extends ResponseBase<boolean> {
    public constructor(init?: Partial<CreateCustomFunctionVersionResponse>) {
      super(init);
      (Object as any).assign(this, init);
    }
  }

  export class DeleteCustomFunctionVersionResponse extends ResponseBase<boolean> {
    public constructor(init?: Partial<DeleteCustomFunctionVersionResponse>) {
      super(init);
      (Object as any).assign(this, init);
    }
  }

  export class ExecuteTestFunctionResponse extends ResponseBase<ServerlessTestFunctionLog> {
    public constructor(init?: Partial<ExecuteTestFunctionResponse>) {
      super(init);
      (Object as any).assign(this, init);
    }
  }

  export class GetFunctionUsageResponse extends ResponseBase<EmailTemplateUsageDto> {
    public constructor(init?: Partial<GetFunctionUsageResponse>) {
      super(init);
      (Object as any).assign(this, init);
    }
  }

  export class GetSystemFunctionResponse extends ResponseBase<ServerlessSystemFunctionDto> {
    public systemResources: FunctionResource;
    public functionResources: string;
    public allowMemoryChange: boolean;
    public allowTimeoutChange: boolean;
    public showAdvanced: boolean;
    public googleSettings: GoogleSettings;
    public azureActiveDirSettings: AzureActiveDirSettings;
    public authProviderDisabled: boolean;

    public constructor(init?: Partial<GetSystemFunctionResponse>) {
      super(init);
      (Object as any).assign(this, init);
    }
  }

  export class GetSystemFunctionsResponse extends Array<
    ResponseBase<ServerlessFunctionDto>
  > {
    public totalCount: number;

    public constructor(init?: Partial<GetSystemFunctionsResponse>) {
      super();
      (Object as any).assign(this, init);
    }
  }

  export class ReloadServerlessFunctionsResponse extends ResponseBase<boolean> {
    public constructor(init?: Partial<ReloadServerlessFunctionsResponse>) {
      super(init);
      (Object as any).assign(this, init);
    }
  }

  export class RemoveFunctionResponse extends ResponseBase<boolean> {
    public constructor(init?: Partial<RemoveFunctionResponse>) {
      super(init);
      (Object as any).assign(this, init);
    }
  }

  export class TestSchedulerFunctionResponse extends ResponseBase<boolean> {
    public constructor(init?: Partial<TestSchedulerFunctionResponse>) {
      super(init);
      (Object as any).assign(this, init);
    }
  }

  export class GetCollectionTriggerFunctionConfigResponse extends ResponseBase<CollectionSysTriggerConfigDto> {
    public constructor(
      init?: Partial<GetCollectionTriggerFunctionConfigResponse>,
    ) {
      super(init);
      (Object as any).assign(this, init);
    }
  }

  export class GetFilesTriggerFunctionConfigResponse extends ResponseBase<CollectionSysTriggerConfigDto> {
    public constructor(init?: Partial<GetFilesTriggerFunctionConfigResponse>) {
      super(init);
      (Object as any).assign(this, init);
    }
  }

  export class GetPaymentsTriggerFunctionConfigResponse extends ResponseBase<CollectionSysTriggerConfigDto> {
    public constructor(
      init?: Partial<GetPaymentsTriggerFunctionConfigResponse>,
    ) {
      super(init);
      (Object as any).assign(this, init);
    }
  }

  export class GetUsersTriggerFunctionConfigResponse extends ResponseBase<CollectionSysTriggerConfigDto> {
    public constructor(init?: Partial<GetUsersTriggerFunctionConfigResponse>) {
      super(init);
      (Object as any).assign(this, init);
    }
  }

  export class UpdateFunctionResponse extends ResponseBase<boolean> {
    public constructor(init?: Partial<UpdateFunctionResponse>) {
      super(init);
      (Object as any).assign(this, init);
    }
  }

  export class UploadServerlessFileResponse extends ResponseBase<boolean> {
    public key: string;

    public constructor(init?: Partial<UploadServerlessFileResponse>) {
      super(init);
      (Object as any).assign(this, init);
    }
  }

  export class ClearAadFunctionsKeyCacheResponse extends ResponseBase<boolean> {
    public constructor(init?: Partial<ClearAadFunctionsKeyCacheResponse>) {
      super(init);
      (Object as any).assign(this, init);
    }
  }

  export class GetSystemTermsResponse extends Array<
    ResponseBase<TermBasicDto>
  > {
    public constructor(init?: Partial<GetSystemTermsResponse>) {
      super();
      (Object as any).assign(this, init);
    }
  }

  export class GetFileTokenKeysResponse extends Array<ResponseBase<string>> {
    public constructor(init?: Partial<GetFileTokenKeysResponse>) {
      super();
      (Object as any).assign(this, init);
    }
  }

  export class GetPaymentTokenKeysResponse extends Array<ResponseBase<string>> {
    public constructor(init?: Partial<GetPaymentTokenKeysResponse>) {
      super();
      (Object as any).assign(this, init);
    }
  }

  export class GetProjectTokenKeysResponse extends Array<ResponseBase<string>> {
    public constructor(init?: Partial<GetProjectTokenKeysResponse>) {
      super();
      (Object as any).assign(this, init);
    }
  }

  export class GetUserTokenKeysResponse extends Array<ResponseBase<string>> {
    public constructor(init?: Partial<GetUserTokenKeysResponse>) {
      super();
      (Object as any).assign(this, init);
    }
  }

  export class GetEstablishedProjectModulesResponse extends Array<
    ResponseBase<IAuthorizedModule>
  > {
    public constructor(init?: Partial<GetEstablishedProjectModulesResponse>) {
      super();
      (Object as any).assign(this, init);
    }
  }

  export class GetTimeZonesResponse extends Array<ResponseBase<NameId>> {
    public constructor(init?: Partial<GetTimeZonesResponse>) {
      super();
      (Object as any).assign(this, init);
    }
  }

  export class EnableMarketingResponse extends ResponseBase<string> {
    public constructor(init?: Partial<EnableMarketingResponse>) {
      super(init);
      (Object as any).assign(this, init);
    }
  }

  export class ImportContactsResponse extends ResponseBase<boolean> {
    public constructor(init?: Partial<ImportContactsResponse>) {
      super(init);
      (Object as any).assign(this, init);
    }
  }

  export class CreateCampaignResponse extends ResponseBase<string> {
    public constructor(init?: Partial<CreateCampaignResponse>) {
      super(init);
      (Object as any).assign(this, init);
    }
  }

  export class DeleteCampaignResponse extends ResponseBase<boolean> {
    public constructor(init?: Partial<DeleteCampaignResponse>) {
      super(init);
      (Object as any).assign(this, init);
    }
  }

  export class GetCampaignResponse extends ResponseBase<Campaign> {
    public constructor(init?: Partial<GetCampaignResponse>) {
      super(init);
      (Object as any).assign(this, init);
    }
  }

  export class GetCampaignsResponse extends Array<
    ResponseBase<CampaignListDto>
  > {
    public constructor(init?: Partial<GetCampaignsResponse>) {
      super();
      (Object as any).assign(this, init);
    }
  }

  export class TogglePaymentDiscountEnabledResponse extends ResponseBase<boolean> {
    public constructor(init?: Partial<TogglePaymentDiscountEnabledResponse>) {
      super(init);
      (Object as any).assign(this, init);
    }
  }

  export class DisableSchedulerResponse extends ResponseBase<boolean> {
    public constructor(init?: Partial<DisableSchedulerResponse>) {
      super(init);
      (Object as any).assign(this, init);
    }
  }

  export class EnableSchedulerResponse extends ResponseBase<string> {
    public constructor(init?: Partial<EnableSchedulerResponse>) {
      super(init);
      (Object as any).assign(this, init);
    }
  }

  export class CreateScheduledTaskResponse extends ResponseBase<string> {
    public constructor(init?: Partial<CreateScheduledTaskResponse>) {
      super(init);
      (Object as any).assign(this, init);
    }
  }

  export class DeleteScheduledTaskResponse extends ResponseBase<boolean> {
    public constructor(init?: Partial<DeleteScheduledTaskResponse>) {
      super(init);
      (Object as any).assign(this, init);
    }
  }

  export class GetScheduledTaskResponse extends ResponseBase<SchedulerDisplayTaskDto> {
    public constructor(init?: Partial<GetScheduledTaskResponse>) {
      super(init);
      (Object as any).assign(this, init);
    }
  }

  export class GetScheduledTasksResponse extends Array<
    ResponseBase<SchedulerDisplayTaskDto>
  > {
    public totalCount: number;

    public constructor(init?: Partial<GetScheduledTasksResponse>) {
      super();
      (Object as any).assign(this, init);
    }
  }

  export class RunScheduledTaskResponse extends ResponseBase<boolean> {
    public constructor(init?: Partial<RunScheduledTaskResponse>) {
      super(init);
      (Object as any).assign(this, init);
    }
  }

  export class ToggleScheduledTaskEnabledResponse extends ResponseBase<boolean> {
    public constructor(init?: Partial<ToggleScheduledTaskEnabledResponse>) {
      super(init);
      (Object as any).assign(this, init);
    }
  }

  export class ToggleScheduledTaskOnErrorResponse extends ResponseBase<boolean> {
    public constructor(init?: Partial<ToggleScheduledTaskOnErrorResponse>) {
      super(init);
      (Object as any).assign(this, init);
    }
  }

  export class UpdateScheduledTaskResponse extends ResponseBase<boolean> {
    public constructor(init?: Partial<UpdateScheduledTaskResponse>) {
      super(init);
      (Object as any).assign(this, init);
    }
  }

  export class DeleteManyDevicesResponse extends ResponseBase<boolean> {
    public constructor(init?: Partial<DeleteManyDevicesResponse>) {
      super(init);
      (Object as any).assign(this, init);
    }
  }

  export class GetDevicesMetaDataResponse extends Array<
    ResponseBase<KeyValuesItem>
  > {
    public constructor(init?: Partial<GetDevicesMetaDataResponse>) {
      super();
      (Object as any).assign(this, init);
    }
  }

  export class DisableNotificationResponse extends ResponseBase<boolean> {
    public constructor(init?: Partial<DisableNotificationResponse>) {
      super(init);
      (Object as any).assign(this, init);
    }
  }

  export class EnableNotificationResponse extends ResponseBase<string> {
    public constructor(init?: Partial<EnableNotificationResponse>) {
      super(init);
      (Object as any).assign(this, init);
    }
  }

  export class DisableTranslationResponse extends ResponseBase<boolean> {
    public constructor(init?: Partial<DisableTranslationResponse>) {
      super(init);
      (Object as any).assign(this, init);
    }
  }

  export class EnableTranslationResponse extends ResponseBase<string> {
    public constructor(init?: Partial<EnableTranslationResponse>) {
      super(init);
      (Object as any).assign(this, init);
    }
  }

  export class GetUserFunctionsResponse extends Array<ResponseBase<NameIdDto>> {
    public constructor(init?: Partial<GetUserFunctionsResponse>) {
      super();
      (Object as any).assign(this, init);
    }
  }

  export class GetFunctionResponse extends ResponseBase<ServerlessFunctionDto> {
    public systemResources: FunctionResource;
    public functionResources: string;
    public allowMemoryChange: boolean;
    public allowTimeoutChange: boolean;
    public schema: string;
    public testSchema: string;
    public cantBeTested: boolean;
    public isSchedulerFunction: boolean;
    public showAdvanced: boolean;
    public googleSettings: GoogleSettings;
    public azureActiveDirSettings: AzureActiveDirSettings;

    public constructor(init?: Partial<GetFunctionResponse>) {
      super(init);
      (Object as any).assign(this, init);
    }
  }

  export class GetFunctionsResponse extends Array<
    ResponseBase<ServerlessFunctionDto>
  > {
    public totalCount: number;
    public tags: string[];

    public constructor(init?: Partial<GetFunctionsResponse>) {
      super();
      (Object as any).assign(this, init);
    }
  }

  export class GetFunctionTagsResponse extends Array<ResponseBase<string>> {
    public constructor(init?: Partial<GetFunctionTagsResponse>) {
      super();
      (Object as any).assign(this, init);
    }
  }

  export class DisableMembershipResponse extends ResponseBase<boolean> {
    public constructor(init?: Partial<DisableMembershipResponse>) {
      super(init);
      (Object as any).assign(this, init);
    }
  }

  export class EnableMembershipResponse extends ResponseBase<string> {
    public constructor(init?: Partial<EnableMembershipResponse>) {
      super(init);
      (Object as any).assign(this, init);
    }
  }

  export class ReactivateUserResponse extends ResponseBase<boolean> {
    public constructor(init?: Partial<ReactivateUserResponse>) {
      super(init);
      (Object as any).assign(this, init);
    }
  }

  export class RegenerateServiceUserTokenResponse extends ResponseBase<string> {
    public constructor(init?: Partial<RegenerateServiceUserTokenResponse>) {
      super(init);
      (Object as any).assign(this, init);
    }
  }

  export class RegisterServiceUserResponse extends ResponseBase<string> {
    public constructor(init?: Partial<RegisterServiceUserResponse>) {
      super(init);
      (Object as any).assign(this, init);
    }
  }

  export class UpdateServiceUserResponse extends ResponseBase<boolean> {
    public constructor(init?: Partial<UpdateServiceUserResponse>) {
      super(init);
      (Object as any).assign(this, init);
    }
  }

  export class UpdateUserMetaSchemaResponse extends ResponseBase<boolean> {
    public constructor(init?: Partial<UpdateUserMetaSchemaResponse>) {
      super(init);
      (Object as any).assign(this, init);
    }
  }

  export class GetAuthenticationSettingsResponse extends ResponseBase<AuthenticationDto> {
    public constructor(init?: Partial<GetAuthenticationSettingsResponse>) {
      super(init);
      (Object as any).assign(this, init);
    }
  }

  export class GetAuthorizationSettingsResponse extends ResponseBase<AuthorizationDto> {
    public constructor(init?: Partial<GetAuthorizationSettingsResponse>) {
      super(init);
      (Object as any).assign(this, init);
    }
  }

  export class ApplyPermissionToUsersResponse extends ResponseBase<boolean> {
    public constructor(init?: Partial<ApplyPermissionToUsersResponse>) {
      super(init);
      (Object as any).assign(this, init);
    }
  }

  export class GetUsersPermissionDetailsResponse extends ResponseBase<PermissionUsersDetailsDto> {
    public constructor(init?: Partial<GetUsersPermissionDetailsResponse>) {
      super(init);
      (Object as any).assign(this, init);
    }
  }

  export class RevokePermissionFromUsersResponse extends ResponseBase<boolean> {
    public constructor(init?: Partial<RevokePermissionFromUsersResponse>) {
      super(init);
      (Object as any).assign(this, init);
    }
  }

  export class CretePolicyResponse extends ResponseBase<string> {
    public constructor(init?: Partial<CretePolicyResponse>) {
      super(init);
      (Object as any).assign(this, init);
    }
  }

  export class DeletePolicyResponse extends ResponseBase<boolean> {
    public constructor(init?: Partial<DeletePolicyResponse>) {
      super(init);
      (Object as any).assign(this, init);
    }
  }

  export class GetPoliciesResponse extends Array<ResponseBase<PolicyBaseDto>> {
    public constructor(init?: Partial<GetPoliciesResponse>) {
      super();
      (Object as any).assign(this, init);
    }
  }

  export class GetPolicyResponse extends ResponseBase<PolicyBaseDto> {
    public constructor(init?: Partial<GetPolicyResponse>) {
      super(init);
      (Object as any).assign(this, init);
    }
  }

  export class GetSystemPoliciesResponse extends Array<
    ResponseBase<PolicyBaseDto>
  > {
    public constructor(init?: Partial<GetSystemPoliciesResponse>) {
      super();
      (Object as any).assign(this, init);
    }
  }

  export class UpdatePolicyResponse extends ResponseBase<string> {
    public constructor(init?: Partial<UpdatePolicyResponse>) {
      super(init);
      (Object as any).assign(this, init);
    }
  }

  export class GetUserMetaSchemaResponse extends ResponseBase<UserMetaSchemaDto> {
    public availableLanguages: string[];
    public defaultLanguage: string;

    public constructor(init?: Partial<GetUserMetaSchemaResponse>) {
      super(init);
      (Object as any).assign(this, init);
    }
  }

  export class GetPaymentSettingsResponse extends ResponseBase<PaymentSettingsDto> {
    public constructor(init?: Partial<GetPaymentSettingsResponse>) {
      super(init);
      (Object as any).assign(this, init);
    }
  }

  export class DisableAppleAuthenticationResponse extends ResponseBase<boolean> {
    public constructor(init?: Partial<DisableAppleAuthenticationResponse>) {
      super(init);
      (Object as any).assign(this, init);
    }
  }

  export class EnableAppleAuthenticationResponse extends ResponseBase<boolean> {
    public constructor(init?: Partial<EnableAppleAuthenticationResponse>) {
      super(init);
      (Object as any).assign(this, init);
    }
  }

  export class UpdateAppleAuthenticationResponse extends ResponseBase<boolean> {
    public constructor(init?: Partial<UpdateAppleAuthenticationResponse>) {
      super(init);
      (Object as any).assign(this, init);
    }
  }

  export class DisableAadAuthenticationResponse extends ResponseBase<boolean> {
    public constructor(init?: Partial<DisableAadAuthenticationResponse>) {
      super(init);
      (Object as any).assign(this, init);
    }
  }

  export class EnableAadAuthenticationResponse extends ResponseBase<boolean> {
    public constructor(init?: Partial<EnableAadAuthenticationResponse>) {
      super(init);
      (Object as any).assign(this, init);
    }
  }

  export class UpdateAadApiSettingsResponse extends ResponseBase<boolean> {
    public constructor(init?: Partial<UpdateAadApiSettingsResponse>) {
      super(init);
      (Object as any).assign(this, init);
    }
  }

  export class UpdateAadAuthenticationResponse extends ResponseBase<boolean> {
    public constructor(init?: Partial<UpdateAadAuthenticationResponse>) {
      super(init);
      (Object as any).assign(this, init);
    }
  }

  export class DisableFacebookAuthenticationResponse extends ResponseBase<boolean> {
    public constructor(init?: Partial<DisableFacebookAuthenticationResponse>) {
      super(init);
      (Object as any).assign(this, init);
    }
  }

  export class EnableFacebookAuthenticationResponse extends ResponseBase<boolean> {
    public constructor(init?: Partial<EnableFacebookAuthenticationResponse>) {
      super(init);
      (Object as any).assign(this, init);
    }
  }

  export class UpdateFacebookAuthenticationResponse extends ResponseBase<boolean> {
    public constructor(init?: Partial<UpdateFacebookAuthenticationResponse>) {
      super(init);
      (Object as any).assign(this, init);
    }
  }

  export class DisableGoogleAuthenticationResponse extends ResponseBase<boolean> {
    public constructor(init?: Partial<DisableGoogleAuthenticationResponse>) {
      super(init);
      (Object as any).assign(this, init);
    }
  }

  export class EnableGoogleAuthenticationResponse extends ResponseBase<boolean> {
    public constructor(init?: Partial<EnableGoogleAuthenticationResponse>) {
      super(init);
      (Object as any).assign(this, init);
    }
  }

  export class CreateGoogleServiceAccountResponse extends ResponseBase<string> {
    public clientId: string;
    public privateKeyEnding: string;

    public constructor(init?: Partial<CreateGoogleServiceAccountResponse>) {
      super(init);
      (Object as any).assign(this, init);
    }
  }

  export class DeleteGoogleServiceAccountResponse extends ResponseBase<boolean> {
    public constructor(init?: Partial<DeleteGoogleServiceAccountResponse>) {
      super(init);
      (Object as any).assign(this, init);
    }
  }

  export class UpdateGoogleServiceAccountResponse extends ResponseBase<boolean> {
    public clientId: string;
    public privateKeyEnding: string;

    public constructor(init?: Partial<UpdateGoogleServiceAccountResponse>) {
      super(init);
      (Object as any).assign(this, init);
    }
  }

  export class UpdateGoogleApiSettingsResponse extends ResponseBase<boolean> {
    public constructor(init?: Partial<UpdateGoogleApiSettingsResponse>) {
      super(init);
      (Object as any).assign(this, init);
    }
  }

  export class UpdateGoogleAuthenticationResponse extends ResponseBase<boolean> {
    public constructor(init?: Partial<UpdateGoogleAuthenticationResponse>) {
      super(init);
      (Object as any).assign(this, init);
    }
  }

  export class DisableTwitterAuthenticationResponse extends ResponseBase<boolean> {
    public constructor(init?: Partial<DisableTwitterAuthenticationResponse>) {
      super(init);
      (Object as any).assign(this, init);
    }
  }

  export class EnableTwitterAuthenticationResponse extends ResponseBase<boolean> {
    public constructor(init?: Partial<EnableTwitterAuthenticationResponse>) {
      super(init);
      (Object as any).assign(this, init);
    }
  }

  export class UpdateTwitterAuthenticationResponse extends ResponseBase<boolean> {
    public constructor(init?: Partial<UpdateTwitterAuthenticationResponse>) {
      super(init);
      (Object as any).assign(this, init);
    }
  }

  export class UpdateCredentialsAuthenticationResponse extends ResponseBase<boolean> {
    public constructor(
      init?: Partial<UpdateCredentialsAuthenticationResponse>,
    ) {
      super(init);
      (Object as any).assign(this, init);
    }
  }

  export class DeleteSchemaResponse extends ResponseBase<boolean> {
    public constructor(init?: Partial<DeleteSchemaResponse>) {
      super(init);
      (Object as any).assign(this, init);
    }
  }

  export class EditSchemaResponse extends ResponseBase<string> {
    public constructor(init?: Partial<EditSchemaResponse>) {
      super(init);
      (Object as any).assign(this, init);
    }
  }

  export class RestoreDeletedRecordResponse extends ResponseBase<boolean> {
    public constructor(init?: Partial<RestoreDeletedRecordResponse>) {
      super(init);
      (Object as any).assign(this, init);
    }
  }

  export class UpdateSchemaSettingsResponse extends ResponseBase<boolean> {
    public constructor(init?: Partial<UpdateSchemaSettingsResponse>) {
      super(init);
      (Object as any).assign(this, init);
    }
  }

  // @DataContract
  export class GetApiKeysResponse {
    // @DataMember(Order=1)
    public results: UserApiKey[];

    // @DataMember(Order=2)
    public meta: { [index: string]: string };

    // @DataMember(Order=3)

    public constructor(init?: Partial<GetApiKeysResponse>) {
      (Object as any).assign(this, init);
    }
  }

  // @DataContract
  export class RegenerateApiKeysResponse {
    // @DataMember(Order=1)
    public results: UserApiKey[];

    // @DataMember(Order=2)
    public meta: { [index: string]: string };

    // @DataMember(Order=3)

    public constructor(init?: Partial<RegenerateApiKeysResponse>) {
      (Object as any).assign(this, init);
    }
  }

  // @Route("/payments/discounts/{id}", "GET")
  export class GetPaymentDiscount
    extends CodeMashRequestBase
    implements IReturn<GetPaymentDiscountResponse> {
    public id: string;

    public constructor(init?: Partial<GetPaymentDiscount>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'GetPaymentDiscount';
    }
    public getMethod() {
      return 'GET';
    }
    public createResponse() {
      return new GetPaymentDiscountResponse();
    }
  }

  // @Route("/payments/discounts", "GET")
  export class GetPaymentDiscounts
    extends CodeMashListRequestBase
    implements IReturn<GetPaymentDiscountsResponse> {
    public cluster: string;

    public constructor(init?: Partial<GetPaymentDiscounts>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'GetPaymentDiscounts';
    }
    public getMethod() {
      return 'GET';
    }
    public createResponse() {
      return new GetPaymentDiscountsResponse();
    }
  }

  // @Route("/notifications/push/accounts", "POST")
  export class CreatePushAccount
    extends CodeMashRequestBase
    implements IReturn<CreatePushAccountResponse> {
    public model: PushAccountProperties;

    public constructor(init?: Partial<CreatePushAccount>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'CreatePushAccount';
    }
    public getMethod() {
      return 'POST';
    }
    public createResponse() {
      return new CreatePushAccountResponse();
    }
  }

  // @Route("/notifications/push/accounts/{Id}", "DELETE")
  export class DeletePushAccount
    extends CodeMashRequestBase
    implements IReturn<DeletePushAccountResponse> {
    public id: string;

    public constructor(init?: Partial<DeletePushAccount>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'DeletePushAccount';
    }
    public getMethod() {
      return 'DELETE';
    }
    public createResponse() {
      return new DeletePushAccountResponse();
    }
  }

  // @Route("/notifications/push/accounts/{id}", "GET")
  export class GetPushAccount
    extends CodeMashRequestBase
    implements IReturn<GetPushAccountResponse> {
    public id: string;

    public constructor(init?: Partial<GetPushAccount>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'GetPushAccount';
    }
    public getMethod() {
      return 'GET';
    }
    public createResponse() {
      return new GetPushAccountResponse();
    }
  }

  // @Route("/notifications/push/accounts", "GET")
  export class GetPushAccounts
    extends CodeMashRequestBase
    implements IReturn<GetPushAccountsResponse> {
    public id: string;

    public constructor(init?: Partial<GetPushAccounts>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'GetPushAccounts';
    }
    public getMethod() {
      return 'GET';
    }
    public createResponse() {
      return new GetPushAccountsResponse();
    }
  }

  // @Route("/notifications/push/accounts/{id}/default", "PUT")
  export class SetPushAccountAsDefault
    extends CodeMashRequestBase
    implements IReturn<SetPushAccountAsDefaultResponse> {
    public id: string;

    public constructor(init?: Partial<SetPushAccountAsDefault>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'SetPushAccountAsDefault';
    }
    public getMethod() {
      return 'PUT';
    }
    public createResponse() {
      return new SetPushAccountAsDefaultResponse();
    }
  }

  // @Route("/notifications/push/accounts/{id}", "PUT")
  export class UpdatePushAccount
    extends CodeMashRequestBase
    implements IReturn<UpdatePushAccountResponse> {
    public id: string;
    public model: PushAccountProperties;

    public constructor(init?: Partial<UpdatePushAccount>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'UpdatePushAccount';
    }
    public getMethod() {
      return 'PUT';
    }
    public createResponse() {
      return new UpdatePushAccountResponse();
    }
  }

  // @Route("/activities", "GET")
  export class GetActivities
    extends CodeMashListRequestBase
    implements IReturn<GetActivitiesResponse> {
    public constructor(init?: Partial<GetActivities>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'GetActivities';
    }
    public getMethod() {
      return 'GET';
    }
    public createResponse() {
      return new GetActivitiesResponse();
    }
  }

  // @Route("/activities/filters", "GET")
  export class GetActivityFilters
    implements IReturn<GetActivityFiltersResponse> {
    public constructor(init?: Partial<GetActivityFilters>) {
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'GetActivityFilters';
    }
    public getMethod() {
      return 'GET';
    }
    public createResponse() {
      return new GetActivityFiltersResponse();
    }
  }

  // @Route("/account/auth", "POST")
  export class AuthenticateToAccount
    implements IReturn<AuthenticateToAccountResponse> {
    public userName: string;
    public password: string;
    public accountId: string;

    public constructor(init?: Partial<AuthenticateToAccount>) {
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'AuthenticateToAccount';
    }
    public getMethod() {
      return 'POST';
    }
    public createResponse() {
      return new AuthenticateToAccountResponse();
    }
  }

  // @Route("/account/auth", "GET")
  export class CheckAuth implements IReturn<CheckAuthResponse> {
    public constructor(init?: Partial<CheckAuth>) {
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'CheckAuth';
    }
    public getMethod() {
      return 'GET';
    }
    public createResponse() {
      return new CheckAuthResponse();
    }
  }

  // @Route("/account/complete-register", "POST")
  export class CompleteRegisterAuthentication
    implements IReturn<CompleteRegisterAuthenticationResponse> {
    public sessionSecret: string;

    public constructor(init?: Partial<CompleteRegisterAuthentication>) {
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'CompleteRegisterAuthentication';
    }
    public getMethod() {
      return 'POST';
    }
    public createResponse() {
      return new CompleteRegisterAuthenticationResponse();
    }
  }

  // @Route("/account/try-auth", "POST")
  export class TryAuthenticate implements IReturn<TryAuthenticateResponse> {
    public userName: string;
    public password: string;

    public constructor(init?: Partial<TryAuthenticate>) {
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'TryAuthenticate';
    }
    public getMethod() {
      return 'POST';
    }
    public createResponse() {
      return new TryAuthenticateResponse();
    }
  }

  // @Route("/account/discounts", "DELETE")
  export class DeleteDiscount implements IReturn<DeleteDiscountResponse> {
    public code: string;

    public constructor(init?: Partial<DeleteDiscount>) {
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'DeleteDiscount';
    }
    public getMethod() {
      return 'DELETE';
    }
    public createResponse() {
      return new DeleteDiscountResponse();
    }
  }

  // @Route("/account/discounts", "GET")
  export class GetDiscounts implements IReturn<GetDiscountsResponse> {
    public constructor(init?: Partial<GetDiscounts>) {
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'GetDiscounts';
    }
    public getMethod() {
      return 'GET';
    }
    public createResponse() {
      return new GetDiscountsResponse();
    }
  }

  // @Route("/account/discounts", "POST")
  export class RedeemDiscount implements IReturn<RedeemDiscountResponse> {
    public code: string;

    public constructor(init?: Partial<RedeemDiscount>) {
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'RedeemDiscount';
    }
    public getMethod() {
      return 'POST';
    }
    public createResponse() {
      return new RedeemDiscountResponse();
    }
  }

  // @Route("/account/invoices/{invoiceId}/download", "GET")
  export class DownloadInvoice implements IReturn<HttpResult> {
    public invoiceId: string;

    public constructor(init?: Partial<DownloadInvoice>) {
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'DownloadInvoice';
    }
    public getMethod() {
      return 'GET';
    }
    public createResponse() {
      return new HttpResult();
    }
  }

  // @Route("/account/invoices/download/token", "GET")
  export class DownloadInvoiceFromUrl implements IReturn<HttpResult> {
    public token: string;

    public constructor(init?: Partial<DownloadInvoiceFromUrl>) {
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'DownloadInvoiceFromUrl';
    }
    public getMethod() {
      return 'GET';
    }
    public createResponse() {
      return new HttpResult();
    }
  }

  // @Route("/account/invoices", "GET")
  export class GetInvoices implements IReturn<GetInvoicesResponse> {
    public constructor(init?: Partial<GetInvoices>) {
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'GetInvoices';
    }
    public getMethod() {
      return 'GET';
    }
    public createResponse() {
      return new GetInvoicesResponse();
    }
  }

  // @Route("/account/usage", "GET")
  export class GetUsage implements IReturn<GetUsageResponse> {
    public constructor(init?: Partial<GetUsage>) {
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'GetUsage';
    }
    public getMethod() {
      return 'GET';
    }
    public createResponse() {
      return new GetUsageResponse();
    }
  }

  /**
   * Creates a new CodeMash account
   */
  // @Route("/account", "POST")
  // @Api(BodyParameter=2, Description="Creates a new CodeMash account")
  export class CreateAccount implements IReturn<CreateAccountResponse> {
    /**
     * First name of the account holder
     */
    // @ApiMember(DataType="string", Description="First name of the account holder", Name="FirstName", ParameterType="form")
    public firstName: string;

    /**
     * Last name of account holder
     */
    // @ApiMember(DataType="string", Description="Last name of account holder", Name="LastName", ParameterType="form")
    public lastName: string;

    /**
     * Real email of account holder
     */
    // @ApiMember(DataType="string", Description="Real email of account holder", IsRequired=true, Name="Email", ParameterType="form")
    public email: string;

    /**
     * Set password for a new account
     */
    // @ApiMember(DataType="string", Description="Set password for a new account", Format="password", IsRequired=true, Name="Password", ParameterType="form")
    public password: string;

    public constructor(init?: Partial<CreateAccount>) {
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'CreateAccount';
    }
    public getMethod() {
      return 'POST';
    }
    public createResponse() {
      return new CreateAccountResponse();
    }
  }

  // @Route("/account/customer/payment", "GET")
  export class GetCustomerPayment
    implements IReturn<GetCustomerPaymentResponse> {
    public constructor(init?: Partial<GetCustomerPayment>) {
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'GetCustomerPayment';
    }
    public getMethod() {
      return 'GET';
    }
    public createResponse() {
      return new GetCustomerPaymentResponse();
    }
  }

  // @Route("/account/customer/payment", "PUT")
  export class UpdateCustomerPayment
    implements IReturn<UpdateCustomerPaymentResponse> {
    public setupIntentId: string;
    public clientSecret: string;

    public constructor(init?: Partial<UpdateCustomerPayment>) {
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'UpdateCustomerPayment';
    }
    public getMethod() {
      return 'PUT';
    }
    public createResponse() {
      return new UpdateCustomerPaymentResponse();
    }
  }

  // @Route("/account/status", "GET")
  export class GetAccountStatus implements IReturn<GetAccountStatusResponse> {
    public constructor(init?: Partial<GetAccountStatus>) {
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'GetAccountStatus';
    }
    public getMethod() {
      return 'GET';
    }
    public createResponse() {
      return new GetAccountStatusResponse();
    }
  }

  // @Route("/regions", "GET")
  export class GetProjectRegions implements IReturn<GetProjectRegionsResponse> {
    public constructor(init?: Partial<GetProjectRegions>) {
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'GetProjectRegions';
    }
    public getMethod() {
      return 'GET';
    }
    public createResponse() {
      return new GetProjectRegionsResponse();
    }
  }

  // @Route("/account/permissions", "GET")
  export class GetAccountAvailablePermissions
    extends RequestBase
    implements IReturn<GetAccountAvailablePermissionsResponse> {
    public constructor(init?: Partial<GetAccountAvailablePermissions>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'GetAccountAvailablePermissions';
    }
    public getMethod() {
      return 'GET';
    }
    public createResponse() {
      return new GetAccountAvailablePermissionsResponse();
    }
  }

  // @Route("/account/users/permissions", "GET")
  export class GetUserPermissions
    extends RequestBase
    implements IReturn<GetUserPermissionsResponse> {
    public constructor(init?: Partial<GetUserPermissions>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'GetUserPermissions';
    }
    public getMethod() {
      return 'GET';
    }
    public createResponse() {
      return new GetUserPermissionsResponse();
    }
  }

  // @Route("/projects/{projectId}/billing", "GET")
  export class GetProjectBillingSettings
    extends CodeMashRequestBase
    implements IReturn<GetProjectBillingSettingsResponse> {
    public constructor(init?: Partial<GetProjectBillingSettings>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'GetProjectBillingSettings';
    }
    public getMethod() {
      return 'GET';
    }
    public createResponse() {
      return new GetProjectBillingSettingsResponse();
    }
  }

  // @Route("/projects/{projectId}/billing/charge", "PUT")
  export class UpdateProjectBillingChargeSettings
    extends CodeMashRequestBase
    implements IReturn<UpdateProjectBillingChargeSettingsResponse> {
    public billingType: CustomerBillingType;
    public marginType: CustomerMarginType;
    public marginPercent: number;
    public fixedPrice: number;
    public chargeCustomer: boolean;

    public constructor(init?: Partial<UpdateProjectBillingChargeSettings>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'UpdateProjectBillingChargeSettings';
    }
    public getMethod() {
      return 'PUT';
    }
    public createResponse() {
      return new UpdateProjectBillingChargeSettingsResponse();
    }
  }

  // @Route("/projects/{projectId}/billing/details", "PUT")
  export class UpdateProjectBillingDetailsSettings
    extends CodeMashRequestBase
    implements IReturn<UpdateProjectBillingDetailsSettingsResponse> {
    public type: BillingType;
    public firstName: string;
    public lastName: string;
    public organization: string;
    public vat: string;
    public address: string;
    public zip: string;
    public country: string;
    public city: string;
    public phone: string;
    public billingEmail: string;

    public constructor(init?: Partial<UpdateProjectBillingDetailsSettings>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'UpdateProjectBillingDetailsSettings';
    }
    public getMethod() {
      return 'PUT';
    }
    public createResponse() {
      return new UpdateProjectBillingDetailsSettingsResponse();
    }
  }

  // @Route("/projects/{projectId}/billing/invoice", "PUT")
  export class UpdateProjectBillingInvoiceSettings
    extends CodeMashRequestBase
    implements IReturn<UpdateProjectBillingInvoiceSettingsResponse> {
    public numberPrefix: string;

    public constructor(init?: Partial<UpdateProjectBillingInvoiceSettings>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'UpdateProjectBillingInvoiceSettings';
    }
    public getMethod() {
      return 'PUT';
    }
    public createResponse() {
      return new UpdateProjectBillingInvoiceSettingsResponse();
    }
  }

  // @Route("/projects/{projectId}/billing/status", "PUT")
  export class UpdateProjectBillingStatus
    extends CodeMashRequestBase
    implements IReturn<UpdateProjectBillingStatusResponse> {
    public constructor(init?: Partial<UpdateProjectBillingStatus>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'UpdateProjectBillingStatus';
    }
    public getMethod() {
      return 'PUT';
    }
    public createResponse() {
      return new UpdateProjectBillingStatusResponse();
    }
  }

  // @Route("/projects", "POST")
  export class CreateProject implements IReturn<CreateProjectResponse> {
    public projectName: string;
    public zoneName: string;
    public description: string;

    public constructor(init?: Partial<CreateProject>) {
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'CreateProject';
    }
    public getMethod() {
      return 'POST';
    }
    public createResponse() {
      return new CreateProjectResponse();
    }
  }

  // @Route("/projects/{id}", "DELETE")
  export class DeleteProject implements IReturn<DeleteProjectResponse> {
    public id: string;
    public confirmed: boolean;

    public constructor(init?: Partial<DeleteProject>) {
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'DeleteProject';
    }
    public getMethod() {
      return 'DELETE';
    }
    public createResponse() {
      return new DeleteProjectResponse();
    }
  }

  // @Route("/projects/{projectId}", "GET")
  export class GetProject
    extends CodeMashRequestBase
    implements IReturn<GetProjectResponse> {
    public constructor(init?: Partial<GetProject>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'GetProject';
    }
    public getMethod() {
      return 'GET';
    }
    public createResponse() {
      return new GetProjectResponse();
    }
  }

  // @Route("/projects/{projectId}/languages", "GET")
  export class GetProjectLanguages
    extends CodeMashRequestBase
    implements IReturn<GetProjectLanguagesResponse> {
    public constructor(init?: Partial<GetProjectLanguages>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'GetProjectLanguages';
    }
    public getMethod() {
      return 'GET';
    }
    public createResponse() {
      return new GetProjectLanguagesResponse();
    }
  }

  // @Route("/projects/{projectId}/modules", "GET")
  export class GetProjectModuleData
    extends CodeMashRequestBase
    implements IReturn<GetProjectModuleDataResponse> {
    public constructor(init?: Partial<GetProjectModuleData>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'GetProjectModuleData';
    }
    public getMethod() {
      return 'GET';
    }
    public createResponse() {
      return new GetProjectModuleDataResponse();
    }
  }

  // @Route("/projects", "GET")
  export class GetProjects
    extends RequestBase
    implements IReturn<GetProjectsResponse> {
    public constructor(init?: Partial<GetProjects>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'GetProjects';
    }
    public getMethod() {
      return 'GET';
    }
    public createResponse() {
      return new GetProjectsResponse();
    }
  }

  // @Route("/projects/{projectId}/modules/refresh", "POST")
  export class RefreshProjectModuleData
    extends CodeMashRequestBase
    implements IReturn<RefreshProjectModuleDataResponse> {
    public module: Modules;

    public constructor(init?: Partial<RefreshProjectModuleData>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'RefreshProjectModuleData';
    }
    public getMethod() {
      return 'POST';
    }
    public createResponse() {
      return new RefreshProjectModuleDataResponse();
    }
  }

  // @Route("/project/logo", "DELETE")
  export class DeleteProjectLogo
    extends CodeMashRequestBase
    implements IReturn<DeleteProjectLogoResponse> {
    public constructor(init?: Partial<DeleteProjectLogo>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'DeleteProjectLogo';
    }
    public getMethod() {
      return 'DELETE';
    }
    public createResponse() {
      return new DeleteProjectLogoResponse();
    }
  }

  // @Route("/project/logo", "GET")
  export class GetProjectLogo
    extends CodeMashRequestBase
    implements IReturn<HttpResult> {
    public asText: boolean;

    public constructor(init?: Partial<GetProjectLogo>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'GetProjectLogo';
    }
    public getMethod() {
      return 'GET';
    }
    public createResponse() {
      return new HttpResult();
    }
  }

  // @Route("/project/logo", "PUT")
  export class UpdateProjectLogo
    extends CodeMashRequestBase
    implements IReturn<UpdateProjectLogoResponse> {
    public constructor(init?: Partial<UpdateProjectLogo>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'UpdateProjectLogo';
    }
    public getMethod() {
      return 'PUT';
    }
    public createResponse() {
      return new UpdateProjectLogoResponse();
    }
  }

  // @Route("/project/key/regenerate", "POST")
  export class RegenerateProjectToken
    extends CodeMashRequestBase
    implements IReturn<RegenerateProjectTokenResponse> {
    public constructor(init?: Partial<RegenerateProjectToken>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'RegenerateProjectToken';
    }
    public getMethod() {
      return 'POST';
    }
    public createResponse() {
      return new RegenerateProjectTokenResponse();
    }
  }

  // @Route("/project/language/default", "POST")
  export class UpdateDefaultProjectLanguage
    extends CodeMashRequestBase
    implements IReturn<UpdateDefaultProjectLanguageResponse> {
    public language: string;

    public constructor(init?: Partial<UpdateDefaultProjectLanguage>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'UpdateDefaultProjectLanguage';
    }
    public getMethod() {
      return 'POST';
    }
    public createResponse() {
      return new UpdateDefaultProjectLanguageResponse();
    }
  }

  // @Route("/project/timezone", "POST")
  export class UpdateDefaultProjectTimeZone
    extends CodeMashRequestBase
    implements IReturn<UpdateDefaultProjectTimeZoneResponse> {
    public timeZone: string;

    public constructor(init?: Partial<UpdateDefaultProjectTimeZone>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'UpdateDefaultProjectTimeZone';
    }
    public getMethod() {
      return 'POST';
    }
    public createResponse() {
      return new UpdateDefaultProjectTimeZoneResponse();
    }
  }

  // @Route("/projects/{projectId}/origins", "PUT")
  export class UpdateProjectAllowedOrigins
    extends CodeMashRequestBase
    implements IReturn<UpdateProjectAllowedOriginsResponse> {
    public origins: string[];

    public constructor(init?: Partial<UpdateProjectAllowedOrigins>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'UpdateProjectAllowedOrigins';
    }
    public getMethod() {
      return 'PUT';
    }
    public createResponse() {
      return new UpdateProjectAllowedOriginsResponse();
    }
  }

  // @Route("/projects/{projectId}/description", "PUT")
  export class UpdateProjectDescription
    extends CodeMashRequestBase
    implements IReturn<UpdateProjectDescriptionResponse> {
    public description: string;

    public constructor(init?: Partial<UpdateProjectDescription>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'UpdateProjectDescription';
    }
    public getMethod() {
      return 'PUT';
    }
    public createResponse() {
      return new UpdateProjectDescriptionResponse();
    }
  }

  // @Route("/project/languages", "POST")
  export class UpdateProjectLanguages
    extends CodeMashRequestBase
    implements IReturn<UpdateProjectLanguagesResponse> {
    public languages: string[];

    public constructor(init?: Partial<UpdateProjectLanguages>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'UpdateProjectLanguages';
    }
    public getMethod() {
      return 'POST';
    }
    public createResponse() {
      return new UpdateProjectLanguagesResponse();
    }
  }

  // @Route("/projects/change-name", "PUT")
  export class UpdateProjectName
    extends CodeMashRequestBase
    implements IReturn<UpdateProjectNameResponse> {
    public name: string;

    public constructor(init?: Partial<UpdateProjectName>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'UpdateProjectName';
    }
    public getMethod() {
      return 'PUT';
    }
    public createResponse() {
      return new UpdateProjectNameResponse();
    }
  }

  // @Route("/projects/{projectId}/url", "PUT")
  export class UpdateProjectUrl
    extends CodeMashRequestBase
    implements IReturn<UpdateProjectUrlResponse> {
    public url: string;

    public constructor(init?: Partial<UpdateProjectUrl>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'UpdateProjectUrl';
    }
    public getMethod() {
      return 'PUT';
    }
    public createResponse() {
      return new UpdateProjectUrlResponse();
    }
  }

  // @Route("/project/user-zones", "POST")
  export class UpdateProjectUserZones
    extends CodeMashRequestBase
    implements IReturn<UpdateProjectUserZonesResponse> {
    public zones: string[];

    public constructor(init?: Partial<UpdateProjectUserZones>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'UpdateProjectUserZones';
    }
    public getMethod() {
      return 'POST';
    }
    public createResponse() {
      return new UpdateProjectUserZonesResponse();
    }
  }

  // @Route("/project/zone", "POST")
  export class UpdateProjectZone
    extends CodeMashRequestBase
    implements IReturn<UpdateProjectZoneResponse> {
    public zoneName: string;

    public constructor(init?: Partial<UpdateProjectZone>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'UpdateProjectZone';
    }
    public getMethod() {
      return 'POST';
    }
    public createResponse() {
      return new UpdateProjectZoneResponse();
    }
  }

  // @Route("/project/tokens", "POST")
  export class CreateProjectToken
    extends CodeMashRequestBase
    implements IReturn<CreateProjectTokenResponse> {
    public key: string;
    public value: string;

    public constructor(init?: Partial<CreateProjectToken>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'CreateProjectToken';
    }
    public getMethod() {
      return 'POST';
    }
    public createResponse() {
      return new CreateProjectTokenResponse();
    }
  }

  // @Route("/project/tokens", "DELETE")
  export class DeleteProjectToken
    extends CodeMashRequestBase
    implements IReturn<DeleteProjectTokenResponse> {
    public key: string;

    public constructor(init?: Partial<DeleteProjectToken>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'DeleteProjectToken';
    }
    public getMethod() {
      return 'DELETE';
    }
    public createResponse() {
      return new DeleteProjectTokenResponse();
    }
  }

  // @Route("/projects/{projectId}/tokens", "GET")
  export class GetProjectTokens
    extends CodeMashRequestBase
    implements IReturn<GetProjectTokensResponse> {
    public constructor(init?: Partial<GetProjectTokens>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'GetProjectTokens';
    }
    public getMethod() {
      return 'GET';
    }
    public createResponse() {
      return new GetProjectTokensResponse();
    }
  }

  // @Route("/project/tokens", "PUT")
  export class UpdateProjectToken
    extends CodeMashRequestBase
    implements IReturn<UpdateProjectTokenResponse> {
    public key: string;
    public value: string;

    public constructor(init?: Partial<UpdateProjectToken>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'UpdateProjectToken';
    }
    public getMethod() {
      return 'PUT';
    }
    public createResponse() {
      return new UpdateProjectTokenResponse();
    }
  }

  // @Route("/projects/{projectId}/widgets", "PUT")
  export class UpdateProjectWidget
    extends CodeMashRequestBase
    implements IReturn<UpdateProjectWidgetResponse> {
    public type: string;
    public module: Modules;

    public constructor(init?: Partial<UpdateProjectWidget>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'UpdateProjectWidget';
    }
    public getMethod() {
      return 'PUT';
    }
    public createResponse() {
      return new UpdateProjectWidgetResponse();
    }
  }

  // @Route("/account/verify/resend", "POST")
  export class ResendVerificationToken
    implements IReturn<ResendVerificationTokenResponse> {
    public userId?: string;

    public constructor(init?: Partial<ResendVerificationToken>) {
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'ResendVerificationToken';
    }
    public getMethod() {
      return 'POST';
    }
    public createResponse() {
      return new ResendVerificationTokenResponse();
    }
  }

  // @Route("/account/users/password/reset/token", "GET")
  export class CheckAccountPasswordReset
    implements IReturn<CheckAccountPasswordResetResponse> {
    public token: string;
    public includeAccounts: boolean;

    public constructor(init?: Partial<CheckAccountPasswordReset>) {
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'CheckAccountPasswordReset';
    }
    public getMethod() {
      return 'GET';
    }
    public createResponse() {
      return new CheckAccountPasswordResetResponse();
    }
  }

  // @Route("/account/users/password/reset/token", "POST")
  export class CreateAccountPasswordReset
    implements IReturn<CreateAccountPasswordResetResponse> {
    public email: string;

    public constructor(init?: Partial<CreateAccountPasswordReset>) {
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'CreateAccountPasswordReset';
    }
    public getMethod() {
      return 'POST';
    }
    public createResponse() {
      return new CreateAccountPasswordResetResponse();
    }
  }

  // @Route("/account/users/password/reset", "POST")
  export class ResetAccountPassword
    implements IReturn<ResetAccountPasswordResponse> {
    public token: string;
    public password: string;
    public repeatedPassword: string;
    public accountId: string;

    public constructor(init?: Partial<ResetAccountPassword>) {
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'ResetAccountPassword';
    }
    public getMethod() {
      return 'POST';
    }
    public createResponse() {
      return new ResetAccountPasswordResponse();
    }
  }

  // @Route("/account/plan", "DELETE")
  export class CancelSubscription
    implements IReturn<CancelSubscriptionResponse> {
    public constructor(init?: Partial<CancelSubscription>) {
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'CancelSubscription';
    }
    public getMethod() {
      return 'DELETE';
    }
    public createResponse() {
      return new CancelSubscriptionResponse();
    }
  }

  // @Route("/account/card/intent", "GET")
  export class CreateCardIntent implements IReturn<CreateCardIntentResponse> {
    public constructor(init?: Partial<CreateCardIntent>) {
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'CreateCardIntent';
    }
    public getMethod() {
      return 'GET';
    }
    public createResponse() {
      return new CreateCardIntentResponse();
    }
  }

  // @Route("/account/card", "PUT")
  export class UpdateCard implements IReturn<UpdateCardResponse> {
    public setupIntentId: string;
    public clientSecret: string;

    public constructor(init?: Partial<UpdateCard>) {
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'UpdateCard';
    }
    public getMethod() {
      return 'PUT';
    }
    public createResponse() {
      return new UpdateCardResponse();
    }
  }

  // @Route("/account/plan/check", "GET")
  export class CheckIfCanChangeSubscription
    implements IReturn<CheckIfCanChangeSubscriptionResponse> {
    public plan: SubscriptionPlan;

    public constructor(init?: Partial<CheckIfCanChangeSubscription>) {
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'CheckIfCanChangeSubscription';
    }
    public getMethod() {
      return 'GET';
    }
    public createResponse() {
      return new CheckIfCanChangeSubscriptionResponse();
    }
  }

  // @Route("/account/plan", "GET")
  export class GetSubscription implements IReturn<GetSubscriptionResponse> {
    public constructor(init?: Partial<GetSubscription>) {
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'GetSubscription';
    }
    public getMethod() {
      return 'GET';
    }
    public createResponse() {
      return new GetSubscriptionResponse();
    }
  }

  // @Route("/account/unpaid-invoices/pay", "POST")
  export class PayForUnpaidInvoices
    implements IReturn<PayForUnpaidInvoicesResponse> {
    public constructor(init?: Partial<PayForUnpaidInvoices>) {
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'PayForUnpaidInvoices';
    }
    public getMethod() {
      return 'POST';
    }
    public createResponse() {
      return new PayForUnpaidInvoicesResponse();
    }
  }

  // @Route("/account/plan/renew", "POST")
  export class RenewCanceledSubscription
    implements IReturn<RenewCanceledSubscriptionResponse> {
    public constructor(init?: Partial<RenewCanceledSubscription>) {
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'RenewCanceledSubscription';
    }
    public getMethod() {
      return 'POST';
    }
    public createResponse() {
      return new RenewCanceledSubscriptionResponse();
    }
  }

  // @Route("/account/billing", "PUT")
  export class UpdateBillingDetails
    implements IReturn<UpdateBillingDetailsResponse> {
    public type: BillingType;
    public firstName: string;
    public lastName: string;
    public organization: string;
    public vat: string;
    public address: string;
    public zip: string;
    public country: string;
    public city: string;
    public phone: string;
    public iban: string;

    public constructor(init?: Partial<UpdateBillingDetails>) {
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'UpdateBillingDetails';
    }
    public getMethod() {
      return 'PUT';
    }
    public createResponse() {
      return new UpdateBillingDetailsResponse();
    }
  }

  // @Route("/account/plan", "PUT")
  export class UpdateSubscription
    implements IReturn<UpdateSubscriptionResponse> {
    public plan: SubscriptionPlan;
    public setupIntentId: string;
    public clientSecret: string;
    public discountCode: string;

    public constructor(init?: Partial<UpdateSubscription>) {
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'UpdateSubscription';
    }
    public getMethod() {
      return 'PUT';
    }
    public createResponse() {
      return new UpdateSubscriptionResponse();
    }
  }

  // @Route("/account/users/{Id}/block", "PUT")
  export class BlockUser
    extends RequestBase
    implements IReturn<BlockUserResponse> {
    public id: string;

    public constructor(init?: Partial<BlockUser>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'BlockUser';
    }
    public getMethod() {
      return 'PUT';
    }
    public createResponse() {
      return new BlockUserResponse();
    }
  }

  // @Route("/account/users/{Id}", "DELETE")
  export class DeleteUser
    extends RequestBase
    implements IReturn<DeleteUserResponse> {
    public id: string;

    public constructor(init?: Partial<DeleteUser>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'DeleteUser';
    }
    public getMethod() {
      return 'DELETE';
    }
    public createResponse() {
      return new DeleteUserResponse();
    }
  }

  // @Route("/account/users/{Id}", "GET")
  export class GetUser extends RequestBase implements IReturn<GetUserResponse> {
    public id: string;

    public constructor(init?: Partial<GetUser>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'GetUser';
    }
    public getMethod() {
      return 'GET';
    }
    public createResponse() {
      return new GetUserResponse();
    }
  }

  // @Route("/account/users", "GET")
  export class GetUsers
    extends CodeMashListRequestBase
    implements IReturn<GetUsersResponse> {
    public constructor(init?: Partial<GetUsers>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'GetUsers';
    }
    public getMethod() {
      return 'GET';
    }
    public createResponse() {
      return new GetUsersResponse();
    }
  }

  // @Route("/account/users/invite", "POST")
  export class InviteUser implements IReturn<InviteUserResponse> {
    public displayName: string;
    public email: string;
    public firstName: string;
    public lastName: string;
    public permissions: string[];
    public allowedProjects: string[];

    public constructor(init?: Partial<InviteUser>) {
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'InviteUser';
    }
    public getMethod() {
      return 'POST';
    }
    public createResponse() {
      return new InviteUserResponse();
    }
  }

  // @Route("/account/profile", "GET")
  export class GetProfile
    extends RequestBase
    implements IReturn<GetProfileResponse> {
    public constructor(init?: Partial<GetProfile>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'GetProfile';
    }
    public getMethod() {
      return 'GET';
    }
    public createResponse() {
      return new GetProfileResponse();
    }
  }

  // @Route("/account/profile/password", "PUT")
  export class UpdatePassword
    extends RequestBase
    implements IReturn<UpdatePasswordResponse> {
    public currentPassword: string;
    public password: string;
    public repeatedPassword: string;

    public constructor(init?: Partial<UpdatePassword>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'UpdatePassword';
    }
    public getMethod() {
      return 'PUT';
    }
    public createResponse() {
      return new UpdatePasswordResponse();
    }
  }

  // @Route("/account/profile", "PUT")
  export class UpdateProfile
    extends CodeMashRequestBase
    implements IReturn<UpdateProfileResponse> {
    public displayName: string;
    public email: string;
    public firstName: string;
    public lastName: string;
    public country: string;
    public billingEmail: string;

    public constructor(init?: Partial<UpdateProfile>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'UpdateProfile';
    }
    public getMethod() {
      return 'PUT';
    }
    public createResponse() {
      return new UpdateProfileResponse();
    }
  }

  // @Route("/account/users/{id}/invitation/resend", "POST")
  export class ResendAccountUserInvitation
    implements IReturn<ResendAccountUserInvitationResponse> {
    public id: string;

    public constructor(init?: Partial<ResendAccountUserInvitation>) {
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'ResendAccountUserInvitation';
    }
    public getMethod() {
      return 'POST';
    }
    public createResponse() {
      return new ResendAccountUserInvitationResponse();
    }
  }

  // @Route("/account/users/{Id}/unblock", "PUT")
  export class UnblockUser
    extends RequestBase
    implements IReturn<UnblockUserResponse> {
    public id: string;

    public constructor(init?: Partial<UnblockUser>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'UnblockUser';
    }
    public getMethod() {
      return 'PUT';
    }
    public createResponse() {
      return new UnblockUserResponse();
    }
  }

  // @Route("/account/users/{id}", "PUT")
  export class UpdateUser
    extends CodeMashRequestBase
    implements IReturn<UpdateUserResponse> {
    public id: string;
    public displayName: string;
    public email: string;
    public firstName: string;
    public lastName: string;
    public permissions: string[];
    public allowedProjects: string[];

    public constructor(init?: Partial<UpdateUser>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'UpdateUser';
    }
    public getMethod() {
      return 'PUT';
    }
    public createResponse() {
      return new UpdateUserResponse();
    }
  }

  // @Route("/account/users/invitation/token", "GET")
  export class CheckAccountUserInvitationToken
    implements IReturn<CheckAccountUserInvitationTokenResponse> {
    public token: string;
    public includeAccountDetails: boolean;

    public constructor(init?: Partial<CheckAccountUserInvitationToken>) {
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'CheckAccountUserInvitationToken';
    }
    public getMethod() {
      return 'GET';
    }
    public createResponse() {
      return new CheckAccountUserInvitationTokenResponse();
    }
  }

  // @Route("/account/verify", "POST")
  export class VerifyAccount implements IReturn<VerifyAccountResponse> {
    public token: string;

    public constructor(init?: Partial<VerifyAccount>) {
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'VerifyAccount';
    }
    public getMethod() {
      return 'POST';
    }
    public createResponse() {
      return new VerifyAccountResponse();
    }
  }

  // @Route("/account/users/verify", "POST")
  export class VerifyAccountUser implements IReturn<VerifyAccountUserResponse> {
    public token: string;
    public password: string;
    public repeatedPassword: string;

    public constructor(init?: Partial<VerifyAccountUser>) {
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'VerifyAccountUser';
    }
    public getMethod() {
      return 'POST';
    }
    public createResponse() {
      return new VerifyAccountUserResponse();
    }
  }

  // @Route("/admin/serverless/system/functions/{provider}/reload", "GET")
  export class ReloadSystemFunctions
    implements IReturn<ReloadSystemFunctionsResponse>, IRequestBase {
    public provider: SystemFunctionProvider;

    public constructor(init?: Partial<ReloadSystemFunctions>) {
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'ReloadSystemFunctions';
    }
    public getMethod() {
      return 'GET';
    }
    public createResponse() {
      return new ReloadSystemFunctionsResponse();
    }
  }

  // @Route("/db/aggregates", "POST")
  export class CreateSchemaAggregate
    extends CodeMashRequestBase
    implements IReturn<CreateSchemaAggregateResponse> {
    public schemaId: string;
    public displayName: string;
    public description: string;
    public query: string;

    public constructor(init?: Partial<CreateSchemaAggregate>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'CreateSchemaAggregate';
    }
    public getMethod() {
      return 'POST';
    }
    public createResponse() {
      return new CreateSchemaAggregateResponse();
    }
  }

  // @Route("/db/aggregates/{id}", "DELETE")
  export class DeleteSchemaAggregate
    extends CodeMashRequestBase
    implements IReturn<DeleteSchemaAggregateResponse> {
    public id: string;

    public constructor(init?: Partial<DeleteSchemaAggregate>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'DeleteSchemaAggregate';
    }
    public getMethod() {
      return 'DELETE';
    }
    public createResponse() {
      return new DeleteSchemaAggregateResponse();
    }
  }

  // @Route("/db/aggregates/{id}", "GET")
  export class GetSchemaAggregate
    extends CodeMashRequestBase
    implements IReturn<GetSchemaAggregateResponse> {
    public id: string;

    public constructor(init?: Partial<GetSchemaAggregate>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'GetSchemaAggregate';
    }
    public getMethod() {
      return 'GET';
    }
    public createResponse() {
      return new GetSchemaAggregateResponse();
    }
  }

  // @Route("/db/aggregates", "GET")
  export class GetSchemaAggregates
    extends CodeMashRequestBase
    implements IReturn<GetSchemaAggregatesResponse> {
    public constructor(init?: Partial<GetSchemaAggregates>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'GetSchemaAggregates';
    }
    public getMethod() {
      return 'GET';
    }
    public createResponse() {
      return new GetSchemaAggregatesResponse();
    }
  }

  // @Route("/db/aggregates/test", "GET")
  export class TestAggregate
    extends CodeMashDbRequestBase
    implements IReturn<TestAggregateResponse> {
    public pipeline: string;
    public tokens: { [index: string]: string };

    public constructor(init?: Partial<TestAggregate>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'TestAggregate';
    }
    public getMethod() {
      return 'GET';
    }
    public createResponse() {
      return new TestAggregateResponse();
    }
  }

  // @Route("/db/aggregates/{id}", "PUT")
  export class UpdateSchemaAggregate
    extends CodeMashRequestBase
    implements IReturn<UpdateSchemaAggregateResponse> {
    public id: string;
    public displayName: string;
    public description: string;
    public query: string;

    public constructor(init?: Partial<UpdateSchemaAggregate>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'UpdateSchemaAggregate';
    }
    public getMethod() {
      return 'PUT';
    }
    public createResponse() {
      return new UpdateSchemaAggregateResponse();
    }
  }

  // @Route("/db/backups", "POST")
  export class CreateBackup
    extends CodeMashRequestBase
    implements IReturn<CreateBackupResponse> {
    public cluster?: string;

    public constructor(init?: Partial<CreateBackup>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'CreateBackup';
    }
    public getMethod() {
      return 'POST';
    }
    public createResponse() {
      return new CreateBackupResponse();
    }
  }

  // @Route("/db/backups/{id}", "DELETE")
  export class DeleteBackup
    extends CodeMashRequestBase
    implements IReturn<DeleteBackupResponse> {
    public id: string;

    public constructor(init?: Partial<DeleteBackup>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'DeleteBackup';
    }
    public getMethod() {
      return 'DELETE';
    }
    public createResponse() {
      return new DeleteBackupResponse();
    }
  }

  // @Route("/db/backups/disable", "POST")
  export class DisableBackups
    extends CodeMashRequestBase
    implements IReturn<DisableBackupsResponse> {
    public cluster?: string;

    public constructor(init?: Partial<DisableBackups>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'DisableBackups';
    }
    public getMethod() {
      return 'POST';
    }
    public createResponse() {
      return new DisableBackupsResponse();
    }
  }

  export class DownloadBackup
    extends CodeMashRequestBase
    implements IReturn<HttpResult> {
    public id: string;

    public constructor(init?: Partial<DownloadBackup>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'DownloadBackup';
    }
    public getMethod() {
      return 'POST';
    }
    public createResponse() {
      return new HttpResult();
    }
  }

  // @Route("/db/backups/enable", "POST")
  export class EnableBackups
    extends CodeMashRequestBase
    implements IReturn<EnableBackupsResponse> {
    public cluster?: string;
    public hour: number;
    public copies: number;

    public constructor(init?: Partial<EnableBackups>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'EnableBackups';
    }
    public getMethod() {
      return 'POST';
    }
    public createResponse() {
      return new EnableBackupsResponse();
    }
  }

  export class GetBackups
    extends CodeMashListRequestBase
    implements IReturn<GetBackupsResponse> {
    public clusterId?: string;

    public constructor(init?: Partial<GetBackups>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'GetBackups';
    }
    public getMethod() {
      return 'POST';
    }
    public createResponse() {
      return new GetBackupsResponse();
    }
  }

  // @Route("/db/backups/settings", "GET")
  export class GetBackupSettings
    extends CodeMashRequestBase
    implements IReturn<GetBackupSettingsResponse> {
    public constructor(init?: Partial<GetBackupSettings>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'GetBackupSettings';
    }
    public getMethod() {
      return 'GET';
    }
    public createResponse() {
      return new GetBackupSettingsResponse();
    }
  }

  // @Route("/db/backups/{id}/rebuild", "GET")
  export class RebuildBackup
    extends CodeMashRequestBase
    implements IReturn<RebuildBackupResponse> {
    public id: string;

    public constructor(init?: Partial<RebuildBackup>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'RebuildBackup';
    }
    public getMethod() {
      return 'GET';
    }
    public createResponse() {
      return new RebuildBackupResponse();
    }
  }

  // @Route("/db/backups/settings", "PUT")
  export class UpdateBackupSettings
    extends CodeMashRequestBase
    implements IReturn<UpdateBackupSettingsResponse> {
    public cluster?: string;
    public hour: number;
    public copies: number;

    public constructor(init?: Partial<UpdateBackupSettings>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'UpdateBackupSettings';
    }
    public getMethod() {
      return 'PUT';
    }
    public createResponse() {
      return new UpdateBackupSettingsResponse();
    }
  }

  // @Route("/db/clusters/{id}/upgrade", "PUT")
  export class AskCodeMashForClusterUpdate
    extends CodeMashRequestBase
    implements IReturn<AskCodeMashForClusterUpdateResponse> {
    public id: string;
    public cluster: string;
    public storageSize: number;
    public databaseRegion: string;
    public autoScaling: boolean;
    public enableMultiRegion: boolean;
    public multiRegions: string[];
    public message: string;
    public updateOn?: string;

    public constructor(init?: Partial<AskCodeMashForClusterUpdate>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'AskCodeMashForClusterUpdate';
    }
    public getMethod() {
      return 'PUT';
    }
    public createResponse() {
      return new AskCodeMashForClusterUpdateResponse();
    }
  }

  // @Route("/db/clusters/get-free", "POST")
  export class AskCodeMashForFreeCluster
    extends CodeMashRequestBase
    implements IReturn<AskCodeMashForFreeClusterResponse> {
    public constructor(init?: Partial<AskCodeMashForFreeCluster>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'AskCodeMashForFreeCluster';
    }
    public getMethod() {
      return 'POST';
    }
    public createResponse() {
      return new AskCodeMashForFreeClusterResponse();
    }
  }

  // @Route("/db/clusters", "POST")
  export class CreateCluster
    extends CodeMashRequestBase
    implements IReturn<CreateClusterResponse> {
    public provider: string;
    public displayName: string;
    public storageSize: number;
    public databaseRegion: string;
    public cluster: string;
    public autoScaling: boolean;
    public enableMultiRegion: boolean;
    public multiRegions: string[];
    public atlasUserName: string;
    public atlasPassword: string;
    public atlasClusterId: string;
    public atlasClusterName: string;

    public constructor(init?: Partial<CreateCluster>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'CreateCluster';
    }
    public getMethod() {
      return 'POST';
    }
    public createResponse() {
      return new CreateClusterResponse();
    }
  }

  // @Route("/db/clusters/{id}", "DELETE")
  export class DeleteCluster
    extends CodeMashRequestBase
    implements IReturn<DeleteClusterResponse> {
    public id: string;

    public constructor(init?: Partial<DeleteCluster>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'DeleteCluster';
    }
    public getMethod() {
      return 'DELETE';
    }
    public createResponse() {
      return new DeleteClusterResponse();
    }
  }

  // @Route("/db/clusters/features-test", "POST")
  export class TestDatabaseAccountFeatures
    extends CodeMashRequestBase
    implements IReturn<TestDatabaseAccountFeaturesResponse> {
    public provider: string;
    public atlasUserName: string;
    public atlasPassword: string;
    public atlasClusterId: string;
    public atlasClusterName: string;

    public constructor(init?: Partial<TestDatabaseAccountFeatures>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'TestDatabaseAccountFeatures';
    }
    public getMethod() {
      return 'POST';
    }
    public createResponse() {
      return new TestDatabaseAccountFeaturesResponse();
    }
  }

  // @Route("/db/clusters/{id}", "PUT")
  export class UpdateCluster
    extends CodeMashRequestBase
    implements IReturn<UpdateClusterResponse> {
    public id: string;
    public cluster: string;
    public storageSize: number;
    public databaseRegion: string;
    public autoScaling: boolean;
    public enableMultiRegion: boolean;
    public multiRegions: string[];
    public atlasUserName: string;
    public atlasPassword: string;
    public atlasClusterId: string;
    public atlasClusterName: string;

    public constructor(init?: Partial<UpdateCluster>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'UpdateCluster';
    }
    public getMethod() {
      return 'PUT';
    }
    public createResponse() {
      return new UpdateClusterResponse();
    }
  }

  // @Route("/db/clusters/{id}/default", "POST")
  export class UpdateDefaultCluster
    extends CodeMashRequestBase
    implements IReturn<UpdateDefaultClusterResponse> {
    public id: string;

    public constructor(init?: Partial<UpdateDefaultCluster>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'UpdateDefaultCluster';
    }
    public getMethod() {
      return 'POST';
    }
    public createResponse() {
      return new UpdateDefaultClusterResponse();
    }
  }

  // @Route("/db/disable", "GET")
  export class DisableDatabase
    extends CodeMashRequestBase
    implements IReturn<DisableDatabaseResponse> {
    public password: string;

    public constructor(init?: Partial<DisableDatabase>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'DisableDatabase';
    }
    public getMethod() {
      return 'GET';
    }
    public createResponse() {
      return new DisableDatabaseResponse();
    }
  }

  // @Route("/db/enable", "GET")
  export class EnableDatabase
    extends CodeMashRequestBase
    implements IReturn<EstablishDatabaseResponse> {
    public provider: string;
    public displayName: string;
    public freeRegion: string;
    public storageSize: number;
    public databaseRegion: string;
    public cluster: string;
    public autoScaling: boolean;
    public enableMultiRegion: boolean;
    public multiRegions: string[];
    public atlasUserName: string;
    public atlasPassword: string;
    public atlasClusterId: string;
    public atlasClusterName: string;

    public constructor(init?: Partial<EnableDatabase>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'EnableDatabase';
    }
    public getMethod() {
      return 'GET';
    }
    public createResponse() {
      return new EstablishDatabaseResponse();
    }
  }

  // @Route("/db/exports", "POST")
  export class CreateSchemaExport
    extends CodeMashRequestBase
    implements IReturn<CreateSchemaExportResponse> {
    public collectionName: string;
    public schemaId?: string;
    public functionId?: string;
    public cluster: string;
    public fileAccountId?: string;
    public fields: string[];
    public filter: string;
    public sort: string;
    public delimiter: string;
    public outputType: ExportFileTypes;
    public fromPage?: number;
    public toPage?: number;
    public pageSize?: number;
    public language: string;
    public includeReferencedNames: boolean;

    public constructor(init?: Partial<CreateSchemaExport>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'CreateSchemaExport';
    }
    public getMethod() {
      return 'POST';
    }
    public createResponse() {
      return new CreateSchemaExportResponse();
    }
  }

  // @Route("/db/exports/{exportId}", "DELETE")
  export class DeleteSchemaExport
    extends CodeMashRequestBase
    implements IReturn<DeleteSchemaExportResponse> {
    public exportId: string;

    public constructor(init?: Partial<DeleteSchemaExport>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'DeleteSchemaExport';
    }
    public getMethod() {
      return 'DELETE';
    }
    public createResponse() {
      return new DeleteSchemaExportResponse();
    }
  }

  // @Route("/db/exports/{exportId}", "GET")
  export class GetSchemaExport
    extends CodeMashRequestBase
    implements IReturn<GetSchemaExportResponse> {
    public exportId: string;

    public constructor(init?: Partial<GetSchemaExport>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'GetSchemaExport';
    }
    public getMethod() {
      return 'GET';
    }
    public createResponse() {
      return new GetSchemaExportResponse();
    }
  }

  // @Route("/db/exports", "GET")
  export class GetSchemaExports
    extends CodeMashListRequestBase
    implements IReturn<GetSchemaExportsResponse> {
    public cluster: string;

    public constructor(init?: Partial<GetSchemaExports>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'GetSchemaExports';
    }
    public getMethod() {
      return 'GET';
    }
    public createResponse() {
      return new GetSchemaExportsResponse();
    }
  }

  // @Route("/db/{collectionName}/forms", "POST")
  export class CreateCollectionForm
    extends CodeMashDbRequestBase
    implements IReturn<CreateCollectionFormResponse> {
    public title: string;
    public description: string;
    public isPublic: boolean;
    public limitOneResponse: boolean;
    public canEdit: boolean;
    public authentications: string[];

    public constructor(init?: Partial<CreateCollectionForm>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'CreateCollectionForm';
    }
    public getMethod() {
      return 'POST';
    }
    public createResponse() {
      return new CreateCollectionFormResponse();
    }
  }

  // @Route("/db/{collectionName}/form", "GET")
  export class GetCollectionForm
    extends CodeMashDbRequestBase
    implements IReturn<GetCollectionFormResponse> {
    public constructor(init?: Partial<GetCollectionForm>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'GetCollectionForm';
    }
    public getMethod() {
      return 'GET';
    }
    public createResponse() {
      return new GetCollectionFormResponse();
    }
  }

  // @Route("/db/{collectionName}/forms", "PUT")
  export class UpdateCollectionForm
    extends CodeMashDbRequestBase
    implements IReturn<UpdateCollectionFormResponse> {
    public title: string;
    public description: string;
    public isPublic: boolean;
    public disabled: boolean;
    public disabledMessage: string;
    public limitOneResponse: boolean;
    public canEdit: boolean;
    public authentications: string[];

    public constructor(init?: Partial<UpdateCollectionForm>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'UpdateCollectionForm';
    }
    public getMethod() {
      return 'PUT';
    }
    public createResponse() {
      return new UpdateCollectionFormResponse();
    }
  }

  // @Route("/db/{collectionName}/forms/token", "PUT")
  export class UpdateCollectionFormToken
    extends CodeMashDbRequestBase
    implements IReturn<UpdateCollectionFormTokenResponse> {
    public constructor(init?: Partial<UpdateCollectionFormToken>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'UpdateCollectionFormToken';
    }
    public getMethod() {
      return 'PUT';
    }
    public createResponse() {
      return new UpdateCollectionFormTokenResponse();
    }
  }

  // @Route("/db/{collectionName}/functions", "GET")
  export class GetCollectionFunctions
    extends CodeMashDbRequestBase
    implements IReturn<GetCollectionFunctionsResponse> {
    public isList: boolean;

    public constructor(init?: Partial<GetCollectionFunctions>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'GetCollectionFunctions';
    }
    public getMethod() {
      return 'GET';
    }
    public createResponse() {
      return new GetCollectionFunctionsResponse();
    }
  }

  // @Route("/db/system-settings", "GET")
  export class GetDatabaseSystemSettings
    extends CodeMashRequestBase
    implements IReturn<GetDatabaseSystemSettingsResponse> {
    public constructor(init?: Partial<GetDatabaseSystemSettings>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'GetDatabaseSystemSettings';
    }
    public getMethod() {
      return 'GET';
    }
    public createResponse() {
      return new GetDatabaseSystemSettingsResponse();
    }
  }

  // @Route("/db/schemas/system-templates/{id}", "GET")
  export class GetSchemaTemplate
    extends CodeMashRequestBase
    implements IReturn<GetSchemaTemplateResponse> {
    public id: string;

    public constructor(init?: Partial<GetSchemaTemplate>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'GetSchemaTemplate';
    }
    public getMethod() {
      return 'GET';
    }
    public createResponse() {
      return new GetSchemaTemplateResponse();
    }
  }

  // @Route("/db/schemas/system-templates", "GET")
  export class GetSchemaTemplates
    extends CodeMashRequestBase
    implements IReturn<GetSchemaTemplatesResponse> {
    public constructor(init?: Partial<GetSchemaTemplates>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'GetSchemaTemplates';
    }
    public getMethod() {
      return 'GET';
    }
    public createResponse() {
      return new GetSchemaTemplatesResponse();
    }
  }

  // @Route("/db/imports", "POST")
  export class CreateSchemaImport
    extends CodeMashRequestBase
    implements IReturn<CreateSchemaImportResponse> {
    public schemaId: string;
    public cluster: string;
    public fileAccountId?: string;
    public columns: { [index: number]: string };
    public resolvers: { [index: number]: string };
    public columnOptions: { [index: number]: string };
    public delimiter: string;
    public fileId: string;
    public hasHeader: boolean;
    public replaceMatches: boolean;
    public inputType: ImportFileTypes;

    public constructor(init?: Partial<CreateSchemaImport>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'CreateSchemaImport';
    }
    public getMethod() {
      return 'POST';
    }
    public createResponse() {
      return new CreateSchemaImportResponse();
    }
  }

  // @Route("/db/imports/{importId}", "DELETE")
  export class DeleteSchemaImport
    extends CodeMashRequestBase
    implements IReturn<DeleteSchemaImportResponse> {
    public importId: string;

    public constructor(init?: Partial<DeleteSchemaImport>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'DeleteSchemaImport';
    }
    public getMethod() {
      return 'DELETE';
    }
    public createResponse() {
      return new DeleteSchemaImportResponse();
    }
  }

  // @Route("/db/imports/{importId}", "GET")
  export class GetSchemaImport
    extends CodeMashRequestBase
    implements IReturn<GetSchemaImportResponse> {
    public importId: string;

    public constructor(init?: Partial<GetSchemaImport>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'GetSchemaImport';
    }
    public getMethod() {
      return 'GET';
    }
    public createResponse() {
      return new GetSchemaImportResponse();
    }
  }

  // @Route("/db/imports", "GET")
  export class GetSchemaImports
    extends CodeMashListRequestBase
    implements IReturn<GetSchemaImportsResponse> {
    public cluster: string;

    public constructor(init?: Partial<GetSchemaImports>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'GetSchemaImports';
    }
    public getMethod() {
      return 'GET';
    }
    public createResponse() {
      return new GetSchemaImportsResponse();
    }
  }

  // @Route("/db/imports/upload", "POST")
  export class UploadSchemaImportFile
    extends CodeMashRequestBase
    implements IReturn<UploadSchemaImportFileResponse> {
    public delimiter: string;
    public fileAccountId?: string;

    public constructor(init?: Partial<UploadSchemaImportFile>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'UploadSchemaImportFile';
    }
    public getMethod() {
      return 'POST';
    }
    public createResponse() {
      return new UploadSchemaImportFileResponse();
    }
  }

  // @Route("/db/{collectionName}/indexes", "POST")
  export class CreateIndex
    extends CodeMashDbRequestBase
    implements IReturn<CreateIndexResponse> {
    public key: { [index: string]: Object };
    public options: string;

    public constructor(init?: Partial<CreateIndex>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'CreateIndex';
    }
    public getMethod() {
      return 'POST';
    }
    public createResponse() {
      return new CreateIndexResponse();
    }
  }

  // @Route("/db/{collectionName}/indexes/{id}", "DELETE")
  export class DeleteIndex
    extends CodeMashDbRequestBase
    implements IReturn<DeleteIndexResponse> {
    public id: string;

    public constructor(init?: Partial<DeleteIndex>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'DeleteIndex';
    }
    public getMethod() {
      return 'DELETE';
    }
    public createResponse() {
      return new DeleteIndexResponse();
    }
  }

  // @Route("/db/region-inform", "POST")
  export class SaveInformDatabaseRegion
    extends CodeMashRequestBase
    implements IReturn<SaveInformDatabaseRegionResponse> {
    public databaseRegion: string;

    public constructor(init?: Partial<SaveInformDatabaseRegion>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'SaveInformDatabaseRegion';
    }
    public getMethod() {
      return 'POST';
    }
    public createResponse() {
      return new SaveInformDatabaseRegionResponse();
    }
  }

  // @Route("/db/schemas/{id}/clear", "POST")
  export class ClearSchemaData
    extends CodeMashRequestBase
    implements IReturn<ClearSchemaDataResponse> {
    public id: string;
    public clusters: string[];

    public constructor(init?: Partial<ClearSchemaData>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'ClearSchemaData';
    }
    public getMethod() {
      return 'POST';
    }
    public createResponse() {
      return new ClearSchemaDataResponse();
    }
  }

  // @Route("/db/schema", "POST")
  export class CreateSchema
    extends CodeMashDbRequestBase
    implements IReturn<CreateSchemaResponse> {
    public uiSchema: string;
    public jsonSchema: string;
    public mongoDbSchema: string;

    public constructor(init?: Partial<CreateSchema>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'CreateSchema';
    }
    public getMethod() {
      return 'POST';
    }
    public createResponse() {
      return new CreateSchemaResponse();
    }
  }

  // @Route("/db/schemas/system-templates/{id}", "POST")
  export class CreateSchemaFromTemplate
    extends CodeMashDbRequestBase
    implements IReturn<CreateSchemaFromTemplateResponse> {
    public id: string;
    public mapping: { [index: string]: string };
    public names: { [index: string]: string };
    public displayFields: { [index: string]: string };
    public customDisplayFields: { [index: string]: string };
    public created: string[];
    public excluded: string[];

    public constructor(init?: Partial<CreateSchemaFromTemplate>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'CreateSchemaFromTemplate';
    }
    public getMethod() {
      return 'POST';
    }
    public createResponse() {
      return new CreateSchemaFromTemplateResponse();
    }
  }

  // @Route("/db/schemas/{id}/duplicate", "POST")
  export class DuplicateSchema
    extends CodeMashDbRequestBase
    implements IReturn<DuplicateSchemaResponse> {
    public id: string;
    public newCollectionName: string;
    public includeTriggers: boolean;
    public includeIndexes: boolean;
    public includeRecords: boolean;
    public clusters: string[];
    public includeFiles: boolean;

    public constructor(init?: Partial<DuplicateSchema>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'DuplicateSchema';
    }
    public getMethod() {
      return 'POST';
    }
    public createResponse() {
      return new DuplicateSchemaResponse();
    }
  }

  // @Route("/db/schemas/{collectionName}", "GET")
  export class GetSchema
    extends CodeMashDbRequestBase
    implements IReturn<GetSchemaResponse> {
    public constructor(init?: Partial<GetSchema>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'GetSchema';
    }
    public getMethod() {
      return 'GET';
    }
    public createResponse() {
      return new GetSchemaResponse();
    }
  }

  // @Route("/db/schemas", "GET")
  export class GetSchemas
    extends CodeMashRequestBase
    implements IReturn<GetSchemasResponse> {
    public constructor(init?: Partial<GetSchemas>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'GetSchemas';
    }
    public getMethod() {
      return 'GET';
    }
    public createResponse() {
      return new GetSchemasResponse();
    }
  }

  // @Route("/db/schemas/{collectionName}/rename-field/cancel", "PUT")
  export class CancelRenameFieldUniqueName
    extends CodeMashDbRequestBase
    implements IReturn<CancelRenameFieldUniqueNameResponse> {
    public constructor(init?: Partial<CancelRenameFieldUniqueName>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'CancelRenameFieldUniqueName';
    }
    public getMethod() {
      return 'PUT';
    }
    public createResponse() {
      return new CancelRenameFieldUniqueNameResponse();
    }
  }

  // @Route("/db/schemas/{collectionName}/rename-field", "PUT")
  export class RenameFieldUniqueName
    extends CodeMashDbRequestBase
    implements IReturn<RenameFieldUniqueNameResponse> {
    public oldName: string;
    public newName: string;

    public constructor(init?: Partial<RenameFieldUniqueName>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'RenameFieldUniqueName';
    }
    public getMethod() {
      return 'PUT';
    }
    public createResponse() {
      return new RenameFieldUniqueNameResponse();
    }
  }

  // @Route("/db/schemas/rename", "PUT")
  export class RenameSchema
    extends CodeMashRequestBase
    implements IReturn<RenameSchemaResponse> {
    public schemaId: string;
    public name: string;
    public title: string;
    public renameUniqueName: boolean;

    public constructor(init?: Partial<RenameSchema>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'RenameSchema';
    }
    public getMethod() {
      return 'PUT';
    }
    public createResponse() {
      return new RenameSchemaResponse();
    }
  }

  export class ChangeDatabaseStorageSize
    extends CodeMashRequestBase
    implements IReturn<ChangeDatabaseStorageSizeResponse> {
    public newSize: number;

    public constructor(init?: Partial<ChangeDatabaseStorageSize>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'ChangeDatabaseStorageSize';
    }
    public getMethod() {
      return 'POST';
    }
    public createResponse() {
      return new ChangeDatabaseStorageSizeResponse();
    }
  }

  // @Route("/db/settings", "GET")
  export class GetDatabaseSettings
    extends CodeMashRequestBase
    implements IReturn<GetDatabaseSettingsResponse> {
    public includeSystemSettings: boolean;

    public constructor(init?: Partial<GetDatabaseSettings>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'GetDatabaseSettings';
    }
    public getMethod() {
      return 'GET';
    }
    public createResponse() {
      return new GetDatabaseSettingsResponse();
    }
  }

  // @Route("/db/taxonomies/{id}/clear", "POST")
  export class ClearTaxonomyData
    extends CodeMashDbRequestBase
    implements IReturn<ClearTaxonomyDataResponse> {
    public id: string;
    public clusters: string[];

    public constructor(init?: Partial<ClearTaxonomyData>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'ClearTaxonomyData';
    }
    public getMethod() {
      return 'POST';
    }
    public createResponse() {
      return new ClearTaxonomyDataResponse();
    }
  }

  // @Route("/db/taxonomy", "POST")
  export class CreateTaxonomy
    extends CodeMashRequestBase
    implements IReturn<CreateTaxonomyResponse> {
    public title: string;
    public description: string;
    public jsonTermsMetaSchema: string;
    public uiTermsMetaSchema: string;
    public dependencies: string[];
    public parent: string;

    public constructor(init?: Partial<CreateTaxonomy>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'CreateTaxonomy';
    }
    public getMethod() {
      return 'POST';
    }
    public createResponse() {
      return new CreateTaxonomyResponse();
    }
  }

  // @Route("/db/taxonomies/{id}", "DELETE")
  export class DeleteTaxonomy
    extends CodeMashRequestBase
    implements IReturn<DeleteTaxonomyResponse> {
    public id: string;

    public constructor(init?: Partial<DeleteTaxonomy>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'DeleteTaxonomy';
    }
    public getMethod() {
      return 'DELETE';
    }
    public createResponse() {
      return new DeleteTaxonomyResponse();
    }
  }

  // @Route("/db/taxonomy", "PUT")
  export class EditTaxonomy
    extends CodeMashRequestBase
    implements IReturn<EditTaxonomyResponse> {
    public taxonomyId: string;
    public title: string;
    public description: string;
    public jsonTermsMetaSchema: string;
    public uiTermsMetaSchema: string;
    public dependencies: string[];
    public parent: string;

    public constructor(init?: Partial<EditTaxonomy>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'EditTaxonomy';
    }
    public getMethod() {
      return 'PUT';
    }
    public createResponse() {
      return new EditTaxonomyResponse();
    }
  }

  // @Route("/db/taxonomies", "GET")
  export class GetTaxonomies
    extends CodeMashRequestBase
    implements IReturn<GetTaxonomiesResponse> {
    public constructor(init?: Partial<GetTaxonomies>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'GetTaxonomies';
    }
    public getMethod() {
      return 'GET';
    }
    public createResponse() {
      return new GetTaxonomiesResponse();
    }
  }

  // @Route("/db/taxonomies/{collectionName}", "GET")
  export class GetTaxonomy
    extends CodeMashDbRequestBase
    implements IReturn<GetTaxonomyResponse> {
    public constructor(init?: Partial<GetTaxonomy>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'GetTaxonomy';
    }
    public getMethod() {
      return 'GET';
    }
    public createResponse() {
      return new GetTaxonomyResponse();
    }
  }

  // @Route("/db/taxonomies/{collectionName}/rename-field/cancel", "PUT")
  export class CancelTaxonomyRenameFieldUniqueName
    extends CodeMashDbRequestBase
    implements IReturn<CancelTaxonomyRenameFieldUniqueNameResponse> {
    public constructor(init?: Partial<CancelTaxonomyRenameFieldUniqueName>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'CancelTaxonomyRenameFieldUniqueName';
    }
    public getMethod() {
      return 'PUT';
    }
    public createResponse() {
      return new CancelTaxonomyRenameFieldUniqueNameResponse();
    }
  }

  // @Route("/db/taxonomies/{collectionName}/rename-field", "PUT")
  export class RenameTaxonomyFieldUniqueName
    extends CodeMashDbRequestBase
    implements IReturn<RenameTaxonomyFieldUniqueNameResponse> {
    public oldName: string;
    public newName: string;

    public constructor(init?: Partial<RenameTaxonomyFieldUniqueName>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'RenameTaxonomyFieldUniqueName';
    }
    public getMethod() {
      return 'PUT';
    }
    public createResponse() {
      return new RenameTaxonomyFieldUniqueNameResponse();
    }
  }

  // @Route("/db/taxonomies/{collectionName}", "POST")
  export class CreateTerm
    extends CodeMashDbRequestBase
    implements IReturn<InsertOneResponse> {
    public document: string;
    public meta: string;
    public dependencies: { [index: string]: string[] };
    public parent: string;

    public constructor(init?: Partial<CreateTerm>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'CreateTerm';
    }
    public getMethod() {
      return 'POST';
    }
    public createResponse() {
      return new InsertOneResponse();
    }
  }

  // @Route("/db/taxonomies/{CollectionName}/terms/bulk", "DELETE")
  export class DeleteManyTermsRequest
    extends CodeMashDbRequestBase
    implements IReturn<DeleteManyTermsResponse> {
    public filter: string;

    public constructor(init?: Partial<DeleteManyTermsRequest>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'DeleteManyTermsRequest';
    }
    public getMethod() {
      return 'DELETE';
    }
    public createResponse() {
      return new DeleteManyTermsResponse();
    }
  }

  // @Route("/db/taxonomies/{collectionName}/terms/{termId}", "DELETE")
  export class DeleteTerm
    extends CodeMashDbRequestBase
    implements IReturn<InsertOneResponse> {
    public termId: string;

    public constructor(init?: Partial<DeleteTerm>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'DeleteTerm';
    }
    public getMethod() {
      return 'DELETE';
    }
    public createResponse() {
      return new InsertOneResponse();
    }
  }

  // @Route("/db/taxonomies/{collectionName}/terms/{id}", "GET")
  export class GetTerm
    extends CodeMashDbRequestBase
    implements IReturn<GetTermResponse> {
    public id: string;

    public constructor(init?: Partial<GetTerm>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'GetTerm';
    }
    public getMethod() {
      return 'GET';
    }
    public createResponse() {
      return new GetTermResponse();
    }
  }

  // @Route("/db/taxonomies/{collectionName}/term-create", "GET")
  export class GetTermForCreate
    extends CodeMashDbRequestBase
    implements IReturn<GetTermForCreateResponse> {
    public constructor(init?: Partial<GetTermForCreate>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'GetTermForCreate';
    }
    public getMethod() {
      return 'GET';
    }
    public createResponse() {
      return new GetTermForCreateResponse();
    }
  }

  // @Route("/db/taxonomies/{collectionName}/terms/{termId}", "PUT")
  export class UpdateTerm
    extends CodeMashDbRequestBase
    implements IReturn<InsertOneResponse> {
    public termId: string;
    public document: string;
    public meta: string;
    public dependencies: { [index: string]: string[] };
    public parent: string;

    public constructor(init?: Partial<UpdateTerm>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'UpdateTerm';
    }
    public getMethod() {
      return 'PUT';
    }
    public createResponse() {
      return new InsertOneResponse();
    }
  }

  // @Route("/db/taxonomies/{collectionName}/files", "POST")
  export class UploadTermFileRequest
    extends CodeMashDbRequestBase
    implements IReturn<UploadRecordFileResponse> {
    public uniqueFieldName: string;

    public constructor(init?: Partial<UploadTermFileRequest>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'UploadTermFileRequest';
    }
    public getMethod() {
      return 'POST';
    }
    public createResponse() {
      return new UploadRecordFileResponse();
    }
  }

  // @Route("/db/triggers", "POST")
  export class CreateCollectionTrigger
    extends CodeMashDbRequestBase
    implements IReturn<CreateCollectionTriggerResponse> {
    public trigger: SchemaTriggerCreateDto;

    public constructor(init?: Partial<CreateCollectionTrigger>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'CreateCollectionTrigger';
    }
    public getMethod() {
      return 'POST';
    }
    public createResponse() {
      return new CreateCollectionTriggerResponse();
    }
  }

  // @Route("/db/triggers/{id}", "DELETE")
  export class DeleteCollectionTrigger
    extends CodeMashDbRequestBase
    implements IReturn<DeleteCollectionTriggerResponse> {
    public id: string;

    public constructor(init?: Partial<DeleteCollectionTrigger>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'DeleteCollectionTrigger';
    }
    public getMethod() {
      return 'DELETE';
    }
    public createResponse() {
      return new DeleteCollectionTriggerResponse();
    }
  }

  // @Route("/db/triggers/{id}/disable", "PUT")
  export class DisableCollectionTrigger
    extends CodeMashDbRequestBase
    implements IReturn<DisableCollectionTriggerResponse> {
    public id: string;

    public constructor(init?: Partial<DisableCollectionTrigger>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'DisableCollectionTrigger';
    }
    public getMethod() {
      return 'PUT';
    }
    public createResponse() {
      return new DisableCollectionTriggerResponse();
    }
  }

  // @Route("/db/triggers/{id}/enable", "PUT")
  export class EnableCollectionTrigger
    extends CodeMashDbRequestBase
    implements IReturn<EnableCollectionTriggerResponse> {
    public id: string;

    public constructor(init?: Partial<EnableCollectionTrigger>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'EnableCollectionTrigger';
    }
    public getMethod() {
      return 'PUT';
    }
    public createResponse() {
      return new EnableCollectionTriggerResponse();
    }
  }

  // @Route("/db/triggers/{id}", "PUT")
  export class UpdateCollectionTrigger
    extends CodeMashDbRequestBase
    implements IReturn<UpdateCollectionTriggerResponse> {
    public id: string;
    public trigger: SchemaTriggerCreateDto;

    public constructor(init?: Partial<UpdateCollectionTrigger>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'UpdateCollectionTrigger';
    }
    public getMethod() {
      return 'PUT';
    }
    public createResponse() {
      return new UpdateCollectionTriggerResponse();
    }
  }

  // @Route("/db/settings", "PATCH")
  export class UpdateDatabaseSettings
    extends CodeMashRequestBase
    implements IReturn<UpdateDatabaseSettingsResponse> {
    public clusterId?: string;
    public setting: string;
    public displayName: string;

    public constructor(init?: Partial<UpdateDatabaseSettings>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'UpdateDatabaseSettings';
    }
    public getMethod() {
      return 'PATCH';
    }
    public createResponse() {
      return new UpdateDatabaseSettingsResponse();
    }
  }

  // @Route("/files/{id}/access/public", "PUT")
  export class GrantPublicFileAccess
    extends CodeMashRequestBase
    implements IReturn<GrantPublicFileAccessResponse> {
    public id: string;

    public constructor(init?: Partial<GrantPublicFileAccess>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'GrantPublicFileAccess';
    }
    public getMethod() {
      return 'PUT';
    }
    public createResponse() {
      return new GrantPublicFileAccessResponse();
    }
  }

  // @Route("/files/folders/access/public", "PUT")
  export class GrantPublicFolderAccess
    extends CodeMashRequestBase
    implements IReturn<GrantPublicFolderAccessResponse> {
    public path: string;
    public referrers: string[];
    public fileAccountId?: string;

    public constructor(init?: Partial<GrantPublicFolderAccess>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'GrantPublicFolderAccess';
    }
    public getMethod() {
      return 'PUT';
    }
    public createResponse() {
      return new GrantPublicFolderAccessResponse();
    }
  }

  // @Route("/files/{id}/access/private", "PUT")
  export class RevokePublicFileAccess
    extends CodeMashRequestBase
    implements IReturn<RevokePublicFileAccessResponse> {
    public id: string;

    public constructor(init?: Partial<RevokePublicFileAccess>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'RevokePublicFileAccess';
    }
    public getMethod() {
      return 'PUT';
    }
    public createResponse() {
      return new RevokePublicFileAccessResponse();
    }
  }

  // @Route("/files/folders/access/private", "PUT")
  export class RevokePublicFolderAccess
    extends CodeMashRequestBase
    implements IReturn<RevokePublicFolderAccessResponse> {
    public path: string;
    public fileAccountId?: string;

    public constructor(init?: Partial<RevokePublicFolderAccess>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'RevokePublicFolderAccess';
    }
    public getMethod() {
      return 'PUT';
    }
    public createResponse() {
      return new RevokePublicFolderAccessResponse();
    }
  }

  // @Route("/files/accounts", "POST")
  export class CreateFileAccount
    extends CodeMashRequestBase
    implements IReturn<CreateFileAccountResponse> {
    public model: FileAccountProperties;

    public constructor(init?: Partial<CreateFileAccount>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'CreateFileAccount';
    }
    public getMethod() {
      return 'POST';
    }
    public createResponse() {
      return new CreateFileAccountResponse();
    }
  }

  // @Route("/files/accounts/{Id}", "DELETE")
  export class DeleteFileAccount
    extends CodeMashRequestBase
    implements IReturn<DeleteFileAccountResponse> {
    public id: string;

    public constructor(init?: Partial<DeleteFileAccount>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'DeleteFileAccount';
    }
    public getMethod() {
      return 'DELETE';
    }
    public createResponse() {
      return new DeleteFileAccountResponse();
    }
  }

  // @Route("/files/accounts/{id}", "PUT")
  export class EditFileAccount
    extends CodeMashRequestBase
    implements IReturn<EditFileAccountResponse> {
    public id: string;
    public model: FileAccountProperties;

    public constructor(init?: Partial<EditFileAccount>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'EditFileAccount';
    }
    public getMethod() {
      return 'PUT';
    }
    public createResponse() {
      return new EditFileAccountResponse();
    }
  }

  // @Route("/files/accounts/{id}", "GET")
  export class GetFileAccount
    extends CodeMashRequestBase
    implements IReturn<GetFileAccountResponse> {
    public id: string;

    public constructor(init?: Partial<GetFileAccount>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'GetFileAccount';
    }
    public getMethod() {
      return 'GET';
    }
    public createResponse() {
      return new GetFileAccountResponse();
    }
  }

  // @Route("/files/accounts", "GET")
  export class GetFileAccounts
    extends CodeMashRequestBase
    implements IReturn<GetFileAccountsResponse> {
    public constructor(init?: Partial<GetFileAccounts>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'GetFileAccounts';
    }
    public getMethod() {
      return 'GET';
    }
    public createResponse() {
      return new GetFileAccountsResponse();
    }
  }

  // @Route("/files/accounts/{id}/default", "PUT")
  export class SetFileAccountAsDefault
    extends CodeMashRequestBase
    implements IReturn<SetFileAccountAsDefaultResponse> {
    public id: string;

    public constructor(init?: Partial<SetFileAccountAsDefault>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'SetFileAccountAsDefault';
    }
    public getMethod() {
      return 'PUT';
    }
    public createResponse() {
      return new SetFileAccountAsDefaultResponse();
    }
  }

  // @Route("/files/accounts/{id}/sync-files", "POST")
  export class SyncFilesFromProvider
    extends CodeMashRequestBase
    implements IReturn<SyncFilesFromProviderResponse> {
    public id: string;

    public constructor(init?: Partial<SyncFilesFromProvider>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'SyncFilesFromProvider';
    }
    public getMethod() {
      return 'POST';
    }
    public createResponse() {
      return new SyncFilesFromProviderResponse();
    }
  }

  // @Route("/files/accounts/features-test", "POST")
  export class TestFileAccountFeatures
    extends CodeMashRequestBase
    implements IReturn<TestFileAccountFeaturesResponse> {
    public id?: string;
    public model: FileAccountProperties;

    public constructor(init?: Partial<TestFileAccountFeatures>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'TestFileAccountFeatures';
    }
    public getMethod() {
      return 'POST';
    }
    public createResponse() {
      return new TestFileAccountFeaturesResponse();
    }
  }

  // @Route("/files/folder", "POST")
  export class CreateFolder
    extends CodeMashRequestBase
    implements IReturn<CreateFolderResponse> {
    public fileAccountId?: string;
    public path: string;
    public folderName: string;

    public constructor(init?: Partial<CreateFolder>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'CreateFolder';
    }
    public getMethod() {
      return 'POST';
    }
    public createResponse() {
      return new CreateFolderResponse();
    }
  }

  // @Route("/files/folder/{FolderId}", "DELETE")
  export class DeleteFolder
    extends CodeMashRequestBase
    implements IReturn<DeleteFolderResponse> {
    public fileAccountId?: string;
    public path: string;
    public folderId: string;

    public constructor(init?: Partial<DeleteFolder>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'DeleteFolder';
    }
    public getMethod() {
      return 'DELETE';
    }
    public createResponse() {
      return new DeleteFolderResponse();
    }
  }

  // @Route("/files/{id}/optimizations", "GET")
  export class GetFileOptimizations
    extends CodeMashRequestBase
    implements IReturn<GetFileOptimizationsResponse> {
    public id: string;

    public constructor(init?: Partial<GetFileOptimizations>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'GetFileOptimizations';
    }
    public getMethod() {
      return 'GET';
    }
    public createResponse() {
      return new GetFileOptimizationsResponse();
    }
  }

  // @Route("/files/folder", "GET")
  export class GetFolderFiles
    extends CodeMashListRequestBase
    implements IReturn<GetFolderFilesResponse> {
    public fileAccountId?: string;
    public path: string;

    public constructor(init?: Partial<GetFolderFiles>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'GetFolderFiles';
    }
    public getMethod() {
      return 'GET';
    }
    public createResponse() {
      return new GetFolderFilesResponse();
    }
  }

  // @Route("/files/folder/{id}", "PUT")
  export class RenameFolder
    extends CodeMashRequestBase
    implements IReturn<RenameFolderResponse> {
    public path: string;
    public id: string;
    public newName: string;
    public fileAccountId?: string;

    public constructor(init?: Partial<RenameFolder>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'RenameFolder';
    }
    public getMethod() {
      return 'PUT';
    }
    public createResponse() {
      return new RenameFolderResponse();
    }
  }

  // @Route("/files/bulk", "DELETE")
  export class DeleteManyFiles
    extends CodeMashRequestBase
    implements IReturn<DeleteManyFilesResponse> {
    // @DataMember(Name="ids[]")
    public ids: string[];

    public constructor(init?: Partial<DeleteManyFiles>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'DeleteManyFiles';
    }
    public getMethod() {
      return 'DELETE';
    }
    public createResponse() {
      return new DeleteManyFilesResponse();
    }
  }

  // @Route("/files/disable", "GET")
  export class DisableFiles
    extends CodeMashRequestBase
    implements IReturn<DisableFilesResponse> {
    public constructor(init?: Partial<DisableFiles>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'DisableFiles';
    }
    public getMethod() {
      return 'GET';
    }
    public createResponse() {
      return new DisableFilesResponse();
    }
  }

  // @Route("/files/enable", "POST")
  export class EnableFiles
    extends CodeMashRequestBase
    implements IReturn<EnableFilesResponse> {
    public model: FileAccountProperties;

    public constructor(init?: Partial<EnableFiles>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'EnableFiles';
    }
    public getMethod() {
      return 'POST';
    }
    public createResponse() {
      return new EnableFilesResponse();
    }
  }

  // @Route("/files/directories", "GET")
  export class GetDirectories
    extends CodeMashListRequestBase
    implements IReturn<GetDirectoriesResponse> {
    public path: string;
    public fileAccountId?: string;

    public constructor(init?: Partial<GetDirectories>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'GetDirectories';
    }
    public getMethod() {
      return 'GET';
    }
    public createResponse() {
      return new GetDirectoriesResponse();
    }
  }

  // @Route("/files/settings", "GET")
  export class GetFilesSettings
    extends CodeMashRequestBase
    implements IReturn<GetFilesSettingsResponse> {
    public constructor(init?: Partial<GetFilesSettings>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'GetFilesSettings';
    }
    public getMethod() {
      return 'GET';
    }
    public createResponse() {
      return new GetFilesSettingsResponse();
    }
  }

  // @Route("/files/triggers", "POST")
  export class CreateFilesTrigger
    extends CodeMashRequestBase
    implements IReturn<CreateFilesTriggerResponse> {
    public trigger: FilesTriggerCreateDto;

    public constructor(init?: Partial<CreateFilesTrigger>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'CreateFilesTrigger';
    }
    public getMethod() {
      return 'POST';
    }
    public createResponse() {
      return new CreateFilesTriggerResponse();
    }
  }

  // @Route("/files/triggers/{id}", "DELETE")
  export class DeleteFilesTrigger
    extends CodeMashRequestBase
    implements IReturn<DeleteFilesTriggerResponse> {
    public id: string;

    public constructor(init?: Partial<DeleteFilesTrigger>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'DeleteFilesTrigger';
    }
    public getMethod() {
      return 'DELETE';
    }
    public createResponse() {
      return new DeleteFilesTriggerResponse();
    }
  }

  // @Route("/files/triggers/{id}/disable", "PUT")
  export class DisableFilesTrigger
    extends CodeMashRequestBase
    implements IReturn<DisableFilesTriggerResponse> {
    public id: string;

    public constructor(init?: Partial<DisableFilesTrigger>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'DisableFilesTrigger';
    }
    public getMethod() {
      return 'PUT';
    }
    public createResponse() {
      return new DisableFilesTriggerResponse();
    }
  }

  // @Route("/files/triggers/{id}/enable", "PUT")
  export class EnableFilesTrigger
    extends CodeMashRequestBase
    implements IReturn<EnableFilesTriggerResponse> {
    public id: string;

    public constructor(init?: Partial<EnableFilesTrigger>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'EnableFilesTrigger';
    }
    public getMethod() {
      return 'PUT';
    }
    public createResponse() {
      return new EnableFilesTriggerResponse();
    }
  }

  // @Route("/files/triggers", "GET")
  export class GetFilesTriggers
    extends CodeMashRequestBase
    implements IReturn<GetFilesTriggersResponse> {
    public fileAccountId?: string;

    public constructor(init?: Partial<GetFilesTriggers>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'GetFilesTriggers';
    }
    public getMethod() {
      return 'GET';
    }
    public createResponse() {
      return new GetFilesTriggersResponse();
    }
  }

  // @Route("/files/triggers/{id}", "PUT")
  export class UpdateFilesTrigger
    extends CodeMashRequestBase
    implements IReturn<UpdateFilesTriggerResponse> {
    public id: string;
    public trigger: FilesTriggerCreateDto;

    public constructor(init?: Partial<UpdateFilesTrigger>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'UpdateFilesTrigger';
    }
    public getMethod() {
      return 'PUT';
    }
    public createResponse() {
      return new UpdateFilesTriggerResponse();
    }
  }

  // @Route("/db/collections/tags/filter", "GET POST")
  // @Route("/{version}/db/collections/tags/filter", "GET POST")
  export class GetCollectionTagsFilter
    extends CodeMashListRequestBase
    implements IReturn<GetCollectionTagsFilterResponse> {
    public initial: string[];
    public search: string;
    public collectionName: string;
    public cluster: string;
    public collectionId: string;

    public constructor(init?: Partial<GetCollectionTagsFilter>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'GetCollectionTagsFilter';
    }
    public getMethod() {
      return 'POST';
    }
    public createResponse() {
      return new GetCollectionTagsFilterResponse();
    }
  }

  export class GetFilesFilter
    extends CodeMashListRequestBase
    implements IReturn<GetFilesFilterResponse> {
    public initial: string[];
    public search: string;

    public constructor(init?: Partial<GetFilesFilter>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'GetFilesFilter';
    }
    public getMethod() {
      return 'POST';
    }
    public createResponse() {
      return new GetFilesFilterResponse();
    }
  }

  // @Route("/db/collections/filter", "GET POST")
  // @Route("/{version}/db/collections/filter", "GET POST")
  export class GetRecordsFilter
    extends CodeMashListRequestBase
    implements IReturn<GetRecordsFilterResponse> {
    public initial: string[];
    public search: string;
    public collectionName: string;
    public collectionId: string;
    public cluster: string;
    public labelField: string;

    public constructor(init?: Partial<GetRecordsFilter>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'GetRecordsFilter';
    }
    public getMethod() {
      return 'POST';
    }
    public createResponse() {
      return new GetRecordsFilterResponse();
    }
  }

  // @Route("/db/taxonomies/terms/filter", "GET POST")
  // @Route("/{version}/db/taxonomies/terms/filter", "GET POST")
  export class GetTermsFilter
    extends CodeMashListRequestBase
    implements IReturn<GetTermsFilterResponse> {
    public initial: string[];
    public search: string;
    public taxonomyName: string;
    public cluster: string;
    public taxonomyId: string;

    public constructor(init?: Partial<GetTermsFilter>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'GetTermsFilter';
    }
    public getMethod() {
      return 'POST';
    }
    public createResponse() {
      return new GetTermsFilterResponse();
    }
  }

  // @Route("/membership/users/filter", "GET POST")
  // @Route("/{version}/membership/users/filter", "GET POST")
  export class GetUsersFilter
    extends CodeMashListRequestBase
    implements IReturn<GetUsersFilterResponse> {
    public initial: string[];
    public search: string;
    public labelField: string;
    public valueField: string;
    public meta: { [index: string]: string };

    public constructor(init?: Partial<GetUsersFilter>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'GetUsersFilter';
    }
    public getMethod() {
      return 'POST';
    }
    public createResponse() {
      return new GetUsersFilterResponse();
    }
  }

  // @Route("/shared/forms/auth/credentials", "POST")
  export class AuthCredentialsSharedForm
    extends CodeMashFormRequest
    implements IReturn<AuthCredentialsSharedFormResponse> {
    public email: string;
    public password: string;

    public constructor(init?: Partial<AuthCredentialsSharedForm>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'AuthCredentialsSharedForm';
    }
    public getMethod() {
      return 'POST';
    }
    public createResponse() {
      return new AuthCredentialsSharedFormResponse();
    }
  }

  /**
   * Sign In
   */
  // @Route("/auth")
  // @Route("/auth/{provider}")
  // @Api(Description="Sign In")
  // @DataContract
  export class Authenticate implements IReturn<AuthenticateResponse>, IPost {
    /**
     * AuthProvider, e.g. credentials
     */
    // @DataMember(Order=1)
    // @ApiMember(Description="AuthProvider, e.g. credentials")
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

    // @DataMember(Order=17)
    public accessToken: string;

    // @DataMember(Order=18)
    public accessTokenSecret: string;

    // @DataMember(Order=19)
    public scope: string;

    // @DataMember(Order=20)
    public meta: { [index: string]: string };

    public constructor(init?: Partial<Authenticate>) {
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'Authenticate';
    }
    public getMethod() {
      return 'POST';
    }
    public createResponse() {
      return new AuthenticateResponse();
    }
  }

  /**
   * Sign In
   */
  // @Route("/shared/forms/auth/aad", "GET POST")
  // @Api(Description="Sign In")
  export class AadAuthentication
    extends Authenticate
    implements IReturn<AuthenticateResponse> {
    public constructor(init?: Partial<AadAuthentication>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'AadAuthentication';
    }
    public getMethod() {
      return 'POST';
    }
    public createResponse() {
      return new AuthenticateResponse();
    }
  }

  export class FormRegisterOAuthUser
    implements IReturn<FormRegisterOAuthUserResponse> {
    public providerUserId: string;
    public userName: string;
    public displayName: string;
    public email: string;
    public firstName: string;
    public lastName: string;
    public provider: ProjectUserProviders;
    public projectId: string;

    public constructor(init?: Partial<FormRegisterOAuthUser>) {
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'FormRegisterOAuthUser';
    }
    public getMethod() {
      return 'POST';
    }
    public createResponse() {
      return new FormRegisterOAuthUserResponse();
    }
  }

  /**
   * Sign In
   */
  // @Route("/shared/forms/auth/google", "GET POST")
  // @Api(Description="Sign In")
  export class GoogleAuthentication
    extends Authenticate
    implements IReturn<AuthenticateResponse> {
    public constructor(init?: Partial<GoogleAuthentication>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'GoogleAuthentication';
    }
    public getMethod() {
      return 'POST';
    }
    public createResponse() {
      return new AuthenticateResponse();
    }
  }

  // @Route("/shared/forms/auth/logout", "POST")
  export class SharedFormLogout extends CodeMashFormRequest {
    public constructor(init?: Partial<SharedFormLogout>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'SharedFormLogout';
    }
    public getMethod() {
      return 'POST';
    }
    public createResponse() {}
  }

  // @Route("/shared/forms/files", "GET")
  export class DownloadFormFile
    extends CodeMashFormRequest
    implements IReturn<HttpResult> {
    public fileId: string;

    public constructor(init?: Partial<DownloadFormFile>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'DownloadFormFile';
    }
    public getMethod() {
      return 'GET';
    }
    public createResponse() {
      return new HttpResult();
    }
  }

  // @Route("/shared/forms/files/url", "GET")
  export class DownloadFormFileUrl
    extends CodeMashFormRequest
    implements IReturn<DownloadFormFileUrlResponse> {
    public fileId: string;

    public constructor(init?: Partial<DownloadFormFileUrl>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'DownloadFormFileUrl';
    }
    public getMethod() {
      return 'GET';
    }
    public createResponse() {
      return new DownloadFormFileUrlResponse();
    }
  }

  // @Route("/shared/forms/files", "POST")
  export class UploadFormFile
    extends CodeMashFormRequest
    implements IReturn<UploadFormFileResponse> {
    public uniqueFieldName: string;

    public constructor(init?: Partial<UploadFormFile>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'UploadFormFile';
    }
    public getMethod() {
      return 'POST';
    }
    public createResponse() {
      return new UploadFormFileResponse();
    }
  }

  // @Route("/shared/forms/tags/filter", "POST")
  export class GetFormCollectionTagsFilter
    extends CodeMashFormRequest
    implements IReturn<GetFormCollectionTagsFilterResponse> {
    public initial: string[];
    public search: string;
    public collectionName: string;
    public collectionId: string;
    public pageSize: number;
    public pageNumber: number;

    public constructor(init?: Partial<GetFormCollectionTagsFilter>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'GetFormCollectionTagsFilter';
    }
    public getMethod() {
      return 'POST';
    }
    public createResponse() {
      return new GetFormCollectionTagsFilterResponse();
    }
  }

  // @Route("/shared/forms/collections/filter", "POST")
  export class GetFormRecordsFilter
    extends CodeMashFormRequest
    implements IReturn<GetFormRecordsFilterResponse> {
    public initial: string[];
    public search: string;
    public collectionName: string;
    public collectionId: string;
    public labelField: string;
    public pageSize: number;
    public pageNumber: number;

    public constructor(init?: Partial<GetFormRecordsFilter>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'GetFormRecordsFilter';
    }
    public getMethod() {
      return 'POST';
    }
    public createResponse() {
      return new GetFormRecordsFilterResponse();
    }
  }

  // @Route("/shared/forms/roles", "GET")
  export class GetFormRoles
    extends CodeMashFormRequest
    implements IReturn<GetFormRolesResponse> {
    public constructor(init?: Partial<GetFormRoles>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'GetFormRoles';
    }
    public getMethod() {
      return 'GET';
    }
    public createResponse() {
      return new GetFormRolesResponse();
    }
  }

  // @Route("/shared/forms/taxonomies/filter", "POST")
  export class GetFormTermsFilter
    extends CodeMashFormRequest
    implements IReturn<GetFormTermsFilterResponse> {
    public initial: string[];
    public search: string;
    public taxonomyName: string;
    public taxonomyId: string;
    public pageSize: number;
    public pageNumber: number;

    public constructor(init?: Partial<GetFormTermsFilter>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'GetFormTermsFilter';
    }
    public getMethod() {
      return 'POST';
    }
    public createResponse() {
      return new GetFormTermsFilterResponse();
    }
  }

  // @Route("/shared/forms/users/filter", "POST")
  export class GetFormUsersFilter
    extends CodeMashFormRequest
    implements IReturn<GetFormUsersFilterResponse> {
    public initial: string[];
    public search: string;
    public labelField: string;
    public valueField: string;
    public meta: { [index: string]: string };
    public pageSize: number;
    public pageNumber: number;

    public constructor(init?: Partial<GetFormUsersFilter>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'GetFormUsersFilter';
    }
    public getMethod() {
      return 'POST';
    }
    public createResponse() {
      return new GetFormUsersFilterResponse();
    }
  }

  // @Route("/shared/forms", "GET")
  export class GetSharedForm
    extends CodeMashFormRequest
    implements IReturn<GetSharedFormResponse> {
    public editId: string;
    public isResult: boolean;

    public constructor(init?: Partial<GetSharedForm>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'GetSharedForm';
    }
    public getMethod() {
      return 'GET';
    }
    public createResponse() {
      return new GetSharedFormResponse();
    }
  }

  // @Route("/shared/forms/response", "POST")
  export class InsertSharedForm
    extends CodeMashFormRequest
    implements IReturn<InsertSharedFormResponse> {
    public document: string;

    public constructor(init?: Partial<InsertSharedForm>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'InsertSharedForm';
    }
    public getMethod() {
      return 'POST';
    }
    public createResponse() {
      return new InsertSharedFormResponse();
    }
  }

  // @Route("/shared/forms/response", "PUT")
  export class UpdateSharedForm
    extends CodeMashFormRequest
    implements IReturn<UpdateSharedFormResponse> {
    public document: string;

    public constructor(init?: Partial<UpdateSharedForm>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'UpdateSharedForm';
    }
    public getMethod() {
      return 'PUT';
    }
    public createResponse() {
      return new UpdateSharedFormResponse();
    }
  }

  // @Route("/logging/disable", "GET")
  export class DisableLogging
    extends CodeMashRequestBase
    implements IReturn<DisableLoggingResponse> {
    public constructor(init?: Partial<DisableLogging>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'DisableLogging';
    }
    public getMethod() {
      return 'GET';
    }
    public createResponse() {
      return new DisableLoggingResponse();
    }
  }

  // @Route("/logging/enable", "GET")
  export class EnableLogging
    extends CodeMashRequestBase
    implements IReturn<EnableLoggingResponse> {
    public constructor(init?: Partial<EnableLogging>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'EnableLogging';
    }
    public getMethod() {
      return 'GET';
    }
    public createResponse() {
      return new EnableLoggingResponse();
    }
  }

  // @Route("/logging/logs", "DELETE")
  export class DeleteLogs
    extends CodeMashRequestBase
    implements IReturn<DeleteLogsResponse> {
    public clearType: string;
    // @DataMember(Name="ids[]")
    public ids: string[];

    public constructor(init?: Partial<DeleteLogs>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'DeleteLogs';
    }
    public getMethod() {
      return 'DELETE';
    }
    public createResponse() {
      return new DeleteLogsResponse();
    }
  }

  // @Route("/logging/logs/{id}", "GET")
  export class GetLog
    extends CodeMashRequestBase
    implements IReturn<GetLogResponse> {
    public id: string;

    public constructor(init?: Partial<GetLog>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'GetLog';
    }
    public getMethod() {
      return 'GET';
    }
    public createResponse() {
      return new GetLogResponse();
    }
  }

  // @Route("/logging/logs", "GET")
  export class GetLogs
    extends CodeMashListRequestBase
    implements IReturn<GetLogsResponse> {
    public constructor(init?: Partial<GetLogs>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'GetLogs';
    }
    public getMethod() {
      return 'GET';
    }
    public createResponse() {
      return new GetLogsResponse();
    }
  }

  // @Route("/membership/authorization", "PUT")
  export class UpdateAuthorization
    extends CodeMashRequestBase
    implements IReturn<UpdateAuthorizationResponse> {
    public setting: string;
    public userRegistersAsRole: string;
    public guestRegistersAsRole: string;
    public allowedRegisterRoles: string[];
    public allowedProviderRegisterRoles: string[];
    public needVerification: boolean;
    public verifyUserCallback: string;
    public verificationEmailTemplate: string;
    public deactivationEmailTemplate: string;
    public sendWelcomeEmail: boolean;
    public welcomeEmailTemplate: string;
    public allowResetPassword: boolean;
    public resetPasswordEmailTemplate: string;
    public resetPasswordCallback: string;
    public allowInviteUsers: boolean;
    public allowDeactivateUsers: boolean;
    public inviteUserEmailTemplate: string;
    public inviteUserCallback: string;
    public deactivateUserCallback: string;
    public resetPasswordTokenExpiration?: number;
    public invitationExpiration?: number;
    public emailVerificationExpiration?: number;
    public deactivationExpiration?: number;
    public defaultSubscribeToNews: boolean;

    public constructor(init?: Partial<UpdateAuthorization>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'UpdateAuthorization';
    }
    public getMethod() {
      return 'PUT';
    }
    public createResponse() {
      return new UpdateAuthorizationResponse();
    }
  }

  // @Route("/membership/authorization/password-complexity", "PUT")
  export class UpdatePasswordComplexity
    extends CodeMashRequestBase
    implements IReturn<UpdatePasswordComplexityResponse> {
    public minLength?: number;
    public maxLength?: number;
    public minNumbers?: number;
    public maxNumbers?: number;
    public minUpper?: number;
    public maxUpper?: number;
    public minLower?: number;
    public maxLower?: number;
    public minSpecial?: number;
    public maxSpecial?: number;
    public allowedSpecial: string;

    public constructor(init?: Partial<UpdatePasswordComplexity>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'UpdatePasswordComplexity';
    }
    public getMethod() {
      return 'PUT';
    }
    public createResponse() {
      return new UpdatePasswordComplexityResponse();
    }
  }

  // @Route("/membership/roles", "POST")
  export class CreateRole
    extends CodeMashRequestBase
    implements IReturn<CreateRoleResponse> {
    public name: string;
    public policies: string[];

    public constructor(init?: Partial<CreateRole>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'CreateRole';
    }
    public getMethod() {
      return 'POST';
    }
    public createResponse() {
      return new CreateRoleResponse();
    }
  }

  // @Route("/membership/roles/{name}", "DELETE")
  export class DeleteRole
    extends CodeMashRequestBase
    implements IReturn<DeleteRoleResponse> {
    public name: string;

    public constructor(init?: Partial<DeleteRole>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'DeleteRole';
    }
    public getMethod() {
      return 'DELETE';
    }
    public createResponse() {
      return new DeleteRoleResponse();
    }
  }

  // @Route("/membership/roles/{name}", "GET")
  export class GetRole
    extends CodeMashRequestBase
    implements IReturn<GetRoleResponse> {
    public name: string;

    public constructor(init?: Partial<GetRole>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'GetRole';
    }
    public getMethod() {
      return 'GET';
    }
    public createResponse() {
      return new GetRoleResponse();
    }
  }

  // @Route("/membership/roles", "GET")
  export class GetRoles
    extends CodeMashRequestBase
    implements IReturn<GetRolesResponse> {
    public includePolicies: boolean;

    public constructor(init?: Partial<GetRoles>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'GetRoles';
    }
    public getMethod() {
      return 'GET';
    }
    public createResponse() {
      return new GetRolesResponse();
    }
  }

  // @Route("/membership/roles/{formerName}", "PUT")
  export class UpdateRole
    extends CodeMashRequestBase
    implements IReturn<UpdateRoleResponse> {
    public formerName: string;
    public name: string;
    public policies: string[];

    public constructor(init?: Partial<UpdateRole>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'UpdateRole';
    }
    public getMethod() {
      return 'PUT';
    }
    public createResponse() {
      return new UpdateRoleResponse();
    }
  }

  // @Route("/membership/users/meta/rename-field/cancel", "PUT")
  export class CancelRenameUserFieldUniqueName
    extends CodeMashDbRequestBase
    implements IReturn<CancelRenameUserFieldUniqueNameResponse> {
    public constructor(init?: Partial<CancelRenameUserFieldUniqueName>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'CancelRenameUserFieldUniqueName';
    }
    public getMethod() {
      return 'PUT';
    }
    public createResponse() {
      return new CancelRenameUserFieldUniqueNameResponse();
    }
  }

  // @Route("/membership/users/meta/rename-field", "PUT")
  export class RenameUserFieldUniqueName
    extends CodeMashDbRequestBase
    implements IReturn<RenameUserFieldUniqueNameResponse> {
    public oldName: string;
    public newName: string;

    public constructor(init?: Partial<RenameUserFieldUniqueName>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'RenameUserFieldUniqueName';
    }
    public getMethod() {
      return 'PUT';
    }
    public createResponse() {
      return new RenameUserFieldUniqueNameResponse();
    }
  }

  // @Route("/membership/triggers", "POST")
  export class CreateUsersTrigger
    extends CodeMashRequestBase
    implements IReturn<CreateUsersTriggerResponse> {
    public trigger: UsersTriggerCreateDto;

    public constructor(init?: Partial<CreateUsersTrigger>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'CreateUsersTrigger';
    }
    public getMethod() {
      return 'POST';
    }
    public createResponse() {
      return new CreateUsersTriggerResponse();
    }
  }

  // @Route("/membership/triggers/{id}", "DELETE")
  export class DeleteUsersTrigger
    extends CodeMashRequestBase
    implements IReturn<DeleteUsersTriggerResponse> {
    public id: string;

    public constructor(init?: Partial<DeleteUsersTrigger>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'DeleteUsersTrigger';
    }
    public getMethod() {
      return 'DELETE';
    }
    public createResponse() {
      return new DeleteUsersTriggerResponse();
    }
  }

  // @Route("/membership/triggers/{id}/disable", "PUT")
  export class DisableUsersTrigger
    extends CodeMashRequestBase
    implements IReturn<DisableUsersTriggerResponse> {
    public id: string;

    public constructor(init?: Partial<DisableUsersTrigger>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'DisableUsersTrigger';
    }
    public getMethod() {
      return 'PUT';
    }
    public createResponse() {
      return new DisableUsersTriggerResponse();
    }
  }

  // @Route("/membership/triggers/{id}/enable", "PUT")
  export class EnableUsersTrigger
    extends CodeMashRequestBase
    implements IReturn<EnableUsersTriggerResponse> {
    public id: string;

    public constructor(init?: Partial<EnableUsersTrigger>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'EnableUsersTrigger';
    }
    public getMethod() {
      return 'PUT';
    }
    public createResponse() {
      return new EnableUsersTriggerResponse();
    }
  }

  // @Route("/membership/triggers", "GET")
  export class GetUsersTrigger
    extends CodeMashRequestBase
    implements IReturn<GetUsersTriggerResponse> {
    public constructor(init?: Partial<GetUsersTrigger>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'GetUsersTrigger';
    }
    public getMethod() {
      return 'GET';
    }
    public createResponse() {
      return new GetUsersTriggerResponse();
    }
  }

  // @Route("/membership/triggers/{id}", "PUT")
  export class UpdateUsersTrigger
    extends CodeMashRequestBase
    implements IReturn<UpdateUsersTriggerResponse> {
    public id: string;
    public trigger: UsersTriggerCreateDto;

    public constructor(init?: Partial<UpdateUsersTrigger>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'UpdateUsersTrigger';
    }
    public getMethod() {
      return 'PUT';
    }
    public createResponse() {
      return new UpdateUsersTriggerResponse();
    }
  }

  // @Route("/notifications/email/accounts", "POST")
  export class CreateEmailAccount
    extends CodeMashRequestBase
    implements IReturn<CreateEmailAccountResponse> {
    public model: EmailProperties;
    public signatures: { [index: string]: string };
    public subscriptionLinks: { [index: string]: string };

    public constructor(init?: Partial<CreateEmailAccount>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'CreateEmailAccount';
    }
    public getMethod() {
      return 'POST';
    }
    public createResponse() {
      return new CreateEmailAccountResponse();
    }
  }

  // @Route("/notifications/email/accounts/{Id}", "DELETE")
  export class DeleteEmailAccount
    extends CodeMashRequestBase
    implements IReturn<DeleteEmailAccountResponse> {
    public id: string;

    public constructor(init?: Partial<DeleteEmailAccount>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'DeleteEmailAccount';
    }
    public getMethod() {
      return 'DELETE';
    }
    public createResponse() {
      return new DeleteEmailAccountResponse();
    }
  }

  // @Route("/notifications/email/accounts", "PUT")
  export class EditEmailAccount
    extends CodeMashRequestBase
    implements IReturn<EditEmailAccountResponse> {
    public id: string;
    public model: EmailProperties;
    public signatures: { [index: string]: string };
    public subscriptionLinks: { [index: string]: string };

    public constructor(init?: Partial<EditEmailAccount>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'EditEmailAccount';
    }
    public getMethod() {
      return 'PUT';
    }
    public createResponse() {
      return new EditEmailAccountResponse();
    }
  }

  // @Route("/notifications/email/accounts/{Id}/token", "PUT")
  export class EditEmailAccountToken
    extends CodeMashRequestBase
    implements IReturn<EditEmailAccountTokenResponse> {
    public id: string;
    public token: string;

    public constructor(init?: Partial<EditEmailAccountToken>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'EditEmailAccountToken';
    }
    public getMethod() {
      return 'PUT';
    }
    public createResponse() {
      return new EditEmailAccountTokenResponse();
    }
  }

  // @Route("/notifications/email/accounts/{id}", "GET")
  export class GetEmailAccount
    extends CodeMashRequestBase
    implements IReturn<GetEmailAccountResponse> {
    public id: string;

    public constructor(init?: Partial<GetEmailAccount>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'GetEmailAccount';
    }
    public getMethod() {
      return 'GET';
    }
    public createResponse() {
      return new GetEmailAccountResponse();
    }
  }

  // @Route("/notifications/email/accounts", "GET")
  export class GetEmailAccounts
    extends CodeMashRequestBase
    implements IReturn<GetEmailAccountsResponse> {
    public constructor(init?: Partial<GetEmailAccounts>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'GetEmailAccounts';
    }
    public getMethod() {
      return 'GET';
    }
    public createResponse() {
      return new GetEmailAccountsResponse();
    }
  }

  // @Route("/notifications/email/accounts/default", "PUT")
  export class SetEmailAccountAsDefault
    extends CodeMashRequestBase
    implements IReturn<SetEmailAccountAsDefaultResponse> {
    public id: string;

    public constructor(init?: Partial<SetEmailAccountAsDefault>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'SetEmailAccountAsDefault';
    }
    public getMethod() {
      return 'PUT';
    }
    public createResponse() {
      return new SetEmailAccountAsDefaultResponse();
    }
  }

  export class TestEmailAccount
    extends CodeMashRequestBase
    implements IReturn<SendPushNotificationResponse> {
    public id: string;
    public emails: string[];
    public users: string[];

    public constructor(init?: Partial<TestEmailAccount>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'TestEmailAccount';
    }
    public getMethod() {
      return 'POST';
    }
    public createResponse() {
      return new SendPushNotificationResponse();
    }
  }

  // @Route("/notifications/email/accounts/features-test", "POST")
  export class TestEmailAccountFeatures
    extends CodeMashRequestBase
    implements IReturn<TestEmailAccountFeaturesResponse> {
    public model: EmailProperties;
    public emailAccountId?: string;

    public constructor(init?: Partial<TestEmailAccountFeatures>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'TestEmailAccountFeatures';
    }
    public getMethod() {
      return 'POST';
    }
    public createResponse() {
      return new TestEmailAccountFeaturesResponse();
    }
  }

  // @Route("/notifications/email/disable", "GET")
  export class DisableEmail
    extends CodeMashRequestBase
    implements IReturn<DisableEmailResponse> {
    public constructor(init?: Partial<DisableEmail>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'DisableEmail';
    }
    public getMethod() {
      return 'GET';
    }
    public createResponse() {
      return new DisableEmailResponse();
    }
  }

  // @Route("/notifications/email/enable", "POST")
  export class EnableEmail
    extends CodeMashRequestBase
    implements IReturn<EnableEmailResponse> {
    public model: EmailProperties;

    public constructor(init?: Partial<EnableEmail>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'EnableEmail';
    }
    public getMethod() {
      return 'POST';
    }
    public createResponse() {
      return new EnableEmailResponse();
    }
  }

  // @Route("/notifications/email/metrics", "GET")
  export class GetEmailMetrics
    extends CodeMashRequestBase
    implements IReturn<GetEmailMetricsResponse> {
    public constructor(init?: Partial<GetEmailMetrics>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'GetEmailMetrics';
    }
    public getMethod() {
      return 'GET';
    }
    public createResponse() {
      return new GetEmailMetricsResponse();
    }
  }

  /**
   * Deletes emails group from queue
   */
  // @Route("/notifications/email/groups/{id}", "DELETE")
  // @Api(Description="Deletes emails group from queue")
  // @DataContract
  export class DeleteEmailGroupRequest
    extends CodeMashRequestBase
    implements IReturn<DeleteEmailGroupResponse> {
    /**
     * Email group Id
     */
    // @DataMember
    // @ApiMember(DataType="string", Description="Email group Id", IsRequired=true, Name="Id", ParameterType="path")
    public id: string;

    public constructor(init?: Partial<DeleteEmailGroupRequest>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'DeleteEmailGroupRequest';
    }
    public getMethod() {
      return 'DELETE';
    }
    public createResponse() {
      return new DeleteEmailGroupResponse();
    }
  }

  // @Route("/notifications/emails/{id}", "GET")
  export class GetEmail
    extends CodeMashRequestBase
    implements IReturn<GetEmailResponse> {
    public id: string;

    public constructor(init?: Partial<GetEmail>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'GetEmail';
    }
    public getMethod() {
      return 'GET';
    }
    public createResponse() {
      return new GetEmailResponse();
    }
  }

  // @Route("/notifications/email/groups/{id}", "GET")
  export class GetEmailGroup
    extends CodeMashRequestBase
    implements IReturn<GetEmailGroupResponse> {
    public id: string;
    public language: string;

    public constructor(init?: Partial<GetEmailGroup>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'GetEmailGroup';
    }
    public getMethod() {
      return 'GET';
    }
    public createResponse() {
      return new GetEmailGroupResponse();
    }
  }

  // @Route("/notifications/email/groups/{id}/events", "GET")
  export class GetEmailGroupEvents
    extends CodeMashRequestBase
    implements IReturn<GetEmailGroupEventsResponse> {
    public id: string;
    public language: string;

    public constructor(init?: Partial<GetEmailGroupEvents>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'GetEmailGroupEvents';
    }
    public getMethod() {
      return 'GET';
    }
    public createResponse() {
      return new GetEmailGroupEventsResponse();
    }
  }

  // @Route("/notifications/email/groups", "GET")
  export class GetEmailGroups
    extends CodeMashListRequestBase
    implements IReturn<GetEmailGroupsResponse> {
    public constructor(init?: Partial<GetEmailGroups>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'GetEmailGroups';
    }
    public getMethod() {
      return 'GET';
    }
    public createResponse() {
      return new GetEmailGroupsResponse();
    }
  }

  // @Route("/notifications/emails", "GET")
  export class GetEmails
    extends CodeMashListRequestBase
    implements IReturn<GetEmailsResponse> {
    public groupId: string;
    public language: string;

    public constructor(init?: Partial<GetEmails>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'GetEmails';
    }
    public getMethod() {
      return 'GET';
    }
    public createResponse() {
      return new GetEmailsResponse();
    }
  }

  /**
   * Send email to recipients
   */
  // @Route("/notifications/email", "POST")
  // @Api(Description="Send email to recipients")
  export class SendEmail
    extends CodeMashRequestBase
    implements IReturn<SendPushNotificationResponse> {
    public templateId: string;
    public postpone?: number;
    public respectTimeZone: boolean;
    public distinctEmail: boolean;
    public source: string;
    public action: string;
    public forceRequestLanguage: boolean;

    public constructor(init?: Partial<SendEmail>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'SendEmail';
    }
    public getMethod() {
      return 'POST';
    }
    public createResponse() {
      return new SendPushNotificationResponse();
    }
  }

  // @Route("/notifications/emails/{id}/send", "POST")
  export class SendPostponedEmail
    extends CodeMashRequestBase
    implements IReturn<SendPostponedEmailResponse> {
    public id: string;

    public constructor(init?: Partial<SendPostponedEmail>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'SendPostponedEmail';
    }
    public getMethod() {
      return 'POST';
    }
    public createResponse() {
      return new SendPostponedEmailResponse();
    }
  }

  // @Route("/notifications/email/groups/{id}/send", "POST")
  export class SendPostponedEmailGroup
    extends CodeMashRequestBase
    implements IReturn<SendPostponedEmailGroupResponse> {
    public id: string;

    public constructor(init?: Partial<SendPostponedEmailGroup>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'SendPostponedEmailGroup';
    }
    public getMethod() {
      return 'POST';
    }
    public createResponse() {
      return new SendPostponedEmailGroupResponse();
    }
  }

  // @Route("/notifications/email/settings/tags", "POST")
  export class CreateOrUpdateEmailTag
    extends CodeMashRequestBase
    implements IReturn<CreateOrUpdateEmailTagResponse> {
    public identifier: string;
    public titles: { [index: string]: string };
    public descriptions: { [index: string]: string };

    public constructor(init?: Partial<CreateOrUpdateEmailTag>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'CreateOrUpdateEmailTag';
    }
    public getMethod() {
      return 'POST';
    }
    public createResponse() {
      return new CreateOrUpdateEmailTagResponse();
    }
  }

  // @Route("/notifications/email/settings/tags", "DELETE")
  export class DeleteEmailTag
    extends CodeMashRequestBase
    implements IReturn<DeleteEmailTagResponse> {
    public identifier: string;

    public constructor(init?: Partial<DeleteEmailTag>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'DeleteEmailTag';
    }
    public getMethod() {
      return 'DELETE';
    }
    public createResponse() {
      return new DeleteEmailTagResponse();
    }
  }

  // @Route("/notifications/email/settings/preferences", "POST")
  export class UpdateEmailPreferences
    extends CodeMashRequestBase
    implements IReturn<UpdateEmailPreferencesResponse> {
    public texts: { [index: string]: EmailPreferenceTexts };

    public constructor(init?: Partial<UpdateEmailPreferences>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'UpdateEmailPreferences';
    }
    public getMethod() {
      return 'POST';
    }
    public createResponse() {
      return new UpdateEmailPreferencesResponse();
    }
  }

  // @Route("/notifications/email/templates", "POST")
  export class CreateMessageTemplate
    extends CodeMashRequestBase
    implements IReturn<CreateMessageTemplateResponse> {
    public templateName: string;
    public subject: string;
    public body: string;
    public code: string;
    public staticAttachments: string[];
    public emailAccountId?: string;
    public type: EmailTemplateType;
    public tags: string[];
    public includeSubscriptionLink: boolean;

    public constructor(init?: Partial<CreateMessageTemplate>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'CreateMessageTemplate';
    }
    public getMethod() {
      return 'POST';
    }
    public createResponse() {
      return new CreateMessageTemplateResponse();
    }
  }

  // @Route("/notifications/email/templates/{Id}", "DELETE")
  export class DeleteEmailTemplate
    extends CodeMashRequestBase
    implements IReturn<DeleteEmailTemplateResponse> {
    public id: string;

    public constructor(init?: Partial<DeleteEmailTemplate>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'DeleteEmailTemplate';
    }
    public getMethod() {
      return 'DELETE';
    }
    public createResponse() {
      return new DeleteEmailTemplateResponse();
    }
  }

  // @Route("/notifications/email/templates/{Id}/contents", "DELETE")
  export class DeleteEmailTemplateContent
    extends CodeMashRequestBase
    implements IReturn<DeleteEmailTemplateContentResponse> {
    public id: string;

    public constructor(init?: Partial<DeleteEmailTemplateContent>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'DeleteEmailTemplateContent';
    }
    public getMethod() {
      return 'DELETE';
    }
    public createResponse() {
      return new DeleteEmailTemplateContentResponse();
    }
  }

  // @Route("/notifications/email/templates", "PUT")
  export class EditMessageTemplate
    extends CodeMashRequestBase
    implements IReturn<EditMessageTemplateResponse> {
    public id: string;
    public templateName: string;
    public subject: string;
    public body: string;
    public emailAccountId?: string;
    public staticAttachments: string[];
    public code: string;
    public type: EmailTemplateType;
    public tags: string[];
    public includeSubscriptionLink: boolean;

    public constructor(init?: Partial<EditMessageTemplate>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'EditMessageTemplate';
    }
    public getMethod() {
      return 'PUT';
    }
    public createResponse() {
      return new EditMessageTemplateResponse();
    }
  }

  // @Route("/notifications/email/templates/{id}", "GET")
  export class GetMessageTemplate
    extends CodeMashRequestBase
    implements IReturn<GetMessageTemplateResponse> {
    public id: string;

    public constructor(init?: Partial<GetMessageTemplate>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'GetMessageTemplate';
    }
    public getMethod() {
      return 'GET';
    }
    public createResponse() {
      return new GetMessageTemplateResponse();
    }
  }

  // @Route("/notifications/email/templates", "GET")
  export class GetMessageTemplates
    extends CodeMashRequestBase
    implements IReturn<GetMessageTemplatesResponse> {
    public constructor(init?: Partial<GetMessageTemplates>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'GetMessageTemplates';
    }
    public getMethod() {
      return 'GET';
    }
    public createResponse() {
      return new GetMessageTemplatesResponse();
    }
  }

  // @Route("/notifications/email/templates/tags", "GET")
  export class GetMessageTemplateTags
    extends CodeMashRequestBase
    implements IReturn<GetMessageTemplateTagsResponse> {
    public constructor(init?: Partial<GetMessageTemplateTags>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'GetMessageTemplateTags';
    }
    public getMethod() {
      return 'GET';
    }
    public createResponse() {
      return new GetMessageTemplateTagsResponse();
    }
  }

  // @Route("/notifications/email/templates/{id}/tokens", "GET")
  export class GetMessageTemplateTokens
    extends CodeMashRequestBase
    implements IReturn<GetMessageTemplateTokensResponse> {
    public id: string;

    public constructor(init?: Partial<GetMessageTemplateTokens>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'GetMessageTemplateTokens';
    }
    public getMethod() {
      return 'GET';
    }
    public createResponse() {
      return new GetMessageTemplateTokensResponse();
    }
  }

  // @Route("/notifications/email/templates/{id}/usage", "GET")
  export class GetMessageTemplateUsage
    extends CodeMashRequestBase
    implements IReturn<GetMessageTemplateUsageResponse> {
    public id: string;

    public constructor(init?: Partial<GetMessageTemplateUsage>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'GetMessageTemplateUsage';
    }
    public getMethod() {
      return 'GET';
    }
    public createResponse() {
      return new GetMessageTemplateUsageResponse();
    }
  }

  // @Route("/notifications/email/templates/attachments", "POST")
  export class UpdaloadEmailTemplateAttachment
    extends CodeMashRequestBase
    implements IReturn<UpdaloadEmailTemplateAttachmentResponse> {
    public fileAccountId?: string;

    public constructor(init?: Partial<UpdaloadEmailTemplateAttachment>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'UpdaloadEmailTemplateAttachment';
    }
    public getMethod() {
      return 'POST';
    }
    public createResponse() {
      return new UpdaloadEmailTemplateAttachmentResponse();
    }
  }

  // @Route("/notifications/email/user/preferences", "GET")
  export class GetUserEmailPreferences
    implements IReturn<GetUserEmailPreferencesResponse> {
    public token: string;

    public constructor(init?: Partial<GetUserEmailPreferences>) {
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'GetUserEmailPreferences';
    }
    public getMethod() {
      return 'GET';
    }
    public createResponse() {
      return new GetUserEmailPreferencesResponse();
    }
  }

  // @Route("/notifications/email/user/preferences", "PUT")
  export class UpdateUserEmailPreferences
    implements IReturn<UpdateUserEmailPreferencesResponse> {
    public token: string;
    public unsubscribeFromAll: boolean;
    public unsubscribedNewsTags: string[];

    public constructor(init?: Partial<UpdateUserEmailPreferences>) {
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'UpdateUserEmailPreferences';
    }
    public getMethod() {
      return 'PUT';
    }
    public createResponse() {
      return new UpdateUserEmailPreferencesResponse();
    }
  }

  // @Route("/notifications/push/accounts/features-test", "POST")
  export class TestPushAccountFeatures
    extends CodeMashRequestBase
    implements IReturn<TestPushAccountFeaturesResponse> {
    public model: PushAccountProperties;
    public pushAccountId?: string;

    public constructor(init?: Partial<TestPushAccountFeatures>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'TestPushAccountFeatures';
    }
    public getMethod() {
      return 'POST';
    }
    public createResponse() {
      return new TestPushAccountFeaturesResponse();
    }
  }

  // @Route("/notifications/push/metrics", "GET")
  export class GetNotificationMetrics
    extends CodeMashRequestBase
    implements IReturn<GetNotificationMetricsResponse> {
    public constructor(init?: Partial<GetNotificationMetrics>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'GetNotificationMetrics';
    }
    public getMethod() {
      return 'GET';
    }
    public createResponse() {
      return new GetNotificationMetricsResponse();
    }
  }

  // @Route("/notifications/push/groups/bulk", "DELETE")
  export class DeleteManyNotificationGroupsRequest
    extends CodeMashRequestBase
    implements IReturn<DeleteManyNotificationGroupsResponse> {
    // @DataMember(Name="ids[]")
    public ids: string[];

    public constructor(init?: Partial<DeleteManyNotificationGroupsRequest>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'DeleteManyNotificationGroupsRequest';
    }
    public getMethod() {
      return 'DELETE';
    }
    public createResponse() {
      return new DeleteManyNotificationGroupsResponse();
    }
  }

  // @Route("/notifications/push/groups/{id}", "DELETE")
  export class DeleteNotificationGroupRequest
    extends CodeMashRequestBase
    implements IReturn<DeleteNotificationGroupResponse> {
    public id: string;

    public constructor(init?: Partial<DeleteNotificationGroupRequest>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'DeleteNotificationGroupRequest';
    }
    public getMethod() {
      return 'DELETE';
    }
    public createResponse() {
      return new DeleteNotificationGroupResponse();
    }
  }

  // @Route("/notifications/push/{id}", "GET")
  export class GetNotification
    extends CodeMashRequestBase
    implements IReturn<GetNotificationResponse> {
    public id: string;

    public constructor(init?: Partial<GetNotification>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'GetNotification';
    }
    public getMethod() {
      return 'GET';
    }
    public createResponse() {
      return new GetNotificationResponse();
    }
  }

  // @Route("/notifications/push/groups/{id}", "GET")
  export class GetNotificationGroup
    extends CodeMashRequestBase
    implements IReturn<GetNotificationGroupResponse> {
    public id: string;
    public language: string;

    public constructor(init?: Partial<GetNotificationGroup>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'GetNotificationGroup';
    }
    public getMethod() {
      return 'GET';
    }
    public createResponse() {
      return new GetNotificationGroupResponse();
    }
  }

  // @Route("/notifications/push/groups/{id}/events", "GET")
  export class GetNotificationGroupEvents
    extends CodeMashRequestBase
    implements IReturn<GetNotificationGroupEventsResponse> {
    public id: string;
    public language: string;

    public constructor(init?: Partial<GetNotificationGroupEvents>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'GetNotificationGroupEvents';
    }
    public getMethod() {
      return 'GET';
    }
    public createResponse() {
      return new GetNotificationGroupEventsResponse();
    }
  }

  // @Route("/notifications/push/groups", "GET")
  export class GetNotificationGroups
    extends CodeMashListRequestBase
    implements IReturn<GetNotificationGroupsResponse> {
    public constructor(init?: Partial<GetNotificationGroups>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'GetNotificationGroups';
    }
    public getMethod() {
      return 'GET';
    }
    public createResponse() {
      return new GetNotificationGroupsResponse();
    }
  }

  // @Route("/notifications/push", "GET")
  export class GetNotifications
    extends CodeMashListRequestBase
    implements IReturn<GetNotificationsResponse> {
    public groupId: string;
    public language: string;

    public constructor(init?: Partial<GetNotifications>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'GetNotifications';
    }
    public getMethod() {
      return 'GET';
    }
    public createResponse() {
      return new GetNotificationsResponse();
    }
  }

  // @Route("/notifications/push/{id}/send", "POST")
  export class SendPostponedNotification
    extends CodeMashRequestBase
    implements IReturn<SendPostponedNotificationResponse> {
    public id: string;

    public constructor(init?: Partial<SendPostponedNotification>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'SendPostponedNotification';
    }
    public getMethod() {
      return 'POST';
    }
    public createResponse() {
      return new SendPostponedNotificationResponse();
    }
  }

  // @Route("/notifications/push/groups/{id}/send", "POST")
  export class SendPostponedNotificationGroup
    extends CodeMashRequestBase
    implements IReturn<SendPostponedNotificationGroupResponse> {
    public id: string;

    public constructor(init?: Partial<SendPostponedNotificationGroup>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'SendPostponedNotificationGroup';
    }
    public getMethod() {
      return 'POST';
    }
    public createResponse() {
      return new SendPostponedNotificationGroupResponse();
    }
  }

  /**
   * Send email to recipients
   */
  // @Route("/notifications/push", "POST")
  // @Api(Description="Send email to recipients")
  export class SendPushNotification
    extends CodeMashRequestBase
    implements IReturn<SendPushNotificationResponse> {
    public templateId: string;
    public postpone?: number;
    public respectTimeZone: boolean;
    public isNonPushable: boolean;
    public source: string;
    public action: string;
    public forceRequestLanguage: boolean;
    public userOnBehalf: string;

    public constructor(init?: Partial<SendPushNotification>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'SendPushNotification';
    }
    public getMethod() {
      return 'POST';
    }
    public createResponse() {
      return new SendPushNotificationResponse();
    }
  }

  // @Route("/notifications/push/templates", "POST")
  export class CreateNotificationTemplate
    extends CodeMashRequestBase
    implements IReturn<CreateNotificationTemplateResponse> {
    public templateName: string;
    public priority: NotificationPriority;
    public title: string;
    public body: string;
    public data: string;
    public ttl?: number;
    public url: string;
    public code: string;
    public collapseId: string;
    public image: string;
    public meta: { [index: string]: string };
    public buttons: PushNotificationButtons[];
    public accountId?: string;
    public subtitle: string;
    public iosBadge?: number;
    public iosCategory: string;
    public iosSound: string;
    public iosContentAvailable: boolean;
    public iosAnalyticsLabel: string;
    public iosAppBundleId: string;
    public iosGroupId: string;
    public iosPushType: string;
    public iosLaunchImage: string;
    public androidChannelId: string;
    public androidGroup: string;
    public androidGroupMessage: string;
    public restrictedPackageName: string;
    public androidSound: string;
    public androidVisibility: string;
    public androidLedColor: string;
    public androidLightOnDuration: string;
    public androidLightOffDuration: string;
    public androidAccentColor: string;
    public androidSticky: boolean;
    public androidDefaultLight: boolean;
    public androidDefaultVibration: boolean;
    public androidAnalyticsLabel: string;
    public androidVibrateTimings: string;
    public androidSmallIcon: string;
    public androidLargeIcon: string;
    public androidBackgroundLayout: AndroidBackgroundLayout;

    public constructor(init?: Partial<CreateNotificationTemplate>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'CreateNotificationTemplate';
    }
    public getMethod() {
      return 'POST';
    }
    public createResponse() {
      return new CreateNotificationTemplateResponse();
    }
  }

  // @Route("/notifications/push/templates/{id}", "DELETE")
  export class DeleteNotificationTemplate
    extends CodeMashRequestBase
    implements IReturn<DeleteNotificationTemplateResponse> {
    public id: string;

    public constructor(init?: Partial<DeleteNotificationTemplate>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'DeleteNotificationTemplate';
    }
    public getMethod() {
      return 'DELETE';
    }
    public createResponse() {
      return new DeleteNotificationTemplateResponse();
    }
  }

  // @Route("/notifications/push/templates/{id}/contents", "DELETE")
  export class DeleteNotificationTemplateContent
    extends CodeMashRequestBase
    implements IReturn<DeleteNotificationTemplateContentResponse> {
    public id: string;

    public constructor(init?: Partial<DeleteNotificationTemplateContent>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'DeleteNotificationTemplateContent';
    }
    public getMethod() {
      return 'DELETE';
    }
    public createResponse() {
      return new DeleteNotificationTemplateContentResponse();
    }
  }

  // @Route("/notifications/push/templates/{id}/tokens", "GET")
  export class GetNotificationTemplateTokens
    extends CodeMashRequestBase
    implements IReturn<GetNotificationTemplateTokensResponse> {
    public id: string;

    public constructor(init?: Partial<GetNotificationTemplateTokens>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'GetNotificationTemplateTokens';
    }
    public getMethod() {
      return 'GET';
    }
    public createResponse() {
      return new GetNotificationTemplateTokensResponse();
    }
  }

  // @Route("/notifications/push/templates/{id}/usage", "GET")
  export class GetNotificationTemplateUsage
    extends CodeMashRequestBase
    implements IReturn<GetNotificationTemplateUsageResponse> {
    public id: string;

    public constructor(init?: Partial<GetNotificationTemplateUsage>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'GetNotificationTemplateUsage';
    }
    public getMethod() {
      return 'GET';
    }
    public createResponse() {
      return new GetNotificationTemplateUsageResponse();
    }
  }

  // @Route("/notifications/push/templates/{id}", "PUT")
  export class UpdateNotificationTemplate
    extends CodeMashRequestBase
    implements IReturn<UpdateNotificationTemplateResponse> {
    public id: string;
    public templateName: string;
    public priority: NotificationPriority;
    public title: string;
    public body: string;
    public data: string;
    public ttl?: number;
    public url: string;
    public code: string;
    public collapseId: string;
    public image: string;
    public meta: { [index: string]: string };
    public buttons: PushNotificationButtons[];
    public accountId?: string;
    public subtitle: string;
    public iosBadge?: number;
    public iosCategory: string;
    public iosSound: string;
    public iosContentAvailable: boolean;
    public iosAnalyticsLabel: string;
    public iosAppBundleId: string;
    public iosGroupId: string;
    public iosPushType: string;
    public iosLaunchImage: string;
    public androidChannelId: string;
    public androidGroup: string;
    public androidGroupMessage: string;
    public restrictedPackageName: string;
    public androidSound: string;
    public androidVisibility: string;
    public androidLedColor: string;
    public androidLightOnDuration: string;
    public androidLightOffDuration: string;
    public androidAccentColor: string;
    public androidSticky: boolean;
    public androidDefaultLight: boolean;
    public androidDefaultVibration: boolean;
    public androidAnalyticsLabel: string;
    public androidVibrateTimings: string;
    public androidSmallIcon: string;
    public androidLargeIcon: string;
    public androidBackgroundLayout: AndroidBackgroundLayout;

    public constructor(init?: Partial<UpdateNotificationTemplate>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'UpdateNotificationTemplate';
    }
    public getMethod() {
      return 'PUT';
    }
    public createResponse() {
      return new UpdateNotificationTemplateResponse();
    }
  }

  // @Route("/notifications/push/templates/attachments", "POST")
  export class UploadPushTemplateAttachment
    extends CodeMashRequestBase
    implements IReturn<UploadPushTemplateAttachmentResponse> {
    public fileAccountId?: string;

    public constructor(init?: Partial<UploadPushTemplateAttachment>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'UploadPushTemplateAttachment';
    }
    public getMethod() {
      return 'POST';
    }
    public createResponse() {
      return new UploadPushTemplateAttachmentResponse();
    }
  }

  // @Route("/notifications/server-events/disable", "GET")
  export class DisableServerEvents
    extends CodeMashRequestBase
    implements IReturn<DisableServerEventsResponse> {
    public constructor(init?: Partial<DisableServerEvents>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'DisableServerEvents';
    }
    public getMethod() {
      return 'GET';
    }
    public createResponse() {
      return new DisableServerEventsResponse();
    }
  }

  // @Route("/notifications/server-events/enable", "GET")
  export class EnableServerEvents
    extends CodeMashRequestBase
    implements IReturn<EnableServerEventsResponse> {
    public constructor(init?: Partial<EnableServerEvents>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'EnableServerEvents';
    }
    public getMethod() {
      return 'GET';
    }
    public createResponse() {
      return new EnableServerEventsResponse();
    }
  }

  // @Route("/notifications/server-events/settings", "GET")
  export class GetServerEventsSettings
    extends CodeMashRequestBase
    implements IReturn<GetServerEventsSettingsResponse> {
    public constructor(init?: Partial<GetServerEventsSettings>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'GetServerEventsSettings';
    }
    public getMethod() {
      return 'GET';
    }
    public createResponse() {
      return new GetServerEventsSettingsResponse();
    }
  }

  // @Route("/notifications/server-events/settings", "PUT")
  export class UpdateServerEventsSettings
    extends CodeMashRequestBase
    implements IReturn<UpdateServerEventsSettingsResponse> {
    public setting: string;
    public fileAccountId?: string;
    public sendPush: boolean;

    public constructor(init?: Partial<UpdateServerEventsSettings>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'UpdateServerEventsSettings';
    }
    public getMethod() {
      return 'PUT';
    }
    public createResponse() {
      return new UpdateServerEventsSettingsResponse();
    }
  }

  // @Route("/payments/accounts/apple/features-test", "POST")
  export class TestAppleAppStoreConnection
    extends CodeMashRequestBase
    implements IReturn<TestAppleAppStoreConnectionResponse> {
    public displayName: string;
    public secretKey: string;
    public paymentAccountId?: string;

    public constructor(init?: Partial<TestAppleAppStoreConnection>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'TestAppleAppStoreConnection';
    }
    public getMethod() {
      return 'POST';
    }
    public createResponse() {
      return new TestAppleAppStoreConnectionResponse();
    }
  }

  // @Route("/payments/accounts", "POST")
  export class CreatePaymentAccount
    extends CodeMashRequestBase
    implements IReturn<CreatePaymentAccountResponse> {
    public model: PaymentAccountProperties;

    public constructor(init?: Partial<CreatePaymentAccount>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'CreatePaymentAccount';
    }
    public getMethod() {
      return 'POST';
    }
    public createResponse() {
      return new CreatePaymentAccountResponse();
    }
  }

  // @Route("/payments/accounts/decta/features-test", "POST")
  export class TestDectaAccountConnection
    extends CodeMashRequestBase
    implements IReturn<TestDectaAccountConnectionResponse> {
    public displayName: string;
    public accessKey: string;
    public secretKey: string;
    public paymentAccountId?: string;

    public constructor(init?: Partial<TestDectaAccountConnection>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'TestDectaAccountConnection';
    }
    public getMethod() {
      return 'POST';
    }
    public createResponse() {
      return new TestDectaAccountConnectionResponse();
    }
  }

  // @Route("/payments/accounts/{Id}", "DELETE")
  export class DeletePaymentAccount
    extends CodeMashRequestBase
    implements IReturn<DeletePaymentAccountResponse> {
    public id: string;

    public constructor(init?: Partial<DeletePaymentAccount>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'DeletePaymentAccount';
    }
    public getMethod() {
      return 'DELETE';
    }
    public createResponse() {
      return new DeletePaymentAccountResponse();
    }
  }

  // @Route("/payments/accounts/{id}", "GET")
  export class GetPaymentAccount
    extends CodeMashRequestBase
    implements IReturn<GetPaymentAccountResponse> {
    public id: string;

    public constructor(init?: Partial<GetPaymentAccount>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'GetPaymentAccount';
    }
    public getMethod() {
      return 'GET';
    }
    public createResponse() {
      return new GetPaymentAccountResponse();
    }
  }

  // @Route("/payments/accounts", "GET")
  export class GetPaymentAccounts
    extends CodeMashRequestBase
    implements IReturn<GetPaymentAccountsResponse> {
    public constructor(init?: Partial<GetPaymentAccounts>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'GetPaymentAccounts';
    }
    public getMethod() {
      return 'GET';
    }
    public createResponse() {
      return new GetPaymentAccountsResponse();
    }
  }

  // @Route("/payments/accounts/google/features-test", "POST")
  export class TestGooglePlayStoreAccountConnection
    extends CodeMashRequestBase
    implements IReturn<TestGooglePlayStoreAccountConnectionResponse> {
    public displayName: string;
    public secretKey: string;
    public paymentAccountId?: string;

    public constructor(init?: Partial<TestGooglePlayStoreAccountConnection>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'TestGooglePlayStoreAccountConnection';
    }
    public getMethod() {
      return 'POST';
    }
    public createResponse() {
      return new TestGooglePlayStoreAccountConnectionResponse();
    }
  }

  // @Route("/payments/accounts/kevin/features-test", "POST")
  export class TestKevinAccountConnection
    extends CodeMashRequestBase
    implements IReturn<TestKevinAccountConnectionResponse> {
    public displayName: string;
    public accessKey: string;
    public secretKey: string;
    public paymentAccountId?: string;

    public constructor(init?: Partial<TestKevinAccountConnection>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'TestKevinAccountConnection';
    }
    public getMethod() {
      return 'POST';
    }
    public createResponse() {
      return new TestKevinAccountConnectionResponse();
    }
  }

  // @Route("/payments/accounts/{id}/validate", "POST")
  export class BeginPaymentAccountValidation
    extends CodeMashRequestBase
    implements IReturn<BeginPaymentAccountValidationResponse> {
    public id: string;

    public constructor(init?: Partial<BeginPaymentAccountValidation>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'BeginPaymentAccountValidation';
    }
    public getMethod() {
      return 'POST';
    }
    public createResponse() {
      return new BeginPaymentAccountValidationResponse();
    }
  }

  // @Route("/payments/accounts/paysera/features-test", "POST")
  export class TestPayseraAccountConnection
    extends CodeMashRequestBase
    implements IReturn<TestPayseraAccountConnectionResponse> {
    public displayName: string;
    public accessKey: string;
    public secretKey: string;
    public validationToken: string;
    public paymentAccountId?: string;

    public constructor(init?: Partial<TestPayseraAccountConnection>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'TestPayseraAccountConnection';
    }
    public getMethod() {
      return 'POST';
    }
    public createResponse() {
      return new TestPayseraAccountConnectionResponse();
    }
  }

  // @Route("/payments/accounts/stripe/features-test", "POST")
  export class TestStripeAccountConnection
    extends CodeMashRequestBase
    implements IReturn<TestStripeAccountConnectionResponse> {
    public displayName: string;
    public accessKey: string;
    public secretKey: string;
    public paymentAccountId?: string;

    public constructor(init?: Partial<TestStripeAccountConnection>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'TestStripeAccountConnection';
    }
    public getMethod() {
      return 'POST';
    }
    public createResponse() {
      return new TestStripeAccountConnectionResponse();
    }
  }

  // @Route("/payments/accounts/{id}", "PUT")
  export class UpdatePaymentAccount
    extends CodeMashRequestBase
    implements IReturn<UpdatePaymentAccountResponse> {
    public id: string;
    public model: PaymentAccountProperties;

    public constructor(init?: Partial<UpdatePaymentAccount>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'UpdatePaymentAccount';
    }
    public getMethod() {
      return 'PUT';
    }
    public createResponse() {
      return new UpdatePaymentAccountResponse();
    }
  }

  // @Route("/payments/customers/bulk", "DELETE")
  export class DeleteManyCustomers
    extends CodeMashRequestBase
    implements IReturn<DeleteManyCustomersResponse> {
    // @DataMember(Name="ids[]")
    public ids: string[];

    public constructor(init?: Partial<DeleteManyCustomers>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'DeleteManyCustomers';
    }
    public getMethod() {
      return 'DELETE';
    }
    public createResponse() {
      return new DeleteManyCustomersResponse();
    }
  }

  // @Route("/payments/disable", "GET")
  export class DisablePayments
    extends CodeMashRequestBase
    implements IReturn<DisablePaymentsResponse> {
    public constructor(init?: Partial<DisablePayments>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'DisablePayments';
    }
    public getMethod() {
      return 'GET';
    }
    public createResponse() {
      return new DisablePaymentsResponse();
    }
  }

  // @Route("/payments/discounts/bulk", "DELETE")
  export class DeleteManyDiscounts
    extends CodeMashRequestBase
    implements IReturn<DeleteManyDiscountsResponse> {
    // @DataMember(Name="ids[]")
    public ids: string[];

    public constructor(init?: Partial<DeleteManyDiscounts>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'DeleteManyDiscounts';
    }
    public getMethod() {
      return 'DELETE';
    }
    public createResponse() {
      return new DeleteManyDiscountsResponse();
    }
  }

  // @Route("/payments/enable", "POST")
  export class EnablePayments
    extends CodeMashRequestBase
    implements IReturn<EnablePaymentsResponse> {
    public model: PaymentAccountProperties;

    public constructor(init?: Partial<EnablePayments>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'EnablePayments';
    }
    public getMethod() {
      return 'POST';
    }
    public createResponse() {
      return new EnablePaymentsResponse();
    }
  }

  // @Route("/payments/orders/test", "DELETE")
  export class DeleteAllTestOrders
    extends CodeMashRequestBase
    implements IReturn<DeleteAllTestOrdersResponse> {
    public constructor(init?: Partial<DeleteAllTestOrders>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'DeleteAllTestOrders';
    }
    public getMethod() {
      return 'DELETE';
    }
    public createResponse() {
      return new DeleteAllTestOrdersResponse();
    }
  }

  // @Route("/payments/orders/bulk", "DELETE")
  export class DeleteManyOrders
    extends CodeMashRequestBase
    implements IReturn<DeleteManyOrdersResponse> {
    // @DataMember(Name="ids[]")
    public ids: string[];

    public constructor(init?: Partial<DeleteManyOrders>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'DeleteManyOrders';
    }
    public getMethod() {
      return 'DELETE';
    }
    public createResponse() {
      return new DeleteManyOrdersResponse();
    }
  }

  // @Route("/payments/orders/{Id}", "DELETE")
  export class DeleteOrder
    extends CodeMashRequestBase
    implements IReturn<DeleteOrderResponse> {
    public id: string;

    public constructor(init?: Partial<DeleteOrder>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'DeleteOrder';
    }
    public getMethod() {
      return 'DELETE';
    }
    public createResponse() {
      return new DeleteOrderResponse();
    }
  }

  // @Route("/payments/orders/{orderId}/transactions/{id}", "GET")
  export class GetOrderTransaction
    extends CodeMashRequestBase
    implements IReturn<GetOrderTransactionResponse> {
    public orderId: string;
    public id: string;

    public constructor(init?: Partial<GetOrderTransaction>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'GetOrderTransaction';
    }
    public getMethod() {
      return 'GET';
    }
    public createResponse() {
      return new GetOrderTransactionResponse();
    }
  }

  // @Route("/payments/orders/{orderId}/transactions", "GET")
  export class GetOrderTransactions
    extends CodeMashListRequestBase
    implements IReturn<GetOrderTransactionsResponse> {
    public orderId: string;

    public constructor(init?: Partial<GetOrderTransactions>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'GetOrderTransactions';
    }
    public getMethod() {
      return 'GET';
    }
    public createResponse() {
      return new GetOrderTransactionsResponse();
    }
  }

  // @Route("/payments/plans", "POST")
  export class CreatePaymentPlan
    extends CodeMashRequestBase
    implements IReturn<CreatePaymentPlanResponse> {
    public model: PaymentPlanProperties;

    public constructor(init?: Partial<CreatePaymentPlan>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'CreatePaymentPlan';
    }
    public getMethod() {
      return 'POST';
    }
    public createResponse() {
      return new CreatePaymentPlanResponse();
    }
  }

  // @Route("/payments/plans/{Id}", "DELETE")
  export class DeletePaymentPlan
    extends CodeMashRequestBase
    implements IReturn<DeletePaymentPlanResponse> {
    public id: string;

    public constructor(init?: Partial<DeletePaymentPlan>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'DeletePaymentPlan';
    }
    public getMethod() {
      return 'DELETE';
    }
    public createResponse() {
      return new DeletePaymentPlanResponse();
    }
  }

  // @Route("/payments/plans/{id}", "GET")
  export class GetPaymentPlan
    extends CodeMashRequestBase
    implements IReturn<GetPaymentPlanResponse> {
    public id: string;

    public constructor(init?: Partial<GetPaymentPlan>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'GetPaymentPlan';
    }
    public getMethod() {
      return 'GET';
    }
    public createResponse() {
      return new GetPaymentPlanResponse();
    }
  }

  // @Route("/payments/plans", "GET")
  export class GetPaymentPlans
    extends CodeMashRequestBase
    implements IReturn<GetPaymentPlansResponse> {
    public constructor(init?: Partial<GetPaymentPlans>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'GetPaymentPlans';
    }
    public getMethod() {
      return 'GET';
    }
    public createResponse() {
      return new GetPaymentPlansResponse();
    }
  }

  // @Route("/payments/plans/{id}", "PUT")
  export class UpdatePaymentPlan
    extends CodeMashRequestBase
    implements IReturn<UpdatePaymentPlanResponse> {
    public id: string;
    public model: PaymentPlanProperties;

    public constructor(init?: Partial<UpdatePaymentPlan>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'UpdatePaymentPlan';
    }
    public getMethod() {
      return 'PUT';
    }
    public createResponse() {
      return new UpdatePaymentPlanResponse();
    }
  }

  // @Route("/payments/settings/modes", "POST")
  export class CreateOrUpdatePaymentMode
    extends CodeMashRequestBase
    implements IReturn<CreateOrUpdatePaymentModeResponse> {
    public name: string;
    public acceptUrl: string;
    public cancelUrl: string;
    public payText: string;
    public isDefault: boolean;

    public constructor(init?: Partial<CreateOrUpdatePaymentMode>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'CreateOrUpdatePaymentMode';
    }
    public getMethod() {
      return 'POST';
    }
    public createResponse() {
      return new CreateOrUpdatePaymentModeResponse();
    }
  }

  // @Route("/payments/settings/modes", "DELETE")
  export class DeletePaymentMode
    extends CodeMashRequestBase
    implements IReturn<DeletePaymentModeResponse> {
    public name: string;

    public constructor(init?: Partial<DeletePaymentMode>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'DeletePaymentMode';
    }
    public getMethod() {
      return 'DELETE';
    }
    public createResponse() {
      return new DeletePaymentModeResponse();
    }
  }

  // @Route("/payments/settings/product-collections", "POST")
  export class CreateOrUpdatePaymentProductCollection
    extends CodeMashRequestBase
    implements IReturn<CreateOrUpdatePaymentProductCollectionResponse> {
    public id: string;
    public name: string;
    public currency: string;
    public zone: string;
    public cluster: string;
    public collections: PaymentProductCollection[];

    public constructor(init?: Partial<CreateOrUpdatePaymentProductCollection>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'CreateOrUpdatePaymentProductCollection';
    }
    public getMethod() {
      return 'POST';
    }
    public createResponse() {
      return new CreateOrUpdatePaymentProductCollectionResponse();
    }
  }

  // @Route("/payments/settings/product-collections", "DELETE")
  export class DeletePaymentProductCollection
    extends CodeMashRequestBase
    implements IReturn<DeletePaymentProductCollectionResponse> {
    public id: string;

    public constructor(init?: Partial<DeletePaymentProductCollection>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'DeletePaymentProductCollection';
    }
    public getMethod() {
      return 'DELETE';
    }
    public createResponse() {
      return new DeletePaymentProductCollectionResponse();
    }
  }

  // @Route("/payments/settings", "PUT")
  export class UpdatePaymentSettings
    extends CodeMashRequestBase
    implements IReturn<UpdatePaymentSettingsResponse> {
    public setting: string;
    public payseraTimeLimit?: number;
    public allowGuests: boolean;
    public payseraAllowTest: boolean;
    public payseraOnlyPayments: string;
    public payseraBlockedPayments: string;
    public payseraLanguage: string;
    public payseraLanguageByIp: boolean;
    public orderPrefix: string;
    public stripeSubscriptionCancelInstant: boolean;
    public stripeSubscriptionRefundOnCancelInstant: boolean;
    public stripeSubscriptionRefundOnChange: boolean;
    public stripeApplyPreviousCouponOnChange: boolean;
    public stripeMaximumSubscriptions?: number;
    public fileAccountId?: string;

    public constructor(init?: Partial<UpdatePaymentSettings>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'UpdatePaymentSettings';
    }
    public getMethod() {
      return 'PUT';
    }
    public createResponse() {
      return new UpdatePaymentSettingsResponse();
    }
  }

  // @Route("/payments/triggers", "POST")
  export class CreatePaymentTrigger
    extends CodeMashRequestBase
    implements IReturn<CreatePaymentTriggerResponse> {
    public trigger: PaymentTriggerCreateDto;

    public constructor(init?: Partial<CreatePaymentTrigger>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'CreatePaymentTrigger';
    }
    public getMethod() {
      return 'POST';
    }
    public createResponse() {
      return new CreatePaymentTriggerResponse();
    }
  }

  // @Route("/payments/triggers/{id}", "DELETE")
  export class DeletePaymentTrigger
    extends CodeMashRequestBase
    implements IReturn<DeletePaymentTriggerResponse> {
    public id: string;

    public constructor(init?: Partial<DeletePaymentTrigger>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'DeletePaymentTrigger';
    }
    public getMethod() {
      return 'DELETE';
    }
    public createResponse() {
      return new DeletePaymentTriggerResponse();
    }
  }

  // @Route("/payments/triggers/{id}/disable", "PUT")
  export class DisablePaymentTrigger
    extends CodeMashRequestBase
    implements IReturn<DisablePaymentTriggerResponse> {
    public id: string;

    public constructor(init?: Partial<DisablePaymentTrigger>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'DisablePaymentTrigger';
    }
    public getMethod() {
      return 'PUT';
    }
    public createResponse() {
      return new DisablePaymentTriggerResponse();
    }
  }

  // @Route("/payments/triggers/{id}/enable", "PUT")
  export class EnablePaymentTrigger
    extends CodeMashRequestBase
    implements IReturn<EnablePaymentTriggerResponse> {
    public id: string;

    public constructor(init?: Partial<EnablePaymentTrigger>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'EnablePaymentTrigger';
    }
    public getMethod() {
      return 'PUT';
    }
    public createResponse() {
      return new EnablePaymentTriggerResponse();
    }
  }

  // @Route("/payments/triggers", "GET")
  export class GetPaymentTriggers
    extends CodeMashRequestBase
    implements IReturn<GetPaymentTriggersResponse> {
    public constructor(init?: Partial<GetPaymentTriggers>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'GetPaymentTriggers';
    }
    public getMethod() {
      return 'GET';
    }
    public createResponse() {
      return new GetPaymentTriggersResponse();
    }
  }

  // @Route("/payments/triggers/{id}", "PUT")
  export class UpdatePaymentTrigger
    extends CodeMashRequestBase
    implements IReturn<UpdatePaymentTriggerResponse> {
    public id: string;
    public trigger: PaymentTriggerCreateDto;

    public constructor(init?: Partial<UpdatePaymentTrigger>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'UpdatePaymentTrigger';
    }
    public getMethod() {
      return 'PUT';
    }
    public createResponse() {
      return new UpdatePaymentTriggerResponse();
    }
  }

  // @Route("/scheduler/tasks/{taskId}/logs/{id}", "GET")
  export class GetScheduledTaskLog
    extends CodeMashListRequestBase
    implements IReturn<GetScheduledTaskLogResponse> {
    public id: string;
    public taskId: string;

    public constructor(init?: Partial<GetScheduledTaskLog>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'GetScheduledTaskLog';
    }
    public getMethod() {
      return 'GET';
    }
    public createResponse() {
      return new GetScheduledTaskLogResponse();
    }
  }

  // @Route("/scheduler/tasks/{id}/logs", "GET")
  export class GetScheduledTaskLogs
    extends CodeMashListRequestBase
    implements IReturn<GetScheduledTaskLogsResponse> {
    public id: string;

    public constructor(init?: Partial<GetScheduledTaskLogs>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'GetScheduledTaskLogs';
    }
    public getMethod() {
      return 'GET';
    }
    public createResponse() {
      return new GetScheduledTaskLogsResponse();
    }
  }

  // @Route("/serverless/connections/amazon", "POST")
  export class CreateOrUpdateAmazonServerlessConnection
    extends CodeMashRequestBase
    implements IReturn<CreateOrUpdateAmazonServerlessConnectionResponse> {
    public accessKey: string;
    public secretKey: string;
    public newSecretKey: string;
    public regions: string[];
    public refreshRate: number;
    public tags: { [index: string]: string };

    public constructor(
      init?: Partial<CreateOrUpdateAmazonServerlessConnection>,
    ) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'CreateOrUpdateAmazonServerlessConnection';
    }
    public getMethod() {
      return 'POST';
    }
    public createResponse() {
      return new CreateOrUpdateAmazonServerlessConnectionResponse();
    }
  }

  // @Route("/serverless/connections/amazon/features-test", "POST")
  export class TestAmazonAccountConnection
    extends CodeMashRequestBase
    implements IReturn<TestAmazonAccountConnectionResponse> {
    public accessKey: string;
    public secretKey: string;
    public regions: string[];
    public refreshRate: number;
    public tags: { [index: string]: string };

    public constructor(init?: Partial<TestAmazonAccountConnection>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'TestAmazonAccountConnection';
    }
    public getMethod() {
      return 'POST';
    }
    public createResponse() {
      return new TestAmazonAccountConnectionResponse();
    }
  }

  // @Route("/serverless/connections/azure/auth/state", "POST")
  export class AzureConnectionAuthState
    extends CodeMashRequestBase
    implements IReturn<AzureConnectionAuthStateResponse> {
    public subscriptionId: string;
    public resourceGroup: string;
    public clientId: string;
    public secretKeys: { [index: string]: string };

    public constructor(init?: Partial<AzureConnectionAuthState>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'AzureConnectionAuthState';
    }
    public getMethod() {
      return 'POST';
    }
    public createResponse() {
      return new AzureConnectionAuthStateResponse();
    }
  }

  // @Route("/serverless/connections/azure", "POST")
  export class CreateOrUpdateAzureServerlessConnection
    implements IReturn<CreateOrUpdateAzureServerlessConnectionResponse> {
    public accessToken: string;
    public state: string;

    public constructor(
      init?: Partial<CreateOrUpdateAzureServerlessConnection>,
    ) {
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'CreateOrUpdateAzureServerlessConnection';
    }
    public getMethod() {
      return 'POST';
    }
    public createResponse() {
      return new CreateOrUpdateAzureServerlessConnectionResponse();
    }
  }

  /**
   * Sign In
   */
  // @Route("/serverless/connections/aad/auth", "GET POST")
  // @Api(Description="Sign In")
  export class AadConnectionAuthentication
    extends Authenticate
    implements IReturn<AuthenticateResponse> {
    public constructor(init?: Partial<AadConnectionAuthentication>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'AadConnectionAuthentication';
    }
    public getMethod() {
      return 'POST';
    }
    public createResponse() {
      return new AuthenticateResponse();
    }
  }

  // @Route("/serverless/connections/{provider}", "DELETE")
  export class DeleteServerlessConnection
    extends CodeMashRequestBase
    implements IReturn<DeleteServerlessConnectionResponse> {
    public provider: ServerlessProvider;

    public constructor(init?: Partial<DeleteServerlessConnection>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'DeleteServerlessConnection';
    }
    public getMethod() {
      return 'DELETE';
    }
    public createResponse() {
      return new DeleteServerlessConnectionResponse();
    }
  }

  // @Route("/serverless/connections/{provider}", "GET")
  export class GetServerlessConnection
    extends CodeMashRequestBase
    implements IReturn<GetServerlessConnectionResponse> {
    public provider: ServerlessProvider;

    public constructor(init?: Partial<GetServerlessConnection>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'GetServerlessConnection';
    }
    public getMethod() {
      return 'GET';
    }
    public createResponse() {
      return new GetServerlessConnectionResponse();
    }
  }

  // @Route("/serverless/connections", "GET")
  export class GetServerlessConnections
    extends CodeMashRequestBase
    implements IReturn<GetServerlessConnectionsResponse> {
    public constructor(init?: Partial<GetServerlessConnections>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'GetServerlessConnections';
    }
    public getMethod() {
      return 'GET';
    }
    public createResponse() {
      return new GetServerlessConnectionsResponse();
    }
  }

  // @Route("/serverless/connections/google", "POST")
  export class CreateOrUpdateGoogleServerlessConnection
    extends CodeMashRequestBase
    implements IReturn<CreateOrUpdateGoogleServerlessConnectionResponse> {
    public secretKey: string;
    public regions: string[];
    public refreshRate: number;
    public tags: { [index: string]: string };

    public constructor(
      init?: Partial<CreateOrUpdateGoogleServerlessConnection>,
    ) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'CreateOrUpdateGoogleServerlessConnection';
    }
    public getMethod() {
      return 'POST';
    }
    public createResponse() {
      return new CreateOrUpdateGoogleServerlessConnectionResponse();
    }
  }

  // @Route("/serverless/connections/google/features-test", "POST")
  export class TestGoogleAccountConnection
    extends CodeMashRequestBase
    implements IReturn<TestGoogleAccountConnectionResponse> {
    public secretKey: string;
    public regions: string[];
    public refreshRate: number;

    public constructor(init?: Partial<TestGoogleAccountConnection>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'TestGoogleAccountConnection';
    }
    public getMethod() {
      return 'POST';
    }
    public createResponse() {
      return new TestGoogleAccountConnectionResponse();
    }
  }

  // @Route("/serverless/disable", "GET")
  export class DisableServerless
    extends CodeMashRequestBase
    implements IReturn<DisableServerlessResponse> {
    public constructor(init?: Partial<DisableServerless>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'DisableServerless';
    }
    public getMethod() {
      return 'GET';
    }
    public createResponse() {
      return new DisableServerlessResponse();
    }
  }

  // @Route("/serverless/enable", "POST")
  export class EnableServerless
    extends CodeMashRequestBase
    implements IReturn<EnableServerlessResponse> {
    public model: ConnectionProperties;

    public constructor(init?: Partial<EnableServerless>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'EnableServerless';
    }
    public getMethod() {
      return 'POST';
    }
    public createResponse() {
      return new EnableServerlessResponse();
    }
  }

  // @Route("/serverless/system/functions/{id}", "POST")
  export class AddSystemFunction
    extends CodeMashRequestBase
    implements IReturn<AddSystemFunctionResponse> {
    public id: string;
    public meta: { [index: string]: string };
    public template: string;
    public displayName: string;
    public description: string;
    public timeoutMinutes: number;
    public timeoutSeconds: number;
    public memory: number;
    public availableTokens: string[];
    public tokenResolvers: { [index: string]: TokenResolverField };
    public tags: string[];

    public constructor(init?: Partial<AddSystemFunction>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'AddSystemFunction';
    }
    public getMethod() {
      return 'POST';
    }
    public createResponse() {
      return new AddSystemFunctionResponse();
    }
  }

  // @Route("/serverless/custom/functions/{id}/aliases", "POST")
  export class CreateCustomFunctionAlias
    extends CodeMashRequestBase
    implements IReturn<CreateCustomFunctionAliasResponse> {
    public id: string;
    public name: string;
    public description: string;
    public additionalVersion: string;
    public additionalVersionWeight: number;

    public constructor(init?: Partial<CreateCustomFunctionAlias>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'CreateCustomFunctionAlias';
    }
    public getMethod() {
      return 'POST';
    }
    public createResponse() {
      return new CreateCustomFunctionAliasResponse();
    }
  }

  // @Route("/serverless/custom/functions/{id}/aliases/{name}", "DELETE")
  export class DeleteCustomFunctionAlias
    extends CodeMashRequestBase
    implements IReturn<DeleteCustomFunctionAliasResponse> {
    public id: string;
    public name: string;

    public constructor(init?: Partial<DeleteCustomFunctionAlias>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'DeleteCustomFunctionAlias';
    }
    public getMethod() {
      return 'DELETE';
    }
    public createResponse() {
      return new DeleteCustomFunctionAliasResponse();
    }
  }

  // @Route("/serverless/custom/functions/{id}/aliases/{name}", "PUT")
  export class UpdateCustomFunctionAlias
    extends CodeMashRequestBase
    implements IReturn<UpdateCustomFunctionAliasResponse> {
    public id: string;
    public name: string;
    public description: string;
    public additionalVersion: string;
    public additionalVersionWeight: number;

    public constructor(init?: Partial<UpdateCustomFunctionAlias>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'UpdateCustomFunctionAlias';
    }
    public getMethod() {
      return 'PUT';
    }
    public createResponse() {
      return new UpdateCustomFunctionAliasResponse();
    }
  }

  // @Route("/serverless/custom/functions", "POST")
  export class CreateCustomFunction
    extends CodeMashRequestBase
    implements IReturn<CreateCustomFunctionResponse> {
    public fileId: string;
    public displayName: string;
    public runtime: string;
    public handler: string;
    public description: string;
    public timeoutMinutes: number;
    public timeoutSeconds: number;
    public memory: number;
    public environment: { [index: string]: string };
    public template: string;
    public tags: string[];
    public serviceAccount: string;

    public constructor(init?: Partial<CreateCustomFunction>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'CreateCustomFunction';
    }
    public getMethod() {
      return 'POST';
    }
    public createResponse() {
      return new CreateCustomFunctionResponse();
    }
  }

  // @Route("/serverless/custom/functions/{id}", "PUT")
  export class UpdateCustomFunction
    extends CodeMashRequestBase
    implements IReturn<UpdateCustomFunctionResponse> {
    public id: string;
    public displayName: string;
    public runtime: string;
    public handler: string;
    public description: string;
    public timeoutMinutes: number;
    public timeoutSeconds: number;
    public memory: number;
    public environment: { [index: string]: string };
    public template: string;
    public tags: string[];
    public serviceAccount: string;

    public constructor(init?: Partial<UpdateCustomFunction>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'UpdateCustomFunction';
    }
    public getMethod() {
      return 'PUT';
    }
    public createResponse() {
      return new UpdateCustomFunctionResponse();
    }
  }

  // @Route("/serverless/custom/functions/{id}/code", "PUT")
  export class UpdateCustomFunctionCode
    extends CodeMashRequestBase
    implements IReturn<UpdateCustomFunctionCodeResponse> {
    public id: string;
    public fileId: string;

    public constructor(init?: Partial<UpdateCustomFunctionCode>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'UpdateCustomFunctionCode';
    }
    public getMethod() {
      return 'PUT';
    }
    public createResponse() {
      return new UpdateCustomFunctionCodeResponse();
    }
  }

  // @Route("/serverless/custom/functions/upload", "POST")
  export class UploadFunctionFile
    extends CodeMashRequestBase
    implements IReturn<UploadFunctionFileResponse> {
    public fileAccountId?: string;

    public constructor(init?: Partial<UploadFunctionFile>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'UploadFunctionFile';
    }
    public getMethod() {
      return 'POST';
    }
    public createResponse() {
      return new UploadFunctionFileResponse();
    }
  }

  // @Route("/serverless/custom/functions/{id}/versions", "POST")
  export class CreateCustomFunctionVersion
    extends CodeMashRequestBase
    implements IReturn<CreateCustomFunctionVersionResponse> {
    public id: string;
    public description: string;

    public constructor(init?: Partial<CreateCustomFunctionVersion>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'CreateCustomFunctionVersion';
    }
    public getMethod() {
      return 'POST';
    }
    public createResponse() {
      return new CreateCustomFunctionVersionResponse();
    }
  }

  // @Route("/serverless/custom/functions/{id}/versions/{version}", "DELETE")
  export class DeleteCustomFunctionVersion
    extends CodeMashRequestBase
    implements IReturn<DeleteCustomFunctionVersionResponse> {
    public id: string;

    public constructor(init?: Partial<DeleteCustomFunctionVersion>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'DeleteCustomFunctionVersion';
    }
    public getMethod() {
      return 'DELETE';
    }
    public createResponse() {
      return new DeleteCustomFunctionVersionResponse();
    }
  }

  // @Route("/serverless/functions/{id}/execute", "POST")
  export class ExecuteTestFunction
    extends CodeMashRequestBase
    implements IReturn<ExecuteTestFunctionResponse> {
    public id: string;

    public constructor(init?: Partial<ExecuteTestFunction>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'ExecuteTestFunction';
    }
    public getMethod() {
      return 'POST';
    }
    public createResponse() {
      return new ExecuteTestFunctionResponse();
    }
  }

  // @Route("/serverless/functions/{id}/usage", "GET")
  export class GetFunctionUsage
    extends CodeMashRequestBase
    implements IReturn<GetFunctionUsageResponse> {
    public id: string;

    public constructor(init?: Partial<GetFunctionUsage>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'GetFunctionUsage';
    }
    public getMethod() {
      return 'GET';
    }
    public createResponse() {
      return new GetFunctionUsageResponse();
    }
  }

  // @Route("/serverless/system/functions/{id}", "GET")
  export class GetSystemFunction
    extends CodeMashRequestBase
    implements IReturn<GetSystemFunctionResponse> {
    public id: string;

    public constructor(init?: Partial<GetSystemFunction>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'GetSystemFunction';
    }
    public getMethod() {
      return 'GET';
    }
    public createResponse() {
      return new GetSystemFunctionResponse();
    }
  }

  // @Route("/serverless/system/functions", "GET")
  export class GetSystemFunctions
    extends CodeMashListRequestBase
    implements IReturn<GetSystemFunctionsResponse> {
    public excludeEnabled: boolean;

    public constructor(init?: Partial<GetSystemFunctions>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'GetSystemFunctions';
    }
    public getMethod() {
      return 'GET';
    }
    public createResponse() {
      return new GetSystemFunctionsResponse();
    }
  }

  // @Route("/serverless/connections/{provider}/functions/reload", "GET")
  export class ReloadServerlessFunctions
    extends CodeMashRequestBase
    implements IReturn<ReloadServerlessFunctionsResponse> {
    public provider: ServerlessProvider;

    public constructor(init?: Partial<ReloadServerlessFunctions>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'ReloadServerlessFunctions';
    }
    public getMethod() {
      return 'GET';
    }
    public createResponse() {
      return new ReloadServerlessFunctionsResponse();
    }
  }

  // @Route("/serverless/functions/{id}", "DELETE")
  export class RemoveFunction
    extends CodeMashRequestBase
    implements IReturn<RemoveFunctionResponse> {
    public id: string;

    public constructor(init?: Partial<RemoveFunction>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'RemoveFunction';
    }
    public getMethod() {
      return 'DELETE';
    }
    public createResponse() {
      return new RemoveFunctionResponse();
    }
  }

  // @Route("/serverless/functions/{id}/scheduler/execute", "POST")
  export class TestSchedulerFunction
    extends CodeMashRequestBase
    implements IReturn<TestSchedulerFunctionResponse> {
    public id: string;

    public constructor(init?: Partial<TestSchedulerFunction>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'TestSchedulerFunction';
    }
    public getMethod() {
      return 'POST';
    }
    public createResponse() {
      return new TestSchedulerFunctionResponse();
    }
  }

  // @Route("/serverless/system/functions/{id}/config/collections", "GET")
  export class GetCollectionTriggerFunctionConfig
    extends CodeMashDbRequestBase
    implements IReturn<GetCollectionTriggerFunctionConfigResponse> {
    public id: string;

    public constructor(init?: Partial<GetCollectionTriggerFunctionConfig>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'GetCollectionTriggerFunctionConfig';
    }
    public getMethod() {
      return 'GET';
    }
    public createResponse() {
      return new GetCollectionTriggerFunctionConfigResponse();
    }
  }

  // @Route("/serverless/system/functions/{id}/config/files", "GET")
  export class GetFilesTriggerFunctionConfig
    extends CodeMashRequestBase
    implements IReturn<GetFilesTriggerFunctionConfigResponse> {
    public id: string;

    public constructor(init?: Partial<GetFilesTriggerFunctionConfig>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'GetFilesTriggerFunctionConfig';
    }
    public getMethod() {
      return 'GET';
    }
    public createResponse() {
      return new GetFilesTriggerFunctionConfigResponse();
    }
  }

  // @Route("/serverless/system/functions/{id}/config/payments", "GET")
  export class GetPaymentsTriggerFunctionConfig
    extends CodeMashRequestBase
    implements IReturn<GetPaymentsTriggerFunctionConfigResponse> {
    public id: string;

    public constructor(init?: Partial<GetPaymentsTriggerFunctionConfig>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'GetPaymentsTriggerFunctionConfig';
    }
    public getMethod() {
      return 'GET';
    }
    public createResponse() {
      return new GetPaymentsTriggerFunctionConfigResponse();
    }
  }

  // @Route("/serverless/system/functions/{id}/config/users", "GET")
  export class GetUsersTriggerFunctionConfig
    extends CodeMashRequestBase
    implements IReturn<GetUsersTriggerFunctionConfigResponse> {
    public id: string;

    public constructor(init?: Partial<GetUsersTriggerFunctionConfig>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'GetUsersTriggerFunctionConfig';
    }
    public getMethod() {
      return 'GET';
    }
    public createResponse() {
      return new GetUsersTriggerFunctionConfigResponse();
    }
  }

  // @Route("/serverless/functions/{id}", "PUT")
  export class UpdateFunction
    extends CodeMashRequestBase
    implements IReturn<UpdateFunctionResponse> {
    public id: string;
    public template: string;
    public displayName: string;
    public description: string;
    public meta: { [index: string]: string };
    public timeoutMinutes: number;
    public timeoutSeconds: number;
    public memory: number;
    public availableTokens: string[];
    public tokenResolvers: { [index: string]: TokenResolverField };
    public tags: string[];
    public serviceAccount: string;

    public constructor(init?: Partial<UpdateFunction>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'UpdateFunction';
    }
    public getMethod() {
      return 'PUT';
    }
    public createResponse() {
      return new UpdateFunctionResponse();
    }
  }

  // @Route("/serverless/functions/files/upload", "POST")
  export class UploadServerlessFile
    extends CodeMashRequestBase
    implements IReturn<UploadServerlessFileResponse> {
    public fileAccountId?: string;

    public constructor(init?: Partial<UploadServerlessFile>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'UploadServerlessFile';
    }
    public getMethod() {
      return 'POST';
    }
    public createResponse() {
      return new UploadServerlessFileResponse();
    }
  }

  // @Route("/serverless/settings/cache/aad", "POST")
  export class ClearAadFunctionsKeyCache
    extends CodeMashRequestBase
    implements IReturn<ClearAadFunctionsKeyCacheResponse> {
    public constructor(init?: Partial<ClearAadFunctionsKeyCache>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'ClearAadFunctionsKeyCache';
    }
    public getMethod() {
      return 'POST';
    }
    public createResponse() {
      return new ClearAadFunctionsKeyCacheResponse();
    }
  }

  // @Route("/taxonomies/{taxonomyName}/terms", "GET")
  export class GetSystemTerms
    extends CodeMashRequestBase
    implements IReturn<GetSystemTermsResponse> {
    public taxonomyName: string;

    public constructor(init?: Partial<GetSystemTerms>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'GetSystemTerms';
    }
    public getMethod() {
      return 'GET';
    }
    public createResponse() {
      return new GetSystemTermsResponse();
    }
  }

  // @Route("/files/tokens/keys", "GET")
  export class GetFileTokenKeys
    extends CodeMashRequestBase
    implements IReturn<GetFileTokenKeysResponse> {
    public constructor(init?: Partial<GetFileTokenKeys>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'GetFileTokenKeys';
    }
    public getMethod() {
      return 'GET';
    }
    public createResponse() {
      return new GetFileTokenKeysResponse();
    }
  }

  // @Route("/payments/tokens/keys", "GET")
  export class GetPaymentTokenKeys
    extends CodeMashRequestBase
    implements IReturn<GetPaymentTokenKeysResponse> {
    public constructor(init?: Partial<GetPaymentTokenKeys>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'GetPaymentTokenKeys';
    }
    public getMethod() {
      return 'GET';
    }
    public createResponse() {
      return new GetPaymentTokenKeysResponse();
    }
  }

  // @Route("/projects/{projectId}/tokens/keys", "GET")
  export class GetProjectTokenKeys
    extends CodeMashRequestBase
    implements IReturn<GetProjectTokenKeysResponse> {
    public constructor(init?: Partial<GetProjectTokenKeys>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'GetProjectTokenKeys';
    }
    public getMethod() {
      return 'GET';
    }
    public createResponse() {
      return new GetProjectTokenKeysResponse();
    }
  }

  // @Route("/users/tokens/keys", "GET")
  export class GetUserTokenKeys
    extends CodeMashRequestBase
    implements IReturn<GetUserTokenKeysResponse> {
    public constructor(init?: Partial<GetUserTokenKeys>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'GetUserTokenKeys';
    }
    public getMethod() {
      return 'GET';
    }
    public createResponse() {
      return new GetUserTokenKeysResponse();
    }
  }

  export class GetEstablishedProjectModules
    extends CodeMashRequestBase
    implements IReturn<GetEstablishedProjectModulesResponse> {
    public constructor(init?: Partial<GetEstablishedProjectModules>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'GetEstablishedProjectModules';
    }
    public getMethod() {
      return 'POST';
    }
    public createResponse() {
      return new GetEstablishedProjectModulesResponse();
    }
  }

  // @Route("/timezones", "GET")
  export class GetTimeZones implements IReturn<GetTimeZonesResponse> {
    public constructor(init?: Partial<GetTimeZones>) {
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'GetTimeZones';
    }
    public getMethod() {
      return 'GET';
    }
    public createResponse() {
      return new GetTimeZonesResponse();
    }
  }

  export class EnableMarketing
    extends CodeMashRequestBase
    implements IReturn<EnableMarketingResponse> {
    public constructor(init?: Partial<EnableMarketing>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'EnableMarketing';
    }
    public getMethod() {
      return 'POST';
    }
    public createResponse() {
      return new EnableMarketingResponse();
    }
  }

  export class ImportContacts
    extends CodeMashRequestBase
    implements IReturn<ImportContactsResponse> {
    public importOptions: string;
    public tags: string;

    public constructor(init?: Partial<ImportContacts>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'ImportContacts';
    }
    public getMethod() {
      return 'POST';
    }
    public createResponse() {
      return new ImportContactsResponse();
    }
  }

  export class CreateCampaign
    extends CodeMashRequestBase
    implements IReturn<CreateCampaignResponse> {
    public templateId: string;
    public title: string;
    public description: string;
    public sendDate: string;
    public type: CampaignType;
    public repeatType: CampaignRepeatType;
    public target: CampaignTargetType;
    public isDraft: boolean;
    public tokens: string;
    public tags: string;

    public constructor(init?: Partial<CreateCampaign>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'CreateCampaign';
    }
    public getMethod() {
      return 'POST';
    }
    public createResponse() {
      return new CreateCampaignResponse();
    }
  }

  export class DeleteCampaign
    extends CodeMashRequestBase
    implements IReturn<DeleteCampaignResponse> {
    public id: string;

    public constructor(init?: Partial<DeleteCampaign>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'DeleteCampaign';
    }
    public getMethod() {
      return 'POST';
    }
    public createResponse() {
      return new DeleteCampaignResponse();
    }
  }

  export class GetCampaign
    extends CodeMashRequestBase
    implements IReturn<GetCampaignResponse> {
    public id: string;

    public constructor(init?: Partial<GetCampaign>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'GetCampaign';
    }
    public getMethod() {
      return 'POST';
    }
    public createResponse() {
      return new GetCampaignResponse();
    }
  }

  export class GetCampaigns
    extends CodeMashRequestBase
    implements IReturn<GetCampaignsResponse> {
    public status: number;

    public constructor(init?: Partial<GetCampaigns>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'GetCampaigns';
    }
    public getMethod() {
      return 'POST';
    }
    public createResponse() {
      return new GetCampaignsResponse();
    }
  }

  // @Route("/payments/discounts/{id}/enabled", "PUT")
  export class TogglePaymentDiscountEnabled
    extends CodeMashRequestBase
    implements IReturn<TogglePaymentDiscountEnabledResponse> {
    public id: string;

    public constructor(init?: Partial<TogglePaymentDiscountEnabled>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'TogglePaymentDiscountEnabled';
    }
    public getMethod() {
      return 'PUT';
    }
    public createResponse() {
      return new TogglePaymentDiscountEnabledResponse();
    }
  }

  // @Route("/scheduler/disable", "GET")
  export class DisableScheduler
    extends CodeMashRequestBase
    implements IReturn<DisableSchedulerResponse> {
    public constructor(init?: Partial<DisableScheduler>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'DisableScheduler';
    }
    public getMethod() {
      return 'GET';
    }
    public createResponse() {
      return new DisableSchedulerResponse();
    }
  }

  // @Route("/scheduler/enable", "GET")
  export class EnableScheduler
    extends CodeMashRequestBase
    implements IReturn<EnableSchedulerResponse> {
    public constructor(init?: Partial<EnableScheduler>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'EnableScheduler';
    }
    public getMethod() {
      return 'GET';
    }
    public createResponse() {
      return new EnableSchedulerResponse();
    }
  }

  // @Route("/scheduler/tasks", "POST")
  export class CreateScheduledTask
    extends CodeMashRequestBase
    implements IReturn<CreateScheduledTaskResponse> {
    public title: string;
    public description: string;
    public startDate: string;
    public repeatType: SchedulerRepeatType;
    public repeatInterval?: number;
    public endDate: string;
    public stopOnError: boolean;
    public provider: ServerlessProvider;
    public functionId: string;
    public qualifier: string;
    public qualifierIsAlias: boolean;
    public metaData: string;

    public constructor(init?: Partial<CreateScheduledTask>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'CreateScheduledTask';
    }
    public getMethod() {
      return 'POST';
    }
    public createResponse() {
      return new CreateScheduledTaskResponse();
    }
  }

  // @Route("/scheduler/tasks/{id}", "DELETE")
  export class DeleteScheduledTask
    extends CodeMashRequestBase
    implements IReturn<DeleteScheduledTaskResponse> {
    public id: string;

    public constructor(init?: Partial<DeleteScheduledTask>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'DeleteScheduledTask';
    }
    public getMethod() {
      return 'DELETE';
    }
    public createResponse() {
      return new DeleteScheduledTaskResponse();
    }
  }

  // @Route("/scheduler/tasks/{id}", "GET")
  export class GetScheduledTask
    extends CodeMashRequestBase
    implements IReturn<GetScheduledTaskResponse> {
    public id: string;

    public constructor(init?: Partial<GetScheduledTask>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'GetScheduledTask';
    }
    public getMethod() {
      return 'GET';
    }
    public createResponse() {
      return new GetScheduledTaskResponse();
    }
  }

  // @Route("/scheduler/tasks", "GET")
  export class GetScheduledTasks
    extends CodeMashListRequestBase
    implements IReturn<GetScheduledTasksResponse> {
    public constructor(init?: Partial<GetScheduledTasks>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'GetScheduledTasks';
    }
    public getMethod() {
      return 'GET';
    }
    public createResponse() {
      return new GetScheduledTasksResponse();
    }
  }

  // @Route("/scheduler/tasks/{id}/execute", "POST")
  export class RunScheduledTask
    extends CodeMashRequestBase
    implements IReturn<RunScheduledTaskResponse> {
    public id: string;

    public constructor(init?: Partial<RunScheduledTask>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'RunScheduledTask';
    }
    public getMethod() {
      return 'POST';
    }
    public createResponse() {
      return new RunScheduledTaskResponse();
    }
  }

  // @Route("/scheduler/tasks/{id}/enabled", "PUT")
  export class ToggleScheduledTaskEnabled
    extends CodeMashRequestBase
    implements IReturn<ToggleScheduledTaskEnabledResponse> {
    public id: string;

    public constructor(init?: Partial<ToggleScheduledTaskEnabled>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'ToggleScheduledTaskEnabled';
    }
    public getMethod() {
      return 'PUT';
    }
    public createResponse() {
      return new ToggleScheduledTaskEnabledResponse();
    }
  }

  export class ToggleScheduledTaskOnError
    extends CodeMashRequestBase
    implements IReturn<ToggleScheduledTaskOnErrorResponse> {
    public id: string;

    public constructor(init?: Partial<ToggleScheduledTaskOnError>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'ToggleScheduledTaskOnError';
    }
    public getMethod() {
      return 'POST';
    }
    public createResponse() {
      return new ToggleScheduledTaskOnErrorResponse();
    }
  }

  // @Route("/scheduler/tasks/{id}", "PUT")
  export class UpdateScheduledTask
    extends CodeMashRequestBase
    implements IReturn<UpdateScheduledTaskResponse> {
    public id: string;
    public title: string;
    public description: string;
    public type: SchedulerType;
    public startDate: string;
    public repeatType: SchedulerRepeatType;
    public repeatInterval?: number;
    public endDate: string;
    public stopOnError: boolean;
    public provider: ServerlessProvider;
    public functionId: string;
    public qualifier: string;
    public qualifierIsAlias: boolean;
    public metaData: string;

    public constructor(init?: Partial<UpdateScheduledTask>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'UpdateScheduledTask';
    }
    public getMethod() {
      return 'PUT';
    }
    public createResponse() {
      return new UpdateScheduledTaskResponse();
    }
  }

  // @Route("/notifications/push/devices/bulk", "DELETE")
  export class DeleteManyDevices
    extends CodeMashRequestBase
    implements IReturn<DeleteManyDevicesResponse> {
    // @DataMember(Name="ids[]")
    public ids: string[];

    public constructor(init?: Partial<DeleteManyDevices>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'DeleteManyDevices';
    }
    public getMethod() {
      return 'DELETE';
    }
    public createResponse() {
      return new DeleteManyDevicesResponse();
    }
  }

  // @Route("/notifications/push/devices/metadata", "GET")
  export class GetDevicesMetaData
    extends CodeMashRequestBase
    implements IReturn<GetDevicesMetaDataResponse> {
    public constructor(init?: Partial<GetDevicesMetaData>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'GetDevicesMetaData';
    }
    public getMethod() {
      return 'GET';
    }
    public createResponse() {
      return new GetDevicesMetaDataResponse();
    }
  }

  // @Route("/notifications/push/disable", "GET")
  export class DisableNotification
    extends CodeMashRequestBase
    implements IReturn<DisableNotificationResponse> {
    public constructor(init?: Partial<DisableNotification>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'DisableNotification';
    }
    public getMethod() {
      return 'GET';
    }
    public createResponse() {
      return new DisableNotificationResponse();
    }
  }

  // @Route("/notifications/push/enable", "POST")
  export class EnableNotification
    extends CodeMashRequestBase
    implements IReturn<EnableNotificationResponse> {
    public model: PushAccountProperties;

    public constructor(init?: Partial<EnableNotification>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'EnableNotification';
    }
    public getMethod() {
      return 'POST';
    }
    public createResponse() {
      return new EnableNotificationResponse();
    }
  }

  export class DisableTranslation
    extends CodeMashRequestBase
    implements IReturn<DisableTranslationResponse> {
    public constructor(init?: Partial<DisableTranslation>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'DisableTranslation';
    }
    public getMethod() {
      return 'POST';
    }
    public createResponse() {
      return new DisableTranslationResponse();
    }
  }

  export class EnableTranslation
    extends CodeMashRequestBase
    implements IReturn<EnableTranslationResponse> {
    public constructor(init?: Partial<EnableTranslation>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'EnableTranslation';
    }
    public getMethod() {
      return 'POST';
    }
    public createResponse() {
      return new EnableTranslationResponse();
    }
  }

  // @Route("/membership/functions", "GET")
  export class GetUserFunctions
    extends CodeMashDbRequestBase
    implements IReturn<GetUserFunctionsResponse> {
    public isList: boolean;

    public constructor(init?: Partial<GetUserFunctions>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'GetUserFunctions';
    }
    public getMethod() {
      return 'GET';
    }
    public createResponse() {
      return new GetUserFunctionsResponse();
    }
  }

  // @Route("/serverless/functions/{id}", "GET")
  export class GetFunction
    extends CodeMashRequestBase
    implements IReturn<GetFunctionResponse> {
    public id: string;

    public constructor(init?: Partial<GetFunction>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'GetFunction';
    }
    public getMethod() {
      return 'GET';
    }
    public createResponse() {
      return new GetFunctionResponse();
    }
  }

  // @Route("/serverless/functions", "GET")
  export class GetFunctions
    extends CodeMashRequestBase
    implements IReturn<GetFunctionsResponse> {
    public provider: ServerlessProvider;
    public usage: TriggerUsages;
    public forScheduler: boolean;

    public constructor(init?: Partial<GetFunctions>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'GetFunctions';
    }
    public getMethod() {
      return 'GET';
    }
    public createResponse() {
      return new GetFunctionsResponse();
    }
  }

  // @Route("/serverless/functions/tags", "GET")
  export class GetFunctionTags
    extends CodeMashRequestBase
    implements IReturn<GetFunctionTagsResponse> {
    public constructor(init?: Partial<GetFunctionTags>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'GetFunctionTags';
    }
    public getMethod() {
      return 'GET';
    }
    public createResponse() {
      return new GetFunctionTagsResponse();
    }
  }

  // @Route("/membership/disable", "GET")
  export class DisableMembership
    extends CodeMashRequestBase
    implements IReturn<DisableMembershipResponse> {
    public constructor(init?: Partial<DisableMembership>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'DisableMembership';
    }
    public getMethod() {
      return 'GET';
    }
    public createResponse() {
      return new DisableMembershipResponse();
    }
  }

  // @Route("/membership/enable", "GET")
  export class EnableMembership
    extends CodeMashRequestBase
    implements IReturn<EnableMembershipResponse> {
    public constructor(init?: Partial<EnableMembership>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'EnableMembership';
    }
    public getMethod() {
      return 'GET';
    }
    public createResponse() {
      return new EnableMembershipResponse();
    }
  }

  // @Route("/membership/users/{id}/reactivate", "POST")
  export class ReactivateUser
    extends CodeMashRequestBase
    implements IReturn<ReactivateUserResponse>, IRequestBase {
    public id: string;

    public constructor(init?: Partial<ReactivateUser>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'ReactivateUser';
    }
    public getMethod() {
      return 'POST';
    }
    public createResponse() {
      return new ReactivateUserResponse();
    }
  }

  // @Route("/membership/users/service/{id}/key/regenerate", "PUT")
  export class RegenerateServiceUserToken
    extends CodeMashRequestBase
    implements IReturn<RegenerateServiceUserTokenResponse> {
    public id: string;

    public constructor(init?: Partial<RegenerateServiceUserToken>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'RegenerateServiceUserToken';
    }
    public getMethod() {
      return 'PUT';
    }
    public createResponse() {
      return new RegenerateServiceUserTokenResponse();
    }
  }

  // @Route("/membership/users/service/register", "POST")
  export class RegisterServiceUser
    extends CodeMashRequestBase
    implements IReturn<RegisterServiceUserResponse> {
    public displayName: string;
    public zone: string;
    public rolesTree: UserRoleUpdateInput[];

    public constructor(init?: Partial<RegisterServiceUser>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'RegisterServiceUser';
    }
    public getMethod() {
      return 'POST';
    }
    public createResponse() {
      return new RegisterServiceUserResponse();
    }
  }

  // @Route("/membership/users/service", "PUT")
  export class UpdateServiceUser
    extends CodeMashRequestBase
    implements IReturn<UpdateServiceUserResponse>, IRequestBase {
    public id: string;
    public displayName: string;
    public zone: string;
    public rolesTree: UserRoleUpdateInput[];

    public constructor(init?: Partial<UpdateServiceUser>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'UpdateServiceUser';
    }
    public getMethod() {
      return 'PUT';
    }
    public createResponse() {
      return new UpdateServiceUserResponse();
    }
  }

  // @Route("/membership/users/meta", "PUT")
  export class UpdateUserMetaSchema
    extends CodeMashRequestBase
    implements IReturn<UpdateUserMetaSchemaResponse>, IRequestBase {
    public jsonSchema: string;
    public uiSchema: string;

    public constructor(init?: Partial<UpdateUserMetaSchema>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'UpdateUserMetaSchema';
    }
    public getMethod() {
      return 'PUT';
    }
    public createResponse() {
      return new UpdateUserMetaSchemaResponse();
    }
  }

  // @Route("/membership/authentication", "GET")
  export class GetAuthenticationSettings
    extends CodeMashRequestBase
    implements IReturn<GetAuthenticationSettingsResponse> {
    public constructor(init?: Partial<GetAuthenticationSettings>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'GetAuthenticationSettings';
    }
    public getMethod() {
      return 'GET';
    }
    public createResponse() {
      return new GetAuthenticationSettingsResponse();
    }
  }

  // @Route("/membership/authorization", "GET")
  export class GetAuthorizationSettings
    extends CodeMashRequestBase
    implements IReturn<GetAuthorizationSettingsResponse> {
    public constructor(init?: Partial<GetAuthorizationSettings>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'GetAuthorizationSettings';
    }
    public getMethod() {
      return 'GET';
    }
    public createResponse() {
      return new GetAuthorizationSettingsResponse();
    }
  }

  // @Route("/membership/policies/{policy}/permissions/{permission}/apply", "POST")
  export class ApplyPermissionToUsers
    extends CodeMashRequestBase
    implements IReturn<ApplyPermissionToUsersResponse> {
    public permission: string;
    public policy: string;

    public constructor(init?: Partial<ApplyPermissionToUsers>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'ApplyPermissionToUsers';
    }
    public getMethod() {
      return 'POST';
    }
    public createResponse() {
      return new ApplyPermissionToUsersResponse();
    }
  }

  // @Route("/membership/policies/{policy}/permissions/{permission}", "GET")
  export class GetUsersPermissionDetails
    extends CodeMashRequestBase
    implements IReturn<GetUsersPermissionDetailsResponse> {
    public policy: string;
    public permission: string;

    public constructor(init?: Partial<GetUsersPermissionDetails>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'GetUsersPermissionDetails';
    }
    public getMethod() {
      return 'GET';
    }
    public createResponse() {
      return new GetUsersPermissionDetailsResponse();
    }
  }

  // @Route("/membership/policies/{policy}/permissions/{permission}/revoke", "POST")
  export class RevokePermissionFromUsers
    extends CodeMashRequestBase
    implements IReturn<RevokePermissionFromUsersResponse> {
    public policy: string;
    public permission: string;

    public constructor(init?: Partial<RevokePermissionFromUsers>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'RevokePermissionFromUsers';
    }
    public getMethod() {
      return 'POST';
    }
    public createResponse() {
      return new RevokePermissionFromUsersResponse();
    }
  }

  // @Route("/membership/policies", "POST")
  export class CretePolicy
    extends CodeMashRequestBase
    implements IReturn<CretePolicyResponse> {
    public name: string;
    public permissions: string[];

    public constructor(init?: Partial<CretePolicy>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'CretePolicy';
    }
    public getMethod() {
      return 'POST';
    }
    public createResponse() {
      return new CretePolicyResponse();
    }
  }

  // @Route("/membership/policies/{name}", "DELETE")
  export class DeletePolicy
    extends CodeMashRequestBase
    implements IReturn<DeletePolicyResponse> {
    public name: string;

    public constructor(init?: Partial<DeletePolicy>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'DeletePolicy';
    }
    public getMethod() {
      return 'DELETE';
    }
    public createResponse() {
      return new DeletePolicyResponse();
    }
  }

  // @Route("/membership/policies", "GET")
  export class GetPolicies
    extends CodeMashRequestBase
    implements IReturn<GetPoliciesResponse> {
    public includePermissions: boolean;
    public roleName: string;

    public constructor(init?: Partial<GetPolicies>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'GetPolicies';
    }
    public getMethod() {
      return 'GET';
    }
    public createResponse() {
      return new GetPoliciesResponse();
    }
  }

  // @Route("/membership/policies/{name}", "GET")
  export class GetPolicy
    extends CodeMashRequestBase
    implements IReturn<GetPolicyResponse> {
    public name: string;

    public constructor(init?: Partial<GetPolicy>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'GetPolicy';
    }
    public getMethod() {
      return 'GET';
    }
    public createResponse() {
      return new GetPolicyResponse();
    }
  }

  // @Route("/system/policies", "GET")
  export class GetSystemPolicies
    extends CodeMashRequestBase
    implements IReturn<GetSystemPoliciesResponse> {
    public policy: string;

    public constructor(init?: Partial<GetSystemPolicies>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'GetSystemPolicies';
    }
    public getMethod() {
      return 'GET';
    }
    public createResponse() {
      return new GetSystemPoliciesResponse();
    }
  }

  // @Route("/membership/policies/{formerName}", "PUT")
  export class UpdatePolicy
    extends CodeMashRequestBase
    implements IReturn<UpdatePolicyResponse> {
    public formerName: string;
    public name: string;
    public permissions: string[];

    public constructor(init?: Partial<UpdatePolicy>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'UpdatePolicy';
    }
    public getMethod() {
      return 'PUT';
    }
    public createResponse() {
      return new UpdatePolicyResponse();
    }
  }

  // @Route("/membership/users/meta", "GET")
  export class GetUserMetaSchema
    extends CodeMashRequestBase
    implements IReturn<GetUserMetaSchemaResponse> {
    public constructor(init?: Partial<GetUserMetaSchema>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'GetUserMetaSchema';
    }
    public getMethod() {
      return 'GET';
    }
    public createResponse() {
      return new GetUserMetaSchemaResponse();
    }
  }

  // @Route("/payments/settings", "GET")
  export class GetPaymentSettings
    extends CodeMashRequestBase
    implements IReturn<GetPaymentSettingsResponse> {
    public constructor(init?: Partial<GetPaymentSettings>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'GetPaymentSettings';
    }
    public getMethod() {
      return 'GET';
    }
    public createResponse() {
      return new GetPaymentSettingsResponse();
    }
  }

  // @Route("/membership/authentication/apple/disable", "GET")
  export class DisableAppleAuthentication
    extends CodeMashRequestBase
    implements IReturn<DisableAppleAuthenticationResponse> {
    public constructor(init?: Partial<DisableAppleAuthentication>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'DisableAppleAuthentication';
    }
    public getMethod() {
      return 'GET';
    }
    public createResponse() {
      return new DisableAppleAuthenticationResponse();
    }
  }

  // @Route("/membership/authentication/apple/enable", "POST")
  export class EnableAppleAuthentication
    extends CodeMashRequestBase
    implements IReturn<EnableAppleAuthenticationResponse> {
    public serviceId: string;
    public clientSecret: string;
    public keyId: string;
    public bundleId: string;
    public teamId: string;
    public redirectUrl: string;
    public failureRedirectUrl: string;
    public logoutUrl: string;
    public modes: AppleOAuthSettingsMode[];
    public enableWithOldSettings: boolean;

    public constructor(init?: Partial<EnableAppleAuthentication>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'EnableAppleAuthentication';
    }
    public getMethod() {
      return 'POST';
    }
    public createResponse() {
      return new EnableAppleAuthenticationResponse();
    }
  }

  // @Route("/membership/authentication/apple", "PUT")
  export class UpdateAppleAuthentication
    extends CodeMashRequestBase
    implements IReturn<UpdateAppleAuthenticationResponse> {
    public clientId: string;
    public clientSecret: string;
    public keyId: string;
    public bundleId: string;
    public teamId: string;
    public callbackUrl: string;
    public failureRedirectUrl: string;
    public logoutUrl: string;
    public modes: AppleOAuthSettingsMode[];
    public role: string;
    public zone: string;

    public constructor(init?: Partial<UpdateAppleAuthentication>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'UpdateAppleAuthentication';
    }
    public getMethod() {
      return 'PUT';
    }
    public createResponse() {
      return new UpdateAppleAuthenticationResponse();
    }
  }

  // @Route("/membership/authentication/aad/disable", "GET")
  export class DisableAadAuthentication
    extends CodeMashRequestBase
    implements IReturn<DisableAadAuthenticationResponse> {
    public constructor(init?: Partial<DisableAadAuthentication>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'DisableAadAuthentication';
    }
    public getMethod() {
      return 'GET';
    }
    public createResponse() {
      return new DisableAadAuthenticationResponse();
    }
  }

  // @Route("/membership/authentication/aad/enable", "POST")
  export class EnableAadAuthentication
    extends CodeMashRequestBase
    implements IReturn<EnableAadAuthenticationResponse> {
    public tenantId: string;
    public clientId: string;
    public clientSecret: string;
    public callbackUrl: string;
    public failureRedirectUrl: string;
    public logoutUrl: string;
    public modes: AzureActiveDirSettingsMode[];
    public enableWithOldSettings: boolean;

    public constructor(init?: Partial<EnableAadAuthentication>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'EnableAadAuthentication';
    }
    public getMethod() {
      return 'POST';
    }
    public createResponse() {
      return new EnableAadAuthenticationResponse();
    }
  }

  // @Route("/membership/authentication/aad/api", "PUT")
  export class UpdateAadApiSettings
    extends CodeMashRequestBase
    implements IReturn<UpdateAadApiSettingsResponse> {
    public scopes: string[];
    public appTenantId: string;
    public modes: AzureActiveDirSettingsMode[];

    public constructor(init?: Partial<UpdateAadApiSettings>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'UpdateAadApiSettings';
    }
    public getMethod() {
      return 'PUT';
    }
    public createResponse() {
      return new UpdateAadApiSettingsResponse();
    }
  }

  // @Route("/membership/authentication/aad", "PUT")
  export class UpdateAadAuthentication
    extends CodeMashRequestBase
    implements IReturn<UpdateAadAuthenticationResponse> {
    public tenantId: string;
    public clientId: string;
    public clientSecret: string;
    public callbackUrl: string;
    public logoutUrl: string;
    public failureRedirectUrl: string;
    public role: string;
    public zone: string;
    public modes: AzureActiveDirSettingsMode[];

    public constructor(init?: Partial<UpdateAadAuthentication>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'UpdateAadAuthentication';
    }
    public getMethod() {
      return 'PUT';
    }
    public createResponse() {
      return new UpdateAadAuthenticationResponse();
    }
  }

  // @Route("/membership/authentication/facebook/disable", "GET")
  export class DisableFacebookAuthentication
    extends CodeMashRequestBase
    implements IReturn<DisableFacebookAuthenticationResponse> {
    public constructor(init?: Partial<DisableFacebookAuthentication>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'DisableFacebookAuthentication';
    }
    public getMethod() {
      return 'GET';
    }
    public createResponse() {
      return new DisableFacebookAuthenticationResponse();
    }
  }

  // @Route("/membership/authentication/facebook/enable", "POST")
  export class EnableFacebookAuthentication
    extends CodeMashRequestBase
    implements IReturn<EnableFacebookAuthenticationResponse> {
    public clientId: string;
    public clientSecret: string;
    public callbackUrl: string;
    public failureRedirectUrl: string;
    public logoutUrl: string;
    public modes: FacebookSettingsMode[];
    public enableWithOldSettings: boolean;

    public constructor(init?: Partial<EnableFacebookAuthentication>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'EnableFacebookAuthentication';
    }
    public getMethod() {
      return 'POST';
    }
    public createResponse() {
      return new EnableFacebookAuthenticationResponse();
    }
  }

  // @Route("/membership/authentication/facebook", "PUT")
  export class UpdateFacebookAuthentication
    extends CodeMashRequestBase
    implements IReturn<UpdateFacebookAuthenticationResponse> {
    public clientId: string;
    public clientSecret: string;
    public callbackUrl: string;
    public failureRedirectUrl: string;
    public logoutUrl: string;
    public role: string;
    public zone: string;
    public modes: FacebookSettingsMode[];

    public constructor(init?: Partial<UpdateFacebookAuthentication>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'UpdateFacebookAuthentication';
    }
    public getMethod() {
      return 'PUT';
    }
    public createResponse() {
      return new UpdateFacebookAuthenticationResponse();
    }
  }

  // @Route("/membership/authentication/google/disable", "GET")
  export class DisableGoogleAuthentication
    extends CodeMashRequestBase
    implements IReturn<DisableGoogleAuthenticationResponse> {
    public constructor(init?: Partial<DisableGoogleAuthentication>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'DisableGoogleAuthentication';
    }
    public getMethod() {
      return 'GET';
    }
    public createResponse() {
      return new DisableGoogleAuthenticationResponse();
    }
  }

  // @Route("/membership/authentication/google/enable", "POST")
  export class EnableGoogleAuthentication
    extends CodeMashRequestBase
    implements IReturn<EnableGoogleAuthenticationResponse> {
    public clientId: string;
    public clientSecret: string;
    public callbackUrl: string;
    public failureRedirectUrl: string;
    public logoutUrl: string;
    public modes: GoogleSettingsMode[];
    public enableWithOldSettings: boolean;

    public constructor(init?: Partial<EnableGoogleAuthentication>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'EnableGoogleAuthentication';
    }
    public getMethod() {
      return 'POST';
    }
    public createResponse() {
      return new EnableGoogleAuthenticationResponse();
    }
  }

  // @Route("/membership/authentication/google/services", "POST")
  export class CreateGoogleServiceAccount
    extends CodeMashRequestBase
    implements IReturn<CreateGoogleServiceAccountResponse> {
    public name: string;
    public secretKey: string;
    public scopes: string[];

    public constructor(init?: Partial<CreateGoogleServiceAccount>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'CreateGoogleServiceAccount';
    }
    public getMethod() {
      return 'POST';
    }
    public createResponse() {
      return new CreateGoogleServiceAccountResponse();
    }
  }

  // @Route("/membership/authentication/google/services/{id}", "DELETE")
  export class DeleteGoogleServiceAccount
    extends CodeMashRequestBase
    implements IReturn<DeleteGoogleServiceAccountResponse> {
    public id: string;

    public constructor(init?: Partial<DeleteGoogleServiceAccount>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'DeleteGoogleServiceAccount';
    }
    public getMethod() {
      return 'DELETE';
    }
    public createResponse() {
      return new DeleteGoogleServiceAccountResponse();
    }
  }

  // @Route("/membership/authentication/google/services/{id}", "PUT")
  export class UpdateGoogleServiceAccount
    extends CodeMashRequestBase
    implements IReturn<UpdateGoogleServiceAccountResponse> {
    public id: string;
    public name: string;
    public secretKey: string;
    public scopes: string[];

    public constructor(init?: Partial<UpdateGoogleServiceAccount>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'UpdateGoogleServiceAccount';
    }
    public getMethod() {
      return 'PUT';
    }
    public createResponse() {
      return new UpdateGoogleServiceAccountResponse();
    }
  }

  // @Route("/membership/authentication/google/api", "PUT")
  export class UpdateGoogleApiSettings
    extends CodeMashRequestBase
    implements IReturn<UpdateGoogleApiSettingsResponse> {
    public scopes: string[];
    public modes: GoogleSettingsMode[];

    public constructor(init?: Partial<UpdateGoogleApiSettings>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'UpdateGoogleApiSettings';
    }
    public getMethod() {
      return 'PUT';
    }
    public createResponse() {
      return new UpdateGoogleApiSettingsResponse();
    }
  }

  // @Route("/membership/authentication/google", "PUT")
  export class UpdateGoogleAuthentication
    extends CodeMashRequestBase
    implements IReturn<UpdateGoogleAuthenticationResponse> {
    public clientId: string;
    public clientSecret: string;
    public callbackUrl: string;
    public failureRedirectUrl: string;
    public logoutUrl: string;
    public role: string;
    public zone: string;
    public modes: GoogleSettingsMode[];

    public constructor(init?: Partial<UpdateGoogleAuthentication>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'UpdateGoogleAuthentication';
    }
    public getMethod() {
      return 'PUT';
    }
    public createResponse() {
      return new UpdateGoogleAuthenticationResponse();
    }
  }

  // @Route("/membership/authentication/twitter/disable", "GET")
  export class DisableTwitterAuthentication
    extends CodeMashRequestBase
    implements IReturn<DisableTwitterAuthenticationResponse> {
    public constructor(init?: Partial<DisableTwitterAuthentication>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'DisableTwitterAuthentication';
    }
    public getMethod() {
      return 'GET';
    }
    public createResponse() {
      return new DisableTwitterAuthenticationResponse();
    }
  }

  // @Route("/membership/authentication/twitter/enable", "POST")
  export class EnableTwitterAuthentication
    extends CodeMashRequestBase
    implements IReturn<EnableTwitterAuthenticationResponse> {
    public clientId: string;
    public clientSecret: string;
    public callbackUrl: string;
    public codeCallbackUrl: string;
    public failureRedirectUrl: string;
    public logoutUrl: string;
    public modes: TwitterSettingsMode[];
    public enableWithOldSettings: boolean;

    public constructor(init?: Partial<EnableTwitterAuthentication>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'EnableTwitterAuthentication';
    }
    public getMethod() {
      return 'POST';
    }
    public createResponse() {
      return new EnableTwitterAuthenticationResponse();
    }
  }

  // @Route("/membership/authentication/twitter", "PUT")
  export class UpdateTwitterAuthentication
    extends CodeMashRequestBase
    implements IReturn<UpdateTwitterAuthenticationResponse> {
    public clientId: string;
    public clientSecret: string;
    public codeCallbackUrl: string;
    public callbackUrl: string;
    public failureRedirectUrl: string;
    public logoutUrl: string;
    public role: string;
    public zone: string;
    public modes: TwitterSettingsMode[];

    public constructor(init?: Partial<UpdateTwitterAuthentication>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'UpdateTwitterAuthentication';
    }
    public getMethod() {
      return 'PUT';
    }
    public createResponse() {
      return new UpdateTwitterAuthenticationResponse();
    }
  }

  // @Route("/membership/authentication/credentials", "PUT")
  export class UpdateCredentialsAuthentication
    extends CodeMashRequestBase
    implements IReturn<UpdateCredentialsAuthenticationResponse> {
    public logoutUrl: string;
    public allowUsernames: boolean;
    public modes: CredentialsSettingsMode[];

    public constructor(init?: Partial<UpdateCredentialsAuthentication>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'UpdateCredentialsAuthentication';
    }
    public getMethod() {
      return 'PUT';
    }
    public createResponse() {
      return new UpdateCredentialsAuthenticationResponse();
    }
  }

  // @Route("/db/schema/{schemaId}", "DELETE")
  export class DeleteSchema
    extends CodeMashRequestBase
    implements IReturn<DeleteSchemaResponse> {
    public schemaId: string;

    public constructor(init?: Partial<DeleteSchema>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'DeleteSchema';
    }
    public getMethod() {
      return 'DELETE';
    }
    public createResponse() {
      return new DeleteSchemaResponse();
    }
  }

  // @Route("/db/schema", "PUT")
  export class EditSchema
    extends CodeMashRequestBase
    implements IReturn<EditSchemaResponse> {
    public schemaId: string;
    public uiSchema: string;
    public jsonSchema: string;
    public mongoDbSchema: string;

    public constructor(init?: Partial<EditSchema>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'EditSchema';
    }
    public getMethod() {
      return 'PUT';
    }
    public createResponse() {
      return new EditSchemaResponse();
    }
  }

  // @Route("/db/schemas/{collectionName}/records/{id}/restore", "POST")
  export class RestoreDeletedRecord
    extends CodeMashDbRequestBase
    implements IReturn<RestoreDeletedRecordResponse> {
    public id: string;

    public constructor(init?: Partial<RestoreDeletedRecord>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'RestoreDeletedRecord';
    }
    public getMethod() {
      return 'POST';
    }
    public createResponse() {
      return new RestoreDeletedRecordResponse();
    }
  }

  // @Route("/db/schemas/{id}/settings", "PUT")
  export class UpdateSchemaSettings
    extends CodeMashRequestBase
    implements IReturn<UpdateSchemaSettingsResponse> {
    public id: string;
    public softDelete: boolean;

    public constructor(init?: Partial<UpdateSchemaSettings>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'UpdateSchemaSettings';
    }
    public getMethod() {
      return 'PUT';
    }
    public createResponse() {
      return new UpdateSchemaSettingsResponse();
    }
  }

  export class GroupMessageSenderLocal {
    public messageCode: string;
    public groupName: string;
    public params: string[];

    public constructor(init?: Partial<GroupMessageSenderLocal>) {
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'GroupMessageSenderLocal';
    }
    public getMethod() {
      return 'POST';
    }
    public createResponse() {}
  }

  export class MessageSenderLocal {
    public messageCode: string;
    public userIds: string[];
    public params: string[];

    public constructor(init?: Partial<MessageSenderLocal>) {
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'MessageSenderLocal';
    }
    public getMethod() {
      return 'POST';
    }
    public createResponse() {}
  }

  // @Route("/apikeys")
  // @Route("/apikeys/{Environment}")
  // @DataContract
  export class GetApiKeys implements IReturn<GetApiKeysResponse>, IGet {
    // @DataMember(Order=1)
    public environment: string;

    // @DataMember(Order=2)
    public meta: { [index: string]: string };

    public constructor(init?: Partial<GetApiKeys>) {
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'GetApiKeys';
    }
    public getMethod() {
      return 'GET';
    }
    public createResponse() {
      return new GetApiKeysResponse();
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
    public meta: { [index: string]: string };

    public constructor(init?: Partial<RegenerateApiKeys>) {
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'RegenerateApiKeys';
    }
    public getMethod() {
      return 'POST';
    }
    public createResponse() {
      return new RegenerateApiKeysResponse();
    }
  }
}
