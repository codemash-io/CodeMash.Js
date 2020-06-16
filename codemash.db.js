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
            projection : projection || undefined,
            filter: filter || undefined,
            sort: sort || undefined,
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


export async function updateRecord({collectionName, filter, updateClause}) {
    let response = await server.loadJson(`${Config.apiUrl}${Endpoints.PROJECT.DATABASE.COLLECTION.RECORD.UPDATE_PART_OF_DOCUMENT(collectionName)}`,
    {
        method: 'PATCH',
        headers: {
            'X-CM-ProjectId': Config.projectId,
            Authorization: `Bearer ${Config.secretKey}`,
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(
            {   
                filter : JSON.stringify(filter),
                update : JSON.stringify(updateClause)
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
          projection : projection || undefined,
          referencedFields: referencedFields,
          includeUserNames,
          includeRoleNames,
          includeCollectionNames,
          includeTermNames,
          excludeCulture,
          addReferencesFirst
      }),
    });     
    
    return response.result ? JSON.parse(response.result) : null;
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
          filter,
          projection : projection || undefined,
          referencedFields: referencedFields,
          includeUserNames,
          includeRoleNames,
          includeCollectionNames,
          includeTermNames,
          excludeCulture,
          addReferencesFirst
        }),
    });     
    
    return response.result ? JSON.parse(response.result) : null;
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