import { Module } from '@nestjs/common';
import { GHttpController } from './g-http.controller';
import { GHttpService } from './g-http.service';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { USER_PACKAGE_NAME } from 'share/user';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    ClientsModule.register([
      {
        name: USER_PACKAGE_NAME,
        transport: Transport.GRPC,
        options: {
          package: USER_PACKAGE_NAME,
          protoPath: 'proto/user.proto',
          url:
            process.env['GRPC_CLIENT_USER_URL'] ?? 'dns:///grpc-service:50051',
          channelOptions: {
            'grpc.service_config': JSON.stringify({
              loadBalancingConfig: [{ round_robin: {} }],
            }),
            'grpc.dns_min_time_between_resolutions_ms': 5000, // 可选：每 5 秒刷新 DNS
          },
        },
      },
    ]),
  ],
  controllers: [GHttpController],
  providers: [GHttpService],
})
export class GHttpModule {}
