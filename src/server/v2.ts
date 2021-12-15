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
  const response = await fetch({ url: BASE + path });

  if(response.status !== 200) {
    throw new HttpError(response, response.json());
  }

  return response.json().catch(() => {});
}

async function get<T, U>(path: string, body: T, config?: RequestInit): Promise<U> {
  return await base<U>(path, {
    method: 'GET',
    body: JSON.stringify(body),
    ...config
  })
}

export {
  get,
}