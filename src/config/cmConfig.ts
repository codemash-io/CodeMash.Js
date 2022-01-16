import { ConfigValidator } from 'utils/configValidator';

import { ICMConfig, TValidCMClientConfig } from './config';
import { STATICS } from './statics';

export class CMConfig implements ICMConfig {
  public apiUrl?: string;

  public apiKey?: string;

  public projectId?: string;

  public cluster?: string;

  public baseFilePath?: string;

  public region?: string;

  private static instance: CMConfig;

  private constructor() {
    this.apiUrl = process.env.CODEMASH_API_URL || STATICS.CODEMASH_API_URL;
    this.apiKey = process.env.CODEMASH_API_KEY;
    this.projectId = process.env.CODEMASH_PROJECT_ID;
    this.cluster = process.env.CODEMASH_CLUSTER;
    this.baseFilePath = process.env.CODEMASH_BASE_FILE_PATH;
    this.region = process.env.CODEMASH_REGION;
  }

  public static getInstance() {
    if (CMConfig.instance) return CMConfig.instance;

    this.instance = new CMConfig();
    return this.instance;
  }

  public isValid(): this is TValidCMClientConfig {
    return (
      typeof this.apiKey === 'string' &&
      typeof this.cluster === 'string' &&
      typeof this.projectId === 'string'
    );
  }

  public Validate(): void {
    ConfigValidator.AssertCMConfig(this);
  }
}
