---
description: Overview of taxonomies
---

# Taxonomies

Taxonomy is a special type of collection that can be used to hold a simple label, value type information. You can create a new taxonomy on our dashboard page.

Taxonomy records are called terms.

Terms are only inserted through the dashboard as they are more of an administration type and should only be used for reading.

## Schema

Unlike collection records where you define your own schema, terms have a predefined schema. Only the meta field can be customized. The following shows an example of how the term is saved inside a database.

```javascript
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
    "meta" : {
        "text" : "Meta_Text"
    }
}
```

| Parameter | Type | Description |
| :--- | :--- | :--- |
| \_id | ObjectId | The ID of a record. |
| createdOn | IsoDate | Term create date. |
| modifiedOn | IsoDate | Term modify date. |
| taxonomyId | ObjectId | Taxonomy ID. |
| taxonomyName | string | Taxonomy name. |
| name | object | Translatable name property. |
| description | object | Translatable description property. |
| order | integer | Order to sort by. |
| parentId | ObjectId | The ID of parent term. |
| dependencies | object | For multi dependency on other terms use this field. It's an object where a key is an ID of some other taxonomy that this taxonomy term depends on. Each key has an array value with term IDs from that dependent taxonomy. |
| meta | object | The custom object that you define in taxonomy creator. |

Here **ObjectId** and **IsoDate** types are specific to MongoDB.

## Taxonomies API methods

Exposed API taxonomy methods allow reading terms.

{% page-ref page="taxonomies/" %}

