---
description: Overview of files service
---

# Files Service

CodeMash **Files** service allows you to store all your project files. These files include files from the database, user files, and custom files. All the files can be seen from the dashboard in the file browser.

To start using **Files** services and [API](https://docs.codemash.io/sdks) methods you firstly need to enable files service in your CodeMash dashboard.

Features included in files service:

1. File storage - storing your project files.

## Using SDK

If you decide to use one of our provided SDK, the following code shows how to initialize files service.

{% tabs %}
{% tab title=".NET" %}
```csharp
var projectId = Guid.Parse("{YOUR_PROJECT_ID}");
var apiKey = "{YOUR_SECRET_KEY}";

var client = new CodeMashClient(apiKey, projectId);
var filesService = new CodeMashFilesService(client);
```
{% endtab %}

{% tab title="Node" %}
```

```
{% endtab %}

{% tab title="PHP" %}
```php
use Codemash\CodemashClient;
use Codemash\CodemashFile;

class CodemashService
{
    protected CodemashFile $codemashFile;

    public function __construct()
    {
        $secretKey = '{YOUR_SECRET_KEY}';
        $projectId = '{YOUR_PROJECT_ID}';

        $client = new CodemashClient($secretKey, $projectId);
        $this->codemashFile = new CodemashFile($client);
    }
}
```
{% endtab %}
{% endtabs %}

## Example

The following are examples of files SDK using different languages and frameworks.

{% tabs %}
{% tab title=".NET" %}
```csharp
using System;
using CodeMash.Client;
using CodeMash.Membership.Services;
using Isidos.CodeMash.ServiceContracts;

namespace ConsoleApplication
{
    class Program
    {
        static void Main(string[] args)
        {
            // 1. Get your Project ID and Secret Key
            var projectId = Guid.Parse("{YOUR_PROJECT_ID}");
            var apiKey = "{YOUR_SECRET_KEY}";

            // 2. Create a general client for API calls
            var client = new CodeMashClient(apiKey, projectId);
            
            // 3. Create a service object
            var filesService = new CodeMashFilesService(client);

            // 4. Get path to your file
            var directory = Path.GetDirectoryName(
                Assembly.GetExecutingAssembly().Location
            );
            var filePath = $"{directory}\\test.txt";
            
            // 5. Get file stream
            using (var fsSource = new FileStream(path, FileMode.Open, 
                FileAccess.Read))
            {
                // 6. Call an API method
                var response = await filesService.UploadFileAsync(
                    fsSource, 
                    "test.txt", 
                    new UploadFileRequest
                    {
                        Path = "folder1"
                    }
                );
            }
        }
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
use Codemash\CodemashFile;

class CodemashService
{
    protected CodemashFile $codemashFile;

    public function __construct()
    {
        $secretKey = '{YOUR_SECRET_KEY}';
        $projectId = '{YOUR_PROJECT_ID}';

        $client = new CodemashClient($secretKey, $projectId);
        $this->codemashFile = new CodemashFile($client);
    }

    public function uploadFile()
    {
        $responseData = $codemashFile->uploadRecordFile([
            'fileUri' => '{YOUR_FILE_PATH}',
            'fileName' => '{YOUR_FILE_NAME}',
            'collectionName' => '{COLLECTION_NAME}',
            'recordId' => '{RECORD_ID}',
            'uniqueFieldName' => 'file_field_name',
        ]);
    }
}
```
{% endtab %}
{% endtabs %}

## Working with Files Service

The following links explore the usage of files service:

{% page-ref page="files.md" %}

