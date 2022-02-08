import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { JwtPayload } from './strategies/jwt.strategy';

@Injectable()
export class AuthService {
  /** @todo Inject User Model */
  constructor(private readonly jwtService: JwtService) {}

  /** SignIn時のUseGuardで利用
   * ユーザーの有無のチェック
   * パスワードの整合性をチェック
   */
  async validateUser(username: string, password: string) {
    return true;
  }

  /** SignIn時にアクセストークンを発行する */
  async signIn(userId: string): Promise<{ accessToken: string }> {
    const payload: JwtPayload = { userId };
    const accessToken = this.jwtService.sign(payload);
    return { accessToken: accessToken };
  }
}
