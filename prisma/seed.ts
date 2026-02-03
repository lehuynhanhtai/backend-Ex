import { PrismaClient } from '@prisma/client';
import { seedProducts } from './seed-data/seed-products';

const prisma = new PrismaClient();

async function main() {
  await seedProducts();
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
