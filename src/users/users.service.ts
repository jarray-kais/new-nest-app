import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  public getAll() {
    return [
      { id: 1, name: 'John Doe' },
      { id: 2, name: 'Jane Smith' },
      { id: 3, name: 'Alice Johnson' },
    ];
  }
}
