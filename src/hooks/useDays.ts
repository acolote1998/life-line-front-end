import { useQuery, useMutation } from "@tanstack/react-query";
import axios from "axios";

const useDays = () => {
  async function getDays() {
    return await axios.get("../assets/data/days.json");
  }
  const getAllDays = useQuery({ queryKey: ["days"], queryFn: getDays });
  return { getAllDays };
};

export default useDays;
