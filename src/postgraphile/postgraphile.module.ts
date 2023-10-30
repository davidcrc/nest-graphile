import { Module } from '@nestjs/common';
import { PostgraphileController } from './postgraphile.controller';

@Module({
  controllers: [PostgraphileController],
})
export class PostgraphileModule {}
