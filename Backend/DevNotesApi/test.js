import prisma from './src/db.js';

const test = async () => {
  const users = await prisma.user.findMany();
  console.log(users);
};

test();
