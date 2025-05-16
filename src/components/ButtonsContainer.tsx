import ActionButton from "./ActionButton";
const ButtonsContainer = () => {
  return (
    <>
      <div className="fixed bottom-0 w-full z-10 bg-amber-200 flex items-center justify-center pt-3 pb-3 gap-3 rounded-t-xl">
        <ActionButton
          textSize="2xl"
          lateralPadding="7"
          verticalPadding="2.5"
          description={"< < <"}
        ></ActionButton>
        <ActionButton
          textSize="5xl"
          lateralPadding="12"
          verticalPadding="2.5"
          description={"+"}
        ></ActionButton>
        <ActionButton
          textSize="2xl"
          lateralPadding="7"
          verticalPadding="2.5"
          description={"> > >"}
        ></ActionButton>
      </div>
    </>
  );
};
export default ButtonsContainer;
