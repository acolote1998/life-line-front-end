import { createFileRoute } from "@tanstack/react-router";
import LifeLineContainer from "../components/LifeLineContainer";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <LifeLineContainer title="How did you feel today?"></LifeLineContainer>
  );
}
