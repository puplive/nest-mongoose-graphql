import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateUserInput {
  @Field(() => String, { description: 'Example field (placeholder)' })
  name: string;
  @Field(() => Int, { description: 'Example field (placeholder)' })
  age?: number;
  @Field(() => String, { description: 'Example field (placeholder)' })
  email: string;
  @Field(() => String, { description: 'Example field (placeholder)' })
  password: string;
  @Field(() => String, { description: 'Example field (placeholder)' })
  role?: string;
}
