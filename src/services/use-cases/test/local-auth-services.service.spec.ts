import { Test, TestingModule } from '@nestjs/testing';
import { LocalAuthService } from '../passport/local-auth';
require('dotenv').config();

describe('LocalAuthService', () => {
  let service: LocalAuthService;
  let data:any = undefined;
  let type:string="dealer";
  let user:any = {
    email: 'ansarid036@gmail.com',
    name: 'danish126',
    password: 'Dasn@1234567',
    number: '+923097904077',
    location: 'dasdas',
    address: 'string',
    description: 'description',
    website: 'string',
    picture: 'string',
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LocalAuthService],
    }).compile();

    service = module.get<LocalAuthService>(LocalAuthService);

    try {
      data = await service.registerUser(user, type);
    } catch (Err) {
      data = Err;
    }
  });

  it('should be register password must have uppercase characters', async () => {    
    data.password="guess@123"
    expect(data).toEqual({
      code: 'InvalidPasswordException',
      name: 'InvalidPasswordException',
      message: 'Password did not conform with policy: Password must have uppercase characters',
      password: "guess@123"
    });
  });
  it('should be register password not long enough', async () => { 
    data.password="g@123"
    expect(data).toEqual({
      code: 'InvalidPasswordException',
      name: 'InvalidPasswordException',
      message: 'Password did not conform with policy: Password not long enough'
    });
  });
  it('should be register already', async () => { 
    expect(data).toEqual({
      code: 'UsernameExistsException',
      name: 'UsernameExistsException',
      message: 'User already exists',
    });
  });

});
