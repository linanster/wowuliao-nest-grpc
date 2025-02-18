import { NestFactory } from '@nestjs/core';
import { GHttpModule } from './g-http.module';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(GHttpModule);
  Logger.log(`Run on ${process.env.HTTP_PORT ?? 5001}`);
  await app.listen(process.env.HTTP_PORT ?? 5001);
}
bootstrap();
