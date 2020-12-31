---
description: >-
  Regarding your license you own on CodeMash, you can create from one to many
  projects on CodeMash. Each project can represent either a single mobile
  application or a web app or even both of them.
---

# About Projects

The first thing to do before you can start using CodeMash services - creating a new project. The project is a collective of resources used for a specific application. For every new application, we recommend creating a new project.

The project, just like other microservices, exposes some of the [API](https://docs.codemash.io/sdks) methods to use and it's own [SDK](https://docs.codemash.io/sdks) methods.

## Using SDK

If you decide to use one of [our provided SDK](https://docs.codemash.io/sdks), the following code shows how to initialize the project service.

{% tabs %}
{% tab title=".NET" %}
```csharp
var projectId = Guid.Parse("{YOUR_PROJECT_ID}");
var apiKey = "{YOUR_SECRET_KEY}";

var client = new CodeMashClient(apiKey, projectId);
var projectService = new CodeMashProjectService(client);
```
{% endtab %}

{% tab title="Node" %}
```

```
{% endtab %}
{% endtabs %}

## Example

The following are examples of project [SDK](https://docs.codemash.io/sdks) using different languages and frameworks.

{% tabs %}
{% tab title=".NET" %}
```csharp
using System;
using CodeMash.Client;
using CodeMash.Project.Services;
using CodeMash.Models.Entities;
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
            var projectService = new CodeMashProjectService(client);

            // 4. Call an API method
            var settings = projectService.GetProject(
                new GetProjectRequest()
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
{% endtabs %}

## Working with Project Service

The following links explore the usage of project service:

{% page-ref page="settings.md" %}

