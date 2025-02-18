import { Test, TestingModule } from '@nestjs/testing';
import { GHttpController } from './g-http.controller';
import { GHttpService } from './g-http.service';

describe('GHttpController', () => {
  let gHttpController: GHttpController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [GHttpController],
      providers: [GHttpService],
    }).compile();

    gHttpController = app.get<GHttpController>(GHttpController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(gHttpController.getHello()).toBe('Hello World!');
    });
  });
});
