---
description: Overview of initiator tokens
---

# Initiator Tokens

Initiator tokens are specific tokens of the user who has triggered action. The initiator can be either a project user or a dashboard user.

The tokens will be by default injected into your templates. The following shows what these tokens are, where can they be used, and who is the initiator in every scenario.

## Tokens

| Token | Description |
| :--- | :--- |
| Initiator.User.FirstName | First name of initiator user. |
| Initiator.User.LastName | Last name of initiator user. |
| Initiator.User.FullName | A combination of first name and last name. |
| Initiator.User.Email | Email of initiator user. |
| Initiator.User.DisplayName | Display name of initiator user. |

## Where are they used

These tokens can be used in the following places:

* Email templates
* Notification templates

In triggers, you can select different token names for these token values.

## How initiator is selected

In general, the initiator is always the one who triggers some kind of action.

* Database email, notification triggers - initiator is the one who inserts, updates, or deletes a record.
* User email, notification triggers - initiator is the one who registers, invites, updates, or deletes the user.  On verified trigger does not have an initiator.
* Welcome email - initiator is the one who registers the user.
* File email, notification triggers - initiator is the one who stores or deletes a file.
* Sending an email, push notifications - initiator is the one who creates this send request.

