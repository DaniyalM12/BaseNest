import { Test, TestingModule } from '@nestjs/testing';
import { LocalAuthFactoryService } from '../passport/local-auth';


describe('LocalAuthFactoryService', () => {
  let service: LocalAuthFactoryService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LocalAuthFactoryService],
    }).compile();

    service = module.get<LocalAuthFactoryService>(LocalAuthFactoryService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
