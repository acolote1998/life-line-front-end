import { createFileRoute } from "@tanstack/react-router";
import Day from "../../components/Day";
import useDayById from "../../hooks/useDayById";
import { useEffect } from "react";
import { toast } from "react-toastify";

export const Route = createFileRoute("/days/$dayId")({
  component: RouteComponent,
});

function RouteComponent() {
  const { dayId } = Route.useParams();
  const { isError, data } = useDayById(Number(dayId));
  useEffect(() => {
    if (isError) toast.error("Error with the server");
  }, [isError]);
  return (
    <Day
      date={data?.date}
      readOnly={data?.readOnly}
      description={data?.description}
      id={data?.id}
      score={data?.score}
      key={data?.id}
    ></Day>
  );
}
