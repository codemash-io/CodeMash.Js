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
      secretKey: '<YOUR_SECRET_KEY>',
      projectId: '<YOUR_PROJECT_ID>'
    }, process.env.NODE_ENV)
```

See full documentation [here](https://docs.codemash.io/get-started/set-up-api-keys#storing-tokens)

## Database Module

### Get Data:
```js
import { db } from 'codemash';

// gets all first 100 employees 
export async function getEmployees() {
    return await db.getRecords('emplpyees', 0, 100);
}

// gets all first 100 active employees
// get only first name and last name - projection
// sort out by created on date in DESC order. 
export async function getActiveEmployees() {    

    const filter = JSON.stringify({ 'is_active': true });
    
    const response = 
        await db.getRecords('employees', 0, 100,
        { first_name: 1, last_name: 1 }, 
        filter, 
        { created_on: -1 });  
              
    return response;
}

```

#### Pagination (by default page size is set to 10):
```js
await db.getRecords('employees', 0, 100);
```

#### Sort:
```js
await db.getRecords('employees', 0, 100, { created_on: -1 });
```

#### Filter:
```js
const filter = JSON.stringify({ 'is_active': true });
await db.getRecords('employees', 0, 100, { created_on: -1 }, filter);
```

See full documentation [here](https://docs.codemash.io/microservices/database/collections-api/find)

#### Get One Record:
```js
import { db } from 'codemash';

// gets employee by id
export async function getEmployeeDetails(id) {
    const response = await db.getRecord('employees', id);
    return response;
}

// gets employee by custom filter
export async function getEmployeeByUserId(id) {    
    
    const filter = { userId : id };    
    return await db.getRecordWithFilter(collectionName, filter, null);
}

```
See full documentation [here](https://docs.codemash.io/microservices/database/collections-api/find-one)

#### TODO Projection:

### Save Data:
```js
import { db } from 'codemash';

const request = {
    start: '1588855312059', // Unix time stamp in miliseconds
    end: '1588855340191', // Unix time stamp in miliseconds
    employee: 'some_user_id',
    type: 'paid',
};

export async function saveHolidaysRequest(request) {
    const response = await db.saveRecord('holidays', request);
    return response;
}
```

See full documentation [here](https://docs.codemash.io/microservices/database/collections-api/insert)

### Replace Data:
```js
import { db } from 'codemash';

export async function replaceEmployeeInformation(id, employee) {
    return await db.replaceRecord('employees', { _id: id }, employee);
}
```
### Update Data:
```js
import { db } from 'codemash';

export async function activateEmployee(id) {

    return await db.updateRecord('employees', 
        { _id: id }, 
        { $set: { 'is_active' : 1 }});
}

```

See full documentation [here](https://docs.codemash.io/microservices/database/collections-api/update)

### Delete Data:
```js
import { db } from 'codemash';

export async function deleteEmployee(id) {
    return await db.deleteRecord('employees', { _id: id });
}
```

See full documentation [here](https://docs.codemash.io/microservices/database/collections-api/delete)

## Get Taxonomy terms:

```js
import { db } from 'codemash';

export async function getCountries() {
    return await db.getTaxonomyTerms('countries');
}

export async function getCities() {
    return await db.getTaxonomyTerms('cities');
}
```

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