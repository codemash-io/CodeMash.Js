---
description: Overview of push notifications API methods
---

# Push Notifications API

{% api-method method="post" host="https://api.codemash.io" path="/:version/notifications/push" %}
{% api-method-summary %}
Send Push Notification
{% endapi-method-summary %}

{% api-method-description %}
Send a mobile notification message.
{% endapi-method-description %}

{% api-method-spec %}
{% api-method-request %}
{% api-method-path-parameters %}
{% api-method-parameter name="version" type="string" required=true %}
The version of the API endpoint. Current latest **v1**.
{% endapi-method-parameter %}
{% endapi-method-path-parameters %}

{% api-method-headers %}
{% api-method-parameter name="Authorization" type="string" required=true %}
Your project's secret key.
{% endapi-method-parameter %}

{% api-method-parameter name="x-cm-projectid" type="string" required=true %}
Your project's ID. Can be passed as a query parameter.
{% endapi-method-parameter %}
{% endapi-method-headers %}

{% api-method-body-parameters %}
{% api-method-parameter name="templateId" type="string" required=true %}
The ID of push notification template to use.
{% endapi-method-parameter %}

{% api-method-parameter name="roles" type="array" required=false %}
Roles of users to set as recipients.
{% endapi-method-parameter %}

{% api-method-parameter name="users" type="array" required=false %}
An array of user IDs to be set as recipients.
{% endapi-method-parameter %}

{% api-method-parameter name="devices" type="array" required=false %}
An array of device IDs to be set as recipients.
{% endapi-method-parameter %}

{% api-method-parameter name="isNonPushable" type="boolean" required=false %}
If set as true, creates a silent notification without popping up at the recipient's device.
{% endapi-method-parameter %}

{% api-method-parameter name="tokens" type="object" required=false %}
Key-value pair \(string: string\) object of custom tokens.
{% endapi-method-parameter %}

{% api-method-parameter name="postpone" type="integer" required=false %}
Amount of milliseconds to postpone sending the notification.
{% endapi-method-parameter %}

{% api-method-parameter name="respectTimeZone" type="boolean" required=false %}
If creating a postponed notification and the recipient's devices have timezone set, then postpones according to the device's timezone.
{% endapi-method-parameter %}
{% endapi-method-body-parameters %}
{% endapi-method-request %}

{% api-method-response %}
{% api-method-response-example httpCode=200 %}
{% api-method-response-example-description %}
Returns an ID of created notification group.
{% endapi-method-response-example-description %}

```javascript
{
    Result: ""
}
```
{% endapi-method-response-example %}

{% api-method-response-example httpCode=401 %}
{% api-method-response-example-description %}
Returns if the user does not have a valid permission to call this method.
{% endapi-method-response-example-description %}

```

```
{% endapi-method-response-example %}

{% api-method-response-example httpCode=500 %}
{% api-method-response-example-description %}

{% endapi-method-response-example-description %}

```

```
{% endapi-method-response-example %}
{% endapi-method-response %}
{% endapi-method-spec %}
{% endapi-method %}

{% tabs %}
{% tab title=".NET" %}
```csharp
var client = new CodeMashClient(apiKey, projectId);
var pushService = new CodeMashPushService(client);

var response = await pushService.SendPushNotificationAsync(
    new SendPushNotificationRequest
    {
        TemplateId = Guid.Parse("{TEMPLATE_ID}"),
        Users = new List<string> { "{USER_ID}" }
    }
);
```
{% endtab %}

{% tab title="Node" %}
```

```
{% endtab %}

{% tab title="PHP" %}
```php
use Codemash\CodemashClient;
use Codemash\CodemashPushNotification;

class CodemashService
{
    protected CodemashPushNotification $codemashPushNotification;

    public function __construct()
    {
        $secretKey = '{YOUR_SECRET_KEY}';
        $projectId = '{YOUR_PROJECT_ID}';

        $client = new CodemashClient($secretKey, $projectId);
        $codemashPushNotification = new CodemashPushNotification($client);
    }
    
    public function sendPushNotification()
    {
        $responseData = $this->codemashPushNotification->sendNotification([
            'templateId' => '{TEMPLATE_ID}',
            'users' => [
                '{USER_ID}',
                '{USER_ID}',
                '{USER_ID}',
            ],
        ]);
    }
    
}
```
{% endtab %}
{% endtabs %}

