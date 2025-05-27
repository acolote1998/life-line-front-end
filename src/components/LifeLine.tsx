import { useNavigate } from "@tanstack/react-router";
import LifeLineSphere from "./LifeLineSphere";
import useDays from "../hooks/useDays";
import { useEffect } from "react";
import { toast } from "react-toastify";
import Loader from "./Loader";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignOutButton,
} from "@clerk/clerk-react";
import ActionButton from "./ActionButton";
const LifeLine = () => {
  const { isPending, isError, data = [] } = useDays();
  const actualItems = [
    ...data,
    { id: undefined, description: "", date: "", score: undefined },
  ];
  useEffect(() => {
    if (isError) toast.error("Error with the server");
  }, [isError]);

  const navigate = useNavigate();
  const gapPx = 40;
  const total = actualItems.length;

  const handleClick = (id: number | undefined) => {
    if (id === undefined) {
      navigate({ to: `/days/create` });
      return;
    }
    navigate({ to: `/days/${id}?home=true` });
  };

  return (
    <>
      {isPending && <Loader style={{ top: "54.1vh", left: "50vw" }}></Loader>}
      <div
        style={{
          background: "var(--lifeline-bg)",
          border: "1px solid var(--lifeline-border)",
        }}
        className="relative flex flex-col justify-center rounded-4xl w-[90vw] h-[20vh] overflow-hidden"
      >
        <hr className="absolute top-1/2 left-0 w-full border-t-4 border-gray-500 -translate-y-1/2" />
        <SignedIn>
          {actualItems.map((item, idx) => {
            // La última X va en el centro, las demás a la izquierda con distancia fija
            const offset = (total - 1 - idx) * gapPx;
            return (
              <div key={idx} onClick={() => handleClick(item.id)}>
                <LifeLineSphere
                  score={item.score}
                  className="absolute top-1/2 px-4 py-1"
                  style={{
                    left: `calc(50% - ${offset}px)`,
                    transform: "translate(-50%, -50%)",
                  }}
                />
              </div>
            );
          })}
        </SignedIn>
      </div>
      <SignedOut>
        <Loader style={{ top: "54.1vh", left: "50vw" }}></Loader>
        <SignInButton mode="modal" asChild>
          <a className="absolute top-0 right-0">
            <ActionButton
              textSize="text-2xl"
              buttonStyle="border-1 rounded-2xl pt-2.5 pb-2.5 pl-7 pr-7"
              description={"Sign In"}
            ></ActionButton>
          </a>
        </SignInButton>
      </SignedOut>
      <SignedIn>
        <SignOutButton mode="modal" asChild>
          <a className="absolute top-0 right-0">
            <ActionButton
              textSize="text-sm"
              buttonStyle="border-1 rounded-2xl pt-2.5 pb-2.5 pl-7 pr-7"
              description={"Sign Out"}
            ></ActionButton>
          </a>
        </SignOutButton>
      </SignedIn>
    </>
  );
};

export default LifeLine;
