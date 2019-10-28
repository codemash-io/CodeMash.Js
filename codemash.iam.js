import * as server from './server';
import { CONFIG } from './config';
import { CONFIG as Endpoints } from './routes';

exports.saveUser = async function(record) {
    
    let response;

    // if record with the id, then update user. 
    if (record && record.id) {

        try {
            response = await server.loadJson(`${CONFIG.API_URL}${Endpoints.PROJECT.MEMBERSHIP.USERS.UPDATE}`,
            {
                method: 'POST',
                headers: {
                    'X-CM-ProjectId': CONFIG.PROJECT_ID,
                    Authorization: `Bearer ${CONFIG.TOKEN}`,
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
    }
    else {
        
        try {
            response = await server.loadJson(`${CONFIG.API_URL}${Endpoints.PROJECT.MEMBERSHIP.USERS.REGISTER}`,
            {
                method: 'POST',
                headers: {
                    'X-CM-ProjectId': CONFIG.PROJECT_ID,
                    Authorization: `Bearer ${CONFIG.TOKEN}`,
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    ...record,
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
    }

    return response;    
}

exports.getUser = async function getUser(id) {
    
    let response;
    try {
        response = await server.loadJson(`${CONFIG.API_URL}${Endpoints.PROJECT.MEMBERSHIP.USERS.GET(id)}`,
        {
            method: 'GET',
            headers: {
                'X-CM-ProjectId': CONFIG.PROJECT_ID,
                Authorization: `Bearer ${CONFIG.TOKEN}`,
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

exports.deleteUser = async function(userId) {
    
    let response;

    try {
        response = await server.loadJson(`${CONFIG.API_URL}${Endpoints.PROJECT.MEMBERSHIP.USERS.DELETE(userId)}`,
        {
            method: 'DELETE',
            headers: {
                'X-CM-ProjectId': CONFIG.PROJECT_ID,
                Authorization: `Bearer ${CONFIG.TOKEN}`,
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


exports.resetPassword = async function(email) {
    
    let response;

    try {
        let response = await server.loadJson(`${CONFIG.API_URL}${Endpoints.PROJECT.MEMBERSHIP.USERS.RESET_PASSWORD}`,
        {
            method: 'POST',
            headers: {
                'X-CM-ProjectId': CONFIG.PROJECT_ID,
                Authorization: `Bearer ${CONFIG.TOKEN}`,
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


