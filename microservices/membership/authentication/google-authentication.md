---
description: Overview of Google authentication
---

# Google Authentication

Authenticate your users using Google service. This will allow users to connect to your CodeMash application using their Google accounts.

## 1. Creating Google project

You will need a Google project to connect to CodeMash.

* Go to [Google developers console](https://console.developers.google.com) and login with your Google account.
* Once logged in, create a new project.
* After the project is created, navigate to the **OAuth consent screen** in **APIs & Services** sub-menu.
* Configure the consent screen. Fill all the details based on your application. Add the scopes if you going to use Google APIs. If you add more sensitive scopes and make your application public, you will have to submit your app for verification. You can still develop your app without verification, but you will see an "unverified app" screen during authentication.

Once the consent screen is created, go to the **Credentials** page.

* In the credentials page click in **Create Credentials** and select **OAuth client ID**.
* For application type, choose **Web application**.
* Under **Authorized redirect URIs** add `https://api.codemash.io/auth/google`. If you plan on using CodeMash forms, also add this: `https://hub.codemash.io/shared/forms/auth/google`.
* Now you will get a **Client ID** and **Client Secret**.

## 2. Connecting to CodeMash

Once you have your project, you can connect your AAD application to CodeMash.

* Navigate to your **Project &gt; Membership &gt; Settings**. Here select **Google**.
* A modal will show. In here fill required fields:
  * **Client ID** - your created Google OAuth client ID.
  * **Client Secret** - your created Google OAuth client secret.
* Other recommended fields to fill out:
  * **Callback URL** - after a successful login, the user will be redirected to this URL.
  * **Logout URL** - after successful logout, the user will be redirected to this URL.
  * **Failure URL** - after failed login, the user will be redirected to this URL.

After you have configured the fields above, you can also configure **scope** which will allow calling Google API to work with your users' Google details. More about this in the next section.

## 3. Google API access

To work with Google resources using Google API you will need to setup access scope. More on that check a link below.

{% page-ref page="../../code/codemash-functions/google-functions/" %}

By default basic scope to get the user's profile is added, so if you are not planning on using any other Google resources, you can skip this section.

## 4. Authentication process

To start the authentication process you want to do one of the following things:

* Redirect to `https://api.codemash.io/{version}/auth/google` from your client app.
* Make an [API](https://docs.codemash.io/sdks) call to the same address and you will receive the details to make redirection yourself.

Either way, users will have to go through Google's authentication flow. Once the user has been granted permission, they will be redirected to your provided callback URL in CodeMash settings. The user's access token will also be included in the fragment part of the URL.

{% hint style="info" %}
User in CodeMash will be created on the first successful login. Proceeding logins will reset the user's access tokens.
{% endhint %}

