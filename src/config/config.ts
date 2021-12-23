interface ICMConfigBase {
  apiUrl?: string;
  apiKey?: string;
  projectId?: string;
  cluster?: string;
  baseFilePath?: string;
  region?: string;
}

export type TValidCMClientConfig = Required<
  Pick<ICMConfigBase, 'apiUrl' | 'apiKey' | 'cluster' | 'projectId'>
>;
export interface IValidateConfig {
  Validate(): void;
  isValid(): this is TValidCMClientConfig;
}

export interface ICMConfig extends IValidateConfig, ICMConfigBase {}
