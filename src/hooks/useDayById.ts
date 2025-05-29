import { useQuery } from "@tanstack/react-query";
import axios, { HttpStatusCode } from "axios";
import serverRoot from "./serverRoot";
import { useAuth } from "@clerk/clerk-react";
const useDayById = (id: number) => {
  const { getToken, isSignedIn } = useAuth();
  async function fetchDayById() {
    const response = await axios.get(`${serverRoot}/byUser/${id}`, {
      headers: { Authorization: `Bearer ${await getToken()}` },
    });
    if (response.status === HttpStatusCode.Ok) {
      return response.data;
    }
  }
  const { isPending, isError, data, error } = useQuery({
    queryKey: ["days", id],
    queryFn: fetchDayById,
    enabled: isSignedIn === true,
    retry: 4,
  });
  return { isPending, isError, data, error };
};

export default useDayById;
