'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

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
    return response.json();
  } else {
    throw new HttpError(response, await response.json());
  }
}

class Config {
  constructor() {
    this.apiUrl = 'https://api.codemash.io';
  }

  init(config, env) {
    this.secretKey = config.secretKey;
    this.projectId = config.projectId;
    this.region = config.region;
    this.version = config.version;
    this.tablePageSize = config.tablePageSize || 10;
    this.maxFileSize = config.maxFileSize || 104857600;
    let modeParameter = '';

    if (env === 'development') {
      modeParameter = '&mode=dev';
    }

    this.loginUrl = `${this.apiUrl}/auth/aad?projectId=${config.projectId}${modeParameter}`;
    this.logoutUrl = `${this.apiUrl}/auth/logout?projectId=${config.projectId}${modeParameter}`;
    this.baseFilePath = `https://cm-${config.projectId}.s3.eu-central-1.amazonaws.com`;
  }

}

var APP = new Config();

const CONFIG = {
  ACCOUNT: {
    LOGIN: (username, password) => `/auth/credentials?username=${username}&password=${password}`,
    REGISTER: '/accounts'
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
        REGISTER_TOKEN: '/v2/notifications/push/token/expo',
        GET_ALL: (userId, pageNumber, pageSize) => `/v2/notifications/push?userId=${userId}&pageSize=${pageSize}&pageNumber=${pageNumber}`,
        GET: id => `/v2/notifications/push/${id}`,
        MARK_NOTIFICATION_AS_READ: id => `/v2/notifications/push/${id}/read`,
        MARK_NOTIFICATIONS_AS_READ: '/v2/notifications/push/read',
        GET_NOTIFICATIONS_COUNT: userId => `/v2/notifications/push/count?userId=${userId}`,
        SEND: '/v2/notifications/push',
        DELETE_DEVICE_TOKEN: id => `/v2/notifications/push/devices/${id}/token`,
        DELETE_DEVICE: id => `/v2/notifications/push/devices/${id}`
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
        CREATE_PAYSERA: orderId => `/v2/payments/orders/${orderId}/paysera/pay`
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

function getRecords(_x) {
  return _getRecords.apply(this, arguments);
}

function _getRecords() {
  _getRecords = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(_ref) {
    var collectionName, pageNumber, pageSize, sort, filter, projection, language, includeUserNames, includeRoleNames, includeCollectionNames, includeTermNames, referencedFields, addReferencesFirst, excludeCulture, response;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            collectionName = _ref.collectionName, pageNumber = _ref.pageNumber, pageSize = _ref.pageSize, sort = _ref.sort, filter = _ref.filter, projection = _ref.projection, language = _ref.language, includeUserNames = _ref.includeUserNames, includeRoleNames = _ref.includeRoleNames, includeCollectionNames = _ref.includeCollectionNames, includeTermNames = _ref.includeTermNames, referencedFields = _ref.referencedFields, addReferencesFirst = _ref.addReferencesFirst, excludeCulture = _ref.excludeCulture;
            _context.next = 3;
            return loadJson("".concat(APP.apiUrl).concat(CONFIG.PROJECT.DATABASE.COLLECTION.RECORD.GET_ALL(collectionName)), {
              method: 'POST',
              headers: {
                'X-CM-ProjectId': APP.projectId,
                Authorization: "Bearer ".concat(APP.secretKey),
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
                includeUserNames: includeUserNames,
                includeRoleNames: includeRoleNames,
                includeCollectionNames: includeCollectionNames,
                includeTermNames: includeTermNames,
                excludeCulture: excludeCulture,
                addReferencesFirst: addReferencesFirst
              })
            });

          case 3:
            response = _context.sent;

            if (response) {
              _context.next = 6;
              break;
            }

            return _context.abrupt("return", null);

          case 6:
            return _context.abrupt("return", {
              totalCount: response.totalCount,
              result: JSON.parse(response.result)
            });

          case 7:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _getRecords.apply(this, arguments);
}

function getRecord(_x2) {
  return _getRecord.apply(this, arguments);
}

function _getRecord() {
  _getRecord = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(_ref2) {
    var collectionName, id, projection, includeUserNames, includeRoleNames, includeCollectionNames, includeTermNames, referencedFields, addReferencesFirst, excludeCulture, language, response;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            collectionName = _ref2.collectionName, id = _ref2.id, projection = _ref2.projection, includeUserNames = _ref2.includeUserNames, includeRoleNames = _ref2.includeRoleNames, includeCollectionNames = _ref2.includeCollectionNames, includeTermNames = _ref2.includeTermNames, referencedFields = _ref2.referencedFields, addReferencesFirst = _ref2.addReferencesFirst, excludeCulture = _ref2.excludeCulture, language = _ref2.language;
            _context2.next = 3;
            return loadJson("".concat(APP.apiUrl).concat(CONFIG.PROJECT.DATABASE.COLLECTION.RECORD.GET(collectionName, id)), {
              method: 'GET',
              headers: {
                'X-CM-ProjectId': APP.projectId,
                Authorization: "Bearer ".concat(APP.secretKey),
                Accept: 'application/json',
                'Content-Type': 'application/json',
                'Accept-Language': language || 'en'
              },
              body: JSON.stringify({
                projection: objectOrStringToString(projection),
                referencedFields: referencedFields,
                includeUserNames: includeUserNames,
                includeRoleNames: includeRoleNames,
                includeCollectionNames: includeCollectionNames,
                includeTermNames: includeTermNames,
                excludeCulture: excludeCulture,
                addReferencesFirst: addReferencesFirst
              })
            });

          case 3:
            response = _context2.sent;
            return _context2.abrupt("return", response && response.result ? JSON.parse(response.result) : null);

          case 5:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _getRecord.apply(this, arguments);
}

function getRecordWithFilter(_x3) {
  return _getRecordWithFilter.apply(this, arguments);
}

function _getRecordWithFilter() {
  _getRecordWithFilter = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(_ref3) {
    var collectionName, filter, projection, includeUserNames, includeRoleNames, includeCollectionNames, includeTermNames, referencedFields, addReferencesFirst, excludeCulture, language, response;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            collectionName = _ref3.collectionName, filter = _ref3.filter, projection = _ref3.projection, includeUserNames = _ref3.includeUserNames, includeRoleNames = _ref3.includeRoleNames, includeCollectionNames = _ref3.includeCollectionNames, includeTermNames = _ref3.includeTermNames, referencedFields = _ref3.referencedFields, addReferencesFirst = _ref3.addReferencesFirst, excludeCulture = _ref3.excludeCulture, language = _ref3.language;
            _context3.next = 3;
            return loadJson("".concat(APP.apiUrl).concat(CONFIG.PROJECT.DATABASE.COLLECTION.RECORD.GET_WITH_FILTER(collectionName)), {
              method: 'POST',
              headers: {
                'X-CM-ProjectId': APP.projectId,
                Authorization: "Bearer ".concat(APP.secretKey),
                Accept: 'application/json',
                'Content-Type': 'application/json',
                'Accept-Language': language || 'en'
              },
              body: JSON.stringify({
                filter: objectOrStringToString(filter),
                projection: objectOrStringToString(projection),
                referencedFields: referencedFields,
                includeUserNames: includeUserNames,
                includeRoleNames: includeRoleNames,
                includeCollectionNames: includeCollectionNames,
                includeTermNames: includeTermNames,
                excludeCulture: excludeCulture,
                addReferencesFirst: addReferencesFirst
              })
            });

          case 3:
            response = _context3.sent;
            return _context3.abrupt("return", response && response.result ? JSON.parse(response.result) : null);

          case 5:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));
  return _getRecordWithFilter.apply(this, arguments);
}

function deleteRecord(_x4) {
  return _deleteRecord.apply(this, arguments);
}

function _deleteRecord() {
  _deleteRecord = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(_ref4) {
    var collectionName, id, ignoreTriggers, url, queries, response;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            collectionName = _ref4.collectionName, id = _ref4.id, ignoreTriggers = _ref4.ignoreTriggers;
            url = "".concat(APP.apiUrl).concat(CONFIG.PROJECT.DATABASE.COLLECTION.RECORD.DELETE(collectionName, id));
            queries = [];
            if (ignoreTriggers) queries.push("ignoreTriggers=".concat(true));

            if (queries.length > 0) {
              url += "?".concat(queries.join('&'));
            }

            _context4.next = 7;
            return loadJson(url, {
              method: 'DELETE',
              headers: {
                'X-CM-ProjectId': APP.projectId,
                Authorization: "Bearer ".concat(APP.secretKey),
                Accept: 'application/json',
                'Content-Type': 'application/json'
              },
              body: null
            });

          case 7:
            response = _context4.sent;
            return _context4.abrupt("return", response);

          case 9:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));
  return _deleteRecord.apply(this, arguments);
}

function deleteRecordWithFilter(_x5) {
  return _deleteRecordWithFilter.apply(this, arguments);
}

function _deleteRecordWithFilter() {
  _deleteRecordWithFilter = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(_ref5) {
    var collectionName, filter, ignoreTriggers, url, queries, response;
    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            collectionName = _ref5.collectionName, filter = _ref5.filter, ignoreTriggers = _ref5.ignoreTriggers;
            url = "".concat(APP.apiUrl).concat(CONFIG.PROJECT.DATABASE.COLLECTION.RECORD.DELETE_BY_FILTER(collectionName));
            queries = [];
            if (ignoreTriggers) queries.push("ignoreTriggers=".concat(true));
            if (filter) queries.push("filter=".concat(objectOrStringToString(filter)));

            if (queries.length > 0) {
              url += "?".concat(queries.join('&'));
            }

            _context5.next = 8;
            return loadJson(url, {
              method: 'DELETE',
              headers: {
                'X-CM-ProjectId': APP.projectId,
                Authorization: "Bearer ".concat(APP.secretKey),
                Accept: 'application/json',
                'Content-Type': 'application/json'
              },
              body: null
            });

          case 8:
            response = _context5.sent;
            return _context5.abrupt("return", response);

          case 10:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  }));
  return _deleteRecordWithFilter.apply(this, arguments);
}

