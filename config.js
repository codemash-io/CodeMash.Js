class Config {
    constructor(){
        this.apiUrl = 'https://api.codemash.io';
    }

    init(config){
        this.secretKey = config.secretKey;
        this.projectId = config.projectId;
        this.region = config.region;
        this.version = config.version;
        this.tablePageSize = config.tablePageSize || 10;
        this.maxFileSize = config.maxFileSize || 104857600;
    }
}

export var APP = new Config();
export default APP;