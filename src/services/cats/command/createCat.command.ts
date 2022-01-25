export class CreateCatCommand {
  readonly name: string;
  readonly age: number;

  constructor(command: CreateCatCommand) {
    Object.assign(this, command);
  }
}
