import * as server from './server';
import { CONFIG } from './config';
import { CONFIG as Endpoints } from './routes';

exports.downloadImage = async function (fileId, optimization) {

  let response;

  try {

      let route = `${CONFIG.API_URL}${Endpoints.PROJECT.FILES.DOWNLOAD(fileId)}`;

      if (optimization)
      {
          route = `${CONFIG.API_URL}${Endpoints.PROJECT.FILES.DOWNLOAD_OPTIMIZED(fileId, optimization)}`;
      }
      response = await server.loadText(route,
      {
          method: 'GET',
          headers: {
              'X-CM-ProjectId': CONFIG.PROJECT_ID,
              Authorization: `Bearer ${CONFIG.TOKEN}`,
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

exports.uploadFile = async function(fileUri, collectionName, recordId, uniqueFieldName) {

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
      response = await fetch(`${CONFIG.API_URL}${Endpoints.PROJECT.DATABASE.COLLECTION.FILES.UPLOAD(collectionName)}`,
      {
          method: 'POST',
          headers: {
              'X-CM-ProjectId': CONFIG.PROJECT_ID,
              Authorization: `Bearer ${CONFIG.TOKEN}`,
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