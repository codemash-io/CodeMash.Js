interface ICMConfigBase {
    apiUrl?: string;
    apiKey?: string;
    projectId?: string;
    cluster?: string;
    baseFilePath?: string;
    region?: string;
}
export declare type TValidCMClientConfig = Required<Pick<ICMConfigBase, 'apiUrl' | 'apiKey' | 'projectId'>>;
export interface IValidateConfig {
    Validate(): void;
    isValid(): this is TValidCMClientConfig;
}
export interface ICMConfig extends IValidateConfig, ICMConfigBase {
}
export {};