function deleteManyRecords(_x6) {
  return _deleteManyRecords.apply(this, arguments);
}

function _deleteManyRecords() {
  _deleteManyRecords = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(_ref6) {
    var collectionName, filter, ignoreTriggers, url, queries, response;
    return regeneratorRuntime.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            collectionName = _ref6.collectionName, filter = _ref6.filter, ignoreTriggers = _ref6.ignoreTriggers;
            url = "".concat(APP.apiUrl).concat(CONFIG.PROJECT.DATABASE.COLLECTION.RECORD.DELETE_MANY(collectionName));
            queries = [];
            if (ignoreTriggers) queries.push("ignoreTriggers=".concat(true));
            if (filter) queries.push("filter=".concat(objectOrStringToString(filter)));

            if (queries.length > 0) {
              url += "?".concat(queries.join('&'));
            }

            _context6.next = 8;
            return loadJson(url, {
              method: 'DELETE',
              headers: {
                'X-CM-ProjectId': APP.projectId,
                Authorization: "Bearer ".concat(APP.secretKey),
                Accept: 'application/json',
                'Content-Type': 'application/json'
              },
              body: null
            });

          case 8:
            response = _context6.sent;
            return _context6.abrupt("return", response);

          case 10:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6);
  }));
  return _deleteManyRecords.apply(this, arguments);
}

function insertRecord(_x7) {
  return _insertRecord.apply(this, arguments);
}

function _insertRecord() {
  _insertRecord = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7(_ref7) {
    var collectionName, document, bypassDocumentValidation, waitForFileUpload, ignoreTriggers, response;
    return regeneratorRuntime.wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            collectionName = _ref7.collectionName, document = _ref7.document, bypassDocumentValidation = _ref7.bypassDocumentValidation, waitForFileUpload = _ref7.waitForFileUpload, ignoreTriggers = _ref7.ignoreTriggers;
            _context7.next = 3;
            return loadJson("".concat(APP.apiUrl).concat(CONFIG.PROJECT.DATABASE.COLLECTION.RECORD.CREATE(collectionName)), {
              method: 'POST',
              headers: {
                'X-CM-ProjectId': APP.projectId,
                Authorization: "Bearer ".concat(APP.secretKey),
                Accept: 'application/json',
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({
                document: objectOrStringToString(document),
                bypassDocumentValidation: bypassDocumentValidation,
                waitForFileUpload: waitForFileUpload,
                ignoreTriggers: ignoreTriggers
              })
            });

          case 3:
            response = _context7.sent;
            return _context7.abrupt("return", response && response.result ? JSON.parse(response.result) : null);

          case 5:
          case "end":
            return _context7.stop();
        }
      }
    }, _callee7);
  }));
  return _insertRecord.apply(this, arguments);
}

function insertManyRecords(_x8) {
  return _insertManyRecords.apply(this, arguments);
}

function _insertManyRecords() {
  _insertManyRecords = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8(_ref8) {
    var collectionName, documents, bypassDocumentValidation, ignoreTriggers, stringDocs, response;
    return regeneratorRuntime.wrap(function _callee8$(_context8) {
      while (1) {
        switch (_context8.prev = _context8.next) {
          case 0:
            collectionName = _ref8.collectionName, documents = _ref8.documents, bypassDocumentValidation = _ref8.bypassDocumentValidation, ignoreTriggers = _ref8.ignoreTriggers;
            stringDocs = [];

            if (documents && Array.isArray(documents)) {
              documents.forEach(function (doc) {
                stringDocs.push(objectOrStringToString(doc));
              });
            }

            _context8.next = 5;
            return loadJson("".concat(APP.apiUrl).concat(CONFIG.PROJECT.DATABASE.COLLECTION.RECORD.CREATE_MANY(collectionName)), {
              method: 'POST',
              headers: {
                'X-CM-ProjectId': APP.projectId,
                Authorization: "Bearer ".concat(APP.secretKey),
                Accept: 'application/json',
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({
                documents: stringDocs,
                bypassDocumentValidation: bypassDocumentValidation,
                ignoreTriggers: ignoreTriggers
              })
            });

          case 5:
            response = _context8.sent;
            return _context8.abrupt("return", response && response.result ? JSON.parse(response.result) : null);

          case 7:
          case "end":
            return _context8.stop();
        }
      }
    }, _callee8);
  }));
  return _insertManyRecords.apply(this, arguments);
}

function updateRecord(_x9) {
  return _updateRecord.apply(this, arguments);
}

function _updateRecord() {
  _updateRecord = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee9(_ref9) {
    var collectionName, id, update, waitForFileUpload, bypassDocumentValidation, ignoreTriggers, isUpsert, response;
    return regeneratorRuntime.wrap(function _callee9$(_context9) {
      while (1) {
        switch (_context9.prev = _context9.next) {
          case 0:
            collectionName = _ref9.collectionName, id = _ref9.id, update = _ref9.update, waitForFileUpload = _ref9.waitForFileUpload, bypassDocumentValidation = _ref9.bypassDocumentValidation, ignoreTriggers = _ref9.ignoreTriggers, isUpsert = _ref9.isUpsert;
            _context9.next = 3;
            return loadJson("".concat(APP.apiUrl).concat(CONFIG.PROJECT.DATABASE.COLLECTION.RECORD.PATCH(collectionName, id)), {
              method: 'PATCH',
              headers: {
                'X-CM-ProjectId': APP.projectId,
                Authorization: "Bearer ".concat(APP.secretKey),
                Accept: 'application/json',
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({
                update: objectOrStringToString(update),
                waitForFileUpload: waitForFileUpload,
                bypassDocumentValidation: bypassDocumentValidation,
                ignoreTriggers: ignoreTriggers,
                isUpsert: isUpsert
              })
            });

          case 3:
            response = _context9.sent;
            return _context9.abrupt("return", response ? response.result : null);

          case 5:
          case "end":
            return _context9.stop();
        }
      }
    }, _callee9);
  }));
  return _updateRecord.apply(this, arguments);
}

function updateRecordWithFilter(_x10) {
  return _updateRecordWithFilter.apply(this, arguments);
}

function _updateRecordWithFilter() {
  _updateRecordWithFilter = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee10(_ref10) {
    var collectionName, filter, update, waitForFileUpload, bypassDocumentValidation, ignoreTriggers, isUpsert, response;
    return regeneratorRuntime.wrap(function _callee10$(_context10) {
      while (1) {
        switch (_context10.prev = _context10.next) {
          case 0:
            collectionName = _ref10.collectionName, filter = _ref10.filter, update = _ref10.update, waitForFileUpload = _ref10.waitForFileUpload, bypassDocumentValidation = _ref10.bypassDocumentValidation, ignoreTriggers = _ref10.ignoreTriggers, isUpsert = _ref10.isUpsert;
            _context10.next = 3;
            return loadJson("".concat(APP.apiUrl).concat(CONFIG.PROJECT.DATABASE.COLLECTION.RECORD.PATCH_BY_FILTER(collectionName)), {
              method: 'PATCH',
              headers: {
                'X-CM-ProjectId': APP.projectId,
                Authorization: "Bearer ".concat(APP.secretKey),
                Accept: 'application/json',
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({
                filter: objectOrStringToString(filter),
                update: objectOrStringToString(update),
                waitForFileUpload: waitForFileUpload,
                bypassDocumentValidation: bypassDocumentValidation,
                ignoreTriggers: ignoreTriggers,
                isUpsert: isUpsert
              })
            });

          case 3:
            response = _context10.sent;
            return _context10.abrupt("return", response ? response.result : null);

          case 5:
          case "end":
            return _context10.stop();
        }
      }
    }, _callee10);
  }));
  return _updateRecordWithFilter.apply(this, arguments);
}

