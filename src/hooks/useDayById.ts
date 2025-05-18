import { useQuery } from "@tanstack/react-query";
import axios, { HttpStatusCode } from "axios";
import serverRoot from "./serverRoot";
const useDayById = (id: number) => {
  async function fetchDayById() {
    const response = await axios.get(`${serverRoot}/${id}`);
    if (response.status === HttpStatusCode.Ok) {
      return response.data;
    }
  }
  const { isPending, isError, data, error } = useQuery({
    queryKey: ["days", id],
    queryFn: fetchDayById,
  });
  return { isPending, isError, data, error };
};

export default useDayById;
