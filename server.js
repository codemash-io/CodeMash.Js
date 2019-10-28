export class HttpError extends Error {
    constructor(response) {
      super(`${response.status} for ${response.url}`);
      this.name = 'HttpError';
      this.response = response;
      this.badCredentials = response.status == 500,
      this.unknownError = response.status != 500

      this.errorMessage = '';
      this.errorCode = '';

      if (response._bodyInit)
      {
        let responseAsJson = JSON.parse(response._bodyInit);
        if (responseAsJson && responseAsJson.responseStatus)
        {
          if (responseAsJson.responseStatus.errorCode === 'BusinessException')
          {
            this.errorCode = 'BusinessException';
            this.errorMessage = responseAsJson.responseStatus.message;
          }
        }
      }
    }
}

export async function loadText(url, requestInfo, mimeType = 'image/png') {
    let response = await fetch(url, requestInfo);
    if (response.status == 200) {
  
      return response.text().then(text => {
        return {
          contentType: mimeType,
          raw: text
        }
      });
    } else {
      throw new HttpError(response);
    }
}


export async function loadJson(url, requestInfo) {
    let response = await fetch(url, requestInfo);

    if (response.status >=200 && response.status < 300){      
      return response.json();
    } else {
      throw new HttpError(response);
    }
}