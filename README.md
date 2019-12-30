# CodeMash.Js
CodeMash for javascript developers

## Installation

Use the package manager [codemash](https://codemash.io/) to install codemash.

```bash
npm install codemash
```
## Configuration
```js
import { config } from 'codemash';

config.init({
  projectId: 'YOUR_PROJECT_ID',
  secretKey: 'YOUR_SECRET_KEY',
});
```

## Database Module

### Usage:
```js
import { db } from 'codemash';
```

### Get Data:
```js
db.getRecords('YOUR_COLLECTION_NAME');
```

#### Get One Record:
```js
db.getRecord('YOUR_COLLECTION_NAME', 'YOUR_RECORD_ID');
```

#### Pagination (by default page size is set to 10):
```js
db.getRecords('YOUR_COLLECTION_NAME', CURENT_PAGE, PAGE_SIZE);

// Example:
db.getRecords('YOUR_COLLECTION_NAME', 1, 20);
```

#### Sort:
```js
db.getRecords('YOUR_COLLECTION_NAME', null, null, SORTER);

// Example:
db.getRecords('YOUR_COLLECTION_NAME', null, null, { PROPERTY_TO_SORT: 1 }); // 1:ASC -1:DESC
```

#### Filter:
```js
db.getRecords('YOUR_COLLECTION_NAME', null, null, null, FILTER);

// Example:
db.getRecords('YOUR_COLLECTION_NAME', null, null, null, { PROPERTY_TO_FILTER: { $eq: `'${FILTER_VALUE}'` } });
```

#### TODO Projection:

### Save Data:
```js
db.saveRecord('YOUR_COLLECTION_NAME', YOUR_OBJECT_TO_SAVE);

// Example:
db.saveRecord('YOUR_COLLECTION_NAME', {
   name: 'John',
   age: 37,
   birthday: 1577742140460,
   isApproved: true
});
```

### Update Data:
```js
db.updateRecord('YOUR_COLLECTION_NAME', FILTER, UPDATE_CLAUSE);

// Example:
db.updateRecord( 'YOUR_COLLECTION_NAME',
  { _id: 'RECORD_TO_UPDATE_ID' },
  { $set: { name: 'Mike', age: 77 } },
);
```

### Delete Data:
```js
db.deleteRecord('YOUR_COLLECTION_NAME', FILTER);

// Example:
db.deleteRecord('YOUR_COLLECTION_NAME', { _id: `'${RECORD_TO_DELETE_ID}'` });
```
### TODO Taxonomy terms:

## TODO Files Module
## TODO IAM Module
## TODO Notifications Module
