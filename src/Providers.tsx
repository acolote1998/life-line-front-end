import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { RouterProvider, createRouter } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";
import { ClerkProvider } from "@clerk/clerk-react";

const queryClient = new QueryClient();
const router = createRouter({ routeTree });
declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;
if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key");
}
export const Providers = () => {
  return (
    <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl="/">
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
        <ToastContainer autoClose={2500} />
      </QueryClientProvider>
    </ClerkProvider>
  );
};

export default Providers;
