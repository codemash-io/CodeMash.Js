---
description: Overview of aggregation API
---

# Aggregate

{% api-method method="get" host="https://api.codemash.io" path="/:version/db/:collectionName/aggregate/:id" %}
{% api-method-summary %}
Aggregate
{% endapi-method-summary %}

{% api-method-description %}
Gets many records by your aggregation pipeline. This endpoint accepts GET and POST methods.
{% endapi-method-description %}

{% api-method-spec %}
{% api-method-request %}
{% api-method-path-parameters %}
{% api-method-parameter name="version" type="string" required=true %}
A version of API endpoint.
{% endapi-method-parameter %}

{% api-method-parameter name="collectionName" type="string" required=true %}
The name of collection to aggregate. Must match the collection specified in aggregate.
{% endapi-method-parameter %}

{% api-method-parameter name="id" type="string" required=true %}
ID of an aggregate.
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

{% api-method-query-parameters %}
{% api-method-parameter name="tokens" type="object" required=false %}
Key value pairs \(string: string\) of tokens to insert into your aggregate. More about tokens follow the link below.
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

var aggregateOptions = new AggregateOptions {
    Tokens = new Dictionary<string, string> { { "name", "John" } }
}

var aggregateResult = await service.AggregateAsync<PersonProjection>(
    Guid.Parse("{AGGREGATE_ID}"),
    aggregateOptions
);
```
{% endtab %}

{% tab title="Node" %}
```

```
{% endtab %}
{% endtabs %}

{% hint style="info" %}
Check the docs on [aggregation](../aggregation.md).
{% endhint %}

