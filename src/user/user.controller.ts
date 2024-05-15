import { Controller, Get, Post, Body, Patch, Param, Delete, ParseUUIDPipe, ParseIntPipe, UsePipes } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create.dto';
import { UpdateUserDto } from './dto/update.dto';
import { UuidValidationPipe } from 'src/pipe/custom.validation';


@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) { }

    @Post()
    create(@Body() createUserDto: CreateUserDto) {
        return this.userService.create(createUserDto);
    }

    @Get(':id')
    findOne(@Param('id', new UuidValidationPipe()) id: number) {
        return this.userService.findOne(id);
    }

    @Patch(':id')
    update(@Param('id', new UuidValidationPipe()) id: string, @Body() updateUserDto: UpdateUserDto) {
        return this.userService.update(id, updateUserDto);
    }

    @Delete(':id')
    remove(@Param('id', new UuidValidationPipe()) id: string) {
        return this.userService.remove(id);
    }
}