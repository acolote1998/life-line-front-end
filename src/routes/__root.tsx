import { createRootRoute, Outlet } from "@tanstack/react-router";
// import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import Header from "../components/Header";
import ButtonsContainer from "../components/ButtonsContainer";

export const Route = createRootRoute({
  component: () => (
    <>
      <Header></Header>
      <Outlet />
      <ButtonsContainer></ButtonsContainer>
      {/* <TanStackRouterDevtools /> */}
    </>
  ),
});

{
  /* <div className="p-2 flex gap-2">
        <Link to="/" className="[&.active]:font-bold">
          Home
        </Link>{" "}
        <Link to="/about" className="[&.active]:font-bold">
          About
        </Link>
      </div> */
}
