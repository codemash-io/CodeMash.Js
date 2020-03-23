import * as server from './server';
import Config from './config';
import { CONFIG as Endpoints } from './routes';

export async function registerNotificationToken(token, userId) {

    let response = await server.loadJson(`${Config.apiUrl}${Endpoints.PROJECT.NOTIFICATIONS.PUSH.REGISTER_TOKEN}`,
    {
        method: 'POST',
        headers: {
            'X-CM-ProjectId': Config.projectId,
            Authorization: `Bearer ${Config.secretKey}`,
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            token,
            userId
        }),
    });

    return response; 
}

export async function deleteDeviceToken(deviceId) {

    let response = await server.loadJson(`${Config.apiUrl}${Endpoints.PROJECT.NOTIFICATIONS.PUSH.DELETE_DEVICE_TOKEN(deviceId)}`,
    {
        method: 'DELETE',
        headers: {
            'X-CM-ProjectId': Config.projectId,
            Authorization: `Bearer ${Config.secretKey}`,
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: null
    });

    return response; 
}



// TODO, replace it later with object
export async function sendPushNotification(templateId, users, senderApiKey, devices, tokens, postpone, respectTimeZone, isNonPushable) {

    let apieKey = Config.secretKey;

    if (senderApiKey)
        apieKey = senderApiKey

    let response = await server.loadJson(`${Config.apiUrl}${Endpoints.PROJECT.NOTIFICATIONS.PUSH.SEND}`,
    {
        method: 'POST',
        headers: {
            'X-CM-ProjectId': Config.projectId,
            Authorization: `Bearer ${apieKey}`,
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            templateId: templateId,
            users: users || [],                
            devices: devices || [],
            tokens: tokens || null,
            postpone: postpone || false,
            respectTimeZone: respectTimeZone || true,
            isNonPushable: isNonPushable || false,
        }),
    });
    return response
    
}

// TODO : make it as POST and pass filter and sort parameters
export async function getNotifications(userId, pageNumber, pageSize, filter, sort) {
    
    if (filter == null || filter == undefined)
    {
        filter = ''
    }
    
    if (sort == null || sort == undefined)
    { 
        sort = ''
    }
    
    let response = await server.loadJson(`${Config.apiUrl}${Endpoints.PROJECT.NOTIFICATIONS.PUSH.GET_ALL(userId, pageNumber, pageSize)}`,
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

export async function getNotification(id) {

    let response = await server.loadJson(`${Config.apiUrl}${Endpoints.PROJECT.NOTIFICATIONS.PUSH.GET(id)}`,
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

export async function markNotificationAsRead(id, userId) {

    let response = await server.loadJson(`${Config.apiUrl}${Endpoints.PROJECT.NOTIFICATIONS.PUSH.MARK_NOTIFICATION_AS_READ(id)}`,
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
                userId : userId,
                notificationId : id 
            }),
    });
    return response;
    
}