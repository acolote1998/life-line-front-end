const LifeLine = () => {
  const items = [".", ".", ".", ".", "."];
  const gapPx = 50;
  const total = items.length;

  return (
    <div className="relative flex flex-col justify-center rounded-4xl w-[90vw] h-[20vh] bg-gray-300 border border-gray-400 overflow-hidden">
      <hr className="absolute top-1/2 left-0 w-full border-t-4 border-gray-500 -translate-y-1/2" />
      {items.map((item, idx) => {
        // La última X va en el centro, las demás a la izquierda con distancia fija
        const offset = (total - 1 - idx) * gapPx;
        return (
          <p
            key={idx}
            className="absolute top-1/2 bg-amber-200 px-4 py-1 rounded-full"
            style={{
              left: `calc(50% - ${offset}px)`,
              transform: "translate(-50%, -50%)",
            }}
          >
            {item}
          </p>
        );
      })}
    </div>
  );
};

export default LifeLine;
