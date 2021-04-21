import * as server from '../server';
import Config from '../config';
import {CONFIG as Endpoints} from '../routes';
import {objectOrStringToString} from '../utils';

export async function register({
	secretKey,
	email,
	password,
	displayName,
	firstName,
	lastName,
	autoLogin = true,
	meta,
	language,
	timeZone,
	subscribeToNews,
	country,
	countryCode,
	area,
	city,
	address,
	address2,
	phone,
	company,
	postalCode,
	gender,
	birthDate,
	roles,
}) {
	const response = await server.loadJson(
		`${Config.apiUrl}${Endpoints.PROJECT.MEMBERSHIP.USERS.REGISTER}`,
		{
			method: 'POST',
			headers: {
				'X-CM-ProjectId': Config.projectId,
				Authorization: `Bearer ${secretKey || Config.secretKey}`,
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				email,
				password,
				displayName,
				firstName,
				lastName,
				autoLogin,
				meta: objectOrStringToString(meta),
				language,
				timeZone,
				subscribeToNews,
				country,
				countryCode,
				area,
				city,
				address,
				address2,
				phone,
				company,
				postalCode,
				gender,
				birthDate,
				roles,
			}),
		}
	);
	return response;
}

export async function registerGuest({
	secretKey,
	email,
	displayName,
	firstName,
	lastName,
	meta,
	language,
	timeZone,
	subscribeToNews,
	country,
	countryCode,
	area,
	city,
	address,
	address2,
	phone,
	company,
	postalCode,
	gender,
	birthDate,
}) {
	const response = await server.loadJson(
		`${Config.apiUrl}${Endpoints.PROJECT.MEMBERSHIP.USERS.REGISTER}`,
		{
			method: 'POST',
			headers: {
				'X-CM-ProjectId': Config.projectId,
				Authorization: `Bearer ${secretKey || Config.secretKey}`,
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				email,
				displayName,
				firstName,
				lastName,
				meta: objectOrStringToString(meta),
				language,
				timeZone,
				subscribeToNews,
				country,
				countryCode,
				area,
				city,
				address,
				address2,
				phone,
				company,
				postalCode,
				gender,
				birthDate,
			}),
		}
	);
	return response;
}

export async function invite({
	secretKey,
	email,
	displayName,
	firstName,
	lastName,
	meta,
	language,
	timeZone,
	subscribeToNews,
	country,
	countryCode,
	area,
	city,
	address,
	address2,
	phone,
	company,
	postalCode,
	gender,
	birthDate,
	roles,
}) {
	const response = await server.loadJson(
		`${Config.apiUrl}${Endpoints.PROJECT.MEMBERSHIP.USERS.INVITE}`,
		{
			method: 'POST',
			headers: {
				'X-CM-ProjectId': Config.projectId,
				Authorization: `Bearer ${secretKey || Config.secretKey}`,
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				email,
				displayName,
				firstName,
				lastName,
				meta: objectOrStringToString(meta),
				language,
				timeZone,
				subscribeToNews,
				country,
				countryCode,
				area,
				city,
				address,
				address2,
				phone,
				company,
				postalCode,
				gender,
				birthDate,
				roles,
			}),
		}
	);
	return response;
}

export async function updateUser({
	secretKey,
	id,
	displayName,
	firstName,
	lastName,
	meta,
	language,
	timeZone,
	subscribeToNews,
	unsubscribedNewsTags,
	country,
	countryCode,
	area,
	city,
	address,
	address2,
	phone,
	company,
	postalCode,
	gender,
	birthDate,
	roles,
}) {
	const response = await server.loadJson(
		`${Config.apiUrl}${Endpoints.PROJECT.MEMBERSHIP.USERS.UPDATE(id)}`,
		{
			method: 'PATCH',
			headers: {
				'X-CM-ProjectId': Config.projectId,
				Authorization: `Bearer ${secretKey || Config.secretKey}`,
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				displayName,
				firstName,
				lastName,
				meta: objectOrStringToString(meta),
				language,
				timeZone,
				subscribeToNews,
				unsubscribedNewsTags,
				country,
				countryCode,
				area,
				city,
				address,
				address2,
				phone,
				company,
				postalCode,
				gender,
				birthDate,
				roles,
			}),
		}
	);
	return response;
}

