import { Outlet } from "react-router-dom";
import Footer from "./Components/Footer";
import Login from "./Components/Login";
import NavBar from "./Components/NavBar";

function App() {
  return (
    <>
      <div className="flex flex-col h-screen">
        <NavBar />
        <div className="flex-1 overflow-auto">
          <Outlet />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
