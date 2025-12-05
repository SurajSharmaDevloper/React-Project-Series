import { ThemeProvider } from "./context/ThemeContext"
import AppRoute from "./routes/route"


function App() {
  return (
    <ThemeProvider>
      <AppRoute />
    </ThemeProvider>
  )
}

export default App
