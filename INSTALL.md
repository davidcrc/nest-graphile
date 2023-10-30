# Setup

```bash
nest new nest-graphile
```

# Add postgraphile

```bash
yarn add add postgraphile
```

```bash
yarn add @graphile-contrib/pg-simplify-inflector
```

# Add Prisma

```bash
yarn add -D prisma
```

```bash
npx prisma init
```

```bash
yarn add @prisma/client
```

```bash
npx prisma migrate dev --name init
```

nest g module postgraphile

nest g controller postgraphile

npx postgraphile -c 'postgresql://postgres:''@localhost:5432/nestjs-postgraphile?schema=public' --watch --enhance-graphiql --dynamic-json

<!--  -->

yarn add @nestjs/graphql @nestjs/apollo @apollo/server graphql
