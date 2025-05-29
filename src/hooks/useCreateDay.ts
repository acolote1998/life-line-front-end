import { useMutation } from "@tanstack/react-query";
import serverRoot from "./serverRoot";
import type { DayToCreateType } from "../types/DayToCreateType";
import axios from "axios";
import { useAuth } from "@clerk/clerk-react";

const useCreateDay = () => {
  const { getToken } = useAuth();
  const mutation = useMutation({
    mutationFn: async (day: DayToCreateType) => {
      return axios.post(serverRoot, day, {
        headers: { Authorization: `Bearer ${await getToken()}` },
      });
    },
  });
  return mutation;
};

export default useCreateDay;
