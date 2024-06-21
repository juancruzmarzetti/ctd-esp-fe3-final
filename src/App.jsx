
import { Outlet } from "react-router-dom";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";

function App() {
  return (
      <div className="App overflow-hidden flex flex-col min-h-screen">
          <Navbar/>
          <Outlet/>
          <Footer/>
      </div>
  );
}

export default App;
