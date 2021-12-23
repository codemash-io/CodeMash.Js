import { ICMConfig } from 'config/config';

export class ConfigValidator {
  constructor() {}

  public ValidateCM(config: ICMConfig) {
    if (config.apiKey === undefined || config.apiKey === '') {
      throw new Error('CodeMash config is not valid, check CODEMASH_API_URL');
    }
    if (config.apiKey === undefined || config.apiKey === '') {
      throw Error('CodeMash config is not valid, check CODEMASH_API_KEY');
    }
    if (config.projectId === undefined || config.projectId === '') {
      throw Error('CodeMash config is not valid, check CODEMASH_PROJECT_ID');
    }
  }

  public static AssertCMConfig(config: ICMConfig) {
    const validator = new ConfigValidator();
    validator.ValidateCM(config);
  }
}
