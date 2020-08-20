---
description: Setting up CodeMash API keys for accessing services
---

# Set up API keys

To make calls to our servers and access your resources you will need 2 keys - project ID and a secret key.

1. Login to [CodeMash dashboard](https://cloud.codemash.io).
2. Inside your CodeMash dashboard select or create a project. To create a project you will firstly need to verify your account through link sent to your provided email address.
3. Inside your project settings find settings called **Project ID** and **Secret key**.
   * For **Project ID** simply copy it.
   * For **Secret Key** press _**Regenerate**_ and then copy generated token. The token will not be accessible after you close it, you will need to regenerate it.

## Storing tokens

Your **Project ID** is not secret and can be visibly shown. Your **Secret key** should not be visible in public places as it would allow anyone to access your resources.

The following shows how to store tokens using different languages and frameworks.

{% tabs %}
{% tab title=".NET" %}
### Environment variables \(Recommended\)

To store your tokens in private use environment variables. This way you won't expose your secret key to public places.

### App Settings \(Not recommended\)

You can store your tokens in **appsettings.json** \(name can be different\) file which is in your base project folder. CodeMash SDK expects the following format:

```csharp
{
  "CodeMash" : {
    "ApiKey" : "{YOUR_SECRET_KEY}",
    "ProjectId" : "{YOUR_PROJECT_ID}"
  }
}
```
{% endtab %}

{% tab title="Node" %}
### **Environment variables \(Recommended\)**

To store your tokens in private use environment variables. This way you won't expose your secret key to public places.

### Initialise CodeMash

Import CodeMash library and put the code snippet provided below in the initialization state of an app:

```javascript
import { config } from 'codemash';

config.init({
      secretKey: '<YOUR_SECRET_KEY>',
      projectId: '<YOUR_PROJECT_ID>'
    }, process.env.NODE_ENV)
```
{% endtab %}
{% endtabs %}

