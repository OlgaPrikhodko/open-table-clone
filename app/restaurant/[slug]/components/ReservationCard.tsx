"use client";

import { partySize as partySizes, times } from "../../../../data";
import DatePicker from "react-datepicker";
import { useState } from "react";
import useAvailabilities from "../../../../hooks/useAvailabilities";
import { CircularProgress } from "@mui/material";
import Link from "next/link";
import {
  convertToDisplayTime,
  TimeType,
} from "../../../../utils/convertToDisplayTime";

type ReservationCardProps = {
  openTime: string;
  closeTime: string;
  slug: string;
};
function ReservationCard({ openTime, closeTime, slug }: ReservationCardProps) {
  const { data, loading, error, fetchAvailabilities } = useAvailabilities();

  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());
  const [time, setTime] = useState(openTime);
  const [partySize, setPartySize] = useState("2");
  const [day, setDay] = useState(new Date().toISOString().split("T")[0]);

  const handleChangeDate = (date: Date | null) => {
    if (date) {
      setDay(date.toISOString().split("T")[0]);
      return setSelectedDate(date);
    }

    return setSelectedDate(null);
  };

  const handleClick = () => {
    fetchAvailabilities({ slug, day, time, partySize });
  };

  const filterTimaByRestaurantOpenWindow = () => {
    const timesWithinWindow: typeof times = [];
    let isWithinWindow = false;
    times.forEach((time) => {
      if (time.time === openTime) {
        isWithinWindow = true;
      }
      if (isWithinWindow) {
        timesWithinWindow.push(time);
      }
      if (time.time === closeTime) {
        isWithinWindow = false;
      }
    });

    return timesWithinWindow;
  };

  return (
    <div className="fixed w-[15%] rounded bg-white p-3 shadow">
      <div className="border-b pb-2 text-center font-bold">
        <h4 className="mr-7 text-lg">Make a Reservation</h4>
      </div>

      <div className="my-3 flex flex-col">
        <label htmlFor="">Party size</label>
        <select
          name=""
          id=""
          className="border-b py-3 font-light"
          value={partySize}
          onChange={(e) => setPartySize(e.target.value)}
        >
          {partySizes.map((item) => (
            <option value={item.value} key={item.label}>
              {item.label}
            </option>
          ))}
        </select>
      </div>

      <div className="flex justify-between">
        <div className="flex w-[48%] flex-col">
          <label htmlFor="">Date</label>
          <DatePicker
            selected={selectedDate}
            onChange={handleChangeDate}
            className="w-24 border-b py-3 text-reg font-light"
            dateFormat="MMMM d"
            wrapperClassName="w-[48%]"
          />
        </div>

        <div className="flex w-[48%] flex-col">
          <label htmlFor="">Time</label>
          <select
            name=""
            id=""
            className="border-b py-3 font-light"
            value={time}
            onChange={(e) => setTime(e.target.value)}
          >
            {filterTimaByRestaurantOpenWindow().map((time) => (
              <option value={time.time} key={time.time}>
                {time.displayTime}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="mt-5">
        <button
          className="h-16 w-full rounded bg-red-600 px-4 font-bold text-white"
          onClick={handleClick}
          disabled={loading}
        >
          {loading ? <CircularProgress color="inherit" /> : "Find a Time"}
        </button>
      </div>
      {data && data.length ? (
        <div className="mt-4">
          <p className="text-reg">Select a Time</p>
          <div className="mt-2 flex flex-wrap">
            {data.map((time) => {
              return time.available ? (
                <Link
                  href={`/reserve/${slug}?date=${day}T${time}&partySize=${partySize}`}
                  className="mb-3 mr-3 w-24 cursor-pointer rounded bg-red-600 p-2 text-center text-white"
                >
                  <p className="text-sm font-bold">
                    {convertToDisplayTime(time.time as TimeType)}
                  </p>
                </Link>
              ) : (
                <p className="bg-grey-300 mb-3 mr-3 w-24 rounded p-2"></p>
              );
            })}
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default ReservationCard;
