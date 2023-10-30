import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PostgraphileModule } from './postgraphile/postgraphile.module';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';
import { UsersResolver } from './app.resolver';

@Module({
  imports: [
    PostgraphileModule,
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/graphql/graphql-schema.graphql'),
    }),
  ],
  controllers: [AppController],
  providers: [AppService, UsersResolver],
})
export class AppModule {}
