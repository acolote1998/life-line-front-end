import { createFileRoute, useNavigate } from "@tanstack/react-router";
import Star from "../../components/svg/Star";
import ActionButton from "../../components/ActionButton";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import useCreateDay from "../../hooks/useCreateDay";

export const Route = createFileRoute("/days/create")({
  component: RouteComponent,
});

function RouteComponent() {
  const { mutate, isSuccess } = useCreateDay();
  const [inputTextArea, setInputTextArea] = useState("");
  const [inputScore, setInputScore] = useState("");
  const navigate = useNavigate();
  const handleClick = () => {
    if (inputTextArea === "") {
      toast.warn("Please write the description of your day");
      return;
    }
    if (!Number(inputScore) || Number(inputScore) < 1) {
      toast.warn("Please write a valid score");
      return;
    }
    mutate({ description: inputTextArea, score: Number(inputScore) });
  };

  useEffect(() => {
    if (isSuccess) {
      toast.success("Day added successfully");
      navigate({ to: "/" });
    }
  }, [isSuccess]);
  return (
    <>
      <div
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.7)",
        }}
        className=" h-screen flex  flex-col items-center justify-center z-20"
      >
        <div className="m-3 flex flex-col text-center rounded-xl h-[50vh] w-[80vw]">
          <input type="text" className="m-4"></input>
          <textarea
            onChange={(e) => {
              setInputTextArea(e.target.value);
            }}
            className="bg-white ml-2 mr-2 rounded-xl text-center h-[40vh]"
            placeholder="What happened today?"
          ></textarea>
          <div className="m-5 flex justify-center">
            <div className="flex items-center bg-amber-200 p-2 rounded-2xl">
              <Star width={32} height={32} />
              <span className="ml-4 flex items-center">
                <input
                  onChange={(e) => {
                    setInputScore(e.target.value);
                  }}
                  type="number"
                  placeholder="X"
                  className="w-10 h-8 text-center rounded border border-amber-400"
                  style={{ marginRight: "0.25rem" }}
                />
                / 10
              </span>
            </div>
            <div onClick={handleClick}>
              <ActionButton
                textSize="text-2xl"
                buttonStyle="border-1 rounded-2xl pt-2.5 pb-2.5 pl-7 pr-7"
                description="💾"
              />
            </div>
          </div>
        </div>

        <div
          className="text-white text-2xl"
          onClick={() => {
            navigate({ to: "/" });
          }}
        >
          X
        </div>
      </div>
    </>
  );
}
