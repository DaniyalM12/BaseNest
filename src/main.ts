import {NestFactory} from '@nestjs/core';
import {AppModule} from './app.module';
import {DocumentBuilder, SwaggerModule} from "@nestjs/swagger";
import {MongoDataServicesModule} from "./frameworks/data-services/mongo/mongo-data-services.module";
import {ConfigModule, ConfigService} from "@nestjs/config";
require('dotenv').config({ path: `../.env` });



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
