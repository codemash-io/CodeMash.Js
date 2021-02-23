class Config {
	constructor() {
		this.apiUrl = 'https://api.codemash.io';
	}

	init(config) {
		this.secretKey = config.secretKey;
		this.projectId = config.projectId;

		this.baseFilePath = `https://cm-${config.projectId}.s3.eu-central-1.amazonaws.com`;
	}
}

export var APP = new Config();
export default APP;
