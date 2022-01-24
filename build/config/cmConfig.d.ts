import { ICMConfig, TValidCMClientConfig } from './config';
export declare class CMConfig implements ICMConfig {
    apiUrl: string;
    apiKey?: string;
    projectId?: string;
    cluster?: string;
    baseFilePath?: string;
    region?: string;
    showLogs: boolean;
    private static instance;
    private constructor();
    static getInstance(): CMConfig;
    isValid(): this is TValidCMClientConfig;
    Validate(): void;
}
