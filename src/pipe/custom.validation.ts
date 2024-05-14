import { PipeTransform, Injectable, ArgumentMetadata, BadRequestException } from '@nestjs/common';
import { validate } from 'uuid';

@Injectable()
export class UuidValidationPipe implements PipeTransform {
    transform(value: any, metadata: ArgumentMetadata) {
        const isValidUuid = validate(value); // Check if the value is a valid UUID
        if (!isValidUuid) {
            throw new BadRequestException('Invalid UUID'); // Throw an error if not valid
        }
        return value;     // Return the value if valid
    }
}