export async function updateProfile({
	secretKey,
	displayName,
	firstName,
	lastName,
	meta,
	language,
	timeZone,
	subscribeToNews,
	unsubscribedNewsTags,
	country,
	countryCode,
	area,
	city,
	address,
	address2,
	phone,
	company,
	postalCode,
	gender,
	birthDate,
}) {
	const response = await server.loadJson(
		`${Config.apiUrl}${Endpoints.PROJECT.MEMBERSHIP.USERS.UPDATE_PROFILE}`,
		{
			method: 'PATCH',
			headers: {
				'X-CM-ProjectId': Config.projectId,
				Authorization: `Bearer ${secretKey || Config.secretKey}`,
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				displayName,
				firstName,
				lastName,
				meta: objectOrStringToString(meta),
				language,
				timeZone,
				subscribeToNews,
				unsubscribedNewsTags,
				country,
				countryCode,
				area,
				city,
				address,
				address2,
				phone,
				company,
				postalCode,
				gender,
				birthDate,
			}),
		}
	);
	return response;
}

export async function getUsers({
	secretKey,
	pageNumber,
	pageSize,
	filter,
	sort,
	includePermissions,
	includeDevices,
	includeMeta,
}) {
	const response = await server.loadJson(
		`${Config.apiUrl}${Endpoints.PROJECT.MEMBERSHIP.USERS.GET_ALL}`,
		{
			method: 'POST',
			headers: {
				'X-CM-ProjectId': Config.projectId,
				Authorization: `Bearer ${secretKey || Config.secretKey}`,
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				pageSize: pageSize || Config.tablePageSize,
				pageNumber: pageNumber || 0,
				filter: objectOrStringToString(filter),
				sort: objectOrStringToString(sort),
				includePermissions,
				includeDevices,
				includeMeta,
			}),
		}
	);
	return response;
}

export async function getUser({
	secretKey,
	id,
	provider,
	includePermissions,
	includeDevices,
	includeMeta,
	includeUnreadNotifications,
}) {
	let url = `${Config.apiUrl}${Endpoints.PROJECT.MEMBERSHIP.USERS.GET(id)}`;
	const queries = [];

	if (provider) queries.push(`provider=${provider}`);
	if (includePermissions) queries.push(`includePermissions=${true}`);
	if (includeDevices) queries.push(`includeDevices=${true}`);
	if (includeMeta) queries.push(`includeMeta=${true}`);
	if (includeUnreadNotifications)
		queries.push(`includeUnreadNotifications=${true}`);

	if (queries.length > 0) {
		url += `?${queries.join('&')}`;
	}

	const response = await server.loadJson(url, {
		method: 'GET',
		headers: {
			'X-CM-ProjectId': Config.projectId,
			Authorization: `Bearer ${secretKey || Config.secretKey}`,
			Accept: 'application/json',
			'Content-Type': 'application/json',
		},
		body: null,
	});
	return response.result;
}

export async function getUserByEmail({
	secretKey,
	email,
	provider,
	includePermissions,
	includeDevices,
	includeMeta,
	includeUnreadNotifications,
}) {
	let url = `${Config.apiUrl}${Endpoints.PROJECT.MEMBERSHIP.USERS.GET_BY_EMAIL}`;
	const queries = [];

	if (email) queries.push(`email=${email}`);
	if (provider) queries.push(`provider=${provider}`);
	if (includePermissions) queries.push(`includePermissions=${true}`);
	if (includeDevices) queries.push(`includeDevices=${true}`);
	if (includeMeta) queries.push(`includeMeta=${true}`);
	if (includeUnreadNotifications)
		queries.push(`includeUnreadNotifications=${true}`);

	if (queries.length > 0) {
		url += `?${queries.join('&')}`;
	}

	const response = await server.loadJson(url, {
		method: 'GET',
		headers: {
			'X-CM-ProjectId': Config.projectId,
			Authorization: `Bearer ${secretKey || Config.secretKey}`,
			Accept: 'application/json',
			'Content-Type': 'application/json',
		},
		body: null,
	});
	return response.result;
}

