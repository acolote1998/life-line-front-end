import { useNavigate } from "@tanstack/react-router";
import type { DayType } from "../types/DayType";
import DarkSphere from "./spheres/DarkSphere";
import GoldenSphere from "./spheres/GoldenSphere";
import GreenSphere from "./spheres/GreenSphere";
import RedSphere from "./spheres/RedSphere";
import Star from "./svg/Star";

const DayListItem = ({ id, date, score }: DayType) => {
  const navigate = useNavigate();
  const calculateSphere = () => {
    if (score) {
      if (score > 6) return <GreenSphere width={24} height={24} />;
      if (score > 4) return <GoldenSphere width={24} height={24} />;
      if (score > 2) return <RedSphere width={24} height={24} />;
      if (score <= 2) return <DarkSphere width={24} height={24} />;
    }
    return null;
  };

  const handleClick = () => {
    navigate({ to: "/days/" + id });
  };

  return (
    <li className="m-1" id={id.toString()} onClick={handleClick}>
      <div className="flex flex-row justify-between align-middle items-center gap-10">
        <p className="w-[20vw]">{date}</p>
        {calculateSphere()}
        <Star width={20} height={20} />
        <p className="w-[12vw]">{score} / 10</p>
      </div>
    </li>
  );
};

export default DayListItem;
