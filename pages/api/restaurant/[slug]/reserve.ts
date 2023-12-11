import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";
import { findAvailableTables } from "../../../../services/restaurant/findAvailableTables";

const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const { slug, day, time, partySize } = req.query as {
    slug: string;
    day: string;
    time: string;
    partySize: string;
  };

  const restaurant = await prisma.restaurant.findUnique({
    where: { slug },
    select: {
      tables: true,
      open_time: true,
      close_time: true,
    },
  });

  if (!restaurant)
    return res.status(400).json({ errorMessage: "Restaurant is not found" });

  const reservedTime = new Date(`${day}T${time}`);
  if (
    reservedTime < new Date(`${day}T${restaurant.open_time}`) ||
    reservedTime > new Date(`${day}T${restaurant.close_time}`)
  ) {
    return res
      .status(400)
      .json({ errorMessage: "Restaurant is not opened at that time" });
  }

  const tables = restaurant.tables;

  const searchTimesWithTables = await findAvailableTables({
    day,
    time,
    res,
    tables,
  });

  if (!searchTimesWithTables) {
    return res.status(400).json({ errorMessage: "Invalid data provided" });
  }

  const searchTimeWithTables = searchTimesWithTables.find((t) => {
    return t.date.toISOString() === reservedTime.toISOString();
  });

  if (!searchTimeWithTables) {
    return res
      .status(400)
      .json({ errorMessage: "No availability. Cannot book" });
  }

  return res.json({
    searchTimeWithTables,
  });
}

// http://localhost:3000/api/restaurant/vivaan-fine-indian-cuisine-ottawa/reserve?day=2023-05-01&time=20:00:00.000Z&partySize=4
