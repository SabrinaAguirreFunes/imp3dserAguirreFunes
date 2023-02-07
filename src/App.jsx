import { BrowserRouter, Navigate, Route, Routes  } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import NavBar from './componentes/NavBar/NavBar';
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './componentes/ItemDetailContainer/ItemDetailContainer';
import CartContainer from './componentes/CartContainer/CartContainer';
import ItemCount from './componentes/ItemCount/ItemCount';

function App() {
  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path='/' element={<ItemListContainer greeting='Bienvenidos a Imp3Dser. Estamos a su disposición para ayudarlo'/>}/>
        <Route path='/categoria/:idCategoria' element={<ItemListContainer greeting='Bienvenidos a Imp3Dser. Estamos a su disposición para ayudarlo'/>}/>
        <Route path='/detalle/:idProducto' element={ <ItemDetailContainer/> }/>
        <Route path='/cart' element={<CartContainer/>}/>
        <Route path='*' element={<Navigate to='/'/>}/>
      </Routes>
      <ItemCount/>
    </BrowserRouter>
  )
}

export default App
