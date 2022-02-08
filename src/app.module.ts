import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { CatsModule } from './modules/cats.module';
import { SampleModule } from './sample/sample.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/test'),
    CatsModule,
    SampleModule,
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
