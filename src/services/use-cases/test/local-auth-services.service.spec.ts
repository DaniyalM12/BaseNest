import { Test, TestingModule } from '@nestjs/testing';
import { LocalAuthService } from '../passport/local-auth';
require('dotenv').config();


describe('LocalAuthService', () => {
  let service: LocalAuthService;
  let data:any = undefined;
  let type:string="dealer";
  let user:any = {
    email: 'danish12345678@gmail.com',
    name: 'danish12345678',
    password: 'Dasn@1234567',
    number: '+923097904077',
    location: 'dasdas',
    address: 'string',
    description: 'description',
    website: 'string',
    picture: 'string',
  };

  const registerCallBack=async()=>{
    try {
      data = await service.registerUser(user, type);
    } catch (Err) {
      data = Err;
    }
  }

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LocalAuthService],
    }).compile();

    service = module.get<LocalAuthService>(LocalAuthService);    
  });

  it('should be register password must have uppercase characters', async() => {    

    user.password="guess@123";
    await registerCallBack();

    expect(data).toEqual({
      code: 'InvalidPasswordException',
      name: 'InvalidPasswordException',
      message: 'Password did not conform with policy: Password must have uppercase characters'
    });
  });
  it('should be register password not long enough',async () => { 

    user.password="g@123";
    await registerCallBack();

    expect(data).toEqual({
      code: 'InvalidPasswordException',
      name: 'InvalidPasswordException',
      message: 'Password did not conform with policy: Password not long enough'
    });
  });

  it('should be register password must have symbol characters',async () => { 

    user.password="Gaues123";
    await registerCallBack();

    expect(data).toEqual({
      code: 'InvalidPasswordException',
      name: 'InvalidPasswordException',
      message: 'Password did not conform with policy: Password must have symbol characters'
    });
  });

  it('should be register password must have numeric characters',async () => { 

    user.password="Gauessadsa@";
    await registerCallBack();

    expect(data).toEqual({
      code: 'InvalidPasswordException',
      name: 'InvalidPasswordException',
      message: 'Password did not conform with policy: Password must have numeric characters'
    });
  });

  it('should be register password must have lowercase characters',async () => { 

    user.password="GGHUWHSKK";
    await registerCallBack();

    expect(data).toEqual({
      code: 'InvalidPasswordException',
      name: 'InvalidPasswordException',
      message: 'Password did not conform with policy: Password must have lowercase characters'
    });
  });

  it('should be register already',async () => {

    user.email="danish12345@gmail.com"; 
    user.name="danish12345";
    user.password="Gaues@123";
    await registerCallBack();

    expect(data).toEqual({
      code: 'UsernameExistsException',
      name: 'UsernameExistsException',
      message: 'User already exists',
    });
  });

});
