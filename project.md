---
description: Overview of projects
---

# About Projects

The first thing to do before you can start using CodeMash services - creating a new project. Project is a collective of resources used for a specific application. For every new application we recommend creating a new project.

Project, just like other microservices, exposes some of the API methods to use and it's own SDK methods.

## Using SDK

If you decide to use one of our provided SDK, the following code shows how to initialize project service.

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

The following are the examples of project SDK using different languages and frameworks.

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

