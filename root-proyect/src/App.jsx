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
import { DarkModeProvider } from './context/DarkModeContext';
import { Cartview } from './components/Cart/CartView';
import { ToastContainer } from "react-toastify"

function App() {


        return (
          <DarkModeProvider>
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
                        <Route path='*' element={ <h2 className='text-danger'>Pagina no encontrada</h2> } />
                      </Routes>
                      
                      <Footer/>
                      
                      
                  </BrowserRouter>
                  
              </CartProvider>
          </DarkModeProvider>
        )
}
export default App
