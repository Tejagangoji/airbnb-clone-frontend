import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes, Outlet } from 'react-router-dom';
import Home from './pages/Home';
import Context from './context/Context';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const Withnavandfooter = () => {
  const [total, setitems] = [
    { id: "", photos: ["kkdhsg", "shkdgfb", "dahf"] },
    { id: 2, photos: ["kkdhsg", "shkdgfb", "dahf"] }
  ]
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  )
}

function App() {
  return (
    <BrowserRouter>
      <Context>
        <Routes>
          <Route exact path='/' element={<Withnavandfooter />}>
            <Route exact path='/' element={<Home />} />
          </Route>
        </Routes>
      </Context>
    </BrowserRouter>
  );
}

export default App;
