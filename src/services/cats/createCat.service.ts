import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Cat, CatDocument } from 'src/domains/schemas/cat.schema';
import { CreateCatCommand } from './command/createCat.command';
import { CreateCatResult } from './result/createCat.result';

export class CreateCatService {
  constructor(
    @InjectModel(Cat.name) private readonly catModel: Model<CatDocument>,
  ) {}

  async execute(command: CreateCatCommand): Promise<CreateCatResult> {
    const cat = new Cat({ name: command.name, age: command.age });
    const createdCat = await this.catModel.create(cat);

    const result = new CreateCatResult({
      ok: true,
      createdCat: createdCat.toObject(),
    });

    return result;
  }
}
