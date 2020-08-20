---
description: Overview of files API methods
---

# Files API

{% api-method method="post" host="https://api.codemash.io" path="/:version/files" %}
{% api-method-summary %}
Upload File
{% endapi-method-summary %}

{% api-method-description %}
Uploads a file.
{% endapi-method-description %}

{% api-method-spec %}
{% api-method-request %}
{% api-method-path-parameters %}
{% api-method-parameter name="version" type="string" required=true %}
The version of API endpoint.
{% endapi-method-parameter %}
{% endapi-method-path-parameters %}

{% api-method-headers %}
{% api-method-parameter name="Authorization" type="string" required=true %}
Your project's secret key.
{% endapi-method-parameter %}

{% api-method-parameter name="x-cm-projectid" type="string" required=true %}
Your project's ID. Can be passed as query parameter.
{% endapi-method-parameter %}
{% endapi-method-headers %}

{% api-method-body-parameters %}
{% api-method-parameter name="path" type="string" required=false %}
Path in your file browser.
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
var filesService = new CodeMashFilesService(client);

var directory = Path.GetDirectoryName(Assembly.GetExecutingAssembly().Location);
var filePath = $"{directory}\\test.txt";

using (var fsSource = new FileStream(path, FileMode.Open, FileAccess.Read))
{
    var response = await filesService.UploadFileAsync(fsSource, "test.txt", 
        new UploadFileRequest
        {
            Path = "folder1"
        }
    );
}
```
{% endtab %}

{% tab title="Node" %}
```

```
{% endtab %}
{% endtabs %}

{% api-method method="post" host="https://api.codemash.io" path="/:version/db/:collectionName/files" %}
{% api-method-summary %}
Upload Record File
{% endapi-method-summary %}

{% api-method-description %}
Uploads a file for a record field.
{% endapi-method-description %}

{% api-method-spec %}
{% api-method-request %}
{% api-method-path-parameters %}
{% api-method-parameter name="version" type="string" required=true %}
The version of API endpoint.
{% endapi-method-parameter %}

{% api-method-parameter name="collectionName" type="string" required=true %}
Name of a collection.
{% endapi-method-parameter %}
{% endapi-method-path-parameters %}

{% api-method-headers %}
{% api-method-parameter name="Authorization" type="string" required=true %}
Your project's secret key.
{% endapi-method-parameter %}

{% api-method-parameter name="x-cm-projectid" type="string" required=true %}
Your project's ID. Can be passed as query parameter.
{% endapi-method-parameter %}
{% endapi-method-headers %}

{% api-method-body-parameters %}
{% api-method-parameter name="recordId" type="string" required=true %}
ID of a record inside collection.
{% endapi-method-parameter %}

{% api-method-parameter name="uniqueFieldName" type="string" required=true %}
Record file field name.
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
var filesService = new CodeMashFilesService(client);

var directory = Path.GetDirectoryName(Assembly.GetExecutingAssembly().Location);
var filePath = $"{directory}\\test.txt";

using (var fsSource = new FileStream(path, FileMode.Open, FileAccess.Read))
{
    var response = await filesService.UploadRecordFileAsync(fsSource, "test.txt", 
        new UploadRecordFileRequest
        {
            RecordId = "{RECORD_ID}",
            UniqueFieldName = "file_field_name"
        }
    );
}
```
{% endtab %}

{% tab title="Node" %}
```

```
{% endtab %}
{% endtabs %}

{% api-method method="post" host="https://api.codemash.io" path="/:version/membership/users/files" %}
{% api-method-summary %}
Upload User File
{% endapi-method-summary %}

{% api-method-description %}
Uploads a file for a user meta field.
{% endapi-method-description %}

{% api-method-spec %}
{% api-method-request %}
{% api-method-path-parameters %}
{% api-method-parameter name="version" type="string" required=true %}
The version of API endpoint.
{% endapi-method-parameter %}
{% endapi-method-path-parameters %}

{% api-method-headers %}
{% api-method-parameter name="Authorization" type="string" required=true %}
Your project's secret key.
{% endapi-method-parameter %}

{% api-method-parameter name="x-cm-projectid" type="string" required=true %}
Your project's ID. Can be passed as query parameter.
{% endapi-method-parameter %}
{% endapi-method-headers %}

{% api-method-body-parameters %}
{% api-method-parameter name="userId" type="string" required=true %}
ID of a user.
{% endapi-method-parameter %}

{% api-method-parameter name="metaFieldName" type="string" required=true %}
User meta file field name.
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
var filesService = new CodeMashFilesService(client);

var directory = Path.GetDirectoryName(Assembly.GetExecutingAssembly().Location);
var filePath = $"{directory}\\test.txt";

using (var fsSource = new FileStream(path, FileMode.Open, FileAccess.Read))
{
    var response = await filesService.UploadUserFileAsync(fsSource, "test.txt", 
        new UploadUserFileRequest
        {
            UserId = "{USER_ID}",
            MetaFieldName = "file_field_name"
        }
    );
}
```
{% endtab %}
{% endtabs %}

