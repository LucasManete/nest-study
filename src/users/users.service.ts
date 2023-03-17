import { ForbiddenException, Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Ok } from 'src/utils/custom-http-success';
import { errorHandlingUtil } from 'src/utils/error-handling.util';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { compare, generateHash } from 'src/utils/hash.util';
import { Employee } from 'src/employee/entities/employee.entity';


@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
    
    @InjectRepository(Employee)
    private employeeRepository: Repository<Employee>,
  ) {}

  async create(createUserDto: CreateUserDto) {
    createUserDto.password = await generateHash(createUserDto.password);
    const user = this.usersRepository.save(createUserDto);
    return user;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    this.usersRepository.update(id, updateUserDto);
    return { message: 'Success Update' };
  }

  findAll(): Promise<User[]> {
    return this.usersRepository.find();
  }

  findOne(id: number): Promise<User> {
    return this.usersRepository.findOneBy({ id });
  }

  async remove(id: string): Promise<object> {
    await this.usersRepository.delete(id);
    return { message: 'Success Delete' };
  }

  async login({ document, password }) {
    try {
      const user = await this.usersRepository.findOneBy({ document });
    
      if (!user) {
        throw new UnauthorizedException('Credenciais inválidas ou o usuário não existe.');
      }

      
      const validCredentials = await compare({
        password,
        hashedPassword: user.password,
      });

      if (!validCredentials) {
        throw new UnauthorizedException('Credenciais inválidas ou o usuário não existe.');
      }

      if (user.isActive) {
        throw new ForbiddenException('Usuário não validado.');
      }

      const userCompanies = await this.employeeRepository.find({ where: { id: user.id } });

      if (!userCompanies.length) {
        throw new NotFoundException('Usuário não está vinculado a nenhuma empresa');
      }

      // const token =  this.jwtService.sign(user)

      return Ok({
        message: 'Login efetuado com sucesso!',
        data: 'dasda',
      });
    } catch (error) {
      return errorHandlingUtil(error);
    }
  }
}


