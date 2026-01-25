import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService) {}

  findAll() {
    return this.prisma.user.findMany();
  }

  findOne(id: string) {
    return this.prisma.user.findUnique({ where: { id } });
  }

  create(createUserDto: CreateUserDto) {
    const user = this.prisma.user.create({ data: createUserDto });
    return user;
  }

  update(id: string, updateUserDto: UpdateUserDto) {
    const user = this.prisma.user.update({
      where: { id },
      data: updateUserDto,
    });
    return user;
  }

  remove(id: string) {
    const user = this.prisma.user.delete({ where: { id } });
    return user;
  }
}
