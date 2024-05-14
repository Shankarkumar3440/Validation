import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { UuidValidationPipe } from './pipe/custom.validation';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new UuidValidationPipe());
  await app.listen(3001);
}
bootstrap();