function updateManyRecords(_x11) {
  return _updateManyRecords.apply(this, arguments);
}

function _updateManyRecords() {
  _updateManyRecords = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee11(_ref11) {
    var collectionName, filter, update, bypassDocumentValidation, ignoreTriggers, isUpsert, response;
    return regeneratorRuntime.wrap(function _callee11$(_context11) {
      while (1) {
        switch (_context11.prev = _context11.next) {
          case 0:
            collectionName = _ref11.collectionName, filter = _ref11.filter, update = _ref11.update, bypassDocumentValidation = _ref11.bypassDocumentValidation, ignoreTriggers = _ref11.ignoreTriggers, isUpsert = _ref11.isUpsert;
            _context11.next = 3;
            return loadJson("".concat(APP.apiUrl).concat(CONFIG.PROJECT.DATABASE.COLLECTION.RECORD.PATCH_MANY(collectionName)), {
              method: 'PATCH',
              headers: {
                'X-CM-ProjectId': APP.projectId,
                Authorization: "Bearer ".concat(APP.secretKey),
                Accept: 'application/json',
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({
                filter: objectOrStringToString(filter),
                update: objectOrStringToString(update),
                bypassDocumentValidation: bypassDocumentValidation,
                ignoreTriggers: ignoreTriggers,
                isUpsert: isUpsert
              })
            });

          case 3:
            response = _context11.sent;
            return _context11.abrupt("return", response ? response.result : null);

          case 5:
          case "end":
            return _context11.stop();
        }
      }
    }, _callee11);
  }));
  return _updateManyRecords.apply(this, arguments);
}

function replaceRecord(_x12) {
  return _replaceRecord.apply(this, arguments);
}

function _replaceRecord() {
  _replaceRecord = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee12(_ref12) {
    var collectionName, id, document, waitForFileUpload, bypassDocumentValidation, ignoreTriggers, isUpsert, response;
    return regeneratorRuntime.wrap(function _callee12$(_context12) {
      while (1) {
        switch (_context12.prev = _context12.next) {
          case 0:
            collectionName = _ref12.collectionName, id = _ref12.id, document = _ref12.document, waitForFileUpload = _ref12.waitForFileUpload, bypassDocumentValidation = _ref12.bypassDocumentValidation, ignoreTriggers = _ref12.ignoreTriggers, isUpsert = _ref12.isUpsert;
            _context12.next = 3;
            return loadJson("".concat(APP.apiUrl).concat(CONFIG.PROJECT.DATABASE.COLLECTION.RECORD.UPDATE(collectionName)), {
              method: 'PUT',
              headers: {
                'X-CM-ProjectId': APP.projectId,
                Authorization: "Bearer ".concat(APP.secretKey),
                Accept: 'application/json',
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({
                filter: JSON.stringify({
                  _id: id
                }),
                document: objectOrStringToString(document),
                waitForFileUpload: waitForFileUpload,
                bypassDocumentValidation: bypassDocumentValidation,
                ignoreTriggers: ignoreTriggers,
                isUpsert: isUpsert
              })
            });

          case 3:
            response = _context12.sent;
            return _context12.abrupt("return", response ? response.result : null);

          case 5:
          case "end":
            return _context12.stop();
        }
      }
    }, _callee12);
  }));
  return _replaceRecord.apply(this, arguments);
}

function replaceRecordWithFilter(_x13) {
  return _replaceRecordWithFilter.apply(this, arguments);
}

function _replaceRecordWithFilter() {
  _replaceRecordWithFilter = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee13(_ref13) {
    var collectionName, filter, document, waitForFileUpload, bypassDocumentValidation, ignoreTriggers, isUpsert, response;
    return regeneratorRuntime.wrap(function _callee13$(_context13) {
      while (1) {
        switch (_context13.prev = _context13.next) {
          case 0:
            collectionName = _ref13.collectionName, filter = _ref13.filter, document = _ref13.document, waitForFileUpload = _ref13.waitForFileUpload, bypassDocumentValidation = _ref13.bypassDocumentValidation, ignoreTriggers = _ref13.ignoreTriggers, isUpsert = _ref13.isUpsert;
            _context13.next = 3;
            return loadJson("".concat(APP.apiUrl).concat(CONFIG.PROJECT.DATABASE.COLLECTION.RECORD.UPDATE(collectionName)), {
              method: 'PUT',
              headers: {
                'X-CM-ProjectId': APP.projectId,
                Authorization: "Bearer ".concat(APP.secretKey),
                Accept: 'application/json',
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({
                filter: objectOrStringToString(filter),
                document: objectOrStringToString(document),
                waitForFileUpload: waitForFileUpload,
                bypassDocumentValidation: bypassDocumentValidation,
                ignoreTriggers: ignoreTriggers,
                isUpsert: isUpsert
              })
            });

          case 3:
            response = _context13.sent;
            return _context13.abrupt("return", response ? response.result : null);

          case 5:
          case "end":
            return _context13.stop();
        }
      }
    }, _callee13);
  }));
  return _replaceRecordWithFilter.apply(this, arguments);
}

function executeAggregate(_x14) {
  return _executeAggregate.apply(this, arguments);
}

function _executeAggregate() {
  _executeAggregate = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee14(_ref14) {
    var collectionName, id, pipeline, tokens, url, response;
    return regeneratorRuntime.wrap(function _callee14$(_context14) {
      while (1) {
        switch (_context14.prev = _context14.next) {
          case 0:
            collectionName = _ref14.collectionName, id = _ref14.id, pipeline = _ref14.pipeline, tokens = _ref14.tokens;
            url = pipeline ? "".concat(APP.apiUrl).concat(CONFIG.PROJECT.DATABASE.COLLECTION.AGGREGATES.GET_CUSTOM(collectionName)) : "".concat(APP.apiUrl).concat(CONFIG.PROJECT.DATABASE.COLLECTION.AGGREGATES.GET(collectionName, id));
            _context14.next = 4;
            return loadJson(url, {
              method: 'POST',
              headers: {
                'X-CM-ProjectId': APP.projectId,
                Authorization: "Bearer ".concat(APP.secretKey),
                Accept: 'application/json',
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({
                tokens: tokens
              })
            });

          case 4:
            response = _context14.sent;
            return _context14.abrupt("return", response && response.result ? JSON.parse(response.result) : null);

          case 6:
          case "end":
            return _context14.stop();
        }
      }
    }, _callee14);
  }));
  return _executeAggregate.apply(this, arguments);
}

function count(_x15) {
  return _count.apply(this, arguments);
}

function _count() {
  _count = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee15(_ref15) {
    var collectionName, filter, limit, skip, response;
    return regeneratorRuntime.wrap(function _callee15$(_context15) {
      while (1) {
        switch (_context15.prev = _context15.next) {
          case 0:
            collectionName = _ref15.collectionName, filter = _ref15.filter, limit = _ref15.limit, skip = _ref15.skip;
            _context15.next = 3;
            return loadJson("".concat(APP.apiUrl).concat(CONFIG.PROJECT.DATABASE.COLLECTION.RECORD.COUNT(collectionName)), {
              method: 'POST',
              headers: {
                'X-CM-ProjectId': APP.projectId,
                Authorization: "Bearer ".concat(APP.secretKey),
                Accept: 'application/json',
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({
                filter: objectOrStringToString(filter),
                limit: limit,
                skip: skip
              })
            });

          case 3:
            response = _context15.sent;
            return _context15.abrupt("return", response ? response.result : null);

          case 5:
          case "end":
            return _context15.stop();
        }
      }
    }, _callee15);
  }));
  return _count.apply(this, arguments);
}

function distinct(_x16) {
  return _distinct.apply(this, arguments);
} // todo: empty filter is defined because of bug. Later
// is not necessary to define empty filter.

function _distinct() {
  _distinct = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee16(_ref16) {
    var collectionName, filter, field, response;
    return regeneratorRuntime.wrap(function _callee16$(_context16) {
      while (1) {
        switch (_context16.prev = _context16.next) {
          case 0:
            collectionName = _ref16.collectionName, filter = _ref16.filter, field = _ref16.field;
            _context16.next = 3;
            return loadJson("".concat(APP.apiUrl).concat(CONFIG.PROJECT.DATABASE.COLLECTION.RECORD.DISTINCT(collectionName)), {
              method: 'POST',
              headers: {
                'X-CM-ProjectId': APP.projectId,
                Authorization: "Bearer ".concat(APP.secretKey),
                Accept: 'application/json',
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({
                filter: objectOrStringToString(filter),
                field: field
              })
            });

          case 3:
            response = _context16.sent;
            return _context16.abrupt("return", response ? response.result : null);

          case 5:
          case "end":
            return _context16.stop();
        }
      }
    }, _callee16);
  }));
  return _distinct.apply(this, arguments);
}

