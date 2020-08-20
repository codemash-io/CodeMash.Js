---
description: Overview of users management
---

# Users

Creating users allows you to make authenticated calls to your project resources. Every user is assigned permissions which controls access to various resources. You can register and manage users through the dashboard or using provided API methods.

## Types of users

The following are the types of users available for use:

* **System User** - created when project is created. User has all the permissions and can access all of the authenticated methods. Cannot be deleted.
* **Authenticated User** - a user registered on the system holding user data and allowing user to access allowed resources.
* **Service User** - a user used for calling specific API services. Can be used like a system user with specific permissions.

## Users API methods

Exposed API user methods allows you to register and manage your users.

{% page-ref page="../../apis/membership-api/users-api.md" %}

