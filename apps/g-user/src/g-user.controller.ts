import { Controller, Logger } from '@nestjs/common';
import { GUserService } from './g-user.service';
import {
  UserRequest,
  UserResponse,
  UserServiceController,
  UserServiceControllerMethods,
} from '../../../share/user';
import { Observable } from 'rxjs';

@Controller()
@UserServiceControllerMethods()
export class GUserController implements UserServiceController {
  private uid: string;
  constructor(private readonly gUserService: GUserService) {
    this.uid = this.randomString(5);
  }

  getUser(
    request: UserRequest,
  ): Promise<UserResponse> | Observable<UserResponse> | UserResponse {
    console.log(`[${this.uid}] getUser ${request.id}`);
    const userResponse: UserResponse = {
      ...this.gUserService.getUser(request.id),
      pid: process.pid.toString(),
    };
    return userResponse;
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