function getTaxonomyTerms(_x17) {
  return _getTaxonomyTerms.apply(this, arguments);
}

function _getTaxonomyTerms() {
  _getTaxonomyTerms = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee17(_ref17) {
    var taxonomyName, language, response, result;
    return regeneratorRuntime.wrap(function _callee17$(_context17) {
      while (1) {
        switch (_context17.prev = _context17.next) {
          case 0:
            taxonomyName = _ref17.taxonomyName, language = _ref17.language;
            _context17.next = 3;
            return loadJson("".concat(APP.apiUrl).concat(CONFIG.PROJECT.DATABASE.TAXONOMY.TERM.GET_ALL(taxonomyName)), {
              method: 'POST',
              headers: {
                'X-CM-ProjectId': APP.projectId,
                Authorization: "Bearer ".concat(APP.secretKey),
                Accept: 'application/json',
                'Content-Type': 'application/json',
                'Accept-Language': language || 'en'
              },
              body: null
            });

          case 3:
            response = _context17.sent;
            result = response.result;
            return _context17.abrupt("return", result);

          case 6:
          case "end":
            return _context17.stop();
        }
      }
    }, _callee17);
  }));
  return _getTaxonomyTerms.apply(this, arguments);
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
  getTaxonomyTerms: getTaxonomyTerms
});

function downloadImage(_x, _x2) {
  return _downloadImage.apply(this, arguments);
}

