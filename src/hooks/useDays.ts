import { useQuery } from "@tanstack/react-query";
import axios, { HttpStatusCode } from "axios";
import type { DayType } from "../types/DayType";
import serverRoot from "./serverRoot";
import { useAuth } from "@clerk/clerk-react";

const useDays = () => {
  const { getToken, isSignedIn } = useAuth();
  async function fetchDays(): Promise<DayType[]> {
    const response = await axios.get(serverRoot + "/byUser", {
      headers: { Authorization: `Bearer ${await getToken()}` },
    });
    if (response.status === HttpStatusCode.Ok) {
      return response.data;
    }
    return [];
  }
  const { isPending, isError, data, error } = useQuery<DayType[]>({
    queryKey: ["days"],
    queryFn: fetchDays,
    enabled: isSignedIn === true,
    retry: 4,
  });
  return { isPending, isError, data, error };
};

export default useDays;
