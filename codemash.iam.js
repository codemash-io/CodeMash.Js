import * as server from './server';
import Config from './config';
import { CONFIG as Endpoints } from './routes';

export async function register(email, password, displayName = null, firstName = null, lastName = null) {
    
    let response = await server.loadJson(`${Config.apiUrl}${Endpoints.PROJECT.MEMBERSHIP.USERS.REGISTER}`,
    {
        method: 'POST',
        headers: {
            'X-CM-ProjectId': Config.projectId,
            Authorization: `Bearer ${Config.secretKey}`,
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            email,
            password,
            displayName,
            firstName,
            lastName,
            autoLogin: false,
        }),
    });   
    return response;
}


export async function updateUser(record) {
    
    let response = await server.loadJson(`${Config.apiUrl}${Endpoints.PROJECT.MEMBERSHIP.USERS.UPDATE}`,
    {
        method: 'PUT',
        headers: {
            'X-CM-ProjectId': Config.projectId,
            Authorization: `Bearer ${Config.secretKey}`,
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(record),
    }); 
    return response; 
}

export async function getUsers(pageNumber, pageSize, filter, sort) {

    if (filter == null || filter == undefined)
    {
        filter = ''
    }
    
    if (sort == null || sort == undefined)
    { 
        sort = ''
    }
    
    let response = await server.loadJson(`${Config.apiUrl}${Endpoints.PROJECT.MEMBERSHIP.USERS.GET_ALL}`,
    {
        method: 'GET',
        headers: {
            'X-CM-ProjectId': Config.projectId,
            Authorization: `Bearer ${Config.secretKey}`,
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            "PageSize": pageSize || Config.tablePageSize,
            "PageNumber": pageNumber || 0,                
            "filter": filter,
            "sort": sort,
        }),
    });
    return response.result; 
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