export async function getProfile({
	secretKey,
	includePermissions,
	includeDevices,
	includeMeta,
	includeUnreadNotifications,
}) {
	let url = `${Config.apiUrl}${Endpoints.PROJECT.MEMBERSHIP.USERS.GET_PROFILE}`;
	const queries = [];

	if (includePermissions) queries.push(`includePermissions=${true}`);
	if (includeDevices) queries.push(`includeDevices=${true}`);
	if (includeMeta) queries.push(`includeMeta=${true}`);
	if (includeUnreadNotifications)
		queries.push(`includeUnreadNotifications=${true}`);

	if (queries.length > 0) {
		url += `?${queries.join('&')}`;
	}

	const response = await server.loadJson(url, {
		method: 'GET',
		headers: {
			'X-CM-ProjectId': Config.projectId,
			Authorization: `Bearer ${secretKey || Config.secretKey}`,
			Accept: 'application/json',
			'Content-Type': 'application/json',
		},
		body: null,
	});
	return response.result;
}

export async function deleteUser({secretKey, id}) {
	const response = await server.loadJson(
		`${Config.apiUrl}${Endpoints.PROJECT.MEMBERSHIP.USERS.DELETE(id)}`,
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

export async function blockUser({secretKey, id}) {
	const response = await server.loadJson(
		`${Config.apiUrl}${Endpoints.PROJECT.MEMBERSHIP.USERS.BLOCK(id)}`,
		{
			method: 'PUT',
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

export async function unblockUser({secretKey, id}) {
	const response = await server.loadJson(
		`${Config.apiUrl}${Endpoints.PROJECT.MEMBERSHIP.USERS.UNBLOCK(id)}`,
		{
			method: 'PUT',
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

export async function updatePassword({
	secretKey,
	userId,
	currentPassword,
	password,
	repeatedPassword,
}) {
	const response = await server.loadJson(
		`${Config.apiUrl}${Endpoints.PROJECT.MEMBERSHIP.USERS.UPDATE_PASSWORD}`,
		{
			method: 'PATCH',
			headers: {
				'X-CM-ProjectId': Config.projectId,
				Authorization: `Bearer ${secretKey || Config.secretKey}`,
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				userId,
				currentPassword,
				password,
				repeatedPassword,
			}),
		}
	);
	return response;
}

export async function createPasswordReset({secretKey, email}) {
	const response = await server.loadJson(
		`${Config.apiUrl}${Endpoints.PROJECT.MEMBERSHIP.USERS.CREATE_PASSWORD_RESET}`,
		{
			method: 'POST',
			headers: {
				'X-CM-ProjectId': Config.projectId,
				Authorization: `Bearer ${secretKey || Config.secretKey}`,
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({email}),
		}
	);
	return response;
}

export async function checkPasswordReset({secretKey, token}) {
	const response = await server.loadJson(
		`${Config.apiUrl}${Endpoints.PROJECT.MEMBERSHIP.USERS.CHECK_PASSWORD_RESET}?token=${token}`,
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

export async function resetPassword({
	secretKey,
	token,
	password,
	repeatedPassword,
}) {
	const response = await server.loadJson(
		`${Config.apiUrl}${Endpoints.PROJECT.MEMBERSHIP.USERS.RESET_PASSWORD}`,
		{
			method: 'POST',
			headers: {
				'X-CM-ProjectId': Config.projectId,
				Authorization: `Bearer ${secretKey || Config.secretKey}`,
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({token, password, repeatedPassword}),
		}
	);
	return response;
}

export async function verifyRegistration({secretKey, token}) {
	const response = await server.loadJson(
		`${Config.apiUrl}${Endpoints.PROJECT.MEMBERSHIP.USERS.VERIFY_REGISTRATION}`,
		{
			method: 'POST',
			headers: {
				'X-CM-ProjectId': Config.projectId,
				Authorization: `Bearer ${secretKey || Config.secretKey}`,
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({token}),
		}
	);
	return response;
}

export async function checkInvitationToken({secretKey, token}) {
	const response = await server.loadJson(
		`${Config.apiUrl}${Endpoints.PROJECT.MEMBERSHIP.USERS.CHECK_INVITATION_TOKEN}?token=${token}`,
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

export async function verifyInvitation({
	secretKey,
	token,
	password,
	repeatedPassword,
}) {
	const response = await server.loadJson(
		`${Config.apiUrl}${Endpoints.PROJECT.MEMBERSHIP.USERS.VERIFY_INVITATION}`,
		{
			method: 'POST',
			headers: {
				'X-CM-ProjectId': Config.projectId,
				Authorization: `Bearer ${secretKey || Config.secretKey}`,
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({token, password, repeatedPassword}),
		}
	);
	return response;
}

export async function login({username, password}) {
	const response = await server.loadJson(
		`${Config.apiUrl}${Endpoints.ACCOUNT.LOGIN(username, password)}`,
		{
			method: 'POST',
			headers: {
				'X-CM-ProjectId': Config.projectId,
				// Authorization: `Bearer ${Config.secretKey}`,
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
		}
	);
	return response ? response.result : null;
}

export async function checkAuthentication({secretKey}) {
	const response = await server.loadJson(
		`${Config.apiUrl}${Endpoints.ACCOUNT.CHECK_AUTH}`,
		{
			method: 'GET',
			headers: {
				'X-CM-ProjectId': Config.projectId,
				Authorization: `Bearer ${secretKey}`,
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
		}
	);
	return response ? response.result : null;
}

export async function logout({secretKey, mode, provider}) {
	const response = await server.loadJson(
		`${Config.apiUrl}${Endpoints.ACCOUNT.LOGOUT}?mode=${mode}&provide=${provider}`,
		{
			method: 'POST',
			headers: {
				'X-CM-ProjectId': Config.projectId,
				Authorization: `Bearer ${secretKey}`,
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
		}
	);
	return response ? response.result : null;
}

export async function createDeactivationRequest({secretKey}) {
	const response = await server.loadJson(
		`${Config.apiUrl}${Endpoints.PROJECT.MEMBERSHIP.USERS.CREATE_DEACTIVATION}`,
		{
			method: 'POST',
			headers: {
				'X-CM-ProjectId': Config.projectId,
				Authorization: `Bearer ${secretKey}`,
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
			body: null,
		}
	);
	return response;
}

export async function checkDeactivationToken({secretKey, token}) {
	const response = await server.loadJson(
		`${Config.apiUrl}${Endpoints.PROJECT.MEMBERSHIP.USERS.CHECK_PASSWORD_RESET}?token=${token}`,
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

export async function deactivateAccount({secretKey, token, password}) {
	const response = await server.loadJson(
		`${Config.apiUrl}${Endpoints.PROJECT.MEMBERSHIP.USERS.RESET_PASSWORD}`,
		{
			method: 'POST',
			headers: {
				'X-CM-ProjectId': Config.projectId,
				Authorization: `Bearer ${secretKey || Config.secretKey}`,
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({token, password}),
		}
	);
	return response;
}

export async function appleSignIn({
	identityToken,
	authorizationCode,
	fullName,
}) {
	const givenName =
		fullName?.givenName !== null || false ? fullName?.givenName : '';
	const familyName =
		fullName?.familyName !== null || false ? fullName?.familyName : '';

	const response = await server.loadJson(
		`${Config.apiUrl}${Endpoints.PROJECT.MEMBERSHIP.USERS.SIGN_WITH_APPLE}?authorizationCode=${authorizationCode}&givenName=${givenName}&familyName=${familyName}`,
		{
			method: 'POST',
			headers: {
				'X-CM-ProjectId': Config.projectId,
				Authorization: `Bearer ${Config.secretKey}`,
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				provider: 'apple',
				accessToken: identityToken,
				meta: {
					authorizationCode: authorizationCode,
					givenName: givenName,
					familyName: familyName,
				},
			}),
		}
	);
	return response;
}
