// Config example
export const CONFIG = {
    API_URL: 'https://api.codemash.io',    
    VERSION: '', // not mandatory
    PROJECT_ID: '', 
    REGION: '', // not mandatory
    TOKEN: '',
    GET_TOKEN: () => 'Bearer '.concat(sessionStorage.getItem('token')),
    TABLE_PAGE_SIZE: 10,
    MAX_FILES_SIZE: 104857600,
};