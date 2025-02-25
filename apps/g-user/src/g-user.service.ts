import { Injectable } from '@nestjs/common';

const os = require('os');

@Injectable()
export class GUserService {
  getUser(id: string): { id: string; hostname: string } {
    return {
      id,
      // name: 'John Doe',
      hostname: os.hostname()
    };
  }
}
