import { PostGraphileOptions, postgraphile } from 'postgraphile';
import { appEnv } from '../../config/config';

const postgraphileOptions: PostGraphileOptions = {
  subscriptions: true,
  watchPg: true,
  dynamicJson: true,
  setofFunctionsContainNulls: false,
  ignoreRBAC: false,
  showErrorStack: 'json',
  extendedErrors: ['hint', 'detail', 'errcode'],
  appendPlugins: [require('@graphile-contrib/pg-simplify-inflector')],
  exportGqlSchemaPath: './src/graphql/schema.graphql',
  graphiql: true,
  enhanceGraphiql: true,
  enableQueryBatching: true,
  legacyRelations: 'omit',
  // pgSettings: async (req) => {
  //   console.log('emm', req. );
  //   return {};
  // },

  // subscriptions: true,
  // watchPg: true,
  // dynamicJson: true,
  // setofFunctionsContainNulls: false,
  // ignoreRBAC: false,
  // showErrorStack: 'json',
  // extendedErrors: ['hint', 'detail', 'errcode'],
  // appendPlugins: [require('@graphile-contrib/pg-simplify-inflector')],
  // exportGqlSchemaPath: 'schema.graphql',
  // graphiql: true,
  // enhanceGraphiql: true,
  // // allowExplain(req) {
  // //   // TODO: customise condition!
  // //   return true;
  // // },
  // enableQueryBatching: true,
  // legacyRelations: 'omit',
  // // pgSettings(req) {
  // //   /* TODO */
  // // },
};

export const middleware = postgraphile(appEnv, 'public', postgraphileOptions);
