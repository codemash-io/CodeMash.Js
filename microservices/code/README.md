# Code

CodeMash **Code** service allows to add your own custom functions or CodeMash provided functions which can later be used in various triggers, scheduled tasks or called through API.

To start using Code API you firstly need to enable code service in your CodeMash dashboard.

Features included in code service:

1. Providers - ability to add your own functions from external providers.
2. Functions - executing your own custom pieces of code.
3. CodeMash functions - using CodeMash implemented functions.

## Using SDK

If you decide to use one of our provided SDK, the following code shows how to initialize code service.

{% tabs %}
{% tab title=".NET" %}
```csharp
var projectId = Guid.Parse("{YOUR_PROJECT_ID}");
var apiKey = "{YOUR_SECRET_KEY}";

var client = new CodeMashClient(apiKey, projectId);
var codeService = new CodeMashCodeService(client);
```
{% endtab %}

{% tab title="Node" %}
```

```
{% endtab %}
{% endtabs %}

## Example

The following are the examples of code SDK using different languages and frameworks.

{% tabs %}
{% tab title=".NET" %}
```csharp
using System;
using CodeMash.Client;
using CodeMash.Code.Services;
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
            var codeService = new CodeMashCodeService(client);

            // 4. Call an API method
            codeService.ExecuteFunction(new ExecuteFunctionRequest
            {
                Id = Guid.Parse("{YOUR_FUNCTION_ID}")
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

## Working with Code Service

The following links explore the usage of code service:

{% page-ref page="accounts/" %}

{% page-ref page="functions/" %}

{% page-ref page="codemash-functions/" %}
