import React from "react";
import MainPage from "./pages/MainPage";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from "react-router-dom";
import Navigationbar from "./components/Navigationbar";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Forecast from "./pages/Forecast";
import "./App.css"


function App() {
  return (
    <div className="App">
      <Navigationbar />
      <div className="container">
        <Routes>
          <Route path="*" element={<Home/>} />
          <Route path="/location" element={<MainPage/>} />
          <Route path="/forecast" element={<Forecast/>} />

        </Routes> 
        </div>
        <Footer />


     
    </div>
  )
}

export default App;