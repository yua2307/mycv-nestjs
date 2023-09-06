import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateUserDto } from './create-user.dto';
import { UsersService } from './users.service';

@Controller('auth')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('/signup')
  createUser(@Body() { email, password }: CreateUserDto) {
    return this.usersService.createUser(email, password);
  }

  @Get('/user')
  getUsers() {
    return this.usersService.getUsers();
  }
}
