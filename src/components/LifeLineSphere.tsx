import type { LifeLineSphereType } from "../types/LifeLineSphereType";
import BlueSphere from "../components/spheres/BlueSphere";
import RedSphere from "../components/spheres/RedSphere";
import GoldenSphere from "../components/spheres/GoldenSphere";
import GreenSphere from "../components/spheres/GreenSphere";
import DarkSphere from "../components/spheres/DarkSphere";

const LifeLineSphere = ({
  id,
  score,
  className,
  style,
}: LifeLineSphereType) => {
  const calculateSphere = () => {
    if (score) {
      if (score > 6) return <GreenSphere width={24} height={24} />;
      if (score > 4) return <GoldenSphere width={24} height={24} />;
      if (score > 2) return <RedSphere width={24} height={24} />;
      if (score <= 2) return <DarkSphere width={24} height={24} />;
    } else {
      return <BlueSphere width={40} height={40} />;
    }
  };
  return (
    <div className={className} style={style} key={id}>
      {calculateSphere()}
    </div>
  );
};

export default LifeLineSphere;
