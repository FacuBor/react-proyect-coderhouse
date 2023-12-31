import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Header } from './components/Header/Header';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import { Home } from './components/Home/Home';
import { Contact } from './components/Contact/Contact';
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';
import { Footer } from './components/Footer/Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import { Cartview } from './components/Cart/CartView';
import { ToastContainer } from "react-toastify"
import { CheckOut } from './components/CheckOut/CheckOut'
import { Error404 } from './components/Error404/Error404'

function App() {
        return (
              <CartProvider>
                  <BrowserRouter >
                      <ToastContainer/> 
                      <Header />
                      <Routes>
                        <Route path='/' element={ <Home />} />
                        <Route path='/itemlist' element={ <ItemListContainer /> } />
                        <Route path='/itemlist/:categoryId' element= { <ItemListContainer /> }/>
                        <Route path='/detail/:itemId' element= { <ItemDetailContainer/> } />
                        <Route path='/cart' element={ <Cartview/> } />
                        <Route path='/contact' element={ <Contact /> } />
                        <Route path='*' element={ <Error404/> } />
                        <Route path='/checkout' element={ <CheckOut/> }/>
                      </Routes>
                      <Footer/>
                  </BrowserRouter>
              </CartProvider>
        )
}
export default App;
