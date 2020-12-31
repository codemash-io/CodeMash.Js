---
description: Overview of projection document
---

# Projection

Projection document allows you to specify what fields should be returned from a find request. This can significantly reduce the amount of data being transferred as it will only return the fields that you ask for. Currently projections are only supported on your collections. Other resources are returned as full objects.

## How to use

A format of a projection document is shown below. You provide a field, which is a field saved inside a database, and a value which can be either **1** or **0** \(include or exclude\).

```javascript
{ <field>: <value>, <field2>: <value2>, ... }
```

Projection document can be of type **inclusive** or **exclusive**. That means that projection can only have one of the values in a document \(1 or 0\). It cannot have mixed values. This does not imply for **\_id** field which can be set to 0 even if other fields are set to 1.

{% hint style="warning" %}
A projection `{ "name": 1, "age": 0 }` is not valid as it mixes 1 and 0 inside a document.
{% endhint %}

An inclusive projection is shown below. Here we have two fields which we know exists in a database. This will return **name**, **age** and **\_id** fields. Any other fields that would exist in a record \(for example, _phone_, _address_\) will be excluded, because we specifically told to only include these fields. This is a valid document because only one type of value is set which is 1.

```javascript
{ "name": 1, "age": 1 }
```

{% hint style="info" %}
Field **\_id** will always be returned if not set to **0** even if it's not included inside a projection document. This field can be set to 0 even in inclusive projections.
{% endhint %}

An exclusive projection is shown below. This will return all fields except for a **name** and **age**. ****You can use this type of projection when you want to exclude lesser amount of fields than to include.

```javascript
{ "name": 0, "age": 0 }
```

To project items inside an object or array, separate fields by a dot.

```javascript
{ "address.street": 1, "name": 1, "_id": 0 }
```

## External references

As CodeMash is using MongoDB database internally, the following resources explain more on how to use projection.

* [Projection examples](https://docs.mongodb.com/manual/tutorial/project-fields-from-query-results/)

