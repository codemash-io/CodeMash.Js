---
description: Overview of template functions
---

# Template Functions

Template functions are already predefined functions that can be used to ease the use of tokens. These functions can be used in places where you are allowed to use tokens, like email, push notification templates.

{% hint style="warning" %}
These functions **cannot** be used in collection aggregates even though you are allowed to use tokens there.
{% endhint %}

## Functions

The following shows all of the available functions.

### Date Time functions

These functions help to work with dates, such as converting milliseconds to date string and other.

```csharp
// Takes in milliseconds as a number or string and a format.
// Returns formatted date string
string UnixTimeToDateString(long? ms, string format = "yyyy-MM-dd") {...}
string UnixTimeToDateString(string ms, string format = "yyyy-MM-dd") {...}
```

### Other functions

```csharp
// Safe way to get a property
// Returns a property by name, or null if not found
dynamic GetProperty(dynamic obj, string name) {...}
```

## Usage Example

The following shows how to use these functions. Example is taken from email template.

```csharp
<h1>Welcome to project @Model.Project.Name.</h1>

<p>Current date: @UnixTimeToDateString(@Model.DateMillis, "dd/MM/yyyy")</p>
```

