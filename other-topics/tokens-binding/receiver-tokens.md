---
description: Overview of recipient tokens
---

# Receiver Tokens

Receiver tokens are specific tokens of the user who receives an email or push notification. The receiver can only be a project user.

The tokens will be by default injected into your templates. The following shows what these tokens are, where can they be used, and who is the receiver in every scenario.

## Tokens

| Token | Description |
| :--- | :--- |
| Receiver.User.FirstName | First name of the receiver. |
| Receiver.User.LastName | Last name of the receiver. |
| Receiver.User.FullName | A combination of first name and last name. |
| Receiver.User.Email | Email of receiver user. |
| Receiver.User.DisplayName | Display name of the receiver. |

## Where are they used

These tokens can be used in the following places:

* Email templates
* Notification templates

In triggers, you can select different token names for these token values.

## How the receiver is selected

In general, the receiver is always the one who receives an email or push notification. Receiver will only be used if it can be mapped to a user. That means, that if receiver is an email address and not a user, role then they won't be injected.

* Database email, notification triggers - receiver is the one who receives an email or notification.
* User email, notification triggers - receiver is the one who has been registered, invited, updated, verified or deleted.
* Welcome email - receiver is the one who has been registered.
* File email, notification triggers - receiver is the one who receives an email or notification.
* Sending email, pushing notifications - receiver is the one who receives an email or notification.

