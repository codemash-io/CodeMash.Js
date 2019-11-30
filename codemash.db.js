import * as server from './server';
import Config from './config';
import { CONFIG as Endpoints } from './routes';


export async function getRecords(collectionName, pageNumber, pageSize, sort, filter, projection) {
    
    if (projection == null || projection == undefined)
    {
        projection = ''
    }

    if (filter == null || filter == undefined)
    {
        filter = ''
    }
    
    if (sort == null || sort == undefined)
    { 
        sort = ''
    }

    let response;

    try {
        response = await server.loadJson(`${Config.apiUrl}${Endpoints.PROJECT.DATABASE.COLLECTION.RECORD.GET_ALL(collectionName)}`,
        {
            method: 'POST',
            headers: {
                'X-CM-ProjectId': Config.projectId,
                Authorization: `Bearer ${Config.secretKey}`,
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                "PageSize": pageSize || Config.tablePageSize,
                "PageNumber": pageNumber || 0,
                "projection" : projection,
                "filter": filter,
                "sort": sort,
            }),
        });        
    } catch(err) {

        if (err instanceof server.HttpError && err.response.status == 404) {
            // loop continues after the alert
            alert("Such url not found.");
        } else {
            // unknown error, rethrow
            throw err;
        }
    }
    
    let result = JSON.parse(response.result)
    return result;
}

export async function deleteRecord(collectionName, filter) {
    
    let response;

    try {
        response = await server.loadJson(`${Config.apiUrl}${Endpoints.PROJECT.DATABASE.COLLECTION.RECORD.DELETE(collectionName)}`,
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
    } catch(err) {

        console.log(err)

        if (err instanceof server.HttpError && err.response.status == 404) {
            // loop continues after the alert
            alert("Such url not found.");
        } else {
            // unknown error, rethrow
            throw err;
        }
    }
    return response.result.deletedCount > 0;
}


export async function saveRecord(collectionName, document) {
    
    let response;
    try {
        response = await server.loadJson(`${Config.apiUrl}${Endpoints.PROJECT.DATABASE.COLLECTION.RECORD.CREATE(collectionName)}`,
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
    } catch(err) {

        console.log(err)

        if (err instanceof server.HttpError && err.response.status == 404) {
            // loop continues after the alert
            alert("Such url not found.");
        } else {
            // unknown error, rethrow
            throw err;
        }
    }
    let result = JSON.parse(response.result)
    return result;
}


export async function updateRecord(collectionName, filter, updateClause) {
    
    let response;
    
    try {
        response = await server.loadJson(`${Config.apiUrl}${Endpoints.PROJECT.DATABASE.COLLECTION.RECORD.UPDATE_PART_OF_DOCUMENT(collectionName)}`,
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
    } catch(err) {

        console.log(err)

        if (err instanceof server.HttpError && err.response.status == 404) {
            // loop continues after the alert
            alert("Such url not found.");
        } else {
            // unknown error, rethrow
            throw err;
        }
    }
    let result = response.result;
    return result;
}

export async function getRecord(collectionName, recordId) {

    let response;
    try {
        response = await server.loadJson(`${Config.apiUrl}${Endpoints.PROJECT.DATABASE.COLLECTION.RECORD.GET(collectionName, recordId)}`,
        {
            method: 'GET',
            headers: {
                'X-CM-ProjectId': Config.projectId,
                Authorization: `Bearer ${Config.secretKey}`,
                Accept: 'application/json',
                'Content-Type': 'application/json',
                'Accept-Language': 'en'
            },
            body: null,
        });        
    } catch(err) {

        if (err instanceof server.HttpError && err.response.status == 404) {
            // loop continues after the alert
            alert("Such url not found.");
        } else {
            // unknown error, rethrow
            throw err;
        }
    }
    let result = JSON.parse(response.result)
    return result;
}

export async function getTaxonomyTerms(taxonomyName) {

    let response;

    try {
        response = await server.loadJson(`${Config.apiUrl}${Endpoints.PROJECT.DATABASE.TAXONOMY.TERM.GET_ALL(taxonomyName)}`,
        {
            method: 'GET',
            headers: {
                'X-CM-ProjectId': Config.projectId,
                Authorization: `Bearer ${Config.secretKey}`,
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: null,
        });        
    } catch(err) {

        if (err instanceof server.HttpError && err.response.status == 404) {
            // loop continues after the alert
            alert("Such url not found.");
        } else {
            // unknown error, rethrow
            throw err;
        }
    }
    
    let result = JSON.parse(response.result)
    return result;
}
