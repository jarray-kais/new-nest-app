import { Controller, Get } from '@nestjs/common';
import { UsersService } from './users.service';
import { ReviewsService } from 'src/reviews/reviews.service';

@Controller('/api/users')
export class UsersController {
  constructor(
    private readonly usersService: UsersService,
    private readonly reviews: ReviewsService,
  ) {}

  @Get()
  public getAllUsers() {
    return this.usersService.getAll();
  }
}
