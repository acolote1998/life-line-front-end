type ActionButtonProps = {
  description: string;
};

const ActionButton = ({ description }: ActionButtonProps) => {
  return (
    <div>
      <button className="border-1 rounded-lg pt-2.5 pb-2.5 pl-12 pr-12">
        <h1 className="text-5xl">{description}</h1>
      </button>
    </div>
  );
};

export default ActionButton;
