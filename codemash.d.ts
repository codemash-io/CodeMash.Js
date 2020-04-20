declare module 'codemash' {
    export namespace db {
        export function getRecords(
            collectionName:string, 
            pageNumber?: number, 
            pageSize?: number,
            sort?: string,
            filter?:string,
            projection?: any,
            referencedFields? : string
        ): any;

        export function deleteRecord(
            collectionName:string, 
            filter: any
        ): any;

        export function saveRecord(
            collectionName:string, 
            document: any
        ): any;

        export function updateRecord(
            collectionName:string,
            filter: any,
            updateClause?: any
        ): any;

        export function getRecord(
            collectionName:string,
            recordId: string
        ): any;
        
        
        export function getRecordWithFilter(
            collectionName:string,
            filter: any,
            referencedFields? : string
        ): any;

        export function getTaxonomyTerms(
            taxonomyName:string
        ): any;
    }

    export namespace files {
        export function downloadImage(
            fileId:string,
            optimization?: any
        ): any;

        export function uploadFile(
            fileUri:string,
            collectionName: string,
            recordId: string,
            uniqueFieldName: string
        ): any;

        export function uploadBase64File(
            base64File:Object,
            collectionName: string,
            recordId: string,
            uniqueFieldName: string
        ): any;
    }

    export namespace iam {
        export function saveUser(
            record:any,
        ): any;

        export function getUser(
            userId:string,
        ): any;

        export function getUsers(            
            pageNumber: number, 
            pageSize: number, 
            filter: string, 
            sort: string
        ): any;

        export function deleteUser(
            userId:string,
        ): any;

        export function resetPassword(
            email:string,
        ): any;
    }

    export namespace notifications {
        export function registerNotificationToken(
            token:string,
            userId: string
        ): any;

        export function deleteDeviceToken(
            deviceId:string
        ): any;

        export function deleteDevice(
            deviceId:string
        ): any;

        export function sendPushNotification(
            templateId: string, 
            users: Array, 
            senderApiKey: string,
            devices: Array, 
            tokens: any, 
            postpone: boolean, 
            respectTimeZone: boolean, 
            isNonPushable: boolean
        ): any;
        
        export function getNotifications(
            userId: string
        ): any;

        export function getNotification(
            id: string
        ): any;

        export function markNotificationAsRead(
            id: string,
            userId: string
        ): any;
        
        export function markNotificationsAsRead(
            userId: string
        ): any;
    }
    
    export namespace code {
        export function executeFunction(
            functionId:string,
            data: string,
            qualifier: string
        ): any;
    }

    export namespace config {
        export function init(
            config: object
        ): any;

        export const apiUrl: string;
        export const token: string;
        export const projectId: string;
        export const region: string;
        export const version: string;
        export const tablePageSize: number;
        export const maxFileSize: number;
    }
} 