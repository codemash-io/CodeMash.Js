/* eslint-disable no-await-in-loop */
/* eslint-disable no-restricted-syntax */
import { Cookie, JsonServiceClient } from '@servicestack/client';

import { Hub } from './types/codemash.hub.dtos';
import { CMConfig, ICMConfig } from '../src/config';
import { Guid, Schema } from '../src/types';

export class ProjectOutput {
  public accountId?: Guid;

  public projectId?: Guid;

  public apiUserId?: Guid;

  public apiAdminToken?: string;

  public email?: string;

  public password?: string;

  public databaseClusterId?: Guid;

  public cookies: {
    [index: string]: Cookie;
  };
}

export class CodeMashProjectBuilder {
  public uniqueEmail: string = `${Guid.NewGuid().ToString()}@gmail.com`;

  public output: ProjectOutput;

  public appSettings: ICMConfig;

  private builderQueue: Array<() => Promise<void>> = [];

  constructor() {
    this.output = new ProjectOutput();
    this.appSettings = new CMConfig();
  }

  public static get New(): CodeMashProjectBuilder {
    return new CodeMashProjectBuilder();
  }

  public CreateAccount(
    request: Hub.CreateAccount | undefined = undefined,
  ): CodeMashProjectBuilder {
    this.builderQueue.push(async () => {
      console.log('CreateAccount');

      const client = new JsonServiceClient(this.appSettings.hubUri);
      const createAccountRequest =
        request ||
        new Hub.CreateAccount({
          firstName: 'Brad',
          lastName: 'Pitt',
          email: this.uniqueEmail,
          password: 'aaa',
        });

      const response: Hub.CreateAccountResponse = await client.post(
        createAccountRequest,
      );

      this.output.password = createAccountRequest.password;
      this.output.email = createAccountRequest.email;
      this.output.accountId = new Guid(response.result);
    });

    return this;
  }

  public SignInToHub(): CodeMashProjectBuilder {
    this.builderQueue.push(async () => {
      console.log('SignInToHub');
      const client = new JsonServiceClient(this.appSettings.hubUri);

      const request = new Hub.AuthenticateToAccount({
        userName: this.output.email,
        password: this.output.password,
        accountId: this.output.accountId?.ToString(),
      });

      const response: Hub.AuthenticateToAccountResponse = await client.post(
        request,
      );

      this.output.cookies = client.cookies;
    });

    return this;
  }

  public CreateNewProject(
    request: Hub.CreateProject | undefined = undefined,
  ): CodeMashProjectBuilder {
    this.builderQueue.push(async () => {
      console.log('CreateNewProject');
      const client = new JsonServiceClient(this.appSettings.hubUri);
      client.cookies = this.output.cookies;

      const createProjectRequest =
        request ||
        new Hub.CreateProject({
          projectName: 'Test Project',
          description: 'Some test project',
          zoneName: 'central-europe-1',
        });

      const response: Hub.CreateProjectResponse = await client.post(
        createProjectRequest,
      );

      this.output.projectId = new Guid(response.result);
    });

    return this;
  }

  public CreateAdminAsServiceUser(): CodeMashProjectBuilder {
    this.builderQueue.push(async () => {
      console.log('CreateAdminAsServiceUser');
      const client = new JsonServiceClient(this.appSettings.hubUri);
      client.cookies = this.output.cookies;

      const request = new Hub.RegisterServiceUser({
        displayName: 'Project Administrator',
        projectId: this.output.projectId?.ToString(),
        rolesTree: [
          new Hub.UserRoleUpdateInput({
            role: 'Administrator',
          }),
        ],
      });

      const response: Hub.RegisterServiceUserResponse = await client.post(
        request,
      );

      this.output.apiUserId = new Guid(response.result);

      const regenerateUserTokenRequest = new Hub.RegenerateServiceUserToken({
        id: this.output.apiUserId?.ToString(),
        projectId: this.output.projectId?.ToString(),
      });

      const regenerateUserTokenResponse: Hub.RegisterServiceUserResponse = await client.put(
        regenerateUserTokenRequest,
      );

      this.output.apiAdminToken = regenerateUserTokenResponse.result.replace(
        'Bearer: ',
        '',
      );
    });

    return this;
  }

  public EnableDatabase(): CodeMashProjectBuilder {
    this.builderQueue.push(async () => {
      console.log('EnableDatabase');
      const client = new JsonServiceClient(this.appSettings.hubUri);
      client.cookies = this.output.cookies;

      const request = new Hub.EnableDatabase({
        projectId: this.output.projectId?.ToString(),
        provider: 'CodeMash',
        freeRegion: 'eu-central-1',
      });
      const response: Hub.EstablishDatabaseResponse = await client.get(request);

      this.output.databaseClusterId = new Guid(response.result);
    });

    return this;
  }

  public AddNewCollection(schema: Schema): CodeMashProjectBuilder {
    this.builderQueue.push(async () => {
      console.log('AddNewCollection');
      const client = new JsonServiceClient(this.appSettings.hubUri);
      client.cookies = this.output.cookies;

      const request = new Hub.CreateSchema({
        collectionName: schema.collectionName,
        jsonSchema: JSON.stringify(schema.jsonSchema),
        uiSchema: JSON.stringify(schema.uiSchema),
        projectId: this.output.projectId?.ToString(),
      });
      const response: Hub.CreateSchemaResponse = await client.post(request);

      this.output.databaseClusterId = new Guid(response.result);
    });

    return this;
  }

  public AddEmployeesTemplateSchema(): CodeMashProjectBuilder {
    this.builderQueue.push(async () => {
      console.log('AddNewCollection From Template');

      const employeesSchemaTemplateId = '5e70ed82362de9480cc3598b';

      const client = new JsonServiceClient(this.appSettings.hubUri);
      client.cookies = this.output.cookies;

      const request = new Hub.CreateSchemaFromTemplate({
        id: employeesSchemaTemplateId,
        names: {
          employees: 'Employees',
          'absence-types': 'Absence Types',
          countries: 'Countries',
          cities: 'Cities',
          departments: 'Departments',
          divisions: 'Divisions',
          'job-titles': 'Job Titles',
          'office-locations': 'Office Locations',
        },
        created: [
          'employees',
          'absence-types',
          'countries',
          'cities',
          'departments',
          'divisions',
          'job-titles',
          'office-locations',
        ],
        projectId: this.output.projectId?.ToString(),
      });

      const response: Hub.CreateSchemaFromTemplateResponse = await client.post(
        request,
      );
    });

    return this;
  }

  public async runSerial(tasks: Array<() => Promise<void>>) {
    let result = Promise.resolve();
    tasks.forEach((task) => {
      result = result
        .then(() => task())
        .then(
          () =>
            new Promise((resolve) => {
              setTimeout(() => {
                resolve();
              }, 1500);
            }),
        );
    });
    await result;
  }

  public async Build(): Promise<ProjectOutput> {
    await this.runSerial(this.builderQueue);
    console.log(this.output);
    return this.output;
  }
}
