
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";
import Favourite from "./components/favourite/Favourite";
import NavBar from "./components/navbar/NavBar";

function App() {
  return (
    <Router>
      <div className="App">
      <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favourite" element={<Favourite />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
