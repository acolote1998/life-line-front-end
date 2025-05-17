import { useNavigate } from "@tanstack/react-router";
import LifeLineSphere from "./LifeLineSphere";
import useDays from "../hooks/useDays";
const LifeLine = () => {
  const { data = [] } = useDays();
  const actualItems = [
    ...data,
    { id: undefined, description: "", date: "", score: undefined },
  ];

  const navigate = useNavigate();
  const gapPx = 40;
  const total = actualItems.length;

  const handleClick = (id: number) => {
    if (id === undefined) {
      navigate({ to: `/days/create` });
      return;
    }
    navigate({ to: `/days/${id}` });
  };

  return (
    <div className="relative flex flex-col justify-center rounded-4xl w-[90vw] h-[20vh] bg-gray-300 border border-gray-400 overflow-hidden">
      <hr className="absolute top-1/2 left-0 w-full border-t-4 border-gray-500 -translate-y-1/2" />
      {actualItems.map((item, idx) => {
        // La última X va en el centro, las demás a la izquierda con distancia fija
        const offset = (total - 1 - idx) * gapPx;
        return (
          <div key={idx} onClick={() => handleClick(item.id)}>
            <LifeLineSphere
              score={item.score}
              className="absolute top-1/2 px-4 py-1"
              style={{
                left: `calc(50% - ${offset}px)`,
                transform: "translate(-50%, -50%)",
              }}
            />
          </div>
        );
      })}
    </div>
  );
};

export default LifeLine;
