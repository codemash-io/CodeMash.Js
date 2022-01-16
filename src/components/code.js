import * as server from '../client';
import Config from '../config';
import {CONFIG as Endpoints} from '../routes';

export async function executeFunction({
	secretKey,
	functionId,
	data,
	qualifier,
	meta,
	tokens,
}) {
	const response = await server.loadJson(
		`${Config.apiUrl}${Endpoints.PROJECT.CODE.EXECUTE(functionId)}`,
		{
			method: 'POST',
			headers: {
				'X-CM-ProjectId': Config.projectId,
				Authorization: `Bearer ${secretKey || Config.secretKey}`,
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				data: JSON.stringify(data),
				qualifier,
				meta,
				tokens,
			}),
		}
	);

	return response.result ? JSON.parse(response.result) : null;
}
