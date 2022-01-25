import { Body, Controller, Post } from '@nestjs/common';
import { CreateCatCommand } from 'src/services/cats/command/createCat.command';
import { CreateCatService } from 'src/services/cats/createCat.service';

class RequestBody {
  readonly cat: { name: string; age: number };
}

@Controller('cats')
export class CreateCatController {
  constructor(private readonly createCatService: CreateCatService) {}

  @Post()
  async handle(@Body() reqBody: RequestBody) {
    const command = new CreateCatCommand({
      name: reqBody.cat.name,
      age: reqBody.cat.age,
    });
    console.log('command', command);

    const result = await this.createCatService.execute(command);
    return result;
  }
}
