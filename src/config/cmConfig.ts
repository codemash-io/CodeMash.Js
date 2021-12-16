import {ConfigValidator} from 'app/utils/configValidator';
import {IValidateConfig, Config} from './config';
import {STATICS} from './statics';

export interface ICMConfig extends IValidateConfig {
	apiUrl: string | undefined;
	apiKey: string | undefined;
	projectId: string | undefined;
	cluster: string | undefined;
	baseFilePath: string | undefined;
	region: string | undefined;
}

export class CMConfig extends Config implements ICMConfig {
	public apiUrl: string | undefined;
	public apiKey: string | undefined;
	public projectId: string | undefined;
	public cluster: string | undefined;
	public baseFilePath: string | undefined;
	public region: string | undefined;

	constructor() {
		super();
		this.apiUrl = process.env.CODEMASH_API_URL || STATICS.CODEMASH_API_URL;
		this.apiKey = process.env.CODEMASH_API_KEY;
		this.projectId = process.env.CODEMASH_PROJECT_ID;
		this.cluster = process.env.CODEMASH_CLUSTER;
		this.baseFilePath = process.env.CODEMASH_BASE_FILE_PATH;
		this.region = process.env.CODEMASH_REGION;
	}

	public Validate(): void {
		ConfigValidator.AssertCMConfig(this);
	}
}
