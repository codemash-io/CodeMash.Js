import { ConfigValidator } from 'utils/configValidator';

import { ICMConfig, ICMConfigBase, TValidCMClientConfig } from './config';
import { STATICS } from './statics';

export class CMConfig implements ICMConfig {
  public apiUri?: string;

  public accountId?: string;

  public projectId?: string;

  public apiKey?: string;

  public cluster?: string;

  public baseFilePath?: string;

  public region?: string;

  public showLogs: boolean;

  public hubUri: string;

  private static instance: CMConfig;

  public constructor(config?: Partial<ICMConfigBase>) {
    this.apiUri =
      config?.apiUri ||
      process.env.CODEMASH_API_BASE_URI ||
      STATICS.CODEMASH_API_BASE_URI;

    this.accountId = config?.accountId || process.env.CODEMASH_ACCOUNT_ID;
    this.projectId = config?.projectId || process.env.CODEMASH_PROJECT_ID;
    this.apiKey = config?.apiKey || process.env.CODEMASH_API_KEY;

    this.cluster = config?.cluster || process.env.CODEMASH_CLUSTER;
    this.baseFilePath =
      config?.baseFilePath || process.env.CODEMASH_BASE_FILE_PATH;
    this.region = config?.region || process.env.CODEMASH_REGION;

    let showLogs: boolean = false;

    if (config?.showLogs) {
      showLogs = config?.showLogs;
    } else {
      showLogs = process.env.CODEMASH_SHOW_LOGS === 'true';
    }

    this.showLogs = showLogs;

    this.hubUri =
      config?.hubUri ||
      process.env.CODEMASH_HUB_API_BASE_URI ||
      STATICS.CODEMASH_HUB_API_BASE_URI;
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
    this.Validate();
    return (
      typeof this.apiUri === 'string' &&
      typeof this.apiKey === 'string' &&
      typeof this.projectId === 'string'
    );
  }

  public Validate(): void {
    ConfigValidator.AssertCMConfig(this);
  }
}
