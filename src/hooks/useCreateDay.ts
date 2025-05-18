import { useMutation } from "@tanstack/react-query";
import serverRoot from "./serverRoot";
import type { DayToCreateType } from "../types/DayToCreateType";
import axios from "axios";

const useCreateDay = () => {
  const mutation = useMutation({
    mutationFn: (day: DayToCreateType) => {
      return axios.post(serverRoot, day);
    },
  });
  return mutation;
};

export default useCreateDay;
