---
description: Overview of collection update methods
---

# Update

{% api-method method="put" host="https://api.codemash.io" path="/:version/db/:collectionName/replaceOne" %}
{% api-method-summary %}
Replace One
{% endapi-method-summary %}

{% api-method-description %}
Replaces a record in a collection.
{% endapi-method-description %}

{% api-method-spec %}
{% api-method-request %}
{% api-method-path-parameters %}
{% api-method-parameter name="version" type="string" required=true %}
A version of the API endpoint.
{% endapi-method-parameter %}

{% api-method-parameter name="collectionName" type="string" required=true %}
The name of the collection to replace record in.
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
{% api-method-parameter name="filter" type="string" required=true %}
Filter document. Used to find the record to replace. More about filters follow the link below.
{% endapi-method-parameter %}

{% api-method-parameter name="document" type="string" required=true %}
A replacement for a found record.
{% endapi-method-parameter %}

{% api-method-parameter name="bypassDocumentValidation" type="boolean" required=false %}
If set to true, the document will not be validated against the schema.
{% endapi-method-parameter %}

{% api-method-parameter name="waitForFileUpload" type="boolean" required=false %}
If set to true, waits for files to be uploaded before returning from the endpoint.
{% endapi-method-parameter %}

{% api-method-parameter name="isUpsert" type="boolean" required=false %}
If set to true, inserts a record if it's not found.
{% endapi-method-parameter %}
{% endapi-method-body-parameters %}
{% endapi-method-request %}

{% api-method-response %}
{% api-method-response-example httpCode=200 %}
{% api-method-response-example-description %}
Returns a replace one result.
{% endapi-method-response-example-description %}

```javascript
{
    "result": {
        "isAcknowledged": true,
        "isModifiedCountAvailable": true,
        "matchedCount": 1,
        "modifiedCount": 1,
        "upsertedId": 0
    } 
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

var person = new Person { Id = "record_id" Name = "Peter" };

await service.ReplaceOneRequest(
    x => x.Id == "record_id",
    person,
    new DatabaseReplaceOneOptions()
);
```

{% hint style="info" %}
Check the information about [entities](entities.md) on how your class objects are serialized.
{% endhint %}
{% endtab %}

{% tab title="Node" %}
```javascript
import { db } from 'codemash';

export async function replaceEmployeeInformation(id, employee) {
    return await db.replaceRecord('employees', { _id: id }, employee);
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

    public function replaceOne()
    {
        $responseData = $this->codemashDb->replaceOne([
        	'collectionName' => 'employees',
        	'filter' => [
        		'name' => 'Peter',
        		'email' => 'peter@example.com',
        	],
        	'document' => [
        		'name' => 'Peter Smith',
        		'email' => 'peter.smith@example.com',
        		'address' => 'Miami',
        	],
        ]);
    }
}
```
{% endtab %}
{% endtabs %}

{% hint style="info" %}
Check the docs on how to form [filters](../../../other-topics/list-parameters/filter.md).
{% endhint %}

{% api-method method="patch" host="https://api.codemash.io" path="/:version/db/:collectionName" %}
{% api-method-summary %}
Update One
{% endapi-method-summary %}

{% api-method-description %}
Updates specified fields in a record.
{% endapi-method-description %}

{% api-method-spec %}
{% api-method-request %}
{% api-method-path-parameters %}
{% api-method-parameter name="version" type="string" required=true %}
A version of the API endpoint.
{% endapi-method-parameter %}

{% api-method-parameter name="collectionName" type="string" required=true %}
The name of the collection to replace record in.
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
{% api-method-parameter name="filter" type="string" required=true %}
Filter document. Used to find the record to replace. More about filters follow the link below.
{% endapi-method-parameter %}

{% api-method-parameter name="update" type="string" required=true %}
Update document. Used to specify how to update the record. More about update documents follow the link below.
{% endapi-method-parameter %}

{% api-method-parameter name="bypassDocumentValidation" type="boolean" required=false %}
If set to true, the document will not be validated against the schema.
{% endapi-method-parameter %}

{% api-method-parameter name="waitForFileUpload" type="boolean" required=false %}
If set to true, waits for files to be uploaded before returning from the endpoint.
{% endapi-method-parameter %}

{% api-method-parameter name="isUpsert" type="boolean" required=false %}
If set to true, inserts a record if it's not found.
{% endapi-method-parameter %}
{% endapi-method-body-parameters %}
{% endapi-method-request %}

{% api-method-response %}
{% api-method-response-example httpCode=200 %}
{% api-method-response-example-description %}
Returns an update result.
{% endapi-method-response-example-description %}

```javascript
{
    "result": {
        "isAcknowledged": true,
        "isModifiedCountAvailable": true,
        "matchedCount": 1,
        "modifiedCount": 1,
        "upsertedId": 0
    } 
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

var person = new Person { Id = "record_id" Name = "Peter" };
var updateDefinition = Builders<Person>.Update.Set(x => x.Name , "Peter II");

await service.UpdateOneRequest(
    x => x.Id == person.Id,
    updateDefinition,
    new DatabaseUpdateOneOptions()
);
```

{% hint style="info" %}
Check the information about [entities](entities.md) on how your class objects are serialized.
{% endhint %}
{% endtab %}

{% tab title="Node" %}
```javascript
import { db } from 'codemash';

export async function activateEmployee(id) {

    return await db.updateRecord('employees', 
        { _id: id }, 
        { $set: { 'is_active' : 1 }});
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

    public function updateOne()
    {
        $responseData = $this->codemashDb->updateOne([
        	'collectionName' => 'employees',
        	'id' => '{EMPLOYEE_ID}',
        	'update' => [
        		'$set' => [
        			'address' => 'Chicago',
        		],
        	],
        ]);
    }
}
```
{% endtab %}
{% endtabs %}

{% hint style="info" %}
Check the docs on how to form [filters](../../../other-topics/list-parameters/filter.md).
{% endhint %}

