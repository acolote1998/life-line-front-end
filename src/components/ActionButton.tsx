import { useAuth } from "@clerk/clerk-react";
import { toast } from "react-toastify";
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
  const { isSignedIn } = useAuth();
  const handleOnClick = () => {
    if (isSignedIn !== true) {
      toast.warning("Please sign in");
    }
  };
  return (
    <button
      style={{
        backgroundColor: "var(--lighter-secondary-backgrounds-text",
        border: "2px solid var(--lifeline-border)",
      }}
      className={buttonStyle}
      onClick={handleOnClick}
    >
      <h1 style={{ color: "var(--main-texts)" }} className={textSize}>
        {description}
      </h1>
    </button>
  );
};

export default ActionButton;