{% api-method method="get" host="https://api.codemash.io" path="/:version/notifications/push/:id" %}
{% api-method-summary %}
Get Notification
{% endapi-method-summary %}

{% api-method-description %}
Gets a push notification.
{% endapi-method-description %}

{% api-method-spec %}
{% api-method-request %}
{% api-method-path-parameters %}
{% api-method-parameter name="version" type="string" required=true %}
The version of the API endpoint. Current latest **v1**.
{% endapi-method-parameter %}

{% api-method-parameter name="id" type="string" required=true %}
The ID of a notification to get.
{% endapi-method-parameter %}
{% endapi-method-path-parameters %}

{% api-method-headers %}
{% api-method-parameter name="Authorization" type="string" required=true %}
Your project's secret key.
{% endapi-method-parameter %}

{% api-method-parameter name="x-cm-projectid" type="string" required=true %}
Your project's ID. Can be passed as a query parameter.
{% endapi-method-parameter %}
{% endapi-method-headers %}
{% endapi-method-request %}

{% api-method-response %}
{% api-method-response-example httpCode=200 %}
{% api-method-response-example-description %}
Returns an ID of created notification group.
{% endapi-method-response-example-description %}

```javascript
{
    Result: ""
}
```
{% endapi-method-response-example %}

{% api-method-response-example httpCode=401 %}
{% api-method-response-example-description %}
Returns if the user does not have a valid permission to call this method.
{% endapi-method-response-example-description %}

```

```
{% endapi-method-response-example %}

{% api-method-response-example httpCode=500 %}
{% api-method-response-example-description %}

{% endapi-method-response-example-description %}

```

```
{% endapi-method-response-example %}
{% endapi-method-response %}
{% endapi-method-spec %}
{% endapi-method %}

{% tabs %}
{% tab title=".NET" %}
```csharp
var client = new CodeMashClient(apiKey, projectId);
var pushService = new CodeMashPushService(client);

var response = await pushService.GetNotificationAsync(
    new GetNotificationRequest
    {
        Id = "{NOTIFICATION_ID}"
    }
);
```
{% endtab %}

{% tab title="Node" %}
```

```
{% endtab %}

{% tab title="PHP" %}
```php
use Codemash\CodemashClient;
use Codemash\CodemashPushNotification;

class CodemashService
{
    protected CodemashPushNotification $codemashPushNotification;

    public function __construct()
    {
        $secretKey = '{YOUR_SECRET_KEY}';
        $projectId = '{YOUR_PROJECT_ID}';

        $client = new CodemashClient($secretKey, $projectId);
        $codemashPushNotification = new CodemashPushNotification($client);
    }
    
    public function getNotification()
    {
        $responseData = $this->codemashPushNotification->getNotification([
            'id' => '{NOTIFICATION_ID}',
        ]);
    }
    
}
```
{% endtab %}
{% endtabs %}

{% api-method method="get" host="https://api.codemash.io" path="/:version/notifications/push" %}
{% api-method-summary %}
Get Notifications
{% endapi-method-summary %}

{% api-method-description %}
Gets many push notifications.
{% endapi-method-description %}

{% api-method-spec %}
{% api-method-request %}
{% api-method-path-parameters %}
{% api-method-parameter name="version" type="string" required=true %}
The version of the API endpoint. Current latest **v1**.
{% endapi-method-parameter %}
{% endapi-method-path-parameters %}

{% api-method-headers %}
{% api-method-parameter name="Authorization" type="string" required=true %}
Your project's secret key.
{% endapi-method-parameter %}

{% api-method-parameter name="x-cm-projectid" type="string" required=true %}
Your project's ID. Can be passed as a query parameter.
{% endapi-method-parameter %}
{% endapi-method-headers %}

