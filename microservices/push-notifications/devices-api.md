---
description: Overview of mobile devices API methods
---

# Devices API

{% api-method method="post" host="https://api.codemash.io" path="/:version/notifications/push/devices" %}
{% api-method-summary %}
Register Device
{% endapi-method-summary %}

{% api-method-description %}
Registers a device without a token. Devices without a token won't receive push notifications.
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
{% api-method-parameter name="userId" type="string" required=false %}
The ID of a user.
{% endapi-method-parameter %}

{% api-method-parameter name="timeZone" type="string" required=false %}
The timezone of a device in a tz database format.
{% endapi-method-parameter %}

{% api-method-parameter name="meta" type="object" required=false %}
Key-value pair \(string: string\) object for custom data.
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

var response = await pushService.RegisterDeviceAsync(
    new RegisterDeviceRequest
    {
        UserId = Guid.parse("{USER_ID}"),
        TimeZone = "Etc/UTC",
        Meta = new Dictionary<string, string>
        {
            { "Os", "Android" }            
        }
    }
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
    
    public function registerDevice()
    {
        $responseData = $this->codemashPushNotification->registerDevice([
            'userId' => '{USER_ID}',
            'timeZone' => 'Etc/UTC',
            'meta' => [
                'Brand' => 'Apple'
            ]
    }
    
}
```
{% endtab %}
{% endtabs %}

{% api-method method="post" host="https://api.codemash.io" path="/:version/notifications/push/token/expo" %}
{% api-method-summary %}
Register Expo Token
{% endapi-method-summary %}

{% api-method-description %}
Registers a device with an Expo token and creates a device if not yet created. 
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
{% api-method-parameter name="token" type="string" required=true %}
Token of a device provided by the Expo.
{% endapi-method-parameter %}

{% api-method-parameter name="deviceId" type="string" required=false %}
The ID of a device. If not provided, a new device will be added.
{% endapi-method-parameter %}

{% api-method-parameter name="userId" type="string" required=false %}
The ID of a user.
{% endapi-method-parameter %}

{% api-method-parameter name="timeZone" type="string" required=false %}
The timezone of a device in a tz database format.
{% endapi-method-parameter %}

{% api-method-parameter name="meta" type="object" required=false %}
Key-value pair \(string: string\) object for custom data.
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

var response = await pushService.RegisterExpoTokenAsync(
    new RegisterDeviceExpoTokenRequest
    {
        UserId = Guid.parse("{USER_ID}"),
        Token = "ExponentPushToken[**********************]",
        TimeZone = "Etc/UTC",
        Meta = new Dictionary<string, string>
        {
            { "Os", "Android" }            
        }
    }
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
    
    public function registerExpoToken()
    {
        $responseData = $this->codemashPushNotification->registerExpoToken([
            'userId' => '{USER_ID}',
            'timeZone' => 'Etc/UTC',
            'meta' => [
                'Brand' => 'Apple'
            ],
            'token' => 'ExponentPushToken[**********************]',
        ]);
    }
    
}
```
{% endtab %}
{% endtabs %}

{% api-method method="get" host="https://api.codemash.io" path="/:version/notifications/push/devices/:id" %}
{% api-method-summary %}
Get Device
{% endapi-method-summary %}

{% api-method-description %}
Gets a device.
{% endapi-method-description %}

{% api-method-spec %}
{% api-method-request %}
{% api-method-path-parameters %}
{% api-method-parameter name="version" type="string" required=true %}
The version of the API endpoint. Current latest **v1**.
{% endapi-method-parameter %}

{% api-method-parameter name="id" type="string" required=true %}
The ID of a device to get.
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

var response = await pushService.GetDeviceAsync(
    new GetDeviceRequest
    {
        Id = "{DEVICE_ID}"
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
    
    public function getDevice()
    {
        $responseData = $this->codemashPushNotification->getDevice([
            'id' => '{DEVICE_ID}',
        ]);
    }
    
}
```
{% endtab %}
{% endtabs %}

{% api-method method="get" host="https://api.codemash.io" path="/:version/notifications/push/devices" %}
{% api-method-summary %}
Get Devices
{% endapi-method-summary %}

{% api-method-description %}
Gets many devices.
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

var response = await pushService.GetDevicesAsync(
    new GetDevicesRequest()
);
```
{% endtab %}

{% tab title="Node" %}
```

```
{% endtab %}

{% tab title="PHP" %}
```php
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
    
    public function getDevices()
    {
        $responseData = $this->codemashPushNotification->getDevices();
    }
    
}
```
{% endtab %}
{% endtabs %}

{% api-method method="delete" host="https://api.codemash.io" path="/:version/notifications/push/devices/:id" %}
{% api-method-summary %}
Delete Device
{% endapi-method-summary %}

{% api-method-description %}
Deletes a particular device.
{% endapi-method-description %}

{% api-method-spec %}
{% api-method-request %}
{% api-method-path-parameters %}
{% api-method-parameter name="version" type="string" required=true %}
The version of the API endpoint. Current latest **v1**.
{% endapi-method-parameter %}

{% api-method-parameter name="id" type="string" required=true %}
The ID of a device to delete.
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

var response = await pushService.DeleteDeviceAsync(
    new DeleteDeviceRequest
    {
        Id = "{DEVICE_ID}"
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
    
    public function deleteDevice()
    {
        $responseData = $this->codemashPushNotification->deleteDevice([
            'id' => '{DEVICE_ID}',
        ]);
    }
    
}
```
{% endtab %}
{% endtabs %}

{% api-method method="delete" host="https://api.codemash.io" path="/:version/notifications/push/devices/:id/token" %}
{% api-method-summary %}
Delete Device Token
{% endapi-method-summary %}

{% api-method-description %}
Deletes a token of a particular device.
{% endapi-method-description %}

{% api-method-spec %}
{% api-method-request %}
{% api-method-path-parameters %}
{% api-method-parameter name="version" type="string" required=true %}
The version of the API endpoint. Current latest **v1**.
{% endapi-method-parameter %}

{% api-method-parameter name="id" type="string" required=true %}
The ID of a device.
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

var response = await pushService.DeleteTokenAsync(
    new DeleteDeviceTokenRequest
    {
        Id = "{DEVICE_ID}"
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
    
    public function deleteDeviceToken()
    {
        $responseData = $this->codemashPushNotification->deleteDeviceToken([
            'id' => '{DEVICE_ID}',
        ]);
    }
    
}
```
{% endtab %}
{% endtabs %}

{% api-method method="patch" host="https://api.codemash.io" path="/:version/notifications/push/devices/:id/metadata" %}
{% api-method-summary %}
Update Device Meta
{% endapi-method-summary %}

{% api-method-description %}
Updates a meta-information of a particular device.
{% endapi-method-description %}

{% api-method-spec %}
{% api-method-request %}
{% api-method-path-parameters %}
{% api-method-parameter name="version" type="string" required=true %}
The version of the API endpoint. Current latest **v1**.
{% endapi-method-parameter %}

{% api-method-parameter name="id" type="string" required=true %}
The ID of a device to update.
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
{% api-method-parameter name="meta" type="string" required=false %}
Key-value pair \(string: string\) object of custom data.
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

var response = await pushService.UpdateDeviceMetaAsync(
    new UpdateDeviceMetaRequest
    {
        Id = "{DEVICE_ID}",
        Meta = new Dictionary<string, string>
        {
            { "Os", "iOs" }            
        }
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
    
    public function updateDeviceMeta()
    {
        $responseData = $this->codemashPushNotification->updateDeviceMeta([
            'id' => '{DEVICE_ID}',
            'meta' => ['Brand' => 'Apple'],
        ]);
    }
    
}
```
{% endtab %}
{% endtabs %}

{% api-method method="patch" host="https://api.codemash.io" path="/:version/notifications/push/devices/:id/timezone" %}
{% api-method-summary %}
Update Device Timezone
{% endapi-method-summary %}

{% api-method-description %}
Updates a timezone of a particular device.
{% endapi-method-description %}

{% api-method-spec %}
{% api-method-request %}
{% api-method-path-parameters %}
{% api-method-parameter name="version" type="string" required=true %}
The version of the API endpoint. Current latest **v1**.
{% endapi-method-parameter %}

{% api-method-parameter name="id" type="string" required=true %}
The ID of a device to update.
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
{% api-method-parameter name="timezone" type="string" required=false %}
The timezone of a device in a tz database format.
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

var response = await pushService.UpdateDeviceTimeZoneAsync(
    new UpdateDeviceTimeZoneRequest
    {
        Id = "{DEVICE_ID}",
        TimeZone = "Etc/UTC",
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
    
    public function updateDeviceTimezone()
    {
        $responseData = $this->codemashPushNotification->updateDeviceTimezone([
            'id' => '{DEVICE_ID}',
            'timezone' => 'ETC/UTC',
        ]);
    }
    
}
```
{% endtab %}
{% endtabs %}

{% api-method method="patch" host="https://api.codemash.io" path="/:version/notifications/push/devices/:id/timezone" %}
{% api-method-summary %}
Update Device User
{% endapi-method-summary %}

{% api-method-description %}
Updates a user of a particular device.
{% endapi-method-description %}

{% api-method-spec %}
{% api-method-request %}
{% api-method-path-parameters %}
{% api-method-parameter name="version" type="string" required=true %}
The version of the API endpoint. Current latest **v1**.
{% endapi-method-parameter %}

{% api-method-parameter name="id" type="string" required=true %}
The ID of a device to update.
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
{% api-method-parameter name="userId" type="string" required=false %}
The ID of a new user.
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

var response = await pushService.UpdateDeviceUserRequest(
    new UpdateDeviceUserRequest
    {
        Id = "{DEVICE_ID}",
        UserId = Guid.Parse("{USER_ID}"),
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
    
    public function updateDeviceUser()
    {
        $responseData = $this->codemashPushNotification->updateDeviceUser([
            'id' => '{DEVICE_ID}',
            'userId' => '{USER_ID}',
        ]);
    }
    
}
```
{% endtab %}
{% endtabs %}

