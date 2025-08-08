import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router'
import Home from "../pages/Home"

function App() { 

  return (
    <>
     <BrowserRouter>
     <Routes>
     <Route path='/' element = {<Home/>}/>
     <Route index element = {<Home/>}/>
     </Routes>
     </BrowserRouter>
    </>
  );
}

export default App
