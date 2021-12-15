import { get } from "server/v2";
import { ICodeMashDbListRequestBase, ICodeMashDbRequestBase, IFindRequest } from "../types/database";

interface IGetRecordsRequest extends ICodeMashDbRequestBase, ICodeMashDbListRequestBase, IFindRequest {}

export async function getRecords<T>(options: IGetRecordsRequest) {
  const response = await get<typeof options, T>('/v2/db/SDK/find', options);
  return response;
}

