import * as server from './server';
import Config from './config';
import { CONFIG as Endpoints } from './routes';

export async function getRecords({ 
  collectionName, pageNumber, pageSize, sort, filter, projection, language,
  includeUserNames, includeRoleNames, includeCollectionNames, includeTermNames,
  referencedFields, addReferencesFirst, excludeCulture
}) {
    const response = await server.loadJson(`${Config.apiUrl}${Endpoints.PROJECT.DATABASE.COLLECTION.RECORD.GET_ALL(collectionName)}`,
    {
        method: 'POST',
        headers: {
            'X-CM-ProjectId': Config.projectId,
            Authorization: `Bearer ${Config.secretKey}`,
            Accept: 'application/json',
            'Content-Type': 'application/json',
            'Accept-Language': language || 'en'
        },
        body: JSON.stringify({
            pageSize: pageSize || Config.tablePageSize,
            pageNumber: pageNumber || 0,
            projection : filterToString(projection),
            filter: filterToString(filter),
            sort: filterToString(sort),
            referencedFields: referencedFields,
            includeUserNames,
            includeRoleNames,
            includeCollectionNames,
            includeTermNames,
            excludeCulture,
            addReferencesFirst
        }),
    });  
        
    return {
      totalCount: response.totalCount,
      result: JSON.parse(response.result),
    };
}

export async function deleteRecordById({ collectionName, id, ignoreTriggers }) {
  let response = await server.loadJson(`${Config.apiUrl}${Endpoints.PROJECT.DATABASE.COLLECTION.RECORD.DELETE(collectionName, id)}`,
  {
      method: 'DELETE',
      headers: {
          'X-CM-ProjectId': Config.projectId,
          Authorization: `Bearer ${Config.secretKey}`,
          Accept: 'application/json',
          'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        ignoreTriggers
      }),
  });   

  return response.result.deletedCount > 0;
}

