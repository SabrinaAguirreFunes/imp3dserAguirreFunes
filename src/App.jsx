import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import NavBar from './componentes/NavBar/NavBar';
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer';

function App() {
  return (
    <>
      <NavBar/>
      <ItemListContainer greeting='Bienvenidos a Imp3Dser. Estamos a su disposición para ayudarlo'/>
    </>
  )
}

export default App
