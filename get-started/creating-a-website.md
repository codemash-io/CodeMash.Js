# Creating a website

If you are creating a website make sure to check the information provided below.

## CORS mechanism

{% hint style="warning" %}
**Important.** Without doing this, requests from the browser will be blocked.
{% endhint %}

In case you are making requests to CodeMash from a browser, you will need to setup allowed origins in your project settings.

### Setting up allowed origins

* Go to your project settings
* Find a setting called **Allowed origins**.
* Add all allowed domains separated by comma \(,\).

![Example of CORS origins setup](../.gitbook/assets/cors-allowed-domains.png)

