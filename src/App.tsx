import RoutesMiddleware from "./routes/middleware";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";


function App() {

  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <RoutesMiddleware />
    </QueryClientProvider>
  )
}

export default App