import {ConfigValidator} from 'app/utils/configValidator';
import {IValidateConfig, Config, TValidCMClientConfig} from './config';
import {STATICS} from './statics';

export interface ICMConfig extends IValidateConfig {
	apiUrl?: string;
	apiKey?: string;
	projectId?: string;
	cluster?: string;
	baseFilePath?: string;
	region?: string;
}


export class CMConfig extends Config implements ICMConfig {
	public apiUrl?: string;
	public apiKey?: string;
	public projectId?: string;
	public cluster?: string;
	public baseFilePath?: string;
	public region?: string;

	constructor() {
		super();
		this.apiUrl = process.env.CODEMASH_API_URL || STATICS.CODEMASH_API_URL;
		this.apiKey = process.env.CODEMASH_API_KEY;
		this.projectId = process.env.CODEMASH_PROJECT_ID;
		this.cluster = process.env.CODEMASH_CLUSTER;
		this.baseFilePath = process.env.CODEMASH_BASE_FILE_PATH;
		this.region = process.env.CODEMASH_REGION;
	}

  public isValid(): this is TValidCMClientConfig {
    return typeof this.apiKey === 'string' && typeof this.cluster === 'string' && typeof this.projectId === 'string';    
  }

	public Validate(): void {
		ConfigValidator.AssertCMConfig(this);
	}
}
