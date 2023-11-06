import 'dotenv/config';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import * as cors from 'cors';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(new ValidationPipe());
  // app.enableCors({
  //   origin: '*',
  // });
  app.use(
    cors({
      origin: '*',
    }),
  );

  await app.listen(process.env.PORT, '0.0.0.0');
}
bootstrap();
