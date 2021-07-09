import * as server from '../server';
import Config from '../config';
import {CONFIG as Endpoints} from '../routes';
import {objectOrStringToString, toQueryString} from '../utils';

// Payments
export async function getOrder({secretKey, id, includePaidTransactions}) {
	const request = {
		includePaidTransactions,
	};

	const requestUrl = `${Config.apiUrl}${Endpoints.PROJECT.PAYMENTS.ORDERS.GET(
		id
	)}?${toQueryString(request)}`;

	const response = await server.loadJson(requestUrl, {
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

export async function getOrders({
	secretKey,
	pageNumber,
	pageSize,
	sort,
	filter,
	userId,
	includePaidTransactions,
	cluster,
}) {
	const request = {
		userId,
		includePaidTransactions,
		cluster,
		pageSize: pageSize || Config.tablePageSize,
		pageNumber: pageNumber || 0,
		filter: objectOrStringToString(filter),
		sort: objectOrStringToString(sort),
	};

	const requestUrl = `${
		Endpoints.PROJECT.PAYMENTS.ORDERS.GET_ALL
	}?${toQueryString(request)}`;

	const response = await server.loadJson(`${Config.apiUrl}${requestUrl}`, {
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

export async function createOrder({
	secretKey,
	coupons,
	accountId,
	orderSchemaId,
	userId,
	lines,
	asGuest,
	customerDetails,
	isTest,
	meta,
}) {
	const response = await server.loadJson(
		`${Config.apiUrl}${Endpoints.PROJECT.PAYMENTS.ORDERS.CREATE}`,
		{
			method: 'POST',
			headers: {
				'X-CM-ProjectId': Config.projectId,
				Authorization: `Bearer ${secretKey || Config.secretKey}`,
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				coupons,
				accountId,
				orderSchemaId,
				userId,
				lines,
				asGuest,
				customerDetails,
				isTest,
				meta,
			}),
		}
	);

	return response;
}

export async function createPayseraTransaction({secretKey, orderId, mode}) {
	const response = await server.loadJson(
		`${Config.apiUrl}${Endpoints.PROJECT.PAYMENTS.TRANSACTIONS.CREATE_PAYSERA(
			orderId
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
				mode,
			}),
		}
	);

	return response;
}

export async function createStripeTransaction({
	secretKey,
	orderId,
	paymentMethodId,
	customerId,
}) {
	const response = await server.loadJson(
		`${Config.apiUrl}${Endpoints.PROJECT.PAYMENTS.TRANSACTIONS.CREATE_STRIPE(
			orderId
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
				paymentMethodId,
				customerId,
			}),
		}
	);

	return response;
}

export async function createCustomer({
	secretKey,
	accountId,
	userId,
	name,
	email,
	description,
	phone,
	countryCode,
	city,
	address,
	address2,
	postalCode,
	area,
	meta,
}) {
	const response = await server.loadJson(
		`${Config.apiUrl}${Endpoints.PROJECT.PAYMENTS.CUSTOMERS.CREATE}`,
		{
			method: 'POST',
			headers: {
				'X-CM-ProjectId': Config.projectId,
				Authorization: `Bearer ${secretKey || Config.secretKey}`,
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				accountId,
				userId,
				name,
				email,
				description,
				phone,
				countryCode,
				city,
				address,
				address2,
				postalCode,
				area,
				meta,
			}),
		}
	);

	return response;
}

export async function updateCustomer({
	secretKey,
	id,
	name,
	email,
	description,
	phone,
	countryCode,
	city,
	address,
	address2,
	postalCode,
	area,
	meta,
}) {
	const response = await server.loadJson(
		`${Config.apiUrl}${Endpoints.PROJECT.PAYMENTS.CUSTOMERS.UPDATE(id)}`,
		{
			method: 'POST',
			headers: {
				'X-CM-ProjectId': Config.projectId,
				Authorization: `Bearer ${secretKey || Config.secretKey}`,
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				name,
				email,
				description,
				phone,
				countryCode,
				city,
				address,
				address2,
				postalCode,
				area,
				meta,
			}),
		}
	);

	return response;
}

export async function getCustomers({
	secretKey,
	userId,
	pageNumber,
	pageSize,
	filter,
	sort,
}) {
	const request = {
		userId,
		pageSize: pageSize || Config.tablePageSize,
		pageNumber: pageNumber || 0,
		filter: objectOrStringToString(filter),
		sort: objectOrStringToString(sort),
	};

	const requestUrl = `${
		Endpoints.PROJECT.PAYMENTS.CUSTOMERS.GET_ALL
	}?${toQueryString(request)}`;
	const response = await server.loadJson(`${Config.apiUrl}${requestUrl}`, {
		method: 'GET',
		headers: {
			'X-CM-ProjectId': Config.projectId,
			Authorization: `Bearer ${secretKey || Config.secretKey}`,
			Accept: 'application/json',
			'Content-Type': 'application/json',
		},
	});

	return response;
}

export async function getCustomer({secretKey, id}) {
	const response = await server.loadJson(
		`${Config.apiUrl}${Endpoints.PROJECT.PAYMENTS.CUSTOMERS.GET(id)}`,
		{
			method: 'GET',
			headers: {
				'X-CM-ProjectId': Config.projectId,
				Authorization: `Bearer ${secretKey || Config.secretKey}`,
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
		}
	);

	return response ? response.result : null;
}

export async function deleteCustomer({secretKey, id}) {
	const response = await server.loadJson(
		`${Config.apiUrl}${Endpoints.PROJECT.PAYMENTS.CUSTOMERS.DELETE(id)}`,
		{
			method: 'DELETE',
			headers: {
				'X-CM-ProjectId': Config.projectId,
				Authorization: `Bearer ${secretKey || Config.secretKey}`,
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
		}
	);

	return response;
}

export async function getPaymentMethodSetup({
	secretKey,
	accountId,
	allowOffline,
}) {
	const request = {
		accountId,
		allowOffline,
	};
	const response = await server.loadJson(
		`${Config.apiUrl}${
			Endpoints.PROJECT.PAYMENTS.METHODS.GET_SETUP
		}?${toQueryString(request)}`,
		{
			method: 'GET',
			headers: {
				'X-CM-ProjectId': Config.projectId,
				Authorization: `Bearer ${secretKey || Config.secretKey}`,
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
		}
	);

	return response;
}

export async function attachPaymentMethod({
	secretKey,
	customerId,
	setupId,
	setupClientSecret,
	asDefault,
	detachOthers,
}) {
	const response = await server.loadJson(
		`${Config.apiUrl}${Endpoints.PROJECT.PAYMENTS.METHODS.ATTACH}`,
		{
			method: 'POST',
			headers: {
				'X-CM-ProjectId': Config.projectId,
				Authorization: `Bearer ${secretKey || Config.secretKey}`,
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				customerId,
				setupId,
				setupClientSecret,
				asDefault,
				detachOthers,
			}),
		}
	);

	return response;
}

export async function detachPaymentMethod({secretKey, id, customerId}) {
	const response = await server.loadJson(
		`${Config.apiUrl}${Endpoints.PROJECT.PAYMENTS.METHODS.DETACH(id)}?customerId=${customerId}`,
		{
			method: 'DELETE',
			headers: {
				'X-CM-ProjectId': Config.projectId,
				Authorization: `Bearer ${secretKey || Config.secretKey}`,
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
		}
	);

	return response;
}

export async function updatePaymentMethod({
	secretKey,
	customerId,
	id,
	phone,
	name,
	description,
	email,
	city,
	countryCode,
	address,
	address2,
	postalCode,
	area,
	meta,
}) {
	const response = await server.loadJson(
		`${Config.apiUrl}${Endpoints.PROJECT.PAYMENTS.METHODS.UPDATE(id)}`,
		{
			method: 'PATCH',
			headers: {
				'X-CM-ProjectId': Config.projectId,
				Authorization: `Bearer ${secretKey || Config.secretKey}`,
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				customerId,
				phone,
				name,
				description,
				email,
				city,
				countryCode,
				address,
				address2,
				postalCode,
				area,
				meta,
			}),
		}
	);

	return response;
}

export async function createSubscription({
	secretKey,
	customerId,
	planId,
	paymentMethodId,
	coupon,
}) {
	const response = await server.loadJson(
		`${Config.apiUrl}${Endpoints.PROJECT.PAYMENTS.SUBSCRIPTIONS.CREATE(
			customerId
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
				planId,
				paymentMethodId,
				coupon,
			}),
		}
	);

	return response;
}

export async function verifyAppStoreSubscription({
	secretKey,
	customerId,
	planId,
	receipt,
	originalOrderId,
}) {
	const response = await server.loadJson(
		`${Config.apiUrl}${Endpoints.PROJECT.PAYMENTS.SUBSCRIPTIONS.VERIFY_APP_STORE}`,
		{
			method: 'POST',
			headers: {
				'X-CM-ProjectId': Config.projectId,
				Authorization: `Bearer ${secretKey || Config.secretKey}`,
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				customerId,
				planId,
				receipt,
				originalOrderId,
			}),
		}
	);

	return response;
}

export async function updateSubscription({
	secretKey,
	id,
	customerId,
	paymentMethodId,
	coupon,
	renewCanceled,
}) {
	const response = await server.loadJson(
		`${Config.apiUrl}${Endpoints.PROJECT.PAYMENTS.SUBSCRIPTIONS.UPDATE(
			customerId,
			id
		)}`,
		{
			method: 'PATCH',
			headers: {
				'X-CM-ProjectId': Config.projectId,
				Authorization: `Bearer ${secretKey || Config.secretKey}`,
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				paymentMethodId,
				coupon,
				renewCanceled,
			}),
		}
	);

	return response;
}

export async function changeSubscription({
	secretKey,
	id,
	customerId,
	newPlanId,
	paymentMethodId,
	coupon,
}) {
	const response = await server.loadJson(
		`${Config.apiUrl}${Endpoints.PROJECT.PAYMENTS.SUBSCRIPTIONS.CHANGE(
			customerId,
			id
		)}`,
		{
			method: 'PUT',
			headers: {
				'X-CM-ProjectId': Config.projectId,
				Authorization: `Bearer ${secretKey || Config.secretKey}`,
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				newPlanId,
				paymentMethodId,
				coupon,
			}),
		}
	);

	return response;
}

export async function cancelSubscription({secretKey, id, customerId}) {
	const response = await server.loadJson(
		`${Config.apiUrl}${Endpoints.PROJECT.PAYMENTS.SUBSCRIPTIONS.CANCEL(
			customerId,
			id
		)}`,
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

export async function getApplicableCoupons({
	secretKey,
	codes,
	orderSchemaId,
	userId,
	lines,
	asGuest,
}) {
	const response = await server.loadJson(
		`${Config.apiUrl}${Endpoints.PROJECT.PAYMENTS.DISCOUNTS.GET_APPLICABLE_COUPONS}`,
		{
			method: 'POST',
			headers: {
				'X-CM-ProjectId': Config.projectId,
				Authorization: `Bearer ${secretKey || Config.secretKey}`,
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				codes,
				orderSchemaId,
				userId,
				lines,
				asGuest,
			}),
		}
	);

	return response;
}

export async function getApplicableDiscounts({
	secretKey,
	orderSchemaId,
	userId,
	lines,
	asGuest,
}) {
	const response = await server.loadJson(
		`${Config.apiUrl}${Endpoints.PROJECT.PAYMENTS.DISCOUNTS.GET_APPLICABLE_DISCOUNTS}`,
		{
			method: 'POST',
			headers: {
				'X-CM-ProjectId': Config.projectId,
				Authorization: `Bearer ${secretKey || Config.secretKey}`,
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				orderSchemaId,
				userId,
				lines,
				asGuest,
			}),
		}
	);

	return response;
}
