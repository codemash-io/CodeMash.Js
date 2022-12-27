import * as server from '../server';
import Config from '../config';
import {CONFIG as Endpoints} from '../routes';
import {objectOrStringToString} from '../utils';

// some comment
export async function getRecords({
	secretKey,
	collectionName,
	pageNumber,
	pageSize,
	sort,
	filter,
	projection,
	language,
	includeUserNames,
	includeRoleNames,
	includeCollectionNames,
	includeTermNames,
	referencedFields,
	addReferencesFirst,
	excludeCulture,
	cluster,
	database,
}) {
	const response = await server.loadJson(
		`${Config.apiUrl}${Endpoints.PROJECT.DATABASE.COLLECTION.RECORD.GET_ALL(
			collectionName
		)}`,
		{
			method: 'POST',
			headers: {
				'X-CM-ProjectId': Config.projectId,
				'X-CM-Cluster': cluster,
				'X-CM-Database': database,
				Authorization: `Bearer ${secretKey || Config.secretKey}`,
				Accept: 'application/json',
				'Content-Type': 'application/json',
				'Accept-Language': language || 'en',
			},
			body: JSON.stringify({
				pageSize: pageSize || Config.tablePageSize,
				pageNumber: pageNumber || 0,
				projection: objectOrStringToString(projection),
				filter: objectOrStringToString(filter),
				sort: objectOrStringToString(sort),
				referencedFields: referencedFields,
				includeUserNames,
				includeRoleNames,
				includeCollectionNames,
				includeTermNames,
				excludeCulture,
				addReferencesFirst,
			}),
		}
	);

	if (!response) return null;
	return {
		totalCount: response.totalCount,
		result: JSON.parse(response.result),
	};
}

export async function getRecord({
	secretKey,
	collectionName,
	id,
	projection,
	includeUserNames,
	includeRoleNames,
	includeCollectionNames,
	includeTermNames,
	referencedFields,
	addReferencesFirst,
	excludeCulture,
	language,
	cluster,
	database,
}) {
	const response = await server.loadJson(
		`${Config.apiUrl}${Endpoints.PROJECT.DATABASE.COLLECTION.RECORD.GET(
			collectionName,
			id
		)}`,
		{
			method: 'POST',
			headers: {
				'X-CM-ProjectId': Config.projectId,
				'X-CM-Cluster': cluster,
				'X-CM-Database': database,
				Authorization: `Bearer ${secretKey || Config.secretKey}`,
				Accept: 'application/json',
				'Content-Type': 'application/json',
				'Accept-Language': language || 'en',
			},
			body: JSON.stringify({
				projection: objectOrStringToString(projection),
				referencedFields: referencedFields,
				includeUserNames,
				includeRoleNames,
				includeCollectionNames,
				includeTermNames,
				excludeCulture,
				addReferencesFirst,
			}),
		}
	);

	return response && response.result ? JSON.parse(response.result) : null;
}

export async function getRecordWithFilter({
	secretKey,
	collectionName,
	filter,
	projection,
	includeUserNames,
	includeRoleNames,
	includeCollectionNames,
	includeTermNames,
	referencedFields,
	addReferencesFirst,
	excludeCulture,
	language,
	cluster,
	database,
}) {
	const response = await server.loadJson(
		`${
			Config.apiUrl
		}${Endpoints.PROJECT.DATABASE.COLLECTION.RECORD.GET_WITH_FILTER(
			collectionName
		)}`,
		{
			method: 'POST',
			headers: {
				'X-CM-ProjectId': Config.projectId,
				'X-CM-Cluster': cluster,
				'X-CM-Database': database,
				Authorization: `Bearer ${secretKey || Config.secretKey}`,
				Accept: 'application/json',
				'Content-Type': 'application/json',
				'Accept-Language': language || 'en',
			},
			body: JSON.stringify({
				filter: objectOrStringToString(filter),
				projection: objectOrStringToString(projection),
				referencedFields: referencedFields,
				includeUserNames,
				includeRoleNames,
				includeCollectionNames,
				includeTermNames,
				excludeCulture,
				addReferencesFirst,
			}),
		}
	);

	return response && response.result ? JSON.parse(response.result) : null;
}

export async function deleteRecord({
	secretKey,
	collectionName,
	id,
	ignoreTriggers,
	cluster,
	database,
}) {
	let url = `${
		Config.apiUrl
	}${Endpoints.PROJECT.DATABASE.COLLECTION.RECORD.DELETE(collectionName, id)}`;
	const queries = [];
	if (ignoreTriggers) queries.push(`ignoreTriggers=${true}`);

	if (queries.length > 0) {
		url += `?${queries.join('&')}`;
	}

	const response = await server.loadJson(url, {
		method: 'DELETE',
		headers: {
			'X-CM-ProjectId': Config.projectId,
			'X-CM-Cluster': cluster,
      'X-CM-Database': database,
			Authorization: `Bearer ${secretKey || Config.secretKey}`,
			Accept: 'application/json',
			'Content-Type': 'application/json',
		},
		body: null,
	});

	return response;
}

