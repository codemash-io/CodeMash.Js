import * as databaseService from './codemash.db';
import * as filesService from './codemash.files';
import * as iamService from './codemash.iam';
import * as notificationsService from './codemash.push';
import configuration from './config';

export const db = databaseService;
export const files = filesService;
export const iam = iamService;
export const notifications = notificationsService;
export const config = configuration;