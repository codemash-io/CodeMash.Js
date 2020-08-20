---
description: Overview of collection delete methods
---

# Delete

{% api-method method="delete" host="https://api.codemash.io" path="/:version/db/:collectionName" %}
{% api-method-summary %}
Delete One
{% endapi-method-summary %}

{% api-method-description %}
Deletes a particular record from collection.
{% endapi-method-description %}

{% api-method-spec %}
{% api-method-request %}
{% api-method-path-parameters %}
{% api-method-parameter name="version" type="string" required=true %}
A version of API endpoint.
{% endapi-method-parameter %}

{% api-method-parameter name="collectionName" type="string" required=true %}
The name of collection to delete a record from.
{% endapi-method-parameter %}
{% endapi-method-path-parameters %}

{% api-method-headers %}
{% api-method-parameter name="Authorization" type="string" required=true %}
Secret API key which belongs to your project or user. Not required if using cookies with session ID.
{% endapi-method-parameter %}

{% api-method-parameter name="x-cm-projectid" type="string" required=true %}
Your project's ID. Can be passed as query parameter.
{% endapi-method-parameter %}
{% endapi-method-headers %}

{% api-method-body-parameters %}
{% api-method-parameter name="filter" type="string" required=true %}
Filter document. Used to find the record to delete. More about filters follow the a below.
{% endapi-method-parameter %}
{% endapi-method-body-parameters %}
{% endapi-method-request %}

{% api-method-response %}
{% api-method-response-example httpCode=200 %}
{% api-method-response-example-description %}
Returns a delete result.
{% endapi-method-response-example-description %}

```javascript
{
    "result": {
        "isAcknowledged": true,
        "deletedCount": 1
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

await service.DeleteOneAsync(
    x => x.Id == "record_id"
);
```

{% hint style="info" %}
Check the information about [entities](entities.md) on how your filter parameters are mapped.
{% endhint %}
{% endtab %}

{% tab title="Node" %}
```javascript
import { db } from 'codemash';

export async function deleteEmployee(id) {
    return await db.deleteRecord('employees', { _id: id });
}
```
{% endtab %}
{% endtabs %}

{% hint style="info" %}
Check the docs on how to form [filters](../../../other-topics/list-parameters/filter.md).
{% endhint %}

{% api-method method="delete" host="https://api.codemash.io" path="/:version/db/:collectionName/bulk" %}
{% api-method-summary %}
Delete Many
{% endapi-method-summary %}

{% api-method-description %}
Deletes multiple records from collection.
{% endapi-method-description %}

{% api-method-spec %}
{% api-method-request %}
{% api-method-path-parameters %}
{% api-method-parameter name="version" type="string" required=true %}
A version of API endpoint.
{% endapi-method-parameter %}

{% api-method-parameter name="collectionName" type="string" required=true %}
The name of collection to delete records from.
{% endapi-method-parameter %}
{% endapi-method-path-parameters %}

{% api-method-headers %}
{% api-method-parameter name="Authorization" type="string" required=true %}
Secret API key which belongs to your project or user. Not required if using cookies with session ID.
{% endapi-method-parameter %}

{% api-method-parameter name="x-cm-projectid" type="string" required=true %}
Your project's ID. Can be passed as query parameter.
{% endapi-method-parameter %}
{% endapi-method-headers %}

{% api-method-body-parameters %}
{% api-method-parameter name="filter" type="string" required=true %}
Filter document. Used to find records to delete. More about filters follow a link below.
{% endapi-method-parameter %}
{% endapi-method-body-parameters %}
{% endapi-method-request %}

{% api-method-response %}
{% api-method-response-example httpCode=200 %}
{% api-method-response-example-description %}
Returns a delete result.
{% endapi-method-response-example-description %}

```javascript
{
    "result": {
        "isAcknowledged": true,
        "deletedCount": 5
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

await service.DeleteManyAsync(
    x => x.Name == "John"
);
```

{% hint style="info" %}
Check the information about [entities](entities.md) on how your filter parameters are mapped.
{% endhint %}
{% endtab %}
{% endtabs %}

{% hint style="info" %}
Check the docs on how to form [filters](../../../other-topics/list-parameters/filter.md).
{% endhint %}