function _downloadImage() {
  _downloadImage = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(fileId, optimization) {
    var route, response, result;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            route = "".concat(APP.apiUrl).concat(CONFIG.PROJECT.FILES.DOWNLOAD(fileId));

            if (optimization) {
              route = "".concat(APP.apiUrl).concat(CONFIG.PROJECT.FILES.DOWNLOAD_OPTIMIZED(fileId, optimization));
            }

            _context.next = 4;
            return loadText(route, {
              method: 'GET',
              headers: {
                'X-CM-ProjectId': APP.projectId,
                Authorization: "Bearer ".concat(APP.secretKey),
                Accept: 'text/plain'
              },
              body: null
            });

          case 4:
            response = _context.sent;
            result = {
              fileId: fileId,
              image: response
            };
            return _context.abrupt("return", result);

          case 7:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _downloadImage.apply(this, arguments);
}

function getFileUrl(_x3) {
  return _getFileUrl.apply(this, arguments);
}

function _getFileUrl() {
  _getFileUrl = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(_ref) {
    var fileId, optimization, route, response;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            fileId = _ref.fileId, optimization = _ref.optimization;
            route = optimization ? "".concat(APP.apiUrl).concat(CONFIG.PROJECT.FILES.GET_URL_OPTIMIZED(fileId, optimization)) : "".concat(APP.apiUrl).concat(CONFIG.PROJECT.FILES.GET_URL(fileId));
            _context2.next = 4;
            return loadJson(route, {
              method: 'GET',
              headers: {
                'X-CM-ProjectId': APP.projectId,
                Authorization: "Bearer ".concat(APP.secretKey),
                Accept: 'text/plain'
              },
              body: null
            });

          case 4:
            response = _context2.sent;
            return _context2.abrupt("return", {
              result: response.result,
              file: response.file,
              isImage: response.isImage
            });

          case 6:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _getFileUrl.apply(this, arguments);
}

function uploadFile(_x4, _x5, _x6, _x7) {
  return _uploadFile.apply(this, arguments);
}

function _uploadFile() {
  _uploadFile = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(fileUri, collectionName, recordId, uniqueFieldName) {
    var formData, filename, response;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            formData = new FormData();

            if (uniqueFieldName != null && uniqueFieldName !== undefined) {
              formData.append('uniqueFieldName', uniqueFieldName);
            }

            if (recordId != null && recordId !== undefined) {
              formData.append('recordId', recordId);
            }

            filename = fileUri.substring(fileUri.lastIndexOf('/') + 1);
            formData.append('file', {
              uri: fileUri,
              name: filename,
              type: 'image/png'
            });
            _context3.next = 7;
            return fetch("".concat(APP.apiUrl).concat(CONFIG.PROJECT.DATABASE.COLLECTION.FILES.UPLOAD(collectionName)), {
              method: 'POST',
              headers: {
                'X-CM-ProjectId': APP.projectId,
                Authorization: "Bearer ".concat(APP.secretKey),
                'Content-Type': 'multipart/form-data',
                Accept: 'application/json'
              },
              body: formData
            });

          case 7:
            response = _context3.sent;
            return _context3.abrupt("return", response);

          case 9:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));
  return _uploadFile.apply(this, arguments);
}

function uploadBase64File(_x8, _x9, _x10, _x11) {
  return _uploadBase64File.apply(this, arguments);
}

function _uploadBase64File() {
  _uploadBase64File = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(base64File, collectionName, recordId, uniqueFieldName) {
    var response, result;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.next = 2;
            return loadJson("".concat(APP.apiUrl).concat(CONFIG.PROJECT.DATABASE.COLLECTION.FILES.UPLOAD(collectionName)), {
              method: 'POST',
              headers: {
                'X-CM-ProjectId': APP.projectId,
                Authorization: "Bearer ".concat(APP.secretKey),
                Accept: 'application/json',
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({
                base64File: base64File,
                recordId: recordId,
                uniqueFieldName: uniqueFieldName
              })
            });

          case 2:
            response = _context4.sent;
            result = response.result;
            return _context4.abrupt("return", result);

          case 5:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));
  return _uploadBase64File.apply(this, arguments);
}

function getFilePath(directory, fileName) {
  return "".concat(APP.baseFilePath, "/").concat(directory, "/").concat(fileName);
}

var filesService = /*#__PURE__*/Object.freeze({
  __proto__: null,
  downloadImage: downloadImage,
  getFileUrl: getFileUrl,
  uploadFile: uploadFile,
  uploadBase64File: uploadBase64File,
  getFilePath: getFilePath
});

function register(_x) {
  return _register.apply(this, arguments);
}

function _register() {
  _register = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(_ref) {
    var email, password, displayName, firstName, lastName, _ref$autoLogin, autoLogin, meta, language, timeZone, subscribeToNews, country, countryCode, area, city, address, address2, phone, fax, company, postalCode, gender, birthday, roles, response;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            email = _ref.email, password = _ref.password, displayName = _ref.displayName, firstName = _ref.firstName, lastName = _ref.lastName, _ref$autoLogin = _ref.autoLogin, autoLogin = _ref$autoLogin === void 0 ? true : _ref$autoLogin, meta = _ref.meta, language = _ref.language, timeZone = _ref.timeZone, subscribeToNews = _ref.subscribeToNews, country = _ref.country, countryCode = _ref.countryCode, area = _ref.area, city = _ref.city, address = _ref.address, address2 = _ref.address2, phone = _ref.phone, fax = _ref.fax, company = _ref.company, postalCode = _ref.postalCode, gender = _ref.gender, birthday = _ref.birthday, roles = _ref.roles;
            _context.next = 3;
            return loadJson("".concat(APP.apiUrl).concat(CONFIG.PROJECT.MEMBERSHIP.USERS.REGISTER), {
              method: 'POST',
              headers: {
                'X-CM-ProjectId': APP.projectId,
                Authorization: "Bearer ".concat(APP.secretKey),
                Accept: 'application/json',
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({
                email: email,
                password: password,
                displayName: displayName,
                firstName: firstName,
                lastName: lastName,
                autoLogin: autoLogin,
                meta: objectOrStringToString(meta),
                language: language,
                timeZone: timeZone,
                subscribeToNews: subscribeToNews,
                country: country,
                countryCode: countryCode,
                area: area,
                city: city,
                address: address,
                address2: address2,
                phone: phone,
                fax: fax,
                company: company,
                postalCode: postalCode,
                gender: gender,
                birthday: birthday,
                roles: roles
              })
            });

          case 3:
            response = _context.sent;
            return _context.abrupt("return", response);

          case 5:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _register.apply(this, arguments);
}

function invite(_x2) {
  return _invite.apply(this, arguments);
}

function _invite() {
  _invite = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(_ref2) {
    var email, displayName, firstName, lastName, meta, language, timeZone, subscribeToNews, country, countryCode, area, city, address, address2, phone, fax, company, postalCode, gender, birthday, roles, response;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            email = _ref2.email, displayName = _ref2.displayName, firstName = _ref2.firstName, lastName = _ref2.lastName, meta = _ref2.meta, language = _ref2.language, timeZone = _ref2.timeZone, subscribeToNews = _ref2.subscribeToNews, country = _ref2.country, countryCode = _ref2.countryCode, area = _ref2.area, city = _ref2.city, address = _ref2.address, address2 = _ref2.address2, phone = _ref2.phone, fax = _ref2.fax, company = _ref2.company, postalCode = _ref2.postalCode, gender = _ref2.gender, birthday = _ref2.birthday, roles = _ref2.roles;
            _context2.next = 3;
            return loadJson("".concat(APP.apiUrl).concat(CONFIG.PROJECT.MEMBERSHIP.USERS.INVITE), {
              method: 'POST',
              headers: {
                'X-CM-ProjectId': APP.projectId,
                Authorization: "Bearer ".concat(APP.secretKey),
                Accept: 'application/json',
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({
                email: email,
                displayName: displayName,
                firstName: firstName,
                lastName: lastName,
                meta: objectOrStringToString(meta),
                language: language,
                timeZone: timeZone,
                subscribeToNews: subscribeToNews,
                country: country,
                countryCode: countryCode,
                area: area,
                city: city,
                address: address,
                address2: address2,
                phone: phone,
                fax: fax,
                company: company,
                postalCode: postalCode,
                gender: gender,
                birthday: birthday,
                roles: roles
              })
            });

          case 3:
            response = _context2.sent;
            return _context2.abrupt("return", response);

          case 5:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _invite.apply(this, arguments);
}

function updateUser(_x3) {
  return _updateUser.apply(this, arguments);
}

function _updateUser() {
  _updateUser = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(_ref3) {
    var id, displayName, firstName, lastName, meta, language, timeZone, subscribeToNews, unsubscribedNewsTags, country, countryCode, area, city, address, address2, phone, fax, company, postalCode, gender, birthday, roles, response;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            id = _ref3.id, displayName = _ref3.displayName, firstName = _ref3.firstName, lastName = _ref3.lastName, meta = _ref3.meta, language = _ref3.language, timeZone = _ref3.timeZone, subscribeToNews = _ref3.subscribeToNews, unsubscribedNewsTags = _ref3.unsubscribedNewsTags, country = _ref3.country, countryCode = _ref3.countryCode, area = _ref3.area, city = _ref3.city, address = _ref3.address, address2 = _ref3.address2, phone = _ref3.phone, fax = _ref3.fax, company = _ref3.company, postalCode = _ref3.postalCode, gender = _ref3.gender, birthday = _ref3.birthday, roles = _ref3.roles;
            _context3.next = 3;
            return loadJson("".concat(APP.apiUrl).concat(CONFIG.PROJECT.MEMBERSHIP.USERS.UPDATE(id)), {
              method: 'PATCH',
              headers: {
                'X-CM-ProjectId': APP.projectId,
                Authorization: "Bearer ".concat(APP.secretKey),
                Accept: 'application/json',
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({
                displayName: displayName,
                firstName: firstName,
                lastName: lastName,
                meta: objectOrStringToString(meta),
                language: language,
                timeZone: timeZone,
                subscribeToNews: subscribeToNews,
                unsubscribedNewsTags: unsubscribedNewsTags,
                country: country,
                countryCode: countryCode,
                area: area,
                city: city,
                address: address,
                address2: address2,
                phone: phone,
                fax: fax,
                company: company,
                postalCode: postalCode,
                gender: gender,
                birthday: birthday,
                roles: roles
              })
            });

          case 3:
            response = _context3.sent;
            return _context3.abrupt("return", response);

          case 5:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));
  return _updateUser.apply(this, arguments);
}

function updateProfile(_x4) {
  return _updateProfile.apply(this, arguments);
}

function _updateProfile() {
  _updateProfile = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(_ref4) {
    var displayName, firstName, lastName, meta, language, timeZone, subscribeToNews, unsubscribedNewsTags, country, countryCode, area, city, address, address2, phone, fax, company, postalCode, gender, birthday, response;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            displayName = _ref4.displayName, firstName = _ref4.firstName, lastName = _ref4.lastName, meta = _ref4.meta, language = _ref4.language, timeZone = _ref4.timeZone, subscribeToNews = _ref4.subscribeToNews, unsubscribedNewsTags = _ref4.unsubscribedNewsTags, country = _ref4.country, countryCode = _ref4.countryCode, area = _ref4.area, city = _ref4.city, address = _ref4.address, address2 = _ref4.address2, phone = _ref4.phone, fax = _ref4.fax, company = _ref4.company, postalCode = _ref4.postalCode, gender = _ref4.gender, birthday = _ref4.birthday;
            _context4.next = 3;
            return loadJson("".concat(APP.apiUrl).concat(CONFIG.PROJECT.MEMBERSHIP.USERS.UPDATE_PROFILE), {
              method: 'PATCH',
              headers: {
                'X-CM-ProjectId': APP.projectId,
                Authorization: "Bearer ".concat(APP.secretKey),
                Accept: 'application/json',
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({
                displayName: displayName,
                firstName: firstName,
                lastName: lastName,
                meta: objectOrStringToString(meta),
                language: language,
                timeZone: timeZone,
                subscribeToNews: subscribeToNews,
                unsubscribedNewsTags: unsubscribedNewsTags,
                country: country,
                countryCode: countryCode,
                area: area,
                city: city,
                address: address,
                address2: address2,
                phone: phone,
                fax: fax,
                company: company,
                postalCode: postalCode,
                gender: gender,
                birthday: birthday
              })
            });

          case 3:
            response = _context4.sent;
            return _context4.abrupt("return", response);

          case 5:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));
  return _updateProfile.apply(this, arguments);
}

function getUsers(_x5) {
  return _getUsers.apply(this, arguments);
}

function _getUsers() {
  _getUsers = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(_ref5) {
    var pageNumber, pageSize, filter, sort, includePermissions, includeDevices, includeMeta, response;
    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            pageNumber = _ref5.pageNumber, pageSize = _ref5.pageSize, filter = _ref5.filter, sort = _ref5.sort, includePermissions = _ref5.includePermissions, includeDevices = _ref5.includeDevices, includeMeta = _ref5.includeMeta;
            _context5.next = 3;
            return loadJson("".concat(APP.apiUrl).concat(CONFIG.PROJECT.MEMBERSHIP.USERS.GET_ALL), {
              method: 'POST',
              headers: {
                'X-CM-ProjectId': APP.projectId,
                Authorization: "Bearer ".concat(APP.secretKey),
                Accept: 'application/json',
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({
                pageSize: pageSize || APP.tablePageSize,
                pageNumber: pageNumber || 0,
                filter: objectOrStringToString(filter),
                sort: objectOrStringToString(sort),
                includePermissions: includePermissions,
                includeDevices: includeDevices,
                includeMeta: includeMeta
              })
            });

          case 3:
            response = _context5.sent;
            return _context5.abrupt("return", response);

          case 5:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  }));
  return _getUsers.apply(this, arguments);
}

function getUser(_x6) {
  return _getUser.apply(this, arguments);
}

function _getUser() {
  _getUser = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(_ref6) {
    var id, provider, includePermissions, includeDevices, includeMeta, includeUnreadNotifications, url, queries, response;
    return regeneratorRuntime.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            id = _ref6.id, provider = _ref6.provider, includePermissions = _ref6.includePermissions, includeDevices = _ref6.includeDevices, includeMeta = _ref6.includeMeta, includeUnreadNotifications = _ref6.includeUnreadNotifications;
            url = "".concat(APP.apiUrl).concat(CONFIG.PROJECT.MEMBERSHIP.USERS.GET(id));
            queries = [];
            if (provider) queries.push("provider=".concat(provider));
            if (includePermissions) queries.push("includePermissions=".concat(true));
            if (includeDevices) queries.push("includeDevices=".concat(true));
            if (includeMeta) queries.push("includeMeta=".concat(true));
            if (includeUnreadNotifications) queries.push("includeUnreadNotifications=".concat(true));

            if (queries.length > 0) {
              url += "?".concat(queries.join('&'));
            }

            _context6.next = 11;
            return loadJson(url, {
              method: 'GET',
              headers: {
                'X-CM-ProjectId': APP.projectId,
                Authorization: "Bearer ".concat(APP.secretKey),
                Accept: 'application/json',
                'Content-Type': 'application/json'
              },
              body: null
            });

          case 11:
            response = _context6.sent;
            return _context6.abrupt("return", response.result);

          case 13:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6);
  }));
  return _getUser.apply(this, arguments);
}

function getUserByEmail(_x7) {
  return _getUserByEmail.apply(this, arguments);
}

function _getUserByEmail() {
  _getUserByEmail = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7(_ref7) {
    var email, provider, includePermissions, includeDevices, includeMeta, includeUnreadNotifications, url, queries, response;
    return regeneratorRuntime.wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            email = _ref7.email, provider = _ref7.provider, includePermissions = _ref7.includePermissions, includeDevices = _ref7.includeDevices, includeMeta = _ref7.includeMeta, includeUnreadNotifications = _ref7.includeUnreadNotifications;
            url = "".concat(APP.apiUrl).concat(CONFIG.PROJECT.MEMBERSHIP.USERS.GET_BY_EMAIL);
            queries = [];
            if (email) queries.push("email=".concat(email));
            if (provider) queries.push("provider=".concat(provider));
            if (includePermissions) queries.push("includePermissions=".concat(true));
            if (includeDevices) queries.push("includeDevices=".concat(true));
            if (includeMeta) queries.push("includeMeta=".concat(true));
            if (includeUnreadNotifications) queries.push("includeUnreadNotifications=".concat(true));

            if (queries.length > 0) {
              url += "?".concat(queries.join('&'));
            }

            _context7.next = 12;
            return loadJson(url, {
              method: 'GET',
              headers: {
                'X-CM-ProjectId': APP.projectId,
                Authorization: "Bearer ".concat(APP.secretKey),
                Accept: 'application/json',
                'Content-Type': 'application/json'
              },
              body: null
            });

          case 12:
            response = _context7.sent;
            return _context7.abrupt("return", response.result);

          case 14:
          case "end":
            return _context7.stop();
        }
      }
    }, _callee7);
  }));
  return _getUserByEmail.apply(this, arguments);
}

