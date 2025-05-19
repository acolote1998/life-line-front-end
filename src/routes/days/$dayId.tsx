import { createFileRoute } from "@tanstack/react-router";
import Day from "../../components/Day";
import useDayById from "../../hooks/useDayById";
import { useEffect } from "react";
import { toast } from "react-toastify";
import Loader from "../../components/Loader";
import { z } from "zod";

export const Route = createFileRoute("/days/$dayId")({
  validateSearch: z.object({
    home: z.boolean().optional(),
  }),
  component: RouteComponent,
});

function RouteComponent() {
  const search = Route.useSearch(); // ✅ safely used here
  const home = search.home;
  const { dayId } = Route.useParams();
  const { isPending, isError, data } = useDayById(Number(dayId));
  useEffect(() => {
    if (isError) toast.error("Error with the server");
  }, [isError]);
  return (
    <>
      {isPending && <Loader style={{ top: "45.1vh", left: "50vw" }}></Loader>}
      <Day
        date={data?.date}
        readOnly={data?.readOnly}
        description={data?.description}
        id={data?.id}
        score={data?.score}
        key={data?.id}
        isAtHome={home}
      ></Day>
    </>
  );
}
