export const CONFIG = {
    ACCOUNT: {
        LOGIN: (username, password) => `/auth/credentials?username=${username}&password=${password}`,
        REGISTER: '/accounts',
    },
    PROJECT: {
        DATABASE: {
            COLLECTION: {
                GET: (collectionName) => `/v2/db/schemas/${collectionName}`,
                RECORD: {
                    CREATE: (collectionName) => `/v2/db/${collectionName}`,
                    UPDATE_PART_OF_DOCUMENT: (collectionName) => `/v2/db/${collectionName}`,
                    UPDATE: (collectionName) => `/v2/db/${collectionName}/replaceOne`,
                    GET: (collectionName, id) => `/v2/db/${collectionName}/${id}`,
                    GET_WITH_FILTER: (collectionName) => `/v2/db/${collectionName}/findOne`,
                    GET_ALL: (collectionName) => `/v2/db/${collectionName}/find`,
                    DELETE: (collectionName) => `/v2/db/${collectionName}`,
                },
                FILES: {
                    UPLOAD: (collectionName) => `/v2/db/${collectionName}/files`,
                },
                AGGREGATES:{
                    GET: (collectionName, id) => `/v2/db/${collectionName}/aggregate/${id}`,
                }
            },
            TAXONOMY: {
                GET_ALL: '/v2/db/taxonomies',
                GET: (taxonomyName) => `/v2/db/taxonomies/${taxonomyName}`,
                TERM: {
                    GET: (id) => `/v2/db/terms/${id}`,
                    GET_ALL: (taxonomyName) => `/v2/db/taxonomies/${taxonomyName}/terms`,
                },
                SYSTEM: {
                    GET_TERMS: (taxonomyName) => `/v2/taxonomies/${taxonomyName}/terms`,
                },
            },
        },
        NOTIFICATIONS: {
            PUSH: {
                REGISTER_TOKEN: '/v2/notifications/push/token/expo',
                GET_ALL: (userId, pageNumber, pageSize) => `/v2/notifications/push?userId=${userId}&pageSize=${pageSize}&pageNumber=${pageNumber}`,
                GET: (id) => `/v2/notifications/push/${id}`,
                MARK_NOTIFICATION_AS_READ: (id) => `/v2/notifications/push/${id}/read`,
                MARK_NOTIFICATIONS_AS_READ: '/v2/notifications/push/read',
                GET_NOTIFICATIONS_COUNT: (userId) => `/v2/notifications/push/count?userId=${userId}`,
                SEND: '/v2/notifications/push',
                DELETE_DEVICE_TOKEN: (id) => `/v2/notifications/push/devices/${id}/token`,
                DELETE_DEVICE:(id) => `/v2/notifications/push/devices/${id}`,
            },
            EMAIL: {
                BASE_URL: '/v2/notifications/email',
                SEND_EMAIL: '/v2/notifications/email',
            },
        },
        MEMBERSHIP: {
            BASE_URL: '/v2/membership',
            USERS: {
                REGISTER: '/v2/membership/users/register',
                UPDATE: '/v2/membership/users',
                GET_ALL: '/v2/membership/users',
                GET: (id) => `/v2/membership/users/${id}?IncludeMeta=true&IncludeDevices=true`,
                DELETE: (id) => `/v2/membership/users/${id}`,
                RESET_PASSWORD: '/v2/membership/users/password/reset'
            },
        },
        FILES: {
            BASE_URL: '/v2/files',
            DOWNLOAD: (id) => `/v2/files?fileId=${id}`,        
            DOWNLOAD_OPTIMIZED: (id, optimmization) => `/v2/files?fileId=${id}&optimization=${optimmization}`,        
            UPLOAD: '/v2/files'    
        },
        CODE: {
            BASE_URL: '/v2/serverless',
            EXECUTE: (id) => `/v2/serverless/functions/${id}/execute`   
        },
    },
    API_KEYS: (env) => `/apikeys/${env}`, // /apikeys/{Environment}. There are 2 environments - "live" and "test". Key Types are "secret" and "publishable"
};
