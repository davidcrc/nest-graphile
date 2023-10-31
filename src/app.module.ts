import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PostgraphileModule } from './postgraphile/postgraphile.module';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';
import { UsersResolver } from './app.resolver';
import { GraphQLSchema } from 'graphql';
import { mergeSchemas } from '@graphql-tools/schema';
import { loadSchema } from '@graphql-tools/load';
import { GraphQLFileLoader } from '@graphql-tools/graphql-file-loader';

@Module({
  imports: [
    PostgraphileModule,
    GraphQLModule.forRootAsync<ApolloDriverConfig>({
      driver: ApolloDriver,
      useFactory: async () => {
        const remoteSchema = await loadSchema(
          join(process.cwd(), './src/graphql/postgraphile-schema.graphql'),
          { loaders: [new GraphQLFileLoader()] },
        );

        return {
          playground: process.env.NODE_ENV !== 'production',
          autoSchemaFile: join(
            process.cwd(),
            'src/graphql/graphql-schema.graphql',
          ),
          transformAutoSchemaFiles: true,
          transformSchema: async (schema: GraphQLSchema) => {
            return mergeSchemas({
              schemas: [schema, remoteSchema],
            });
          },
        };
      },
    }),
  ],
  controllers: [AppController],
  providers: [AppService, UsersResolver],
})
export class AppModule {}
