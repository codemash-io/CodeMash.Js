'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const fetch = require('node-fetch');

class HttpError extends Error {
  constructor(response, responseBody) {
    super(`${response.status} for ${response.url}`);

    if (responseBody && responseBody.responseStatus) {
      this.name = responseBody.responseStatus.errorCode;
      this.errors = responseBody.responseStatus.errors;
      this.message = responseBody.responseStatus.message;
    } else {
      this.name = 'HttpError';
      this.message = 'Unknow error';
    }

    this.status = response.status;
    this.response = response;
  }

}
async function loadText(url, requestInfo, mimeType = 'image/png') {
  const response = await fetch(url, requestInfo);

  if (response.status === 200) {
    return response.text().then(text => {
      return {
        contentType: mimeType,
        raw: text
      };
    });
  } else {
    throw new HttpError(response);
  }
}
async function loadJson(url, requestInfo) {
  const response = await fetch(url, requestInfo);

  if (response.status >= 200 && response.status < 300) {
    return response.text().then(text => {
      return text ? JSON.parse(text) : {};
    });
  } else {
    throw new HttpError(response, await response.json());
  }
}

class Config {
  constructor() {
    this.apiUrl = 'https://api.codemash.io';
  }

  init(config) {
    this.secretKey = config.secretKey;
    this.projectId = config.projectId;
    this.baseFilePath = `https://cm-${config.projectId}.s3.eu-central-1.amazonaws.com`;
  }

}

var APP = new Config();

const CONFIG = {
  ACCOUNT: {
    LOGIN: (username, password) => `/v2/auth/credentials?username=${username}&password=${password}`,
    CHECK_AUTH: '/v2/auth',
    REGISTER: '/v2/membership/users/register',
    LOGOUT: '/auth/logout'
  },
  PROJECT: {
    DATABASE: {
      COLLECTION: {
        GET: collectionName => `/v2/db/schemas/${collectionName}`,
        RECORD: {
          CREATE: collectionName => `/v2/db/${collectionName}`,
          CREATE_MANY: collectionName => `/v2/db/${collectionName}/bulk`,
          PATCH: (collectionName, id) => `/v2/db/${collectionName}/${id}`,
          PATCH_BY_FILTER: collectionName => `/v2/db/${collectionName}`,
          PATCH_MANY: collectionName => `/v2/db/${collectionName}/bulk`,
          UPDATE: collectionName => `/v2/db/${collectionName}/replaceOne`,
          GET: (collectionName, id) => `/v2/db/${collectionName}/${id}`,
          GET_WITH_FILTER: collectionName => `/v2/db/${collectionName}/findOne`,
          GET_ALL: collectionName => `/v2/db/${collectionName}/find`,
          DELETE: (collectionName, id) => `/v2/db/${collectionName}/${id}`,
          DELETE_BY_FILTER: collectionName => `/v2/db/${collectionName}`,
          DELETE_MANY: collectionName => `/v2/db/${collectionName}/bulk`,
          COUNT: collectionName => `/v2/db/${collectionName}/count`,
          DISTINCT: collectionName => `/v2/db/${collectionName}/distinct`
        },
        FILES: {
          UPLOAD: collectionName => `/v2/db/${collectionName}/files`
        },
        AGGREGATES: {
          GET: (collectionName, id) => `/v2/db/${collectionName}/aggregate/${id}`,
          GET_CUSTOM: collectionName => `/v2/db/${collectionName}/aggregate/pipeline`
        }
      },
      TAXONOMY: {
        GET_ALL: '/v2/db/taxonomies',
        GET: taxonomyName => `/v2/db/taxonomies/${taxonomyName}`,
        TERM: {
          GET: id => `/v2/db/terms/${id}`,
          GET_ALL: taxonomyName => `/v2/db/taxonomies/${taxonomyName}/terms`
        },
        SYSTEM: {
          GET_TERMS: taxonomyName => `/v2/taxonomies/${taxonomyName}/terms`
        }
      }
    },
    NOTIFICATIONS: {
      PUSH: {
        REGISTER_TOKEN: '/v2/notifications/push/devices/token',
        DELETE_DEVICE_TOKEN: id => `/v2/notifications/push/devices/${id}/token`,
        GET_DEVICE: id => `/v2/notifications/push/devices/${id}`,
        GET_DEVICES: '/v2/notifications/push/devices',
        UPDATE_DEVICE: id => `/v2/notifications/push/devices/${id}`,
        DELETE_DEVICE: id => `/v2/notifications/push/devices/${id}`,
        GET_ALL: '/v2/notifications/push',
        GET: id => `/v2/notifications/push/${id}`,
        MARK_NOTIFICATION_AS_READ: id => `/v2/notifications/push/${id}/read`,
        MARK_NOTIFICATIONS_AS_READ: '/v2/notifications/push/read',
        GET_NOTIFICATIONS_COUNT: '/v2/notifications/push/count',
        SEND: '/v2/notifications/push'
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
        UPDATE: id => `/v2/membership/users/${id}`,
        UPDATE_PROFILE: '/v2/membership/users/profile',
        GET_ALL: '/v2/membership/users',
        GET: id => `/v2/membership/users/${id}`,
        GET_BY_EMAIL: '/v2/membership/users/by-email',
        GET_PROFILE: '/v2/membership/users/profile',
        DELETE: id => `/v2/membership/users/${id}`,
        BLOCK: id => `/v2/membership/users/${id}/block`,
        UNBLOCK: id => `/v2/membership/users/${id}/unblock`,
        UPDATE_PASSWORD: '/v2/membership/users/password',
        CREATE_PASSWORD_RESET: '/v2/membership/users/password/reset/token',
        CHECK_PASSWORD_RESET: '/v2/membership/users/password/reset/token',
        RESET_PASSWORD: '/v2/membership/users/password/reset',
        VERIFY_REGISTRATION: '/v2/membership/users/verify',
        VERIFY_INVITATION: '/v2/membership/users/invitation/verify',
        CHECK_INVITATION_TOKEN: '/v2/membership/users/invitation/token',
        CREATE_DEACTIVATION: '/v2/membership/users/deactivate/token',
        CHECK_DEACTIVATION: '/v2/membership/users/deactivate/token',
        DEACTIVATE_ACCOUNT: '/v2/membership/users/deactivate'
      }
    },
    FILES: {
      BASE_URL: '/v2/files',
      DOWNLOAD: id => `/v2/files?fileId=${id}`,
      DOWNLOAD_OPTIMIZED: (id, optimmization) => `/v2/files?fileId=${id}&optimization=${optimmization}`,
      GET_URL: id => `/v2/files/url?fileId=${id}`,
      GET_URL_OPTIMIZED: (id, optimmization) => `/v2/files/url?fileId=${id}&optimization=${optimmization}`,
      UPLOAD: '/v2/files'
    },
    CODE: {
      BASE_URL: '/v2/serverless',
      EXECUTE: id => `/v2/serverless/functions/${id}/execute`
    },
    PAYMENTS: {
      BASE_URL: '/v2/payments',
      ORDERS: {
        GET: orderId => `/v2/payments/orders/${orderId}`,
        GET_ALL: '/v2/payments/orders',
        CREATE: '/v2/payments/orders'
      },
      TRANSACTIONS: {
        CREATE_PAYSERA: orderId => `/v2/payments/orders/${orderId}/paysera/pay`,
        CREATE_STRIPE: orderId => `/v2/payments/orders/${orderId}/stripe/pay`
      },
      CUSTOMERS: {
        CREATE: '/v2/payments/customers',
        GET: customerId => `/v2/payments/customers/${customerId}`,
        GET_ALL: '/v2/payments/customers',
        UPDATE: customerId => `/v2/payments/customers/${customerId}`,
        DELETE: customerId => `/v2/payments/customers/${customerId}`
      },
      METHODS: {
        GET_SETUP: '/v2/payments/methods/setup',
        ATTACH: '/v2/payments/methods/attach',
        DETACH: '/v2/payments/methods/detach'
      },
      SUBSCRIPTIONS: {
        CREATE: customerId => `/v2/payments/customers/${customerId}/subscriptions`,
        UPDATE: (customerId, id) => `/v2/payments/customers/${customerId}/subscriptions/${id}`,
        CHANGE: (customerId, id) => `/v2/payments/customers/${customerId}/subscriptions/${id}`,
        CANCEL: (customerId, id) => `/v2/payments/customers/${customerId}/subscriptions/${id}`
      }
    }
  },
  API_KEYS: env => `/apikeys/${env}` // /apikeys/{Environment}. There are 2 environments - "live" and "test". Key Types are "secret" and "publishable"

};