export async function deleteRecord({ collectionName, filter, ignoreTriggers }) {
    let response = await server.loadJson(`${Config.apiUrl}${Endpoints.PROJECT.DATABASE.COLLECTION.RECORD.DELETE(collectionName)}`,
    {
        method: 'DELETE',
        headers: {
            'X-CM-ProjectId': Config.projectId,
            Authorization: `Bearer ${Config.secretKey}`,
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({"filter" : filter }),
    });   

    return response.result.deletedCount > 0;
}


export async function saveRecord({collectionName, document}) {
    let response = await server.loadJson(`${Config.apiUrl}${Endpoints.PROJECT.DATABASE.COLLECTION.RECORD.CREATE(collectionName)}`,
    {
        method: 'POST',
        headers: {
            'X-CM-ProjectId': Config.projectId,
            Authorization: `Bearer ${Config.secretKey}`,
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({document : JSON.stringify(document) }),
    });

    let result = JSON.parse(response.result)
    return result;
}


export async function updateRecord({ collectionName, id, update, waitForFileUpload, bypassDocumentValidation, ignoreTriggers, isUpsert }) {
    let response = await server.loadJson(`${Config.apiUrl}${Endpoints.PROJECT.DATABASE.COLLECTION.RECORD.PATCH(collectionName, id)}`,
    {
        method: 'PATCH',
        headers: {
          'X-CM-ProjectId': Config.projectId,
          Authorization: `Bearer ${Config.secretKey}`,
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({   
          update: filterToString(update),
          waitForFileUpload,
          bypassDocumentValidation,
          ignoreTriggers,
          isUpsert,
        }),
    });  
    
    let result = response.result;
    return result;
}

export async function updateRecordWithFilter({ collectionName, filter, update, waitForFileUpload, bypassDocumentValidation, ignoreTriggers, isUpsert }) {

    let response = await server.loadJson(`${Config.apiUrl}${Endpoints.PROJECT.DATABASE.COLLECTION.RECORD.PATCH_BY_FILTER(collectionName)}`,
    {
        method: 'PATCH',
        headers: {
            'X-CM-ProjectId': Config.projectId,
            Authorization: `Bearer ${Config.secretKey}`,
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({   
            filter: filterToString(filter),
            update: filterToString(update),
            waitForFileUpload,
            bypassDocumentValidation,
            ignoreTriggers,
            isUpsert,
        }),
    });  
    
    let result = response.result;
    return result;
}

export async function getRecord({collectionName, id, projection, includeUserNames, includeRoleNames, includeCollectionNames,
  includeTermNames, referencedFields, addReferencesFirst, excludeCulture, language}) {

    const response = await server.loadJson(`${Config.apiUrl}${Endpoints.PROJECT.DATABASE.COLLECTION.RECORD.GET(collectionName, id)}`,
    {
        method: 'GET',
        headers: {
            'X-CM-ProjectId': Config.projectId,
            Authorization: `Bearer ${Config.secretKey}`,
            Accept: 'application/json',
            'Content-Type': 'application/json',
            'Accept-Language': language || 'en'
        },
        body: JSON.stringify({
          projection: filterToString(projection),
          referencedFields: referencedFields,
          includeUserNames,
          includeRoleNames,
          includeCollectionNames,
          includeTermNames,
          excludeCulture,
          addReferencesFirst
      }),
    });     
    
    return response && response.result ? JSON.parse(response.result) : null;
}

export async function getRecordWithFilter({collectionName, filter, projection, includeUserNames, includeRoleNames, includeCollectionNames,
  includeTermNames, referencedFields, addReferencesFirst, excludeCulture, language}) {

    const response = await server.loadJson(`${Config.apiUrl}${Endpoints.PROJECT.DATABASE.COLLECTION.RECORD.GET_WITH_FILTER(collectionName)}`,
    {
        method: 'POST',
        headers: {
            'X-CM-ProjectId': Config.projectId,
            Authorization: `Bearer ${Config.secretKey}`,
            Accept: 'application/json',
            'Content-Type': 'application/json',
            'Accept-Language': language || 'en'
        },
        body: JSON.stringify({ 
          filter: filterToString(filter),
          projection : filterToString(projection),
          referencedFields: referencedFields,
          includeUserNames,
          includeRoleNames,
          includeCollectionNames,
          includeTermNames,
          excludeCulture,
          addReferencesFirst
        }),
    });     
    
    return response && response.result ? JSON.parse(response.result) : null;
}


// todo: empty filter is defined because of bug. Later 
// is not necessary to define empty filter.
export async function getTaxonomyTerms({taxonomyName, language}) {
    
    let response = await server.loadJson(`${Config.apiUrl}${Endpoints.PROJECT.DATABASE.TAXONOMY.TERM.GET_ALL(taxonomyName)}`,
    {
        method: 'POST',
        headers: {
            'X-CM-ProjectId': Config.projectId,
            Authorization: `Bearer ${Config.secretKey}`,
            Accept: 'application/json',
            'Content-Type': 'application/json',
            'Accept-Language': language || 'en'
        },
        body: null,
    });    

    let result = response.result;
    return result;
}

export async function executeAggregate({ collectionName, id, pipeline, tokens }) {
    const url = pipeline
      ? `${Config.apiUrl}${Endpoints.PROJECT.DATABASE.COLLECTION.AGGREGATES.GET_CUSTOM(collectionName)}`
      : `${Config.apiUrl}${Endpoints.PROJECT.DATABASE.COLLECTION.AGGREGATES.GET(collectionName, id)}`;

    const response = await server.loadJson(url,
    {
        method: 'POST',
        headers: {
            'X-CM-ProjectId': Config.projectId,
            Authorization: `Bearer ${Config.secretKey}`,
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          tokens
        }),
    });    

    return JSON.parse(response.result);
}

function filterToString(filter) {
  const stringifiedFilter = filter !== undefined && typeof filter === 'object' && filter !== null ? JSON.stringify(filter) : filter;
  if (!stringifiedFilter) return undefined;
  return stringifiedFilter;
}