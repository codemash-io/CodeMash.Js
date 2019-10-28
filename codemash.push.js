import * as server from './server';
import { CONFIG } from './config';
import { CONFIG as Endpoints } from './routes';

exports.registerNotificationToken = async function(token, userId) {

    let response;

    try {
        response = await server.loadJson(`${CONFIG.API_URL}${Endpoints.PROJECT.NOTIFICATIONS.PUSH.REGISTER_TOKEN}`,
        {
            method: 'POST',
            headers: {
                'X-CM-ProjectId': CONFIG.PROJECT_ID,
                Authorization: `Bearer ${CONFIG.TOKEN}`,
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                token,
                userId
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
    return response;
}

exports.getNotifications = async function(userId) {
    let response;
    try {
        response = await server.loadJson(`${CONFIG.API_URL}${Endpoints.PROJECT.NOTIFICATIONS.PUSH.GET_ALL(userId)}`,
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
    return response;
}

exports.getNotification = async function(id) {

    let response;

    try {
        response = await server.loadJson(`${CONFIG.API_URL}${Endpoints.PROJECT.NOTIFICATIONS.PUSH.GET(id)}`,
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

exports.markNotificationAsRead = async function(id, userId) {

    let response;

    try {
        response = await server.loadJson(`${CONFIG.API_URL}${Endpoints.PROJECT.NOTIFICATIONS.PUSH.MARK_NOTIFICATION_AS_READ(id)}`,
        {
            method: 'PATCH',
            headers: {
                'X-CM-ProjectId': CONFIG.PROJECT_ID,
                Authorization: `Bearer ${CONFIG.TOKEN}`,
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(
                {
                    userId : userId,
                    notificationId : id 
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
    return response;
}