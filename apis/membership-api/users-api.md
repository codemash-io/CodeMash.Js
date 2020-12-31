---
description: Overview of users API methods
---

# Users API

{% api-method method="post" host="https://api.codemash.io" path="/:version/membership/users/register" %}
{% api-method-summary %}
Register User
{% endapi-method-summary %}

{% api-method-description %}
Register a new user to a particular project.
{% endapi-method-description %}

{% api-method-spec %}
{% api-method-request %}
{% api-method-path-parameters %}
{% api-method-parameter name="version" type="string" required=true %}
A version of the API endpoint.
{% endapi-method-parameter %}
{% endapi-method-path-parameters %}

{% api-method-headers %}
{% api-method-parameter name="Authorization" type="string" required=true %}
Secret API key which belongs to your project or user. Not required if using cookies with a session ID.
{% endapi-method-parameter %}

{% api-method-parameter name="x-cm-projectid" type="string" required=true %}
Your project's ID. Can be passed as a query parameter.
{% endapi-method-parameter %}
{% endapi-method-headers %}

{% api-method-body-parameters %}
{% api-method-parameter name="email" type="string" required=true %}
User's email address.
{% endapi-method-parameter %}

{% api-method-parameter name="password" type="string" required=true %}
User's password.
{% endapi-method-parameter %}

{% api-method-parameter name="displayName" type="string" required=false %}
User's display name.
{% endapi-method-parameter %}

{% api-method-parameter name="firstName" type="string" required=false %}
User's first name.
{% endapi-method-parameter %}

{% api-method-parameter name="lastName" type="string" required=false %}
User's last name.
{% endapi-method-parameter %}

