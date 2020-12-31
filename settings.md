---
description: Overview of project API methods
---

# Project API

{% api-method method="get" host="https://api.codemash.io" path="/:version/projects/:projectId" %}
{% api-method-summary %}
Get Project Data
{% endapi-method-summary %}

{% api-method-description %}
Gets data of a particular project.
{% endapi-method-description %}

{% api-method-spec %}
{% api-method-request %}
{% api-method-path-parameters %}
{% api-method-parameter name="version" type="string" required=true %}
The version of the API endpoint.
{% endapi-method-parameter %}

{% api-method-parameter name="projectId" type="string" required=true %}
Your project's ID.
{% endapi-method-parameter %}
{% endapi-method-path-parameters %}

{% api-method-headers %}
{% api-method-parameter name="Authorization" type="string" required=true %}
Secret API key which belongs to your project or user. Not required if using cookies with a session ID.
{% endapi-method-parameter %}
{% endapi-method-headers %}
{% endapi-method-request %}

{% api-method-response %}
{% api-method-response-example httpCode=200 %}
{% api-method-response-example-description %}
Returns the data of a project.
{% endapi-method-response-example-description %}

```javascript
{
    "result": {
        "id": "aa8f9298-7a4f-4b44-8f90-b80d150d946f",
        "tokens": [
            {
                "key": "key 1",
                "value": "value 1",
            }
        ],
        "languages": [
            "en"
        ],
        "defaultLanguage": "en",
        "defaultTimeZone": "Etc/UTC",
        "name": "Example Project",
        "description": "An example project",
        "slugifiedName": "example-project"
    }
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
var projectService = new CodeMashProjectService(client);

var settings = await projectService.GetProjectAsync(new GetProjectRequest());
```

{% hint style="warning" %}
If you are using a client provided by [SDK](https://docs.codemash.io/sdks), the project ID will be set from the client. Otherwise, specify the project ID in the request object.
{% endhint %}
{% endtab %}

{% tab title="Node" %}
```

```
{% endtab %}
{% endtabs %}

