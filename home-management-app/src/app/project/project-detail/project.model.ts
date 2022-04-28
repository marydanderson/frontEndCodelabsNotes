import { ProjectScope } from "../project-scope.model";

export class Project {
  constructor(
    // public id: number,
    public name: string,
    public room: string,
    public description: string,
    public status: string,
    public grandTotal: number,
    public scope?: ProjectScope,
  ) {}
}
