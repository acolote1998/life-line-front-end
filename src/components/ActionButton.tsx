type ActionButtonProps = {
  description: string;
  buttonStyle?: string;
  textSize?: string;
};

const ActionButton = ({
  description,
  buttonStyle,
  textSize,
}: ActionButtonProps) => {
  return (
    <button
      style={{ backgroundColor: "var(--secondary-backgrounds-text" }}
      className={buttonStyle}
    >
      <h1
        style={{ color: "var(--lighter-secondary-backgrounds)" }}
        className={textSize}
      >
        {description}
      </h1>
    </button>
  );
};

export default ActionButton;
