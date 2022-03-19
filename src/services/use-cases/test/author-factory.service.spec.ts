import { Test, TestingModule } from '@nestjs/testing';
import { AuthorFactoryService } from '../author';

describe('AuthorFactoryService', () => {
  let service: AuthorFactoryService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AuthorFactoryService],
    }).compile();

    service = module.get<AuthorFactoryService>(AuthorFactoryService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
