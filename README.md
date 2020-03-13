# CodeMash.Js
CodeMash for javascript developers. All the documentation can be found [here](https://docs.codemash.io)

## Installation

Use the package manager [codemash](https://docs.codemash.io/get-started/install-codemash#install-codemash-via-npm) to install codemash.

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

See full documentation [here](https://docs.codemash.io/get-started/set-up-api-keys#storing-tokens)

## Database Module

### Usage:
```js
import { db } from 'codemash';
```

### Get Data:
```js
db.getRecords('YOUR_COLLECTION_NAME');
```

See full documentation [here](https://docs.codemash.io/microservices/database/collections-api/find)


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

#### Get One Record:
```js
db.getRecord('YOUR_COLLECTION_NAME', 'YOUR_RECORD_ID');
```
See full documentation [here](https://docs.codemash.io/microservices/database/collections-api/find-one)

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

See full documentation [here](https://docs.codemash.io/microservices/database/collections-api/insert)

### Update Data:
```js
db.updateRecord('YOUR_COLLECTION_NAME', FILTER, UPDATE_CLAUSE);

// Example:
db.updateRecord( 'YOUR_COLLECTION_NAME',
  { _id: 'RECORD_TO_UPDATE_ID' },
  { $set: { name: 'Mike', age: 77 } },
);
```
See full documentation [here](https://docs.codemash.io/microservices/database/collections-api/update)

### Delete Data:
```js
db.deleteRecord('YOUR_COLLECTION_NAME', FILTER);

// Example:
db.deleteRecord('YOUR_COLLECTION_NAME', { _id: `'${RECORD_TO_DELETE_ID}'` });
```

See full documentation [here](https://docs.codemash.io/microservices/database/collections-api/delete)

## TODO Taxonomy terms:

Documentation about Terms module you can find [here]()
https://docs.codemash.io/microservices/database/taxonomies
## TODO Files Module
Documentation about Files moduke you can find [here](https://docs.codemash.io/microservices/files-service/files-api)

## TODO IAM Module
Documentation about Membership module you can find [here](https://docs.codemash.io/microservices/membership)

[Users](https://docs.codemash.io/microservices/membership/users-api)
[Authentication](https://docs.codemash.io/microservices/membership/authentication-api)


## TODO Notifications Module
Documentation about Notifications you can find [here](https://docs.codemash.io/microservices/push-notifications)

[Emails](https://docs.codemash.io/microservices/email-notifications/emails)
[Push](https://docs.codemash.io/microservices/push-notifications/notifications)
