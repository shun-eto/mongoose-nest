import { Controller, Get, Query } from '@nestjs/common';
import { FindCatsCommand } from 'src/services/cats/command/findCats.command';
import { FindCatsService } from 'src/services/cats/findCats.service';

class RequestQuery {
  readonly name?: string;
}

@Controller('cats')
export class FindCatsController {
  constructor(private readonly findCatsService: FindCatsService) {}

  @Get()
  async handle(@Query() reqQuery: RequestQuery) {
    const command = new FindCatsCommand({
      findOption: { name: reqQuery.name },
    });

    const result = await this.findCatsService.execute(command);
    return result;
  }
}
