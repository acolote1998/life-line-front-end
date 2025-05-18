import { createFileRoute } from "@tanstack/react-router";
import useDays from "../../hooks/useDays";
import DayListItem from "../../components/DayListItem";
import { useEffect, useState } from "react";

export const Route = createFileRoute("/days/")({
  component: RouteComponent,
});

function RouteComponent() {
  const { data } = useDays();
  const [scoreLastWeek, setScoreLastWeek] = useState(0);
  const [scoreLastMonth, setScoreLastMonth] = useState(0);
  const [scoreYtd, setScoreYtd] = useState(0);

  useEffect(() => {
    const calculateScoreLw = (): number => {
      let totalScores = 0;
      let totalDays = 0;
      if (data) {
        if (data?.length >= 7) {
          for (let i = data.length - 1; i > data.length - 8; i--) {
            totalScores += data[i].score;
          }
          return Math.ceil(totalScores / 7);
        } else {
          for (let i = 0; i < data.length; i++) {
            totalScores += data[i].score;
            totalDays++;
          }
          return Math.ceil(totalScores / totalDays);
        }
      }
      return 0;
    };
    setScoreLastWeek(calculateScoreLw);
    const calculateScoreLM = (): number => {
      let totalScores = 0;
      let totalDays = 0;
      if (data) {
        if (data?.length >= 31) {
          for (let i = data.length - 1; i > data.length - 32; i--) {
            totalScores += data[i].score;
          }
          return Math.ceil(totalScores / 31);
        } else {
          for (let i = 0; i < data.length; i++) {
            totalScores += data[i].score;
            totalDays++;
          }
          return Math.ceil(totalScores / totalDays);
        }
      }
      return 0;
    };
    setScoreLastMonth(calculateScoreLM);
    const calculateScoreYtd = (): number => {
      let totalScores = 0;
      let totalDays = 0;
      if (data) {
        if (data.length > 365) {
          // Use only the last 365 days
          for (let i = data.length - 1; i > data.length - 366; i--) {
            totalScores += data[i].score;
            totalDays++;
          }
        } else {
          // Use all available days
          for (let i = 0; i < data.length; i++) {
            totalScores += data[i].score;
            totalDays++;
          }
        }
        return Math.ceil(totalScores / totalDays);
      }
      return 0;
    };
    setScoreYtd(calculateScoreYtd);
  }, [data]);

  return (
    <div
      className="flex flex-col items-center self-center justify-center w-[90vw] h-[60vh] p-3 gap-6 border-2 rounded-xl"
      style={{
        backgroundColor: "var(--main-divs",
        borderColor: "var(--lifeline-border)",
      }}
    >
      <h1 style={{ color: "var(--main-texts)" }} className="text-2xl">
        Your last adventures
      </h1>
      <div
        style={{ border: "2px solid var( --secondary-backgrounds-text)" }}
        className="flex self-center justify-center w-[80vw] h-[40vh] border-2 rounded-xl bg-white overflow-y-scroll"
      >
        <ul>
          {data &&
            data
              .slice()
              .reverse()
              .map((day) => (
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
        <div
          style={{ border: "2px solid var( --secondary-backgrounds-text)" }}
          className="border-2 rounded-xl p-1  bg-white "
        >
          <p>Last Week</p>
          <p>{scoreLastWeek}/10</p>
        </div>
        <div
          style={{ border: "2px solid var( --secondary-backgrounds-text)" }}
          className="border-2 rounded-xl p-1 bg-white"
        >
          <p>Last Month</p>
          <p>{scoreLastMonth}/10</p>
        </div>
        <div
          style={{ border: "2px solid var( --secondary-backgrounds-text)" }}
          className="border-2 rounded-xl p-1  bg-white"
        >
          <p>Year to date</p>
          <p>{scoreYtd}/10</p>
        </div>
      </div>
    </div>
  );
}
