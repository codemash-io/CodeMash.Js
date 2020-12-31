---
description: Overview of creating Ruby functions
---

# Ruby

### Getting and publishing a function

The following shows how to get, edit, and pack your template for upload.

| Versions | Template |
| :--- | :--- |
| Ruby 2.5 | [Download](https://codemash-public.s3.eu-central-1.amazonaws.com/code-templates/node_8_10.zip) |

* After you have downloaded the template project, unzip it and navigate to `./lambda-function` directory.
* Open the command-line tool and run `npm install`. This will install all initial dependencies.
* Your entry \(main\) function will be inside `index.js` file called `exports.handler`.
* After you done, zip all of the `.js` files and `node_modules` folder. Other files are not needed.
* Upload zipped file to CodeMash.

For the **handler** you have to specify your entry function location. Handler follows such format - `fileName.functionName`. Following the structure given in the initial template, the handler would be `index.handler`. You can edit any of these parameters for your own function.

### Template overview

The following explains how to use provided template to create your own functions.