{% api-method-query-parameters %}
{% api-method-parameter name="userId" type="string" required=false %}
The ID of a user whose notifications to get.
{% endapi-method-parameter %}

{% api-method-parameter name="deviceId" type="string" required=false %}
The ID of a device whose notifications to get.
{% endapi-method-parameter %}
{% endapi-method-query-parameters %}
{% endapi-method-request %}

{% api-method-response %}
{% api-method-response-example httpCode=200 %}
{% api-method-response-example-description %}
Returns an ID of created notification group.
{% endapi-method-response-example-description %}

```javascript
{
    Result: ""
}
```
{% endapi-method-response-example %}

{% api-method-response-example httpCode=401 %}
{% api-method-response-example-description %}
Returns if the user does not have a valid permission to call this method.
{% endapi-method-response-example-description %}

```

```
{% endapi-method-response-example %}

{% api-method-response-example httpCode=500 %}
{% api-method-response-example-description %}

{% endapi-method-response-example-description %}

```

```
{% endapi-method-response-example %}
{% endapi-method-response %}
{% endapi-method-spec %}
{% endapi-method %}

{% tabs %}
{% tab title=".NET" %}
```csharp
var client = new CodeMashClient(apiKey, projectId);
var pushService = new CodeMashPushService(client);

var response = await pushService.GetNotificationsAsync(
    new GetNotificationsRequest
    {
        UserId = "{USER_ID}"
    }
);
```
{% endtab %}

{% tab title="Node" %}
```

```
{% endtab %}

{% tab title="PHP" %}
```php
use Codemash\CodemashClient;
use Codemash\CodemashPushNotification;

class CodemashService
{
    protected CodemashPushNotification $codemashPushNotification;

    public function __construct()
    {
        $secretKey = '{YOUR_SECRET_KEY}';
        $projectId = '{YOUR_PROJECT_ID}';

        $client = new CodemashClient($secretKey, $projectId);
        $codemashPushNotification = new CodemashPushNotification($client);
    }
    
    public function getNotifications()
    {
        $responseData = $this->codemashPushNotification->getNotifications([
            'userId' => '{USER_ID}',
        ]);
    }
    
}
```
{% endtab %}
{% endtabs %}

{% hint style="warning" %}
If you do not specify user ID or device ID, the method will return notifications directed to the calling user. To get any user's or device's notifications, the calling user need's to have the appropriate permission for that.
{% endhint %}

{% api-method method="get" host="https://api.codemash.io" path="/:version/notifications/push/count" %}
{% api-method-summary %}
Get Notifications Count
{% endapi-method-summary %}

{% api-method-description %}
Gets total and total unread notifications.
{% endapi-method-description %}

{% api-method-spec %}
{% api-method-request %}
{% api-method-path-parameters %}
{% api-method-parameter name="version" type="string" required=true %}
The version of the API endpoint. Current latest **v1**.
{% endapi-method-parameter %}
{% endapi-method-path-parameters %}

{% api-method-headers %}
{% api-method-parameter name="Authorization" type="string" required=true %}
Your project's secret key.
{% endapi-method-parameter %}

{% api-method-parameter name="x-cm-projectid" type="string" required=true %}
Your project's ID. Can be passed as a query parameter.
{% endapi-method-parameter %}
{% endapi-method-headers %}

{% api-method-query-parameters %}
{% api-method-parameter name="userId" type="string" required=false %}
The ID of a user whose notifications to get.
{% endapi-method-parameter %}

{% api-method-parameter name="deviceId" type="string" required=false %}
The ID of a device whose notifications to get.
{% endapi-method-parameter %}
{% endapi-method-query-parameters %}
{% endapi-method-request %}

{% api-method-response %}
{% api-method-response-example httpCode=200 %}
{% api-method-response-example-description %}
Returns an ID of created notification group.
{% endapi-method-response-example-description %}

```javascript
{
    "result": {
        "totalCount": 20,
        "totalUnread": 2
    }
}
```
{% endapi-method-response-example %}

{% api-method-response-example httpCode=401 %}
{% api-method-response-example-description %}
Returns if the user does not have a valid permission to call this method.
{% endapi-method-response-example-description %}

