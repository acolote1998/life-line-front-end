type ActionButtonProps = {
  description: string;
  buttonStyle: string;
  textSize: string;
};

const ActionButton = ({
  description,
  buttonStyle,
  textSize,
}: ActionButtonProps) => {
  return (
    <div>
      <button className={buttonStyle}>
        <h1 className={textSize}>{description}</h1>
      </button>
    </div>
  );
};

export default ActionButton;
