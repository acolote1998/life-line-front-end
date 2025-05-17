import { createFileRoute } from "@tanstack/react-router";
import useDays from "../../hooks/useDays";
import type { DayType } from "../../types/DayType";
import { useEffect, useState } from "react";
import DayListItem from "../../components/DayListItem";

export const Route = createFileRoute("/days/")({
  component: RouteComponent,
});

function RouteComponent() {
  const [days, setDays] = useState<DayType[]>([]);
  const { data } = useDays();
  useEffect(() => {
    if (data) setDays(data);
    console.log(data);
  }, [data]);
  return (
    <div
      className="flex flex-col items-center self-center justify-center w-[90vw] h-[60vh] p-3 gap-6 border-2 rounded-xl"
      style={{ backgroundColor: "var(--main-divs" }}
    >
      <h1 className="text-2xl underline underline-offset-7">
        Your last adventures
      </h1>
      <div className="flex self-center justify-center w-[80vw] h-[40vh] border-2 rounded-xl border-green-600 bg-white overflow-scroll">
        <ul>
          {days.map((day) => (
            <DayListItem
              date={day.date}
              description={day.description}
              id={day.id}
              readOnly={day.readOnly}
              score={day.score}
              key={day.id}
            />
          ))}
        </ul>
      </div>
      <div className="flex flex-row gap-5 items-center text-center">
        <div>
          <p>Last Week</p>
          <p>10/10</p>
        </div>
        <div>
          <p>Last Month</p>
          <p>10/10</p>
        </div>
        <div>
          <p>Year to date</p>
          <p>10/10</p>
        </div>
      </div>
    </div>
  );
}
