import 'cross-fetch/polyfill';
const BASE = 'https://api.codemash.io';

interface ICodeMashError {
  responseStatus: {
    errorCode: string;
    errors: {};
    message: string;
  }
};

function isCodeMashError(error: any): error is ICodeMashError {
  return (typeof (error as ICodeMashError).responseStatus === 'object');
}

export class HttpError extends Error {
	constructor(response, body) {
		super(`${response.status} for ${response.url}`);

    if(isCodeMashError(body)) {
      this.name = body.responseStatus.errorCode;
      this.message = body.responseStatus.message;
    } else {
			this.name = 'HttpError';
			this.message = 'Unknow error';
		}
	}
}

async function base<T>(path, request: RequestInit): Promise<T> {
  const response = await fetch(path, request);

  if(response.status !== 200) {
    throw new HttpError(response, response.json());
  }

  return response.json().catch(() => {});
}

async function get<T, U = unknown>(path: string, body: U, config?: RequestInit): Promise<T> {
  return await base<T>(path, {
    ...config,
    method: 'GET',
    body: JSON.stringify(body),
  })
}

export {
  get,
}