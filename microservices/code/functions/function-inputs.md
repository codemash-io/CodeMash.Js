---
description: Overview of function inputs
---

# Function Inputs

In different scenarios, your functions might receive different inputs from CodeMash. Here are all the available scenarios when a certain input is passed to your function.

## General form

In general, all of your functions will receive two parameters - **event** and **context** parameter. The **event** parameter is some kind of data depending on how a function was called. The **context** parameter is just some information about the function itself. Your function handler \(entry function\) might look like the following.

```javascript
function handler(event, context) { ... }
```

Where **event** is of the following form:

```text
{
    projectId: "{YOUR_PROJECT_ID}",
    input: { ... }
}
```

| Event parameter | Type | Description |
| :--- | :--- | :--- |
| projectId | string | Your project ID. |
| input | object | Some input depending on the function invocation scenario. |

## Function event input

As stated above, the event input parameter varies depending on how the function was invoked. The following shows all the different input forms.

### Calling through API

When calling a function through an API call your event will have the following form.

```javascript
{
    projectId: "{YOUR_PROJECT_ID}",
    input: {
        "initiatorUserId": "{CALLER_USER_ID}",
        "template": "{ ... }",
        "data": "My custom data, can be any string"
    }
}
```

| Parameter | Type | Description |
| :--- | :--- | :--- |
| initiatorUserId | string | The ID of a user who called this function. |
| template | string | A static JSON string that you have defined in your function configuration page. |
| data | string | Any string that you pass into API request. |

### Collection triggers

When the function is invoked from the collection trigger your event will have the following form.

```javascript
{
    projectId: "{YOUR_PROJECT_ID}",
    input: {
        "initiatorUserId": "{TRIGGER_USER_ID}",
        "template": "{ .. }",
        "collectionName": "my-collection",
        "triggerType": "Insert",
        "formerRecord": "{ ... }",
        "newRecord": "{ ... }"
    }
}
```

| Parameter | Type | Description |
| :--- | :--- | :--- |
| initiatorUserId | string | The ID of a user who triggered this trigger \(who inserted, updated or deleted a record\). |
| template | string | A static JSON string that you have defined in your function configuration page. |
| collectionName | string | Collection name of the collection which trigger was invoked. |
| triggerType | string | Type of action that called this trigger \(one of the **Insert**, **Update** or **Delete**\). |
| formerRecord | string | JSON string of a former \(before update or deleted\) record. It's not passed if this is an insert type. |
| newRecord | string | JSON string of a new \(updated or inserted\) record. It's not passed if this is a delete type. |

### User triggers <a id="collection-triggers"></a>

‌When the function is invoked from the user trigger your event input will have the following form.

```javascript
{
    projectId: "{YOUR_PROJECT_ID}",
    input: {
        "initiatorUserId": "{TRIGGER_USER_ID}",
        "template": "{ .. }",
        "collectionName": "my-collection",
        "triggerType": "Register",
        "formerUser": "{ ... }",
        "newUser": "{ ... }"
    }
}
```

| Parameter | Type | Description |
| :--- | :--- | :--- |
| initiatorUserId | string | The ID of a user who triggered this trigger \(who registered, invited, updated or deleted a user\). |
| template | string | A static JSON string that you have defined in your function configuration page. |
| triggerType | string | Type of action that called this trigger \(one of the **Register**, **Invite**, **Verified**, **Update,** or **Delete**\). |
| formerUser | object | JSON string of a former \(before update or deleted\) user. It's not passed if this is a register, invite, or verified type. |
| newUser | object | JSON string of a new \(registered, invited, verified, or updated\) user. It's not passed if this is a delete type. |

The form of former and new users is as follows.

| Parameter | Type | Description |
| :--- | :--- | :--- |
| id | string | The ID of a user. |
| modifiedOn | string | When the record was modified \(UTC\). |
| createdOn | string | When the record was created \(UTC\). |
| email | string | User's email. |
| displayName | string | User's display name. |
| firstName | string | User's first name. |
| lastName | string | User's last name. |
| meta | string | User's meta JSON object as a string. |

### File triggers <a id="collection-triggers"></a>

‌When the function is invoked from the file trigger your event input will have the following form.

```javascript
{
    projectId: "{YOUR_PROJECT_ID}",
    input: {
        "initiatorUserId": "{TRIGGER_USER_ID}",
        "template": "{ .. }",
        "collectionName": "my-collection",
        "triggerType": "Register",
        "formerFile": "{ ... }",
        "newFile": "{ ... }"
    }
}
```

| Parameter | Type | Description |
| :--- | :--- | :--- |
| initiatorUserId | string | The ID of a user who triggered this trigger \(who created or deleted a file\). |
| template | string | A static JSON string that you have defined in your function configuration page. |
| triggerType | string | Type of action that called this trigger \(one of the **CreateFile**, **DeleteFile**\). |
| formerFile | object | JSON string of a former \(deleted\) file. It's not passed if this is an create type. |
| newUser | object | JSON string of a new \(created\) file. It's not passed if this is a delete type. |

The form of a former and new file are as follows.

| Parameter | Type | Description |
| :--- | :--- | :--- |
| id | string | The ID of a file. |
| modifiedOn | string | When the record was modified \(UTC\). |
| createdOn | string | When the record was created \(UTC\). |
| originalName | string | File's original name. |
| uniqueName | string | File's unique name. |
| contentType | string | File's content type \(MIME type\). |
| size | long \(int64\) | Size of a file. |
| enumerator | integer | File's enumerator of the same name. |
| directory | string | Path to a file. |
| meta | object | Key value pair \(string: string\) of file meta data. |
| optimizations | array | Object array of file optimizations. Optimization object has fields `optimizedFileId` and `optimization`. Both are of type string. |
| isPublic | bool | If true, file is public. |

