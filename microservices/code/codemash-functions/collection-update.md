---
description: Overview of update record function
---

# Collection Update

This function allows you to quickly update a record inside collection with a single button.

### Specifics

| Parameter | Description |
| :--- | :--- |
| Display name | Collection Update |
| Usage | Used on database collection record. |
| Can use from dashboard | Yes \(from inside record's page\) |
| Can use through API | Yes |

### Configuration

Function requires the following parameters.

| Parameter | Description |
| :--- | :--- |
| Collection | Collection to which to attach this function to. |
| Display Name | Your custom display name for a function. |
| Update Query | MongoDB based update query to use when function is called. |

### Update Query

Update query is a BSON document which is similar to JSON but has some of it's own additions. As it is a document, all query needs to be wrapped inside `{ ... }`. The following shows some examples. Full documentation with all available operators and examples can be found in external resources at the end of a page.

#### General update syntax

The following is a general syntax of an update query.

```sql
{
   <operator1>: { <field1>: <value1>, ... },
   <operator2>: { <field2>: <value2>, ... },
   ...
}
```

* **Operator** - a command to execute on it's fields.
* **Field** - field name \(unique name of a field\). To reach nested levels separate fields by `.` and use index  to reach specific document. An example of a nested field - `details.0.status`.
* **Value** - updated value of a field.

#### Examples

**$set** - sets the value of a field in a record.

```bash
{ $set: { first_name: 'John', 'details.0.is_active': true } }
```

**$unset** - removes the specified field from a record.

```bash
{ $unset: { quantity: "", instock: "" } }
```

**$inc**- increments the value of the field by the specified amount.

```bash
{ $inc: { quantity: 2, instock: -5 } }
```

### External references

As CodeMash is using MongoDB database internally, the following resources explains more of how to use update query.

* [Full update command documentation](https://docs.mongodb.com/manual/reference/method/db.collection.update/)
* [Possible update operators](https://docs.mongodb.com/manual/reference/operator/update/#id1)

