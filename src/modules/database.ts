import {CMConfig} from 'app/config';
import {RestClient} from 'app/client';
import {FindRequest, FindResponse} from 'app/types/codemash.dtos';

export async function getRecords(
	request: FindRequest
): Promise<FindResponse | undefined> {
	var client = RestClient.Json(new CMConfig());

	try {
		const response = await client.post(request);
		return response;
	} catch (e: any) {
		console.log('Failed to get results: ', e.responseStatus);
	}
}
