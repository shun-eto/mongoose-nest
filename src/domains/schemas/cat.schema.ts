import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type CatDocument = Cat & Document;

@Schema()
export class Cat {
  @Prop()
  name: string;

  @Prop()
  age: number;

  @Prop()
  breed: string;

  constructor(cat: Partial<Cat>) {
    Object.assign(this, cat);
  }

  method1() {
    console.log('this.name', this.name);
  }
}

export const CatSchema = SchemaFactory.createForClass(Cat);

CatSchema.loadClass(Cat);
