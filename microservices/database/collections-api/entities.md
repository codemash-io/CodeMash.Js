---
description: Overview of entities
---

# Entities

Entities are your collection data models. In object-oriented programming, this would be a class that is a representation of a collection in your code. Our [SDKs](https://docs.codemash.io/sdks) provide helper tools to make this representation easier to handle.

{% tabs %}
{% tab title=".NET" %}
#### Attributes

* **\[Collection\]** - used on a class to specify the name of a collection that this class represents.
* **\[Field\]** - used on property inside of a class to specify the name that is used inside a database. That would be a **unique name** that you see in your dashboard, collection page, field configuration.

```csharp
[Collection("persons")]
public class Person : Entity
{
    [Field("name")]
    public string Name { get; set; }
}
```

The collection attribute allows your requests to the database to be automatically injected with a collection name. The field attribute allows us to correctly serialize and parse your records, filter, sort, projection, and update queries. You can omit this attribute if your property name is exactly the same as your field's unique name.

#### Interfaces

* **IEntity** - an interface that every entity class should implement. This will allow us to use the class in provided database methods.

#### Classes

* **Entity** - a class that already implements **IEntity** interface and can be extended by your entity classes.
* **TermEntity** - a class that should be used for taxonomy references \(if your collection has references to taxonomies, use this class for that field\).
* **FileEntity** - a class that should be used for file fields.
{% endtab %}

{% tab title="Node" %}

{% endtab %}
{% endtabs %}

