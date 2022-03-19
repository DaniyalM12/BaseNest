import {Test, TestingModule} from '@nestjs/testing';
import {BookServices} from '../book';

describe('BookServices', () => {
  let service: BookServices;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BookServices],
    }).compile();

    service = module.get<BookServices>(BookServices);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
