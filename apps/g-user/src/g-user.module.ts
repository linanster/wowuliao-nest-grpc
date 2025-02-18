import { Module } from '@nestjs/common';
import { GUserController } from './g-user.controller';
import { GUserService } from './g-user.service';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true })],
  controllers: [GUserController],
  providers: [GUserService],
})
export class GUserModule {}
