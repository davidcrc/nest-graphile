import { Controller, Get, Req, Next, Res } from '@nestjs/common';
import { Request, Response } from 'express';
import { PostGraphileResponseNode } from 'postgraphile';
import { middleware } from '../common/middleware/postgraphile.middleware';

@Controller('/')
export class PostgraphileController {
  @Get(middleware.graphiqlRoute)
  graphiql(@Req() request: Request, @Res() response: Response, @Next() next) {
    middleware.graphiqlRouteHandler(
      new PostGraphileResponseNode(request, response, next),
    );
  }

  // @Post(middleware.graphqlRoute)
  // graphql(@Req() request: Request, @Res() response: Response, @Next() next) {
  //   middleware.graphqlRouteHandler(
  //     new PostGraphileResponseNode(request, response, next),
  //   );
  // }
}
