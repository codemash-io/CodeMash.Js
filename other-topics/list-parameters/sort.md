---
description: Overview of sort document
---

# Sort

Sort document allows you to specify how results returned from find type responses should be ordered. You can sort results in ascending or descending order for any field.

## How to use

A format of a sort document is shown below. You provide a field, which is a field saved inside a database, and a value which can be either **1** or **-1** \(ascending or descending\).

```javascript
{ <field>: <value>, <field2>: <value2>, ... }
```

An example is shown below. Here we have two fields which we know exists in database. This will sort all the records first by name ascending, then by age descending.

```javascript
{ "name": 1, "age": -1 }
```

To sort items inside an object, separate fields by a dot.

```javascript
{ "address.street": 1 }
```

{% hint style="warning" %}
Sort does not work with **arrays** that have more than one item in array. This includes fields inside nested forms \(collections\). If you are sure that your nested forms won't have more than one item at a time you can use the dot separator show above.

If your arrays have more than one item, you would need to use an aggregate request. \(Not supported yet\).
{% endhint %}

## Restrictions

If sort cannot be done using indexes, then sorting will be done in memory which requires that the size of records being sorted do not exceed 32 megabytes. If it exceeds, you will get an error. We provide an ability to add indexes on your collections to avoid this. How to add indexes and how to ensure that your sort documents will use those indexes read in a page provided below.

{% page-ref page="../../microservices/database/collections/indexes.md" %}

For other resources that you get from our services we provide our own indexes.

## External references

As CodeMash is using MongoDB database internally, the following resources explain more on how to use sort.

* [Sort full documentation](https://docs.mongodb.com/manual/reference/method/cursor.sort/)

