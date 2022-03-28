import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {DocumentBuilder, SwaggerModule} from "@nestjs/swagger";
import {Logger} from "@nestjs/common";

// global['fetch'] = require('node-fetch');

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = new DocumentBuilder()
      .setTitle('Gorex')
      .setDescription('The Gorex API description')
      .setVersion('1.0')
      .addTag('gorex')
      .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  await app.listen(3000);
}
bootstrap();
