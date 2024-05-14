import { Controller, Get, Post, Body, Patch, Param, Delete, ParseUUIDPipe, ParseIntPipe, UsePipes } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create.dto';
import { UpdateUserDto } from './dto/update.dto';
import { UuidValidationPipe } from 'src/pipe/custom.validation';


@Controller('user1')
export class UserController {
    constructor(private readonly userService: UserService) { }

    @Post()
    create(@Body() createUserDto: CreateUserDto) {
        return this.userService.create(createUserDto);
    }

    findAll() {
        return this.userService.findAll();
    }

    @Get(':id')
    // @UsePipes(new UuidValidationPipe()) // custom 
    findOne(@Param('id') id: number) {
        return this.userService.findOne(id);
    }

    @Patch(':id')
    update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
        return this.userService.update(id, updateUserDto);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.userService.remove(id);
    }
}