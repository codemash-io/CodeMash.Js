import * as databaseService from './src/components/db';
import * as filesService from './src/components/files';
import * as iamService from './src/components/iam';
import * as notificationsService from './src/components/push';
import * as emailsService from './src/components/email';
import * as codeService from './src/components/code';
import * as paymentsService from './src/components/payments';
import * as sseService from './src/components/sse';
import configuration from './src/config';

export const db = databaseService;
export const files = filesService;
export const iam = iamService;
export const notifications = notificationsService;
export const emails = emailsService;
export const code = codeService;
export const payments = paymentsService;
export const sse = sseService;
export const config = configuration;
