import { Injectable } from '@nestjs/common';

@Injectable()
export class GUserService {
  getUser(id: string): { id: string; name: string } {
    return {
      id,
      name: 'John Doe',
    };
  }
}
