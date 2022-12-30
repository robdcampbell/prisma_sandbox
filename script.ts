import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  // you will write your Prisma Client Queries here

  //CREATE  USER EXAMPLE
  const user = await prisma.user.create({ data: { name: "Gordon" } });
  console.log(user);

  // FIND ALL USERS
  //   const allUsers = await prisma.user.findMany();
  //   console.log(allUsers);
}

main()
  .catch((e) => {
    console.log(e.message);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
