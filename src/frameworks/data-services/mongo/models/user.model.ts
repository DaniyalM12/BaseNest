import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type UserDocument = User & Document;

@Schema()
export class User {
    @Prop()
    email: string;

    @Prop()
    name: string;

    @Prop()
    password: string;

    @Prop()
    number: string;

    @Prop()
    location: string;

    @Prop()
    description: string;

    @Prop()
    url: string;

    @Prop()
    image: string;
    
}


export const UserSchema = SchemaFactory.createForClass(User);
