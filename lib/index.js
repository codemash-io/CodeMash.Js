import * as databaseService from './codemash.db';
import * as filesService from './codemash.files';
import * as iamService from './codemash.iam';
import * as notificationsService from './codemash.push';
import * as codeService from './codemash.code';
import * as paymentsService from './codemash.payments';
import configuration from '../config/config';

export const db = databaseService;
export const files = filesService;
export const iam = iamService;
export const notifications = notificationsService;
export const code = codeService;
export const payments = paymentsService;
export const config = configuration;
