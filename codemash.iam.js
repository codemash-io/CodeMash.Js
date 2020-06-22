import * as server from './server';
import Config from './config';
import { CONFIG as Endpoints } from './routes';
import { objectOrStringToString } from './utils';

export async function register({ email, password, displayName, firstName, lastName,
  autoLogin = true, meta, language, timeZone, subscribeToNews, country, countryCode,
  area, city, address, address2, phone, fax, company, postalCode, gender, birthday }) {

    const response = await server.loadJson(`${Config.apiUrl}${Endpoints.PROJECT.MEMBERSHIP.USERS.REGISTER}`,
    {
        method: 'POST',
        headers: {
            'X-CM-ProjectId': Config.projectId,
            Authorization: `Bearer ${Config.secretKey}`,
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            email, password, displayName, firstName, lastName,
            autoLogin, meta: objectOrStringToString(meta), language, timeZone, subscribeToNews,
            country, countryCode, area, city, address, address2,
            phone, fax, company, postalCode, gender, birthday
        }),
    });
    return response;
}

export async function invite({ email, displayName, firstName, lastName,
  meta, language, timeZone, subscribeToNews, country, countryCode,
  area, city, address, address2, phone, fax, company, postalCode, gender, birthday }) {

    const response = await server.loadJson(`${Config.apiUrl}${Endpoints.PROJECT.MEMBERSHIP.USERS.INVITE}`,
    {
        method: 'POST',
        headers: {
            'X-CM-ProjectId': Config.projectId,
            Authorization: `Bearer ${Config.secretKey}`,
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            email, displayName, firstName, lastName,
            meta: objectOrStringToString(meta), language, timeZone, subscribeToNews,
            country, countryCode, area, city, address, address2,
            phone, fax, company, postalCode, gender, birthday
        }),
    });
    return response;
}

export async function updateUser({ id, displayName, firstName, lastName,
  meta, language, timeZone, subscribeToNews, unsubscribedNewsTags, country, countryCode,
  area, city, address, address2, phone, fax, company, postalCode, gender, birthday }) {
    
    const response = await server.loadJson(`${Config.apiUrl}${Endpoints.PROJECT.MEMBERSHIP.USERS.UPDATE(id)}`,
    {
        method: 'PUT',
        headers: {
            'X-CM-ProjectId': Config.projectId,
            Authorization: `Bearer ${Config.secretKey}`,
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          displayName, firstName, lastName,
          meta: objectOrStringToString(meta), language, timeZone,
          subscribeToNews, unsubscribedNewsTags,
          country, countryCode, area, city, address, address2,
          phone, fax, company, postalCode, gender, birthday
        }),
    }); 
    return response; 
}

export async function getUsers({ pageNumber, pageSize, filter, sort }) {
    const response = await server.loadJson(`${Config.apiUrl}${Endpoints.PROJECT.MEMBERSHIP.USERS.GET_ALL}`,
    {
        method: 'POST',
        headers: {
            'X-CM-ProjectId': Config.projectId,
            Authorization: `Bearer ${Config.secretKey}`,
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          pageSize: pageSize || Config.tablePageSize,
          pageNumber: pageNumber || 0,
          filter: objectOrStringToString(filter),
          sort: objectOrStringToString(sort),
        }),
    });
    return response; 
}

export async function getUser(userId) {
    
    let response = await server.loadJson(`${Config.apiUrl}${Endpoints.PROJECT.MEMBERSHIP.USERS.GET(userId)}`,
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
    return response.result;  
}

export async function deleteUser(userId) {
    
    let response = await server.loadJson(`${Config.apiUrl}${Endpoints.PROJECT.MEMBERSHIP.USERS.DELETE(userId)}`,
    {
        method: 'DELETE',
        headers: {
            'X-CM-ProjectId': Config.projectId,
            Authorization: `Bearer ${Config.secretKey}`,
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: null,
    });   
    return response.result.deletedCount > 0;
}


export async function resetPassword(email) {
    
    let response = await server.loadJson(`${Config.apiUrl}${Endpoints.PROJECT.MEMBERSHIP.USERS.RESET_PASSWORD}`,
    {
        method: 'POST',
        headers: {
            'X-CM-ProjectId': Config.projectId,
            Authorization: `Bearer ${Config.secretKey}`,
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ "email" : email }),
    });        
    return response.result;
}

export async function login(username, password) {
    
    let response = await server.loadJson(`${Config.apiUrl}${Endpoints.ACCOUNT.LOGIN(username, password)}`,
    {
        method: 'POST',
        headers: {
            'X-CM-ProjectId': Config.projectId,
            Authorization: `Bearer ${Config.secretKey}`,
            Accept: 'application/json',
            'Content-Type': 'application/json',
        }
    });        
    return response;
}