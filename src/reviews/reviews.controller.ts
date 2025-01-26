import { Controller, Get } from '@nestjs/common';
import { ReviewsService } from './reviews.service';
import { UsersService } from 'src/users/users.service';

@Controller('/api/reviews')
export class ReviewsController {
  constructor(
    private readonly reviewsService: ReviewsService,
    private readonly userService: UsersService,
  ) {}

  @Get()
  public getAllReviews() {
    return this.reviewsService.getAll();
  }
}
