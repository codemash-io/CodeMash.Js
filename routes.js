export const CONFIG = {
    ACCOUNT: {
        LOGIN: (username, password) => `/auth/credentials?username=${username}&password=${password}`,
        REGISTER: '/accounts',
    },
    PROJECT: {
        DATABASE: {
            COLLECTION: {
                GET: (collectionName) => `/db/schemas/${collectionName}`,
                RECORD: {
                    CREATE: (collectionName) => `/db/${collectionName}`,
                    UPDATE_PART_OF_DOCUMENT: (collectionName) => `/db/${collectionName}`,
                    UPDATE: (collectionName) => `/db/${collectionName}/replaceOne`,
                    GET: (collectionName, id) => `/db/${collectionName}/${id}`,
                    GET_WITH_FILTER: (collectionName) => `/v1/db/${collectionName}/findOne`,
                    GET_ALL: (collectionName) => `/v1/db/${collectionName}/find`,
                    DELETE: (collectionName) => `/db/${collectionName}`,
                },
                FILES: {
                    UPLOAD: (collectionName) => `/db/${collectionName}/files`,
                },
            },
            TAXONOMY: {
                GET_ALL: '/db/taxonomies',
                GET: (taxonomyName) => `/db/taxonomies/${taxonomyName}`,
                TERM: {
                    GET: (id) => `/db/terms/${id}`,
                    GET_ALL: (taxonomyName) => `/db/taxonomies/${taxonomyName}/terms`,
                },
                SYSTEM: {
                    GET_TERMS: (taxonomyName) => `/taxonomies/${taxonomyName}/terms`,
                },
            },
        },
        NOTIFICATIONS: {
            PUSH: {
                REGISTER_TOKEN: '/notifications/push/token/expo',
                GET_ALL: (userId, pageNumber, pageSize) => `/notifications/push?userId=${userId}&pageSize=${pageSize}&pageNumber=${pageNumber}`,
                GET: (id) => `/notifications/push/${id}`,
                MARK_NOTIFICATION_AS_READ: (id) => `/notifications/push/${id}/read`,
                MARK_NOTIFICATIONS_AS_READ: '/notifications/push/read',
                GET_NOTIFICATIONS_COUNT: (userId) => `/notifications/push/count?userId=${userId}`,
                SEND: '/notifications/push',
                DELETE_DEVICE_TOKEN: (id) => `/v1/notifications/push/devices/${id}/token`,
                DELETE_DEVICE:(id) => `/v1/notifications/push/devices/${id}`,
            },
            EMAIL: {
                BASE_URL: '/email',
                SEND_EMAIL: '/email/send',
            },
        },
        MEMBERSHIP: {
            BASE_URL: '/membership',
            USERS: {
                REGISTER: '/v1/membership/users/register',
                UPDATE: '/v1/membership/users',
                GET_ALL: '/v1/membership/users',
                GET: (id) => `/v1/membership/users/${id}?IncludeMeta=true&IncludeDevices=true`,
                DELETE: (id) => `/v1/membership/users/${id}`,
                RESET_PASSWORD: '/membership/users/password/reset'
            },
        },
        FILES: {
            BASE_URL: '/files',
            DOWNLOAD: (id) => `/files?fileId=${id}`,        
            DOWNLOAD_OPTIMIZED: (id, optimmization) => `/files?fileId=${id}&optimization=${optimmization}`,        
            UPLOAD: '/files'    
        },
        CODE: {
            BASE_URL: '/serverless',
            EXECUTE: (id) => `/v1/serverless/functions/${id}/execute`   
        },
    },
    API_KEYS: (env) => `/apikeys/${env}`, // /apikeys/{Environment}. There are 2 environments - "live" and "test". Key Types are "secret" and "publishable"
};
