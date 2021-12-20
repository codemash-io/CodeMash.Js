import { ICMConfig } from ".";

export interface IValidateConfig {
	Validate(): void;
  isValid(): this is TValidCMClientConfig;
}

export type TValidCMClientConfig = Required<Pick<ICMConfig, 'apiUrl' | 'apiKey' | 'cluster' | 'projectId'>>; 
export abstract class Config implements IValidateConfig {
	abstract Validate(): void;
  abstract isValid(): this is TValidCMClientConfig;
}
