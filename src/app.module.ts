import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { PartnersModule } from './models/partners/partners.module';
import { ConsultsModule } from './models/consults/consults.module';
import { ServicesModule } from './models/services/services.module';
import { AuthenticationModule } from './models/authentication/authentication.module';
import { AdminModule } from './models/admin/admin.module';
import { CompanyModule } from './models/company/company.module';
import { ClientsModule } from './models/users/client.module';
import { GraphQLError, GraphQLFormattedError } from 'graphql';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: true,
      formatError: (error: GraphQLError) => {
        const graphQLFormattedError: GraphQLFormattedError = {
          message: error?.message,
        };
        return graphQLFormattedError;
      },
    }),
    ClientsModule,
    PartnersModule,
    AdminModule,
    ConsultsModule,
    ServicesModule,
    AuthenticationModule,
    CompanyModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
