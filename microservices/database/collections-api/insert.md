---
description: Overview of collection insert methods
---

# Insert

{% api-method method="post" host="https://api.codemash.io" path="/:version/db/:collectionName" %}
{% api-method-summary %}
Insert One
{% endapi-method-summary %}

{% api-method-description %}
Inserts a new record to a particular collection.
{% endapi-method-description %}

{% api-method-spec %}
{% api-method-request %}
{% api-method-path-parameters %}
{% api-method-parameter name="version" type="string" required=true %}
A version of the API endpoint.
{% endapi-method-parameter %}

{% api-method-parameter name="collectionName" type="string" required=true %}
The name of the collection to insert record to.
{% endapi-method-parameter %}
{% endapi-method-path-parameters %}

{% api-method-headers %}
{% api-method-parameter name="Authorization" type="string" required=true %}
Secret API key which belongs to your project or user. Not required if using cookies with a session ID.
{% endapi-method-parameter %}

{% api-method-parameter name="x-cm-projectid" type="string" required=true %}
Your project's ID. Can be passed as a query parameter.
{% endapi-method-parameter %}
{% endapi-method-headers %}

{% api-method-body-parameters %}
{% api-method-parameter name="document" type="string" required=true %}
Record to insert.
{% endapi-method-parameter %}

{% api-method-parameter name="bypassDocumentValidation" type="boolean" required=false %}
If set to true, the document will not be validated against the schema.
{% endapi-method-parameter %}

{% api-method-parameter name="waitForFileUpload" type="boolean" required=false %}
If set to true, waits for files to be uploaded before returning from the endpoint.
{% endapi-method-parameter %}
{% endapi-method-body-parameters %}
{% endapi-method-request %}

{% api-method-response %}
{% api-method-response-example httpCode=200 %}
{% api-method-response-example-description %}
Returns inserted record in a string format. Here singular quotes are used to avoid escaping double quotes.
{% endapi-method-response-example-description %}

```javascript
{ 
    "result": "{ '_id': '5e37136bf59f3a3f940b99a4', 'name': 'John' }"
}
```
{% endapi-method-response-example %}
{% endapi-method-response %}
{% endapi-method-spec %}
{% endapi-method %}

{% tabs %}
{% tab title=".NET" %}
```csharp
var client = new CodeMashClient(apiKey, projectId);
var service = new CodeMashRepository<Person>(client);

var person = new Person { Name = "John" };

await service.InsertOneAsync(person, new DatabaseInsertOneOptions());
```

{% hint style="info" %}
Check the information about [entities](entities.md) on how your class objects are serialized.
{% endhint %}
{% endtab %}

{% tab title="Node" %}
```javascript
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
{% endtab %}

{% tab title="PHP" %}
```php
use Codemash\CodemashClient;
use Codemash\CodemashDb;

class CodemashService
{
    protected CodemashDb $codemashDb;
    protected string $collectionName = '{YOUR_COLLECTION_NAME}';

    public function __construct()
    {
        $secretKey = '{YOUR_SECRET_KEY}';
        $projectId = '{YOUR_PROJECT_ID}';

        $client = new CodemashClient($secretKey, $projectId);
        $this->codemashDb = new CodemashDb($client);
    }

    public function insertEmployee()
    {
        $responseData = $this->codemashDb->insertOne([
        	'collectionName' => 'employees',
        	'document' => [
        		'name' => 'John',
        		'email' => 'john@example.com',
        		'address' => 'New York',
        	],
        ]);
    }
}
```
{% endtab %}
{% endtabs %}

{% api-method method="post" host="https://api.codemash.io" path="/:version/db/:collectionName/bulk" %}
{% api-method-summary %}
Insert Many
{% endapi-method-summary %}

{% api-method-description %}
Inserts multiple records to a particular collection.
{% endapi-method-description %}

{% api-method-spec %}
{% api-method-request %}
{% api-method-path-parameters %}
{% api-method-parameter name="version" type="string" required=true %}
A version of the API endpoint.
{% endapi-method-parameter %}

{% api-method-parameter name="collectionName" type="string" required=true %}
The name of the collection to insert records to.
{% endapi-method-parameter %}
{% endapi-method-path-parameters %}

{% api-method-headers %}
{% api-method-parameter name="Authorization" type="string" required=true %}
Secret API key which belongs to your project or user. Not required if using cookies with a session ID. 
{% endapi-method-parameter %}

{% api-method-parameter name="x-cm-projectid" type="string" required=true %}
Your project's ID. Can be passed as a query parameter.
{% endapi-method-parameter %}
{% endapi-method-headers %}

{% api-method-body-parameters %}
{% api-method-parameter name="documents" type="array" required=true %}
An array of records to insert. Each record is of string type.
{% endapi-method-parameter %}

{% api-method-parameter name="bypassDocumentValidation" type="boolean" required=false %}
If set to true, documents will not be validated against the schema.
{% endapi-method-parameter %}
{% endapi-method-body-parameters %}
{% endapi-method-request %}

{% api-method-response %}
{% api-method-response-example httpCode=200 %}
{% api-method-response-example-description %}
Returns a list of IDs of newly inserted records in the order that was passed to insert them. 
{% endapi-method-response-example-description %}

```javascript
{
    result: ["{RECORD_ID_1}", "{RECORD_ID_2}"]
}
```
{% endapi-method-response-example %}
{% endapi-method-response %}
{% endapi-method-spec %}
{% endapi-method %}

{% tabs %}
{% tab title=".NET" %}
```csharp
var client = new CodeMashClient(apiKey, projectId);
var service = new CodeMashRepository<Person>(client);

var person1 = new Person { Name = "John" };
var person2 = new Person { Name = "Peter" };

var entities = new List<Person> { person1, person2 };

await service.InsertManyAsync(entities, new DatabaseInsertManyOptions());
```

{% hint style="info" %}
Check the information about [entities](entities.md) on how your class objects are serialized.
{% endhint %}
{% endtab %}

{% tab title="Node" %}
```

```
{% endtab %}

{% tab title="PHP" %}
```php
use Codemash\CodemashClient;
use Codemash\CodemashDb;

class CodemashService
{
    protected CodemashDb $codemashDb;
    protected string $collectionName = '{YOUR_COLLECTION_NAME}';

    public function __construct()
    {
        $secretKey = '{YOUR_SECRET_KEY}';
        $projectId = '{YOUR_PROJECT_ID}';

        $client = new CodemashClient($secretKey, $projectId);
        $this->codemashDb = new CodemashDb($client);
    }

    public function insertEmployees()
    {
        $employees = [];
        $employees[] = ['name' => 'John', 'email' => 'john@example.com', 'address' => 'New York'];
        $employees[] = ['name' => 'Peter', 'email' => 'peter@example.com', 'address' => 'Los Angeles'];
        
        $responseData = $this->codemashDb->insertMany([
        	'collectionName' => 'employees',
        	'documents' => $employees,
        ]);
    }
}
```
{% endtab %}
{% endtabs %}