export async function deleteRecordWithFilter({
	secretKey,
	collectionName,
	filter,
	ignoreTriggers,
	cluster,
	database,
}) {
	let url = `${
		Config.apiUrl
	}${Endpoints.PROJECT.DATABASE.COLLECTION.RECORD.DELETE_BY_FILTER(
		collectionName
	)}`;
	const queries = [];
	if (ignoreTriggers) queries.push(`ignoreTriggers=${true}`);
	if (filter) queries.push(`filter=${objectOrStringToString(filter)}`);

	if (queries.length > 0) {
		url += `?${queries.join('&')}`;
	}

	const response = await server.loadJson(url, {
		method: 'DELETE',
		headers: {
			'X-CM-ProjectId': Config.projectId,
			'X-CM-Cluster': cluster,
      'X-CM-Database': database,
			Authorization: `Bearer ${secretKey || Config.secretKey}`,
			Accept: 'application/json',
			'Content-Type': 'application/json',
		},
		body: null,
	});

	return response;
}

export async function deleteManyRecords({
	secretKey,
	collectionName,
	filter,
	ignoreTriggers,
	cluster,
	database,
}) {
	let url = `${
		Config.apiUrl
	}${Endpoints.PROJECT.DATABASE.COLLECTION.RECORD.DELETE_MANY(collectionName)}`;
	const queries = [];
	if (ignoreTriggers) queries.push(`ignoreTriggers=${true}`);
	if (filter) queries.push(`filter=${objectOrStringToString(filter)}`);

	if (queries.length > 0) {
		url += `?${queries.join('&')}`;
	}

	const response = await server.loadJson(url, {
		method: 'DELETE',
		headers: {
			'X-CM-ProjectId': Config.projectId,
			'X-CM-Cluster': cluster,
      'X-CM-Database': database,
			Authorization: `Bearer ${secretKey || Config.secretKey}`,
			Accept: 'application/json',
			'Content-Type': 'application/json',
		},
		body: null,
	});

	return response;
}

export async function insertRecord({
	secretKey,
	collectionName,
	document,
	bypassDocumentValidation,
	waitForFileUpload,
	ignoreTriggers,
	cluster,
	database,
	resolveProviderFiles,
	responsibleUserId,
}) {
	const response = await server.loadJson(
		`${Config.apiUrl}${Endpoints.PROJECT.DATABASE.COLLECTION.RECORD.CREATE(
			collectionName
		)}`,
		{
			method: 'POST',
			headers: {
				'X-CM-ProjectId': Config.projectId,
				'X-CM-Cluster': cluster,
				'X-CM-Database': database,
				Authorization: `Bearer ${secretKey || Config.secretKey}`,
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				document: objectOrStringToString(document),
				bypassDocumentValidation,
				waitForFileUpload,
				ignoreTriggers,
				resolveProviderFiles,
				responsibleUserId,
			}),
		}
	);

	return response && response.result ? JSON.parse(response.result) : null;
}

export async function insertManyRecords({
	secretKey,
	collectionName,
	documents,
	bypassDocumentValidation,
	ignoreTriggers,
	cluster,
	database,
	resolveProviderFiles,
	responsibleUserId,
}) {
	const stringDocs = [];
	if (documents && Array.isArray(documents)) {
		documents.forEach((doc) => {
			stringDocs.push(objectOrStringToString(doc));
		});
	}

	const response = await server.loadJson(
		`${Config.apiUrl}${Endpoints.PROJECT.DATABASE.COLLECTION.RECORD.CREATE_MANY(
			collectionName
		)}`,
		{
			method: 'POST',
			headers: {
				'X-CM-ProjectId': Config.projectId,
				'X-CM-Cluster': cluster,
				'X-CM-Database': database,
				Authorization: `Bearer ${secretKey || Config.secretKey}`,
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				documents: stringDocs,
				bypassDocumentValidation,
				ignoreTriggers,
				resolveProviderFiles,
				responsibleUserId,
			}),
		}
	);

	return response.result;
}