```

```
{% endapi-method-response-example %}

{% api-method-response-example httpCode=500 %}
{% api-method-response-example-description %}

{% endapi-method-response-example-description %}

```

```
{% endapi-method-response-example %}
{% endapi-method-response %}
{% endapi-method-spec %}
{% endapi-method %}

{% tabs %}
{% tab title=".NET" %}
```csharp
var client = new CodeMashClient(apiKey, projectId);
var pushService = new CodeMashPushService(client);

var response = await pushService.GetNotificationsCountAsync(
    new GetNotificationsCountRequest
    {
        UserId = "{USER_ID}"
    }
);
```
{% endtab %}

{% tab title="Node" %}
```

```
{% endtab %}

{% tab title="PHP" %}
```php
use Codemash\CodemashClient;
use Codemash\CodemashPushNotification;

class CodemashService
{
    protected CodemashPushNotification $codemashPushNotification;

    public function __construct()
    {
        $secretKey = '{YOUR_SECRET_KEY}';
        $projectId = '{YOUR_PROJECT_ID}';

        $client = new CodemashClient($secretKey, $projectId);
        $codemashPushNotification = new CodemashPushNotification($client);
    }
    
    public function getNotificationsCount()
    {
        $responseData = $this->codemashPushNotification->getNotificationCount([
            'userId' => '{USER_ID}',
        ]);
    }
    
}
```
{% endtab %}
{% endtabs %}

{% hint style="warning" %}
If you do not specify user ID or device ID, the method will return notifications directed to the calling user. To get any user's or device's notifications, the calling user need's to have the appropriate permission for that.
{% endhint %}

{% api-method method="patch" host="https://api.codemash.io" path="/:version/notifications/push/:notificationId/read" %}
{% api-method-summary %}
Read Notification
{% endapi-method-summary %}

{% api-method-description %}
Marks a particular push notification as read.
{% endapi-method-description %}

{% api-method-spec %}
{% api-method-request %}
{% api-method-path-parameters %}
{% api-method-parameter name="version" type="string" required=true %}
The version of the API endpoint. Current latest **v1**.
{% endapi-method-parameter %}

{% api-method-parameter name="id" type="string" required=true %}
The ID of a notification to delete.
{% endapi-method-parameter %}
{% endapi-method-path-parameters %}

{% api-method-headers %}
{% api-method-parameter name="Authorization" type="string" required=true %}
Your project's secret key.
{% endapi-method-parameter %}

{% api-method-parameter name="x-cm-projectid" type="string" required=true %}
Your project's ID. Can be passed as a query parameter.
{% endapi-method-parameter %}
{% endapi-method-headers %}

{% api-method-body-parameters %}
{% api-method-parameter name="notificationId" type="string" required=true %}
The ID of notification to mark as read.
{% endapi-method-parameter %}

{% api-method-parameter name="userId" type="string" required=false %}
The ID of the user at which this notification was directed.
{% endapi-method-parameter %}

{% api-method-parameter name="deviceId" type="string" required=false %}
The ID of device at which this notification was directed.
{% endapi-method-parameter %}
{% endapi-method-body-parameters %}
{% endapi-method-request %}

{% api-method-response %}
{% api-method-response-example httpCode=200 %}
{% api-method-response-example-description %}
Returns an ID of created notification group.
{% endapi-method-response-example-description %}

```javascript
{
    Result: ""
}
```
{% endapi-method-response-example %}

{% api-method-response-example httpCode=401 %}
{% api-method-response-example-description %}
Returns if the user does not have a valid permission to call this method.
{% endapi-method-response-example-description %}

```

```
{% endapi-method-response-example %}

{% api-method-response-example httpCode=500 %}
{% api-method-response-example-description %}

{% endapi-method-response-example-description %}

```

```
{% endapi-method-response-example %}
{% endapi-method-response %}
{% endapi-method-spec %}
{% endapi-method %}

