import { NestFactory } from '@nestjs/core';
import { GUserModule } from './g-user.module';
import { GrpcOptions, Transport } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.create(GUserModule);
  await app.connectMicroservice<GrpcOptions>({
    transport: Transport.GRPC,
    options: {
      package: 'user',
      protoPath: 'proto/user.proto',
      url: process.env.GRPC_SERVER_USER_URL ?? '0.0.0.0:50051',
    },
  });

  await app.startAllMicroservices();
}
bootstrap();
