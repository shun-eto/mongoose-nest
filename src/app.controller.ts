import { Controller, Get, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from './sample/guards/jwt.guard';

@Controller()
export class AppController {
  @UseGuards(JwtAuthGuard)
  @Get('test')
  async test() {
    console.log('test');

    return;
  }
}
