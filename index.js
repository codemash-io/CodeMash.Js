import * as databaseService from './src/db';
import * as filesService from './src/files';
import * as iamService from './src/iam';
import * as notificationsService from './src/push';
import * as codeService from './src/code';
import * as paymentsService from './src/payments';
import configuration from './src/config';

export const db = databaseService;
export const files = filesService;
export const iam = iamService;
export const notifications = notificationsService;
export const code = codeService;
export const payments = paymentsService;
export const config = configuration;
