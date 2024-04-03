import 'dotenv/config';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { Logger } from '@nestjs/common';
import { env } from './shared/config/env';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const PORT = parseInt(env.PORT || '5000', 10);

  const SWAGGER_TITLE = 'CutePet API';
  const SWAGGER_DESCRIPTION =
    'Documentação CutePet API - Desenvolvida para um sistema de agendamentos.';
  const SWAGGER_PREFIX = '/docs';

  const config = new DocumentBuilder()
    .setTitle(SWAGGER_TITLE)
    .setDescription(SWAGGER_DESCRIPTION)
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup(SWAGGER_PREFIX, app, document);

  app.useGlobalPipes(new ValidationPipe());
  app.useGlobalGuards();
  app.enableCors({
    origin: '*',
  });

  await app.listen(PORT);
  Logger.log(`🚀 Application is running on: http://localhost:${PORT}`);
}

bootstrap();
