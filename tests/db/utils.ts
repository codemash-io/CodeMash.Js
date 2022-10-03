import faker from '@faker-js/faker';

import { deleteMany, insertOne } from '../../src/modules/database';
import {
  DeleteManyRequest,
  InsertOneRequest,
  InsertOneResponse,
} from '../../src/types/codemash.dtos';
import Config from '../config/codemash.json';

export class TestUtils {
  private static async createEmployee(): Promise<InsertOneResponse> {
    const request = new InsertOneRequest({
      collectionName: Config.DATABASE.COLLECTIONS.EMPLOYEES,
      document: {
        first_name: faker.name.findName(),
        last_name: faker.name.lastName(),
        birth_date: Math.floor(
          faker.date
            .between('1982-09-17T00:00:00.000Z', '2022-09-29T00:00:00.000Z')
            .getTime(),
        ),
      },
    });
    const response = await insertOne(request);
    return response;
  }

  public static async FillInEmployees(): Promise<void> {
    let i = 0;
    const calls: Promise<InsertOneResponse>[] = [];
    while (i < 10) {
      calls.push(TestUtils.createEmployee());
      i += 1;
    }
    await Promise.all(calls);
  }

  public static async CleanUpEmployeesCollection(): Promise<void> {
    const request = new DeleteManyRequest({
      collectionName: Config.DATABASE.COLLECTIONS.EMPLOYEES,
    });
    await deleteMany(request);
  }
}
