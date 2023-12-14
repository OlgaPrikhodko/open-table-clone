import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";
import { findAvailableTables } from "../../../../services/restaurant/findAvailableTables";

const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method === "POST") {
    const { slug, day, time, partySize } = req.query as {
      slug: string;
      day: string;
      time: string;
      partySize: string;
    };

    const {
      bookerEmail,
      bookerFirstName,
      bookerLastName,
      bookerPhone,
      bookerOccasion,
      bookerRequest,
    } = req.body;

    const restaurant = await prisma.restaurant.findUnique({
      where: { slug },
      select: {
        id: true,
        tables: true,
        open_time: true,
        close_time: true,
      },
    });

    if (!restaurant)
      return res.status(400).json({ errorMessage: "Restaurant is not found" });

    const bookingTime = new Date(`${day}T${time}`);
    if (
      bookingTime < new Date(`${day}T${restaurant.open_time}`) ||
      bookingTime > new Date(`${day}T${restaurant.close_time}`)
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
      return t.date.toISOString() === bookingTime.toISOString();
    });

    if (!searchTimeWithTables) {
      return res
        .status(400)
        .json({ errorMessage: "No availability. Cannot book" });
    }

    const tablesCount: { 2: number[]; 4: number[] } = { 2: [], 4: [] };

    searchTimeWithTables.tables.forEach((table) => {
      if (table.seats === 2 || table.seats === 4)
        tablesCount[table.seats].push(table.id);
    });

    const tablesToBook: number[] = [];
    let seatsRemaining = parseInt(partySize);

    while (seatsRemaining > 0) {
      if (seatsRemaining >= 3) {
        if (tablesCount[4].length) {
          tablesToBook.push(tablesCount[4][0]);
          tablesCount[4].shift();
          seatsRemaining -= 4;
        } else {
          tablesToBook.push(tablesCount[2][0]);
          tablesCount[2].shift();
          seatsRemaining -= 2;
        }
      } else {
        if (tablesCount[2].length) {
          tablesToBook.push(tablesCount[2][0]);
          tablesCount[2].shift();
          seatsRemaining -= 2;
        } else {
          tablesToBook.push(tablesCount[4][0]);
          tablesCount[4].shift();
          seatsRemaining -= 4;
        }
      }
    }

    const booking = await prisma.booking.create({
      data: {
        number_of_people: parseInt(partySize),
        booking_time: bookingTime,
        booker_email: bookerEmail,
        booker_phone: bookerPhone,
        booker_first_name: bookerFirstName,
        booker_last_name: bookerLastName,
        booker_occasion: bookerOccasion,
        booker_request: bookerRequest,
        restaurant_id: restaurant.id,
      },
    });

    const bookingsOnTableData = tablesToBook.map((table_id) => {
      return {
        table_id,
        booking_id: booking.id,
      };
    });

    await prisma.bookingsOnTables.createMany({
      data: bookingsOnTableData,
    });

    return res.json({
      booking,
    });
  }
}

// http://localhost:3000/api/restaurant/vivaan-fine-indian-cuisine-ottawa/reserve?day=2023-05-01&time=20:00:00.000Z&partySize=4
