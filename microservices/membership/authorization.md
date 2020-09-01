---
description: Overview of authorization
---

# Authorization

To authorize requests, CodeMash uses an API token. This token needs to be passed with every request. There are three types of tokens.

1. **Project token** - has full permission to project resources.
2. **User token** - received by the user after successful authentication.
3. **Service token** - granted to service user \(can be created in the dashboard\). Acts as a project token but with managed permissions.

## Passing a token

Authorization token can be passed in several ways.

### Authorization header

The most common way is to pass an authorization header. This is recommended to use if possible.

```http
Authorization: Bearer YOUR_API_TOKEN
```

### Query string parameter

In case you are unable to set a header \(for example, redirecting to logout URL\), you can set a token in a query string.

```http
?apiKey=YOUR_API_TOKEN
```

## Permissions management

To access project resources your user needs to have particular permissions. For convenience, permissions are grouped into policies and policies into roles.

### Roles

Roles are a group of policies. When you create a project, two roles are created automatically - **Authenticated** and **Administrator**.

* Administrator - a role containing all the policies and all the permissions. This role cannot be edited.
* Authenticated - a role containing less sensitive permissions.

Roles can be created and managed on a dashboard page. Every role can be assigned any amount of policies.

### Policies

Policies are a group of permissions. When enabling services, some system policies are created automatically. You can create your own policies from a list of allowed permissions.

Policies can be created and managed on a dashboard page. Every policy can be assigned any amount of permissions.

### Permissions

Permissions are string values used to allow access to authenticated methods. Permissions are created automatically when enabling services and cannot be edited. Can be used in the creation of policies.

{% hint style="warning" %}
When new functionality is added to CodeMash, new permissions are automatically applied to system policies. These new permissions will be applied to new users only. To apply new permissions to old users, you can do that from the policy page.

In case you don't want to apply these new permissions to newly registered users, use custom role and custom policies.
{% endhint %}

