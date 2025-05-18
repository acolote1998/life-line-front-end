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
      style={{
        backgroundColor: "var(--lighter-secondary-backgrounds-text",
        border: "2px solid var(--lifeline-border)",
      }}
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
