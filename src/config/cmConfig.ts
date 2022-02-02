import { ConfigValidator } from 'utils/configValidator';

import { ICMConfig, ICMConfigBase, TValidCMClientConfig } from './config';
import { STATICS } from './statics';

export class CMConfig implements ICMConfig {
  public apiUrl: string;

  public apiKey?: string;

  public projectId?: string;

  public cluster?: string;

  public baseFilePath?: string;

  public region?: string;

  public showLogs: boolean;

  private static instance: CMConfig;

  private constructor(config?: Partial<ICMConfigBase>) {
    this.apiUrl =
      config?.apiUrl ||
      process.env.CODEMASH_API_URL ||
      STATICS.CODEMASH_API_URL;

    this.apiKey = config?.apiKey || process.env.CODEMASH_API_KEY;
    this.projectId = config?.projectId || process.env.CODEMASH_PROJECT_ID;
    this.cluster = config?.cluster || process.env.CODEMASH_CLUSTER;
    this.baseFilePath =
      config?.baseFilePath || process.env.CODEMASH_BASE_FILE_PATH;
    this.region = config?.region || process.env.CODEMASH_REGION;
    this.showLogs = config?.showLogs || !!process.env.CODEMASH_SHOW_LOGS;
  }

  public static init(config: Partial<ICMConfigBase>) {
    this.instance = new CMConfig(config);
  }

  public static getInstance() {
    if (CMConfig.instance) return CMConfig.instance;

    this.instance = new CMConfig({});
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