function objectOrStringToString(filter) {
  const stringifiedFilter = filter !== undefined && typeof filter === 'object' && filter !== null ? JSON.stringify(filter) : filter;
  if (!stringifiedFilter) return undefined;
  return stringifiedFilter;
}
function toQueryString(object) {
  if (typeof object === 'string') return object;
  const query = [];

  for (const key in object) {
    if (object[key] !== undefined && object[key] !== null) {
      query.push(encodeURIComponent(key) + '=' + encodeURIComponent(object[key]));
    }
  }

  return query.join('&');
}

async function getRecords({
  secretKey,
  collectionName,
  pageNumber,
  pageSize,
  sort,
  filter,
  projection,
  language,
  includeUserNames,
  includeRoleNames,
  includeCollectionNames,
  includeTermNames,
  referencedFields,
  addReferencesFirst,
  excludeCulture,
  cluster
}) {
  const response = await loadJson(`${APP.apiUrl}${CONFIG.PROJECT.DATABASE.COLLECTION.RECORD.GET_ALL(collectionName)}`, {
    method: 'POST',
    headers: {
      'X-CM-ProjectId': APP.projectId,
      'X-CM-Cluster': cluster,
      Authorization: `Bearer ${secretKey || APP.secretKey}`,
      Accept: 'application/json',
      'Content-Type': 'application/json',
      'Accept-Language': language || 'en'
    },
    body: JSON.stringify({
      pageSize: pageSize || APP.tablePageSize,
      pageNumber: pageNumber || 0,
      projection: objectOrStringToString(projection),
      filter: objectOrStringToString(filter),
      sort: objectOrStringToString(sort),
      referencedFields: referencedFields,
      includeUserNames,
      includeRoleNames,
      includeCollectionNames,
      includeTermNames,
      excludeCulture,
      addReferencesFirst
    })
  });
  if (!response) return null;
  return {
    totalCount: response.totalCount,
    result: JSON.parse(response.result)
  };
}
async function getRecord({
  secretKey,
  collectionName,
  id,
  projection,
  includeUserNames,
  includeRoleNames,
  includeCollectionNames,
  includeTermNames,
  referencedFields,
  addReferencesFirst,
  excludeCulture,
  language,
  cluster
}) {
  const response = await loadJson(`${APP.apiUrl}${CONFIG.PROJECT.DATABASE.COLLECTION.RECORD.GET(collectionName, id)}`, {
    method: 'POST',
    headers: {
      'X-CM-ProjectId': APP.projectId,
      'X-CM-Cluster': cluster,
      Authorization: `Bearer ${secretKey || APP.secretKey}`,
      Accept: 'application/json',
      'Content-Type': 'application/json',
      'Accept-Language': language || 'en'
    },
    body: JSON.stringify({
      projection: objectOrStringToString(projection),
      referencedFields: referencedFields,
      includeUserNames,
      includeRoleNames,
      includeCollectionNames,
      includeTermNames,
      excludeCulture,
      addReferencesFirst
    })
  });
  return response && response.result ? JSON.parse(response.result) : null;
}
async function getRecordWithFilter({
  secretKey,
  collectionName,
  filter,
  projection,
  includeUserNames,
  includeRoleNames,
  includeCollectionNames,
  includeTermNames,
  referencedFields,
  addReferencesFirst,
  excludeCulture,
  language,
  cluster
}) {
  const response = await loadJson(`${APP.apiUrl}${CONFIG.PROJECT.DATABASE.COLLECTION.RECORD.GET_WITH_FILTER(collectionName)}`, {
    method: 'POST',
    headers: {
      'X-CM-ProjectId': APP.projectId,
      'X-CM-Cluster': cluster,
      Authorization: `Bearer ${secretKey || APP.secretKey}`,
      Accept: 'application/json',
      'Content-Type': 'application/json',
      'Accept-Language': language || 'en'
    },
    body: JSON.stringify({
      filter: objectOrStringToString(filter),
      projection: objectOrStringToString(projection),
      referencedFields: referencedFields,
      includeUserNames,
      includeRoleNames,
      includeCollectionNames,
      includeTermNames,
      excludeCulture,
      addReferencesFirst
    })
  });
  return response && response.result ? JSON.parse(response.result) : null;
}
async function deleteRecord({
  secretKey,
  collectionName,
  id,
  ignoreTriggers,
  cluster
}) {
  let url = `${APP.apiUrl}${CONFIG.PROJECT.DATABASE.COLLECTION.RECORD.DELETE(collectionName, id)}`;
  const queries = [];
  if (ignoreTriggers) queries.push(`ignoreTriggers=${true}`);

  if (queries.length > 0) {
    url += `?${queries.join('&')}`;
  }

  const response = await loadJson(url, {
    method: 'DELETE',
    headers: {
      'X-CM-ProjectId': APP.projectId,
      'X-CM-Cluster': cluster,
      Authorization: `Bearer ${secretKey || APP.secretKey}`,
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: null
  });
  return response;
}
async function deleteRecordWithFilter({
  secretKey,
  collectionName,
  filter,
  ignoreTriggers,
  cluster
}) {
  let url = `${APP.apiUrl}${CONFIG.PROJECT.DATABASE.COLLECTION.RECORD.DELETE_BY_FILTER(collectionName)}`;
  const queries = [];
  if (ignoreTriggers) queries.push(`ignoreTriggers=${true}`);
  if (filter) queries.push(`filter=${objectOrStringToString(filter)}`);

  if (queries.length > 0) {
    url += `?${queries.join('&')}`;
  }

  const response = await loadJson(url, {
    method: 'DELETE',
    headers: {
      'X-CM-ProjectId': APP.projectId,
      'X-CM-Cluster': cluster,
      Authorization: `Bearer ${secretKey || APP.secretKey}`,
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: null
  });
  return response;
}
async function deleteManyRecords({
  secretKey,
  collectionName,
  filter,
  ignoreTriggers,
  cluster
}) {
  let url = `${APP.apiUrl}${CONFIG.PROJECT.DATABASE.COLLECTION.RECORD.DELETE_MANY(collectionName)}`;
  const queries = [];
  if (ignoreTriggers) queries.push(`ignoreTriggers=${true}`);
  if (filter) queries.push(`filter=${objectOrStringToString(filter)}`);

  if (queries.length > 0) {
    url += `?${queries.join('&')}`;
  }

  const response = await loadJson(url, {
    method: 'DELETE',
    headers: {
      'X-CM-ProjectId': APP.projectId,
      'X-CM-Cluster': cluster,
      Authorization: `Bearer ${secretKey || APP.secretKey}`,
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: null
  });
  return response;
}
async function insertRecord({
  secretKey,
  collectionName,
  document,
  bypassDocumentValidation,
  waitForFileUpload,
  ignoreTriggers,
  cluster
}) {
  const response = await loadJson(`${APP.apiUrl}${CONFIG.PROJECT.DATABASE.COLLECTION.RECORD.CREATE(collectionName)}`, {
    method: 'POST',
    headers: {
      'X-CM-ProjectId': APP.projectId,
      'X-CM-Cluster': cluster,
      Authorization: `Bearer ${secretKey || APP.secretKey}`,
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      document: objectOrStringToString(document),
      bypassDocumentValidation,
      waitForFileUpload,
      ignoreTriggers
    })
  });
  return response && response.result ? JSON.parse(response.result) : null;
}
async function insertManyRecords({
  secretKey,
  collectionName,
  documents,
  bypassDocumentValidation,
  ignoreTriggers,
  cluster
}) {
  const stringDocs = [];

  if (documents && Array.isArray(documents)) {
    documents.forEach(doc => {
      stringDocs.push(objectOrStringToString(doc));
    });
  }

  const response = await loadJson(`${APP.apiUrl}${CONFIG.PROJECT.DATABASE.COLLECTION.RECORD.CREATE_MANY(collectionName)}`, {
    method: 'POST',
    headers: {
      'X-CM-ProjectId': APP.projectId,
      'X-CM-Cluster': cluster,
      Authorization: `Bearer ${secretKey || APP.secretKey}`,
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      documents: stringDocs,
      bypassDocumentValidation,
      ignoreTriggers
    })
  });
  return response.result;
}
async function updateRecord({
  secretKey,
  collectionName,
  id,
  update,
  waitForFileUpload,
  bypassDocumentValidation,
  ignoreTriggers,
  cluster
}) {
  const response = await loadJson(`${APP.apiUrl}${CONFIG.PROJECT.DATABASE.COLLECTION.RECORD.PATCH(collectionName, id)}`, {
    method: 'PATCH',
    headers: {
      'X-CM-ProjectId': APP.projectId,
      'X-CM-Cluster': cluster,
      Authorization: `Bearer ${secretKey || APP.secretKey}`,
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      update: objectOrStringToString(update),
      waitForFileUpload,
      bypassDocumentValidation,
      ignoreTriggers
    })
  });
  return response ? response.result : null;
}
async function updateRecordWithFilter({
  secretKey,
  collectionName,
  filter,
  update,
  waitForFileUpload,
  bypassDocumentValidation,
  ignoreTriggers,
  cluster
}) {
  const response = await loadJson(`${APP.apiUrl}${CONFIG.PROJECT.DATABASE.COLLECTION.RECORD.PATCH_BY_FILTER(collectionName)}`, {
    method: 'PATCH',
    headers: {
      'X-CM-ProjectId': APP.projectId,
      'X-CM-Cluster': cluster,
      Authorization: `Bearer ${secretKey || APP.secretKey}`,
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      filter: objectOrStringToString(filter),
      update: objectOrStringToString(update),
      waitForFileUpload,
      bypassDocumentValidation,
      ignoreTriggers
    })
  });
  return response ? response.result : null;
}
async function updateManyRecords({
  secretKey,
  collectionName,
  filter,
  update,
  bypassDocumentValidation,
  ignoreTriggers,
  cluster
}) {
  const response = await loadJson(`${APP.apiUrl}${CONFIG.PROJECT.DATABASE.COLLECTION.RECORD.PATCH_MANY(collectionName)}`, {
    method: 'PATCH',
    headers: {
      'X-CM-ProjectId': APP.projectId,
      'X-CM-Cluster': cluster,
      Authorization: `Bearer ${secretKey || APP.secretKey}`,
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      filter: objectOrStringToString(filter),
      update: objectOrStringToString(update),
      bypassDocumentValidation,
      ignoreTriggers
    })
  });
  return response ? response.result : null;
}
async function replaceRecord({
  secretKey,
  collectionName,
  id,
  document,
  waitForFileUpload,
  bypassDocumentValidation,
  ignoreTriggers,
  isUpsert,
  cluster
}) {
  const response = await loadJson(`${APP.apiUrl}${CONFIG.PROJECT.DATABASE.COLLECTION.RECORD.UPDATE(collectionName)}`, {
    method: 'PUT',
    headers: {
      'X-CM-ProjectId': APP.projectId,
      'X-CM-Cluster': cluster,
      Authorization: `Bearer ${secretKey || APP.secretKey}`,
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      filter: JSON.stringify({
        _id: id
      }),
      document: objectOrStringToString(document),
      waitForFileUpload,
      bypassDocumentValidation,
      ignoreTriggers,
      isUpsert
    })
  });
  return response ? response.result : null;
}
async function replaceRecordWithFilter({
  secretKey,
  collectionName,
  filter,
  document,
  waitForFileUpload,
  bypassDocumentValidation,
  ignoreTriggers,
  isUpsert,
  cluster
}) {
  const response = await loadJson(`${APP.apiUrl}${CONFIG.PROJECT.DATABASE.COLLECTION.RECORD.UPDATE(collectionName)}`, {
    method: 'PUT',
    headers: {
      'X-CM-ProjectId': APP.projectId,
      'X-CM-Cluster': cluster,
      Authorization: `Bearer ${secretKey || APP.secretKey}`,
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      filter: objectOrStringToString(filter),
      document: objectOrStringToString(document),
      waitForFileUpload,
      bypassDocumentValidation,
      ignoreTriggers,
      isUpsert
    })
  });
  return response ? response.result : null;
}
async function executeAggregate({
  secretKey,
  collectionName,
  id,
  pipeline,
  tokens,
  cluster
}) {
  const url = pipeline ? `${APP.apiUrl}${CONFIG.PROJECT.DATABASE.COLLECTION.AGGREGATES.GET_CUSTOM(collectionName)}` : `${APP.apiUrl}${CONFIG.PROJECT.DATABASE.COLLECTION.AGGREGATES.GET(collectionName, id)}`;
  const response = await loadJson(url, {
    method: 'POST',
    headers: {
      'X-CM-ProjectId': APP.projectId,
      'X-CM-Cluster': cluster,
      Authorization: `Bearer ${secretKey || APP.secretKey}`,
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      tokens
    })
  });
  return response && response.result ? JSON.parse(response.result) : null;
}
async function count({
  secretKey,
  collectionName,
  filter,
  limit,
  skip,
  cluster
}) {
  const response = await loadJson(`${APP.apiUrl}${CONFIG.PROJECT.DATABASE.COLLECTION.RECORD.COUNT(collectionName)}`, {
    method: 'POST',
    headers: {
      'X-CM-ProjectId': APP.projectId,
      'X-CM-Cluster': cluster,
      Authorization: `Bearer ${secretKey || APP.secretKey}`,
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      filter: objectOrStringToString(filter),
      limit,
      skip
    })
  });
  return response ? response.result : null;
}
async function distinct({
  secretKey,
  collectionName,
  filter,
  field,
  cluster
}) {
  const response = await loadJson(`${APP.apiUrl}${CONFIG.PROJECT.DATABASE.COLLECTION.RECORD.DISTINCT(collectionName)}`, {
    method: 'POST',
    headers: {
      'X-CM-ProjectId': APP.projectId,
      'X-CM-Cluster': cluster,
      Authorization: `Bearer ${secretKey || APP.secretKey}`,
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      filter: objectOrStringToString(filter),
      field
    })
  });
  return response ? response.result : null;
}
async function getTerms({
  secretKey,
  taxonomyName,
  language,
  pageNumber,
  pageSize,
  sort,
  filter,
  projection,
  excludeCulture,
  cluster
}) {
  const response = await loadJson(`${APP.apiUrl}${CONFIG.PROJECT.DATABASE.TAXONOMY.TERM.GET_ALL(taxonomyName)}`, {
    method: 'POST',
    headers: {
      'X-CM-ProjectId': APP.projectId,
      'X-CM-Cluster': cluster,
      Authorization: `Bearer ${secretKey || APP.secretKey}`,
      Accept: 'application/json',
      'Content-Type': 'application/json',
      'Accept-Language': language || 'en'
    },
    body: JSON.stringify({
      pageSize: pageSize || APP.tablePageSize,
      pageNumber: pageNumber || 0,
      projection: objectOrStringToString(projection),
      filter: objectOrStringToString(filter),
      sort: objectOrStringToString(sort),
      excludeCulture
    })
  });
  if (!response) return null;
  return {
    totalCount: response.totalCount,
    result: response.result
  };
}

