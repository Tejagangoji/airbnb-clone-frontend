import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes, Outlet } from "react-router-dom";
import Home from "./pages/Home";
import Context from "./context/Context";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer/Footer";
import ProductDetails from "./components/ProductDetails/ProductDetails";

const Withnavandfooter = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

function App() {
  return (
    <BrowserRouter>
      <Context>
        <Routes>
          <Route exact path="/" element={<Withnavandfooter />}>
            <Route exact path="/" element={<Home />} />
          </Route>
          <Route exact path="/ProductDetails" element={<Withnavandfooter />}>
            <Route exact path="/ProductDetails" element={<ProductDetails />} />
          </Route>
        </Routes>
      </Context>
    </BrowserRouter>
  );
}

export default App;
