import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Cat, CatDocument } from 'src/domains/schemas/cat.schema';
import { FindCatsCommand } from './command/findCats.command';
import { FindCatsResult } from './result/findCats.result';

export class FindCatsService {
  constructor(
    @InjectModel(Cat.name) private readonly catModel: Model<CatDocument>,
  ) {}

  async execute(command: FindCatsCommand): Promise<FindCatsResult> {
    const foundCats = await this.catModel.find({
      name: command.findOption.name,
    });

    const result = new FindCatsResult({
      ok: true,
      cats: foundCats.map((cat) => cat.toObject()),
    });
    return result;
  }
}
