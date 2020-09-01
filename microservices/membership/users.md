---
description: Overview of users management
---

# Users

Creating users allows you to make authenticated calls to your project resources. Every user is assigned permissions which controls access to various resources. You can register and manage users through the dashboard or using provided API methods.

## Types of users

The following are the types of users available for use:

* **System User** - created when a project is created. The user has all the permissions and can access all of the authenticated methods. Cannot be deleted.
* **Authenticated User** - a user registered from an application using [API](https://docs.codemash.io/sdks). 
* **Service User** - a user used for calling specific API services. Can be used as a system user with specific permissions.

## Users API methods

Exposed API user methods allow you to register and manage your users.

{% page-ref page="../../apis/membership-api/users-api.md" %}

