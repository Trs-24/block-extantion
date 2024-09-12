import {AppProvider} from "@/app/app-provider.tsx";
import {AppRouter} from "@/app/app-router.tsx";

export function App() {

  return (
    <AppProvider>
      <AppRouter />
    </AppProvider>
  )
}
