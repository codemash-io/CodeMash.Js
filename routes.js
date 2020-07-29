export const CONFIG = {
  ACCOUNT: {
    LOGIN: (username, password) => `/v2/auth/credentials?username=${username}&password=${password}`,
    CHECK_AUTH: '/v2/auth',
    REGISTER: '/v2/membership/users/register'
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
          GET_WITH_FILTER: (collectionName) => `/v2/db/${collectionName}/findOne`,
          GET_ALL: (collectionName) => `/v2/db/${collectionName}/find`,
          DELETE: (collectionName, id) => `/v2/db/${collectionName}/${id}`,
          DELETE_BY_FILTER: (collectionName) => `/v2/db/${collectionName}`,
          DELETE_MANY: (collectionName) => `/v2/db/${collectionName}/bulk`,
          COUNT: (collectionName) => `/v2/db/${collectionName}/count`,
          DISTINCT: (collectionName) => `/v2/db/${collectionName}/distinct`
        },
        FILES: {
          UPLOAD: (collectionName) => `/v2/db/${collectionName}/files`
        },
        AGGREGATES: {
          GET: (collectionName, id) => `/v2/db/${collectionName}/aggregate/${id}`,
          GET_CUSTOM: (collectionName) => `/v2/db/${collectionName}/aggregate/pipeline`
        }
      },
      TAXONOMY: {
        GET_ALL: '/v2/db/taxonomies',
        GET: (taxonomyName) => `/v2/db/taxonomies/${taxonomyName}`,
        TERM: {
          GET: (id) => `/v2/db/terms/${id}`,
          GET_ALL: (taxonomyName) => `/v2/db/taxonomies/${taxonomyName}/terms`
        },
        SYSTEM: {
          GET_TERMS: (taxonomyName) => `/v2/taxonomies/${taxonomyName}/terms`
        }
      }
    },
    NOTIFICATIONS: {
      PUSH: {
        REGISTER_TOKEN: '/v2/notifications/push/devices/token',
        DELETE_DEVICE_TOKEN: (id) => `/v2/notifications/push/devices/${id}/token`,
        GET_ALL: '/v2/notifications/push',
        GET: (id) => `/v2/notifications/push/${id}`,
        MARK_NOTIFICATION_AS_READ: (id) => `/v2/notifications/push/${id}/read`,
        MARK_NOTIFICATIONS_AS_READ: '/v2/notifications/push/read',
        GET_NOTIFICATIONS_COUNT: (userId, deviceId) => `/v2/notifications/push/count?userId=${userId}&deviceId=${deviceId}`,
        SEND: '/v2/notifications/push',
        DELETE_DEVICE: (id) => `/v2/notifications/push/devices/${id}`
      },
      EMAIL: {
        BASE_URL: '/v2/notifications/email',
        SEND: '/v2/notifications/email'
      }
    },
    MEMBERSHIP: {
      BASE_URL: '/v2/membership',
      USERS: {
        REGISTER: '/v2/membership/users/register',
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
        CHECK_INVITATION_TOKEN: '/v2/membership/users/invitation/token'
      }
    },
    FILES: {
      BASE_URL: '/v2/files',
      DOWNLOAD: (id) => `/v2/files?fileId=${id}`,
      DOWNLOAD_OPTIMIZED: (id, optimmization) => `/v2/files?fileId=${id}&optimization=${optimmization}`,
      GET_URL: (id) => `/v2/files/url?fileId=${id}`,
      GET_URL_OPTIMIZED: (id, optimmization) => `/v2/files/url?fileId=${id}&optimization=${optimmization}`,
      UPLOAD: '/v2/files'
    },
    CODE: {
      BASE_URL: '/v2/serverless',
      EXECUTE: (id) => `/v2/serverless/functions/${id}/execute`
    },
    PAYMENTS: {
      BASE_URL: '/v2/payments',
      ORDERS: {
        GET: (orderId) => `/v2/payments/orders/${orderId}`,
        GET_ALL: '/v2/payments/orders',
        CREATE: '/v2/payments/orders'
      },
      TRANSACTIONS: {
        CREATE_PAYSERA: (orderId) => `/v2/payments/orders/${orderId}/paysera/pay`
      }
    }
  },
  API_KEYS: (env) => `/apikeys/${env}` // /apikeys/{Environment}. There are 2 environments - "live" and "test". Key Types are "secret" and "publishable"
};
