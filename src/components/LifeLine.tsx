import LifeLineSphere from "./LifeLineSphere";
const LifeLine = () => {
  const items = [
    {
      id: 0,
      description: "A nice day",
      date: "2025/03/18",
      score: 1,
    },
    {
      id: 1,
      description: "A nice day",
      date: "2025/03/18",
      score: 9,
    },
    {
      id: 2,
      description: "A nice day",
      date: "2025/03/18",
      score: 3,
    },
    {
      id: 3,
      description: "A nice day",
      date: "2025/03/18",
      score: 7,
    },
    {
      id: 4,
      description: "A nice day",
      date: "2025/03/18",
      score: 10,
    },
  ];
  const gapPx = 50;
  const total = items.length;

  return (
    <div className="relative flex flex-col justify-center rounded-4xl w-[90vw] h-[20vh] bg-gray-300 border border-gray-400 overflow-hidden">
      <hr className="absolute top-1/2 left-0 w-full border-t-4 border-gray-500 -translate-y-1/2" />
      {items.map((item, idx) => {
        // La última X va en el centro, las demás a la izquierda con distancia fija
        const offset = (total - 1 - idx) * gapPx;
        return (
          <LifeLineSphere
            key={idx}
            score={item.score}
            className="absolute top-1/2 px-4 py-1"
            style={{
              left: `calc(50% - ${offset}px)`,
              transform: "translate(-50%, -50%)",
            }}
          />
        );
      })}
    </div>
  );
};

export default LifeLine;
