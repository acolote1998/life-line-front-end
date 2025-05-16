import ActionButton from "./ActionButton";
const ButtonsContainer = () => {
  return (
    <>
      <div
        style={{ backgroundColor: "var(--main-divs" }}
        className="fixed bottom-0 w-full z-10 flex items-center justify-center pt-3 pb-3 gap-3 border-t-2 border-l-1 border-r-1 rounded-t-xl"
      >
        <ActionButton
          textSize="text-2xl"
          buttonStyle="border-1 rounded-2xl pt-2.5 pb-2.5 pl-7 pr-7"
          description={"< < <"}
        ></ActionButton>
        <ActionButton
          textSize="text-5xl"
          buttonStyle="border-1 rounded-2xl pt-2.5 pb-2.5 pl-12 pr-12"
          description={"+"}
        ></ActionButton>
        <ActionButton
          textSize="text-2xl"
          buttonStyle="border-1 rounded-2xl pt-2.5 pb-2.5 pl-7 pr-7"
          description={"> > >"}
        ></ActionButton>
      </div>
    </>
  );
};
export default ButtonsContainer;
