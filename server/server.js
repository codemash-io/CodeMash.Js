export class HttpError extends Error {
  constructor (response, responseBody) {
    super(`${response.status} for ${response.url}`);

    if (responseBody && responseBody.responseStatus) {
      this.name = responseBody.responseStatus.errorCode;
      this.errors = responseBody.responseStatus.errors;
      this.message = responseBody.responseStatus.message;
    } else {
      this.name = 'HttpError';
      this.message = 'Unknow error';
    }

    this.status = response.status;
    this.response = response;
  }
}

export async function loadText (url, requestInfo, mimeType = 'image/png') {
  const response = await fetch(url, requestInfo);
  if (response.status === 200) {
    return response.text().then(text => {
      return {
        contentType: mimeType,
        raw: text
      };
    });
  } else {
    throw new HttpError(response);
  }
}

export async function loadJson (url, requestInfo) {
  const response = await fetch(url, requestInfo);

  if (response.status >= 200 && response.status < 300) {
    return response.text().then((text) => {
      return text ? JSON.parse(text) : {};
    });
  } else {
    throw new HttpError(response, await response.json());
  }
}
