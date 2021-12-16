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
		return new JsonServiceClient(this.config.apiUrl);
	}
}
