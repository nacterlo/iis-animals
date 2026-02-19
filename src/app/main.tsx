import { StrictMode } from "react"
import { createRoot } from "react-dom/client"

import "./index.css"

import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"
import { RouterProvider } from "react-router"
import { router } from "./router"
import { Toaster } from "@/shared/ui/kit/sonner"

const queryClient = new QueryClient()

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <Toaster closeButton richColors/>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </StrictMode>
)
