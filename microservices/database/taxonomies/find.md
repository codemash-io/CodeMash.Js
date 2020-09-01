---
description: Overview of taxonomy find method
---

# Find

{% api-method method="get" host="https://api.codemash.io" path="/:version/db/taxonomies/:taxonomyName/terms" %}
{% api-method-summary %}
Find
{% endapi-method-summary %}

{% api-method-description %}
Gets many terms by using a filter. This endpoint accepts GET and POST methods.
{% endapi-method-description %}

{% api-method-spec %}
{% api-method-request %}
{% api-method-path-parameters %}
{% api-method-parameter name="version" type="string" required=true %}
A version of the API endpoint.
{% endapi-method-parameter %}

{% api-method-parameter name="taxonomyName" type="string" required=true %}
The name of taxonomy to get records from.
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

{% api-method-parameter name="cultureCode" type="string" required=false %}
Language code. If your terms have translatable fields, those fields will only include this specified language. If not provided, will take language from the Accept-Language header.
{% endapi-method-parameter %}

{% api-method-parameter name="sort" type="string" required=false %}
Sort document. This allows you to sort your records. More about sorting follow the link below.
{% endapi-method-parameter %}

{% api-method-parameter name="projection" type="string" required=false %}
Projection document. This allows you to specify what fields to return decreasing the amount of data transferred. This is applied to the **Meta** field. More about projections follow the link below.
{% endapi-method-parameter %}

{% api-method-parameter name="pageSize" type="integer" required=false %}
Amount of terms to return.
{% endapi-method-parameter %}

{% api-method-parameter name="pageNumber" type="integer" required=false %}
The page to return. More about paging follow the link below.
{% endapi-method-parameter %}

{% api-method-parameter name="includeTaxonomy" type="boolean" required=false %}
Includes taxonomy to the response.
{% endapi-method-parameter %}

{% api-method-parameter name="excludeCulture" type="boolean" required=false %}
Culture code or Accept-Language header will be used for translatable fields. If you want to get values in all languages, set this as true.
{% endapi-method-parameter %}
{% endapi-method-query-parameters %}
{% endapi-method-request %}

{% api-method-response %}
{% api-method-response-example httpCode=200 %}
{% api-method-response-example-description %}
Returns a list of terms.
{% endapi-method-response-example-description %}

```javascript
{
    "result": [
        {
            "_id" : ObjectId("5e4faae1eda13b4b9c4b5ab9"),
            "createdOn" : ISODate("2020-01-01T12:00:00.000Z"),
            "modifiedOn" : ISODate("2020-01-01T12:00:00.000Z"),
            "taxonomyId" : ObjectId("5e4faaa5eda13b4b9c4b5ab8"),
            "taxonomyName" : "countries",
            "name" : {
                "en" : "Eswatini",
            },
            "description" : {
                "en" : "Country in Africa",
            },
            "order" : 1,
            "parentId" : ObjectId("5e4faae1eda13b4b9c4b5ab2"),
            "dependencies" : {
                "5e4faae1eda13b4b9c4b5ab2": [
                    ObjectId("5e4faae1eda13b4b9c4b5ab3"),
                    ObjectId("5e4faae1eda13b4b9c4b5ab4"),
                ]
            },
            "meta" : "{ \"text\" : \"Meta_Text\" }"
        }
    ],
    "totalCount": 1,
    "taxonomy": null,
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
Check the docs about [entities](../collections-api/entities.md) on how the response records are deserialized into your class objects.
{% endhint %}
{% endtab %}

{% tab title="Node" %}
```javascript
import { db } from 'codemash';

export async function getCountries() {
    return await db.getTaxonomyTerms('countries');
}

export async function getCities() {
    return await db.getTaxonomyTerms('cities');
}
```
{% endtab %}
{% endtabs %}

{% hint style="info" %}
Check the docs on how to form [projections](../../../other-topics/list-parameters/projection.md), [filters](../../../other-topics/list-parameters/filter.md), [sorting](../../../other-topics/list-parameters/sort.md), [paging](../../../other-topics/list-parameters/paging.md). Check the docs on how to use [references](../collections-api/references.md).
{% endhint %}

