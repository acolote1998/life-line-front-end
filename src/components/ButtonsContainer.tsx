import ActionButton from "./ActionButton";
const ButtonsContainer = () => {
  return (
    <>
      <div className="fixed bottom-0 w-full z-10 bg-amber-200">
        <ActionButton description={"+"}></ActionButton>
      </div>
    </>
  );
};
export default ButtonsContainer;
