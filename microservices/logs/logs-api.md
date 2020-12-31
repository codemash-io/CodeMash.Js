---
description: Overview of logs API methods
---

# Logs API

{% api-method method="post" host="https://api.codemash.io" path="/:version/logs" %}
{% api-method-summary %}
Create Log
{% endapi-method-summary %}

{% api-method-description %}
Creates a custom log.
{% endapi-method-description %}

{% api-method-spec %}
{% api-method-request %}
{% api-method-path-parameters %}
{% api-method-parameter name="version" type="string" required=true %}
The version of the API endpoint. Current latest **v1**.
{% endapi-method-parameter %}
{% endapi-method-path-parameters %}

{% api-method-headers %}
{% api-method-parameter name="Authorization" type="string" required=true %}
User's bearer token.
{% endapi-method-parameter %}

{% api-method-parameter name="x-cm-projectid" type="string" required=true %}
Your project's ID. Can be passed as a query parameter.
{% endapi-method-parameter %}
{% endapi-method-headers %}

{% api-method-body-parameters %}
{% api-method-parameter name="message" type="string" required=true %}
The message of the log.
{% endapi-method-parameter %}

{% api-method-parameter name="items" type="object" required=false %}
Key-value pair \(string: string\) object of custom items.
{% endapi-method-parameter %}

{% api-method-parameter name="level" type="string" required=false %}
Severity level of a log. Possible values: **Information**, **Warning**, **Error**.
{% endapi-method-parameter %}
{% endapi-method-body-parameters %}
{% endapi-method-request %}

{% api-method-response %}
{% api-method-response-example httpCode=200 %}
{% api-method-response-example-description %}
Returns an ID of inserted log.
{% endapi-method-response-example-description %}

```javascript
{
    result: "{LOG_ID}"
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
var logsService = new CodeMashLogsService(client);

await logsService.CreateLogAsync(new CreateLogRequest
{
    Message = "Custom log",
    Level = "Information"
});
```
{% endtab %}

{% tab title="Node" %}
```

```
{% endtab %}
{% endtabs %}

