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
                SEND: '/notifications/push',
            },
            EMAIL: {
                BASE_URL: '/email',
                SEND_EMAIL: '/email/send',
            },
        },
        MEMBERSHIP: {
            BASE_URL: '/membership',
            USERS: {
                REGISTER: '/membership/users/register',
                UPDATE: '/membership/users',
                GET_ALL: '/membership/users',
                GET: (id) => `/membership/users/${id}`,
                RESET_PASSWORD: '/membership/users/password/reset/token'
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
