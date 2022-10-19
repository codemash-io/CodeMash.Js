![](https://github.com/codemash-io/CodeMash.Js/workflows/CI/badge.svg?branch=master&event=push)

<h1 align="center" style="border-bottom: none;">🚀 CodeMash</h1>
<h3 align="center">Back end as a service</h3>

[CodeMash](https://codemash.io) is a vital toolset for each developer who wants to achieve daily development tasks rapidly. CodeMash provides many common back-end services for you so you can focus on your front-end. Services such as database, email and push notifications, authentication, file storage, and [many others](https://docs.codemash.io/dashboard/register-at-codemash) are already implemented and can be easily accessed through the CodeMash dashboard or API.

> Please refer to our technical [documentation](https://docs.codemash.io) page for more information.

## CodeMash for JavaScript developers.

![npm bundle size](https://img.shields.io/bundlephobia/minzip/codemash?logo=files&style=for-the-badge)
![npm](https://img.shields.io/npm/v/codemash?logo=npm&style=for-the-badge)
![node-current](https://img.shields.io/badge/Node-%3E=14-success?style=for-the-badge&logo=node)
![npm](https://img.shields.io/npm/dw/codemash?style=for-the-badge)

You can use this JavaScript library in applications like:

1. [Node.js](https://docs.codemash.io/sdk/node.js)
2. [TypeScript](https://docs.codemash.io/sdk/typescript) based applications
3. React
4. React Native
5. Vanilla JavaScript applications
   |

### Installation

Install _codemash_ package either using npm or yarn.

```bash
npm install codemash
```

or

```bash
yarn add codemash
```

### Configuration

Before making requests to the [CodeMash API](https://docs.codemash.io/api/get-started) you need to set up a connection either using the .env configuration file or you cat set it using code.
All necessary configuration options can be found here.

**1. CodeMash initialization using code.**

Be sure you have access rights and can get the project id and any other configuration part. To find out how quickly to get all those pieces checkout our [prerequisites page](https://docs.codemash.io/api/prerequisites).

```js
import { config } from 'codemash';

config.init(
  {
    secretKey: '<YOUR_SECRET_KEY>',
    projectId: '<YOUR_PROJECT_ID>',
  },
  process.env.NODE_ENV,
);
```

**2. Adding configuration into .env file.**

An example of all environment variable options can be found [here](./tests/data/config/.env.template)

```bash
CODEMASH_API_URL=https://api.codemash.io
CODEMASH_PROJECT_ID=7254937f-ad77-4d00-9b35-c2af7841d21b
CODEMASH_API_KEY=******************
CODEMASH_CLUSTER=adce808c-5819-4801-9d4d-3691c6c7c78f
CODEMASH_SHOW_LOGS=true
```

## Examples

Insert into a collection:

```ts
import { db } from 'codemash';

// add new employee to the "Employees" collection
const addEmployee = async (employee: Employee) => {
  await db.insertOne<Employee>({
    collection: 'employees',
    document: employee,
  });
};

const newEmployeeId = await addEmployee({
  first_name: 'Scott',
  last_name: 'Hanselman',
  age: 50,
});

console.log(newEmployeeId);
// 61bf1faa175e057ad9cbef55
```

Find data from the collection:

```ts
import { db } from 'codemash';

// gets all first 100 employees
const getEmployees = async (filter: object) => {
  return await db.find<Employee[]>({
    collection: 'employees',
    filter,
    pageNumber: 0,
    pageSize: 100,
  });
};

// get all employees whose age is greater or equal to 30 years.
const employees = await getEmployees({ age: { $gte: 30 } });
console.log(employees);

// this will output something like
// { totalCout: 16157, result: [{ first_name: "Domantas Jovaisas", ...}, {}, {}] }
```

Send push notification to one from db:

```ts
import { db, push } from 'codemash';

// gets employee by id
const getEmployee = async (id: string) => {
  return await db.findById<Employee[]>({
    collection: 'employees',
    id: id,
  });
}

const employee = await getEmployee(newEmployeeId);

await push.send({
  template: "Meeting reminder",
  recipient: employee?._id,
  tokens: {
    salutation: `Dear ${employee?.first_name}`,
    when: new Date()
    room: 11,
    topic: 'Standup meeting'
  }
})
```

Please follow our [CodeMash API](https://docs.codemash.io/api/get-started) for all the details about each module and API capabilities.

| Module                                                                      | Description                                                                                                                                                            |
| --------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [`Project`](https://docs.codemash.io/api/project)                           | Save general and custom project settings, project deployment location, supported languages                                                                             |
| [`Membership`](https://docs.codemash.io/api/membership)                     | Manager users authentication and authorization, roles and permissions, OAuth logins, triggers                                                                          |
| [`Database`](https://docs.codemash.io/api/database)                         | Create a database with No Code. You automatically will get access to the data in your collection over fully managed and secure https endpoints                         |
| [`Files`](https://docs.codemash.io/api/files)                               | Store files for your project, optimize for separate screens and automatically bind files with the records from the database                                            |
| [`Code`](https://docs.codemash.io/api/code)                                 | Serverless code for your project. Write code in any language you have experience with or choose from dozens of pre-written built-in functions.                         |
| [`Push Notification`](https://docs.codemash.io/api/notifications/push)      | Send personal or bulk push notifications to your clients. Schedule them, plan to send by client time zone, and have different languages over each message you deliver. |
| [`Emails`](https://docs.codemash.io/api/notifications/emails)               | Send personal or bulk emails to your clients. Schedule them, plan to send by client time zone, and have different languages over each message you deliver.             |
| [`Server Events`](https://docs.codemash.io/api/notifications/server-events) | Web Standard with better HTTP fidelity than WebSockets. Receive push notifications from CodeMash Servers                                                               |
| [`Payments`](https://docs.codemash.io/api/payments)                         | Seamless payments integration. Choose any provider you like it                                                                                                         |
| [`Sheduler`](https://docs.codemash.io/api/scheduler)                        | Schedule your code functions by time, timezone, and frequency you want to run it.                                                                                      |
| [`Logs & monitoring`](https://docs.codemash.io/api/logs)                    | Grasp at what's happening on your project. Have tracing and application logs in one place.                                                                             |

- Project
  - [Getting started](https://docs.codemash.io/api/project)
- Database
  - [Find](https://docs.codemash.io/api/database/collections/find)
  - [Find By Id](https://docs.codemash.io/api/database/collections/find-one)

## 👉🏼 Hands-On

Run [tests](./CONTRIBUTING.md#tests) and see how it works

## Get help

- [GitHub Discussions](https://github.com/codemash-io/CodeMash.Js/discussions)
- [Twitter](https://twitter.com/codemash_io)

## License

CodeMash.Js is licensed under [Apache 2.0 License.](LICENSE). CodeMash.Js comes with an explicit [NOTICE](notice) file containing additional legal notices and information.
