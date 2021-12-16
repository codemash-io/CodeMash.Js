export interface IValidateConfig {
	Validate(): void;
}

export abstract class Config implements IValidateConfig {
	abstract Validate(): void;
}
