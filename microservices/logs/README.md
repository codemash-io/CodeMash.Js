---
description: Overview of logs service
---

# Logs Service

CodeMash **Logs** service logs all the requests and errors in your project. All the logs can be reached on the dashboard. In addition, you can create your custom logs from your own application.

To start using logs services and API methods you firstly need to enable logs service in your CodeMash dashboard.

Features included in logs service:

1. Logs - logs of various actions in your application.

## Using SDK

If you decide to use one of our provided SDK, the following code shows how to initialize logs service.

{% tabs %}
{% tab title=".NET" %}
```csharp
var projectId = Guid.Parse("{YOUR_PROJECT_ID}");
var apiKey = "{YOUR_SECRET_KEY}";

var client = new CodeMashClient(apiKey, projectId);
var logsService = new CodeMashLogsService(client);
```
{% endtab %}

{% tab title="Node" %}
```

```
{% endtab %}

{% tab title="PHP" %}
```php
use Codemash\CodemashClient;
use Codemash\CodemashLog;

class CodemashService
{
    protected CodemashLog $codemashLog;

    public function __construct()
    {
        $secretKey = '{YOUR_SECRET_KEY}';
        $projectId = '{YOUR_PROJECT_ID}';

        $client = new CodemashClient($secretKey, $projectId);
        $this->codemashLog = new CodemashLog($client);
    }

    
}
```
{% endtab %}
{% endtabs %}

## Example

The following are examples of logs SDK using different languages and frameworks.

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
            var logsService = new CodeMashLogsService(client);

            // 4. Call an API method
            logsService.CreateLog(new CreateLogRequest
            {
                Message = "Custom log",
                Level = "Information"
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
use Codemash\CodemashLog;

class CodemashService
{
    protected CodemashLog $codemashLog;

    public function __construct()
    {
        $secretKey = '{YOUR_SECRET_KEY}';
        $projectId = '{YOUR_PROJECT_ID}';

        $client = new CodemashClient($secretKey, $projectId);
        $this->codemashLog = new CodemashLog($client);
    }

    public function log() 
    {
        $responseData = $this->codemashLog->create([
            'message' => 'Custom log',
            'level' => 'Warning'
        ]);
    }
    
}
```
{% endtab %}
{% endtabs %}

## Working with Logs Service

The following links explore the usage of logs service:

{% page-ref page="logs-management.md" %}

