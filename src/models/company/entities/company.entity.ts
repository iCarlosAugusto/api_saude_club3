import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType()
export class CompanyEntity {

  @Field(() => String)
  id: string;

  @Field(() => String)
  name: string;

  @Field(() => Date)
  availableDay: Date;
}
