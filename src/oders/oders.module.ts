import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { odersController } from './oders.controller';
import { odersService } from './oders.service';

@Module({
  imports: [],
  controllers: [odersController],
  providers: [odersService, PrismaService],
})
export class odersModule {}
