---
description: Overview of collection find method
---

# Find

{% api-method method="get" host="https://api.codemash.io" path="/:version/db/:collectionName/find" %}
{% api-method-summary %}
Find
{% endapi-method-summary %}

{% api-method-description %}
Gets many records by using a filter. This endpoint accepts GET and POST methods.
{% endapi-method-description %}

{% api-method-spec %}
{% api-method-request %}
{% api-method-path-parameters %}
{% api-method-parameter name="version" type="string" required=true %}
A version of the API endpoint.
{% endapi-method-parameter %}

{% api-method-parameter name="collectionName" type="string" required=true %}
The name of the collection to get records from.
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
Filter document. This allows you to find records by a custom filter. More about filters follow the link below.
{% endapi-method-parameter %}

{% api-method-parameter name="referencedFields" type="array" required=false %}
Fields to left join. More about referencing fields follow the link below.
{% endapi-method-parameter %}

{% api-method-parameter name="addReferencesFirst" type="boolean" required=false %}
If set to true, left joins first before applying other processing to main records. More about referencing fields follow the link below.
{% endapi-method-parameter %}

{% api-method-parameter name="cultureCode" type="string" required=false %}
Language code. If your records have translatable fields, those fields will only include this specified language. If not provided, will take language from the Accept-Language header.
{% endapi-method-parameter %}

{% api-method-parameter name="sort" type="string" required=false %}
Sort document. This allows you to sort your records. More about sorting follow the link below.
{% endapi-method-parameter %}

{% api-method-parameter name="projection" type="string" required=false %}
Projection document. This allows you to specify what fields to return decreasing the amount of data transferred. More about projections follow the link below.
{% endapi-method-parameter %}

{% api-method-parameter name="pageSize" type="integer" required=false %}
Amount of records to return.
{% endapi-method-parameter %}

{% api-method-parameter name="pageNumber" type="integer" required=false %}
The page to return. More about paging follow the link below.
{% endapi-method-parameter %}

{% api-method-parameter name="includeSchema" type="boolean" required=false %}
If set to true, includes your collection details in the response.
{% endapi-method-parameter %}

{% api-method-parameter name="includeUserNames" type="boolean" required=false %}
If set to true will inject referenced user\(s\) information.
{% endapi-method-parameter %}

{% api-method-parameter name="includeRoleNames" type="boolean" required=false %}
If set to true will inject role\(s\) information.
{% endapi-method-parameter %}

{% api-method-parameter name="includeCollectionNames" type="boolean" required=false %}
If set to true will inject referenced collections.
{% endapi-method-parameter %}

{% api-method-parameter name="includeTermNames" type="boolean" required=false %}
If set to true will inject referenced terms.
{% endapi-method-parameter %}

{% api-method-parameter name="excludeCulture" type="boolean" required=false %}
Culture code or Accept-Language header will be used for translatable fields. If you want to get values in all languages, set this as true.
{% endapi-method-parameter %}
{% endapi-method-query-parameters %}
{% endapi-method-request %}

{% api-method-response %}
{% api-method-response-example httpCode=200 %}
{% api-method-response-example-description %}
Returns a list of records. Here singular quotes are used to avoid escaping double quotes.
{% endapi-method-response-example-description %}

```javascript
{
    "result": "[{ '_id': '5e37136bf59f3a3f940b99a4', 'name': 'John' }]",
    "totalCount": 1,
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

var persons = await service.FindAsync(
    x => true,
    new DatabaseFindOptions()
);
```

{% hint style="info" %}
Check the docs about [entities](entities.md) on how the response records are deserialized into your class objects.
{% endhint %}
{% endtab %}

{% tab title="Node" %}
```javascript
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

    public function find()
    {
        $responseData = $this->codemashDb->findMany([
        	'collectionName' => 'employees',
        	'filter' => [
        		'address' => 'New York',
        	],
        ]);
    }
}
```
{% endtab %}
{% endtabs %}

{% hint style="info" %}
Check the docs on how to form [projections](../../../other-topics/list-parameters/projection.md), [filters](../../../other-topics/list-parameters/filter.md), [sorting](../../../other-topics/list-parameters/sort.md), [paging](../../../other-topics/list-parameters/paging.md). Check the docs on how to use [references](references.md).
{% endhint %}

