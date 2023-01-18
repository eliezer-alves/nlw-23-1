import fastify from "fastify";
import cors from "@fastify/cors";
import { PrismaClient } from "@prisma/client";

const app = fastify();
const prisma = new PrismaClient();

app.register(cors);

app.get("/", async () => {
  const result = await prisma.habit.findMany({
    where: {
      title: {
        startsWith: "A",
      },
    },
  });

  return result;
});

app.listen({
  port: 3333,
});
