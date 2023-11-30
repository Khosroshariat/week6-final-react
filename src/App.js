import React from "react";
import { Routes, Route } from 'react-router-dom';
import Home from "./pages/Home";
import Nav from "./components/Nav";
import Footer from './components/Footer'
import Movies from "./pages/Movies";

const App = () => {

  return (
    <div className="App">
      <Nav />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/movies" element={<Movies />} />
    </Routes>
    <Footer />
    </div>

  );
}

export default App;
