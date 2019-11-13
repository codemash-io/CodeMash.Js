import * as server from './server';
import Config from './config';
import { CONFIG as Endpoints } from './routes';

export async function downloadImage(fileId, optimization) {

  let response;

  try {

      let route = `${Config.apiUrl}${Endpoints.PROJECT.FILES.DOWNLOAD(fileId)}`;

      if (optimization)
      {
          route = `${Config.apiUrl}${Endpoints.PROJECT.FILES.DOWNLOAD_OPTIMIZED(fileId, optimization)}`;
      }
      response = await server.loadText(route,
      {
          method: 'GET',
          headers: {
              'X-CM-ProjectId': Config.projectId,
              Authorization: `Bearer ${Config.secretKey}`,
              Accept: 'text/plain',      
          },
          body: null,
      });        
  } catch(err) {
      if (err instanceof server.HttpError && err.response.status == 404) {
          // loop continues after the alert
          alert("Such url not found.");
      } else {
          // unknown error, rethrow
          throw err;
      }
  }

  let result = {
    fileId,
    image : response
  };
  return result;
  // return response;

}

export async function uploadFile(fileUri, collectionName, recordId, uniqueFieldName) {

  let response;

  const formData = new FormData();
  
  if (uniqueFieldName != null && uniqueFieldName != undefined){
    formData.append("uniqueFieldName", uniqueFieldName)
  }
  
  if (recordId != null && recordId != undefined){
    formData.append("recordId", recordId)
  }
    
  let filename = fileUri.substring(fileUri.lastIndexOf('/')+1);
  // let fileExtension = filename.substring(filename.lastIndexOf('.')+1);

  formData.append('file', {
      uri: fileUri,
      name: filename,
      type: 'image/png'
  });
  
  
  try {
      response = await fetch(`${Config.apiUrl}${Endpoints.PROJECT.DATABASE.COLLECTION.FILES.UPLOAD(collectionName)}`,
      {
          method: 'POST',
          headers: {
              'X-CM-ProjectId': Config.projectId,
              Authorization: `Bearer ${Config.secretKey}`,
              'Content-Type': 'multipart/form-data',   
              'Accept': 'application/json',
          },
          body: formData,
      });        
  } catch(err) {

      if (err instanceof server.HttpError && err.response.status == 404) {
          // loop continues after the alert
          alert("Such url not found.");
      } else {
          // unknown error, rethrow
          throw err;
      }
  }

  return response;
}