import 'dotenv/config';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { Logger } from '@nestjs/common';
import { env } from '@config/env';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const PORT = parseInt(env.PORT || '5000', 10);

  app.useGlobalPipes(new ValidationPipe());
  app.useGlobalGuards();
  app.enableCors({
    origin: '*',
  });

  await app.listen(PORT);
  Logger.log(`🚀 Application is running on: http://localhost:${PORT}`);
}

bootstrap();
