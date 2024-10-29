import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./components/navbar/NavBar.jsx";
import OneProduct from "./components/oneProduct/OneProduct.jsx";
import Favourite from "./components/favourite/Favourite.jsx"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<NavBar />} />
        <Route path="/oneproduct/:id" element={<OneProduct />} />
        <Route path="/favourite" element={<Favourite />}/>
      </Routes>
    </Router>
  );
}

export default App;

