import * as server from './server';
import Config from './config';
import { CONFIG as Endpoints } from './routes';

export async function executeFunction({functionId, data, qualifier}) {
    
    let response = await server.loadJson(`${Config.apiUrl}${Endpoints.PROJECT.CODE.EXECUTE(functionId)}`,
    {
        method: 'POST',
        headers: {
            'X-CM-ProjectId': Config.projectId,
            Authorization: `Bearer ${Config.secretKey}`,
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            data : JSON.stringify(data),
            qualifier : qualifier,
        }),
    });  
        
    let result = JSON.parse(response.result)    
    return result;
}
