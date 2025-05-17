import { useQuery } from "@tanstack/react-query";
import axios, { HttpStatusCode } from "axios";

const useDayById = (id: number) => {
  async function fetchDayById() {
    const response = await axios.get(`/days/${id}.json`);
    if (response.status === HttpStatusCode.Ok) {
      return response.data;
    }
  }
  const { isPending, isError, data, error } = useQuery({
    queryKey: ["days", id],
    queryFn: fetchDayById,
    enabled: !!id,
  });
  return { isPending, isError, data, error };
};

export default useDayById;
