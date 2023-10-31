import { Query, Resolver } from '@nestjs/graphql';

@Resolver('')
export class UsersResolver {
  @Query(() => String)
  get() {
    return {
      message: 'HOlas',
    };
  }

  @Query(() => String)
  user_custom() {
    return {
      user: { name: 'jj' },
    };
  }
}