export async function updateRecord({
	secretKey,
	collectionName,
	id,
	update,
	waitForFileUpload,
	bypassDocumentValidation,
	ignoreTriggers,
	cluster,
	database,
	resolveProviderFiles,
}) {
	const response = await server.loadJson(
		`${Config.apiUrl}${Endpoints.PROJECT.DATABASE.COLLECTION.RECORD.PATCH(
			collectionName,
			id
		)}`,
		{
			method: 'PATCH',
			headers: {
				'X-CM-ProjectId': Config.projectId,
				'X-CM-Cluster': cluster,
				'X-CM-Database': database,
				Authorization: `Bearer ${secretKey || Config.secretKey}`,
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				update: objectOrStringToString(update),
				waitForFileUpload,
				bypassDocumentValidation,
				ignoreTriggers,
				resolveProviderFiles,
			}),
		}
	);

	return response ? response.result : null;
}

export async function updateRecordWithFilter({
	secretKey,
	collectionName,
	filter,
	update,
	waitForFileUpload,
	bypassDocumentValidation,
	ignoreTriggers,
	cluster,
	database,
	resolveProviderFiles,
}) {
	const response = await server.loadJson(
		`${
			Config.apiUrl
		}${Endpoints.PROJECT.DATABASE.COLLECTION.RECORD.PATCH_BY_FILTER(
			collectionName
		)}`,
		{
			method: 'PATCH',
			headers: {
				'X-CM-ProjectId': Config.projectId,
				'X-CM-Cluster': cluster,
				'X-CM-Database': database,
				Authorization: `Bearer ${secretKey || Config.secretKey}`,
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				filter: objectOrStringToString(filter),
				update: objectOrStringToString(update),
				waitForFileUpload,
				bypassDocumentValidation,
				ignoreTriggers,
				resolveProviderFiles,
			}),
		}
	);

	return response ? response.result : null;
}

export async function updateManyRecords({
	secretKey,
	collectionName,
	filter,
	update,
	bypassDocumentValidation,
	ignoreTriggers,
	cluster,
	database,
	resolveProviderFiles,
}) {
	const response = await server.loadJson(
		`${Config.apiUrl}${Endpoints.PROJECT.DATABASE.COLLECTION.RECORD.PATCH_MANY(
			collectionName
		)}`,
		{
			method: 'PATCH',
			headers: {
				'X-CM-ProjectId': Config.projectId,
				'X-CM-Cluster': cluster,
				'X-CM-Database': database,
				Authorization: `Bearer ${secretKey || Config.secretKey}`,
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				filter: objectOrStringToString(filter),
				update: objectOrStringToString(update),
				bypassDocumentValidation,
				ignoreTriggers,
				resolveProviderFiles,
			}),
		}
	);

	return response ? response.result : null;
}

export async function replaceRecord({
	secretKey,
	collectionName,
	id,
	document,
	waitForFileUpload,
	bypassDocumentValidation,
	ignoreTriggers,
	isUpsert,
	cluster,
	database,
	resolveProviderFiles,
}) {
	const response = await server.loadJson(
		`${Config.apiUrl}${Endpoints.PROJECT.DATABASE.COLLECTION.RECORD.UPDATE(
			collectionName
		)}`,
		{
			method: 'PUT',
			headers: {
				'X-CM-ProjectId': Config.projectId,
				'X-CM-Cluster': cluster,
				'X-CM-Database': database,
				Authorization: `Bearer ${secretKey || Config.secretKey}`,
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				filter: JSON.stringify({_id: id}),
				document: objectOrStringToString(document),
				waitForFileUpload,
				bypassDocumentValidation,
				ignoreTriggers,
				isUpsert,
				resolveProviderFiles,
			}),
		}
	);

	return response ? response.result : null;
}

export async function replaceRecordWithFilter({
	secretKey,
	collectionName,
	filter,
	document,
	waitForFileUpload,
	bypassDocumentValidation,
	ignoreTriggers,
	isUpsert,
	cluster,
	database,
	resolveProviderFiles,
}) {
	const response = await server.loadJson(
		`${Config.apiUrl}${Endpoints.PROJECT.DATABASE.COLLECTION.RECORD.UPDATE(
			collectionName
		)}`,
		{
			method: 'PUT',
			headers: {
				'X-CM-ProjectId': Config.projectId,
				'X-CM-Cluster': cluster,
				'X-CM-Database': database,
				Authorization: `Bearer ${secretKey || Config.secretKey}`,
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				filter: objectOrStringToString(filter),
				document: objectOrStringToString(document),
				waitForFileUpload,
				bypassDocumentValidation,
				ignoreTriggers,
				isUpsert,
				resolveProviderFiles,
			}),
		}
	);

	return response ? response.result : null;
}

