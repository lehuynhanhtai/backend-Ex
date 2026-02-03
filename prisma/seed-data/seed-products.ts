import { PrismaClient } from '@prisma/client';
import { faker } from '@faker-js/faker';

const prisma = new PrismaClient();

export async function seedProducts() {
  for (let i = 0; i < 10; i++) {
    await prisma.product.create({
      data: {
        name: faker.commerce.productName(),
        image: faker.image.url(),
        description: faker.commerce.productDescription(),
        price: Number(faker.number.binary(2)),
      },
    });
  }
}
