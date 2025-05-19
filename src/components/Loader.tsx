import type { CSSProperties } from "react";

type propsLoader = {
  style: CSSProperties;
};
const Loader = ({ style }: propsLoader) => {
  return (
    <div
      style={style}
      className="z-50 absolute top-[54.1vh] left-[50vw] -translate-x-1/2 -translate-y-1/2 "
    >
      <div className="loader"></div>
    </div>
  );
};

export default Loader;
