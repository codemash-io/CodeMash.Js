---
description: Overview of authentication API methods
---

# Authentication API

{% api-method method="post" host="https://api.codemash.io" path="/:version/auth/credentials" %}
{% api-method-summary %}
Credentials authentication
{% endapi-method-summary %}

{% api-method-description %}
Authenticate a user using an email password pair. Also supports **GET** method with body parameters in a query string.
{% endapi-method-description %}

{% api-method-spec %}
{% api-method-request %}
{% api-method-path-parameters %}
{% api-method-parameter name="version" type="string" required=true %}
A version of the API endpoint.
{% endapi-method-parameter %}
{% endapi-method-path-parameters %}

{% api-method-headers %}
{% api-method-parameter name="x-cm-projectid" type="string" required=true %}
Your project's ID. Can be passed as a query parameter.
{% endapi-method-parameter %}
{% endapi-method-headers %}

{% api-method-body-parameters %}
{% api-method-parameter name="password" type="string" required=true %}
User's login password.
{% endapi-method-parameter %}

{% api-method-parameter name="userName" type="string" required=true %}
User's login e-mail address.
{% endapi-method-parameter %}
{% endapi-method-body-parameters %}
{% endapi-method-request %}

{% api-method-response %}
{% api-method-response-example httpCode=200 %}
{% api-method-response-example-description %}

{% endapi-method-response-example-description %}

```

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

await membershipService.AuthenticateCredentialsAsync(
    "test@email.com", 
    "password123"
);
```
{% endtab %}

{% tab title="Node" %}
```csharp

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
        $responseData = $codemashAuth->authenticate([
        	'userName' => 'test@email.com',
        	'password' => 'password123',
        ]);
    }
}
```
{% endtab %}
{% endtabs %}

{% api-method method="post" host="https://api.codemash.io" path="/{version}/auth/aad" %}
{% api-method-summary %}
Microsoft authentication
{% endapi-method-summary %}

{% api-method-description %}
Authenticate a user using Microsoft. Also supports **GET** method with body parameters in a query string.
{% endapi-method-description %}

{% api-method-spec %}
{% api-method-request %}
{% api-method-path-parameters %}
{% api-method-parameter name="version" type="string" required=true %}
A version of the API endpoint.
{% endapi-method-parameter %}
{% endapi-method-path-parameters %}

{% api-method-headers %}
{% api-method-parameter name="x-cm-projectid" type="string" required=true %}
Your project's ID. Can be passed as a query parameter.
{% endapi-method-parameter %}
{% endapi-method-headers %}

{% api-method-body-parameters %}
{% api-method-parameter name="mode" type="string" required=false %}
Mode to use for authentication. If not passed, will use the default.
{% endapi-method-parameter %}
{% endapi-method-body-parameters %}
{% endapi-method-request %}

{% api-method-response %}
{% api-method-response-example httpCode=200 %}
{% api-method-response-example-description %}

{% endapi-method-response-example-description %}

```

```
{% endapi-method-response-example %}
{% endapi-method-response %}
{% endapi-method-spec %}
{% endapi-method %}

{% api-method method="post" host="https://api.codemash.io" path="/auth/logout" %}
{% api-method-summary %}
Logout
{% endapi-method-summary %}

{% api-method-description %}
Logout a user using any of the authentication providers.
{% endapi-method-description %}

{% api-method-spec %}
{% api-method-request %}
{% api-method-path-parameters %}
{% api-method-parameter name="" type="string" required=false %}

{% endapi-method-parameter %}
{% endapi-method-path-parameters %}
{% endapi-method-request %}

{% api-method-response %}
{% api-method-response-example httpCode=200 %}
{% api-method-response-example-description %}

{% endapi-method-response-example-description %}

```

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

await membershipService.LogoutAsync("{BEARER_TOKEN}");
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

    public function logout()
    {
        $responseData = $this->codemashAuth->logout([
        	'bearerToken' => '{BEARER_TOKEN},
        ]);
    }
}
```
{% endtab %}
{% endtabs %}

{% api-method method="post" host="https://api.codemash.io" path="/:version/auth" %}
{% api-method-summary %}
Check authentication
{% endapi-method-summary %}

{% api-method-description %}
Check if the user is authenticated \(if authorization token is valid\). Also, supports **GET** method.
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
{% endapi-method-request %}

{% api-method-response %}
{% api-method-response-example httpCode=200 %}
{% api-method-response-example-description %}

{% endapi-method-response-example-description %}

```

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

await membershipService.AuthenticateCredentialsAsync(
    "test@email.com", 
    "password123"
);
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

    public function isAuthenticated()
    {
        $responseData = $this->codemashAuth->checkAuth();
    }
}
```
{% endtab %}
{% endtabs %}

