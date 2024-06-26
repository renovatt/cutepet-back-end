import { Controller, Get } from '@nestjs/common';
import { UsersService } from './users.service';
import { ActiveUserId } from '../../shared/decorators/active-user-id';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Users')
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get('/me')
  me(@ActiveUserId() userId: string) {
    return this.usersService.getUserById(userId);
  }
}
