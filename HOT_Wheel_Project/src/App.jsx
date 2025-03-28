import React from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {Layout} from "./components/Layout";
import {Home} from "./Pages/Home";
function App() {

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />}></Route>
          {/* <Route path="/about" element={<About />}></Route> */}
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App;
