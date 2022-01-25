export class FindCatsCommand {
  readonly findOption: {
    name?: string;
  };

  constructor(command: FindCatsCommand) {
    Object.assign(this, command);
  }
}