function getProfile(_x8) {
  return _getProfile.apply(this, arguments);
}

function _getProfile() {
  _getProfile = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8(_ref8) {
    var includePermissions, includeDevices, includeMeta, includeUnreadNotifications, url, queries, response;
    return regeneratorRuntime.wrap(function _callee8$(_context8) {
      while (1) {
        switch (_context8.prev = _context8.next) {
          case 0:
            includePermissions = _ref8.includePermissions, includeDevices = _ref8.includeDevices, includeMeta = _ref8.includeMeta, includeUnreadNotifications = _ref8.includeUnreadNotifications;
            url = "".concat(APP.apiUrl).concat(CONFIG.PROJECT.MEMBERSHIP.USERS.GET_PROFILE);
            queries = [];
            if (includePermissions) queries.push("includePermissions=".concat(true));
            if (includeDevices) queries.push("includeDevices=".concat(true));
            if (includeMeta) queries.push("includeMeta=".concat(true));
            if (includeUnreadNotifications) queries.push("includeUnreadNotifications=".concat(true));

            if (queries.length > 0) {
              url += "?".concat(queries.join('&'));
            }

            _context8.next = 10;
            return loadJson(url, {
              method: 'GET',
              headers: {
                'X-CM-ProjectId': APP.projectId,
                Authorization: "Bearer ".concat(APP.secretKey),
                Accept: 'application/json',
                'Content-Type': 'application/json'
              },
              body: null
            });

          case 10:
            response = _context8.sent;
            return _context8.abrupt("return", response.result);

          case 12:
          case "end":
            return _context8.stop();
        }
      }
    }, _callee8);
  }));
  return _getProfile.apply(this, arguments);
}

function deleteUser(_x9) {
  return _deleteUser.apply(this, arguments);
}

function _deleteUser() {
  _deleteUser = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee9(_ref9) {
    var id, response;
    return regeneratorRuntime.wrap(function _callee9$(_context9) {
      while (1) {
        switch (_context9.prev = _context9.next) {
          case 0:
            id = _ref9.id;
            _context9.next = 3;
            return loadJson("".concat(APP.apiUrl).concat(CONFIG.PROJECT.MEMBERSHIP.USERS.DELETE(id)), {
              method: 'DELETE',
              headers: {
                'X-CM-ProjectId': APP.projectId,
                Authorization: "Bearer ".concat(APP.secretKey),
                Accept: 'application/json',
                'Content-Type': 'application/json'
              },
              body: null
            });

          case 3:
            response = _context9.sent;
            return _context9.abrupt("return", response);

          case 5:
          case "end":
            return _context9.stop();
        }
      }
    }, _callee9);
  }));
  return _deleteUser.apply(this, arguments);
}

function blockUser(_x10) {
  return _blockUser.apply(this, arguments);
}

function _blockUser() {
  _blockUser = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee10(_ref10) {
    var id, response;
    return regeneratorRuntime.wrap(function _callee10$(_context10) {
      while (1) {
        switch (_context10.prev = _context10.next) {
          case 0:
            id = _ref10.id;
            _context10.next = 3;
            return loadJson("".concat(APP.apiUrl).concat(CONFIG.PROJECT.MEMBERSHIP.USERS.BLOCK(id)), {
              method: 'PUT',
              headers: {
                'X-CM-ProjectId': APP.projectId,
                Authorization: "Bearer ".concat(APP.secretKey),
                Accept: 'application/json',
                'Content-Type': 'application/json'
              },
              body: null
            });

          case 3:
            response = _context10.sent;
            return _context10.abrupt("return", response);

          case 5:
          case "end":
            return _context10.stop();
        }
      }
    }, _callee10);
  }));
  return _blockUser.apply(this, arguments);
}

function unblockUser(_x11) {
  return _unblockUser.apply(this, arguments);
}

function _unblockUser() {
  _unblockUser = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee11(_ref11) {
    var id, response;
    return regeneratorRuntime.wrap(function _callee11$(_context11) {
      while (1) {
        switch (_context11.prev = _context11.next) {
          case 0:
            id = _ref11.id;
            _context11.next = 3;
            return loadJson("".concat(APP.apiUrl).concat(CONFIG.PROJECT.MEMBERSHIP.USERS.UNBLOCK(id)), {
              method: 'PUT',
              headers: {
                'X-CM-ProjectId': APP.projectId,
                Authorization: "Bearer ".concat(APP.secretKey),
                Accept: 'application/json',
                'Content-Type': 'application/json'
              },
              body: null
            });

          case 3:
            response = _context11.sent;
            return _context11.abrupt("return", response);

          case 5:
          case "end":
            return _context11.stop();
        }
      }
    }, _callee11);
  }));
  return _unblockUser.apply(this, arguments);
}

function createPasswordReset(_x12) {
  return _createPasswordReset.apply(this, arguments);
}

function _createPasswordReset() {
  _createPasswordReset = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee12(_ref12) {
    var email, response;
    return regeneratorRuntime.wrap(function _callee12$(_context12) {
      while (1) {
        switch (_context12.prev = _context12.next) {
          case 0:
            email = _ref12.email;
            _context12.next = 3;
            return loadJson("".concat(APP.apiUrl).concat(CONFIG.PROJECT.MEMBERSHIP.USERS.CREATE_PASSWORD_RESET), {
              method: 'POST',
              headers: {
                'X-CM-ProjectId': APP.projectId,
                Authorization: "Bearer ".concat(APP.secretKey),
                Accept: 'application/json',
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({
                email: email
              })
            });

          case 3:
            response = _context12.sent;
            return _context12.abrupt("return", response);

          case 5:
          case "end":
            return _context12.stop();
        }
      }
    }, _callee12);
  }));
  return _createPasswordReset.apply(this, arguments);
}

function checkPasswordReset(_x13) {
  return _checkPasswordReset.apply(this, arguments);
}

function _checkPasswordReset() {
  _checkPasswordReset = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee13(_ref13) {
    var token, response;
    return regeneratorRuntime.wrap(function _callee13$(_context13) {
      while (1) {
        switch (_context13.prev = _context13.next) {
          case 0:
            token = _ref13.token;
            _context13.next = 3;
            return loadJson("".concat(APP.apiUrl).concat(CONFIG.PROJECT.MEMBERSHIP.USERS.CHECK_PASSWORD_RESET, "?token=").concat(token), {
              method: 'GET',
              headers: {
                'X-CM-ProjectId': APP.projectId,
                Authorization: "Bearer ".concat(APP.secretKey),
                Accept: 'application/json',
                'Content-Type': 'application/json'
              },
              body: null
            });

          case 3:
            response = _context13.sent;
            return _context13.abrupt("return", response);

          case 5:
          case "end":
            return _context13.stop();
        }
      }
    }, _callee13);
  }));
  return _checkPasswordReset.apply(this, arguments);
}

function resetPassword(_x14) {
  return _resetPassword.apply(this, arguments);
}

function _resetPassword() {
  _resetPassword = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee14(_ref14) {
    var token, password, repeatedPassword, response;
    return regeneratorRuntime.wrap(function _callee14$(_context14) {
      while (1) {
        switch (_context14.prev = _context14.next) {
          case 0:
            token = _ref14.token, password = _ref14.password, repeatedPassword = _ref14.repeatedPassword;
            _context14.next = 3;
            return loadJson("".concat(APP.apiUrl).concat(CONFIG.PROJECT.MEMBERSHIP.USERS.RESET_PASSWORD), {
              method: 'POST',
              headers: {
                'X-CM-ProjectId': APP.projectId,
                Authorization: "Bearer ".concat(APP.secretKey),
                Accept: 'application/json',
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({
                token: token,
                password: password,
                repeatedPassword: repeatedPassword
              })
            });

          case 3:
            response = _context14.sent;
            return _context14.abrupt("return", response);

          case 5:
          case "end":
            return _context14.stop();
        }
      }
    }, _callee14);
  }));
  return _resetPassword.apply(this, arguments);
}

function verifyRegistration(_x15) {
  return _verifyRegistration.apply(this, arguments);
}