{% tabs %}
{% tab title=".NET" %}
```csharp
var client = new CodeMashClient(apiKey, projectId);
var pushService = new CodeMashPushService(client);

var response = await pushService.ReadNotificationAsync(
    new MarkNotificationAsReadRequest
    {
        NotificationId = "{NOTIFICATION_ID}"
    }
);
```
{% endtab %}

{% tab title="Node" %}
```

```
{% endtab %}

{% tab title="PHP" %}
```php
use Codemash\CodemashClient;
use Codemash\CodemashPushNotification;

class CodemashService
{
    protected CodemashPushNotification $codemashPushNotification;

    public function __construct()
    {
        $secretKey = '{YOUR_SECRET_KEY}';
        $projectId = '{YOUR_PROJECT_ID}';

        $client = new CodemashClient($secretKey, $projectId);
        $codemashPushNotification = new CodemashPushNotification($client);
    }
    
    public function readNotification()
    {
        $responseData = $codemashPushNotification->readNotification([
            'id' => '{NOTIFICATION_ID}',
        ]);
    }
    
}
```
{% endtab %}
{% endtabs %}

{% hint style="warning" %}
If you do not specify user ID or device ID, the method will assume that notification was directed to a calling user. If you want to set other user's notification as read, you need to have the appropriate permission for that.
{% endhint %}

{% api-method method="delete" host="https://api.codemash.io" path="/:version/notifications/push/:id" %}
{% api-method-summary %}
Delete Notification
{% endapi-method-summary %}

{% api-method-description %}
Deletes a particular push notification.
{% endapi-method-description %}

{% api-method-spec %}
{% api-method-request %}
{% api-method-path-parameters %}
{% api-method-parameter name="version" type="string" required=true %}
The version of the API endpoint. Current latest **v1**.
{% endapi-method-parameter %}

{% api-method-parameter name="id" type="string" required=true %}
The ID of a notification to delete.
{% endapi-method-parameter %}
{% endapi-method-path-parameters %}

{% api-method-headers %}
{% api-method-parameter name="Authorization" type="string" required=true %}
Your project's secret key.
{% endapi-method-parameter %}

{% api-method-parameter name="x-cm-projectid" type="string" required=true %}
Your project's ID. Can be passed as a query parameter.
{% endapi-method-parameter %}
{% endapi-method-headers %}
{% endapi-method-request %}

{% api-method-response %}
{% api-method-response-example httpCode=200 %}
{% api-method-response-example-description %}
Returns an ID of created notification group.
{% endapi-method-response-example-description %}

```javascript
{
    Result: ""
}
```
{% endapi-method-response-example %}

{% api-method-response-example httpCode=401 %}
{% api-method-response-example-description %}
Returns if the user does not have a valid permission to call this method.
{% endapi-method-response-example-description %}

```

```
{% endapi-method-response-example %}

{% api-method-response-example httpCode=500 %}
{% api-method-response-example-description %}

{% endapi-method-response-example-description %}

```

```
{% endapi-method-response-example %}
{% endapi-method-response %}
{% endapi-method-spec %}
{% endapi-method %}

{% tabs %}
{% tab title=".NET" %}
```csharp
var client = new CodeMashClient(apiKey, projectId);
var pushService = new CodeMashPushService(client);

var response = await pushService.DeleteNotificationAsync(
    new DeleteNotificationRequest
    {
        Id = "{NOTIFICATION_ID}"
    }
);
```
{% endtab %}

{% tab title="Node" %}
```

```
{% endtab %}

{% tab title="PHP" %}
```php
use Codemash\CodemashClient;
use Codemash\CodemashPushNotification;

class CodemashService
{
    protected CodemashPushNotification $codemashPushNotification;

    public function __construct()
    {
        $secretKey = '{YOUR_SECRET_KEY}';
        $projectId = '{YOUR_PROJECT_ID}';

        $client = new CodemashClient($secretKey, $projectId);
        $codemashPushNotification = new CodemashPushNotification($client);
    }
    
    public function deleteNotification()
    {
        $responseData = $codemashPushNotification->deleteNotification([
            'id' => '{NOTIFICATION_ID}',
        ]);
    }
    
}
```
{% endtab %}
{% endtabs %}

