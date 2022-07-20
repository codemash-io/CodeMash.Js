import * as server from '../server';
import Config from '../config';
import {CONFIG as Endpoints} from '../routes';
import {objectOrStringToString, toQueryString} from '../utils';

export async function createGroup({secretKey, title, meta, users}) {
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
				users,
			}),
		}
	);

	return response;
}

export async function deleteGroup({secretKey, id}) {
	const requestUrl = Endpoints.PROJECT.NOTIFICATIONS.SERVER_EVENTS.DELETE_GROUP(
		id
	);
	const response = await server.loadJson(
		`${Config.eventsApiUrl}${requestUrl}`,
		{
			method: 'DELETE',
			headers: {
				'X-CM-ProjectId': Config.projectId,
				Authorization: `Bearer ${secretKey || Config.secretKey}`,
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
			body: null,
		}
	);

	return response;
}

export async function addUsersToGroup({secretKey, id, users}) {
	const response = await server.loadJson(
		`${
			Config.eventsApiUrl
		}${Endpoints.PROJECT.NOTIFICATIONS.SERVER_EVENTS.ADD_USERS_TO_GROUP(id)}`,
		{
			method: 'POST',
			headers: {
				'X-CM-ProjectId': Config.projectId,
				Authorization: `Bearer ${secretKey || Config.secretKey}`,
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				users,
			}),
		}
	);

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
	includeNotSeenCount,
}) {
	const request = {
		pageSize: pageSize || Config.tablePageSize,
		pageNumber: pageNumber || 0,
		filter: objectOrStringToString(filter),
		sort: objectOrStringToString(sort),
		includeChannels,
		includeUsers,
		includeNotSeenCount,
	};
	const requestUrl = `${
		Endpoints.PROJECT.NOTIFICATIONS.SERVER_EVENTS.GET_GROUPS
	}?${toQueryString(request)}`;

	const response = await server.loadJson(
		`${Config.eventsApiUrl}${requestUrl}`,
		{
			method: 'GET',
			headers: {
				'X-CM-ProjectId': Config.projectId,
				Authorization: `Bearer ${secretKey || Config.secretKey}`,
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
			body: null,
		}
	);
	return response;
}

export async function getGroup({
	secretKey,
	id,
	includeChannels,
	includeUsers,
	includeNotSeenCount,
}) {
	const request = {
		includeChannels,
		includeUsers,
		includeNotSeenCount,
	};
	const requestUrl = `${Endpoints.PROJECT.NOTIFICATIONS.SERVER_EVENTS.GET_GROUP(
		id
	)}?${toQueryString(request)}`;

	const response = await server.loadJson(
		`${Config.eventsApiUrl}${requestUrl}`,
		{
			method: 'GET',
			headers: {
				'X-CM-ProjectId': Config.projectId,
				Authorization: `Bearer ${secretKey || Config.secretKey}`,
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
			body: null,
		}
	);
	return response;
}

export async function createChannel({secretKey, groupId, title, meta, users}) {
	const response = await server.loadJson(
		`${
			Config.eventsApiUrl
		}${Endpoints.PROJECT.NOTIFICATIONS.SERVER_EVENTS.CREATE_CHANNEL(groupId)}`,
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
				users,
			}),
		}
	);

	return response;
}

