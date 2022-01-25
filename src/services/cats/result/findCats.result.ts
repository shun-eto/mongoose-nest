import { LeanDocument } from 'mongoose';
import { Cat } from 'src/domains/schemas/cat.schema';

export class FindCatsResult {
  readonly ok: boolean;
  readonly cats: LeanDocument<Cat>[];

  constructor(result: FindCatsResult) {
    Object.assign(this, result);
  }
}
