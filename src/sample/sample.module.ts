import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { AuthService } from './auth.service';
import { jwtOptions, JwtStrategy } from './strategies/jwt.strategy';
import { SampleController } from './sample.controller';
import { SignInStrategy } from './strategies/sign-in.strategy';

/**
 * AuthServiceを利用するModuleで
 * - JwtModule (JwtModule.register(jwtOptions))
 * - Strategies (SignInStrategy, JwtStrategy)
 * を注入する必要がある
 */
@Module({
  imports: [JwtModule.register(jwtOptions)],
  controllers: [SampleController],
  providers: [AuthService, SignInStrategy, JwtStrategy],
})
export class SampleModule {}
