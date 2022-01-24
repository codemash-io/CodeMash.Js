import * as server from '../server';
import Config from '../config';
import {CONFIG as Endpoints} from '../routes';
import {objectOrStringToString, toQueryString} from '../utils';

export async function createGroup({
	secretKey,
	title,
	meta,
	users,
}) {
	const response = await server.loadJson(
		`${Config.eventsApiUrl}${Endpoints.PROJECT.NOTIFICATIONS.SERVER_EVENTS.CREATE_GROUP}`,
		{
			method: 'POST',
			headers: {
				'X-CM-ProjectId': Config.projectId,
				Authorization: `Bearer ${secretKey || Config.secretKey}`,
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				title,
				meta,
				users
			}),
		}
	);

	return response;
}

export async function deleteGroup({
	secretKey,
	id,
}) {
	const requestUrl = Endpoints.PROJECT.NOTIFICATIONS.SERVER_EVENTS.DELETE_GROUP(id);
	const response = await server.loadJson(`${Config.eventsApiUrl}${requestUrl}`, {
		method: 'DELETE',
		headers: {
			'X-CM-ProjectId': Config.projectId,
			Authorization: `Bearer ${secretKey || Config.secretKey}`,
			Accept: 'application/json',
			'Content-Type': 'application/json',
		},
		body: null,
	});

	return response;
}

export async function getGroups({
	secretKey,
	pageNumber,
	pageSize,
	filter,
	sort,
	includeChannels,
	includeUsers,
}) {
	const request = {
		pageSize: pageSize || Config.tablePageSize,
		pageNumber: pageNumber || 0,
		filter: objectOrStringToString(filter),
		sort: objectOrStringToString(sort),
		includeChannels,
		includeUsers,
	};
	const requestUrl = `${
		Endpoints.PROJECT.NOTIFICATIONS.SERVER_EVENTS.GET_GROUPS
	}?${toQueryString(request)}`;

	const response = await server.loadJson(`${Config.eventsApiUrl}${requestUrl}`, {
		method: 'GET',
		headers: {
			'X-CM-ProjectId': Config.projectId,
			Authorization: `Bearer ${secretKey || Config.secretKey}`,
			Accept: 'application/json',
			'Content-Type': 'application/json',
		},
		body: null,
	});
	return response;
}

export async function createChannel({
	secretKey,
	groupId,
	title,
	meta,
	users,
}) {
	const response = await server.loadJson(
		`${Config.eventsApiUrl}${Endpoints.PROJECT.NOTIFICATIONS.SERVER_EVENTS.CREATE_CHANNEL(groupId)}`,
		{
			method: 'POST',
			headers: {
				'X-CM-ProjectId': Config.projectId,
				Authorization: `Bearer ${secretKey || Config.secretKey}`,
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				title,
				meta,
				users
			}),
		}
	);

	return response;
}

export async function deleteChannel({
	secretKey,
	groupId,
	id,
}) {
	const requestUrl = Endpoints.PROJECT.NOTIFICATIONS.SERVER_EVENTS.DELETE_CHANNEL(groupId, id);
	const response = await server.loadJson(`${Config.eventsApiUrl}${requestUrl}`, {
		method: 'DELETE',
		headers: {
			'X-CM-ProjectId': Config.projectId,
			Authorization: `Bearer ${secretKey || Config.secretKey}`,
			Accept: 'application/json',
			'Content-Type': 'application/json',
		},
		body: null,
	});

	return response;
}

export async function getChannels({
	secretKey,
	groupId,
	pageNumber,
	pageSize,
	filter,
	sort,
}) {
	const request = {
		pageSize: pageSize || Config.tablePageSize,
		pageNumber: pageNumber || 0,
		filter: objectOrStringToString(filter),
		sort: objectOrStringToString(sort),
	};
	const requestUrl = `${
		Endpoints.PROJECT.NOTIFICATIONS.SERVER_EVENTS.GET_CHANNELS(groupId)
	}?${toQueryString(request)}`;

	const response = await server.loadJson(`${Config.eventsApiUrl}${requestUrl}`, {
		method: 'GET',
		headers: {
			'X-CM-ProjectId': Config.projectId,
			Authorization: `Bearer ${secretKey || Config.secretKey}`,
			Accept: 'application/json',
			'Content-Type': 'application/json',
		},
		body: null,
	});
	return response;
}

export async function sendMessage({
	secretKey,
	channelId,
	message,
	meta,
}) {
	const response = await server.loadJson(
		`${Config.eventsApiUrl}${Endpoints.PROJECT.NOTIFICATIONS.SERVER_EVENTS.SEND_MESSAGE}`,
		{
			method: 'POST',
			headers: {
				'X-CM-ProjectId': Config.projectId,
				Authorization: `Bearer ${secretKey || Config.secretKey}`,
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				channelId,
				message,
				meta,
			}),
		}
	);

	return response;
}

export async function getMessages({
	secretKey,
	channelId,
	pageNumber,
	pageSize,
	filter,
	sort,
}) {
	const request = {
		pageSize: pageSize || Config.tablePageSize,
		pageNumber: pageNumber || 0,
		filter: objectOrStringToString(filter),
		sort: objectOrStringToString(sort),
		channelId,
	};
	const requestUrl = `${
		Endpoints.PROJECT.NOTIFICATIONS.SERVER_EVENTS.GET_MESSAGES
	}?${toQueryString(request)}`;

	const response = await server.loadJson(`${Config.eventsApiUrl}${requestUrl}`, {
		method: 'GET',
		headers: {
			'X-CM-ProjectId': Config.projectId,
			Authorization: `Bearer ${secretKey || Config.secretKey}`,
			Accept: 'application/json',
			'Content-Type': 'application/json',
		},
		body: null,
	});
	return response;
}

export async function authorizeConnection({
	secretKey,
}) {
	const requestUrl = Endpoints.PROJECT.NOTIFICATIONS.SERVER_EVENTS.AUTHORIZE_CONNECTION;
	const response = await server.loadJson(`${Config.eventsApiUrl}${requestUrl}`, {
		method: 'GET',
		headers: {
			'X-CM-ProjectId': Config.projectId,
			Authorization: `Bearer ${secretKey || Config.secretKey}`,
			Accept: 'application/json',
			'Content-Type': 'application/json',
		},
		body: null,
	});

	return response;
}
