import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateOderDto } from './dto/create-oders.dto';

@Injectable()
export class odersService {
  constructor(private prisma: PrismaService) {}

  async create(data: any) {
    const order = await this.prisma.order.create({
      data: {
        name: data.name,
        email: data.email,
        phone: data.phone,
        address: data.address,
        payment_method: data.payment_method,
        total_price: data.total_price,
        notes: data.notes,
        orderItems: {
          create: data.orderItems.map((item: any) => ({
            product_id: item.product_id,
            quantity: item.quantity,
          })),
        },
      },
    });
    return order;
  }
}
