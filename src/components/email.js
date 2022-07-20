import * as server from '../server';
import Config from '../config';
import {CONFIG as Endpoints} from '../routes';

export async function sendEmail({
	secretKey,
	templateId,
	emails,
	users,
	roles,
	ccEmails,
	ccUsers,
	bccEmails,
	bccUsers,
	tokens,
	postpone,
	respectTimeZone,
	forceRequestLanguage,
	attachments,
}) {
	const response = await server.loadJson(
		`${Config.apiUrl}${Endpoints.PROJECT.NOTIFICATIONS.EMAIL.SEND}`,
		{
			method: 'POST',
			headers: {
				'X-CM-ProjectId': Config.projectId,
				Authorization: `Bearer ${secretKey || Config.secretKey}`,
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				templateId,
				emails,
				users,
				roles,
				ccEmails,
				ccUsers,
				bccEmails,
				bccUsers,
				tokens,
				postpone,
				respectTimeZone,
				forceRequestLanguage,
				attachments,
			}),
		}
	);
	return response;
}
