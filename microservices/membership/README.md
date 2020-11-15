---
description: Overview of membership service
---

# Membership

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

{% tab title="PHP" %}
```php
use Codemash\CodemashClient;
use Codemash\CodemashDb;

class CodemashService
{
    protected CodemashDb $codemashAuth;

    public function __construct()
    {
        $secretKey = '{YOUR_SECRET_KEY}';
        $projectId = '{YOUR_PROJECT_ID}';

        $client = new CodemashClient('{YOUR_SECRET_KEY}', '{YOUR_PROJECT_ID}');
        $codemashAuth = new CodemashAuth($client);
    }
}
```
{% endtab %}
{% endtabs %}

## Example

The following are examples of membership [SDK](https://docs.codemash.io/sdks) using different languages and frameworks.

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

{% tab title="PHP" %}
```php
use Codemash\CodemashClient;
use Codemash\CodemashAuth;

class CodemashService
{
    protected CodemashAuth $codemashAuth;

    public function __construct()
    {
        $secretKey = '{YOUR_SECRET_KEY}';
        $projectId = '{YOUR_PROJECT_ID}';

        $client = new CodemashClient($secretKey, $projectId);
        $this->codemashAuth = new CodemashAuth($client);
    }

    public function login()
    {
        $responseData = $this->codemashAuth->authenticate([
        	'userName' => 'test@email.com',
        	'password' => 'password123',
        ]);
    }
}
```
{% endtab %}
{% endtabs %}

## Working with Membership Service

The following links explore the usage of membership service:

{% page-ref page="users.md" %}

{% page-ref page="authentication/" %}

{% page-ref page="authorization.md" %}

