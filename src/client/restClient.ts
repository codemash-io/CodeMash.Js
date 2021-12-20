import {ICMConfig} from '../config';
import {JsonServiceClient} from '@servicestack/client';

export class RestClient {
	constructor(private config: ICMConfig) {}

	public static Json(config: ICMConfig): JsonServiceClient {
		const rcpClient = new RestClient(config);
		let jsonClient = rcpClient.client;
		jsonClient.bearerToken = config.apiKey!;
		return rcpClient.client;
	}

	public get client(): JsonServiceClient {
    const serviceClient = new JsonServiceClient(this.config.apiUrl);
    if(this.config.isValid()) {
      serviceClient.headers.set('X-CM-Cluster', this.config.cluster);
      serviceClient.headers.set('Authorization', `Bearer ${this.config.apiKey}`);
      serviceClient.headers.set('X-CM-ProjectId', this.config.projectId);
    }
		return serviceClient;
	}
}
