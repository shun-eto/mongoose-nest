import { LeanDocument } from 'mongoose';
import { Cat } from 'src/domains/schemas/cat.schema';

export class CreateCatResult {
  readonly ok: boolean;
  readonly createdCat: LeanDocument<Cat>;

  constructor(result: CreateCatResult) {
    this.ok = result.ok;
    this.createdCat = result.createdCat;
  }
}
