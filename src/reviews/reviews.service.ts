import { Injectable } from '@nestjs/common';

@Injectable()
export class ReviewsService {
  public getAll() {
    return [
      { id: 1, rating: 4, comment: 'good' },
      { id: 2, rating: 5, comment: 'excellent' },
      { id: 3, rating: 3, comment: 'average' },
    ];
  }
}
