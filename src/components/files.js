import * as server from '../server';
import Config from '../config';
import {CONFIG as Endpoints} from '../routes';

export async function downloadFile({
	secretKey,
	fileId,
	optimization,
	asBase64,
}) {
	let route = `${Config.apiUrl}${Endpoints.PROJECT.FILES.DOWNLOAD(fileId)}`;

	if (optimization) {
		route = `${Config.apiUrl}${Endpoints.PROJECT.FILES.DOWNLOAD_OPTIMIZED(
			fileId,
			optimization
		)}`;
	}
	const response = await server.loadText(route, {
		method: 'GET',
		headers: {
			'X-CM-ProjectId': Config.projectId,
			Authorization: `Bearer ${secretKey || Config.secretKey}`,
			Accept: asBase64 ? 'text/plain' : undefined,
		},
		body: null,
	});

	const result = {
		fileId,
		file: response,
	};
	return result;
}

export async function getFileUrl({secretKey, fileId, optimization}) {
	const route = optimization
		? `${Config.apiUrl}${Endpoints.PROJECT.FILES.GET_URL_OPTIMIZED(
				fileId,
				optimization
		  )}`
		: `${Config.apiUrl}${Endpoints.PROJECT.FILES.GET_URL(fileId)}`;

	const response = await server.loadJson(route, {
		method: 'GET',
		headers: {
			'X-CM-ProjectId': Config.projectId,
			Authorization: `Bearer ${secretKey || Config.secretKey}`,
			'Content-Type': 'application/json',
			Accept: 'application/json',
		},
		body: null,
	});

	return response;
}

// Pass either: fileUri (local file location), file or base64 string
export async function uploadFile({
	secretKey,
	path,
	fileUri,
	file,
	base64,
	fileType,
	fileName,
	formDataTest,
}) {
	if (base64) {
		const response = await server.loadJson(
			`${Config.apiUrl}${Endpoints.PROJECT.FILES.UPLOAD}`,
			{
				method: 'POST',
				headers: {
					'X-CM-ProjectId': Config.projectId,
					Authorization: `Bearer ${secretKey || Config.secretKey}`,
					'Content-Type': 'application/json',
					Accept: 'application/json',
				},
				body: JSON.stringify({
					path,
					base64File: {data: base64, contentType: fileType, fileName},
				}),
			}
		);

		return response;
	}
	let formData = null;

	if (formDataTest) {
		formData = formDataTest;
	} else {
		formData = new FormData();
	}

	if (path != null && path !== undefined) {
		formData.append('path', path);
	}

	if (fileUri) {
		const finalFilename =
			fileName || fileUri.substring(fileUri.lastIndexOf('/') + 1);

		formData.append('file', {
			uri: fileUri,
			name: finalFilename,
			type: fileType,
		});
	} else {
		formData.append('file', file);
	}

	const response = await server.loadJson(
		`${Config.apiUrl}${Endpoints.PROJECT.FILES.UPLOAD}`,
		{
			method: 'POST',
			headers: {
				'X-CM-ProjectId': Config.projectId,
				Authorization: `Bearer ${secretKey || Config.secretKey}`,
			},
			body: formData,
		}
	);

	return response;
}

export async function uploadRecordFile({
	secretKey,
	fileUri,
	file,
	base64,
	fileType,
	fileName,
	collectionName,
	recordId,
	uniqueFieldName,
	cluster,
}) {
	if (base64) {
		const response = await server.loadJson(
			`${Config.apiUrl}${Endpoints.PROJECT.DATABASE.COLLECTION.FILES.UPLOAD(
				collectionName
			)}`,
			{
				method: 'POST',
				headers: {
					'X-CM-ProjectId': Config.projectId,
					Authorization: `Bearer ${secretKey || Config.secretKey}`,
					'Content-Type': 'application/json',
					Accept: 'application/json',
				},
				body: JSON.stringify({
					recordId,
					uniqueFieldName,
					cluster,
					base64File: {data: base64, contentType: fileType, fileName},
				}),
			}
		);

		return response;
	}

	const formData = new FormData();
	if (uniqueFieldName != null && uniqueFieldName !== undefined) {
		formData.append('uniqueFieldName', uniqueFieldName);
	}

	if (recordId != null && recordId !== undefined) {
		formData.append('recordId', recordId);
	}

	if (fileUri) {
		const finalFilename =
			fileName || fileUri.substring(fileUri.lastIndexOf('/') + 1);

		formData.append('file', {
			uri: fileUri,
			name: finalFilename,
			type: fileType,
		});
	} else {
		formData.append('file', file);
	}

	const response = await server.loadJson(
		`${Config.apiUrl}${Endpoints.PROJECT.DATABASE.COLLECTION.FILES.UPLOAD(
			collectionName
		)}`,
		{
			method: 'POST',
			headers: {
				'X-CM-ProjectId': Config.projectId,
				Authorization: `Bearer ${secretKey || Config.secretKey}`,
				'X-CM-Cluster': cluster || '',
			},
			body: formData,
		}
	);

	return response;
}

export async function uploadMessageFile({
	secretKey,
	fileUri,
	file,
	base64,
	fileType,
	fileName,
	channelId,
}) {
	if (base64) {
		const response = await server.loadJson(
			`${Config.apiUrl}${Endpoints.PROJECT.NOTIFICATIONS.SERVER_EVENTS.FILES.UPLOAD}`,
			{
				method: 'POST',
				headers: {
					'X-CM-ProjectId': Config.projectId,
					Authorization: `Bearer ${secretKey || Config.secretKey}`,
					'Content-Type': 'application/json',
					Accept: 'application/json',
				},
				body: JSON.stringify({
					channelId,
					base64File: {data: base64, contentType: fileType, fileName},
				}),
			}
		);

		return response;
	}

	const formData = new FormData();
	if (channelId != null && channelId !== undefined) {
		formData.append('channelId', channelId);
	}

	if (fileUri) {
		const finalFilename =
			fileName || fileUri.substring(fileUri.lastIndexOf('/') + 1);

		formData.append('file', {
			uri: fileUri,
			name: finalFilename,
			type: fileType,
		});
	} else {
		formData.append('file', file);
	}

	const response = await server.loadJson(
		`${Config.apiUrl}${Endpoints.PROJECT.NOTIFICATIONS.SERVER_EVENTS.FILES.UPLOAD}`,
		{
			method: 'POST',
			headers: {
				'X-CM-ProjectId': Config.projectId,
				Authorization: `Bearer ${secretKey || Config.secretKey}`,
			},
			body: formData,
		}
	);

	return response;
}

export function getFilePath(directory, fileName) {
	return `${Config.baseFilePath}/${directory}/${fileName}`;
}
