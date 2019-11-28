import * as server from './server';
import Config from './config';
import { CONFIG as Endpoints } from './routes';

export async function register(email, password, displayName = null, firstName = null, lastName = null) {
    let response;

    try {
        response = await server.loadJson(`${Config.apiUrl}${Endpoints.PROJECT.MEMBERSHIP.USERS.REGISTER}`,
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

    return response;
}


export async function updateUser(record) {
    
    let response;

    try {
        response = await server.loadJson(`${Config.apiUrl}${Endpoints.PROJECT.MEMBERSHIP.USERS.UPDATE}`,
        {
            method: 'POST',
            headers: {
                'X-CM-ProjectId': Config.projectId,
                Authorization: `Bearer ${Config.secretKey}`,
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(record),
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

    return response;    
}

export async function getUser(userId) {
    
    let response;
    try {
        response = await server.loadJson(`${Config.apiUrl}${Endpoints.PROJECT.MEMBERSHIP.USERS.GET(userId)}`,
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
    return response.result;
}

export async function deleteUser(userId) {
    
    let response;

    try {
        response = await server.loadJson(`${Config.apiUrl}${Endpoints.PROJECT.MEMBERSHIP.USERS.DELETE(userId)}`,
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
    } catch(err) {

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


export async function resetPassword(email) {
    
    let response;

    try {
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
    } catch(err) {

        if (err instanceof server.HttpError && err.response.status == 404) {
            // loop continues after the alert
            alert("Such url not found.");
        } else {
            // unknown error, rethrow
            throw err;
        }
    }

    return response;    
}

export async function login(username, password) {
    
    let response;

    try {
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
        return response.result;
    } catch(err) {

        if (err instanceof server.HttpError && err.response.status == 404) {
            // loop continues after the alert
            alert("Such url not found.");
        } else {
            // unknown error, rethrow
            throw err;
        }
    }

    return response;    
}