var databaseService = /*#__PURE__*/Object.freeze({
  __proto__: null,
  getRecords: getRecords,
  getRecord: getRecord,
  getRecordWithFilter: getRecordWithFilter,
  deleteRecord: deleteRecord,
  deleteRecordWithFilter: deleteRecordWithFilter,
  deleteManyRecords: deleteManyRecords,
  insertRecord: insertRecord,
  insertManyRecords: insertManyRecords,
  updateRecord: updateRecord,
  updateRecordWithFilter: updateRecordWithFilter,
  updateManyRecords: updateManyRecords,
  replaceRecord: replaceRecord,
  replaceRecordWithFilter: replaceRecordWithFilter,
  executeAggregate: executeAggregate,
  count: count,
  distinct: distinct,
  getTerms: getTerms
});

async function downloadFile({
  secretKey,
  fileId,
  optimization,
  asBase64
}) {
  let route = `${APP.apiUrl}${CONFIG.PROJECT.FILES.DOWNLOAD(fileId)}`;

  if (optimization) {
    route = `${APP.apiUrl}${CONFIG.PROJECT.FILES.DOWNLOAD_OPTIMIZED(fileId, optimization)}`;
  }

  const response = await loadText(route, {
    method: 'GET',
    headers: {
      'X-CM-ProjectId': APP.projectId,
      Authorization: `Bearer ${secretKey || APP.secretKey}`,
      Accept: asBase64 ? 'text/plain' : undefined
    },
    body: null
  });
  const result = {
    fileId,
    file: response
  };
  return result;
}
async function getFileUrl({
  secretKey,
  fileId,
  optimization
}) {
  const route = optimization ? `${APP.apiUrl}${CONFIG.PROJECT.FILES.GET_URL_OPTIMIZED(fileId, optimization)}` : `${APP.apiUrl}${CONFIG.PROJECT.FILES.GET_URL(fileId)}`;
  const response = await loadJson(route, {
    method: 'GET',
    headers: {
      'X-CM-ProjectId': APP.projectId,
      Authorization: `Bearer ${secretKey || APP.secretKey}`,
      'Content-Type': 'application/json',
      Accept: 'application/json'
    },
    body: null
  });
  return response;
} // Pass either fileUri (local file location), file or base64 string

