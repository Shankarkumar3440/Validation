import { CreateUserDto } from "./create.dto";

export class UpdateUserDto extends (CreateUserDto) {
    id: string
    firstName: string;
    lastName: string;
    age: number;
}



