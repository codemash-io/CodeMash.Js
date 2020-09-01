# Tokens Binding

Tokens are key-value pairs that can be used for static and dynamic data purposes. Mainly you want to use tokens for injecting values into an email or push notification templates. For template parsing, we are using **Razor** engine which has its specific syntax \(for a full syntax overview click [here](https://docs.microsoft.com/en-us/aspnet/core/mvc/views/razor?view=aspnetcore-3.1)\).

## Types of tokens

There 4 types of tokens used in CodeMash. All of them are explained more in detail in the following pages.

{% page-ref page="project-tokens.md" %}

{% page-ref page="initiator-tokens.md" %}

{% page-ref page="receiver-tokens.md" %}

{% page-ref page="request-tokens.md" %}

There are also specific tokens that should be added to your templates to support some of the operations. These tokens can be found on the following page.

{% page-ref page="operation-based-tokens.md" %}

## Writing tokens in templates

For your tokens to be successfully injected you need to add **@Model** before each of your token so that it would look something like this:

```aspnet
Welcome to project @Model.Project.Name.
```

That is because all of your tokens are added under the object **Model** and symbol **@** is needed for Razor engine to understand this as a user variable. Unlike Razor syntax where **@** symbol doesn't need to be added at certain times, here it must be added at all times.

Templates can also contain other Razor syntax tools not only variables. The more complex example shown below:

```aspnet
Welcome to project @Model.Project.Name.

@{
   if (@Model.Receiver.User.FirstName == "John")
   {
       <p>Hello John</p>
   }
}

<p style="color: @Model.Colour.Red">Thanks for registering to a project</p>
```

There are predefined functions to ease the use of tokens.

{% page-ref page="template-functions.md" %}

## Injection specifics

When CodeMash injects token values into your templates, it might do so in an unexpected way. The following points try to explain some of that unexpected behavior. 

* If one token is **Custom.Token** and another token is **Custom.Token.Value**, the first token will not be injected because the second token makes the first token to become the object without its own value. So in this case, the first token needs to be renamed. For example, it could be **Custom.Token.Value1** or **Custom.Token1**.
* Types of your basic token values will be automatically adjusted, that means, if your string value can be parsed into integer, bool, float, then their types will be changed. For example, if you pass a token with a value "4" \(quotes indicates a string\) then in the template it will be of type integer \(parsed from a string\).

