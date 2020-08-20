---
description: Overview of filter document
---

# Filter

Filter document allows you to specify what records should be returned.

## How to use

A format of a filter document is shown below. You provide a field, which is a field saved inside a database, and a value or selector.

```javascript
{ <field>: <value>, <field2>: { <selector> }, ... }
```

An example is shown below. Here we have two fields which we know exists in database. This will filter all the records with a name John and age greater than 18.

```javascript
{ "name": "John", "age": { "$gt": 18 } }
```

To filter items inside an object, separate fields by a dot.

```javascript
{ "address.house_number": 202 }
```

## External references

As CodeMash is using MongoDB database internally, the following resources explain more on how to use filter.

* [Filter selectors](https://docs.mongodb.com/manual/reference/operator/query/#query-selectors)