function _verifyRegistration() {
  _verifyRegistration = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee15(_ref15) {
    var token, response;
    return regeneratorRuntime.wrap(function _callee15$(_context15) {
      while (1) {
        switch (_context15.prev = _context15.next) {
          case 0:
            token = _ref15.token;
            _context15.next = 3;
            return loadJson("".concat(APP.apiUrl).concat(CONFIG.PROJECT.MEMBERSHIP.USERS.VERIFY_REGISTRATION), {
              method: 'POST',
              headers: {
                'X-CM-ProjectId': APP.projectId,
                Authorization: "Bearer ".concat(APP.secretKey),
                Accept: 'application/json',
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({
                token: token
              })
            });

          case 3:
            response = _context15.sent;
            return _context15.abrupt("return", response);

          case 5:
          case "end":
            return _context15.stop();
        }
      }
    }, _callee15);
  }));
  return _verifyRegistration.apply(this, arguments);
}

function checkInvitationToken(_x16) {
  return _checkInvitationToken.apply(this, arguments);
}

function _checkInvitationToken() {
  _checkInvitationToken = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee16(_ref16) {
    var token, response;
    return regeneratorRuntime.wrap(function _callee16$(_context16) {
      while (1) {
        switch (_context16.prev = _context16.next) {
          case 0:
            token = _ref16.token;
            _context16.next = 3;
            return loadJson("".concat(APP.apiUrl).concat(CONFIG.PROJECT.MEMBERSHIP.USERS.CHECK_INVITATION_TOKEN, "?token=").concat(token), {
              method: 'GET',
              headers: {
                'X-CM-ProjectId': APP.projectId,
                Authorization: "Bearer ".concat(APP.secretKey),
                Accept: 'application/json',
                'Content-Type': 'application/json'
              },
              body: null
            });

          case 3:
            response = _context16.sent;
            return _context16.abrupt("return", response);

          case 5:
          case "end":
            return _context16.stop();
        }
      }
    }, _callee16);
  }));
  return _checkInvitationToken.apply(this, arguments);
}

function verifyInvitation(_x17) {
  return _verifyInvitation.apply(this, arguments);
}

function _verifyInvitation() {
  _verifyInvitation = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee17(_ref17) {
    var token, password, repeatedPassword, response;
    return regeneratorRuntime.wrap(function _callee17$(_context17) {
      while (1) {
        switch (_context17.prev = _context17.next) {
          case 0:
            token = _ref17.token, password = _ref17.password, repeatedPassword = _ref17.repeatedPassword;
            _context17.next = 3;
            return loadJson("".concat(APP.apiUrl).concat(CONFIG.PROJECT.MEMBERSHIP.USERS.VERIFY_INVITATION), {
              method: 'POST',
              headers: {
                'X-CM-ProjectId': APP.projectId,
                Authorization: "Bearer ".concat(APP.secretKey),
                Accept: 'application/json',
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({
                token: token,
                password: password,
                repeatedPassword: repeatedPassword
              })
            });

          case 3:
            response = _context17.sent;
            return _context17.abrupt("return", response);

          case 5:
          case "end":
            return _context17.stop();
        }
      }
    }, _callee17);
  }));
  return _verifyInvitation.apply(this, arguments);
}

function login(_x18) {
  return _login.apply(this, arguments);
}

function _login() {
  _login = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee18(_ref18) {
    var username, password, response;
    return regeneratorRuntime.wrap(function _callee18$(_context18) {
      while (1) {
        switch (_context18.prev = _context18.next) {
          case 0:
            username = _ref18.username, password = _ref18.password;
            _context18.next = 3;
            return loadJson("".concat(APP.apiUrl).concat(CONFIG.ACCOUNT.LOGIN(username, password)), {
              method: 'POST',
              headers: {
                'X-CM-ProjectId': APP.projectId,
                Authorization: "Bearer ".concat(APP.secretKey),
                Accept: 'application/json',
                'Content-Type': 'application/json'
              }
            });

          case 3:
            response = _context18.sent;
            return _context18.abrupt("return", response);

          case 5:
          case "end":
            return _context18.stop();
        }
      }
    }, _callee18);
  }));
  return _login.apply(this, arguments);
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
  createPasswordReset: createPasswordReset,
  checkPasswordReset: checkPasswordReset,
  resetPassword: resetPassword,
  verifyRegistration: verifyRegistration,
  checkInvitationToken: checkInvitationToken,
  verifyInvitation: verifyInvitation,
  login: login
});

function registerNotificationToken(_x, _x2) {
  return _registerNotificationToken.apply(this, arguments);
}

function _registerNotificationToken() {
  _registerNotificationToken = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(token, userId) {
    var response;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return loadJson("".concat(APP.apiUrl).concat(CONFIG.PROJECT.NOTIFICATIONS.PUSH.REGISTER_TOKEN), {
              method: 'POST',
              headers: {
                'X-CM-ProjectId': APP.projectId,
                Authorization: "Bearer ".concat(APP.secretKey),
                Accept: 'application/json',
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({
                token: token,
                userId: userId
              })
            });

          case 2:
            response = _context.sent;
            return _context.abrupt("return", response);

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _registerNotificationToken.apply(this, arguments);
}

function deleteDeviceToken(_x3) {
  return _deleteDeviceToken.apply(this, arguments);
}

function _deleteDeviceToken() {
  _deleteDeviceToken = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(deviceId) {
    var response;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return loadJson("".concat(APP.apiUrl).concat(CONFIG.PROJECT.NOTIFICATIONS.PUSH.DELETE_DEVICE_TOKEN(deviceId)), {
              method: 'DELETE',
              headers: {
                'X-CM-ProjectId': APP.projectId,
                Authorization: "Bearer ".concat(APP.secretKey),
                Accept: 'application/json',
                'Content-Type': 'application/json'
              },
              body: null
            });

          case 2:
            response = _context2.sent;
            return _context2.abrupt("return", response);

          case 4:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _deleteDeviceToken.apply(this, arguments);
}

function deleteDevice(_x4) {
  return _deleteDevice.apply(this, arguments);
} // TODO, replace it later with object

function _deleteDevice() {
  _deleteDevice = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(deviceId) {
    var response;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return loadJson("".concat(APP.apiUrl).concat(CONFIG.PROJECT.NOTIFICATIONS.PUSH.DELETE_DEVICE(deviceId)), {
              method: 'DELETE',
              headers: {
                'X-CM-ProjectId': APP.projectId,
                Authorization: "Bearer ".concat(APP.secretKey),
                Accept: 'application/json',
                'Content-Type': 'application/json'
              },
              body: null
            });

          case 2:
            response = _context3.sent;
            return _context3.abrupt("return", response);

          case 4:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));
  return _deleteDevice.apply(this, arguments);
}

function sendPushNotification(_x5, _x6, _x7, _x8, _x9, _x10, _x11, _x12) {
  return _sendPushNotification.apply(this, arguments);
} // TODO : make it as POST and pass filter and sort parameters

function _sendPushNotification() {
  _sendPushNotification = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(templateId, users, senderApiKey, devices, tokens, postpone, respectTimeZone, isNonPushable) {
    var apieKey, response;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            apieKey = APP.secretKey;

            if (senderApiKey) {
              apieKey = senderApiKey;
            }
            _context4.next = 5;
            return loadJson("".concat(APP.apiUrl).concat(CONFIG.PROJECT.NOTIFICATIONS.PUSH.SEND), {
              method: 'POST',
              headers: {
                'X-CM-ProjectId': APP.projectId,
                Authorization: "Bearer ".concat(apieKey),
                Accept: 'application/json',
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({
                templateId: templateId,
                users: users || [],
                devices: devices || [],
                tokens: tokens || null,
                postpone: postpone || false,
                respectTimeZone: respectTimeZone || true,
                isNonPushable: isNonPushable || false
              })
            });

          case 5:
            response = _context4.sent;
            return _context4.abrupt("return", response);

          case 7:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));
  return _sendPushNotification.apply(this, arguments);
}

function getNotifications(_x13, _x14, _x15, _x16, _x17) {
  return _getNotifications.apply(this, arguments);
}

function _getNotifications() {
  _getNotifications = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(userId, pageNumber, pageSize, filter, sort) {
    var response;
    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:

            _context5.next = 4;
            return loadJson("".concat(APP.apiUrl).concat(CONFIG.PROJECT.NOTIFICATIONS.PUSH.GET_ALL(userId, pageNumber, pageSize)), {
              method: 'GET',
              headers: {
                'X-CM-ProjectId': APP.projectId,
                Authorization: "Bearer ".concat(APP.secretKey),
                Accept: 'application/json',
                'Content-Type': 'application/json'
              },
              body: null
            });

          case 4:
            response = _context5.sent;
            return _context5.abrupt("return", response.result);

          case 6:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  }));
  return _getNotifications.apply(this, arguments);
}