export async function executeAggregate({
	secretKey,
	collectionName,
	id,
	tokens,
	cluster,
	database,
}) {
	const url = `${
		Config.apiUrl
	}${Endpoints.PROJECT.DATABASE.COLLECTION.AGGREGATES.GET(collectionName, id)}`;

	const response = await server.loadJson(url, {
		method: 'POST',
		headers: {
			'X-CM-ProjectId': Config.projectId,
			'X-CM-Cluster': cluster,
      'X-CM-Database': database,
			Authorization: `Bearer ${secretKey || Config.secretKey}`,
			Accept: 'application/json',
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({
			tokens,
		}),
	});

	return response && response.result ? JSON.parse(response.result) : null;
}

export async function count({
	secretKey,
	collectionName,
	filter,
	limit,
	skip,
	cluster,
	database,
}) {
	const response = await server.loadJson(
		`${Config.apiUrl}${Endpoints.PROJECT.DATABASE.COLLECTION.RECORD.COUNT(
			collectionName
		)}`,
		{
			method: 'POST',
			headers: {
				'X-CM-ProjectId': Config.projectId,
				'X-CM-Cluster': cluster,
				'X-CM-Database': database,
				Authorization: `Bearer ${secretKey || Config.secretKey}`,
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				filter: objectOrStringToString(filter),
				limit,
				skip,
			}),
		}
	);

	return response ? response.result : null;
}

export async function distinct({
	secretKey,
	collectionName,
	filter,
	field,
	cluster,
	database,
}) {
	const response = await server.loadJson(
		`${Config.apiUrl}${Endpoints.PROJECT.DATABASE.COLLECTION.RECORD.DISTINCT(
			collectionName
		)}`,
		{
			method: 'POST',
			headers: {
				'X-CM-ProjectId': Config.projectId,
				'X-CM-Cluster': cluster,
				'X-CM-Database': database,
				Authorization: `Bearer ${secretKey || Config.secretKey}`,
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				filter: objectOrStringToString(filter),
				field,
			}),
		}
	);

	return response ? response.result : null;
}

export async function getTerms({
	secretKey,
	taxonomyName,
	language,
	pageNumber,
	pageSize,
	sort,
	filter,
	projection,
	excludeCulture,
	cluster,
	database,
}) {
	const response = await server.loadJson(
		`${Config.apiUrl}${Endpoints.PROJECT.DATABASE.TAXONOMY.TERM.GET_ALL(
			taxonomyName
		)}`,
		{
			method: 'POST',
			headers: {
				'X-CM-ProjectId': Config.projectId,
				'X-CM-Cluster': cluster,
				'X-CM-Database': database,
				Authorization: `Bearer ${secretKey || Config.secretKey}`,
				Accept: 'application/json',
				'Content-Type': 'application/json',
				'Accept-Language': language || 'en',
			},
			body: JSON.stringify({
				pageSize: pageSize || Config.tablePageSize,
				pageNumber: pageNumber || 0,
				projection: objectOrStringToString(projection),
				filter: objectOrStringToString(filter),
				sort: objectOrStringToString(sort),
				excludeCulture,
			}),
		}
	);

	if (!response) return null;
	return {
		totalCount: response.totalCount,
		result: response.result,
	};
}

export async function getChildrenOfTerms({
	taxonomyName,
	language,
	pageNumber,
	pageSize,
	sort,
	filter,
	projection,
	excludeCulture,
	cluster,
	database,
}) {
	const response = await server.loadJson(
		`${Config.apiUrl}${Endpoints.PROJECT.DATABASE.TAXONOMY.TERM.GET_CHILDREN(
			taxonomyName
		)}`,
		{
			method: 'POST',
			headers: {
				'X-CM-ProjectId': Config.projectId,
				'X-CM-Cluster': cluster,
				'X-CM-Database': database,
				Authorization: `Bearer ${Config.secretKey}`,
				Accept: 'application/json',
				'Content-Type': 'application/json',
				'Accept-Language': language || 'en',
			},
			body: JSON.stringify({
				pageSize: pageSize || Config.tablePageSize,
				pageNumber: pageNumber || 0,
				projection: objectOrStringToString(projection),
				filter: objectOrStringToString(filter),
				sort: objectOrStringToString(sort),
				excludeCulture,
			}),
		}
	);

	if (!response) return null;
	return {
		totalCount: response.totalCount,
		result: response.result,
	};
}

export async function changeResponsibility({
	secretKey,
	collectionName,
	id,
	newResponsibleUserId,
	cluster,
	database,
}) {
	const response = await server.loadJson(
		`${
			Config.apiUrl
		}${Endpoints.PROJECT.DATABASE.COLLECTION.RECORD.RESPONSIBILITY(
			collectionName
		)}`,
		{
			method: 'POST',
			headers: {
				'X-CM-ProjectId': Config.projectId,
				'X-CM-Cluster': cluster,
				'X-CM-Database': database,
				Authorization: `Bearer ${secretKey || Config.secretKey}`,
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				id,
				newResponsibleUserId,
			}),
		}
	);

	return response ? response.result : null;
}
