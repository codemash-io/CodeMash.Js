import * as codeService from './components/code';
import * as databaseService from './components/db';
import * as emailsService from './components/email';
import * as filesService from './components/files';
import * as iamService from './components/iam';
import * as paymentsService from './components/payments';
import * as notificationsService from './components/push';
import configuration from './config';

export const db = databaseService;
export const files = filesService;
export const iam = iamService;
export const notifications = notificationsService;
export const emails = emailsService;
export const code = codeService;
export const payments = paymentsService;
export const config = configuration;
