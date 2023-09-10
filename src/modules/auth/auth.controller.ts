import { Body, Controller, Post } from '@nestjs/common';
import { SignupDto } from './dtos/signup';
import { AuthService } from './auth.service';
import { SigninDto } from './dtos/signin';
import { IsPublic } from 'src/shared/decorators/isPublic';

@IsPublic()
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('signin')
  signin(@Body() signinDto: SigninDto) {
    return this.authService.signin(signinDto);
  }

  @Post('signup')
  create(@Body() signupDto: SignupDto) {
    return this.authService.signup(signupDto);
  }
}
