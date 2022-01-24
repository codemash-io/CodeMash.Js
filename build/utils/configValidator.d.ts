import { ICMConfig } from 'config/config';
export declare class ConfigValidator {
    constructor();
    ValidateCM(config: ICMConfig): void;
    static AssertCMConfig(config: ICMConfig): void;
}
