import { createFileRoute } from "@tanstack/react-router";
import Day from "../../components/Day";
import useDayById from "../../hooks/useDayById";

export const Route = createFileRoute("/days/$dayId")({
  component: RouteComponent,
});

function RouteComponent() {
  const { dayId } = Route.useParams();
  const { data } = useDayById(Number(dayId));
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
