import React from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {Layout} from "./components/Layout";
import {Home} from "./Pages/Home";
import About from "./Pages/About";
import Account from "./Pages/Account";
function App() {

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />}></Route>
          <Route path="/About" element={<About />}></Route>
          <Route path='/Account' element={<Account/>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App;
