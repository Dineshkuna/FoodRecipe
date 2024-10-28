import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./components/navbar/NavBar.jsx";
import OneProduct from "./components/oneProduct/OneProduct.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<NavBar />} />
        <Route path="/oneproduct/:id" element={<OneProduct />} />
      </Routes>
    </Router>
  );
}

export default App;

