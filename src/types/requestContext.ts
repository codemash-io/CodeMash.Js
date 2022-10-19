import { Guid } from './guid';

export class RequestContext {
  constructor(
    public readonly projectId: Guid | undefined = undefined,
    public readonly apiKey: string | undefined = undefined,
    public readonly cluster: string | undefined = undefined,
  ) {}
}
