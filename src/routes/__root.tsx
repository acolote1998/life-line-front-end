import { createRootRoute, Outlet } from "@tanstack/react-router";
// import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import Header from "../components/Header";
import ButtonsContainer from "../components/ButtonsContainer";

export const Route = createRootRoute({
  component: () => (
    <>
      <div className="flex flex-col min-h-screen">
        <Header></Header>
        <div className="flex flex-col justify-center flex-1">
          <Outlet />
        </div>
        <ButtonsContainer></ButtonsContainer>
        {/* <TanStackRouterDevtools /> */}
      </div>
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
