import { Controller, Get, Param } from '@nestjs/common';
import { FindCatService } from 'src/services/cats/findCat.service';

class RequestParams {
  readonly id: string;
}

@Controller('cats')
export class FindCatController {
  constructor(private readonly findCatService: FindCatService) {}

  @Get(':id')
  async handle(@Param() reqParams: RequestParams) {
    console.log(reqParams);

    await this.findCatService.execute({ catId: reqParams.id });

    return {};
  }
}
