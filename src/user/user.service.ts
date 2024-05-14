import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create.dto';
import { UpdateUserDto } from './dto/update.dto';
import { User } from './entities/user.entities';

@Injectable()
export class UserService {

    constructor(@InjectRepository(User) private readonly userRepository: Repository<User>) { }

    async create(createUserDto: CreateUserDto): Promise<User> {
        const user: User = new User();
        user.firstName = createUserDto.firstName;
        user.lastName = createUserDto.lastName;
        user.age = createUserDto.age;
        return await this.userRepository.save(user);
    }

    async findAll(): Promise<User[]> {
        return await this.userRepository.find();
    }

    async findOne(id): Promise<User> {
        console.log("Id", id)
        const user = await this.userRepository.findOne({ where: { id: id } });
        if (!user) {
            throw new NotFoundException(`User with ID ${id} not found`);
        }
        return user;
    }


    async update(id: string, updateUserDto: UpdateUserDto): Promise<User> {
        const user: User = await this.findOne(id);
        if (!user) {
            throw new NotFoundException(`User with ID ${id} not found`);
        }

        user.firstName = updateUserDto.firstName;
        user.lastName = updateUserDto.lastName;
        user.age = updateUserDto.age;

        return await this.userRepository.save(user);
    }

    async remove(id: string): Promise<void> {
        const result = await this.userRepository.delete(id);
        if (result.affected === 0) {
            throw new NotFoundException(`User with ID ${id} not found`);
        }
    }
}
