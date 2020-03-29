class Config {
    constructor() {
        this.apiUrl = 'https://api.codemash.io';
    }

    init(config, env) {
        this.secretKey = config.secretKey;
        this.projectId = config.projectId;
        this.region = config.region;
        this.version = config.version;
        this.tablePageSize = config.tablePageSize || 10;
        this.maxFileSize = config.maxFileSize || 104857600;

        let modeParameter = '';
        if (env === 'development') {
            modeParameter = '&mode=dev';
        }

        this.loginUrl = `${this.apiUrl}/auth/aad?projectId=${config.projectId}${modeParameter}`;
        this.baseFilePath = `https://cm-${config.projectId}.s3.eu-central-1.amazonaws.com`;
    }
}

export var APP = new Config();
export default APP;