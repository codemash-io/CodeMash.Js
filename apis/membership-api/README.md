---
description: Overview of membership API methods
---

# Membership API

CodeMash **Membership** service provides many operations for user management like user authentication and authorization.

Membership service is enabled automatically when you create a project. This means you can start using membership services and API methods right after you create a project.

Features included in membership service:

1. Users - users of your application.
2. Authentication and authorization - managing user session and permissions.

## Using SDK

If you decide to use one of our provided SDK, the following code shows how to initialize membership service.

{% tabs %}
{% tab title=".NET" %}
```csharp
var projectId = Guid.Parse("{YOUR_PROJECT_ID}");
var apiKey = "{YOUR_SECRET_KEY}";

var client = new CodeMashClient(apiKey, projectId);
var membershipService = new CodeMashMembershipService(client);
```
{% endtab %}

{% tab title="Node" %}
```

```
{% endtab %}
{% endtabs %}

## Example

The following are examples of membership SDK using different languages and frameworks.

{% tabs %}
{% tab title=".NET" %}
```csharp
using System;
using CodeMash.Client;
using CodeMash.Membership.Services;
using Isidos.CodeMash.ServiceContracts;

namespace ConsoleApplication
{
    class Program
    {
        static void Main(string[] args)
        {
            // 1. Get your Project ID and Secret Key
            var projectId = Guid.Parse("{YOUR_PROJECT_ID}");
            var apiKey = "{YOUR_SECRET_KEY}";

            // 2. Create a general client for API calls
            var client = new CodeMashClient(apiKey, projectId);
            
            // 3. Create a service object
            var membershipService = new CodeMashMembershipService(client);

            // 4. Call an API method
            membershipService.RegisterUser(new RegisterUserRequest
            {
                Email = "test@email.com",
                Password = "password123"
            });
        }
    }
}
```
{% endtab %}

{% tab title="Node" %}
```

```
{% endtab %}
{% endtabs %}

