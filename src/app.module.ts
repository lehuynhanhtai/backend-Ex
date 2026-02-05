import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { PrismaService } from './prisma/prisma.service';
import { UsersModule } from './users/users.module';
import { ProductsModule } from './products/products.module';
import { odersModule } from './oders/oders.module';

@Module({
  imports: [ConfigModule.forRoot(), UsersModule, ProductsModule, odersModule],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
