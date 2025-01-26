import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { ReviewsService } from 'src/reviews/reviews.service';

@Injectable()
export class UsersService {
  constructor(
    @Inject(forwardRef(() => ReviewsService))
    private readonly reviewsService: ReviewsService,
  ) {}
  public getAll() {
    return [
      { id: 1, name: 'John Doe' },
      { id: 2, name: 'Jane Smith' },
      { id: 3, name: 'Alice Johnson' },
    ];
  }
}
