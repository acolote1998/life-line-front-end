import LifeLine from "./LifeLine";
type LifeLineContainerProps = {
  title?: string;
};
const LifeLineContainer = ({ title }: LifeLineContainerProps) => {
  return (
    <div className="flex flex-col items-center">
      <h1>{title && title}</h1>
      <LifeLine></LifeLine>
    </div>
  );
};

export default LifeLineContainer;
