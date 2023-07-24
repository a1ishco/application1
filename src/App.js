import React from "react";
import { lazy ,Suspense } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from "react-router-dom";
import Navigationbar from "./components/Navigationbar";
import Footer from "./components/Footer";
// import Home from "./pages/Home";
// import MainPage from "./pages/MainPage";
// import Forecast from "./pages/Forecast";
// import NotFound from "./pages/NotFound";
import LoadingPage from "./pages/LoadingPage";
import "./App.css"

const Home = lazy(()=> import("./pages/Home"))
const Forecast = lazy(()=> import("./pages/Forecast"))
const MainPage = lazy(()=> import("./pages/MainPage"))
const NotFound = lazy(()=> import("./pages/NotFound"))


function App() {
  return (
    <Suspense fallback={<LoadingPage/>}>
    
    <div className="App">
      <Navigationbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/location" element={<MainPage/>} />
          <Route path="/forecast" element={<Forecast/>} />
          <Route path="/load" element={<LoadingPage/>} />

          <Route path="*" element={<NotFound/>} />

        </Routes> 
        
        </div>
        <Footer />


     
    </div>
 </Suspense>)
}

export default App;