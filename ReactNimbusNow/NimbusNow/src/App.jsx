import Navbar from "./components/sections/Navbar"
import Sidebar from "./components/sections/Sidebar"


function App() {
  return (
    <>
      <div className="h-screen w-screen bg-background-light">
        <Navbar/>
        <Sidebar />
      </div>

    </>
  )
}

export default App
