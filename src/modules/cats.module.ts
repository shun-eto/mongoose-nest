import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Cat, CatSchema } from '../domains/schemas/cat.schema';
import { CreateCatController } from 'src/controllers/cats/createCat.controller';
import { CreateCatService } from 'src/services/cats/createCat.service';
import { FindCatsController } from 'src/controllers/cats/findCats.controller';
import { FindCatsService } from 'src/services/cats/findCats.service';
import { FindCatController } from 'src/controllers/cats/findCat.controller';
import { FindCatService } from 'src/services/cats/findCat.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Cat.name,
        schema: CatSchema,
      },
    ]),
  ],
  controllers: [CreateCatController, FindCatsController, FindCatController],
  providers: [CreateCatService, FindCatsService, FindCatService],
})
export class CatsModule {}
