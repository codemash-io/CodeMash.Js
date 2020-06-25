import * as databaseService from './src/codemash.db';
import * as filesService from './src/codemash.files';
import * as iamService from './src/codemash.iam';
import * as notificationsService from './src/codemash.push';
import * as codeService from './src/codemash.code';
import * as paymentsService from './src/codemash.payments';
import configuration from './config/config';

export const db = databaseService;
export const files = filesService;
export const iam = iamService;
export const notifications = notificationsService;
export const code = codeService;
export const payments = paymentsService;
export const config = configuration;
