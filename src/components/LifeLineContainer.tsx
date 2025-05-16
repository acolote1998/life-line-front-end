import LifeLine from "./LifeLine";
type LifeLineContainerProps = {
  title?: string;
};
const LifeLineContainer = ({ title }: LifeLineContainerProps) => {
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-3xl">{title && title}</h1>
      <LifeLine></LifeLine>
    </div>
  );
};

export default LifeLineContainer;
