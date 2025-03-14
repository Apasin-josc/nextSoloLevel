import prisma from "@/lib/prisma";
import { NextResponse, NextRequest } from "next/server";

export async function GET(request: Request) {
  await prisma.todo.deleteMany(); // delete * from todos

  await prisma.todo.createMany({
    data: [
      { description: "tickets sprint 88", complete: true },
      { description: "phoenix team" },
      { description: "autodata" },
      { description: "solera" },
      { description: "que padre" },
    ],
  });

  /* //TODO: making a insertion to the db
    const todo = await prisma.todo.create({
        data: { description: 'Piedra del alma', complete: true}
    });
    console.log(todo); */

  return NextResponse.json({ message: "Seed Executed" });
}
