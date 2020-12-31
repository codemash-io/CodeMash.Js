# Email Notifications

CodeMash **Email Notifications** service allows you to send emails to your users and emails. All email queuing and management is accessible through the dashboard. You can also send emails through API.

To start using Email service and it's API methods, you firstly need to enable email service in your CodeMash dashboard.

Features included in email service:

1. Emails - sending emails to your users.

## Using SDK

If you decide to use one of our provided SDK, the following code shows how to initialize email service.

{% tabs %}
{% tab title=".NET" %}
```csharp
var projectId = Guid.Parse("{YOUR_PROJECT_ID}");
var apiKey = "{YOUR_SECRET_KEY}";

var client = new CodeMashClient(apiKey, projectId);
var emailService = new CodeMashEmailService(client);
```
{% endtab %}

{% tab title="Node" %}
```

```
{% endtab %}

{% tab title="PHP" %}
```php
use Codemash\CodemashClient;
use Codemash\CodemashEmail;

class CodemashService
{
    protected CodemashEmail $codemashEmail;

    public function __construct()
    {
        $secretKey = '{YOUR_SECRET_KEY}';
        $projectId = '{YOUR_PROJECT_ID}';

        $client = new CodemashClient($secretKey, $projectId);
        $this->codemashEmail = new CodemashEmail($client);
    }

}
```
{% endtab %}
{% endtabs %}

## Example

The following are examples of email notifications SDK using different languages and frameworks.

{% tabs %}
{% tab title=".NET" %}
```csharp
using System;
using CodeMash.Client;
using CodeMash.Notifications.Email.Services;
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
            var emailService = new CodeMashEmailService(client);

            // 4. Call an API method
            var response = emailService.SendEmail(new SendEmailRequest
            {
                TemplateId = Guid.Parse("{TEMPLATE_ID}"),
                Emails = new [] { "test@email.com" }
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
use Codemash\CodemashEmail;

class CodemashService
{
    protected CodemashEmail $codemashEmail;

    public function __construct()
    {
        $secretKey = '{YOUR_SECRET_KEY}';
        $projectId = '{YOUR_PROJECT_ID}';

        $client = new CodemashClient($secretKey, $projectId);
        $this->codemashEmail = new CodemashEmail($client);
    }

    public function sendEmail()
    {
        $responseData = $this->codemashEmail->send([
            'templateId' => '{TEMPLATE_ID}',
            'emails' => [
                'test1@example.com',
                'test2@example.com',
                'test3@example.com',
            ],
        ]);
    }
}
```
{% endtab %}
{% endtabs %}

## Working with Email Service

The following links explore the usage of email service:

{% page-ref page="emails.md" %}



