type ActionButtonProps = {
  description: string;
  lateralPadding: string;
  verticalPadding: string;
  textSize: string;
};

const ActionButton = ({
  description,
  lateralPadding,
  verticalPadding,
  textSize,
}: ActionButtonProps) => {
  const stylingButton = `border-1 rounded-2xl pt-${verticalPadding} pb-${verticalPadding} pl-${lateralPadding} pr-${lateralPadding}`;
  const descriptionSize = `text-${textSize}`;
  return (
    <div>
      <button className={stylingButton}>
        <h1 className={descriptionSize}>{description}</h1>
      </button>
    </div>
  );
};

export default ActionButton;
