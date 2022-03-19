import { Test, TestingModule } from '@nestjs/testing';
import { AuthorServices } from '../author';

describe('AuthorServices', () => {
  let service: AuthorServices;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AuthorServices],
    }).compile();

    service = module.get<AuthorServices>(AuthorServices);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
