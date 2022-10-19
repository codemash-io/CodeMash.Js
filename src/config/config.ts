export interface ICMConfigBase {
  apiUri?: string;
  accountId?: string;
  projectId?: string;
  apiKey?: string;

  cluster?: string;
  baseFilePath?: string;
  region?: string;
  showLogs?: boolean;

  hubUri?: string;
}

export type TValidCMClientConfig = Required<
  Pick<ICMConfigBase, 'apiUri' | 'apiKey' | 'projectId'>
>;
export interface IValidateConfig {
  Validate(): void;
  isValid(): this is TValidCMClientConfig;
}

export interface ICMConfig extends IValidateConfig, ICMConfigBase {}
