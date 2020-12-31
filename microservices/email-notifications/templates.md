---
description: Overview of email templates
---

# Email Templates

Email templates let you define the structure of your email messages.

## Creating a template

Navigate to the email templates list by selecting on **Email Module** from the left menu bar and then selecting **Templates** from a sub-menu. Then press **Add New**.

![New email template page with example data](../../.gitbook/assets/email_template_1.png)

Here you provide a template name which is essentially a way to identify templates for yourself. Also, a subject is a subject for an email message and a body that is a body for an email message. Additionally, you can provide code and email account to use for sending this template.

{% hint style="info" %}
Body mode can be swapped between the source \(HTML\) and editor modes. Shown above is an editor mode that displays how your message will look to a recipient. Change to source mode to edit HTML code.

Also, everything written in source mode is considered to be inside HTML &lt;body&gt; tags. Though you can still use &lt;style&gt; tags.
{% endhint %}

## Tokens

To use dynamic data in your templates you can use a **@Model** object. This object will be injected with all of your tokens passed in send request and additionally some predefined tokens.

In the example above there is a token `Project.Name` used in multiple places. It is a predefined token that corresponds to your project's name. Before an email is sent, this value will be replaced with your project's name and instead `Welcome to @Model.Project.Name!` recipient will see something like `Welcome to CodeMash!` .

Writing tokens is supported in:

* Subject
* Code
* Body

If you wish to write some logic, you can do that in **Code** block. All the code you write in this block will be attached to your body, so you can use variables defined in the code block inside your body. Although all of this code can also be written inside the body block, it was just separated into distinct code from body.

#### Example of a code block

```javascript
@{
    var goodDecision = "Bad Decision";
    if (@Model.Favourite.Color == "purple") {
        goodDecision = "Good Decision";
    }
}
```

#### Example of the body block

```markup
This is a token directly injected into body: @Model.Direct.Token
This is a token from code block: @goodDecision

You can also write code in your body block:
@{
    var bodyVariable = @Model.Direct.Token;
}

And then use it just like variables from code: @bodyVariable
```

{% hint style="warning" %}
Tokens use **Razor** syntax. So your subject, code, and body blocks must be a valid razor code.
{% endhint %}

More about how to use tokens follow the link below.

{% page-ref page="../../other-topics/tokens-binding/" %}

There are some already predefined functions that can be used to ease the use of tokens.

{% page-ref page="../../other-topics/tokens-binding/template-functions.md" %}

## Predefined functions

There are some built-in functions that can be used to ease the use of tokens.

