import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { Cat, CatDocument } from 'src/domains/schemas/cat.schema';

export class FindCatCommand {
  catId: string;
}
export class FindCatResult {}

export class FindCatService {
  constructor(
    @InjectModel(Cat.name) private readonly catModel: Model<CatDocument>,
  ) {}

  async execute(command: FindCatCommand) {
    const id = new Types.ObjectId(command.catId);

    const cat = await this.catModel.findById(id);
    console.log(cat);
    return cat;
  }
}
