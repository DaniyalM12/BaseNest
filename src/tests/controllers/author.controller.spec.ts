import {Test, TestingModule} from '@nestjs/testing';
import {AuthorController} from '../../controllers';
import {AuthorServicesModule} from "../../services/use-cases/author";

describe('AuthorController', () => {
  let controller: AuthorController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [AuthorServicesModule],
      controllers: [AuthorController],
    }).compile();

    controller = module.get<AuthorController>(AuthorController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('it should be authors list',  async () => {
    const authors =  await controller.getAuthors();
    await expect(authors).toBeInstanceOf(Array);
  })
});
