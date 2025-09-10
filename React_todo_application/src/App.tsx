import "./App.css";
import Page from "./pages/Page"
import { TodoProvider } from "./context/TodoContext";

function App() {
  return (
    <TodoProvider>
        <Page />
    </TodoProvider>
  );
}
export default App;
