---
description: Overview of triggers
---

# Triggers

Triggers are actions that are executed after a certain action was done. For example, inserting a record into a collection might trigger an action to send an email message.

Triggers can be used with **collections**, **users,** and **files**.

## Trigger actions

The trigger can invoke one of the following actions.

1. Send an email
2. Send a push notification
3. Execute a function

### Sending an email

You can send emails to specific email addresses or your project users. Token binding in your email templates works the same way as sending emails normally. More about email templates and token binding check the following links.

{% page-ref page="../microservices/email-notifications/templates.md" %}

{% page-ref page="tokens-binding/" %}

### Sending a push notification

Just like with emails, this works the same way - you can send mobile notifications to your project users. Token binding in your push notifications works the same way as sending notifications normally. More about notification templates and token binding check the following links.

{% page-ref page="../microservices/push-notifications/push-templates.md" %}

{% page-ref page="tokens-binding/" %}

### Executing a function

This type of trigger action will call one of your functions defined in **code** module. 



