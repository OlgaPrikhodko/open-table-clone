import axios from "axios";
import { useState } from "react";

type FetchAvailabilitiesParamsType = {
  slug: string;
  partySize: string;
  day: string;
  time: string;
};

type AvailabilityType = { time: string; available: boolean };

export default function useAvailabilities() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState<AvailabilityType[] | null>(null);

  const fetchAvailabilities = async ({
    slug,
    partySize,
    day,
    time,
  }: FetchAvailabilitiesParamsType) => {
    setLoading(true);

    try {
      const response = await axios.get(
        `http://localhost:3000/api/restaurant/${slug}/availability`,
        { params: { day, time, partySize } },
      );

      setLoading(false);
      setData(response.data);
    } catch (error: any) {
      setLoading(false);
      setError(error.response.data.errorMessage);
    }
  };

  return { loading, error, data, fetchAvailabilities };
}
