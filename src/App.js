// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Home from "./components/home/Home";
// import Favourite from "./components/favourite/Favourite";
// import NavBar from "./components/navbar/NavBar";
// import OneProduct from "./components/oneProduct/OneProduct";

// function App() {
//   return (
   
//     <Router>
//        <NavBar />
//       <div className="App">
        
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/favourite" element={<Favourite />} />
//           <Route path="/oneproduct/:id" element={<OneProduct />} />
//         </Routes>
//       </div>
//     </Router>
//   );
// }

// export default App;


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

