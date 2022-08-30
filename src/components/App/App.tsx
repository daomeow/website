import Home from "../Home/Home";
import "./App.css";
import About from "../About/About";
import Projects from "../Projects/Projects";
import Photos from "../Photos/Photos";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from "react";

const App = () => {
  const [currentPage, setCurrentPage] = useState<string>("");

  const updatePage = (decision:string) => {
    setCurrentPage(decision)
  };

  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="about" element={<About/>}/>
          <Route path="projects" element={<Projects/>}/>
          <Route path="photos" element={<Photos/>}/>
        </Routes>
    </BrowserRouter>
  )
};
export default App;
