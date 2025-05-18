import { useQuery } from "@tanstack/react-query";
import axios, { HttpStatusCode } from "axios";
import type { DayType } from "../types/DayType";
import serverRoot from "./serverRoot";

const useDays = () => {
  async function fetchDays(): Promise<DayType[]> {
    const response = await axios.get(serverRoot);
    if (response.status === HttpStatusCode.Ok) {
      return response.data;
    }
    return [];
  }
  const { isPending, isError, data, error } = useQuery<DayType[]>({
    queryKey: ["days"],
    queryFn: fetchDays,
  });
  return { isPending, isError, data, error };
};

export default useDays;
