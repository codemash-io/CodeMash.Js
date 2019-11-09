import * as server from './server';
import Config from './config';
import { CONFIG as Endpoints } from './routes';

export async function registerNotificationToken(token, userId) {

    let response;

    try {
        response = await server.loadJson(`${Config.apiUrl}${Endpoints.PROJECT.NOTIFICATIONS.PUSH.REGISTER_TOKEN}`,
        {
            method: 'POST',
            headers: {
                'X-CM-ProjectId': Config.projectId,
                Authorization: `Bearer ${Config.token}`,
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

export async function getNotifications(userId) {
    let response;
    try {
        response = await server.loadJson(`${Config.apiUrl}${Endpoints.PROJECT.NOTIFICATIONS.PUSH.GET_ALL(userId)}`,
        {
            method: 'GET',
            headers: {
                'X-CM-ProjectId': Config.projectId,
                Authorization: `Bearer ${Config.token}`,
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

export async function getNotification(id) {

    let response;

    try {
        response = await server.loadJson(`${Config.apiUrl}${Endpoints.PROJECT.NOTIFICATIONS.PUSH.GET(id)}`,
        {
            method: 'GET',
            headers: {
                'X-CM-ProjectId': Config.projectId,
                Authorization: `Bearer ${Config.token}`,
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

export async function markNotificationAsRead(id, userId) {

    let response;

    try {
        response = await server.loadJson(`${Config.apiUrl}${Endpoints.PROJECT.NOTIFICATIONS.PUSH.MARK_NOTIFICATION_AS_READ(id)}`,
        {
            method: 'PATCH',
            headers: {
                'X-CM-ProjectId': Config.projectId,
                Authorization: `Bearer ${Config.token}`,
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