export async function deleteChannel({secretKey, groupId, id}) {
	const requestUrl = Endpoints.PROJECT.NOTIFICATIONS.SERVER_EVENTS.DELETE_CHANNEL(
		groupId,
		id
	);
	const response = await server.loadJson(
		`${Config.eventsApiUrl}${requestUrl}`,
		{
			method: 'DELETE',
			headers: {
				'X-CM-ProjectId': Config.projectId,
				Authorization: `Bearer ${secretKey || Config.secretKey}`,
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
			body: null,
		}
	);

	return response;
}

export async function addUsersToChannel({secretKey, groupId, id, users}) {
	const response = await server.loadJson(
		`${
			Config.eventsApiUrl
		}${Endpoints.PROJECT.NOTIFICATIONS.SERVER_EVENTS.ADD_USERS_TO_CHANNEL(
			groupId,
			id
		)}`,
		{
			method: 'POST',
			headers: {
				'X-CM-ProjectId': Config.projectId,
				Authorization: `Bearer ${secretKey || Config.secretKey}`,
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				users,
			}),
		}
	);

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
	const requestUrl = `${Endpoints.PROJECT.NOTIFICATIONS.SERVER_EVENTS.GET_CHANNELS(
		groupId
	)}?${toQueryString(request)}`;

	const response = await server.loadJson(
		`${Config.eventsApiUrl}${requestUrl}`,
		{
			method: 'GET',
			headers: {
				'X-CM-ProjectId': Config.projectId,
				Authorization: `Bearer ${secretKey || Config.secretKey}`,
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
			body: null,
		}
	);
	return response;
}

export async function sendMessage({
	secretKey,
	channelId,
	message,
	meta,
	fileIds,
	pushAfter,
	pushTemplateId,
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
				fileIds,
				pushAfter,
				pushTemplateId,
			}),
		}
	);

	return response;
}

export async function readMessages({secretKey, channelId, ids}) {
	const response = await server.loadJson(
		`${Config.eventsApiUrl}${Endpoints.PROJECT.NOTIFICATIONS.SERVER_EVENTS.READ_MESSAGES}`,
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
				ids,
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

	const response = await server.loadJson(
		`${Config.eventsApiUrl}${requestUrl}`,
		{
			method: 'GET',
			headers: {
				'X-CM-ProjectId': Config.projectId,
				Authorization: `Bearer ${secretKey || Config.secretKey}`,
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
			body: null,
		}
	);
	return response;
}

export async function authorizeConnection({secretKey}) {
	const requestUrl =
		Endpoints.PROJECT.NOTIFICATIONS.SERVER_EVENTS.AUTHORIZE_CONNECTION;
	const response = await server.loadJson(
		`${Config.eventsApiUrl}${requestUrl}`,
		{
			method: 'GET',
			headers: {
				'X-CM-ProjectId': Config.projectId,
				Authorization: `Bearer ${secretKey || Config.secretKey}`,
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
			body: null,
		}
	);

	return response;
}

export function formEventSourceUrl({authorizationToken}) {
	return `${Config.eventsApiUrl}${Endpoints.PROJECT.NOTIFICATIONS.SERVER_EVENTS.OPEN_CONNECTION}?token=${authorizationToken}`;
}

export function handleServerEvent({event}) {
	if (!event) {
		return null;
	}

	const correctedData = event.data || event;

	const msgType = correctedData.substring(0, correctedData.indexOf(' '));
	const cmdType = msgType.substring(msgType.indexOf('@') + 1);
	const channelFullId = msgType.substring(0, msgType.indexOf('@'));

	let channelId, groupId;
	if (channelFullId) {
		const splitChannelId = channelFullId.split('_');
		if (splitChannelId && splitChannelId.length === 2) {
			if (splitChannelId[0] === 'channel') {
				channelId = splitChannelId[1];
			} else if (splitChannelId[0] === 'group') {
				groupId = splitChannelId[1];
			}
		}
	}

	const dataString = correctedData.substring(correctedData.indexOf(' ') + 1);
	const parsedData = JSON.parse(dataString);

	return {
		type: cmdType,
		channelId: channelId,
		groupId: groupId,
		data: parsedData,
	};
}

export async function heartbeatConnection({subscriptionId}) {
	const requestUrl = `${Endpoints.PROJECT.NOTIFICATIONS.SERVER_EVENTS.HEARTBEAT_CONNECTION}?id=${subscriptionId}`;
	const response = await server.loadJson(
		`${Config.eventsApiUrl}${requestUrl}`,
		{
			method: 'GET',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
			body: null,
		}
	);

	return response;
}

export async function closeConnection({subscriptionId}) {
	const requestUrl = `${Endpoints.PROJECT.NOTIFICATIONS.SERVER_EVENTS.CLOSE_CONNECTION}?id=${subscriptionId}`;
	const response = await server.loadJson(
		`${Config.eventsApiUrl}${requestUrl}`,
		{
			method: 'GET',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
			body: null,
		}
	);

	return response;
}
