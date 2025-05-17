import { useQuery, useMutation } from "@tanstack/react-query";
import axios, { HttpStatusCode } from "axios";

const useDays = () => {
  async function fetchDays() {
    const response = await axios.get("/days.json");
    if (response.status === HttpStatusCode.Ok) {
      return response.data;
    }
  }
  const { isPending, isError, data, error } = useQuery({
    queryKey: ["days"],
    queryFn: fetchDays,
  });
  return { isPending, isError, data, error };
};

export default useDays;