async function uploadFile({
  secretKey,
  path,
  fileUri,
  file,
  base64,
  fileType,
  fileName
}) {
  if (base64) {
    const response = await loadJson(`${APP.apiUrl}${CONFIG.PROJECT.FILES.UPLOAD}`, {
      method: 'POST',
      headers: {
        'X-CM-ProjectId': APP.projectId,
        Authorization: `Bearer ${secretKey || APP.secretKey}`,
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify({
        path,
        base64File: {
          data: base64,
          contentType: fileType,
          fileName
        }
      })
    });
    return response;
  }

  const formData = new FormData();

  if (path != null && path !== undefined) {
    formData.append('path', path);
  }

  if (fileUri) {
    const finalFilename = fileName || fileUri.substring(fileUri.lastIndexOf('/') + 1);
    formData.append('file', {
      uri: fileUri,
      name: finalFilename,
      type: fileType
    });
  } else {
    formData.append('file', file);
  }

  const response = await loadJson(`${APP.apiUrl}${CONFIG.PROJECT.FILES.UPLOAD}`, {
    method: 'POST',
    headers: {
      'X-CM-ProjectId': APP.projectId,
      Authorization: `Bearer ${secretKey || APP.secretKey}`
    },
    body: formData
  });
  return response;
}
async function uploadRecordFile({
  secretKey,
  fileUri,
  file,
  base64,
  fileType,
  fileName,
  collectionName,
  recordId,
  uniqueFieldName,
  cluster
}) {
  if (base64) {
    const response = await loadJson(`${APP.apiUrl}${CONFIG.PROJECT.DATABASE.COLLECTION.FILES.UPLOAD(collectionName)}`, {
      method: 'POST',
      headers: {
        'X-CM-ProjectId': APP.projectId,
        Authorization: `Bearer ${secretKey || APP.secretKey}`,
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify({
        recordId,
        uniqueFieldName,
        cluster,
        base64File: {
          data: base64,
          contentType: fileType,
          fileName
        }
      })
    });
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
    const finalFilename = fileName || fileUri.substring(fileUri.lastIndexOf('/') + 1);
    formData.append('file', {
      uri: fileUri,
      name: finalFilename,
      type: fileType
    });
  } else {
    formData.append('file', file);
  }

  const response = await loadJson(`${APP.apiUrl}${CONFIG.PROJECT.DATABASE.COLLECTION.FILES.UPLOAD(collectionName)}`, {
    method: 'POST',
    headers: {
      'X-CM-ProjectId': APP.projectId,
      Authorization: `Bearer ${secretKey || APP.secretKey}`
    },
    body: formData
  });
  return response;
}
function getFilePath(directory, fileName) {
  return `${APP.baseFilePath}/${directory}/${fileName}`;
}

var filesService = /*#__PURE__*/Object.freeze({
  __proto__: null,
  downloadFile: downloadFile,
  getFileUrl: getFileUrl,
  uploadFile: uploadFile,
  uploadRecordFile: uploadRecordFile,
  getFilePath: getFilePath
});

async function register({
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
  fax,
  company,
  postalCode,
  gender,
  birthday,
  roles
}) {
  const response = await loadJson(`${APP.apiUrl}${CONFIG.PROJECT.MEMBERSHIP.USERS.REGISTER}`, {
    method: 'POST',
    headers: {
      'X-CM-ProjectId': APP.projectId,
      Authorization: `Bearer ${secretKey || APP.secretKey}`,
      Accept: 'application/json',
      'Content-Type': 'application/json'
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
      fax,
      company,
      postalCode,
      gender,
      birthday,
      roles
    })
  });
  return response;
}
async function invite({
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
  fax,
  company,
  postalCode,
  gender,
  birthday,
  roles
}) {
  const response = await loadJson(`${APP.apiUrl}${CONFIG.PROJECT.MEMBERSHIP.USERS.INVITE}`, {
    method: 'POST',
    headers: {
      'X-CM-ProjectId': APP.projectId,
      Authorization: `Bearer ${secretKey || APP.secretKey}`,
      Accept: 'application/json',
      'Content-Type': 'application/json'
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
      fax,
      company,
      postalCode,
      gender,
      birthday,
      roles
    })
  });
  return response;
}
async function updateUser({
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
  fax,
  company,
  postalCode,
  gender,
  birthday,
  roles
}) {
  const response = await loadJson(`${APP.apiUrl}${CONFIG.PROJECT.MEMBERSHIP.USERS.UPDATE(id)}`, {
    method: 'PATCH',
    headers: {
      'X-CM-ProjectId': APP.projectId,
      Authorization: `Bearer ${secretKey || APP.secretKey}`,
      Accept: 'application/json',
      'Content-Type': 'application/json'
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
      fax,
      company,
      postalCode,
      gender,
      birthday,
      roles
    })
  });
  return response;
}
async function updateProfile({
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
  fax,
  company,
  postalCode,
  gender,
  birthday
}) {
  const response = await loadJson(`${APP.apiUrl}${CONFIG.PROJECT.MEMBERSHIP.USERS.UPDATE_PROFILE}`, {
    method: 'PATCH',
    headers: {
      'X-CM-ProjectId': APP.projectId,
      Authorization: `Bearer ${secretKey || APP.secretKey}`,
      Accept: 'application/json',
      'Content-Type': 'application/json'
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
      fax,
      company,
      postalCode,
      gender,
      birthday
    })
  });
  return response;
}
async function getUsers({
  secretKey,
  pageNumber,
  pageSize,
  filter,
  sort,
  includePermissions,
  includeDevices,
  includeMeta
}) {
  const response = await loadJson(`${APP.apiUrl}${CONFIG.PROJECT.MEMBERSHIP.USERS.GET_ALL}`, {
    method: 'POST',
    headers: {
      'X-CM-ProjectId': APP.projectId,
      Authorization: `Bearer ${secretKey || APP.secretKey}`,
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      pageSize: pageSize || APP.tablePageSize,
      pageNumber: pageNumber || 0,
      filter: objectOrStringToString(filter),
      sort: objectOrStringToString(sort),
      includePermissions,
      includeDevices,
      includeMeta
    })
  });
  return response;
}
async function getUser({
  secretKey,
  id,
  provider,
  includePermissions,
  includeDevices,
  includeMeta,
  includeUnreadNotifications
}) {
  let url = `${APP.apiUrl}${CONFIG.PROJECT.MEMBERSHIP.USERS.GET(id)}`;
  const queries = [];
  if (provider) queries.push(`provider=${provider}`);
  if (includePermissions) queries.push(`includePermissions=${true}`);
  if (includeDevices) queries.push(`includeDevices=${true}`);
  if (includeMeta) queries.push(`includeMeta=${true}`);
  if (includeUnreadNotifications) queries.push(`includeUnreadNotifications=${true}`);

  if (queries.length > 0) {
    url += `?${queries.join('&')}`;
  }

  const response = await loadJson(url, {
    method: 'GET',
    headers: {
      'X-CM-ProjectId': APP.projectId,
      Authorization: `Bearer ${secretKey || APP.secretKey}`,
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: null
  });
  return response.result;
}
async function getUserByEmail({
  secretKey,
  email,
  provider,
  includePermissions,
  includeDevices,
  includeMeta,
  includeUnreadNotifications
}) {
  let url = `${APP.apiUrl}${CONFIG.PROJECT.MEMBERSHIP.USERS.GET_BY_EMAIL}`;
  const queries = [];
  if (email) queries.push(`email=${email}`);
  if (provider) queries.push(`provider=${provider}`);
  if (includePermissions) queries.push(`includePermissions=${true}`);
  if (includeDevices) queries.push(`includeDevices=${true}`);
  if (includeMeta) queries.push(`includeMeta=${true}`);
  if (includeUnreadNotifications) queries.push(`includeUnreadNotifications=${true}`);

  if (queries.length > 0) {
    url += `?${queries.join('&')}`;
  }

  const response = await loadJson(url, {
    method: 'GET',
    headers: {
      'X-CM-ProjectId': APP.projectId,
      Authorization: `Bearer ${secretKey || APP.secretKey}`,
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: null
  });
  return response.result;
}
async function getProfile({
  secretKey,
  includePermissions,
  includeDevices,
  includeMeta,
  includeUnreadNotifications
}) {
  let url = `${APP.apiUrl}${CONFIG.PROJECT.MEMBERSHIP.USERS.GET_PROFILE}`;
  const queries = [];
  if (includePermissions) queries.push(`includePermissions=${true}`);
  if (includeDevices) queries.push(`includeDevices=${true}`);
  if (includeMeta) queries.push(`includeMeta=${true}`);
  if (includeUnreadNotifications) queries.push(`includeUnreadNotifications=${true}`);

  if (queries.length > 0) {
    url += `?${queries.join('&')}`;
  }

  const response = await loadJson(url, {
    method: 'GET',
    headers: {
      'X-CM-ProjectId': APP.projectId,
      Authorization: `Bearer ${secretKey || APP.secretKey}`,
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: null
  });
  return response.result;
}
async function deleteUser({
  secretKey,
  id
}) {
  const response = await loadJson(`${APP.apiUrl}${CONFIG.PROJECT.MEMBERSHIP.USERS.DELETE(id)}`, {
    method: 'DELETE',
    headers: {
      'X-CM-ProjectId': APP.projectId,
      Authorization: `Bearer ${secretKey || APP.secretKey}`,
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: null
  });
  return response;
}
async function blockUser({
  secretKey,
  id
}) {
  const response = await loadJson(`${APP.apiUrl}${CONFIG.PROJECT.MEMBERSHIP.USERS.BLOCK(id)}`, {
    method: 'PUT',
    headers: {
      'X-CM-ProjectId': APP.projectId,
      Authorization: `Bearer ${secretKey || APP.secretKey}`,
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: null
  });
  return response;
}
async function unblockUser({
  secretKey,
  id
}) {
  const response = await loadJson(`${APP.apiUrl}${CONFIG.PROJECT.MEMBERSHIP.USERS.UNBLOCK(id)}`, {
    method: 'PUT',
    headers: {
      'X-CM-ProjectId': APP.projectId,
      Authorization: `Bearer ${secretKey || APP.secretKey}`,
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: null
  });
  return response;
}
async function updatePassword({
  secretKey,
  userId,
  currentPassword,
  password,
  repeatedPassword
}) {
  const response = await loadJson(`${APP.apiUrl}${CONFIG.PROJECT.MEMBERSHIP.USERS.UPDATE_PASSWORD}`, {
    method: 'PATCH',
    headers: {
      'X-CM-ProjectId': APP.projectId,
      Authorization: `Bearer ${secretKey || APP.secretKey}`,
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      userId,
      currentPassword,
      password,
      repeatedPassword
    })
  });
  return response;
}
async function createPasswordReset({
  secretKey,
  email
}) {
  const response = await loadJson(`${APP.apiUrl}${CONFIG.PROJECT.MEMBERSHIP.USERS.CREATE_PASSWORD_RESET}`, {
    method: 'POST',
    headers: {
      'X-CM-ProjectId': APP.projectId,
      Authorization: `Bearer ${secretKey || APP.secretKey}`,
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      email
    })
  });
  return response;
}
async function checkPasswordReset({
  secretKey,
  token
}) {
  const response = await loadJson(`${APP.apiUrl}${CONFIG.PROJECT.MEMBERSHIP.USERS.CHECK_PASSWORD_RESET}?token=${token}`, {
    method: 'GET',
    headers: {
      'X-CM-ProjectId': APP.projectId,
      Authorization: `Bearer ${secretKey || APP.secretKey}`,
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: null
  });
  return response;
}
async function resetPassword({
  secretKey,
  token,
  password,
  repeatedPassword
}) {
  const response = await loadJson(`${APP.apiUrl}${CONFIG.PROJECT.MEMBERSHIP.USERS.RESET_PASSWORD}`, {
    method: 'POST',
    headers: {
      'X-CM-ProjectId': APP.projectId,
      Authorization: `Bearer ${secretKey || APP.secretKey}`,
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      token,
      password,
      repeatedPassword
    })
  });
  return response;
}
async function verifyRegistration({
  secretKey,
  token
}) {
  const response = await loadJson(`${APP.apiUrl}${CONFIG.PROJECT.MEMBERSHIP.USERS.VERIFY_REGISTRATION}`, {
    method: 'POST',
    headers: {
      'X-CM-ProjectId': APP.projectId,
      Authorization: `Bearer ${secretKey || APP.secretKey}`,
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      token
    })
  });
  return response;
}
async function checkInvitationToken({
  secretKey,
  token
}) {
  const response = await loadJson(`${APP.apiUrl}${CONFIG.PROJECT.MEMBERSHIP.USERS.CHECK_INVITATION_TOKEN}?token=${token}`, {
    method: 'GET',
    headers: {
      'X-CM-ProjectId': APP.projectId,
      Authorization: `Bearer ${secretKey || APP.secretKey}`,
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: null
  });
  return response;
}
async function verifyInvitation({
  secretKey,
  token,
  password,
  repeatedPassword
}) {
  const response = await loadJson(`${APP.apiUrl}${CONFIG.PROJECT.MEMBERSHIP.USERS.VERIFY_INVITATION}`, {
    method: 'POST',
    headers: {
      'X-CM-ProjectId': APP.projectId,
      Authorization: `Bearer ${secretKey || APP.secretKey}`,
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      token,
      password,
      repeatedPassword
    })
  });
  return response;
}
async function login({
  username,
  password
}) {
  const response = await loadJson(`${APP.apiUrl}${CONFIG.ACCOUNT.LOGIN(username, password)}`, {
    method: 'POST',
    headers: {
      'X-CM-ProjectId': APP.projectId,
      // Authorization: `Bearer ${Config.secretKey}`,
      Accept: 'application/json',
      'Content-Type': 'application/json'
    }
  });
  return response ? response.result : null;
}
async function checkAuthentication({
  secretKey
}) {
  const response = await loadJson(`${APP.apiUrl}${CONFIG.ACCOUNT.CHECK_AUTH}`, {
    method: 'GET',
    headers: {
      'X-CM-ProjectId': APP.projectId,
      Authorization: `Bearer ${secretKey}`,
      Accept: 'application/json',
      'Content-Type': 'application/json'
    }
  });
  return response ? response.result : null;
}
async function logout({
  secretKey,
  mode,
  provider
}) {
  const response = await loadJson(`${APP.apiUrl}${CONFIG.ACCOUNT.LOGOUT}?mode=${mode}&provide=${provider}`, {
    method: 'POST',
    headers: {
      'X-CM-ProjectId': APP.projectId,
      Authorization: `Bearer ${secretKey}`,
      Accept: 'application/json',
      'Content-Type': 'application/json'
    }
  });
  return response ? response.result : null;
}
async function createDeactivationRequest({
  secretKey
}) {
  const response = await loadJson(`${APP.apiUrl}${CONFIG.PROJECT.MEMBERSHIP.USERS.CREATE_DEACTIVATION}`, {
    method: 'POST',
    headers: {
      'X-CM-ProjectId': APP.projectId,
      Authorization: `Bearer ${secretKey}`,
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: null
  });
  return response;
}
async function checkDeactivationToken({
  secretKey,
  token
}) {
  const response = await loadJson(`${APP.apiUrl}${CONFIG.PROJECT.MEMBERSHIP.USERS.CHECK_PASSWORD_RESET}?token=${token}`, {
    method: 'GET',
    headers: {
      'X-CM-ProjectId': APP.projectId,
      Authorization: `Bearer ${secretKey || APP.secretKey}`,
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: null
  });
  return response;
}
async function deactivateAccount({
  secretKey,
  token,
  password
}) {
  const response = await loadJson(`${APP.apiUrl}${CONFIG.PROJECT.MEMBERSHIP.USERS.RESET_PASSWORD}`, {
    method: 'POST',
    headers: {
      'X-CM-ProjectId': APP.projectId,
      Authorization: `Bearer ${secretKey || APP.secretKey}`,
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      token,
      password
    })
  });
  return response;
}

var iamService = /*#__PURE__*/Object.freeze({
  __proto__: null,
  register: register,
  invite: invite,
  updateUser: updateUser,
  updateProfile: updateProfile,
  getUsers: getUsers,
  getUser: getUser,
  getUserByEmail: getUserByEmail,
  getProfile: getProfile,
  deleteUser: deleteUser,
  blockUser: blockUser,
  unblockUser: unblockUser,
  updatePassword: updatePassword,
  createPasswordReset: createPasswordReset,
  checkPasswordReset: checkPasswordReset,
  resetPassword: resetPassword,
  verifyRegistration: verifyRegistration,
  checkInvitationToken: checkInvitationToken,
  verifyInvitation: verifyInvitation,
  login: login,
  checkAuthentication: checkAuthentication,
  logout: logout,
  createDeactivationRequest: createDeactivationRequest,
  checkDeactivationToken: checkDeactivationToken,
  deactivateAccount: deactivateAccount
});

async function registerDeviceToken({
  secretKey,
  provider,
  token,
  userId,
  deviceId,
  operatingSystem,
  brand,
  deviceName,
  timeZone,
  language,
  locale,
  meta
}) {
  const response = await loadJson(`${APP.apiUrl}${CONFIG.PROJECT.NOTIFICATIONS.PUSH.REGISTER_TOKEN}`, {
    method: 'POST',
    headers: {
      'X-CM-ProjectId': APP.projectId,
      Authorization: `Bearer ${secretKey || APP.secretKey}`,
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      provider,
      token,
      userId,
      deviceId,
      operatingSystem,
      brand,
      deviceName,
      timeZone,
      language,
      locale,
      meta
    })
  });
  return response;
}
async function deleteDeviceToken({
  secretKey,
  deviceId
}) {
  const response = await loadJson(`${APP.apiUrl}${CONFIG.PROJECT.NOTIFICATIONS.PUSH.DELETE_DEVICE_TOKEN(deviceId)}`, {
    method: 'POST',
    headers: {
      'X-CM-ProjectId': APP.projectId,
      Authorization: `Bearer ${secretKey || APP.secretKey}`,
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: null
  });
  return response;
}
async function getDevice({
  secretKey,
  id
}) {
  const response = await loadJson(`${APP.apiUrl}${CONFIG.PROJECT.NOTIFICATIONS.PUSH.GET_DEVICE(id)}`, {
    method: 'GET',
    headers: {
      'X-CM-ProjectId': APP.projectId,
      Authorization: `Bearer ${secretKey || APP.secretKey}`,
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: null
  });
  return response;
}
async function getDevices({
  secretKey,
  userId,
  pageNumber,
  pageSize,
  filter,
  sort
}) {
  const request = {
    userId,
    pageSize: pageSize || APP.tablePageSize,
    pageNumber: pageNumber || 0,
    filter: objectOrStringToString(filter),
    sort: objectOrStringToString(sort)
  };
  const requestUrl = `${CONFIG.PROJECT.NOTIFICATIONS.PUSH.GET_DEVICES}?${toQueryString(request)}`;
  const response = await loadJson(`${APP.apiUrl}${requestUrl}`, {
    method: 'GET',
    headers: {
      'X-CM-ProjectId': APP.projectId,
      Authorization: `Bearer ${secretKey || APP.secretKey}`,
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: null
  });
  return response;
}
async function updateDevice({
  secretKey,
  id,
  operatingSystem,
  brand,
  deviceName,
  timeZone,
  language,
  locale,
  meta
}) {
  const response = await loadJson(`${APP.apiUrl}${CONFIG.PROJECT.NOTIFICATIONS.PUSH.UPDATE_DEVICE(id)}`, {
    method: 'PATCH',
    headers: {
      'X-CM-ProjectId': APP.projectId,
      Authorization: `Bearer ${secretKey || APP.secretKey}`,
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      operatingSystem,
      brand,
      deviceName,
      timeZone,
      language,
      locale,
      meta
    })
  });
  return response;
}
async function deleteDevice({
  secretKey,
  id
}) {
  const response = await loadJson(`${APP.apiUrl}${CONFIG.PROJECT.NOTIFICATIONS.PUSH.DELETE_DEVICE(id)}`, {
    method: 'DELETE',
    headers: {
      'X-CM-ProjectId': APP.projectId,
      Authorization: `Bearer ${secretKey || APP.secretKey}`,
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: null
  });
  return response;
}
async function getNotifications({
  secretKey,
  userId,
  deviceId,
  pageNumber,
  pageSize,
  filter,
  sort
}) {
  const request = {
    userId,
    deviceId,
    pageSize: pageSize || APP.tablePageSize,
    pageNumber: pageNumber || 0,
    filter: objectOrStringToString(filter),
    sort: objectOrStringToString(sort)
  };
  const requestUrl = `${CONFIG.PROJECT.NOTIFICATIONS.PUSH.GET_ALL}?${toQueryString(request)}`;
  const response = await loadJson(`${APP.apiUrl}${requestUrl}`, {
    method: 'GET',
    headers: {
      'X-CM-ProjectId': APP.projectId,
      Authorization: `Bearer ${secretKey || APP.secretKey}`,
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: null
  });
  return response;
}
async function getNotification({
  secretKey,
  id
}) {
  const response = await loadJson(`${APP.apiUrl}${CONFIG.PROJECT.NOTIFICATIONS.PUSH.GET(id)}`, {
    method: 'GET',
    headers: {
      'X-CM-ProjectId': APP.projectId,
      Authorization: `Bearer ${secretKey || APP.secretKey}`,
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: null
  });
  return response;
}
async function sendPushNotification({
  secretKey,
  templateId,
  users,
  devices,
  roles,
  tokens,
  postpone,
  respectTimeZone,
  isNonPushable,
  forceRequestLanguage
}) {
  const response = await loadJson(`${APP.apiUrl}${CONFIG.PROJECT.NOTIFICATIONS.PUSH.SEND}`, {
    method: 'POST',
    headers: {
      'X-CM-ProjectId': APP.projectId,
      Authorization: `Bearer ${secretKey || APP.secretKey}`,
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      templateId,
      users,
      devices,
      roles,
      tokens,
      postpone,
      respectTimeZone,
      isNonPushable,
      forceRequestLanguage
    })
  });
  return response;
}
async function markNotificationAsRead({
  secretKey,
  id,
  userId,
  deviceId
}) {
  const response = await loadJson(`${APP.apiUrl}${CONFIG.PROJECT.NOTIFICATIONS.PUSH.MARK_NOTIFICATION_AS_READ(id)}`, {
    method: 'PATCH',
    headers: {
      'X-CM-ProjectId': APP.projectId,
      Authorization: `Bearer ${secretKey || APP.secretKey}`,
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      userId,
      deviceId,
      notificationId: id
    })
  });
  return response;
}
async function markNotificationsAsRead({
  secretKey,
  userId,
  deviceId,
  filter
}) {
  const response = await loadJson(`${APP.apiUrl}${CONFIG.PROJECT.NOTIFICATIONS.PUSH.MARK_NOTIFICATIONS_AS_READ}`, {
    method: 'PATCH',
    headers: {
      'X-CM-ProjectId': APP.projectId,
      Authorization: `Bearer ${secretKey || APP.secretKey}`,
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      userId,
      deviceId,
      filter: objectOrStringToString(filter)
    })
  });
  return response;
}
async function getNotificationsCount({
  secretKey,
  userId,
  deviceId,
  filter,
  groupBy
}) {
  const request = {
    userId,
    deviceId,
    filter: objectOrStringToString(filter),
    groupBy
  };
  const requestUrl = `${APP.apiUrl}${CONFIG.PROJECT.NOTIFICATIONS.PUSH.GET_NOTIFICATIONS_COUNT}?${toQueryString(request)}`;
  const response = await loadJson(requestUrl, {
    method: 'GET',
    headers: {
      'X-CM-ProjectId': APP.projectId,
      Authorization: `Bearer ${secretKey || APP.secretKey}`,
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: null
  });
  return response;
}

var notificationsService = /*#__PURE__*/Object.freeze({
  __proto__: null,
  registerDeviceToken: registerDeviceToken,
  deleteDeviceToken: deleteDeviceToken,
  getDevice: getDevice,
  getDevices: getDevices,
  updateDevice: updateDevice,
  deleteDevice: deleteDevice,
  getNotifications: getNotifications,
  getNotification: getNotification,
  sendPushNotification: sendPushNotification,
  markNotificationAsRead: markNotificationAsRead,
  markNotificationsAsRead: markNotificationsAsRead,
  getNotificationsCount: getNotificationsCount
});

async function executeFunction({
  secretKey,
  functionId,
  data,
  qualifier,
  meta,
  tokens
}) {
  const response = await loadJson(`${APP.apiUrl}${CONFIG.PROJECT.CODE.EXECUTE(functionId)}`, {
    method: 'POST',
    headers: {
      'X-CM-ProjectId': APP.projectId,
      Authorization: `Bearer ${secretKey || APP.secretKey}`,
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      data: JSON.stringify(data),
      qualifier: qualifier,
      meta: meta,
      tokens: tokens
    })
  });
  return response.result ? JSON.parse(response.result) : null;
}

var codeService = /*#__PURE__*/Object.freeze({
  __proto__: null,
  executeFunction: executeFunction
});

async function getOrder({
  secretKey,
  id,
  includePaidTransactions
}) {
  const request = {
    includePaidTransactions
  };
  const requestUrl = `${APP.apiUrl}${CONFIG.PROJECT.PAYMENTS.ORDERS.GET(id)}?${toQueryString(request)}`;
  const response = await loadJson(requestUrl, {
    method: 'GET',
    headers: {
      'X-CM-ProjectId': APP.projectId,
      Authorization: `Bearer ${secretKey || APP.secretKey}`,
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: null
  });
  return response;
}
async function getOrders({
  secretKey,
  pageNumber,
  pageSize,
  sort,
  filter,
  userId,
  includePaidTransactions,
  cluster
}) {
  const request = {
    userId,
    includePaidTransactions,
    cluster,
    pageSize: pageSize || APP.tablePageSize,
    pageNumber: pageNumber || 0,
    filter: objectOrStringToString(filter),
    sort: objectOrStringToString(sort)
  };
  const requestUrl = `${CONFIG.PROJECT.PAYMENTS.ORDERS.GET_ALL}?${toQueryString(request)}`;
  const response = await loadJson(`${APP.apiUrl}${requestUrl}`, {
    method: 'GET',
    headers: {
      'X-CM-ProjectId': APP.projectId,
      Authorization: `Bearer ${secretKey || APP.secretKey}`,
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: null
  });
  return response;
}
async function createOrder({
  secretKey,
  accountId,
  orderSchemaId,
  userId,
  lines,
  asGuest,
  customerDetails,
  isTest,
  meta
}) {
  const response = await loadJson(`${APP.apiUrl}${CONFIG.PROJECT.PAYMENTS.ORDERS.CREATE}`, {
    method: 'POST',
    headers: {
      'X-CM-ProjectId': APP.projectId,
      Authorization: `Bearer ${secretKey || APP.secretKey}`,
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      accountId,
      orderSchemaId,
      userId,
      lines,
      asGuest,
      customerDetails,
      isTest,
      meta
    })
  });
  return response;
}
async function createPayseraTransaction({
  secretKey,
  orderId,
  mode
}) {
  const response = await loadJson(`${APP.apiUrl}${CONFIG.PROJECT.PAYMENTS.TRANSACTIONS.CREATE_PAYSERA(orderId)}`, {
    method: 'POST',
    headers: {
      'X-CM-ProjectId': APP.projectId,
      Authorization: `Bearer ${secretKey || APP.secretKey}`,
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      mode
    })
  });
  return response;
}
async function createStripeTransaction({
  secretKey,
  orderId,
  paymentMethodId,
  customerId
}) {
  const response = await loadJson(`${APP.apiUrl}${CONFIG.PROJECT.PAYMENTS.TRANSACTIONS.CREATE_STRIPE(orderId)}`, {
    method: 'POST',
    headers: {
      'X-CM-ProjectId': APP.projectId,
      Authorization: `Bearer ${secretKey || APP.secretKey}`,
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      paymentMethodId,
      customerId
    })
  });
  return response;
}
async function createCustomer({
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
  meta
}) {
  const response = await loadJson(`${APP.apiUrl}${CONFIG.PROJECT.PAYMENTS.CUSTOMERS.CREATE}`, {
    method: 'POST',
    headers: {
      'X-CM-ProjectId': APP.projectId,
      Authorization: `Bearer ${secretKey || APP.secretKey}`,
      Accept: 'application/json',
      'Content-Type': 'application/json'
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
      meta
    })
  });
  return response;
}
async function updateCustomer({
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
  meta
}) {
  const response = await loadJson(`${APP.apiUrl}${CONFIG.PROJECT.PAYMENTS.CUSTOMERS.UPDATE(id)}`, {
    method: 'POST',
    headers: {
      'X-CM-ProjectId': APP.projectId,
      Authorization: `Bearer ${secretKey || APP.secretKey}`,
      Accept: 'application/json',
      'Content-Type': 'application/json'
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
      meta
    })
  });
  return response;
}
async function getCustomers({
  secretKey,
  userId,
  pageNumber,
  pageSize,
  filter,
  sort
}) {
  const request = {
    userId,
    pageSize: pageSize || APP.tablePageSize,
    pageNumber: pageNumber || 0,
    filter: objectOrStringToString(filter),
    sort: objectOrStringToString(sort)
  };
  const requestUrl = `${CONFIG.PROJECT.PAYMENTS.CUSTOMERS.GET_ALL}?${toQueryString(request)}`;
  const response = await loadJson(`${APP.apiUrl}${requestUrl}`, {
    method: 'GET',
    headers: {
      'X-CM-ProjectId': APP.projectId,
      Authorization: `Bearer ${secretKey || APP.secretKey}`,
      Accept: 'application/json',
      'Content-Type': 'application/json'
    }
  });
  return response;
}
async function getCustomer({
  secretKey,
  id
}) {
  const response = await loadJson(`${APP.apiUrl}${CONFIG.PROJECT.PAYMENTS.CUSTOMERS.GET(id)}`, {
    method: 'GET',
    headers: {
      'X-CM-ProjectId': APP.projectId,
      Authorization: `Bearer ${secretKey || APP.secretKey}`,
      Accept: 'application/json',
      'Content-Type': 'application/json'
    }
  });
  return response ? response.result : null;
}
async function deleteCustomer({
  secretKey,
  id
}) {
  const response = await loadJson(`${APP.apiUrl}${CONFIG.PROJECT.PAYMENTS.CUSTOMERS.DELETE(id)}`, {
    method: 'DELETE',
    headers: {
      'X-CM-ProjectId': APP.projectId,
      Authorization: `Bearer ${secretKey || APP.secretKey}`,
      Accept: 'application/json',
      'Content-Type': 'application/json'
    }
  });
  return response;
}
async function getPaymentMethodSetup({
  secretKey,
  accountId,
  allowOffline
}) {
  const request = {
    accountId,
    allowOffline
  };
  const response = await loadJson(`${APP.apiUrl}${CONFIG.PROJECT.PAYMENTS.METHODS.GET_SETUP}?${toQueryString(request)}`, {
    method: 'GET',
    headers: {
      'X-CM-ProjectId': APP.projectId,
      Authorization: `Bearer ${secretKey || APP.secretKey}`,
      Accept: 'application/json',
      'Content-Type': 'application/json'
    }
  });
  return response;
}
async function attachPaymentMethod({
  secretKey,
  customerId,
  setupId,
  setupClientSecret,
  asDefault,
  detachOthers
}) {
  const response = await loadJson(`${APP.apiUrl}${CONFIG.PROJECT.PAYMENTS.METHODS.ATTACH}`, {
    method: 'POST',
    headers: {
      'X-CM-ProjectId': APP.projectId,
      Authorization: `Bearer ${secretKey || APP.secretKey}`,
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      customerId,
      setupId,
      setupClientSecret,
      asDefault,
      detachOthers
    })
  });
  return response;
}
async function detachPaymentMethod({
  secretKey,
  id,
  customerId
}) {
  const response = await loadJson(`${APP.apiUrl}${CONFIG.PROJECT.PAYMENTS.METHODS.DETACH}?paymentMethodId=${id}&customerId=${customerId}`, {
    method: 'DELETE',
    headers: {
      'X-CM-ProjectId': APP.projectId,
      Authorization: `Bearer ${secretKey || APP.secretKey}`,
      Accept: 'application/json',
      'Content-Type': 'application/json'
    }
  });
  return response;
}
async function createSubscription({
  secretKey,
  customerId,
  planId,
  paymentMethodId,
  coupon
}) {
  const response = await loadJson(`${APP.apiUrl}${CONFIG.PROJECT.PAYMENTS.SUBSCRIPTIONS.CREATE(customerId)}`, {
    method: 'POST',
    headers: {
      'X-CM-ProjectId': APP.projectId,
      Authorization: `Bearer ${secretKey || APP.secretKey}`,
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      planId,
      paymentMethodId,
      coupon
    })
  });
  return response;
}
async function updateSubscription({
  secretKey,
  id,
  customerId,
  paymentMethodId,
  coupon,
  renewCanceled
}) {
  const response = await loadJson(`${APP.apiUrl}${CONFIG.PROJECT.PAYMENTS.SUBSCRIPTIONS.UPDATE(customerId, id)}`, {
    method: 'PATCH',
    headers: {
      'X-CM-ProjectId': APP.projectId,
      Authorization: `Bearer ${secretKey || APP.secretKey}`,
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      paymentMethodId,
      coupon,
      renewCanceled
    })
  });
  return response;
}
async function changeSubscription({
  secretKey,
  id,
  customerId,
  newPlanId,
  paymentMethodId,
  coupon
}) {
  const response = await loadJson(`${APP.apiUrl}${CONFIG.PROJECT.PAYMENTS.SUBSCRIPTIONS.CHANGE(customerId, id)}`, {
    method: 'PUT',
    headers: {
      'X-CM-ProjectId': APP.projectId,
      Authorization: `Bearer ${secretKey || APP.secretKey}`,
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      newPlanId,
      paymentMethodId,
      coupon
    })
  });
  return response;
}
async function cancelSubscription({
  secretKey,
  id,
  customerId
}) {
  const response = await loadJson(`${APP.apiUrl}${CONFIG.PROJECT.PAYMENTS.SUBSCRIPTIONS.CANCEL(customerId, id)}`, {
    method: 'DELETE',
    headers: {
      'X-CM-ProjectId': APP.projectId,
      Authorization: `Bearer ${secretKey || APP.secretKey}`,
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: null
  });
  return response;
}

var paymentsService = /*#__PURE__*/Object.freeze({
  __proto__: null,
  getOrder: getOrder,
  getOrders: getOrders,
  createOrder: createOrder,
  createPayseraTransaction: createPayseraTransaction,
  createStripeTransaction: createStripeTransaction,
  createCustomer: createCustomer,
  updateCustomer: updateCustomer,
  getCustomers: getCustomers,
  getCustomer: getCustomer,
  deleteCustomer: deleteCustomer,
  getPaymentMethodSetup: getPaymentMethodSetup,
  attachPaymentMethod: attachPaymentMethod,
  detachPaymentMethod: detachPaymentMethod,
  createSubscription: createSubscription,
  updateSubscription: updateSubscription,
  changeSubscription: changeSubscription,
  cancelSubscription: cancelSubscription
});

const db = databaseService;
const files = filesService;
const iam = iamService;
const notifications = notificationsService;
const code = codeService;
const payments = paymentsService;
const config = APP;

exports.code = code;
exports.config = config;
exports.db = db;
exports.files = files;
exports.iam = iam;
exports.notifications = notifications;
exports.payments = payments;
