---
description: Overview of emails API methods
---

# Emails API

{% api-method method="post" host="https://api.codemash.io" path="/:version/notifications/email" %}
{% api-method-summary %}
Send Email
{% endapi-method-summary %}

{% api-method-description %}
Send an email message.
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
{% api-method-parameter name="templateId" type="string" required=true %}
The ID of the email template to use.
{% endapi-method-parameter %}

{% api-method-parameter name="cultureCode" type="string" required=false %}
Language code. If you have more than one language set in your project you can use this parameter to specify which language template to use.
{% endapi-method-parameter %}

{% api-method-parameter name="forceRequestLanguage" type="string" required=false %}
If the recipient user has a language set, user language is used to select a template language. This forces us to use cultureCode parameter instead of user's language.
{% endapi-method-parameter %}

{% api-method-parameter name="roles" type="array" required=false %}
Roles of users to be set as recipients.
{% endapi-method-parameter %}

{% api-method-parameter name="emails" type="array" required=false %}
An array of emails to be set as recipients.
{% endapi-method-parameter %}

{% api-method-parameter name="users" type="array" required=false %}
An array of user IDs to be set as recipients.
{% endapi-method-parameter %}

{% api-method-parameter name="ccEmails" type="array" required=false %}
An array of emails to be set as CC recipients.
{% endapi-method-parameter %}

{% api-method-parameter name="ccUsers" type="array" required=false %}
An array of user IDs to be set as CC recipients.
{% endapi-method-parameter %}

{% api-method-parameter name="bccEmails" type="array" required=false %}
An array of emails to be set as BCC recipients.
{% endapi-method-parameter %}

{% api-method-parameter name="bccUsers" type="array" required=false %}
An array of user IDs to be set as BCC recipients.
{% endapi-method-parameter %}

{% api-method-parameter name="tokens" type="object" required=false %}
Key-value pair \(string: string\) object of custom tokens.
{% endapi-method-parameter %}

{% api-method-parameter name="postpone" type="integer" required=false %}
Amount of milliseconds to postpone sending the email.
{% endapi-method-parameter %}

{% api-method-parameter name="respectTimeZone" type="boolean" required=false %}
If creating a postponed email and the recipient of an email has a timezone set, then postpones according to the recipient's timezone.
{% endapi-method-parameter %}
{% endapi-method-body-parameters %}
{% endapi-method-request %}

{% api-method-response %}
{% api-method-response-example httpCode=200 %}
{% api-method-response-example-description %}
Returns true if request was successfully processed.
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
var emailService = new CodeMashEmailService(client);

var response = await emailService.SendEmailAsync(new SendEmailRequest
{
    TemplateId = Guid.Parse("{TEMPLATE_ID}"),
    Emails = new [] { "test@email.com" }
});
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

{% hint style="info" %}
More about templates and template languages [here](templates.md).
{% endhint %}

