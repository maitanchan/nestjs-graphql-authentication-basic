import { Resolver, Query, Args } from '@nestjs/graphql';
import { UsersService } from './users.service';
import { User } from './entities/user.entity';
import { UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/guard/jwt-auth.guard';

@Resolver(() => User)
export class UsersResolver {

  constructor(private readonly usersService: UsersService) { }

  @Query(() => [User], { name: 'users' })
  @UseGuards(JwtAuthGuard)
  getAllUsers() {

    return this.usersService.getAllUsers();

  }

  @Query(() => User, { name: 'user' })
  getUser(@Args('username') username: string) {

    return this.usersService.getUser(username);

  }


}
