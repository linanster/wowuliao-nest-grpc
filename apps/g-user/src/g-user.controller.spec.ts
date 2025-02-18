import { Test, TestingModule } from '@nestjs/testing';
import { GUserController } from './g-user.controller';
import { GUserService } from './g-user.service';

describe('GUserController', () => {
  let gUserController: GUserController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [GUserController],
      providers: [GUserService],
    }).compile();

    gUserController = app.get<GUserController>(GUserController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(gUserController.getHello()).toBe('Hello World!');
    });
  });
});
