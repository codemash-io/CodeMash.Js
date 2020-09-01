---
description: Overview of Microsoft authentication
---

# Microsoft Authentication

Authenticate your users using Microsoft Azure Active Directory service. This will allow users to connect to your CodeMash application using their Microsoft accounts.

## 1. Creating AAD application

You will need an Azure Active Directory application to connect to CodeMash. A full Microsoft tutorial on how to do that can be found [here](https://docs.microsoft.com/en-us/graph/auth-register-app-v2).

{% hint style="warning" %}
One important thing when creating AAD application, you will have to set **redirect URI** to specific CodeMash provided endpoint - `https://api.codemash.io/auth/aad`.
{% endhint %}

Once you have created your app, go to **Certificates & secrets** from a sidebar menu, and create a client secret.

## 2. Connecting to CodeMash

Once you have your app, you can connect your AAD application to CodeMash.

* Navigate to your **Project &gt; Membership &gt; Settings**. Here select **Microsoft**.
* A modal will show. In here fill required fields:
  * **Client ID** - your created AAD application ID.
  * **Client Secret** - your created AAD application client secret.
* Other recommended fields to fill out:
  * **Tenant ID** - used to control who can sign into the application. Can be one of the following - `common`,  `organizations`,  `consumers` or some tenant ID. If not provided, will use `common`. Property is **required** if using a single-tenant app. More about tenant type read [here](https://docs.microsoft.com/en-us/azure/active-directory/develop/active-directory-v2-protocols#endpoints).
  * **Callback URL** - after successful login, the user will be redirected to this URL.
  * **Logout URL** - after successful logout, the user will be redirected to this URL.
  * **Failure URL** - after failed login, the user will be redirected to this URL.

After you have configured the fields above, you can also configure **scope** which will allow calling Microsoft Graph API to work with your users' Microsoft details. More about this in the next section.

## 3. Microsoft API access

To work with Microsoft resources using Microsoft Graph API you will need to setup access scope. More on that check a link below.

{% page-ref page="../../code/codemash-functions/microsoft-functions/" %}

By default basic scope to get the user's profile is added, so if you are not planning on using any other Microsoft resources, you can skip this section.

## 4. Authentication process

To start the authentication process you want to do one of the following things:

* Redirect to `https://api.codemash.io/{version}/auth/aad` from your client app.
* Make an [API](https://docs.codemash.io/sdks) call to the same address and you will receive the details to make redirection yourself.

Either way, users will have to go through Microsoft's authentication flow. Once the user has been granted permission, they will be redirected to your provided callback URL in CodeMash settings. The user's access token will also be included in the fragment part of the URL.

{% hint style="info" %}
User in CodeMash will be created on the first successful login. Proceeding logins will reset user's access and refresh tokens.
{% endhint %}

## Authentication Errors

When user authentication fails, the user is redirected to the failure URL. Together with this URL, a query parameter`f`will be added with an error code. Some of these error codes are documented below.

| Error code | Description |
| :--- | :--- |
| access\_token\_failed | Received 400 \(Bad Request\) status code when trying to get an access token. |
| invalid\_client | Invalid provided client secret when trying to get access token. |
| invalid\_grant | The user or administrator has not consented to use the application. |
| user\_profile\_failed | Failed to get user profile data after successful login. |

## External references

Official documentation references on how to set up Azure Active Directory application.

* [Register Azure Active Directory App](https://docs.microsoft.com/en-us/graph/auth-register-app-v2)

