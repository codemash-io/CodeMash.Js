import * as databaseService from './src/components/db';
import * as filesService from './src/components/files';
import * as iamService from './src/components/iam';
import * as notificationsService from './src/components/push';
import * as codeService from './src/components/code';
import * as paymentsService from './src/components/payments';
import configuration from './src/config';

export const db = databaseService;
export const files = filesService;
export const iam = iamService;
export const notifications = notificationsService;
export const code = codeService;
export const payments = paymentsService;
export const config = configuration;
