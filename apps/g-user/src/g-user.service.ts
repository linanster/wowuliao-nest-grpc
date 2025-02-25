import { Injectable } from '@nestjs/common';

const os = require('os');

@Injectable()
export class GUserService {
  getUser(id: string): { id: string; name: string } {
    return {
      id,
      // name: 'John Doe',
      name: os.hostname()
    };
  }
}
