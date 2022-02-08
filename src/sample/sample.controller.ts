import {
  Body,
  Controller,
  Get,
  Post,
  Request,
  UseGuards,
} from '@nestjs/common';
import { ApiBearerAuth, ApiProperty } from '@nestjs/swagger';
import { AuthService } from './auth.service';
import { JwtAuthGuard } from './guards/jwt.guard';
import { VerifiedRequest } from './strategies/jwt.strategy';
import { SignInAuthGuard } from './guards/sign-in.guard';
import { ValidatedRequest } from './strategies/sign-in.strategy';

class RequestBody {
  @ApiProperty({ default: 'username' })
  readonly username: string;
  @ApiProperty({ default: 'password' })
  readonly password: string;
}

@Controller('sample')
export class SampleController {
  constructor(private readonly authService: AuthService) {}

  @UseGuards(SignInAuthGuard)
  @Post('sign-in')
  async signIn(@Request() req: ValidatedRequest, @Body() body: RequestBody) {
    console.log(req.user);

    const { accessToken } = await this.authService.signIn(body.username);
    console.log('accessToken', accessToken);

    return;
  }

  @ApiBearerAuth()
  @UseGuards()
  @UseGuards(JwtAuthGuard)
  @Get('check')
  async check(@Request() req: VerifiedRequest) {
    console.log('check()');
    console.log(req.user);

    return;
  }
}
