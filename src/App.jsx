import React from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Create from "./components/Create";
import "./App.css";
import Read from "./components/Read";
import SingleUser from "./components/SingleUser";
import Update from "./components/Update";
const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Create />} />
          <Route exact path="/read" element={<Read />} />
          <Route exact path="/read/:id" element={<SingleUser/>} />
          <Route exact path="/edit/:id" element={<Update/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
