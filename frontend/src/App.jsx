import { Route, Routes } from "react-router-dom";
import Home from "@pages/Home";
import Admin from "@pages/Admin";
import Gallery from "@pages/Gallery";
import Essaismui from "@pages/Essaismui";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/essais" element={<Essaismui />} />
      </Routes>
    </div>
  );
}

export default App;
