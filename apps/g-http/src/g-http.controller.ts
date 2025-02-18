import { Controller, Get } from '@nestjs/common';
import { GHttpService } from './g-http.service';

@Controller()
export class GHttpController {
  id: string;
  constructor(private readonly gHttpService: GHttpService) {
    this.id = this.randomString(4);
  }

  @Get()
  getHello() {
    console.log(`[${this.id}] getHello`);
    return this.gHttpService.getHello(this.id);
  }

  randomString(len: number): string {
    const chars =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const maxPos = chars.length;
    let randomString = '';
    for (let i = 0; i < len; i++) {
      randomString += chars.charAt(Math.floor(Math.random() * maxPos));
    }
    return randomString;
  }
}
