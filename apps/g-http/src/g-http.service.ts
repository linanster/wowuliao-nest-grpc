import { Inject, Injectable } from '@nestjs/common';
import {
  ClientGrpc,
  ClientProxyFactory,
  Transport,
} from '@nestjs/microservices';
import {
  USER_PACKAGE_NAME,
  USER_SERVICE_NAME,
  UserServiceClient,
} from 'share/user';

export class GrpcClientFactory {
  static create(): ClientGrpc {
    return ClientProxyFactory.create({
      transport: Transport.GRPC,
      options: {
        package: USER_PACKAGE_NAME,
        protoPath: 'proto/user.proto',
        url: 'localhost:50051',
      },
    }) as ClientGrpc;
  }
}

@Injectable()
export class GHttpService {
  private readonly userService: UserServiceClient;

  constructor(@Inject(USER_PACKAGE_NAME) private client: ClientGrpc) {
    this.userService =
      this.client.getService<UserServiceClient>(USER_SERVICE_NAME);
  }
  //   // this.userService =
  //   //   this.client.getService<UserServiceClient>(USER_SERVICE_NAME);
  //   // console.log(this.client.getService<UserServiceClient>(USER_SERVICE_NAME));
  // }
  // getHello() {
  //   // 创建客户端
  //   const client = GrpcClientFactory.create();
  //   const uService = client.getService<UserServiceClient>(USER_SERVICE_NAME);
  //   return new Promise((resolve, reject) => {
  //     uService.getUser({ id: 'some' }).subscribe({
  //       next: (data) => {
  //         resolve(data);
  //       },
  //       complete: () => {
  //         // 请求完成后断开连接
  //         (client as any).close();
  //       },
  //       error: (err) => {
  //         reject(err);
  //       },
  //     });
  //   });
  // }

  // getHello() {
  //   return { user: '1' };
  // }

  getHello(someId: string) {
    return this.userService.getUser({ id: someId });
  }
}
