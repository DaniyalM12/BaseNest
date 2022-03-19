import { Test, TestingModule } from '@nestjs/testing';
import { BookFactoryService } from '../book';

describe('BookFactoryService', () => {
  let service: BookFactoryService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BookFactoryService],
    }).compile();

    service = module.get<BookFactoryService>(BookFactoryService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
