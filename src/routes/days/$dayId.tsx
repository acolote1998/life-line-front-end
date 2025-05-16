import { createFileRoute } from "@tanstack/react-router";
import Day from "../../components/Day";

export const Route = createFileRoute("/days/$dayId")({
  component: RouteComponent,
});

function RouteComponent() {
  const { dayId } = Route.useParams();
  return (
    <Day
      date="2025/03/18"
      creating={false}
      description="A nice day"
      id={Number(dayId)}
      score={9}
      key={dayId}
    ></Day>
  );
}
