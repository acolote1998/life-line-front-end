import { useNavigate } from "@tanstack/react-router";
import ActionButton from "./ActionButton";
import { useAuth } from "@clerk/clerk-react";
const ButtonsContainer = () => {
  const navigate = useNavigate();
  const { isSignedIn } = useAuth();
  return (
    <>
      <div
        style={{
          backgroundColor: "var(--main-divs",
          borderColor: "var(--lifeline-border)",
        }}
        className="fixed bottom-0 w-full z-10 flex items-center justify-center pt-3 pb-3 gap-3 border-t-2 border-l-1 border-r-1 rounded-t-xl"
      >
        <div
          onClick={() => {
            if (isSignedIn) {
              navigate({ to: "/days" });
            }
          }}
        >
          <ActionButton
            textSize="text-2xl"
            buttonStyle="border-1 rounded-2xl pt-2.5 pb-2.5 pl-7 pr-7"
            description={"⏳"}
          ></ActionButton>
        </div>
        <div
          onClick={() => {
            navigate({ to: "/" });
          }}
        >
          <ActionButton
            textSize="text-5xl"
            buttonStyle="border-1 rounded-2xl pt-2.5 pb-2.5 pl-12 pr-12"
            description={"🏠"}
          ></ActionButton>
        </div>
        <div
          onClick={() => {
            if (isSignedIn) {
              navigate({ to: "/days/create" });
            }
          }}
        >
          <ActionButton
            textSize="text-2xl"
            buttonStyle="border-1 rounded-2xl pt-2.5 pb-2.5 pl-7 pr-7"
            description={"✏️"}
          ></ActionButton>
        </div>
      </div>
    </>
  );
};
export default ButtonsContainer;
