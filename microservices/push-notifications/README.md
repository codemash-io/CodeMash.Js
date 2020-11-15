# Push Notifications

CodeMash **Push Notifications** service allows you to push mobile notifications to your users. All notifications queuing and management is accessible through the dashboard. Using API methods you can register devices, push messages, and more.

To start using the push notifications service and it's API methods, you firstly need to enable push notifications service in your CodeMash dashboard.

## Using SDK

If you decide to use one of our provided SDK, the following code shows how to initialize the notifications service.

{% tabs %}
{% tab title=".NET" %}
```csharp
var projectId = Guid.Parse("{YOUR_PROJECT_ID}");
var apiKey = "{YOUR_SECRET_KEY}";

var client = new CodeMashClient(apiKey, projectId);
var pushService = new CodeMashPushService(client);
```
{% endtab %}

{% tab title="Node" %}
```

```
{% endtab %}

{% tab title="PHP" %}
```php
use Codemash\CodemashClient;
use Codemash\CodemashPushNotification;

class CodemashService
{
    protected CodemashPushNotification $codemashPushNotification;

    public function __construct()
    {
        $secretKey = '{YOUR_SECRET_KEY}';
        $projectId = '{YOUR_PROJECT_ID}';

        $client = new CodemashClient($secretKey, $projectId);
        $codemashPushNotification = new CodemashPushNotification($client);
    }
}
```
{% endtab %}
{% endtabs %}

## Example

The following are examples of push notifications SDK using different languages and frameworks.

{% tabs %}
{% tab title=".NET" %}
```csharp
using System;
using CodeMash.Client;
using CodeMash.Notifications.Push.Services;
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
            var pushService = new CodeMashPushService(client);

            // 4. Call an API method
            var response = pushService.SendPushNotification(
                new SendPushNotificationRequest
                {
                    TemplateId = Guid.Parse("{TEMPLATE_ID}"),
                    Users = new List<Guid> { Guid.Parse("{USER_ID}") }
                }
            );
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
use Codemash\CodemashPushNotification;

class CodemashService
{
    protected CodemashPushNotification $codemashPushNotification;

    public function __construct()
    {
        $secretKey = '{YOUR_SECRET_KEY}';
        $projectId = '{YOUR_PROJECT_ID}';

        $client = new CodemashClient($secretKey, $projectId);
        $codemashPushNotification = new CodemashPushNotification($client);
    }
    
    public function sendPushNotification()
    {
        $responseData = $this->codemashPushNotification->sendNotification([
            'templateId' => '{TEMPLATE_ID}',
            'users' => [
                '{USER_ID}',
                '{USER_ID}',
                '{USER_ID}',
            ],
        ]);
    }
    
}
```
{% endtab %}
{% endtabs %}

## Working with Push Service

The following links explore the usage of push notifications service:

{% page-ref page="notifications.md" %}

