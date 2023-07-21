import { Header } from './components/Header/Header'
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from './components/Home/Home';
import { Contact } from './components/Contact/Contact';
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer'


function App() {

  return (

      <BrowserRouter >
          <Header />

          <Routes>
            <Route path='/' element={ <Home />} />
            <Route path='/itemlist' element={ <ItemListContainer /> } />
            <Route path='/itemlist/:categoryId' element= { <ItemListContainer /> }/>
            <Route path='/detail/:itemId' element= { <ItemDetailContainer/> } />
            <Route path='/contact' element={ <Contact /> } />
            <Route path='*' element={ <h2 className='text-danger'>Pagina no encontrada</h2> } />
          </Routes>

          {/* footer */}

      </BrowserRouter>

  )
}

export default App