{% api-method-parameter name="roles" type="array" required=false %}
Roles to give to the newly created user \(don't provide any to use default role from settings\).
{% endapi-method-parameter %}

{% api-method-parameter name="autoLogin" type="boolean" required=false %}
Should the user be logged in after registering? The default is **true**.
{% endapi-method-parameter %}

{% api-method-parameter name="meta" type="string" required=false %}
User's meta details as a JSON object.
{% endapi-method-parameter %}
{% endapi-method-body-parameters %}
{% endapi-method-request %}

{% api-method-response %}
{% api-method-response-example httpCode=200 %}
{% api-method-response-example-description %}
Returns user's authorization token and ID.
{% endapi-method-response-example-description %}

```javascript
{
    "result": true,
    "apiKey": "{AUTHORIZATION_KEY}",
    "userId": "{USER_ID_GUID}",
}
```
{% endapi-method-response-example %}
{% endapi-method-response %}
{% endapi-method-spec %}
{% endapi-method %}

{% tabs %}
{% tab title=".NET" %}
```csharp
var client = new CodeMashClient(apiKey, projectId);
var membershipService = new CodeMashMembershipService(client);

membershipService.RegisterUser(new RegisterUserRequest
{
    Email = "test@email.com",
    Password = "password123"
});
```
{% endtab %}

{% tab title="Node" %}
```csharp

```
{% endtab %}
{% endtabs %}

{% hint style="warning" %}
#### Membership Settings

There are some settings for user registration inside your dashboard under sections **Registration** and **Verification**.

* **User registers as** - if you don't provide roles during registration, the user will be given a selected role in the settings.
* **Verification by email needed** - if this is checked, the user will be unverified until verified through email. Email service needs to be enabled for this option. Also in your template, you have to set a token named **@Model.ValidationToken** which will be replaced by a verification token.
{% endhint %}

{% api-method method="post" host="https://api.codemash.io" path="/:version/membership/users/invite" %}
{% api-method-summary %}
Invite User
{% endapi-method-summary %}

{% api-method-description %}
Invites an user to a particular project.
{% endapi-method-description %}

{% api-method-spec %}
{% api-method-request %}
{% api-method-path-parameters %}
{% api-method-parameter name="version" type="string" required=true %}
A version of the API endpoint.
{% endapi-method-parameter %}
{% endapi-method-path-parameters %}

{% api-method-headers %}
{% api-method-parameter name="Authorization" type="string" required=true %}
Secret API key which belongs to your project or user. Not required if using cookies with a session ID.
{% endapi-method-parameter %}

{% api-method-parameter name="x-cm-projectid" type="string" required=true %}
Your project's ID. Can be passed as a query parameter.
{% endapi-method-parameter %}
{% endapi-method-headers %}

{% api-method-body-parameters %}
{% api-method-parameter name="email" type="string" required=true %}
User's email address.
{% endapi-method-parameter %}

{% api-method-parameter name="displayName" type="string" required=false %}
User's display name.
{% endapi-method-parameter %}

{% api-method-parameter name="firstName" type="string" required=false %}
User's first name.
{% endapi-method-parameter %}

{% api-method-parameter name="lastName" type="string" required=false %}
User's last name.
{% endapi-method-parameter %}

{% api-method-parameter name="roles" type="array" required=false %}
Roles to give to the newly created user \(don't provide any to use default role from settings\).
{% endapi-method-parameter %}

{% api-method-parameter name="meta" type="string" required=false %}
User's meta details as a JSON object.
{% endapi-method-parameter %}
{% endapi-method-body-parameters %}
{% endapi-method-request %}

{% api-method-response %}
{% api-method-response-example httpCode=200 %}
{% api-method-response-example-description %}
Returns user's ID.
{% endapi-method-response-example-description %}

```javascript
{
    "result": true,
    "userId": "{USER_ID_GUID}"
}
```
{% endapi-method-response-example %}
{% endapi-method-response %}
{% endapi-method-spec %}
{% endapi-method %}

{% tabs %}
{% tab title=".NET" %}
```csharp
var client = new CodeMashClient(apiKey, projectId);
var membershipService = new CodeMashMembershipService(client);

membershipService.InviteUserAsync(new InviteUserRequest
{
    Email = "test@email.com",
});
```
{% endtab %}

{% tab title="Node" %}
```csharp

```
{% endtab %}
{% endtabs %}

{% hint style="warning" %}
### Membership Settings

There are some settings for user invitation inside your dashboard under sections **Registration** and **Invitation**.

* **User registers as** - if you don't provide roles during registration, the user will be given a selected role.
* **Allow invite users** - this **MUST** be checked for invitations to work. Email service needs to be enabled for this option. Also in your template, you have to set a token named **@Model.ValidationToken** which will be replaced by an invitation token.
{% endhint %}

{% api-method method="get" host="https://api.codemash.io" path="/:version/membership/users" %}
{% api-method-summary %}
Get Users
{% endapi-method-summary %}

{% api-method-description %}
Gets a list of project users.
{% endapi-method-description %}

{% api-method-spec %}
{% api-method-request %}
{% api-method-path-parameters %}
{% api-method-parameter name="version" type="string" required=true %}
A version of the API endpoint.
{% endapi-method-parameter %}
{% endapi-method-path-parameters %}

{% api-method-headers %}
{% api-method-parameter name="Authorization" type="string" required=true %}
Secret API key which belongs to your project or user. Not required if using cookies with a session ID.
{% endapi-method-parameter %}

{% api-method-parameter name="x-cm-projectid" type="string" required=true %}
Your project's ID. Can be passed as a query parameter.
{% endapi-method-parameter %}
{% endapi-method-headers %}

{% api-method-query-parameters %}
{% api-method-parameter name="includePermissions" type="boolean" required=false %}
Includes permissions to the response.
{% endapi-method-parameter %}

{% api-method-parameter name="includeDevices" type="boolean" required=false %}
Includes devices to the response.
{% endapi-method-parameter %}

{% api-method-parameter name="includeMeta" type="boolean" required=false %}
Includes meta to the response.
{% endapi-method-parameter %}
{% endapi-method-query-parameters %}
{% endapi-method-request %}

{% api-method-response %}
{% api-method-response-example httpCode=200 %}
{% api-method-response-example-description %}
Returns a list of users.
{% endapi-method-response-example-description %}

```javascript
{
    "totalCount": 20,
    "result": [
        {
            "id": "{USER_ID}",
            "email": "test@test.com"
            ...
        },
        ...
    ]
}
```
{% endapi-method-response-example %}
{% endapi-method-response %}
{% endapi-method-spec %}
{% endapi-method %}

{% tabs %}
{% tab title=".NET" %}
```csharp
var client = new CodeMashClient(apiKey, projectId);
var membershipService = new CodeMashMembershipService(client);

var response = await membershipService.GetUsersListAsync(new GetUsersRequest());
```
{% endtab %}

{% tab title="Node" %}

{% endtab %}
{% endtabs %}

{% api-method method="get" host="https://api.codemash.io" path="/:version/membership/users/:id" %}
{% api-method-summary %}
Get User
{% endapi-method-summary %}

{% api-method-description %}
Gets a project user.
{% endapi-method-description %}

{% api-method-spec %}
{% api-method-request %}
{% api-method-path-parameters %}
{% api-method-parameter name="version" type="string" required=true %}
A version of the API endpoint.
{% endapi-method-parameter %}

{% api-method-parameter name="id" type="string" required=true %}
User's ID.
{% endapi-method-parameter %}
{% endapi-method-path-parameters %}

{% api-method-headers %}
{% api-method-parameter name="Authorization" type="string" required=true %}
Secret API key which belongs to your project or user. Not required if using cookies with a session ID.
{% endapi-method-parameter %}

{% api-method-parameter name="x-cm-projectid" type="string" required=true %}
Your project's ID. Can be passed as a query parameter.
{% endapi-method-parameter %}
{% endapi-method-headers %}

{% api-method-query-parameters %}
{% api-method-parameter name="IncludeUnreadNotifications" type="boolean" required=false %}
Includes unread push notifications count.
{% endapi-method-parameter %}

{% api-method-parameter name="includePermissions" type="boolean" required=false %}
Includes permissions to the response.
{% endapi-method-parameter %}

{% api-method-parameter name="includeDevices" type="boolean" required=false %}
Includes devices to the response.
{% endapi-method-parameter %}

{% api-method-parameter name="includeMeta" type="boolean" required=false %}
Includes meta to the response.
{% endapi-method-parameter %}
{% endapi-method-query-parameters %}
{% endapi-method-request %}

{% api-method-response %}
{% api-method-response-example httpCode=200 %}
{% api-method-response-example-description %}
Returns a list of users.
{% endapi-method-response-example-description %}

```javascript
{
    "totalCount": 20,
    "result": [
        {
            "id": "{USER_ID}",
            "email": "test@test.com"
            ...
        },
        ...
    ]
}
```
{% endapi-method-response-example %}
{% endapi-method-response %}
{% endapi-method-spec %}
{% endapi-method %}

{% tabs %}
{% tab title=".NET" %}
```csharp
var client = new CodeMashClient(apiKey, projectId);
var membershipService = new CodeMashMembershipService(client);

var response = await membershipService.GetUserAsync(new GetUserRequest
{
    Id = Guid.Parse("{USER_ID}")
});
```
{% endtab %}

{% tab title="Node" %}
```

```
{% endtab %}
{% endtabs %}

{% api-method method="get" host="https://api.codemash.io" path="/:version/membership/users/by-email" %}
{% api-method-summary %}
Get User \(By Email\)
{% endapi-method-summary %}

{% api-method-description %}
Gets a project user by email.
{% endapi-method-description %}

{% api-method-spec %}
{% api-method-request %}
{% api-method-path-parameters %}
{% api-method-parameter name="version" type="string" required=true %}
A version of the API endpoint.
{% endapi-method-parameter %}
{% endapi-method-path-parameters %}

{% api-method-headers %}
{% api-method-parameter name="Authorization" type="string" required=true %}
Secret API key which belongs to your project or user. Not required if using cookies with a session ID.
{% endapi-method-parameter %}

{% api-method-parameter name="x-cm-projectid" type="string" required=true %}
Your project's ID. Can be passed as a query parameter.
{% endapi-method-parameter %}
{% endapi-method-headers %}

{% api-method-query-parameters %}
{% api-method-parameter name="IncludeUnreadNotifications" type="boolean" required=false %}
Includes unread push notifications count.
{% endapi-method-parameter %}

{% api-method-parameter name="includePermissions" type="boolean" required=false %}
Includes permissions to the response.
{% endapi-method-parameter %}

{% api-method-parameter name="includeDevices" type="boolean" required=false %}
Includes devices to the response.
{% endapi-method-parameter %}

{% api-method-parameter name="includeMeta" type="boolean" required=false %}
Includes meta to the response.
{% endapi-method-parameter %}
{% endapi-method-query-parameters %}
{% endapi-method-request %}

{% api-method-response %}
{% api-method-response-example httpCode=200 %}
{% api-method-response-example-description %}
Returns a list of users.
{% endapi-method-response-example-description %}

```javascript
{
    "totalCount": 20,
    "result": [
        {
            "id": "{USER_ID}",
            "email": "test@test.com"
            ...
        },
        ...
    ]
}
```
{% endapi-method-response-example %}
{% endapi-method-response %}
{% endapi-method-spec %}
{% endapi-method %}

{% tabs %}
{% tab title=".NET" %}
```csharp
var client = new CodeMashClient(apiKey, projectId);
var membershipService = new CodeMashMembershipService(client);

var response = await membershipService.GetUserAsync(new GetUserRequest
{
    Email = "john.doe@email.com"
});
```
{% endtab %}
{% endtabs %}

{% api-method method="patch" host="https://api.codemash.io" path="/:version/membership/users/profile" %}
{% api-method-summary %}
Update profile
{% endapi-method-summary %}

{% api-method-description %}
Updates the user's profile with given parameters. Only the provided values are updated. This request does not update user roles.
{% endapi-method-description %}

{% api-method-spec %}
{% api-method-request %}
{% api-method-path-parameters %}
{% api-method-parameter name="version" type="string" required=true %}
A version of the API endpoint.
{% endapi-method-parameter %}
{% endapi-method-path-parameters %}

{% api-method-headers %}
{% api-method-parameter name="Authorization" type="string" required=true %}
Secret API key which belongs to your project or user. Not required if using cookies with a session ID.
{% endapi-method-parameter %}

{% api-method-parameter name="x-cm-projectid" type="string" required=true %}
Your project's ID. Can be passed as a query parameter.
{% endapi-method-parameter %}
{% endapi-method-headers %}

{% api-method-body-parameters %}
{% api-method-parameter name="unsubscribedNewsTags" type="array" required=false %}
Marketing email types to unsubscribe from. If value not provided then it's not updated. To delete, pass an empty array.
{% endapi-method-parameter %}

{% api-method-parameter name="subscribeToNews" type="boolean" required=false %}
Should a user receive marketing emails? If value not provided then it's not updated.
{% endapi-method-parameter %}

{% api-method-parameter name="timeZone" type="string" required=false %}
Default user's timezone.
{% endapi-method-parameter %}

{% api-method-parameter name="language" type="string" required=false %}
Default user's language \(mainly for notifications\).
{% endapi-method-parameter %}

{% api-method-parameter name="displayName" type="string" required=false %}
User's display name.
{% endapi-method-parameter %}

{% api-method-parameter name="firstName" type="string" required=false %}
User's first name.
{% endapi-method-parameter %}

{% api-method-parameter name="lastName" type="string" required=false %}
User's last name.
{% endapi-method-parameter %}

{% api-method-parameter name="meta" type="string" required=false %}
User's meta details as JSON.
{% endapi-method-parameter %}
{% endapi-method-body-parameters %}
{% endapi-method-request %}

{% api-method-response %}
{% api-method-response-example httpCode=200 %}
{% api-method-response-example-description %}
Returns true if updated.
{% endapi-method-response-example-description %}

```javascript
{
    "result": true
}
```
{% endapi-method-response-example %}
{% endapi-method-response %}
{% endapi-method-spec %}
{% endapi-method %}

{% tabs %}
{% tab title=".NET" %}
```csharp
var client = new CodeMashClient(apiKey, projectId);
var membershipService = new CodeMashMembershipService(client);

var response = await membershipService.UpdateUserAsync(new UpdateUserRequest
{
    Id = Guid.Parse("{USER_ID}"),
    DisplayName = "Updated Name"
});
```
{% endtab %}
{% endtabs %}

{% api-method method="patch" host="https://api.codemash.io" path="/:version/membership/users/:id" %}
{% api-method-summary %}
Update user
{% endapi-method-summary %}

{% api-method-description %}
Updates user with given parameters. Only the provided values are updated. This request allows us to update user roles.
{% endapi-method-description %}

{% api-method-spec %}
{% api-method-request %}
{% api-method-path-parameters %}
{% api-method-parameter name="version" type="string" required=true %}
A version of the API endpoint.
{% endapi-method-parameter %}

{% api-method-parameter name="id" type="string" required=true %}
User's ID.
{% endapi-method-parameter %}
{% endapi-method-path-parameters %}

{% api-method-headers %}
{% api-method-parameter name="Authorization" type="string" required=true %}
Secret API key which belongs to your project or user. Not required if using cookies with a session ID.
{% endapi-method-parameter %}

{% api-method-parameter name="x-cm-projectid" type="string" required=true %}
Your project's ID. Can be passed as a query parameter.
{% endapi-method-parameter %}
{% endapi-method-headers %}

{% api-method-body-parameters %}
{% api-method-parameter name="unsubscribedNewsTags" type="array" required=false %}
Marketing email types to unsubscribe from. If value not provided then it's not updated. To delete, pass an empty array.
{% endapi-method-parameter %}

{% api-method-parameter name="subscribeToNews" type="boolean" required=false %}
Should user receive marketing emails? If value not provided then it's not updated.
{% endapi-method-parameter %}

{% api-method-parameter name="timeZone" type="string" required=false %}
Default user's timezone.
{% endapi-method-parameter %}

{% api-method-parameter name="language" type="string" required=false %}
Default user's language \(mainly for notifications\).
{% endapi-method-parameter %}

{% api-method-parameter name="displayName" type="string" required=false %}
User's display name.
{% endapi-method-parameter %}

{% api-method-parameter name="firstName" type="string" required=false %}
User's first name.
{% endapi-method-parameter %}

{% api-method-parameter name="lastName" type="string" required=false %}
User's last name.
{% endapi-method-parameter %}

{% api-method-parameter name="roles" type="array" required=false %}
Roles to set for a user.
{% endapi-method-parameter %}

{% api-method-parameter name="meta" type="string" required=false %}
User's meta details as JSON.
{% endapi-method-parameter %}
{% endapi-method-body-parameters %}
{% endapi-method-request %}

{% api-method-response %}
{% api-method-response-example httpCode=200 %}
{% api-method-response-example-description %}
Returns true if updated.
{% endapi-method-response-example-description %}

```javascript
{
    "result": true
}
```
{% endapi-method-response-example %}
{% endapi-method-response %}
{% endapi-method-spec %}
{% endapi-method %}

{% tabs %}
{% tab title=".NET" %}
```csharp
var client = new CodeMashClient(apiKey, projectId);
var membershipService = new CodeMashMembershipService(client);

var response = await membershipService.UpdateUserAsync(new UpdateUserRequest
{
    Id = Guid.Parse("{USER_ID}"),
    DisplayName = "Updated Name"
});
```
{% endtab %}

{% tab title="Node" %}
```

```
{% endtab %}
{% endtabs %}

{% api-method method="delete" host="https://api.codemash.io" path="/:version/membership/users/:id" %}
{% api-method-summary %}
Delete user
{% endapi-method-summary %}

{% api-method-description %}
Deletes a project user.
{% endapi-method-description %}

{% api-method-spec %}
{% api-method-request %}
{% api-method-path-parameters %}
{% api-method-parameter name="version" type="string" required=true %}
A version of the API endpoint.
{% endapi-method-parameter %}

{% api-method-parameter name="id" type="string" required=true %}
User's ID.
{% endapi-method-parameter %}
{% endapi-method-path-parameters %}

{% api-method-headers %}
{% api-method-parameter name="Authorization" type="string" required=true %}
Secret API key which belongs to your project or user. Not required if using cookies with a session ID.
{% endapi-method-parameter %}

{% api-method-parameter name="x-cm-projectid" type="string" required=true %}
Your project's ID. Can be passed as a query parameter.
{% endapi-method-parameter %}
{% endapi-method-headers %}
{% endapi-method-request %}

{% api-method-response %}
{% api-method-response-example httpCode=200 %}
{% api-method-response-example-description %}
Returns true if deleted.
{% endapi-method-response-example-description %}

```javascript
{
    "result": true
}
```
{% endapi-method-response-example %}
{% endapi-method-response %}
{% endapi-method-spec %}
{% endapi-method %}

{% tabs %}
{% tab title=".NET" %}
```csharp
var client = new CodeMashClient(apiKey, projectId);
var membershipService = new CodeMashMembershipService(client);

var reponse = await membershipService.DeleteUserAsync(new DeleteUserRequest
{
    Id = Guid.Parse("{USER_ID}"),
});
```
{% endtab %}

{% tab title="Node" %}
```

```
{% endtab %}
{% endtabs %}

{% api-method method="patch" host="https://api.codemash.io" path="/:version/membership/users/:id/block" %}
{% api-method-summary %}
Block user
{% endapi-method-summary %}

{% api-method-description %}
Blocks users from calling any authenticated requests.
{% endapi-method-description %}

{% api-method-spec %}
{% api-method-request %}
{% api-method-path-parameters %}
{% api-method-parameter name="version" type="string" required=true %}
A version of the API endpoint.
{% endapi-method-parameter %}

{% api-method-parameter name="id" type="string" required=true %}
User's ID.
{% endapi-method-parameter %}
{% endapi-method-path-parameters %}

{% api-method-headers %}
{% api-method-parameter name="Authorization" type="string" required=true %}
Secret API key which belongs to your project or user. Not required if using cookies with a session ID.
{% endapi-method-parameter %}

{% api-method-parameter name="x-cm-projectid" type="string" required=true %}
Your project's ID. Can be passed as a query parameter.
{% endapi-method-parameter %}
{% endapi-method-headers %}
{% endapi-method-request %}

{% api-method-response %}
{% api-method-response-example httpCode=200 %}
{% api-method-response-example-description %}
Returns true if blocked.
{% endapi-method-response-example-description %}

```javascript
{
    "result": true
}
```
{% endapi-method-response-example %}
{% endapi-method-response %}
{% endapi-method-spec %}
{% endapi-method %}

{% tabs %}
{% tab title=".NET" %}
```csharp
var client = new CodeMashClient(apiKey, projectId);
var membershipService = new CodeMashMembershipService(client);

var reponse = await membershipService.DeleteUserAsync(new DeleteUserRequest
{
    Id = Guid.Parse("{USER_ID}"),
});
```
{% endtab %}

{% tab title="Node" %}
```

```
{% endtab %}
{% endtabs %}

{% api-method method="patch" host="https://api.codemash.io" path="/:version/membership/users/:id/unblock" %}
{% api-method-summary %}
Unblock user
{% endapi-method-summary %}

{% api-method-description %}
Unblocks user allowing to call authenticated calls.
{% endapi-method-description %}

{% api-method-spec %}
{% api-method-request %}
{% api-method-path-parameters %}
{% api-method-parameter name="version" type="string" required=true %}
A version of the API endpoint.
{% endapi-method-parameter %}

{% api-method-parameter name="id" type="string" required=true %}
User's ID.
{% endapi-method-parameter %}
{% endapi-method-path-parameters %}

{% api-method-headers %}
{% api-method-parameter name="Authorization" type="string" required=true %}
Secret API key which belongs to your project or user. Not required if using cookies with a session ID.
{% endapi-method-parameter %}

{% api-method-parameter name="x-cm-projectid" type="string" required=true %}
Your project's ID. Can be passed as a query parameter.
{% endapi-method-parameter %}
{% endapi-method-headers %}
{% endapi-method-request %}

{% api-method-response %}
{% api-method-response-example httpCode=200 %}
{% api-method-response-example-description %}
Returns true if unblocked.
{% endapi-method-response-example-description %}

```javascript
{
    "result": true
}
```
{% endapi-method-response-example %}
{% endapi-method-response %}
{% endapi-method-spec %}
{% endapi-method %}

{% tabs %}
{% tab title=".NET" %}
```csharp
var client = new CodeMashClient(apiKey, projectId);
var membershipService = new CodeMashMembershipService(client);

var reponse = await membershipService.UnblockUserAsync(new UnblockUserRequest
{
    Id = Guid.Parse("{USER_ID}"),
});
```
{% endtab %}

{% tab title="Node" %}
```

```
{% endtab %}
{% endtabs %}

