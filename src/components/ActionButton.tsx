type ActionButtonProps = {
  description: string;
  lateralPadding: string;
  verticalPadding: string;
};

const ActionButton = ({
  description,
  lateralPadding,
  verticalPadding,
}: ActionButtonProps) => {
  const styling = `border-1 rounded-lg pt-${verticalPadding} pb-${verticalPadding} pl-${lateralPadding} pr-${lateralPadding}`;
  return (
    <div>
      <button className={styling}>
        <h1 className="text-5xl">{description}</h1>
      </button>
    </div>
  );
};

export default ActionButton;
