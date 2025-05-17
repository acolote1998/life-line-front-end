import { createRootRoute, Outlet } from "@tanstack/react-router";
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
      </div>
    </>
  ),
});
