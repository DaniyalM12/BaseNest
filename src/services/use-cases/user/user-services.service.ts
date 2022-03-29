import { Injectable } from '@nestjs/common';
import { ICrmServices, IDataServices } from '../../../core/abstracts';
import { User } from '../../../core/entities';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class UserServices {
  constructor(
    private jwtService: JwtService,
    private dataServices: IDataServices,
    private crmServices: ICrmServices,
   
  ) {}

  private readonly users = [
    {
      userId: 1,
      email: 'john',
      password: 'changeme',
    },
    {
      userId: 2,
      email: 'maria',
      password: 'guess',
    },
  ];

  async fetchUsers() {
    return await this.dataServices.users.getAll();
  }
  async loginUsers(User: User): Promise<any> {
    let data = this.users.find(
      (user) => user.email === User.email && user.password === User.password,
    );
    if (!data) {
      return 'Data Not Founded';
    }
    const {password,...rest}=data;
    const jwt = await this.jwtService.signAsync({
      email: data.email,
      id: data.userId,
    });
    return { rest, access_token: jwt };
  }

  async createUser(user: User): Promise<User> {
    try {
      // call to our dependencies
      const createdUser = await this.dataServices.users.create(user);
      await this.crmServices.userAdded(createdUser);

      return createdUser;
    } catch (error) {
      throw error;
    }
  }
}