function getNotification(_x18) {
  return _getNotification.apply(this, arguments);
}

function _getNotification() {
  _getNotification = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(id) {
    var response;
    return regeneratorRuntime.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            _context6.next = 2;
            return loadJson("".concat(APP.apiUrl).concat(CONFIG.PROJECT.NOTIFICATIONS.PUSH.GET(id)), {
              method: 'GET',
              headers: {
                'X-CM-ProjectId': APP.projectId,
                Authorization: "Bearer ".concat(APP.secretKey),
                Accept: 'application/json',
                'Content-Type': 'application/json'
              },
              body: null
            });

          case 2:
            response = _context6.sent;
            return _context6.abrupt("return", response.result);

          case 4:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6);
  }));
  return _getNotification.apply(this, arguments);
}

function markNotificationAsRead(_x19, _x20) {
  return _markNotificationAsRead.apply(this, arguments);
}

function _markNotificationAsRead() {
  _markNotificationAsRead = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7(id, userId) {
    var response;
    return regeneratorRuntime.wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            _context7.next = 2;
            return loadJson("".concat(APP.apiUrl).concat(CONFIG.PROJECT.NOTIFICATIONS.PUSH.MARK_NOTIFICATION_AS_READ(id)), {
              method: 'PATCH',
              headers: {
                'X-CM-ProjectId': APP.projectId,
                Authorization: "Bearer ".concat(APP.secretKey),
                Accept: 'application/json',
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({
                userId: userId,
                notificationId: id
              })
            });

          case 2:
            response = _context7.sent;
            return _context7.abrupt("return", response);

          case 4:
          case "end":
            return _context7.stop();
        }
      }
    }, _callee7);
  }));
  return _markNotificationAsRead.apply(this, arguments);
}

function markNotificationsAsRead(_x21) {
  return _markNotificationsAsRead.apply(this, arguments);
}

function _markNotificationsAsRead() {
  _markNotificationsAsRead = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8(userId) {
    var response;
    return regeneratorRuntime.wrap(function _callee8$(_context8) {
      while (1) {
        switch (_context8.prev = _context8.next) {
          case 0:
            _context8.next = 2;
            return loadJson("".concat(APP.apiUrl).concat(CONFIG.PROJECT.NOTIFICATIONS.PUSH.MARK_NOTIFICATIONS_AS_READ), {
              method: 'PATCH',
              headers: {
                'X-CM-ProjectId': APP.projectId,
                Authorization: "Bearer ".concat(APP.secretKey),
                Accept: 'application/json',
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({
                userId: userId
              })
            });

          case 2:
            response = _context8.sent;
            return _context8.abrupt("return", response);

          case 4:
          case "end":
            return _context8.stop();
        }
      }
    }, _callee8);
  }));
  return _markNotificationsAsRead.apply(this, arguments);
}

function GetNotificationsCount(_x22) {
  return _GetNotificationsCount.apply(this, arguments);
}

function _GetNotificationsCount() {
  _GetNotificationsCount = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee9(userId) {
    var response;
    return regeneratorRuntime.wrap(function _callee9$(_context9) {
      while (1) {
        switch (_context9.prev = _context9.next) {
          case 0:
            _context9.next = 2;
            return loadJson("".concat(APP.apiUrl).concat(CONFIG.PROJECT.NOTIFICATIONS.PUSH.GET_NOTIFICATIONS_COUNT(userId)), {
              method: 'GET',
              headers: {
                'X-CM-ProjectId': APP.projectId,
                Authorization: "Bearer ".concat(APP.secretKey),
                Accept: 'application/json',
                'Content-Type': 'application/json'
              },
              body: null
            });

          case 2:
            response = _context9.sent;
            return _context9.abrupt("return", response);

          case 4:
          case "end":
            return _context9.stop();
        }
      }
    }, _callee9);
  }));
  return _GetNotificationsCount.apply(this, arguments);
}

var notificationsService = /*#__PURE__*/Object.freeze({
  __proto__: null,
  registerNotificationToken: registerNotificationToken,
  deleteDeviceToken: deleteDeviceToken,
  deleteDevice: deleteDevice,
  sendPushNotification: sendPushNotification,
  getNotifications: getNotifications,
  getNotification: getNotification,
  markNotificationAsRead: markNotificationAsRead,
  markNotificationsAsRead: markNotificationsAsRead,
  GetNotificationsCount: GetNotificationsCount
});

function executeFunction(_x) {
  return _executeFunction.apply(this, arguments);
}

function _executeFunction() {
  _executeFunction = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(_ref) {
    var functionId, data, qualifier, meta, tokens, response;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            functionId = _ref.functionId, data = _ref.data, qualifier = _ref.qualifier, meta = _ref.meta, tokens = _ref.tokens;
            _context.next = 3;
            return loadJson("".concat(APP.apiUrl).concat(CONFIG.PROJECT.CODE.EXECUTE(functionId)), {
              method: 'POST',
              headers: {
                'X-CM-ProjectId': APP.projectId,
                Authorization: "Bearer ".concat(APP.secretKey),
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

          case 3:
            response = _context.sent;
            return _context.abrupt("return", response.result ? JSON.parse(response.result) : null);

          case 5:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _executeFunction.apply(this, arguments);
}

var codeService = /*#__PURE__*/Object.freeze({
  __proto__: null,
  executeFunction: executeFunction
});

function getOrder(_x) {
  return _getOrder.apply(this, arguments);
}

function _getOrder() {
  _getOrder = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(id) {
    var response;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return loadJson("".concat(APP.apiUrl).concat(CONFIG.PROJECT.PAYMENTS.ORDERS.GET(id)), {
              method: 'GET',
              headers: {
                'X-CM-ProjectId': APP.projectId,
                Authorization: "Bearer ".concat(APP.secretKey),
                Accept: 'application/json',
                'Content-Type': 'application/json'
              },
              body: null
            });

          case 2:
            response = _context.sent;
            return _context.abrupt("return", response);

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _getOrder.apply(this, arguments);
}

function getOrders(_x2, _x3, _x4, _x5, _x6) {
  return _getOrders.apply(this, arguments);
}

function _getOrders() {
  _getOrders = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(pageNumber, pageSize, sort, filter, userId) {
    var response;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return loadJson("".concat(APP.apiUrl).concat(CONFIG.PROJECT.PAYMENTS.ORDERS.GET_ALL), {
              method: 'GET',
              headers: {
                'X-CM-ProjectId': APP.projectId,
                Authorization: "Bearer ".concat(APP.secretKey),
                Accept: 'application/json',
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({
                userId: userId,
                pageNumber: pageNumber,
                pageSize: pageSize,
                sort: sort,
                filter: filter
              })
            });

          case 2:
            response = _context2.sent;
            return _context2.abrupt("return", response);

          case 4:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _getOrders.apply(this, arguments);
}

function createOrder(_x7) {
  return _createOrder.apply(this, arguments);
}

function _createOrder() {
  _createOrder = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(record) {
    var response;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return loadJson("".concat(APP.apiUrl).concat(CONFIG.PROJECT.PAYMENTS.ORDERS.CREATE), {
              method: 'POST',
              headers: {
                'X-CM-ProjectId': APP.projectId,
                Authorization: "Bearer ".concat(APP.secretKey),
                Accept: 'application/json',
                'Content-Type': 'application/json'
              },
              body: JSON.stringify(record)
            });

          case 2:
            response = _context3.sent;
            return _context3.abrupt("return", response.result);

          case 4:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));
  return _createOrder.apply(this, arguments);
}

function createPayseraTransaction(_x8, _x9) {
  return _createPayseraTransaction.apply(this, arguments);
}

function _createPayseraTransaction() {
  _createPayseraTransaction = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(orderId, record) {
    var response;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.next = 2;
            return loadJson("".concat(APP.apiUrl).concat(CONFIG.PROJECT.PAYMENTS.TRANSACTIONS.CREATE_PAYSERA(orderId)), {
              method: 'POST',
              headers: {
                'X-CM-ProjectId': APP.projectId,
                Authorization: "Bearer ".concat(APP.secretKey),
                Accept: 'application/json',
                'Content-Type': 'application/json'
              },
              body: JSON.stringify(record)
            });

          case 2:
            response = _context4.sent;
            return _context4.abrupt("return", response.result);

          case 4:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));
  return _createPayseraTransaction.apply(this, arguments);
}

var paymentsService = /*#__PURE__*/Object.freeze({
  __proto__: null,
  getOrder: getOrder,
  getOrders: getOrders,
  createOrder: createOrder,
  createPayseraTransaction: createPayseraTransaction
});

var db = databaseService;
var files = filesService;
var iam = iamService;
var notifications = notificationsService;
var code = codeService;
var payments = paymentsService;
var config = APP;

exports.code = code;
exports.config = config;
exports.db = db;
exports.files = files;
exports.iam = iam;
exports.notifications = notifications;
exports.payments = payments;
