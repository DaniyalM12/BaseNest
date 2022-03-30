import { Test, TestingModule } from '@nestjs/testing';
import { LocalAuthService } from '../passport/local-auth';
require('dotenv').config();

describe('LocalAuthService', () => {
  let service: LocalAuthService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LocalAuthService],
    }).compile();

    service = module.get<LocalAuthService>(LocalAuthService);
  });

  it('should be register', async() => {
    let user = {
      email: 'ansarid036@gmail.com',
      name: 'danishali1',
      password: 'Dasn@1234567',
      number: '+923097904077',
      location: 'dasdas',
      address: 'string',
      description: 'description',
      website: 'string',
      picture: 'string',
    };
    //console.log(await localAuthService.registerUser(user));
    let user=await service.registerUser(user,"dealer")
    console.log(user);
    
    expect(user).toBe("User already exists");
  });


//   it('should be exception', () => {
//     let localAuthService = new LocalAuthService();
//     let user = {
//       email: 'ansarid036@gmail.com',
//       name: 'danishali1',
//       password: 'D@1234567',
//       number: '198237272',
//       location: 'dasdas',
//       address: '',
//       description: 'description',
//       website: '',
//       picture: '',
//     };
//     expect(localAuthService.registerUser(user)).toThrowError();
//   });


});
