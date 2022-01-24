import { Body, Controller, Get, Post } from '@nestjs/common';
import { CatsService } from './cats.service';
import { CreateCatDto } from './createCat.dto';
import { Cat } from './cat.schema';

@Controller('cats')
export class CatsController {
  constructor(private readonly catsService: CatsService) {}

  @Post()
  async create(@Body() createCatDto: CreateCatDto) {
    await this.catsService.create(createCatDto);
  }

  @Get()
  async findAll(): Promise<Cat[]> {
    const cats = await this.catsService.findAll();
    console.log('cat', cats[0]);
    cats[0].testMethod();

    return cats;
  }
}
