import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes, Outlet } from 'react-router-dom';
import Home from './pages/Home';
import Context from './context/Context';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Login from './pages/Login';
import Airbnbit from './pages/Airbnbit';
import Help from './pages/Help';
import Article from './pages/Article';
import Reservation from './pages/Reservation';

const Withnavandfooter = () => {
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
          <Route exact path='/host/homes' element={<Withnavandfooter />}>
            <Route exact path='/host/homes' element={<Airbnbit/>} />
          </Route>
          <Route exact path='/help' element={<Withnavandfooter />}>
            <Route exact path='/help' element={<Help/>} />
          </Route>
          <Route exact path='/help/article' element={<Withnavandfooter />}>
            <Route exact path='/help/article' element={<Article/>} />
          </Route>
          <Route exact path='/reservation' element={<Withnavandfooter />}>
            <Route exact path='/reservation' element={<Reservation />} />
          </Route>
          <Route exact path='/login' element={<Login />} />
        </Routes>
      </Context>
    </BrowserRouter>
  );
}

export default App;
