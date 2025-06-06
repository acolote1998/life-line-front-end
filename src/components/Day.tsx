import type { DayType } from "../types/DayType";
import Star from "./svg/Star";
import { useNavigate } from "@tanstack/react-router";
const Day = ({ date, readOnly, description, score, isAtHome }: DayType) => {
  const navigate = useNavigate();
  const calculateBgColor = () => {
    if (score > 6) return "lightGreen";
    if (score > 4) return "yellow";
    if (score > 2) return "coral";
    if (score <= 2) return "darkgray";
  };
  function goToDays() {
    if (isAtHome) {
      navigate({ to: "/" });
    } else {
      navigate({ to: "/days" });
    }
  }
  return (
    <>
      <div
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.7)",
        }}
        className=" h-screen flex  flex-col items-center justify-center z-20"
      >
        <div
          className="m-3 flex flex-col text-center rounded-xl h-[50vh] w-[80vw]"
          style={{ backgroundColor: calculateBgColor() }}
        >
          <h1 className="m-4 text-2xl">{date}</h1>
          <textarea
            readOnly={readOnly}
            className="bg-white ml-2 mr-2 rounded-xl text-center h-[40vh] text-xl text-gray-700 p-2"
            value={description}
          ></textarea>
          <div className="m-5 flex justify-center">
            <div className=" bg-amber-200 p-2 flex items-center rounded-2xl">
              <Star width={32} height={32}></Star>
              <span className="ml-4"> {score} / 10</span>
            </div>
          </div>
        </div>

        <div className="text-white text-2xl" onClick={goToDays}>
          X
        </div>
      </div>
    </>
  );
};

export default Day;
