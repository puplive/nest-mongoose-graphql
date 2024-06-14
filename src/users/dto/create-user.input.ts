import { InputType, Int, Field } from '@nestjs/graphql';
import { IsEmail, IsNotEmpty } from 'class-validator';

@InputType()
export class CreateUserInput {
  @Field(() => String, { description: 'Example field (placeholder)' })
  name: string;
  @Field(() => Int, { description: 'Example field (placeholder)' })
  age?: number;

  @IsEmail()
  @Field(() => String, { description: 'Example field (placeholder)' })
  email: string;

  @IsNotEmpty()
  @Field(() => String, { description: 'Example field (placeholder)' })
  password: string;
  
  @Field(() => String, { description: 'Example field (placeholder)' })
  role?: string;
}
