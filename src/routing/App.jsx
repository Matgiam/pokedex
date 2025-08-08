import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router'
import Home from "../pages/Home"


import PokemonDetail from '../pages/PokemonDetail';

function App() { 

  return (
    <>
     <BrowserRouter basename=''>
     <Routes>
     <Route path='/' element = {<Home/>}/>
     <Route index element = {<Home/>}/>
     <Route path='/pokemondetail' element = {<PokemonDetail/>}/>
     </Routes>
     </BrowserRouter>
    </>
  );
}

export default App
