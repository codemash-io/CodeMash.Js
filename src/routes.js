export const CONFIG = {
	ACCOUNT: {
		LOGIN: (username, password) =>
			`/v2/auth/credentials?username=${username}&password=${password}`,
		CHECK_AUTH: '/v2/auth',
		REGISTER: '/v2/membership/users/register',
		LOGOUT: '/auth/logout',
	},
	PROJECT: {
		DATABASE: {
			COLLECTION: {
				GET: (collectionName) => `/v2/db/schemas/${collectionName}`,
				RECORD: {
					CREATE: (collectionName) => `/v2/db/${collectionName}`,
					CREATE_MANY: (collectionName) => `/v2/db/${collectionName}/bulk`,
					PATCH: (collectionName, id) => `/v2/db/${collectionName}/${id}`,
					PATCH_BY_FILTER: (collectionName) => `/v2/db/${collectionName}`,
					PATCH_MANY: (collectionName) => `/v2/db/${collectionName}/bulk`,
					UPDATE: (collectionName) => `/v2/db/${collectionName}/replaceOne`,
					GET: (collectionName, id) => `/v2/db/${collectionName}/${id}`,
					GET_WITH_FILTER: (collectionName) =>
						`/v2/db/${collectionName}/findOne`,
					GET_ALL: (collectionName) => `/v2/db/${collectionName}/find`,
					DELETE: (collectionName, id) => `/v2/db/${collectionName}/${id}`,
					DELETE_BY_FILTER: (collectionName) => `/v2/db/${collectionName}`,
					DELETE_MANY: (collectionName) => `/v2/db/${collectionName}/bulk`,
					COUNT: (collectionName) => `/v2/db/${collectionName}/count`,
					DISTINCT: (collectionName) => `/v2/db/${collectionName}/distinct`,
					RESPONSIBILITY: (collectionName) =>
						`/v2/db/${collectionName}/responsibility`,
				},
				FILES: {
					UPLOAD: (collectionName) => `/v2/db/${collectionName}/files`,
				},
				AGGREGATES: {
					GET: (collectionName, id) =>
						`/v2/db/${collectionName}/aggregate/${id}`,
				},
			},
			TAXONOMY: {
				GET_ALL: '/v2/db/taxonomies',
				GET: (taxonomyName) => `/v2/db/taxonomies/${taxonomyName}`,
				TERM: {
					GET: (id) => `/v2/db/terms/${id}`,
					GET_ALL: (taxonomyName) => `/v2/db/taxonomies/${taxonomyName}/terms`,
					GET_CHILDREN: (taxonomyName) =>
						`/db/taxonomies/${taxonomyName}/terms/children`,
				},
				SYSTEM: {
					GET_TERMS: (taxonomyName) => `/v2/taxonomies/${taxonomyName}/terms`,
				},
			},
		},
		NOTIFICATIONS: {
			PUSH: {
				REGISTER_TOKEN: '/v2/notifications/push/devices/token',
				DELETE_DEVICE_TOKEN: (id) =>
					`/v2/notifications/push/devices/${id}/token`,
				GET_DEVICE: (id) => `/v2/notifications/push/devices/${id}`,
				GET_DEVICES: '/v2/notifications/push/devices',
				UPDATE_DEVICE: (id) => `/v2/notifications/push/devices/${id}`,
				UPDATE_DEVICE_USER: (id) => `/v2/notifications/push/devices/${id}/user`,
				DELETE_DEVICE: (id) => `/v2/notifications/push/devices/${id}`,
				GET_ALL: '/v2/notifications/push',
				GET: (id) => `/v2/notifications/push/${id}`,
				DELETE: (id) => `/v2/notifications/push/${id}`,
				MARK_NOTIFICATION_AS_READ: (id) => `/v2/notifications/push/${id}/read`,
				MARK_NOTIFICATIONS_AS_READ: '/v2/notifications/push/read',
				GET_NOTIFICATIONS_COUNT: '/v2/notifications/push/count',
				SEND: '/v2/notifications/push',
			},
			EMAIL: {
				BASE_URL: '/v2/notifications/email',
				SEND: '/v2/notifications/email',
			},
			SERVER_EVENTS: {
				CREATE_GROUP: '/v2/notifications/server-events/groups',
				DELETE_GROUP: (id) => `/v2/notifications/server-events/groups/${id}`,
				ADD_USERS_TO_GROUP: (id) =>
					`/v2/notifications/server-events/groups/${id}/users`,
				GET_GROUPS: '/v2/notifications/server-events/groups',
				GET_GROUP: (id) => `/v2/notifications/server-events/groups/${id}`,
				CREATE_CHANNEL: (groupId) =>
					`/v2/notifications/server-events/groups/${groupId}/channels`,
				DELETE_CHANNEL: (groupId, id) =>
					`/v2/notifications/server-events/groups/${groupId}/channels/${id}`,
				ADD_USERS_TO_CHANNEL: (groupId, id) =>
					`/v2/notifications/server-events/groups/${groupId}/channels/${id}/users`,
				GET_CHANNELS: (groupId) =>
					`/v2/notifications/server-events/groups/${groupId}/channels`,
				GET_MESSAGES: '/v2/notifications/server-events/messages',
				SEND_MESSAGE: '/v2/notifications/server-events/messages',
				READ_MESSAGES: '/v2/notifications/server-events/messages/read',
				AUTHORIZE_CONNECTION:
					'/v2/notifications/server-events/connections/initialize',
				OPEN_CONNECTION: '/v2/notifications/server-events/connections/open',
				HEARTBEAT_CONNECTION:
					'/v2/notifications/server-events/connections/health',
				CLOSE_CONNECTION: '/v2/notifications/server-events/connections/close',
				FILES: {
					UPLOAD: '/v2/notifications/server-events/messages/files',
				},
			},
		},
		MEMBERSHIP: {
			BASE_URL: '/v2/membership',
			USERS: {
				REGISTER: '/v2/membership/users/register',
				REGISTER_GUEST: '/v2/membership/users/register/guest',
				REGISTER_PHONE_USER: '/v2/membership/users/register/phone',
				INVITE: '/v2/membership/users/invite',
				UPDATE: (id) => `/v2/membership/users/${id}`,
				UPDATE_PROFILE: '/v2/membership/users/profile',
				GET_ALL: '/v2/membership/users',
				GET: (id) => `/v2/membership/users/${id}`,
				GET_BY_EMAIL: '/v2/membership/users/by-email',
				GET_PROFILE: '/v2/membership/users/profile',
				DELETE: (id) => `/v2/membership/users/${id}`,
				BLOCK: (id) => `/v2/membership/users/${id}/block`,
				UNBLOCK: (id) => `/v2/membership/users/${id}/unblock`,
				UPDATE_PASSWORD: '/v2/membership/users/password',
				CREATE_PASSWORD_RESET: '/v2/membership/users/password/reset/token',
				CHECK_PASSWORD_RESET: '/v2/membership/users/password/reset/token',
				RESET_PASSWORD: '/v2/membership/users/password/reset',
				VERIFY_REGISTRATION: '/v2/membership/users/verify',
				VERIFY_INVITATION: '/v2/membership/users/invitation/verify',
				CHECK_INVITATION_TOKEN: '/v2/membership/users/invitation/token',
				CREATE_DEACTIVATION: '/v2/membership/users/deactivate/token',
				CHECK_DEACTIVATION: '/v2/membership/users/deactivate/token',
				DEACTIVATE_ACCOUNT: '/v2/membership/users/deactivate',
				SIGN_WITH_APPLE: '/v2/auth/apple',
			},
		},
		FILES: {
			BASE_URL: '/v2/files',
			DOWNLOAD: (id) => `/v2/files?fileId=${id}`,
			DOWNLOAD_OPTIMIZED: (id, optimmization) =>
				`/v2/files?fileId=${id}&optimization=${optimmization}`,
			GET_URL: (id) => `/v2/files/url?fileId=${id}`,
			GET_URL_OPTIMIZED: (id, optimmization) =>
				`/v2/files/url?fileId=${id}&optimization=${optimmization}`,
			UPLOAD: '/v2/files',
		},
		CODE: {
			BASE_URL: '/v2/serverless',
			EXECUTE: (id) => `/v2/serverless/functions/${id}/execute`,
		},
		PAYMENTS: {
			BASE_URL: '/v2/payments',
			ORDERS: {
				GET: (orderId) => `/v2/payments/orders/${orderId}`,
				GET_ALL: '/v2/payments/orders',
				CREATE: '/v2/payments/orders',
			},
			AUTHENTICATION: {
				AUTHENTICATE_KEVIN: '/v2/payments/auth/kevin',
				AUTHENTICATE_KEVIN_TOKEN: '/v2/payments/auth/kevin/token',
			},
			TRANSACTIONS: {
				CREATE_PAYSERA: (orderId) =>
					`/v2/payments/orders/${orderId}/paysera/pay`,
				CREATE_STRIPE: (orderId) => `/v2/payments/orders/${orderId}/stripe/pay`,
				CREATE_KEVIN: (orderId) => `/v2/payments/orders/${orderId}/kevin/pay`,
				CREATE_DECTA: (orderId) => `/v2/payments/orders/${orderId}/decta/pay`,
				CHECK_KEVIN_STATUS: '/v2/payments/orders/kevin/payment/status',
			},
			DISCOUNTS: {
				CREATE_DISCOUNT: '/v2/payments/discounts',
				GET_APPLICABLE_COUPONS: '/v2/payments/discounts/coupon',
				GET_APPLICABLE_DISCOUNTS: '/v2/payments/discounts/applicable',
				DELETE_DISCOUNT: (id) => `/v2/payments/discounts/${id}`,
				UPDATE_DISCOUNT: (id) => `/v2/payments/discounts/${id}`,
			},
			CUSTOMERS: {
				CREATE: '/v2/payments/customers',
				GET: (customerId) => `/v2/payments/customers/${customerId}`,
				GET_ALL: '/v2/payments/customers',
				UPDATE: (customerId) => `/v2/payments/customers/${customerId}`,
				DELETE: (customerId) => `/v2/payments/customers/${customerId}`,
			},
			METHODS: {
				GET_SETUP: '/v2/payments/methods/setup',
				ATTACH: '/v2/payments/methods/attach',
				DETACH: (id) => `/v2/payments/methods/${id}`,
				UPDATE: (id) => `/v2/payments/methods/${id}`,
			},
			SUBSCRIPTIONS: {
				CREATE: (customerId) =>
					`/v2/payments/customers/${customerId}/subscriptions`,
				VERIFY_APP_STORE: '/v2/payments/customers/subscriptions/apple',
				VERIFY_PLAY_STORE: '/v2/payments/customers/subscriptions/google',
				UPDATE: (customerId, id) =>
					`/v2/payments/customers/${customerId}/subscriptions/${id}`,
				CHANGE: (customerId, id) =>
					`/v2/payments/customers/${customerId}/subscriptions/${id}`,
				CANCEL: (customerId, id) =>
					`/v2/payments/customers/${customerId}/subscriptions/${id}`,
			},
		},
	},
	API_KEYS: (env) => `/apikeys/${env}`, // /apikeys/{Environment}. There are 2 environments - "live" and "test". Key Types are "secret" and "publishable"
};
