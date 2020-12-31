---
description: Overview of collection find one methods
---

# Find One

{% api-method method="get" host="https://api.codemash.io" path="/:version/db/:collectionName/:id" %}
{% api-method-summary %}
Find One \(by ID\)
{% endapi-method-summary %}

{% api-method-description %}
Gets a record by its ID. This endpoint accepts GET and POST methods.
{% endapi-method-description %}

{% api-method-spec %}
{% api-method-request %}
{% api-method-path-parameters %}
{% api-method-parameter name="version" type="string" required=true %}
A version of the API endpoint.
{% endapi-method-parameter %}

{% api-method-parameter name="collectionName" type="string" required=true %}
The name of the collection to get a record from.
{% endapi-method-parameter %}

{% api-method-parameter name="id" type="string" required=true %}
The ID of a record to get.
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

{% api-method-query-parameters %}
{% api-method-parameter name="referencedFields" type="array" required=false %}
Fields to left join. More about referencing fields follow the link below.
{% endapi-method-parameter %}

{% api-method-parameter name="addReferencesFirst" type="boolean" required=false %}
If set to true, left joins before applying other processing to main records. More about referencing fields follow the link below.
{% endapi-method-parameter %}

{% api-method-parameter name="cultureCode" type="string" required=false %}
Language code. If your record has translatable fields, those fields will only include this specified language. If not provided, will take language from the Accept-Language header.
{% endapi-method-parameter %}

{% api-method-parameter name="projection" type="string" required=false %}
Projection document. This allows you to specify what fields to return decreasing the amount of data transferred. More about projections follow the link below.
{% endapi-method-parameter %}

{% api-method-parameter name="includeSchema" type="boolean" required=false %}
If set to true, Includes your collection details in the response.
{% endapi-method-parameter %}

{% api-method-parameter name="excludeCulture" type="boolean" required=false %}
Culture code or Accept-Language header will be used for translatable fields. If you want to get values in all languages, set this as true.
{% endapi-method-parameter %}
{% endapi-method-query-parameters %}
{% endapi-method-request %}

{% api-method-response %}
{% api-method-response-example httpCode=200 %}
{% api-method-response-example-description %}
Returns a single record matched by ID. Here singular quotes are used to avoid escaping double quotes.
{% endapi-method-response-example-description %}

```javascript
{
    "result": "{ '_id': '5e37136bf59f3a3f940b99a4', 'name': 'John' }",
    "schema": null,
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

var person = await service.FindOneByIdAsync(
    "{RECORD_ID}",
    new DatabaseFindOneOptions()
);
```

{% hint style="info" %}
Check the docs about [entities](entities.md) on how the response record is deserialized into your class object.
{% endhint %}
{% endtab %}

{% tab title="Node" %}
```javascript
import { db } from 'codemash';

export async function getEmployeeDetails(id) {
    const response = await db.getRecord('employees', id);
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

    public function findOneById()
    {
        $responseData = $this->codemashDb->get([
        	'collectionName' => 'employees',
        	'id' => '{EMPLOYEE_ID}',
        ]);
    }
}
```
{% endtab %}
{% endtabs %}

{% hint style="info" %}
Check the docs on how to form [projections](../../../other-topics/list-parameters/projection.md). Check the docs on how to use [references](references.md).
{% endhint %}

{% api-method method="get" host="https://api.codemash.io" path="/:version/db/:collectionName/findOne" %}
{% api-method-summary %}
Find One \(by using a filter\)
{% endapi-method-summary %}

{% api-method-description %}
Gets a record by using a filter. This endpoint accepts GET and POST methods.
{% endapi-method-description %}

{% api-method-spec %}
{% api-method-request %}
{% api-method-path-parameters %}
{% api-method-parameter name="version" type="string" required=true %}
A version of the API endpoint.
{% endapi-method-parameter %}

{% api-method-parameter name="collectionName" type="string" required=true %}
The name of the collection to get a record from.
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

{% api-method-query-parameters %}
{% api-method-parameter name="filter" type="string" required=true %}
Filter document. This allows you to find a record by a custom filter. More about filters follow the link below.
{% endapi-method-parameter %}

{% api-method-parameter name="referencedFields" type="array" required=false %}
Fields to left join. More about referencing fields follow the link below.
{% endapi-method-parameter %}

{% api-method-parameter name="addReferencesFirst" type="boolean" required=false %}
If set to true, left joins first before applying other processing to main records. More about referencing fields follow the link below.
{% endapi-method-parameter %}

{% api-method-parameter name="cultureCode" type="string" required=false %}
Language code. If your record has translatable fields, those fields will only include this specified language. If not provided, will take language from the Accept-Language header.
{% endapi-method-parameter %}

{% api-method-parameter name="projection" type="string" required=false %}
Projection document. This allows you to specify what fields to return decreasing the amount of data transferred. More about projections follow the link below.
{% endapi-method-parameter %}

{% api-method-parameter name="includeSchema" type="boolean" required=false %}
If set to true, includes your collection details in the response.
{% endapi-method-parameter %}

{% api-method-parameter name="excludeCulture" type="boolean" required=false %}
Culture code or Accept-Language header will be used for translatable fields. If you want to get values in all languages, set this as true.
{% endapi-method-parameter %}
{% endapi-method-query-parameters %}
{% endapi-method-request %}

{% api-method-response %}
{% api-method-response-example httpCode=200 %}
{% api-method-response-example-description %}
Returns a single record matched by a filter. Here singular quotes are used to avoid escaping double quotes.
{% endapi-method-response-example-description %}

```javascript
{
    "result": "{ '_id': '5e37136bf59f3a3f940b99a4', 'name': 'John' }",
    "schema": null,
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

var person = await service.FindOneAsync(
    x => x.Id == "{RECORD_ID}",
    new DatabaseFindOneOptions()
);
```

{% hint style="info" %}
Check the docs about [entities](entities.md) on how the response record is deserialized into your class object.
{% endhint %}
{% endtab %}

{% tab title="Node" %}
```javascript
import { db } from 'codemash';

export async function getEmployeeByUserId(id) {    
    
    const filter = { userId : id };    
    return await db.getRecordWithFilter(collectionName, filter, null);
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

    public function findOneByFilter()
    {
        $responseData = $this->codemashDb->findOne([
        	'collectionName' => 'employees',
        	'filter' => [
        		'address' => 'Los Angeles',
        	],
        ]);
    }
}
```
{% endtab %}
{% endtabs %}

{% hint style="info" %}
Check the docs on how to form [projections](../../../other-topics/list-parameters/projection.md), [filters](../../../other-topics/list-parameters/filter.md). Check the docs on how to use [references](references.md).
{% endhint %}

