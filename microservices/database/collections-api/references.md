---
description: Overview of collection references
---

# References

From your collection, you can reference other collections, taxonomies, users, or roles. By default, all references are saved as IDs. For referenced collections and taxonomies we allow using **left joins** in **Find** and **FindOne** requests for the first reference level. Unfortunately, that is not possible with user and role references and will require additional server calls. 

For deeper and more customized referencing, use your own [aggregates](../aggregation.md). 

## How to add references

References are added using the **Select** field in your collection builder. When configuring it you can select one of the references - role, user, collection, or taxonomy. You also may specify it as a single \(one to one\) or multiple \(one to many\) references.

![Reference field in collection builder](../../../.gitbook/assets/references_select.png)

## How to use

As mentioned, references can be used in **Find** and **FindOne** requests. You also need to pass a few parameters into one of these requests.

<table>
  <thead>
    <tr>
      <th style="text-align:left">Parameter</th>
      <th style="text-align:left">Type</th>
      <th style="text-align:left">Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="text-align:left">referencedFields</td>
      <td style="text-align:left">array of objects</td>
      <td style="text-align:left">Fields that should be left joined. By default, if this is not passed,
        nothing is referenced and you will get only the IDs of your referenced
        records or terms.</td>
    </tr>
    <tr>
      <td style="text-align:left">addReferencesFirst</td>
      <td style="text-align:left">bool</td>
      <td style="text-align:left">
        <p>By default referencing is done after your main collections records have
          been processed (filters, sort, projection, pagination applied).</p>
        <p>If this is set to true, referencing is done first and you can apply your
          top-level filters, sort, and projection based on these resolved references
          (because the referenced fields will now be objects or arrays instead of
          IDs). Though setting this to true will slow down the response.</p>
      </td>
    </tr>
  </tbody>
</table>

### Form of referencing field

The following shows the form of`referencedFields`parameter. It is a list of objects where object defines parameters for each field to join. The one required value is `name`. All others are optional.

```javascript
[
    {
        "name": "field1"
    },
    {
        "name": "field2",
        "pageSize": 10,
        "pageNumber": 0,
        "sort": "{ \"name\": 1 }",
        "projection": "{ \"name\": 1 }"
    }
]
```

All of the parameters defined in each of the objects are applied to joined records.

| Parameter | Type | Description | Available In |
| :--- | :--- | :--- | :--- |
| name | string | Name of the field to join. | One to one or one to many reference. |
| pageSize | integer | Amount of joined records to return. | One to many \(multiple\) reference. |
| pageNumber | integer | The page of joined records to return. | One to many \(multiple\) reference. |
| sort | string | How to sort joined records. | One to many \(multiple\) reference. |
| projection | string | What fields to return from each of the joined record. Only inclusive projection is allowed \(can only use 1 for fields, not 0\). | One to one or one to many reference. |

### Expected response

Let's say you have a record that is referencing another collection. You have two collections - person and company. In the database, your records could look like the following.

#### Person example record

Here the company field is a reference to some record inside the company collection.

```javascript
{ "_id": "person_id_1", "name": "John", "company": "comp_id_1" }
```

#### Company example record

```javascript
{ "_id": "comp_id_1", "name": "CodeMash" }
```

If not specifically specifying which fields to left join, then in response you will get the same record as shown in person example record. Now if we passed the following as `referencedFields` parameter:

```javascript
[ { "name": "company" } ]
```

We would get a response that would look like this:

```javascript
{ 
    "_id": "person_id_1", 
    "name": "John", 
    "company": { "_id": "comp_id_1", "name": "CodeMash" } 
}
```

### Usage in SDK

The following shows how to use referencing from our provided SDKs.

{% tabs %}
{% tab title=".NET" %}
```javascript
var client = new CodeMashClient(ApiKey, ProjectId);
var repository = new CodeMashRepository<ReferencingEntity>(client);

var referencedFields = new List<CollectionReferenceField>
{
    // Including field1
    new CollectionReferenceField
    {
        Name = "field1",
    },
    // Including field2
    new CollectionReferenceField
    {
        Name = "field2",
        PageSize = 10,
        PageNumber = 0
    },
};

// Setting sort parameter for a field2
referencedFields[1]
    .SetSort(Builders<ReferencedEntity>.Sort.Descending(x => x.Date));
    
// Setting projection parameter for a field2
referencedFields[1]
    .SetProjection(Builders<ReferencedEntity>
        .Projection.Include(x => x.Date).Include(x => x.Id));

var response = await repository.FindAsync(
    x => true,
    new DatabaseFindOptions
    {
        ReferencedFields = referencedFields
    }
);
```

The classes used in the example above are **ReferencingEntity** and **ReferencedEntity**. They could look something like this:

```csharp
[Collection("referencing-entity")]
public class ReferencingEntity : Entity
{
    [Field("field1")]
    public ReferencedEntity FirstReference { get; set; }
        
    [Field("field2")]
    public List<ReferencedEntity> SecondReference { get; set; }
}

[Collection("referenced-entity")]
public class ReferencedEntity: Entity
{
    [Field("date")]
    public DateTime Date { get; set; }
}
```
{% endtab %}

{% tab title="Node" %}

{% endtab %}
{% endtabs %}

## Basic references

If you only need id/name pair from reference, then you can use basic references without much configuration. These are controlled by 4 parameters.

| Parameter | Type | Description |
| :--- | :--- | :--- |
| includeUserNames | bool | Includes the user's display label and id into a response. |
| includeRoleNames | bool | Includes the role's display name and value name. |
| includeCollectionNames | bool | Includes record's display label and id into a response. |
| includeTermNames | bool | Includes the term's title and id into a response. |

The following shows examples of returned objects by using any of the parameters.

```javascript
// When includeUserNames is true
{
    "name": "John Doe",
    "id": "{USER_ID}"
}

// When includeRoleNames is true
{
    "name": "authenticated",
    "displayName": "Authenticated"
}

// When includeCollectionNames is true
{
    "name": "My Text Value",
    "id": "{RECORD_ID}",
    "collectionName": "referenced-collection-name"
}

// When IncludeTermNames is true
{
    "name": "My Term Title",
    "id": "{TERM_ID}",
    "taxonomyName": "referenced-taxonomy-"
}
```

